import { useEffect, useState } from 'react';

const mockArticles = [
  {
    id: 1,
    title: "On Building in Uncomfortable Spaces",
    date: "March 15, 2024",
    excerpt: "Why the most defensible companies emerge from domains where capital intensity meets regulatory complexity, and others see barriers but I see moats.",
    slug: "building-uncomfortable-spaces"
  },
  {
    id: 2,
    title: "The Medici Model: Venture Capital's Renaissance Precedent",
    date: "February 8, 2024", 
    excerpt: "How 15th-century Florentine patronage patterns predict modern venture capital dynamics—and why understanding historical precedents matters for modern allocators.",
    slug: "medici-model-venture-capital"
  },
  {
    id: 3,
    title: "The Architecture of Attention: How Digital Environments Shape Thought",
    date: "January 22, 2024",
    excerpt: "Why the design of our information environments matters more than the information itself—and what this means for how we think, create, and coordinate.",
    slug: "architecture-of-attention"
  },
];

const Writing = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  return (
    <div className="min-h-screen bg-background text-foreground">
      {/* Navigation */}
      <nav className="absolute top-8 left-8 z-20">
        <a 
          href="/" 
          className="text-muted-foreground hover:text-foreground font-light tracking-wide transition-colors duration-200"
        >
          ← Back
        </a>
      </nav>

      {/* Header */}
      <section className="pt-32 pb-16 px-8">
        <div className="max-w-3xl mx-auto">
          <h1 className={`text-6xl md:text-7xl font-light tracking-tight text-foreground mb-6 transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
            Writing
          </h1>
          <p className={`text-lg text-muted-foreground font-light leading-relaxed transition-all duration-1000 delay-200 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
            Essays on pattern recognition across domains—from institutional dynamics and systematic forces to cultural analysis and the architecture of human coordination.
          </p>
        </div>
      </section>

      {/* Articles */}
      <section className="px-8 pb-20">
        <div className="max-w-3xl mx-auto space-y-16">
          {mockArticles.map((article, index) => (
            <article 
              key={article.id}
              className={`transition-all duration-1000 delay-${300 + index * 200} ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}
            >
              <div className="border-l-2 border-muted pl-8 hover:border-foreground/30 transition-colors duration-300">
                <time className="text-sm text-muted-foreground font-light">
                  {article.date}
                </time>
                <h2 className="text-2xl md:text-3xl font-light tracking-wide text-foreground mt-2 mb-4 leading-tight">
                  {article.title}
                </h2>
                <p className="text-muted-foreground leading-relaxed mb-6 text-lg font-light">
                  {article.excerpt}
                </p>
                <a 
                  href={`/writing/${article.slug}`}
                  className="text-foreground/80 hover:text-foreground font-light tracking-wide transition-colors duration-200 group"
                >
                  Read full article
                  <span className="inline-block ml-2 transition-transform duration-200 group-hover:translate-x-1">→</span>
                </a>
              </div>
            </article>
          ))}
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-border/30 py-12 px-8">
        <div className="max-w-3xl mx-auto text-center">
          <p className="text-muted-foreground font-light">
            More writing on systematic forces, institutional deployment patterns, and outlier talent identification.
          </p>
        </div>
      </footer>
    </div>
  );
};

export default Writing;