import { useEffect, useState } from 'react';
import article2Image from '../../assets/article-2.jpg';

const MediciModel = () => {
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
      <section className="pt-32 pb-16 px-8">
        <div className="max-w-4xl mx-auto">
          <div className={`transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
            <time className="text-sm text-muted-foreground font-light">
              February 8, 2024
            </time>
            <h1 className="text-4xl md:text-6xl font-light tracking-tight text-foreground mt-4 mb-8 leading-tight">
              The Medici Model: Venture Capital's Renaissance Precedent
            </h1>
            <div className="aspect-video mb-12 rounded-lg overflow-hidden">
              <img 
                src={article2Image} 
                alt="Renaissance Florence architecture"
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Article Content */}
      <article className="px-8 pb-20">
        <div className="max-w-3xl mx-auto prose prose-lg prose-invert">
          <div className={`transition-all duration-1000 delay-300 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
            <p className="text-xl text-muted-foreground mb-8 font-light leading-relaxed">
              How 15th-century Florentine patronage patterns predict modern venture capital dynamics—and why understanding historical precedents matters for modern allocators.
            </p>
            
            <p>The Medici family's approach to patronage in Renaissance Florence wasn't philanthropy—it was a systematic investment strategy that created network effects across domains. They understood something that modern venture capital has largely forgotten: breakthrough innovation happens at the intersection of disciplines, not within them.</p>

            <p>Cosimo de' Medici didn't just fund artists. He created a salon culture where mathematicians talked to architects, philosophers debated with engineers, and artists collaborated with inventors. The result wasn't just great art—it was technological revolution. Brunelleschi's dome, Leonardo's machines, Galileo's observations. Innovation at the intersection.</p>

            <p>Modern venture capital operates with portfolio theory derived from financial markets, but the Medici model suggests a different approach: creating dense networks of exceptional individuals and letting serendipity work at scale. Instead of betting on individual companies, bet on clusters of capability that reinforce each other.</p>

            <p>This is why geographic density matters in venture capital. It's not just about knowledge spillovers—it's about creating conditions for systematic serendipity. When Andreessen Horowitz talks about building community, they're unconsciously recreating Medici salon dynamics at scale.</p>

            <p>But here's what most people miss: the Medici weren't passive funders. They were active curators of talent and ideas. They created artificial scarcity around access to their networks, which increased the value of membership. They understood that exclusivity isn't elitism—it's network engineering.</p>

            <p>The parallel to modern venture is clear. The best firms aren't just capital allocators—they're network architects. They create systematic opportunities for their portfolio companies to collaborate, compete, and cross-pollinate. They understand that the value of the network grows exponentially with the quality of its nodes.</p>

            <p>This suggests a different model for institutional capital deployment: instead of diversifying across uncorrelated assets, concentrate on creating dense networks of correlated capabilities. Fund not just companies, but entire technological ecosystems. Build not just portfolio companies, but innovation communities.</p>

            <p>The Renaissance teaches us that the most transformative periods in history emerge from sustained investment in interconnected talent networks. The question for modern capital allocators isn't just which companies to fund—it's which communities to cultivate.</p>
          </div>
        </div>
      </article>
    </div>
  );
};

export default MediciModel;