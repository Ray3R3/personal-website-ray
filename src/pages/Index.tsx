
import { useEffect, useState } from 'react';
import { useScrollAnimation } from '../hooks/useScrollAnimation';
import { useTypingAnimation } from '../hooks/useTypingAnimation';
import EditorialCard from '../components/EditorialCard';
import PersonalityBullet from '../components/PersonalityBullet';

const Index = () => {
  const { scrollY } = useScrollAnimation();
  const [isVisible, setIsVisible] = useState(false);
  
  const introText = "I see patterns others miss. While most people avoid domains where capital requirements are high and technology risk is real, I find that's exactly where the most interesting opportunities hide. The uncomfortable intersections where others won't go—that's where monopolies get built.";
  const { displayText, isComplete } = useTypingAnimation(introText, 25);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  return (
    <div className="min-h-screen bg-background text-foreground font-dm-sans relative">
      {/* Subtle warm background elements */}
      <div className="absolute inset-0 opacity-[0.02]">
        <div 
          className="absolute top-20 left-10 w-96 h-96 bg-amber-400 rounded-full blur-3xl transition-transform duration-500"
          style={{ transform: `translate(${scrollY * 0.03}px, ${scrollY * 0.02}px)` }}
        />
        <div 
          className="absolute bottom-40 right-20 w-80 h-80 bg-orange-300 rounded-full blur-3xl transition-transform duration-500"
          style={{ transform: `translate(${-scrollY * 0.02}px, ${scrollY * 0.03}px)` }}
        />
      </div>

      {/* Warm pattern overlay */}
      <div 
        className="absolute right-0 top-0 w-96 h-screen opacity-[0.01] pointer-events-none transition-transform duration-300"
        style={{ transform: `translateY(${scrollY * 0.1}px)` }}
      >
        <img 
          src="/lovable-uploads/6f7e419a-cada-4358-9f77-78a2da5626b4.png" 
          alt="" 
          className="w-full h-full object-contain object-center"
        />
      </div>
      
      <div className="max-w-3xl mx-auto px-8 py-20 md:py-28 relative z-10">
        {/* Hero Section */}
        <header className={`mb-20 transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
          <div className="mb-12">
            <h1 className="text-4xl md:text-5xl font-light tracking-tight text-foreground mb-6 leading-tight">
              Ray Erewunmi
            </h1>
            <div className="flex items-center gap-4 mb-8">
              <div className="w-1 h-12 bg-amber-400"></div>
              <p className="text-xl md:text-2xl text-muted-foreground font-light">
                Pattern Recognition in Practice
              </p>
            </div>
          </div>
          
          <EditorialCard className="mb-8">
            <p className="text-lg md:text-xl leading-relaxed font-light text-foreground min-h-[140px]">
              {displayText}
              {!isComplete && <span className="animate-pulse text-amber-400">|</span>}
              <br /><br />
              {isComplete && (
                <span className="animate-fade-in text-muted-foreground">
                  I invest my own capital, build companies, and occasionally help others do both. My interests span finding exceptional people and the systematic forces that create breakthrough companies.
                </span>
              )}
            </p>
          </EditorialCard>
        </header>

        {/* Previously Section */}
        <section className={`mb-20 transition-all duration-1000 delay-200 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
          <div className="flex items-center gap-4 mb-8">
            <h2 className="text-2xl font-light tracking-wide text-foreground">previously</h2>
            <div className="flex-1 h-px bg-border"></div>
          </div>
          <EditorialCard>
            <div className="space-y-5 text-muted-foreground">
              <PersonalityBullet>
                Built technology investments at <a href="https://www.auctorgroup.com/" target="_blank" rel="noopener noreferrer" className="text-foreground font-medium hover:text-amber-400 transition-colors duration-200">Auctor</a>
              </PersonalityBullet>
              <PersonalityBullet>
                Defense private equity at <a href="https://www.stellexcapital.com/" target="_blank" rel="noopener noreferrer" className="text-foreground font-medium hover:text-amber-400 transition-colors duration-200">Stellex</a>
              </PersonalityBullet>
              <PersonalityBullet>
                Technology research at <a href="https://www.ubs.com/ch/en/microsites/ubs-acquisition-of-credit-suisse.html" target="_blank" rel="noopener noreferrer" className="text-foreground font-medium hover:text-amber-400 transition-colors duration-200">Credit Suisse</a> (top 0.5% globally in their coding challenge)
              </PersonalityBullet>
              <PersonalityBullet>
                Credit Suisse Scholar (full academic scholarship)
              </PersonalityBullet>
              <PersonalityBullet>
                Started at <a href="https://www.cam.ac.uk/" target="_blank" rel="noopener noreferrer" className="text-foreground font-medium hover:text-amber-400 transition-colors duration-200">Cambridge</a> studying law, art history & philosophy—dropped out to build
              </PersonalityBullet>
            </div>
          </EditorialCard>
        </section>

        {/* Finding, Funding and Building Section */}
        <section className={`mb-20 transition-all duration-1000 delay-400 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
          <div className="flex items-center gap-4 mb-8">
            <h2 className="text-2xl font-light tracking-wide text-foreground">finding, funding and building</h2>
            <div className="flex-1 h-px bg-border"></div>
          </div>
          <EditorialCard>
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

            <EditorialCard className="mt-10 border-l-4 border-amber-400 bg-amber-50/5">
              <p className="text-muted-foreground leading-relaxed">
                <span className="font-medium text-foreground">Specifically:</span> Marine and aerospace technology with dual-use applications, brain-computer interfaces that work, advanced manufacturing in extreme environments, financial infrastructure that central banks trust, energy systems that don't need subsidies to make sense.
              </p>
            </EditorialCard>
          </EditorialCard>
        </section>

        {/* What's On My Mind Section */}
        <section className={`mb-20 transition-all duration-1000 delay-600 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
          <div className="flex items-center gap-4 mb-8">
            <h2 className="text-2xl font-light tracking-wide text-foreground">what's on my mind</h2>
            <div className="flex-1 h-px bg-border"></div>
          </div>
          <EditorialCard>
            <p className="text-muted-foreground mb-10 text-lg leading-relaxed">
              How breakthrough adoption follows historical patterns, why exceptional individuals gravitate toward certain domains, how innovation spreads despite entrenched systems. The systematic forces behind both outlier founders and generation-defining companies:
            </p>
            
            <div className="grid gap-4">
              <PersonalityBullet>Identifying outlier talent before everyone else notices</PersonalityBullet>
              <PersonalityBullet>Frameworks for monopoly formation (the good kind)</PersonalityBullet>
              <PersonalityBullet>Why institutional deployment patterns matter more than technology</PersonalityBullet>
              <PersonalityBullet>Cognitive biases in adoption cycles—and how to exploit them</PersonalityBullet>
              <PersonalityBullet>Historical precedents in technology waves</PersonalityBullet>
              <PersonalityBullet>Macroeconomic forces that create innovation windows</PersonalityBullet>
            </div>
          </EditorialCard>
        </section>

        {/* When Not Thinking About Monopolies Section */}
        <section className={`mb-20 transition-all duration-1000 delay-800 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
          <div className="flex items-center gap-4 mb-8">
            <h2 className="text-2xl font-light tracking-wide text-foreground">when not thinking about monopolies</h2>
            <div className="flex-1 h-px bg-border"></div>
          </div>
          <EditorialCard>
            <div className="grid gap-4">
              <PersonalityBullet>
                Tracing how the Medici patronage system was basically the first VC model
              </PersonalityBullet>
              <PersonalityBullet>
                Arguing that Rothko's color field paintings are systematic studies in visual cognition (fight me)
              </PersonalityBullet>
              <PersonalityBullet>
                Reading sci-fi that predicted today's regulatory battles—Asimov's Foundation series → EU AI Act
              </PersonalityBullet>
              <PersonalityBullet>
                Wondering why people think current institutional power structures are "new" when they follow 500-year-old patterns
              </PersonalityBullet>
            </div>
          </EditorialCard>
        </section>

        {/* Background Section */}
        <section className={`mb-20 transition-all duration-1000 delay-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
          <div className="flex items-center gap-4 mb-8">
            <h2 className="text-2xl font-light tracking-wide text-foreground">background</h2>
            <div className="flex-1 h-px bg-border"></div>
          </div>
          <EditorialCard>
            <p className="text-muted-foreground leading-relaxed text-lg font-light">
              Cambridge dropout. Credit Suisse Scholar. Created my own interdisciplinary degree combining law, art history, philosophy and science. Started a company at 19, convinced some professors to fund it, then left university to build it properly. 
              <br /><br />
              Learned that regulatory restrictions kill companies faster than bad product-market fit. Now I help exceptional individuals navigate the machinery that constrains European innovation—or build around it entirely.
            </p>
          </EditorialCard>
        </section>

        {/* Contact Section */}
        <section className={`mb-16 transition-all duration-1000 delay-1200 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
          <EditorialCard className="border-l-4 border-amber-400">
            <div className="flex items-center gap-4">
              <div className="w-2 h-2 bg-amber-400 rounded-full"></div>
              <p className="text-muted-foreground text-lg">
                <span className="font-medium text-foreground">reach me:</span>{" "}
                <a 
                  href="mailto:re379@cam.ac.uk" 
                  className="text-amber-400 hover:text-amber-300 transition-colors duration-200 underline decoration-transparent hover:decoration-amber-400 underline-offset-4 decoration-1"
                >
                  re379@cam.ac.uk
                </a>
                {" | "}
                <a 
                  href="https://www.linkedin.com/in/ray-3r3/" 
                  className="text-amber-400 hover:text-amber-300 transition-colors duration-200 underline decoration-transparent hover:decoration-amber-400 underline-offset-4 decoration-1"
                >
                  linkedin
                </a>
              </p>
            </div>
          </EditorialCard>
        </section>

        {/* Footer */}
        <footer className={`text-muted-foreground leading-relaxed font-light border-t border-border pt-8 transition-all duration-1000 delay-1400 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
          <p className="text-lg">
            If you're building something that requires serious capital, regulatory approval, or institutional buy-in—especially if everyone else thinks it's "too hard" or "impossible to sell"—let's chat.
          </p>
        </footer>
      </div>
    </div>
  );
};

export default Index;
