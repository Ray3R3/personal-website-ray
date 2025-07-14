
import { useEffect, useState } from 'react';
import { useTypingAnimation } from '../hooks/useTypingAnimation';
import SectionCard from '../components/SectionCard';
import PersonalityBullet from '../components/PersonalityBullet';
import AnimatedParticles from '../components/AnimatedParticles';

const QuoteTyping = () => {
  const quoteText = "Edwin Land of Polaroid talked about the intersection of the humanities and science. I like that intersection. There's something magical about that place.";
  const citationText = "— Walter Isaacson, Steve Jobs";
  const { displayText: quoteDisplay, isComplete: quoteComplete } = useTypingAnimation(quoteText, 30);
  const { displayText: citationDisplay } = useTypingAnimation(quoteComplete ? citationText : "", 30);
  
  return (
    <div className="max-w-3xl mb-16">
      <blockquote className="text-xl md:text-2xl text-foreground/90 italic leading-relaxed font-light text-left">
        "{quoteDisplay}"
      </blockquote>
      <cite className="block text-muted-foreground mt-4 text-base font-normal not-italic text-left">
        {citationDisplay}
      </cite>
    </div>
  );
};

const Index = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  return (
    <div className="min-h-screen bg-background text-foreground relative overflow-hidden">
      {/* Animated particles background */}
      <AnimatedParticles />
      
      {/* Grain texture overlay */}
      <div 
        className="absolute inset-0 opacity-[var(--grain-opacity)] pointer-events-none animate-grain"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.65' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E")`,
        }}
      />

      {/* Navigation */}
      <nav className="absolute top-8 right-8 z-20 flex gap-4">
        <a 
          href="/writing" 
          className="relative text-white font-light tracking-wide transition-all duration-300 hover:text-white/80 after:content-[''] after:absolute after:w-full after:h-0.5 after:bg-white after:bottom-0 after:left-0 after:scale-x-0 after:transition-transform after:duration-300 hover:after:scale-x-100 bg-black/40 backdrop-blur-sm px-4 py-2 rounded-full"
        >
          Writing
        </a>
        <a 
          href="/library" 
          className="relative text-white font-light tracking-wide transition-all duration-300 hover:text-white/80 after:content-[''] after:absolute after:w-full after:h-0.5 after:bg-white after:bottom-0 after:left-0 after:scale-x-0 after:transition-transform after:duration-300 hover:after:scale-x-100 bg-black/40 backdrop-blur-sm px-4 py-2 rounded-full"
        >
          Library
        </a>
      </nav>

      {/* Hero Section */}
      <section className="relative h-[80vh] flex items-center justify-start overflow-hidden">
        <div 
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{
            backgroundImage: `url(/lovable-uploads/c65d1bd8-95cc-494c-9a80-6488e80204de.png)`,
          }}
        />
        <div className="absolute inset-0 bg-gradient-to-r from-background/85 via-background/50 to-background/15" />
        <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-background via-background/80 to-transparent" />
        
        <div className="relative z-10 px-8 max-w-2xl ml-8 md:ml-16">
          <h1 className="text-5xl md:text-7xl font-light tracking-tight text-foreground mb-4 leading-tight">
            Ray Erewunmi
          </h1>
          <p className="text-lg md:text-xl text-muted-foreground mb-8 font-light tracking-wide">
            builder | philosopher | investor
          </p>
          
          {/* Quote with Typing Effect */}
          <div className="mb-8">
            <QuoteTyping />
          </div>

          {/* Refined Intro */}
          <div className="text-base md:text-lg text-muted-foreground leading-relaxed">
            I study how exceptional people build things that matter. Most interesting problems exist at the intersection of multiple domains—where technology meets institutions, where capital meets complexity, where new models challenge old systems.
          </div>
          </div>
          
          {/* Image Credit */}
          <div className="absolute bottom-4 right-4 text-xs text-muted-foreground/50">
            Megan Gafford - Artist Statement: Chesterton's Fence
          </div>
      </section>
      
      <div className="max-w-4xl mx-auto px-8 py-20 md:py-32 relative z-10">

        {/* Previously Section */}
        <section className={`mb-24 transition-all duration-1000 delay-200 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
          <div className="flex items-center gap-4 mb-10">
            <div className="w-3 h-3 rounded-full bg-blue-500"></div>
            <h2 className="text-3xl font-light tracking-wide text-foreground">previously</h2>
            <div className="flex-1 h-px bg-gradient-to-r from-blue-500/50 to-transparent"></div>
          </div>
          <SectionCard accent="blue">
            <div className="space-y-6 text-muted-foreground">
              <PersonalityBullet hoverColor="hsl(211, 100%, 62%)">
                Emerging technology investments at <a href="https://www.auctorgroup.com/" target="_blank" rel="noopener noreferrer" className="text-foreground font-medium hover:text-blue-400 transition-colors duration-200">Auctor</a>
              </PersonalityBullet>
              <PersonalityBullet hoverColor="hsl(211, 100%, 62%)">
                Defense private equity at <a href="https://www.stellexcapital.com/" target="_blank" rel="noopener noreferrer" className="text-foreground font-medium hover:text-blue-400 transition-colors duration-200">Stellex</a>
              </PersonalityBullet>
              <PersonalityBullet hoverColor="hsl(211, 100%, 62%)">
                Technology research at <a href="https://www.ubs.com/ch/en/microsites/ubs-acquisition-of-credit-suisse.html" target="_blank" rel="noopener noreferrer" className="text-foreground font-medium hover:text-blue-400 transition-colors duration-200">Credit Suisse</a> (top 0.5% globally in their coding challenge)
              </PersonalityBullet>
              <PersonalityBullet hoverColor="hsl(211, 100%, 62%)">
                Credit Suisse Scholar (full academic scholarship)
              </PersonalityBullet>
              <PersonalityBullet hoverColor="hsl(211, 100%, 62%)">
                Law, Art History & Philosophy at <a href="https://www.cam.ac.uk/" target="_blank" rel="noopener noreferrer" className="text-foreground font-medium hover:text-blue-400 transition-colors duration-200">Cambridge</a> (dropped out to build)
              </PersonalityBullet>
            </div>
          </SectionCard>
        </section>

        {/* Finding, Funding and Building Section */}
        <section className={`mb-24 transition-all duration-1000 delay-400 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
          <div className="flex items-center gap-4 mb-10">
            <div className="w-3 h-3 rounded-full bg-orange-500"></div>
            <h2 className="text-3xl font-light tracking-wide text-foreground">finding, funding and building</h2>
            <div className="flex-1 h-px bg-gradient-to-r from-orange-500/50 to-transparent"></div>
          </div>
          <SectionCard accent="orange">
            <p className="text-muted-foreground mb-10 text-lg leading-relaxed">
              I look for exceptional people building in domains where capital intensity, technological risk, and regulatory complexity create natural barriers. These aren't bugs—they're features that keep competition away:
            </p>
            
            <div className="space-y-10 text-muted-foreground">
              <div>
                <h3 className="font-medium text-foreground mb-4 text-xl">Critical Infrastructure</h3>
                <p className="text-muted-foreground leading-relaxed">
                  Systems that can't fail. The unglamorous backbone that everything else depends on—but built with modern technology and fresh thinking.
                </p>
              </div>
              
              <div>
                <h3 className="font-medium text-foreground mb-4 text-xl">Novel Interfaces</h3>
                <p className="text-muted-foreground leading-relaxed">
                  The bridges between biological and artificial systems. Human-computer interaction that actually feels human.
                </p>
              </div>
              
              <div>
                <h3 className="font-medium text-foreground mb-4 text-xl">Physical Assets</h3>
                <p className="text-muted-foreground leading-relaxed">
                  Changing how atoms move. Manufacturing, logistics, energy—the real world stuff that software people usually ignore.
                </p>
              </div>
            </div>

            <SectionCard className="mt-10 border-l-4 border-orange-500 bg-orange-500/5">
              <p className="text-muted-foreground leading-relaxed">
                <span className="font-medium text-foreground">Specifically:</span> Marine and aerospace technology with dual-use applications, brain-computer interfaces that work, advanced manufacturing in extreme environments, financial infrastructure that central banks trust, energy systems that don't need subsidies to make sense.
              </p>
            </SectionCard>
          </SectionCard>
        </section>

        {/* What's On My Mind Section */}
        <section className={`mb-24 transition-all duration-1000 delay-600 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
          <div className="flex items-center gap-4 mb-10">
            <div className="w-3 h-3 rounded-full bg-purple-500"></div>
            <h2 className="text-3xl font-light tracking-wide text-foreground">what's on my mind</h2>
            <div className="flex-1 h-px bg-gradient-to-r from-purple-500/50 to-transparent"></div>
          </div>
          <SectionCard accent="purple">
            <p className="text-muted-foreground mb-10 text-lg leading-relaxed">
              How breakthrough adoption follows historical patterns, why exceptional individuals gravitate toward certain domains, how innovation spreads despite entrenched systems. The systematic forces behind both outlier founders and generation-defining companies:
            </p>
            
            <div className="grid gap-5">
              <PersonalityBullet hoverColor="hsl(259, 44%, 54%)">Identifying outlier talent before everyone else notices</PersonalityBullet>
              <PersonalityBullet hoverColor="hsl(259, 44%, 54%)">Frameworks for monopoly formation (the good kind)</PersonalityBullet>
              <PersonalityBullet hoverColor="hsl(259, 44%, 54%)">Why institutional deployment patterns matter more than technology</PersonalityBullet>
              <PersonalityBullet hoverColor="hsl(259, 44%, 54%)">Cognitive biases in adoption cycles—and how to exploit them</PersonalityBullet>
              <PersonalityBullet hoverColor="hsl(259, 44%, 54%)">Historical precedents in technology waves</PersonalityBullet>
              <PersonalityBullet hoverColor="hsl(259, 44%, 54%)">Macroeconomic forces that create innovation windows</PersonalityBullet>
            </div>
          </SectionCard>
        </section>

        {/* When Not Thinking About Monopolies Section */}
        <section className={`mb-24 transition-all duration-1000 delay-800 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
          <div className="flex items-center gap-4 mb-10">
            <div className="w-3 h-3 rounded-full bg-purple-400"></div>
            <h2 className="text-3xl font-light tracking-wide text-foreground">when not thinking about monopolies</h2>
            <div className="flex-1 h-px bg-gradient-to-r from-purple-400/50 to-transparent"></div>
          </div>
          <SectionCard accent="purple">
            <div className="grid gap-5">
              <PersonalityBullet hoverColor="hsl(259, 44%, 54%)">
                Tracing how the Medici patronage system was basically the first VC model
              </PersonalityBullet>
              <PersonalityBullet hoverColor="hsl(259, 44%, 54%)">
                Arguing that Rothko's color field paintings are systematic studies in visual cognition (fight me)
              </PersonalityBullet>
              <PersonalityBullet hoverColor="hsl(259, 44%, 54%)">
                Reading sci-fi that predicted today's regulatory battles—Asimov's Foundation series → EU AI Act
              </PersonalityBullet>
              <PersonalityBullet hoverColor="hsl(259, 44%, 54%)">
                Wondering why people think current institutional power structures are "new" when they follow 500-year-old patterns
              </PersonalityBullet>
            </div>
          </SectionCard>
        </section>

        {/* Background Section */}
        <section className={`mb-24 transition-all duration-1000 delay-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
          <div className="flex items-center gap-4 mb-10">
            <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
            <h2 className="text-3xl font-light tracking-wide text-foreground">background</h2>
            <div className="flex-1 h-px bg-gradient-to-r from-yellow-500/50 to-transparent"></div>
          </div>
          <SectionCard accent="gold">
            <p className="text-muted-foreground leading-relaxed text-lg font-light">
              Cambridge dropout. Credit Suisse Scholar. Created my own interdisciplinary degree combining law, art history, philosophy and science. Started a company at 19, convinced some professors to fund it, then left university to build it properly. 
              <br /><br />
              Learned that regulatory restrictions kill companies faster than bad product-market fit. Now I help exceptional individuals navigate the machinery that constrains European innovation—or build around it entirely.
            </p>
          </SectionCard>
        </section>

        {/* Contact Section */}
        <section className={`mb-20 transition-all duration-1000 delay-1200 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
          <div className="flex items-center gap-4 mb-10">
            <div className="w-3 h-3 rounded-full bg-green-500"></div>
            <h2 className="text-3xl font-light tracking-wide text-foreground">contact</h2>
            <div className="flex-1 h-px bg-gradient-to-r from-green-500/50 to-transparent"></div>
          </div>
          <SectionCard accent="green" className="text-center">
            <div className="space-y-4">
              <p className="text-muted-foreground text-xl">
                <span className="font-medium text-foreground">reach me:</span>
              </p>
              <div className="flex items-center justify-center gap-8">
                <a 
                  href="mailto:re379@cam.ac.uk" 
                  className="text-green-400 hover:text-green-300 transition-colors duration-200 underline decoration-transparent hover:decoration-green-400 underline-offset-4 decoration-2 text-lg"
                >
                  re379@cam.ac.uk
                </a>
                <div className="w-1 h-6 bg-green-500/50"></div>
                <a 
                  href="https://www.linkedin.com/in/ray-3r3/" 
                  className="text-green-400 hover:text-green-300 transition-colors duration-200 underline decoration-transparent hover:decoration-green-400 underline-offset-4 decoration-2 text-lg"
                >
                  linkedin
                </a>
              </div>
            </div>
          </SectionCard>
        </section>

        {/* Footer */}
        <footer className={`text-center text-muted-foreground leading-relaxed font-light border-t border-border/30 pt-12 transition-all duration-1000 delay-1400 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
          <p className="text-xl max-w-3xl mx-auto">
            If you're building something that requires serious capital, regulatory approval, or institutional buy-in—especially if everyone else thinks it's "too hard" or "impossible to sell"—let's chat.
          </p>
        </footer>
      </div>
    </div>
  );
};

export default Index;
