
import { useEffect, useState } from 'react';
import { useScrollAnimation } from '../hooks/useScrollAnimation';
import { useTypingAnimation } from '../hooks/useTypingAnimation';
import AnimatedBackground from '../components/AnimatedBackground';
import GlassmorphismCard from '../components/GlassmorphismCard';
import KineticText from '../components/KineticText';
import EnhancedBulletPoint from '../components/EnhancedBulletPoint';

const Index = () => {
  const { scrollY } = useScrollAnimation();
  const [isVisible, setIsVisible] = useState(false);
  
  const introText = "I find founders who build where capital intensity meets technology risk—the uncomfortable beginning points that most founders tend to avoid. Technical and regulatory complexity aren't bugs, they're the features that build monopolies.";
  const { displayText, isComplete } = useTypingAnimation(introText, 30);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  return (
    <div className="min-h-screen bg-[#0a0a0a] text-gray-100 font-dm-sans relative overflow-hidden">
      <AnimatedBackground />
      
      {/* Enhanced subtle background pattern with parallax */}
      <div className="absolute inset-0 opacity-[0.015]">
        <div 
          className="absolute top-20 left-10 w-72 h-72 bg-white rounded-full blur-3xl transition-transform duration-300"
          style={{ transform: `translate(${scrollY * 0.1}px, ${scrollY * 0.05}px)` }}
        />
        <div 
          className="absolute bottom-40 right-20 w-96 h-96 bg-blue-400 rounded-full blur-3xl transition-transform duration-300"
          style={{ transform: `translate(${-scrollY * 0.08}px, ${scrollY * 0.12}px)` }}
        />
      </div>

      {/* Enhanced uploaded background image with parallax */}
      <div 
        className="absolute top-1/2 right-0 transform -translate-y-1/2 opacity-[0.02] pointer-events-none transition-transform duration-150"
        style={{ transform: `translateY(calc(-50% + ${scrollY * 0.3}px))` }}
      >
        <img 
          src="/lovable-uploads/0b1ff97e-2062-4113-883f-01359307aedb.png" 
          alt="" 
          className="w-[500px] h-[500px] object-contain"
        />
      </div>

      {/* Enhanced classical bust with more dramatic parallax */}
      <div 
        className="absolute right-0 top-0 w-96 h-screen opacity-[0.03] pointer-events-none transition-transform duration-100"
        style={{ transform: `translateY(${scrollY * 0.4}px)` }}
      >
        <img 
          src="/lovable-uploads/6f7e419a-cada-4358-9f77-78a2da5626b4.png" 
          alt="" 
          className="w-full h-full object-contain object-center"
        />
      </div>
      
      <div className="max-w-2xl mx-auto px-6 py-16 md:py-24 relative z-10">
        {/* Enhanced Header with fade-in animation */}
        <header className={`mb-16 transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
          <div className="flex items-center gap-3 mb-8">
            <div className="w-1 h-12 bg-gradient-to-b from-blue-400 to-purple-500 rounded-full animate-pulse"></div>
            <div>
              <h1 className="text-3xl md:text-4xl font-light tracking-tight text-white mb-2">
                <KineticText>Ray Erewunmi</KineticText>
              </h1>
              <p className="text-gray-400 text-sm font-light tracking-wider lowercase">
                <KineticText delay={0.5}>Builder | Philosopher | Investor</KineticText>
              </p>
            </div>
          </div>
          <GlassmorphismCard className="p-6">
            <p className="text-gray-300 text-base md:text-lg leading-relaxed font-light min-h-[120px]">
              {displayText}
              {!isComplete && <span className="animate-pulse">|</span>}
              <br /><br />
              {isComplete && (
                <span className="animate-fade-in">
                  <KineticText delay={1}>
                    My interests span finding outlier individuals, harnessing the systematic forces that create breakthrough companies, and occasionally backing both with my own capital.
                  </KineticText>
                </span>
              )}
            </p>
          </GlassmorphismCard>
        </header>

        {/* Enhanced Previously Section */}
        <section className={`mb-16 transition-all duration-1000 delay-300 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
          <div className="flex items-center gap-3 mb-6">
            <div className="w-2 h-2 bg-orange-400 rounded-full animate-pulse"></div>
            <h2 className="text-xl font-normal tracking-wide text-white">previously</h2>
          </div>
          <GlassmorphismCard className="p-6">
            <div className="space-y-4 text-gray-300">
              {[
                { text: 'Emerging technology investments at Auctor', link: 'https://www.auctorgroup.com/' },
                { text: 'Defense private equity at Stellex', link: 'https://www.stellexcapital.com/' },
                { text: 'Technology research at Credit Suisse (top 0.5% globally in their coding challenge)', link: 'https://www.ubs.com/ch/en/microsites/ubs-acquisition-of-credit-suisse.html' },
                { text: 'Credit Suisse Scholar (full academic scholarship)', link: null },
                { text: 'Law, Art History & Philosophy at Cambridge (dropped out to build)', link: 'https://www.cam.ac.uk/' }
              ].map((item, index) => (
                <EnhancedBulletPoint key={index} color="orange-400" delay={index}>
                  {item.link ? (
                    <>
                      {item.text.split(' at ')[0]} at{' '}
                      <a href={item.link} target="_blank" rel="noopener noreferrer" className="text-white font-medium hover:text-orange-400 transition-colors duration-200">
                        {item.text.split(' at ')[1]}
                      </a>
                    </>
                  ) : (
                    item.text
                  )}
                </EnhancedBulletPoint>
              ))}
            </div>
          </GlassmorphismCard>
        </section>

        {/* Enhanced Funding and Building Section */}
        <section className={`mb-16 transition-all duration-1000 delay-500 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
          <div className="flex items-center gap-3 mb-6">
            <div className="w-2 h-2 bg-blue-400 rounded-full animate-pulse"></div>
            <h2 className="text-xl font-normal tracking-wide text-white">
              <KineticText>finding, funding and building</KineticText>
            </h2>
          </div>
          <GlassmorphismCard className="p-6">
            <p className="text-gray-300 mb-8 text-base leading-relaxed">
              I find exceptional individuals and breakthrough opportunities in domains where capital intensity, technological risk, and regulatory complexity create natural monopolies:
            </p>
            
            <div className="space-y-8 text-gray-300">
              {[
                { title: 'Critical Infrastructure', subtitle: 'systems that can\'t fail' },
                { title: 'Novel Interfaces', subtitle: 'minds that bridge Biological and Artificial Systems' },
                { title: 'Physical Assets', subtitle: 'changing how atoms move' }
              ].map((item, index) => (
                <EnhancedBulletPoint key={index} color="blue-400" delay={index}>
                  <div>
                    <h3 className="font-medium text-white mb-2 text-lg">{item.title}</h3>
                    <p className="text-sm text-gray-400 font-light">{item.subtitle}</p>
                  </div>
                </EnhancedBulletPoint>
              ))}
            </div>

            <div className="mt-8">
              <GlassmorphismCard className="p-6 border-l-2 border-gray-700">
                <p className="text-gray-300 text-sm leading-relaxed font-light">
                  <span className="font-medium text-white">Specifically:</span> critical dual-use marine and aerospace technology, brain-computer interfaces, Human-computer interaction, advanced manufacturing in extreme environments, financial infrastructure that central banks actually use, energy systems that work without subsidies.
                </p>
              </GlassmorphismCard>
            </div>
          </GlassmorphismCard>
        </section>

        {/* Enhanced What's On My Mind Section */}
        <section className={`mb-16 transition-all duration-1000 delay-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
          <div className="flex items-center gap-3 mb-6">
            <div className="w-2 h-2 bg-purple-400 rounded-full animate-pulse"></div>
            <h2 className="text-xl font-normal tracking-wide text-white">
              <KineticText delay={0.2}>what's on my mind</KineticText>
            </h2>
          </div>
          <GlassmorphismCard className="p-6">
            <p className="text-gray-300 mb-8 text-base leading-relaxed">
              How breakthrough adoption follows historical patterns, why exceptional individuals are drawn to certain domains, how innovation spreads despite entrenched systems, and the systematic forces that create both outlier founders and generation-defining companies:
            </p>
            
            <div className="grid gap-3">
              {[
                'identifying outlier talent',
                'frameworks for monopoly formation',
                'institutional deployment patterns',
                'cognitive biases in adoption cycles',
                'historical precedents in technology waves',
                'macroeconomic forces in innovation'
              ].map((item, index) => (
                <EnhancedBulletPoint key={index} color="purple-400" delay={index}>
                  {item}
                </EnhancedBulletPoint>
              ))}
            </div>
          </GlassmorphismCard>
        </section>

        {/* Enhanced When Not Thinking About Monopolies Section */}
        <section className={`mb-16 transition-all duration-1000 delay-900 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
          <div className="flex items-center gap-3 mb-6">
            <div className="w-2 h-2 bg-emerald-400 rounded-full animate-pulse"></div>
            <h2 className="text-xl font-normal tracking-wide text-white">
              <KineticText delay={0.3}>when not thinking about monopolies</KineticText>
            </h2>
          </div>
          <GlassmorphismCard className="p-6">
            <div className="grid gap-3">
              {[
                'Tracing how the Medici patronage system prefigured today\'s VC model',
                'Arguing that Rothko\'s color field paintings are just systematic studies in visual cognition',
                'Reading sci-fi that predicted today\'s regulatory battles (Asimov\'s Foundation → EU AI Act)',
                'Wondering why people think institutional power structures are "new" when they follow 500-year-old patterns'
              ].map((item, index) => (
                <EnhancedBulletPoint key={index} color="emerald-400" delay={index}>
                  {item}
                </EnhancedBulletPoint>
              ))}
            </div>
          </GlassmorphismCard>
        </section>

        {/* Enhanced Background Section */}
        <section className={`mb-16 transition-all duration-1000 delay-1100 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
          <div className="flex items-center gap-3 mb-6">
            <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></div>
            <h2 className="text-xl font-normal tracking-wide text-white">background</h2>
          </div>
          <GlassmorphismCard className="p-6">
            <p className="text-gray-300 leading-relaxed text-base font-light">
              Cambridge dropout. Credit Suisse Scholar. Created my own degree combining law, art history, philosophy and science. Started a company at 19 at Cambridge, convinced some professors to fund me then left to build, learned that regulatory restrictions kill companies faster than bad product-market fit. Now I identify exceptional individuals and help them navigate the machinery that constrains European innovation.
            </p>
          </GlassmorphismCard>
        </section>

        {/* Enhanced Contact Section */}
        <section className={`mb-16 transition-all duration-1000 delay-1300 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
          <GlassmorphismCard className="p-6 bg-gradient-to-r from-gray-900/40 to-gray-800/40">
            <div className="flex items-center gap-4">
              <div className="w-3 h-3 bg-blue-400 rounded-full animate-pulse"></div>
              <p className="text-gray-300">
                <span className="font-medium text-white">reach me:</span>{" "}
                <a 
                  href="mailto:re379@cam.ac.uk" 
                  className="text-blue-400 hover:text-blue-300 transition-colors duration-200 underline decoration-transparent hover:decoration-blue-400 underline-offset-4 decoration-1 hover:scale-105 inline-block"
                >
                  re379@cam.ac.uk
                </a>
                {" | "}
                <a 
                  href="https://www.linkedin.com/in/ray-3r3/" 
                  className="text-blue-400 hover:text-blue-300 transition-colors duration-200 underline decoration-transparent hover:decoration-blue-400 underline-offset-4 decoration-1 hover:scale-105 inline-block"
                >
                  linkedin
                </a>
              </p>
            </div>
          </GlassmorphismCard>
        </section>

        {/* Enhanced Footer */}
        <footer className={`text-gray-400 text-sm leading-relaxed font-light border-t border-gray-800/50 pt-8 transition-all duration-1000 delay-1500 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
          <p>
            If you're building something that requires serious capital, regulatory approval, or institutional buy-in—especially if everyone else thinks it's "too hard" or "impossible to sell"—let's chat.
          </p>
        </footer>
      </div>
    </div>
  );
};

export default Index;
