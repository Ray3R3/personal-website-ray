import { useEffect, useState } from 'react';

const Index = () => {
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Intersection Observer for fade-in animations
  useEffect(() => {
    const observerOptions = {
      threshold: 0.1,
      rootMargin: '0px 0px -50px 0px'
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('animate-fade-in');
        }
      });
    }, observerOptions);

    const elements = document.querySelectorAll('.fade-on-scroll');
    elements.forEach((el) => observer.observe(el));

    return () => observer.disconnect();
  }, []);

  return (
    <div className="min-h-screen bg-[#0a0a0a] text-gray-100 font-dm-sans relative overflow-hidden">
      {/* Hero Section with Classical Painting Background */}
      <div className="relative min-h-screen flex items-center">
        {/* Hero Background Image with Dark Overlay */}
        <div className="absolute inset-0">
          <img 
            src="/lovable-uploads/a8d0c9f1-8b95-4207-870d-2f03a99ac1f6.png" 
            alt="" 
            className="w-full h-2/3 object-cover object-center"
          />
          <div className="absolute inset-0 bg-black/75"></div>
        </div>

        {/* Subtle background pattern */}
        <div className="absolute inset-0 opacity-[0.02] z-10">
          <div className="absolute top-20 left-10 w-72 h-72 bg-white rounded-full blur-3xl"></div>
          <div className="absolute bottom-40 right-20 w-96 h-96 bg-amber-400 rounded-full blur-3xl"></div>
        </div>

        {/* Classical bust background with parallax effect */}
        <div 
          className="absolute right-0 top-0 w-96 h-screen opacity-[0.03] pointer-events-none z-10"
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
        
        <div className="max-w-2xl mx-auto px-6 relative z-20">
          {/* Header */}
          <header className="fade-on-scroll opacity-0">
            <div className="flex items-center gap-4 mb-12">
              <div className="w-1 h-16 bg-gradient-to-b from-amber-400 to-amber-600 rounded-full"></div>
              <div>
                <h1 className="text-4xl md:text-5xl font-bold tracking-tight text-white mb-3">
                  Ray Erewunmi
                </h1>
                <p className="text-gray-300 text-base font-light tracking-wider lowercase">
                  Builder | Philosopher | Investor
                </p>
              </div>
            </div>
            <p className="text-gray-200 text-lg md:text-xl leading-relaxed font-light">
              I find founders who build where capital intensity meets technology risk—the uncomfortable beginning points that most founders tend to avoid. My interests span finding outlier individuals, harnessing systematic forces that create breakthrough companies, and occasionally backing both with my own capital.
            </p>
          </header>
        </div>
      </div>

      <div className="max-w-2xl mx-auto px-6 relative z-10">
        {/* Previously Section */}
        <section className="mb-32 fade-on-scroll opacity-0">
          <div className="flex items-start gap-6">
            <div className="w-px h-full bg-amber-400/30 mt-8"></div>
            <div className="flex-1">
              <div className="flex items-center gap-3 mb-12">
                <div className="w-3 h-3 bg-amber-400 rounded-full"></div>
                <h2 className="text-2xl font-medium tracking-wide text-amber-400 hover:text-amber-300 transition-colors duration-300">previously</h2>
              </div>
              <div className="space-y-6 text-gray-300">
                <div className="group">
                  <div className="flex items-start gap-4">
                    <div className="w-2 h-2 bg-gray-500 rounded-full mt-2 group-hover:bg-amber-400 transition-colors duration-300"></div>
                    <div>
                      <p className="text-base font-light">Emerging technology investments at <a href="https://www.auctorgroup.com/" target="_blank" rel="noopener noreferrer" className="text-white font-medium hover:text-amber-400 transition-colors duration-200">Auctor</a></p>
                    </div>
                  </div>
                </div>
                
                <div className="group">
                  <div className="flex items-start gap-4">
                    <div className="w-2 h-2 bg-gray-500 rounded-full mt-2 group-hover:bg-amber-400 transition-colors duration-300"></div>
                    <div>
                      <p className="text-base font-light">Defense private equity at <a href="https://www.stellexcapital.com/" target="_blank" rel="noopener noreferrer" className="text-white font-medium hover:text-amber-400 transition-colors duration-200">Stellex</a></p>
                    </div>
                  </div>
                </div>
                
                <div className="group">
                  <div className="flex items-start gap-4">
                    <div className="w-2 h-2 bg-gray-500 rounded-full mt-2 group-hover:bg-amber-400 transition-colors duration-300"></div>
                    <div>
                      <p className="text-base font-light">Technology research at <a href="https://www.ubs.com/ch/en/microsites/ubs-acquisition-of-credit-suisse.html" target="_blank" rel="noopener noreferrer" className="text-white font-medium hover:text-amber-400 transition-colors duration-200">Credit Suisse</a> (top 0.5% globally in their coding challenge)</p>
                    </div>
                  </div>
                </div>

                <div className="group">
                  <div className="flex items-start gap-4">
                    <div className="w-2 h-2 bg-gray-500 rounded-full mt-2 group-hover:bg-amber-400 transition-colors duration-300"></div>
                    <div>
                      <p className="text-base font-light">Credit Suisse Scholar (full academic scholarship)</p>
                    </div>
                  </div>
                </div>

                <div className="group">
                  <div className="flex items-start gap-4">
                    <div className="w-2 h-2 bg-gray-500 rounded-full mt-2 group-hover:bg-amber-400 transition-colors duration-300"></div>
                    <div>
                      <p className="text-base font-light">Law, Art History & Philosophy at <a href="https://www.cam.ac.uk/" target="_blank" rel="noopener noreferrer" className="text-white font-medium hover:text-amber-400 transition-colors duration-200">Cambridge</a> (dropped out to build)</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Funding and Building Section */}
        <section className="mb-32 fade-on-scroll opacity-0">
          <div className="flex items-start gap-6">
            <div className="w-px h-full bg-emerald-400/30 mt-8"></div>
            <div className="flex-1">
              <div className="flex items-center gap-3 mb-12">
                <div className="w-3 h-3 bg-amber-400 rounded-full"></div>
                <h2 className="text-2xl font-medium tracking-wide text-emerald-400 hover:text-emerald-300 transition-colors duration-300">finding, funding and building</h2>
              </div>
              <p className="text-gray-300 mb-12 text-lg leading-relaxed">
                I find exceptional individuals and breakthrough opportunities in domains where capital intensity, technological risk, and regulatory complexity create natural monopolies:
              </p>
              
              <div className="space-y-12 text-gray-300">
                <div className="group">
                  <div className="flex items-start gap-4">
                    <div className="w-2 h-2 bg-gray-500 rounded-full mt-3 group-hover:bg-amber-400 transition-colors duration-300"></div>
                    <div>
                      <h3 className="font-semibold text-white mb-3 text-xl">Critical Infrastructure</h3>
                      <p className="text-base text-gray-400 font-light">systems that can't fail</p>
                    </div>
                  </div>
                </div>
                
                <div className="group">
                  <div className="flex items-start gap-4">
                    <div className="w-2 h-2 bg-gray-500 rounded-full mt-3 group-hover:bg-amber-400 transition-colors duration-300"></div>
                    <div>
                      <h3 className="font-semibold text-white mb-3 text-xl">Novel Interfaces</h3>
                      <p className="text-base text-gray-400 font-light">minds that bridge Biological and Artificial Systems</p>
                    </div>
                  </div>
                </div>
                
                <div className="group">
                  <div className="flex items-start gap-4">
                    <div className="w-2 h-2 bg-gray-500 rounded-full mt-3 group-hover:bg-amber-400 transition-colors duration-300"></div>
                    <div>
                      <h3 className="font-semibold text-white mb-3 text-xl">Physical Assets</h3>
                      <p className="text-base text-gray-400 font-light">changing how atoms move</p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="mt-12 p-8 border-l-2 border-amber-400/30 bg-gray-900/30 backdrop-blur-sm rounded-r-lg">
                <p className="text-gray-300 text-base leading-relaxed font-light">
                  <span className="font-medium text-white">Specifically:</span> critical dual-use marine and aerospace technology, brain-computer interfaces, Human-computer interaction, advanced manufacturing in extreme environments, financial infrastructure that central banks actually use, energy systems that work without subsidies.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* What's On My Mind Section */}
        <section className="mb-32 fade-on-scroll opacity-0">
          <div className="flex items-start gap-6">
            <div className="w-px h-full bg-blue-400/30 mt-8"></div>
            <div className="flex-1">
              <div className="flex items-center gap-3 mb-12">
                <div className="w-3 h-3 bg-blue-400 rounded-full"></div>
                <h2 className="text-2xl font-medium tracking-wide text-blue-400 hover:text-blue-300 transition-colors duration-300">what's on my mind</h2>
              </div>
              <p className="text-gray-300 mb-12 text-lg leading-relaxed">
                How breakthrough adoption follows historical patterns, why exceptional individuals are drawn to certain domains, how innovation spreads despite entrenched systems, and the systematic forces that create both outlier founders and generation-defining companies:
              </p>
              
              <div className="grid gap-4">
                {[
                  'outlier talent',
                  'monopoly formation',
                  'institutional deployment',
                  'cognitive biases',
                  'historical precedents',
                  'macroeconomic forces'
                ].map((item, index) => (
                  <div key={index} className="flex items-center gap-4 group hover:translate-x-3 transition-transform duration-300">
                    <div className="w-1.5 h-1.5 bg-gray-600 rounded-full group-hover:bg-blue-400 transition-colors duration-200"></div>
                    <span className="text-gray-300 text-base font-light">{item}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* When Not Thinking About Monopolies Section */}
        <section className="mb-32 fade-on-scroll opacity-0">
          <div className="flex items-start gap-6">
            <div className="w-px h-full bg-purple-400/30 mt-8"></div>
            <div className="flex-1">
              <div className="flex items-center gap-3 mb-12">
                <div className="w-3 h-3 bg-purple-400 rounded-full"></div>
                <h2 className="text-2xl font-medium tracking-wide text-purple-400 hover:text-purple-300 transition-colors duration-300">when not thinking about monopolies</h2>
              </div>
              
              <div className="grid gap-4">
                {[
                  'Tracing how the Medici patronage system prefigured today\'s VC model',
                  'Arguing that Rothko\'s color field paintings are just systematic studies in visual cognition',
                  'Reading sci-fi that predicted today\'s regulatory battles (Asimov\'s Foundation → EU AI Act)',
                  'Wondering why people think institutional power structures are "new" when they follow 500-year-old patterns'
                ].map((item, index) => (
                  <div key={index} className="flex items-center gap-4 group hover:translate-x-3 transition-transform duration-300">
                    <div className="w-1.5 h-1.5 bg-gray-600 rounded-full group-hover:bg-purple-400 transition-colors duration-200"></div>
                    <span className="text-gray-300 text-base font-light">{item}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Background Section */}
        <section className="mb-32 fade-on-scroll opacity-0">
          <div className="flex items-start gap-6">
            <div className="w-px h-full bg-rose-400/30 mt-8"></div>
            <div className="flex-1">
              <div className="flex items-center gap-3 mb-12">
                <div className="w-3 h-3 bg-rose-400 rounded-full"></div>
                <h2 className="text-2xl font-medium tracking-wide text-rose-400 hover:text-rose-300 transition-colors duration-300">background</h2>
              </div>
              <div className="bg-gray-900/40 backdrop-blur-sm p-8 rounded-lg border border-gray-800/50">
                <p className="text-gray-300 leading-relaxed text-lg font-light">
                  Cambridge dropout. Credit Suisse Scholar. Created my own degree combining law, art history, philosophy and science. Started a company at 19, learned that regulatory restrictions kill companies faster than bad product-market fit. Now I identify exceptional individuals and help them navigate the machinery that constrains European innovation.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Contact Section */}
        <section className="mb-32 fade-on-scroll opacity-0">
          <div className="flex items-start gap-6">
            <div className="w-px h-full bg-amber-400/30 mt-8"></div>
            <div className="flex-1">
              <div className="flex items-center gap-4 p-8 bg-gradient-to-r from-gray-900/50 to-gray-800/50 backdrop-blur-sm rounded-lg border border-amber-400/20">
                <div className="w-4 h-4 bg-amber-400 rounded-full animate-pulse"></div>
                <p className="text-gray-300 text-lg">
                  <span className="font-medium text-white">reach me:</span>{" "}
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
            </div>
          </div>
        </section>

        {/* Footer */}
        <footer className="text-gray-400 text-base leading-relaxed font-light border-t border-gray-800/50 pt-12 mb-16 fade-on-scroll opacity-0">
          <p>
            If you're building something that requires serious capital, regulatory approval, or institutional buy-in—especially if everyone else thinks it's "too hard" or "impossible to sell"—let's chat.
          </p>
        </footer>
      </div>
    </div>
  );
};

export default Index;