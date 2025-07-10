
const Index = () => {
  return (
    <div className="min-h-screen bg-[#0a0a0a] text-gray-100 font-satoshi">
      <div className="max-w-2xl mx-auto px-6 py-12 md:py-20">
        {/* Header */}
        <header className="mb-12">
          <h1 className="text-2xl md:text-3xl font-medium mb-6 text-white">
            Ray Erewunmi
          </h1>
          <p className="text-gray-300 text-base md:text-lg leading-relaxed mb-6">
            I find founders who build where capital intensity meets technology risk—the uncomfortable beginning points that most people systematically avoid. Regulatory complexity isn't a bug, it's the feature that builds monopolies.
          </p>
        </header>

        {/* Funding and Building Section */}
        <section className="mb-12">
          <h2 className="text-lg font-medium mb-4 text-white">funding and building</h2>
          <p className="text-gray-300 mb-6">
            Ventures where capital intensity, technological risk and regulatory hurdles creates natural monopolies:
          </p>
          
          <div className="space-y-6 text-gray-300">
            <div>
              <h3 className="font-medium text-white mb-2">Critical Infrastructure</h3>
              <p className="text-sm text-gray-400">systems that can't fail</p>
            </div>
            
            <div>
              <h3 className="font-medium text-white mb-2">Novel Interfaces:</h3>
              <p className="text-sm text-gray-400">Connecting Biological and Artificial Systems</p>
            </div>
            
            <div>
              <h3 className="font-medium text-white mb-2">Physical Assets:</h3>
              <p className="text-sm text-gray-400">changing how atoms move</p>
            </div>
          </div>

          <p className="text-gray-300 mt-6 text-sm leading-relaxed">
            <span className="font-medium text-white">Specifically:</span> critical dual-use marine and aerospace technology, brain-computer interfaces, Human-computer interaction, advanced manufacturing in extreme environments, financial infrastructure that central banks actually use, energy systems that work without subsidies.
          </p>
        </section>

        {/* What I Think About Section */}
        <section className="mb-12">
          <h2 className="text-lg font-medium mb-4 text-white">what i think about</h2>
          <p className="text-gray-300 mb-6">
            How breakthrough adoption follows historical patterns, why institutional decision-making mirrors economic cycles, and the systemic forces that make certain technologies inevitable:
          </p>
          
          <ul className="space-y-2 text-gray-300 text-sm">
            <li>• frameworks for monopoly formation</li>
            <li>• institutional deployment patterns</li>
            <li>• cognitive biases in adoption cycles</li>
            <li>• historical precedents in technology waves</li>
            <li>• macroeconomic forces in innovation</li>
          </ul>
        </section>

        {/* Background Section */}
        <section className="mb-12">
          <h2 className="text-lg font-medium mb-4 text-white">background</h2>
          <p className="text-gray-300 leading-relaxed text-sm">
            Cambridge dropout. Credit Suisse Scholar. Created my own degree combining law, art history, philosophy and science. Started a company at 19 at Cambridge, raised pre-seed from professors then left to build, learned that API restrictions kill companies faster than bad product-market fit. Now I help founders navigate the institutional machinery that actually controls capital deployment.
          </p>
        </section>

        {/* Contact Section */}
        <section className="mb-12">
          <p className="text-gray-300 mb-4">
            <span className="font-medium text-white">reach me:</span>{" "}
            <a 
              href="mailto:re379@cam.ac.uk" 
              className="text-blue-400 hover:text-blue-300 transition-colors duration-200"
            >
              re379@cam.ac.uk
            </a>
            {" | "}
            <a 
              href="#" 
              className="text-blue-400 hover:text-blue-300 transition-colors duration-200"
            >
              linkedin
            </a>
          </p>
        </section>

        {/* Footer */}
        <footer className="text-gray-400 text-sm leading-relaxed">
          <p>
            If you're building something that requires serious capital, regulatory approval, or institutional buy-in—especially if everyone else thinks it's "too hard" or "impossible to sell"—let's chat.
          </p>
        </footer>
      </div>
    </div>
  );
};

export default Index;
