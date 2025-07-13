import { useEffect, useState } from 'react';
import article1Image from '../../assets/article-1.jpg';

const BuildingUncomfortableSpaces = () => {
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
              March 15, 2024
            </time>
            <h1 className="text-4xl md:text-6xl font-light tracking-tight text-foreground mt-4 mb-8 leading-tight">
              On Building in Uncomfortable Spaces
            </h1>
            <div className="aspect-video mb-12 rounded-lg overflow-hidden">
              <img 
                src={article1Image} 
                alt="Modern tech workspace"
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
              Why the most defensible companies emerge from domains where capital intensity meets regulatory complexity, and others see barriers but I see moats.
            </p>
            
            <p>There's a pattern in breakthrough companies that most people miss: they emerge from spaces that feel uncomfortable to build in. Not uncomfortable because they're technically hard—Silicon Valley has plenty of those. Uncomfortable because they require patient capital, regulatory sophistication, and the ability to navigate institutional buyers who move slowly.</p>
            
            <p>Everyone wants to build software. It's clean, scalable, and the feedback loops are immediate. But the most defensible businesses I've seen exist at the intersection of atoms and bits, where the barriers to entry aren't just about better code—they're about better relationships with regulators, deeper understanding of compliance frameworks, and the patience to deploy capital over years, not months.</p>

            <p>Consider the defense technology renaissance. Companies like Palantir, Anduril, and Shield AI didn't succeed because they built better algorithms (though they did). They succeeded because they understood how to sell to institutions that had been buying the same solutions for decades. They built technology that worked within existing procurement processes while fundamentally transforming what was possible.</p>

            <p>This is what I call "Trojan Horse innovation"—appearing compatible with existing systems while quietly revolutionizing them from within. It requires a different kind of founder: one who can speak both languages, technical and institutional, and who sees regulatory complexity not as a bug but as a feature that keeps competition away.</p>

            <p>The opportunity space is vast. Financial infrastructure that central banks trust. Manufacturing processes that work in extreme environments. Energy systems that don't need subsidies. Transportation networks that can scale across continents. These aren't software problems—they're systems problems that happen to include software.</p>

            <p>The uncomfortable truth is that breakthrough innovation often looks boring from the outside. It's not disruption in the Valley sense—it's infiltration. Building what looks like a better version of something that already exists, but with architecture that enables completely new possibilities.</p>

            <p>The founders who succeed in these spaces share certain characteristics: they're comfortable with ambiguity, patient with long sales cycles, and sophisticated about regulatory environments. They understand that moats aren't just about network effects or data advantages—they're about institutional relationships and regulatory positioning.</p>

            <p>Most importantly, they recognize that the discomfort others feel in these spaces isn't a bug—it's the entire point. It's what keeps the competition away long enough to build something truly defensible.</p>
          </div>
        </div>
      </article>
    </div>
  );
};

export default BuildingUncomfortableSpaces;