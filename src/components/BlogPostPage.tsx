// src/components/BlogPostPage.tsx
import React, { useEffect, useMemo, useState } from "react";
import Header from "./Header";
import Footer from "./Footer";
import { getBlogPostBySlug, BlogPost } from "../data/blogApi";
import ReactMarkdown from "react-markdown";

const BlogPostPage: React.FC = () => {
  const pathname =
    typeof window !== "undefined" ? window.location.pathname : "/blog/";

  const slug = useMemo(() => {
    const raw = pathname.replace("/blog/", "").replace(/\/$/, "");
    return decodeURIComponent(raw);
  }, [pathname]);

  const [post, setPost] = useState<BlogPost | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    let mounted = true;

    (async () => {
      setLoading(true);
      try {
        const data = await getBlogPostBySlug(slug);
        if (mounted) setPost(data || null);
      } finally {
        if (mounted) setLoading(false);
      }
    })();

    return () => {
      mounted = false;
    };
  }, [slug]);

  useEffect(() => {
    if (!post) return;

    const blogPosting = {
      "@context": "https://schema.org",
      "@type": "BlogPosting",
      headline: post.title,
      description: post.description,
      image: `https://homefesteeventos.com.br${post.cover}`,
      datePublished: post.date,
      dateModified: post.date,
      author: { "@type": "Organization", name: "Home Fest & Eventos" },
      publisher: {
        "@type": "Organization",
        name: "Home Fest & Eventos",
        logo: {
          "@type": "ImageObject",
          url: "https://homefesteeventos.com.br/logo.png",
        },
      },
      mainEntityOfPage: {
        "@type": "WebPage",
        "@id": `https://homefesteeventos.com.br/blog/${post.slug}`,
      },
    };

    const faq =
      post.faq?.length
        ? {
            "@context": "https://schema.org",
            "@type": "FAQPage",
            mainEntity: post.faq.map((f) => ({
              "@type": "Question",
              name: f.q,
              acceptedAnswer: { "@type": "Answer", text: f.a },
            })),
          }
        : null;

    const existing = document.getElementById("blogpost-ld-json");
    if (existing) existing.remove();

    const script = document.createElement("script");
    script.id = "blogpost-ld-json";
    script.type = "application/ld+json";
    script.text = JSON.stringify(faq ? [blogPosting, faq] : [blogPosting]);
    document.head.appendChild(script);

    return () => {
      script.remove();
    };
  }, [post]);

  if (loading) {
    return (
      <div className="min-h-screen bg-[#FFF7EE]">
        <Header />
        <main className="pt-28 max-w-3xl mx-auto px-4 py-12 text-[#5A3E2B]">
          Carregando post...
        </main>
        <Footer />
      </div>
    );
  }

  if (!post) {
    return (
      <div className="min-h-screen bg-[#FFF7EE]">
        <Header />
        <main className="pt-28 max-w-3xl mx-auto px-4 py-12 text-[#5A3E2B]">
          <h1 className="text-2xl font-serif font-semibold text-hf-brown">
            Post não encontrado
          </h1>
          <p className="mt-3 opacity-80">
            Esse artigo pode ter sido movido ou o link está incorreto.
          </p>
        </main>
        <Footer />
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-[#FFF7EE]">
      <Header />
      <article className="pt-28 max-w-3xl mx-auto px-4 pb-16">
        <header className="mb-8">
          <div className="text-xs text-[#8A6A55] mb-2">
            {post.date} • {post.readingTime} • {post.category}
          </div>
          <h1 className="text-3xl md:text-4xl font-serif font-semibold text-hf-brown leading-tight mb-4">
            {post.title}
          </h1>
          <p className="text-base md:text-lg text-[#5A3E2B] leading-relaxed">
            {post.description}
          </p>
        </header>

        <figure className="mb-8">
          <img
            src={post.cover}
            alt={post.title}
            className="w-full rounded-3xl shadow-[0_10px_30px_rgba(0,0,0,0.08)]"
            loading="eager"
            fetchPriority="high"
          />
        </figure>

        <div
          className="prose prose-neutral max-w-none prose-p:text-[#3E2B1F] prose-p:leading-[1.85] prose-p:text-[18px] prose-headings:font-serif prose-headings:text-hf-brown prose-h2:text-3xl prose-h2:mt-12 prose-h2:mb-6 prose-h3:text-2xl prose-h3:mt-10 prose-h3:mb-4 prose-ul:my-6 prose-li:my-2 prose-strong:text-hf-brown prose-img:rounded-3xl prose-img:shadow-lg"
        >
          <ReactMarkdown>{post.content}</ReactMarkdown>
        </div>

        {post.faq?.length ? (
          <section className="mt-12 bg-white rounded-3xl p-6 shadow-[0_8px_24px_rgba(0,0,0,0.06)]">
            <h2 className="text-xl font-serif font-semibold text-hf-brown mb-4">
              Perguntas frequentes
            </h2>
            <div className="space-y-4 text-[#5A3E2B]">
              {post.faq.map((f, i) => (
                <div key={i}>
                  <h3 className="font-semibold">{f.q}</h3>
                  <p className="mt-1 leading-relaxed">{f.a}</p>
                </div>
              ))}
            </div>
          </section>
        ) : null}

        <section className="mt-10 text-center">
          <a
            href="https://wa.me/5531999186245"
            className="inline-flex items-center justify-center rounded-full bg-hf-brown text-white font-semibold px-6 py-3 shadow hover:opacity-90 transition"
          >
            Fale com a Home Fest no WhatsApp
          </a>
        </section>
      </article>
      <Footer />
    </div>
  );
};

export default BlogPostPage;
