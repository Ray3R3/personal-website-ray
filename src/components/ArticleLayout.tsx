import { useEffect, useState, ReactNode } from 'react';

interface ArticleLayoutProps {
  title: string;
  date: string;
  excerpt: string;
  heroImage: string;
  heroAlt: string;
  children: ReactNode;
}

const ArticleLayout = ({ title, date, excerpt, heroImage, heroAlt, children }: ArticleLayoutProps) => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  return (
    <div className="min-h-screen bg-background text-foreground">
      {/* Navigation */}
      <nav className="absolute top-8 left-8 z-20">
        <a 
          href="/writing" 
          className="text-muted-foreground hover:text-foreground font-light tracking-wide transition-colors duration-200"
        >
          ← Back to Writing
        </a>
      </nav>

      {/* Article Header */}
      <section className="pt-32 pb-20 px-8">
        <div className="max-w-4xl mx-auto">
          <div className={`transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
            <time className="text-sm text-muted-foreground font-light mb-6 block">
              {date}
            </time>
            <h1 className="text-4xl md:text-6xl font-light tracking-tight text-foreground mb-8 leading-[1.1]">
              {title}
            </h1>
            <p className="text-xl md:text-2xl text-muted-foreground font-light leading-relaxed mb-12 max-w-3xl">
              {excerpt}
            </p>
            <div className="aspect-video mb-16 rounded-lg overflow-hidden shadow-2xl">
              <img 
                src={heroImage} 
                alt={heroAlt}
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Article Content */}
      <article className="px-8 pb-32">
        <div className="max-w-2xl mx-auto">
          <div className={`transition-all duration-1000 delay-300 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
            <div className="article-content space-y-8 text-foreground/90">
              {children}
            </div>
          </div>
        </div>
      </article>
    </div>
  );
};

export default ArticleLayout;