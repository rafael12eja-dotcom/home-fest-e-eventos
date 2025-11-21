// src/data/blogApi.ts
// Blog híbrido: seed local (Markdown) + API opcional Railway (fallback seguro)

export type BlogFAQ = { q: string; a: string };

export type BlogPost = {
  slug: string;
  title: string;
  description: string;
  date: string;
  keywords: string[];
  cover: string;
  readingTime: string;
  category: string;
  faq: BlogFAQ[];
  content: string;
};

const API_URL = (import.meta.env.VITE_BLOG_API_URL as string | undefined)?.replace(/\/+$/, "");

// --- Front-matter parser (YAML simples) ---
function parseFrontMatter(raw: string) {
  const fmMatch = raw.match(/^---\s*([\s\S]*?)\s*---\s*/);
  if (!fmMatch) return { data: {}, content: raw };

  const fm = fmMatch[1];
  const content = raw.slice(fmMatch[0].length);
  const data: any = {};
  let currentKey: string | null = null;

  fm.split("\n").forEach((line) => {
    // lista YAML simples com "- item"
    if (/^\s*-\s+/.test(line) && currentKey) {
      data[currentKey] = data[currentKey] || [];
      data[currentKey].push(
        line.replace(/^\s*-\s+/, "").replace(/^["']|["']$/g, "")
      );
      return;
    }

    const idx = line.indexOf(":");
    if (idx === -1) return;

    const key = line.slice(0, idx).trim();
    const value = line.slice(idx + 1).trim();
    if (!key) return;

    currentKey = key;

    // arrays estilo JSON
    if (value.startsWith("[") && value.endsWith("]")) {
      try {
        data[key] = JSON.parse(value);
        return;
      } catch {}
    }

    data[key] = value.replace(/^["']|["']$/g, "");
  });

  return { data, content };
}

// --- Seed local (Vite 5 compat) ---
const localModules = import.meta.glob("./posts/*.md", {
  query: "?raw",
  import: "default",
  eager: true,
}) as Record<string, string>;

function loadLocalPosts(): BlogPost[] {
  return Object.entries(localModules).map(([path, raw]) => {
    const normalized = typeof raw === "string" ? raw : String(raw);
    const { data, content } = parseFrontMatter(normalized);

    const fileSlug =
      path.split("/").pop()?.replace(/^\d+-/, "").replace(/\.md$/, "") || "";

    return {
      slug: data.slug || fileSlug,
      title: data.title || "",
      description: data.description || data.excerpt || "",
      date: data.date || "",
      keywords: data.keywords || data.tags || [],
      cover:
        data.cover ||
        data.coverImage ||
        "/blog/festa-em-casa-bh-guia-completo.jpg",
      readingTime: data.readingTime || "6 min",
      category: data.category || "Festa em Casa",
      faq: data.faq || [],
      content: content.trim(),
    };
  });
}

// --- API Railway (opcional) ---
async function fetchApiPosts(): Promise<BlogPost[] | null> {
  if (!API_URL) return null;
  try {
    const res = await fetch(`${API_URL}/posts`, {
      headers: { "Content-Type": "application/json" },
    });
    if (!res.ok) return null;

    const json = await res.json();

    // Normaliza formatos possíveis da API:
    if (Array.isArray(json)) return json as BlogPost[];
    if (json && Array.isArray(json.posts)) return json.posts as BlogPost[];

    return null;
  } catch {
    return null;
  }
}

async function fetchApiPostBySlug(slug: string): Promise<BlogPost | null> {
  if (!API_URL) return null;
  try {
    const res = await fetch(`${API_URL}/posts/${slug}`);
    if (!res.ok) return null;
    return await res.json();
  } catch {
    return null;
  }
}

// --- Export esperado pelos componentes ---
export async function getBlogPosts(): Promise<BlogPost[]> {
  const api = await fetchApiPosts();
  if (api && api.length) return api;
  return loadLocalPosts();
}

export async function getBlogPostBySlug(slug: string): Promise<BlogPost | null> {
  const api = await fetchApiPostBySlug(slug);
  if (api) return api;
  const local = loadLocalPosts().find((p) => p.slug === slug);
  return local || null;
}
