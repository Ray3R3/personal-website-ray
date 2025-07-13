import { useEffect, useState } from 'react';

const mockArticles = [
  {
    id: 1,
    title: "On Building in Uncomfortable Spaces",
    date: "March 15, 2024",
    excerpt: "Why the most defensible companies emerge from domains where capital intensity meets regulatory complexity, and others see barriers but I see moats.",
    content: `
      <p>There's a pattern in breakthrough companies that most people miss: they emerge from spaces that feel uncomfortable to build in. Not uncomfortable because they're technically hard—Silicon Valley has plenty of those. Uncomfortable because they require patient capital, regulatory sophistication, and the ability to navigate institutional buyers who move slowly.</p>
      
      <p>Everyone wants to build software. It's clean, scalable, and the feedback loops are immediate. But the most defensible businesses I've seen exist at the intersection of atoms and bits, where the barriers to entry aren't just about better code—they're about better relationships with regulators, deeper understanding of compliance frameworks, and the patience to deploy capital over years, not months.</p>

      <p>Consider the defense technology renaissance. Companies like Palantir, Anduril, and Shield AI didn't succeed because they built better algorithms (though they did). They succeeded because they understood how to sell to institutions that had been buying the same solutions for decades. They built technology that worked within existing procurement processes while fundamentally transforming what was possible.</p>

      <p>This is what I call "Trojan Horse innovation"—appearing compatible with existing systems while quietly revolutionizing them from within. It requires a different kind of founder: one who can speak both languages, technical and institutional, and who sees regulatory complexity not as a bug but as a feature that keeps competition away.</p>

      <p>The opportunity space is vast. Financial infrastructure that central banks trust. Manufacturing processes that work in extreme environments. Energy systems that don't need subsidies. Transportation networks that can scale across continents. These aren't software problems—they're systems problems that happen to include software.</p>

      <p>The uncomfortable truth is that breakthrough innovation often looks boring from the outside. It's not disruption in the Valley sense—it's infiltration. Building what looks like a better version of something that already exists, but with architecture that enables completely new possibilities.</p>
    `,
  },
  {
    id: 2,
    title: "The Medici Model: Venture Capital's Renaissance Precedent",
    date: "February 8, 2024", 
    excerpt: "How 15th-century Florentine patronage patterns predict modern venture capital dynamics—and why understanding historical precedents matters for modern allocators.",
    content: `
      <p>The Medici family's approach to patronage in Renaissance Florence wasn't philanthropy—it was a systematic investment strategy that created network effects across domains. They understood something that modern venture capital has largely forgotten: breakthrough innovation happens at the intersection of disciplines, not within them.</p>

      <p>Cosimo de' Medici didn't just fund artists. He created a salon culture where mathematicians talked to architects, philosophers debated with engineers, and artists collaborated with inventors. The result wasn't just great art—it was technological revolution. Brunelleschi's dome, Leonardo's machines, Galileo's observations. Innovation at the intersection.</p>

      <p>Modern venture capital operates with portfolio theory derived from financial markets, but the Medici model suggests a different approach: creating dense networks of exceptional individuals and letting serendipity work at scale. Instead of betting on individual companies, bet on clusters of capability that reinforce each other.</p>

      <p>This is why geographic density matters in venture capital. It's not just about knowledge spillovers—it's about creating conditions for systematic serendipity. When Andreessen Horowitz talks about building community, they're unconsciously recreating Medici salon dynamics at scale.</p>

      <p>But here's what most people miss: the Medici weren't passive funders. They were active curators of talent and ideas. They created artificial scarcity around access to their networks, which increased the value of membership. They understood that exclusivity isn't elitism—it's network engineering.</p>

      <p>The parallel to modern venture is clear. The best firms aren't just capital allocators—they're network architects. They create systematic opportunities for their portfolio companies to collaborate, compete, and cross-pollinate. They understand that the value of the network grows exponentially with the quality of its nodes.</p>

      <p>This suggests a different model for institutional capital deployment: instead of diversifying across uncorrelated assets, concentrate on creating dense networks of correlated capabilities. Fund not just companies, but entire technological ecosystems. Build not just portfolio companies, but innovation communities.</p>
    `,
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
            Thoughts on systematic forces behind breakthrough companies, outlier talent identification, and why institutional deployment patterns matter more than technology.
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
                <button className="text-foreground/80 hover:text-foreground font-light tracking-wide transition-colors duration-200 group">
                  Read full article
                  <span className="inline-block ml-2 transition-transform duration-200 group-hover:translate-x-1">→</span>
                </button>
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