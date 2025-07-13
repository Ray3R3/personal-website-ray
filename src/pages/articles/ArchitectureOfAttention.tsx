import { useEffect, useState } from 'react';
import article3Image from '../../assets/article-3.jpg';

const ArchitectureOfAttention = () => {
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
              January 22, 2024
            </time>
            <h1 className="text-4xl md:text-6xl font-light tracking-tight text-foreground mt-4 mb-8 leading-tight">
              The Architecture of Attention: How Digital Environments Shape Thought
            </h1>
            <div className="aspect-video mb-12 rounded-lg overflow-hidden">
              <img 
                src={article3Image} 
                alt="Digital network visualization"
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
              Why the design of our information environments matters more than the information itself—and what this means for how we think, create, and coordinate.
            </p>
            
            <p>We shape our tools, and thereafter they shape us. This isn't just a McLuhan-esque observation about technology—it's a fundamental principle about how the architecture of our attention determines the quality of our thought.</p>

            <p>Consider the difference between reading a book in a library versus scrolling through social media. Same brain, same person, radically different cognitive outcomes. The difference isn't in the content consumed but in the environmental architecture that frames the consumption.</p>

            <p>Digital environments are not neutral containers for information—they're active participants in the meaning-making process. The notification system that fragments your attention, the algorithm that curates your feed, the interface that presents information in bite-sized chunks: these are architectural choices that shape cognition.</p>

            <p>Most discussions about digital technology focus on content moderation or data privacy. These are important, but they miss the deeper point: the structure of information environments determines the structure of thought. We're not just consuming information differently—we're thinking differently.</p>

            <p>This has profound implications for how we coordinate as a society. Democratic discourse, scientific collaboration, cultural creation—all depend on shared cognitive frameworks. When information environments fragment attention and encourage reactive rather than reflective thinking, the quality of collective intelligence degrades.</p>

            <p>But here's the opportunity: if environments shape cognition, then intentionally designed environments can enhance it. The question isn't whether technology shapes thought—it's whether we'll be intentional about how it does so.</p>

            <p>The most important design decisions of the next decade won't be about user interface or user experience in the traditional sense. They'll be about cognitive architecture: How do we design information environments that support deep thinking? How do we create digital spaces that enhance rather than fragment attention?</p>

            <p>The architecture of attention is the infrastructure of thought. Getting it right is one of the most important challenges of our time.</p>
          </div>
        </div>
      </article>
    </div>
  );
};

export default ArchitectureOfAttention;