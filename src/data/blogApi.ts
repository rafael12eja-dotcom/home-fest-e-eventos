export type BlogPostSummary = {
  slug: string;
  title: string;
  excerpt: string;
  date: string;
  readingTime: string;
  tags: string[];
  coverImage: string;
};

export type BlogPost = BlogPostSummary & {
  content: string;
  coverAlt?: string;
};

const API_URL = ""; // Removido para desativar a busca por API
const API_KEY = ""; // Removido para desativar a busca por API

/**
 * Busca todos os posts do blog na API oficial do Railway.
 * Retorna sempre um array (vazio em caso de erro controlado).
 */
export async function getAllPosts(): Promise<BlogPostSummary[]> {
  if (!API_URL) {
    // Se não houver API, retorna um array vazio para não travar
    return [];
  }

  try {
    const res = await fetch(`${API_URL}/posts`, {
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
        "x-api-key": API_KEY,
      },
    });

    if (!res.ok) {
      console.error(
        `[blogApi] Erro ao buscar posts do blog: ${res.status} ${res.statusText}`
      );
      return [];
    }

    const data = (await res.json()) as BlogPostSummary[];
    return Array.isArray(data) ? data : [];
  } catch (error) {
    console.error("[blogApi] Erro de rede ao buscar posts do blog:", error);
    return [];
  }
}

/**
 * Busca um post específico pelo slug.
 * Retorna null em caso de 404.
 */
export async function getPostBySlug(
  slug: string
): Promise<BlogPost | null> {
  if (!API_URL) {
    // Se não houver API, retorna null para não travar
    return null;
  }

  if (!slug) {
    console.warn("[blogApi] slug vazio ao buscar post");
    return null;
  }

  try {
    const res = await fetch(`${API_URL}/posts/${encodeURIComponent(slug)}`, {
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
        "x-api-key": API_KEY,
      },
    });

    if (res.status === 404) {
      return null;
    }

    if (!res.ok) {
      console.error(
        `[blogApi] Erro ao buscar post do blog: ${res.status} ${res.statusText}`
      );
      return null;
    }

    const data = (await res.json()) as BlogPost;
    return data;
  } catch (error) {
    console.error("[blogApi] Erro de rede ao buscar post do blog:", error);
    return null;
  }
}

/**
 * Mantém compatibilidade com a API anterior usada nas páginas.
 * Pode ser usada normalmente em BlogListPage.
 */
export async function fetchBlogPosts(): Promise<BlogPostSummary[]> {
  return getAllPosts();
}

/**
 * Mantém compatibilidade com a API anterior usada em BlogPostPage.
 */
export async function fetchBlogPost(slug: string): Promise<BlogPost | null> {
  return getPostBySlug(slug);
}
