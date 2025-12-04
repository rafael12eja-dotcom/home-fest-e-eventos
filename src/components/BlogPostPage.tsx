import React, { useEffect, useState } from "react";
import Header from "./Header";
import Footer from "./Footer";
import { fetchBlogPost, BlogPost } from "../data/blogApi";

const BlogPostPage: React.FC = () => {
  const [post, setPost] = useState<BlogPost | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  const slug =
    typeof window !== "undefined"
      ? window.location.pathname.replace("/blog/", "")
      : "";

  useEffect(() => {
    let isMounted = true;

    async function load() {
      if (!slug) {
        setError("Artigo não encontrado.");
        setLoading(false);
        return;
      }

      try {
        setLoading(true);
        setError(null);
        const data = await fetchBlogPost(slug);
        if (!isMounted) return;

        if (!data) {
          setError("Artigo não encontrado.");
        } else {
          setPost(data);

          const baseTitle = "Blog Home Fest & Eventos";
          document.title = `${data.title} | ${baseTitle}`;

          const desc = data.excerpt?.slice(0, 155) || "";
          let metaDesc = document.querySelector(
            'meta[name="description"]'
          ) as HTMLMetaElement | null;
          if (!metaDesc) {
            metaDesc = document.createElement("meta");
            metaDesc.name = "description";
            document.head.appendChild(metaDesc);
          }
          metaDesc.content = desc;

          const canonicalHref = `https://homefesteeventos.com.br/blog/${data.slug}`;
          let canonical = document.querySelector(
            'link[rel="canonical"]'
          ) as HTMLLinkElement | null;
          if (!canonical) {
            canonical = document.createElement("link");
            canonical.rel = "canonical";
            document.head.appendChild(canonical);
          }
          canonical.href = canonicalHref;

          const oldScripts = document.querySelectorAll(
            'script[data-hf-schema="blogpost"]'
          );
          oldScripts.forEach((el) => el.parentNode?.removeChild(el));

          const ld = {
            "@context": "https://schema.org",
            "@type": "BlogPosting",
            "headline": data.title,
            "description": desc,
            "datePublished": data.date,
            "image": data.coverImage,
            "mainEntityOfPage": canonicalHref,
            "author": {
              "@type": "Organization",
              "name": "Home Fest & Eventos",
            },
          };

          const script = document.createElement("script");
          script.type = "application/ld+json";
          script.setAttribute("data-hf-schema", "blogpost");
          script.text = JSON.stringify(ld);
          document.head.appendChild(script);
        }
      } catch (err) {
        console.error("Erro ao carregar post do blog:", err);
        if (isMounted) {
          setError(
            "Não foi possível carregar este artigo agora. Tente novamente em alguns instantes."
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
  }, [slug]);

  const scrollToContato = () => {
    if (typeof window === "undefined") return;
    window.location.href = "/#contato";
  };

  return (
    <div className="min-h-screen bg-[#FFF8F0] text-neutral-900 flex flex-col">
      <Header />

      <main className="pt-28 md:pt-32 lg:pt-40 pb-16">
        <section className="max-w-4xl mx-auto px-6">
          {loading && (
            <p className="text-sm text-hf-brown/70">Carregando artigo...</p>
          )}

          {error && !loading && (
            <p className="text-sm text-red-700 bg-red-50 border border-red-100 rounded-xl px-4 py-3">
              {error}
            </p>
          )}

          {!loading && !error && post && (
            <>
              <div className="mb-6">
                <p className="text-[11px] uppercase tracking-[0.22em] text-hf-gold mb-2">
                  Blog Home Fest &amp; Eventos
                </p>
                <h1 className="text-3xl md:text-4xl font-serif font-bold text-hf-brown mb-3">
                  {post.title}
                </h1>
                <div className="flex items-center gap-3 text-[12px] text-hf-brown/70">
                  <span>{post.date}</span>
                  <span className="h-1 w-1 rounded-full bg-hf-gold/70" />
                  <span>{post.readingTime}</span>
                </div>
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

              {post.coverImage && (
                <div className="mb-6 rounded-3xl overflow-hidden border border-hf-gold/20">
                  <img
                    src={post.coverImage}
                    alt={post.coverAlt || post.title}
                    className="w-full h-auto object-cover"
                    loading="lazy"
                  />
                </div>
              )}

              <article
                className="prose prose-neutral max-w-none prose-h2:text-[1.4rem] prose-h2:mt-6 prose-h2:mb-3 prose-p:text-[15px] prose-p:leading-relaxed prose-p:text-hf-brown/90 prose-li:text-[15px] prose-li:leading-relaxed prose-a:text-hf-gold prose-strong:text-hf-brown prose-li:marker:text-hf-gold"
                dangerouslySetInnerHTML={{ __html: post.content }}
              />

              <div className="mt-10 pt-6 border-t border-hf-gold/20">
                <p className="text-sm text-hf-brown/80 mb-3">
                  Gostou deste conteúdo e quer transformar a sua festa em uma experiência completa?
                </p>
                <button
                  type="button"
                  onClick={scrollToContato}
                  className="inline-flex items-center justify-center rounded-full bg-hf-brown text-white text-sm font-semibold tracking-wide h-11 px-6 shadow-gold hover:bg-hf-gold-dark hover:shadow-gold-lg hover:-translate-y-0.5 transition-all duration-300"
                >
                  Solicitar orçamento com a Home Fest
                </button>
              </div>
            </>
          )}
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default BlogPostPage;
