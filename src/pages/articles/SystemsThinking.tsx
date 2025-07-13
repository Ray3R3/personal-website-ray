import { useEffect, useState } from 'react';

const SystemsThinking = () => {
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
              November 28, 2023
            </time>
            <h1 className="text-4xl md:text-6xl font-light tracking-tight text-foreground mt-4 mb-8 leading-tight">
              Systems Thinking and Emergent Behavior
            </h1>
            <div className="aspect-video mb-12 rounded-lg overflow-hidden">
              <img 
                src="https://images.unsplash.com/photo-1501594907352-04cda38ebc29" 
                alt="Complex network patterns"
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
              Why focusing on individual components misses the point entirely, and how understanding emergence helps predict everything from market crashes to cultural movements.
            </p>
            
            <p>The most important phenomena in complex systems can't be understood by studying their parts in isolation. Traffic jams, market crashes, viral trends, organizational dysfunction—these emerge from the interactions between components, not from the components themselves.</p>

            <p>Traditional reductionist thinking trains us to look for root causes and linear relationships. But complex systems operate on different principles. Small changes can cascade into massive effects. Feedback loops create self-reinforcing cycles. Emergence produces outcomes that no individual actor intended or predicted.</p>

            <div className="aspect-video mb-8 rounded-lg overflow-hidden">
              <img 
                src="https://images.unsplash.com/photo-1518770660439-4636190af475" 
                alt="Circuit board network"
                className="w-full h-full object-cover"
              />
            </div>

            <p>Consider how cultures change. It's not that a single idea suddenly convinces everyone to think differently. Instead, ideas spread through networks, interact with existing beliefs, get modified and amplified, until they reach tipping points where the entire system reorganizes around new patterns.</p>

            <p>The same dynamics operate in markets, organizations, and technological systems. Understanding emergence means recognizing that the behavior of the whole is fundamentally different from the sum of its parts. You can't predict a stock market crash by analyzing individual companies, just as you can't predict cultural shifts by studying individual people.</p>

            <p>This has profound implications for anyone trying to create change. Instead of focusing on controlling individual components, systems thinkers focus on understanding patterns, feedback loops, and leverage points—places where small changes can produce large effects throughout the system.</p>

            <div className="aspect-video mb-8 rounded-lg overflow-hidden">
              <img 
                src="https://images.unsplash.com/photo-1509316975850-ff9c5deb0cd9" 
                alt="Forest ecosystem"
                className="w-full h-full object-cover"
              />
            </div>

            <p>The challenge is that our institutions—governments, corporations, educational systems—are designed around reductionist thinking. They optimize for predictability and control, but complex systems are inherently unpredictable and uncontrollable. The solution isn't more control—it's better adaptation.</p>

            <p>Systems thinking is ultimately about humility. It's about recognizing that we're part of systems larger than ourselves, that our actions have consequences we can't foresee, and that the most important changes often happen through emergence rather than intention.</p>
          </div>
        </div>
      </article>
    </div>
  );
};

export default SystemsThinking;