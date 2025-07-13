
import { useEffect, useState } from 'react';
import { useScrollAnimation } from '../hooks/useScrollAnimation';
import { useTypingAnimation } from '../hooks/useTypingAnimation';
import NetworkGrid from '../components/NetworkGrid';
import ConnectionLines from '../components/ConnectionLines';
import SystemCard from '../components/SystemCard';
import PatternBulletPoint from '../components/PatternBulletPoint';

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
      <NetworkGrid />
      <ConnectionLines />
      
      {/* Subtle background pattern with parallax */}
      <div className="absolute inset-0 opacity-[0.01]">
        <div 
          className="absolute top-20 left-10 w-72 h-72 bg-white rounded-full blur-3xl transition-transform duration-300"
          style={{ transform: `translate(${scrollY * 0.05}px, ${scrollY * 0.02}px)` }}
        />
        <div 
          className="absolute bottom-40 right-20 w-96 h-96 bg-blue-400 rounded-full blur-3xl transition-transform duration-300"
          style={{ transform: `translate(${-scrollY * 0.03}px, ${scrollY * 0.04}px)` }}
        />
      </div>

      {/* Enhanced uploaded background image with subtle parallax */}
      <div 
        className="absolute top-1/2 right-0 transform -translate-y-1/2 opacity-[0.015] pointer-events-none transition-transform duration-150"
        style={{ transform: `translateY(calc(-50% + ${scrollY * 0.1}px))` }}
      >
        <img 
          src="/lovable-uploads/0b1ff97e-2062-4113-883f-01359307aedb.png" 
          alt="" 
          className="w-[500px] h-[500px] object-contain"
        />
      </div>

      {/* Classical bust with subtle parallax */}
      <div 
        className="absolute right-0 top-0 w-96 h-screen opacity-[0.02] pointer-events-none transition-transform duration-100"
        style={{ transform: `translateY(${scrollY * 0.15}px)` }}
      >
        <img 
          src="/lovable-uploads/6f7e419a-cada-4358-9f77-78a2da5626b4.png" 
          alt="" 
          className="w-full h-full object-contain object-center"
        />
      </div>
      
      <div className="max-w-2xl mx-auto px-6 py-16 md:py-24 relative z-20">
        {/* Header - Research Interface Style */}
        <header className={`mb-16 transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
          <SystemCard dataSection="identity" category="primary" className="p-6 mb-8">
            <div className="flex items-start gap-4">
              <div className="flex flex-col">
                <h1 className="text-3xl md:text-4xl font-light tracking-tight text-white mb-2">
                  Ray Erewunmi
                </h1>
                <p className="text-gray-400 text-sm font-light tracking-wider lowercase mb-4">
                  Builder | Philosopher | Investor
                </p>
                <div className="flex items-center gap-2 text-xs text-gray-500">
                  <div className="w-1.5 h-1.5 bg-green-400 rounded-full animate-pulse"></div>
                  <span>Pattern Recognition Active</span>
                </div>
              </div>
            </div>
          </SystemCard>
          
          <SystemCard dataSection="intro" category="secondary" className="p-6">
            <p className="text-gray-300 text-base md:text-lg leading-relaxed font-light min-h-[120px]">
              {displayText}
              {!isComplete && <span className="animate-pulse">|</span>}
              <br /><br />
              {isComplete && (
                <span className="animate-fade-in">
                  My interests span finding outlier individuals, harnessing the systematic forces that create breakthrough companies, and occasionally backing both with my own capital.
                </span>
              )}
            </p>
          </SystemCard>
        </header>

        {/* Previously Section */}
        <section className={`mb-16 transition-all duration-1000 delay-300 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
          <div className="flex items-center gap-3 mb-6">
            <div className="w-2 h-2 bg-orange-400 rounded-full"></div>
            <h2 className="text-xl font-normal tracking-wide text-white">previously</h2>
            <div className="flex-1 h-px bg-gradient-to-r from-gray-800 to-transparent"></div>
          </div>
          <SystemCard dataSection="experience" category="secondary" className="p-6">
            <div className="space-y-4 text-gray-300">
              {[
                { text: 'Emerging technology investments at Auctor', link: 'https://www.auctorgroup.com/', id: 'auctor' },
                { text: 'Defense private equity at Stellex', link: 'https://www.stellexcapital.com/', id: 'stellex' },
                { text: 'Technology research at Credit Suisse (top 0.5% globally in their coding challenge)', link: 'https://www.ubs.com/ch/en/microsites/ubs-acquisition-of-credit-suisse.html', id: 'cs' },
                { text: 'Credit Suisse Scholar (full academic scholarship)', link: null, id: 'scholar' },
                { text: 'Law, Art History & Philosophy at Cambridge (dropped out to build)', link: 'https://www.cam.ac.uk/', id: 'cambridge' }
              ].map((item, index) => (
                <PatternBulletPoint key={index} category="secondary" delay={index} connectionId={item.id}>
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
                </PatternBulletPoint>
              ))}
            </div>
          </SystemCard>
        </section>

        {/* Finding, Funding and Building Section */}
        <section className={`mb-16 transition-all duration-1000 delay-500 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
          <div className="flex items-center gap-3 mb-6">
            <div className="w-2 h-2 bg-blue-400 rounded-full"></div>
            <h2 className="text-xl font-normal tracking-wide text-white">finding, funding and building</h2>
            <div className="flex-1 h-px bg-gradient-to-r from-gray-800 to-transparent"></div>
          </div>
          <SystemCard dataSection="focus" category="primary" className="p-6">
            <p className="text-gray-300 mb-8 text-base leading-relaxed">
              I find exceptional individuals and breakthrough opportunities in domains where capital intensity, technological risk, and regulatory complexity create natural monopolies:
            </p>
            
            <div className="space-y-8 text-gray-300">
              {[
                { title: 'Critical Infrastructure', subtitle: 'systems that can\'t fail', id: 'infrastructure' },
                { title: 'Novel Interfaces', subtitle: 'minds that bridge Biological and Artificial Systems', id: 'interfaces' },
                { title: 'Physical Assets', subtitle: 'changing how atoms move', id: 'physical' }
              ].map((item, index) => (
                <PatternBulletPoint key={index} category="primary" delay={index} connectionId={item.id}>
                  <div>
                    <h3 className="font-medium text-white mb-2 text-lg">{item.title}</h3>
                    <p className="text-sm text-gray-400 font-light">{item.subtitle}</p>
                  </div>
                </PatternBulletPoint>
              ))}
            </div>

            <div className="mt-8">
              <SystemCard className="p-6 border-l-2 border-gray-700">
                <p className="text-gray-300 text-sm leading-relaxed font-light">
                  <span className="font-medium text-white">Specifically:</span> critical dual-use marine and aerospace technology, brain-computer interfaces, Human-computer interaction, advanced manufacturing in extreme environments, financial infrastructure that central banks actually use, energy systems that work without subsidies.
                </p>
              </SystemCard>
            </div>
          </SystemCard>
        </section>

        {/* What's On My Mind Section */}
        <section className={`mb-16 transition-all duration-1000 delay-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
          <div className="flex items-center gap-3 mb-6">
            <div className="w-2 h-2 bg-purple-400 rounded-full"></div>
            <h2 className="text-xl font-normal tracking-wide text-white">what's on my mind</h2>
            <div className="flex-1 h-px bg-gradient-to-r from-gray-800 to-transparent"></div>
          </div>
          <SystemCard dataSection="thinking" category="tertiary" className="p-6">
            <p className="text-gray-300 mb-8 text-base leading-relaxed">
              How breakthrough adoption follows historical patterns, why exceptional individuals are drawn to certain domains, how innovation spreads despite entrenched systems, and the systematic forces that create both outlier founders and generation-defining companies:
            </p>
            
            <div className="grid gap-3">
              {[
                { text: 'identifying outlier talent', id: 'talent' },
                { text: 'frameworks for monopoly formation', id: 'monopoly' },
                { text: 'institutional deployment patterns', id: 'deployment' },
                { text: 'cognitive biases in adoption cycles', id: 'biases' },
                { text: 'historical precedents in technology waves', id: 'precedents' },
                { text: 'macroeconomic forces in innovation', id: 'macro' }
              ].map((item, index) => (
                <PatternBulletPoint key={index} category="tertiary" delay={index} connectionId={item.id}>
                  {item.text}
                </PatternBulletPoint>
              ))}
            </div>
          </SystemCard>
        </section>

        {/* When Not Thinking About Monopolies Section */}
        <section className={`mb-16 transition-all duration-1000 delay-900 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
          <div className="flex items-center gap-3 mb-6">
            <div className="w-2 h-2 bg-emerald-400 rounded-full"></div>
            <h2 className="text-xl font-normal tracking-wide text-white">when not thinking about monopolies</h2>
            <div className="flex-1 h-px bg-gradient-to-r from-gray-800 to-transparent"></div>
          </div>
          <SystemCard dataSection="interests" category="tertiary" className="p-6">
            <div className="grid gap-3">
              {[
                'Tracing how the Medici patronage system prefigured today\'s VC model',
                'Arguing that Rothko\'s color field paintings are just systematic studies in visual cognition',
                'Reading sci-fi that predicted today\'s regulatory battles (Asimov\'s Foundation → EU AI Act)',
                'Wondering why people think institutional power structures are "new" when they follow 500-year-old patterns'
              ].map((item, index) => (
                <PatternBulletPoint key={index} category="tertiary" delay={index} connectionId={`interest-${index}`}>
                  {item}
                </PatternBulletPoint>
              ))}
            </div>
          </SystemCard>
        </section>

        {/* Background Section */}
        <section className={`mb-16 transition-all duration-1000 delay-1100 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
          <div className="flex items-center gap-3 mb-6">
            <div className="w-2 h-2 bg-green-400 rounded-full"></div>
            <h2 className="text-xl font-normal tracking-wide text-white">background</h2>
            <div className="flex-1 h-px bg-gradient-to-r from-gray-800 to-transparent"></div>
          </div>
          <SystemCard dataSection="background" category="secondary" className="p-6">
            <p className="text-gray-300 leading-relaxed text-base font-light">
              Cambridge dropout. Credit Suisse Scholar. Created my own degree combining law, art history, philosophy and science. Started a company at 19 at Cambridge, convinced some professors to fund me then left to build, learned that regulatory restrictions kill companies faster than bad product-market fit. Now I identify exceptional individuals and help them navigate the machinery that constrains European innovation.
            </p>
          </SystemCard>
        </section>

        {/* Contact Section */}
        <section className={`mb-16 transition-all duration-1000 delay-1300 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
          <SystemCard dataSection="contact" category="primary" className="p-6">
            <div className="flex items-center gap-4">
              <div className="w-3 h-3 bg-blue-400 rounded-full animate-pulse"></div>
              <p className="text-gray-300">
                <span className="font-medium text-white">reach me:</span>{" "}
                <a 
                  href="mailto:re379@cam.ac.uk" 
                  className="text-blue-400 hover:text-blue-300 transition-colors duration-200 underline decoration-transparent hover:decoration-blue-400 underline-offset-4 decoration-1"
                >
                  re379@cam.ac.uk
                </a>
                {" | "}
                <a 
                  href="https://www.linkedin.com/in/ray-3r3/" 
                  className="text-blue-400 hover:text-blue-300 transition-colors duration-200 underline decoration-transparent hover:decoration-blue-400 underline-offset-4 decoration-1"
                >
                  linkedin
                </a>
              </p>
            </div>
          </SystemCard>
        </section>

        {/* Footer */}
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
