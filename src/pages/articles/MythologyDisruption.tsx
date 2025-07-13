import { useEffect, useState } from 'react';

const MythologyDisruption = () => {
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
              October 15, 2023
            </time>
            <h1 className="text-4xl md:text-6xl font-light tracking-tight text-foreground mt-4 mb-8 leading-tight">
              The Mythology of Disruption
            </h1>
            <div className="aspect-video mb-12 rounded-lg overflow-hidden">
              <img 
                src="https://images.unsplash.com/photo-1485833077593-4278bba3f11f" 
                alt="Traditional meets modern"
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
              How Silicon Valley's favorite narrative obscures the real mechanisms of technological change—and why most 'disruption' is actually institutional evolution.
            </p>
            
            <p>The mythology of disruption tells a seductive story: young entrepreneurs with revolutionary ideas overthrow established industries through pure technological innovation. It's David versus Goliath for the digital age, and it's largely fiction.</p>

            <p>Real technological change is messier, slower, and more institutional than the disruption narrative suggests. Most successful "disruptions" aren't about destroying existing systems—they're about finding ways to work within regulatory frameworks, supply chains, and customer expectations while gradually shifting them in new directions.</p>

            <div className="aspect-video mb-8 rounded-lg overflow-hidden">
              <img 
                src="https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d" 
                alt="Person coding on laptop"
                className="w-full h-full object-cover"
              />
            </div>

            <p>Consider the companies that actually transformed industries. Amazon didn't disrupt retail by ignoring logistics—they became the world's most sophisticated logistics company. Tesla didn't disrupt automotive by avoiding manufacturing—they reimagined what manufacturing could be. Netflix didn't disrupt entertainment by ignoring content—they became a content creation powerhouse.</p>

            <p>The disruption mythology is appealing because it suggests that technological superiority alone determines market outcomes. But technology is only one factor in complex institutional ecosystems. Regulatory approval, supply chain relationships, customer trust, talent networks—these matter as much as code quality or algorithm performance.</p>

            <p>This has important implications for founders and investors. The most defensible technology companies aren't those that ignore existing institutions—they're those that understand institutions well enough to build bridges between old and new systems. They create technological solutions that make existing stakeholders more powerful, not irrelevant.</p>

            <div className="aspect-video mb-8 rounded-lg overflow-hidden">
              <img 
                src="https://images.unsplash.com/photo-1504868584819-f8e8b4b6d7e3" 
                alt="Traditional library meets modern"
                className="w-full h-full object-cover"
              />
            </div>

            <p>The mythology of disruption also obscures the role of timing and luck in technological change. Many "revolutionary" technologies have been available for decades before finding market success. The iPhone wasn't the first smartphone, Google wasn't the first search engine, Facebook wasn't the first social network. They succeeded because they arrived at the right institutional moment.</p>

            <p>Understanding this changes how we think about innovation strategy. Instead of asking "How can we disrupt this industry?" the better question is "How can we create technology that makes existing institutions more effective while opening new possibilities for the future?"</p>
          </div>
        </div>
      </article>
    </div>
  );
};

export default MythologyDisruption;