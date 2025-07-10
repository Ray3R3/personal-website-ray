
import { useEffect, useState } from 'react';

const Index = () => {
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="min-h-screen bg-[#0a0a0a] text-gray-100 font-satoshi relative overflow-hidden">
      {/* Subtle background pattern */}
      <div className="absolute inset-0 opacity-[0.02]">
        <div className="absolute top-20 left-10 w-72 h-72 bg-white rounded-full blur-3xl"></div>
        <div className="absolute bottom-40 right-20 w-96 h-96 bg-blue-400 rounded-full blur-3xl"></div>
      </div>

      {/* Classical bust background with parallax effect */}
      <div 
        className="absolute right-0 top-0 w-96 h-screen opacity-[0.03] pointer-events-none"
        style={{
          transform: `translateY(${scrollY * 0.3}px)`,
          transition: 'transform 0.1s ease-out'
        }}
      >
        <img 
          src="/lovable-uploads/6f7e419a-cada-4358-9f77-78a2da5626b4.png" 
          alt="" 
          className="w-full h-full object-contain object-center"
        />
      </div>
      
      <div className="max-w-2xl mx-auto px-6 py-16 md:py-24 relative z-10">
        {/* Header */}
        <header className="mb-16">
          <div className="flex items-center gap-3 mb-8">
            <div className="w-1 h-12 bg-gradient-to-b from-blue-400 to-purple-500 rounded-full"></div>
            <div>
              <h1 className="text-3xl md:text-4xl font-light tracking-tight text-white mb-2">
                Ray Erewunmi
              </h1>
              <p className="text-gray-400 text-sm font-light tracking-wider uppercase">
                Builder | Philosopher | Investor
              </p>
            </div>
          </div>
          <p className="text-gray-300 text-lg md:text-xl leading-relaxed font-light">
            I find founders who build where capital intensity meets technology risk—the uncomfortable beginning points that most people systematically avoid. Regulatory complexity isn't a bug, it's the feature that builds monopolies.
          </p>
        </header>

        {/* Funding and Building Section */}
        <section className="mb-16">
          <div className="flex items-center gap-3 mb-6">
            <div className="w-2 h-2 bg-blue-400 rounded-full"></div>
            <h2 className="text-xl font-normal tracking-wide text-white">funding and building</h2>
          </div>
          <p className="text-gray-300 mb-8 text-base leading-relaxed">
            Ventures where capital intensity, technological risk and regulatory hurdles creates natural monopolies:
          </p>
          
          <div className="space-y-8 text-gray-300">
            <div className="group">
              <div className="flex items-start gap-4">
                <div className="w-1.5 h-1.5 bg-gray-500 rounded-full mt-2 group-hover:bg-blue-400 transition-colors duration-300"></div>
                <div>
                  <h3 className="font-medium text-white mb-2 text-lg">Critical Infrastructure</h3>
                  <p className="text-sm text-gray-400 font-light">systems that can't fail</p>
                </div>
              </div>
            </div>
            
            <div className="group">
              <div className="flex items-start gap-4">
                <div className="w-1.5 h-1.5 bg-gray-500 rounded-full mt-2 group-hover:bg-blue-400 transition-colors duration-300"></div>
                <div>
                  <h3 className="font-medium text-white mb-2 text-lg">Novel Interfaces</h3>
                  <p className="text-sm text-gray-400 font-light">Connecting Biological and Artificial Systems</p>
                </div>
              </div>
            </div>
            
            <div className="group">
              <div className="flex items-start gap-4">
                <div className="w-1.5 h-1.5 bg-gray-500 rounded-full mt-2 group-hover:bg-blue-400 transition-colors duration-300"></div>
                <div>
                  <h3 className="font-medium text-white mb-2 text-lg">Physical Assets</h3>
                  <p className="text-sm text-gray-400 font-light">changing how atoms move</p>
                </div>
              </div>
            </div>
          </div>

          <div className="mt-8 p-6 border-l-2 border-gray-800 bg-gray-900/20 backdrop-blur-sm rounded-r-lg">
            <p className="text-gray-300 text-sm leading-relaxed font-light">
              <span className="font-medium text-white">Specifically:</span> critical dual-use marine and aerospace technology, brain-computer interfaces, Human-computer interaction, advanced manufacturing in extreme environments, financial infrastructure that central banks actually use, energy systems that work without subsidies.
            </p>
          </div>
        </section>

        {/* What's On My Mind Section */}
        <section className="mb-16">
          <div className="flex items-center gap-3 mb-6">
            <div className="w-2 h-2 bg-purple-400 rounded-full"></div>
            <h2 className="text-xl font-normal tracking-wide text-white">what's on my mind</h2>
          </div>
          <p className="text-gray-300 mb-8 text-base leading-relaxed">
            How breakthrough adoption follows historical patterns, why institutional decision-making mirrors economic cycles, and the systemic forces that make certain technologies inevitable:
          </p>
          
          <div className="grid gap-3">
            {[
              'frameworks for monopoly formation',
              'institutional deployment patterns',
              'cognitive biases in adoption cycles',
              'historical precedents in technology waves',
              'macroeconomic forces in innovation'
            ].map((item, index) => (
              <div key={index} className="flex items-center gap-3 group hover:translate-x-2 transition-transform duration-200">
                <div className="w-1 h-1 bg-gray-600 rounded-full group-hover:bg-purple-400 transition-colors duration-200"></div>
                <span className="text-gray-300 text-sm font-light">{item}</span>
              </div>
            ))}
          </div>
        </section>

        {/* Background Section */}
        <section className="mb-16">
          <div className="flex items-center gap-3 mb-6">
            <div className="w-2 h-2 bg-green-400 rounded-full"></div>
            <h2 className="text-xl font-normal tracking-wide text-white">background</h2>
          </div>
          <div className="bg-gray-900/30 backdrop-blur-sm p-6 rounded-lg border border-gray-800/50">
            <p className="text-gray-300 leading-relaxed text-base font-light">
              Cambridge dropout. Credit Suisse Scholar. Created my own degree combining law, art history, philosophy and science. Started a company at 19 at Cambridge, raised pre-seed from professors then left to build, learned that API restrictions kill companies faster than bad product-market fit. Now I help founders navigate the institutional machinery that actually controls capital deployment.
            </p>
          </div>
        </section>

        {/* Contact Section */}
        <section className="mb-16">
          <div className="flex items-center gap-4 p-6 bg-gradient-to-r from-gray-900/40 to-gray-800/40 backdrop-blur-sm rounded-lg border border-gray-700/30">
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
                href="#" 
                className="text-blue-400 hover:text-blue-300 transition-colors duration-200 underline decoration-transparent hover:decoration-blue-400 underline-offset-4 decoration-1"
              >
                linkedin
              </a>
            </p>
          </div>
        </section>

        {/* Footer */}
        <footer className="text-gray-400 text-sm leading-relaxed font-light border-t border-gray-800/50 pt-8">
          <p>
            If you're building something that requires serious capital, regulatory approval, or institutional buy-in—especially if everyone else thinks it's "too hard" or "impossible to sell"—let's chat.
          </p>
        </footer>
      </div>
    </div>
  );
};

export default Index;
