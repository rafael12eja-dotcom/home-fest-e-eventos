// src/components/BlogListPage.tsx
import React, { useEffect, useMemo, useState } from "react";
import Header from "./Header";
import Footer from "./Footer";
import { getBlogPosts, BlogPost } from "../data/blogApi";

const BlogListPage: React.FC = () => {
  const [posts, setPosts] = useState<BlogPost[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    let mounted = true;
    (async () => {
      try {
        setLoading(true);
        const data = await getBlogPosts();
        if (mounted) setPosts(data || []);
      } catch (e: any) {
        if (mounted) setError("Não foi possível carregar os posts agora.");
      } finally {
        if (mounted) setLoading(false);
      }
    })();
    return () => {
      mounted = false;
    };
  }, []);

  const sortedPosts = useMemo(
    () => [...posts].sort((a, b) => (a.date < b.date ? 1 : -1)),
    [posts]
  );

  useEffect(() => {
    const ldBlog = {
      "@context": "https://schema.org",
      "@type": "Blog",
      "name": "Blog Home Fest & Eventos",
      "description":
        "Conteúdos práticos e inspiradores sobre festa em casa, buffet em domicílio, churrasco, brunch, aniversários e casamentos intimistas em Belo Horizonte.",
      "publisher": {
        "@type": "Organization",
        "name": "Home Fest & Eventos",
        "address": {
          "@type": "PostalAddress",
          "addressLocality": "Belo Horizonte",
          "addressRegion": "MG",
          "addressCountry": "BR",
        },
      },
    };

    const breadcrumb = {
      "@context": "https://schema.org",
      "@type": "BreadcrumbList",
      "itemListElement": [
        {
          "@type": "ListItem",
          "position": 1,
          "name": "Home",
          "item": "https://homefesteeventos.com.br/",
        },
        {
          "@type": "ListItem",
          "position": 2,
          "name": "Blog",
          "item": "https://homefesteeventos.com.br/blog",
        },
      ],
    };

    const existing = document.getElementById("blog-ld-json");
    if (existing) existing.remove();

    const script = document.createElement("script");
    script.id = "blog-ld-json";
    script.type = "application/ld+json";
    script.text = JSON.stringify([ldBlog, breadcrumb]);
    document.head.appendChild(script);

    return () => {
      script.remove();
    };
  }, []);

  return (
    <div className="min-h-screen bg-[#FFF7EE]">
      <Header />
      <main className="pt-28 max-w-6xl mx-auto px-4 pb-16">
        <header className="mb-10">
          <h1 className="text-3xl md:text-4xl font-serif font-semibold text-hf-brown mb-3">
            Blog Home Fest BH
          </h1>
          <p className="text-base md:text-lg text-[#5A3E2B] max-w-3xl leading-relaxed">
            Inspirações e guias completos sobre festa em casa, buffet em domicílio,
            churrasco, brunch, aniversários e casamentos intimistas em Belo Horizonte.
          </p>
        </header>

        {loading && <div className="text-[#5A3E2B]">Carregando posts...</div>}
        {error && !loading && <div className="text-[#5A3E2B]">{error}</div>}

        {!loading && !error && (
          <section className="columns-1 sm:columns-2 lg:columns-3 gap-6 [column-fill:_balance]">
            {sortedPosts.map((post) => (
              <article
                key={post.slug}
                className="break-inside-avoid mb-6 bg-white rounded-3xl shadow-[0_10px_30px_rgba(0,0,0,0.08)] overflow-hidden hover:shadow-[0_14px_34px_rgba(0,0,0,0.10)] transition"
              >
                <a href={`/blog/${post.slug}`} aria-label={`Ler artigo ${post.title}`}>
                  <div className="relative">
                    <img
                      src={post.cover}
                      alt={post.title}
                      className="w-full h-auto object-cover"
                      loading="lazy"
                    />
                    <span className="absolute top-3 left-3 bg-white/90 text-hf-brown text-xs font-semibold px-3 py-1 rounded-full">
                      {post.category}
                    </span>
                  </div>
                </a>

                <div className="p-5">
                  <div className="text-xs text-[#8A6A55] mb-2">
                    {post.date} • {post.readingTime}
                  </div>
                  <h2 className="text-lg md:text-xl font-serif font-semibold text-hf-brown leading-snug mb-2">
                    <a href={`/blog/${post.slug}`} className="hover:underline">
                      {post.title}
                    </a>
                  </h2>
                  <p className="text-sm md:text-base text-[#5A3E2B] leading-relaxed mb-4">
                    {post.description}
                  </p>
                  <a
                    href={`/blog/${post.slug}`}
                    className="inline-flex items-center gap-2 text-sm font-semibold text-hf-brown hover:opacity-80"
                  >
                    Ler artigo <span aria-hidden>→</span>
                  </a>
                </div>
              </article>
            ))}
          </section>
        )}
      </main>
      <Footer />
    </div>
  );
};

export default BlogListPage;
