
import { useEffect, useState } from 'react';

const Index = () => {
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="min-h-screen bg-[#0a0a0a] text-gray-100 font-dm-sans relative overflow-hidden">
      {/* Subtle background pattern */}
      <div className="absolute inset-0 opacity-[0.02]">
        <div className="absolute top-20 left-10 w-72 h-72 bg-white rounded-full blur-3xl"></div>
        <div className="absolute bottom-40 right-20 w-96 h-96 bg-blue-400 rounded-full blur-3xl"></div>
      </div>

      {/* New uploaded background image - positioned to the right side */}
      <div className="absolute top-1/2 right-0 transform -translate-y-1/2 opacity-[0.02] pointer-events-none">
        <img 
          src="/lovable-uploads/0b1ff97e-2062-4113-883f-01359307aedb.png" 
          alt="" 
          className="w-[500px] h-[500px] object-contain"
        />
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
              <p className="text-gray-400 text-sm font-light tracking-wider lowercase">
                Builder | Philosopher | Investor
              </p>
            </div>
          </div>
          <p className="text-gray-300 text-base md:text-lg leading-relaxed font-light">
            I find founders who build where capital intensity meets technology risk—the uncomfortable beginning points that most people systematically avoid. Regulatory complexity isn't a bug, it's the feature that builds monopolies.<br /><br />My interests span finding outlier individuals, harnessing the systematic forces that create breakthrough companies, and occasionally backing both with my own capital.
          </p>
        </header>

        {/* Previously Section */}
        <section className="mb-16">
          <div className="flex items-center gap-3 mb-6">
            <div className="w-2 h-2 bg-orange-400 rounded-full"></div>
            <h2 className="text-xl font-normal tracking-wide text-white">previously</h2>
          </div>
          <div className="space-y-4 text-gray-300">
            <div className="group">
              <div className="flex items-start gap-4">
                <div className="w-1.5 h-1.5 bg-gray-500 rounded-full mt-2 group-hover:bg-orange-400 transition-colors duration-300"></div>
                <div>
                  <p className="text-sm font-light">Emerging technology investments at <a href="https://www.auctorgroup.com/" target="_blank" rel="noopener noreferrer" className="text-white font-medium hover:text-orange-400 transition-colors duration-200">Auctor</a></p>
                </div>
              </div>
            </div>
            
            <div className="group">
              <div className="flex items-start gap-4">
                <div className="w-1.5 h-1.5 bg-gray-500 rounded-full mt-2 group-hover:bg-orange-400 transition-colors duration-300"></div>
                <div>
                  <p className="text-sm font-light">Defense private equity at <a href="https://www.stellexcapital.com/" target="_blank" rel="noopener noreferrer" className="text-white font-medium hover:text-orange-400 transition-colors duration-200">Stellex</a></p>
                </div>
              </div>
            </div>
            
            <div className="group">
              <div className="flex items-start gap-4">
                <div className="w-1.5 h-1.5 bg-gray-500 rounded-full mt-2 group-hover:bg-orange-400 transition-colors duration-300"></div>
                <div>
                  <p className="text-sm font-light">Technology research at <a href="https://www.ubs.com/ch/en/microsites/ubs-acquisition-of-credit-suisse.html" target="_blank" rel="noopener noreferrer" className="text-white font-medium hover:text-orange-400 transition-colors duration-200">Credit Suisse</a> (top 0.5% globally in their coding challenge)</p>
                </div>
              </div>
            </div>

            <div className="group">
              <div className="flex items-start gap-4">
                <div className="w-1.5 h-1.5 bg-gray-500 rounded-full mt-2 group-hover:bg-orange-400 transition-colors duration-300"></div>
                <div>
                  <p className="text-sm font-light">Credit Suisse Scholar (full academic scholarship)</p>
                </div>
              </div>
            </div>

            <div className="group">
              <div className="flex items-start gap-4">
                <div className="w-1.5 h-1.5 bg-gray-500 rounded-full mt-2 group-hover:bg-orange-400 transition-colors duration-300"></div>
                <div>
                  <p className="text-sm font-light">Law, Art History & Philosophy at <a href="https://www.cam.ac.uk/" target="_blank" rel="noopener noreferrer" className="text-white font-medium hover:text-orange-400 transition-colors duration-200">Cambridge</a> (dropped out to build)</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Funding and Building Section */}
        <section className="mb-16">
          <div className="flex items-center gap-3 mb-6">
            <div className="w-2 h-2 bg-blue-400 rounded-full"></div>
            <h2 className="text-xl font-normal tracking-wide text-white">finding, funding and building</h2>
          </div>
          <p className="text-gray-300 mb-8 text-base leading-relaxed">
            I find exceptional individuals and breakthrough opportunities in domains where capital intensity, technological risk, and regulatory complexity create natural monopolies:
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
                  <p className="text-sm text-gray-400 font-light">minds that bridge Biological and Artificial Systems</p>
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
              <div key={index} className="flex items-center gap-3 group hover:translate-x-2 transition-transform duration-200">
                <div className="w-1 h-1 bg-gray-600 rounded-full group-hover:bg-purple-400 transition-colors duration-200"></div>
                <span className="text-gray-300 text-sm font-light">{item}</span>
              </div>
            ))}
          </div>
        </section>

        {/* When Not Thinking About Monopolies Section */}
        <section className="mb-16">
          <div className="flex items-center gap-3 mb-6">
            <div className="w-2 h-2 bg-emerald-400 rounded-full"></div>
            <h2 className="text-xl font-normal tracking-wide text-white">when not thinking about monopolies</h2>
          </div>
          
          <div className="grid gap-3">
            {[
              'Tracing how the Medici patronage system prefigured today\'s VC model',
              'Arguing that Rothko\'s color field paintings are just systematic studies in visual cognition',
              'Reading sci-fi that predicted today\'s regulatory battles (Asimov\'s Foundation → EU AI Act)',
              'Wondering why people think institutional power structures are "new" when they follow 500-year-old patterns'
            ].map((item, index) => (
              <div key={index} className="flex items-center gap-3 group hover:translate-x-2 transition-transform duration-200">
                <div className="w-1 h-1 bg-gray-600 rounded-full group-hover:bg-emerald-400 transition-colors duration-200"></div>
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
              Cambridge dropout. Credit Suisse Scholar. Created my own degree combining law, art history, philosophy and science. Started a company at 19 at Cambridge, convinced some professors to fund me then left to build, learned that regulatory restrictions kill companies faster than bad product-market fit. Now I identify exceptional individuals and help them navigate the machinery that constrains European innovation.
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
                href="https://www.linkedin.com/in/ray-3r3/" 
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
