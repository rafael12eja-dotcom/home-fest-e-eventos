import React, { useEffect, useState } from "react";
import Header from "./Header";
import Footer from "./Footer";
import { fetchBlogPosts, BlogPostSummary } from "../data/blogApi";

const BlogListPage: React.FC = () => {
  const [posts, setPosts] = useState<BlogPostSummary[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  const getCoverImage = (post: BlogPostSummary) => {
    if (post.coverImage && post.coverImage.trim() !== "") {
      return post.coverImage;
    }
    return "/og-cover.webp";
  };


  useEffect(() => {
    if (typeof document === "undefined" || typeof window === "undefined") return;

    const baseTitle = "Home Fest & Eventos";
    const pageTitle = `Blog de festas em casa | ${baseTitle}`;
    const description =
      "Blog da Home Fest & Eventos em Belo Horizonte: dicas para organizar festas em casa, cardápios completos, decoração e experiências acolhedoras para todas as idades.";

    // Title
    document.title = pageTitle;

    // Meta description
    let metaDesc = document.querySelector(
      'meta[name="description"]'
    ) as HTMLMetaElement | null;
    if (!metaDesc) {
      metaDesc = document.createElement("meta");
      metaDesc.name = "description";
      document.head.appendChild(metaDesc);
    }
    metaDesc.content = description;

    // Canonical
    const canonicalHref = "https://homefesteeventos.com.br/blog";
    let canonical = document.querySelector(
      'link[rel="canonical"]'
    ) as HTMLLinkElement | null;
    if (!canonical) {
      canonical = document.createElement("link");
      canonical.rel = "canonical";
      document.head.appendChild(canonical);
    }
    canonical.href = canonicalHref;

    // JSON-LD: Blog / CollectionPage
    const oldScripts = document.querySelectorAll(
      'script[data-hf-schema="bloglist"]'
    );
    oldScripts.forEach((el) => el.parentNode?.removeChild(el));

    const ld = {
      "@context": "https://schema.org",
      "@type": ["Blog", "CollectionPage"],
      url: canonicalHref,
      name: "Blog Home Fest & Eventos",
      description,
    };

    const script = document.createElement("script");
    script.type = "application/ld+json";
    script.setAttribute("data-hf-schema", "bloglist");
    script.text = JSON.stringify(ld);
    document.head.appendChild(script);
  }, []);

  useEffect(() => {
    let isMounted = true;

    async function load() {
      try {
        setLoading(true);
        setError(null);
        const data = await fetchBlogPosts();
        if (isMounted) {
          setPosts(data);
        }
      } catch (err) {
        console.error("Erro ao carregar posts do blog:", err);
        if (isMounted) {
          setError(
            "Não foi possível carregar os artigos do blog agora. Tente novamente em alguns instantes."
          );
        }
      } finally {
        if (isMounted) {
          setLoading(false);
        }
      }
    }

    load();

    return () => {
      isMounted = false;
    };
  }, []);

  const handleOpenPost = (slug: string) => {
    if (typeof window === "undefined") return;
    window.location.href = `/blog/${slug}`;
  };

  return (
    <div className="min-h-screen bg-[#FFF8F0] text-neutral-900 flex flex-col">
      <Header />

      <main className="pt-28 md:pt-32 lg:pt-40 pb-16">
        <section className="bg-hf-cream/80 border-b border-hf-gold/15">
          <div className="max-w-6xl mx-auto px-6 py-10 md:py-14">
            <p className="text-xs font-semibold tracking-[0.24em] uppercase text-hf-gold mb-3">
              Conteúdo para quem ama receber bem
            </p>
            <h1 className="text-3xl md:text-4xl font-serif font-bold text-hf-brown mb-4">
              Blog Home Fest &amp; Eventos
            </h1>
            <p className="text-[15px] md:text-base text-hf-brown/80 max-w-2xl">
              Dicas de buffet, ideias de festas em casa, inspirações de cardápio e orientações
              práticas para organizar eventos acolhedores em Belo Horizonte e região.
            </p>
          </div>
        </section>

        <section className="max-w-6xl mx-auto px-6 pt-8 pb-16">
          {loading && (
            <p className="text-sm text-hf-brown/70">
              Carregando artigos do blog...
            </p>
          )}

          {error && !loading && (
            <p className="text-sm text-red-700 bg-red-50 border border-red-100 rounded-xl px-4 py-3">
              {error}
            </p>
          )}

          {!loading && !error && posts.length === 0 && (
            <p className="text-sm text-hf-brown/70">
              Ainda não há artigos publicados no blog. Em breve, este espaço será atualizado com
              conteúdos especiais para você.
            </p>
          )}

          {!loading && !error && posts.length > 0 && (
            <div className="grid md:grid-cols-2 gap-6 lg:gap-8 mt-4">
              {posts.map((post) => (
                <article
                  key={post.slug}
                  className="group bg-white/90 border border-hf-gold/15 rounded-3xl overflow-hidden shadow-sm hover:shadow-[0_18px_45px_rgba(74,63,53,0.14)] hover:-translate-y-[2px] transition-all duration-300 flex flex-col cursor-pointer"
                  onClick={() => handleOpenPost(post.slug)}
                >
                  {post.coverImage && (
                    <div className="aspect-[16/9] w-full overflow-hidden">
                      <img
                        src={getCoverImage(post)}
                        alt={post.title}
                        className="w-full h-full object-cover group-hover:scale-[1.03] transition-transform duration-300"
                        loading="lazy"
                      />
                    </div>
                  )}
                  <div className="flex-1 flex flex-col px-5 py-4 md:px-6 md:py-5">
                    <div className="flex items-center gap-3 text-[11px] text-hf-brown/60 mb-2">
                      <span>{post.date}</span>
                      <span className="h-1 w-1 rounded-full bg-hf-gold/70" />
                      <span>{post.readingTime}</span>
                    </div>
                    <h2 className="text-[18px] md:text-[19px] font-serif font-semibold text-hf-brown mb-2">
                      {post.title}
                    </h2>
                    <p className="text-[14px] text-hf-brown/80 line-clamp-3">
                      {post.excerpt}
                    </p>
                    {post.tags && post.tags.length > 0 && (
                      <div className="flex flex-wrap gap-2 mt-3">
                        {post.tags.map((tag) => (
                          <span
                            key={tag}
                            className="text-[11px] uppercase tracking-[0.18em] bg-hf-cream/80 text-hf-brown px-2.5 py-1 rounded-full border border-hf-gold/20"
                          >
                            {tag}
                          </span>
                        ))}
                      </div>
                    )}
                  </div>
                </article>
              ))}
            </div>
          )}
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default BlogListPage;
