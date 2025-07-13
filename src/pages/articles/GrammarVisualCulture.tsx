import { useEffect, useState } from 'react';

const GrammarVisualCulture = () => {
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
              December 10, 2023
            </time>
            <h1 className="text-4xl md:text-6xl font-light tracking-tight text-foreground mt-4 mb-8 leading-tight">
              The Grammar of Visual Culture
            </h1>
            <div className="aspect-video mb-12 rounded-lg overflow-hidden">
              <img 
                src="https://images.unsplash.com/photo-1541961017774-22349e4a1262" 
                alt="Museum gallery with modern art"
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
              How aesthetic choices communicate power structures, social hierarchies, and cultural values—and why understanding visual semiotics matters for anyone trying to influence culture.
            </p>
            
            <p>Every visual choice is a statement about power. The height of a ceiling, the weight of a font, the saturation of a color—these aren't neutral design decisions. They're arguments about who matters, what values should dominate, and how society should be organized.</p>

            <p>Consider the visual language of authority. Governments use specific architectural styles, tech companies adopt particular interface metaphors, luxury brands employ certain color palettes. These choices aren't arbitrary—they're calculated deployments of symbolic power that shape how we think and feel about institutions.</p>

            <div className="aspect-video mb-8 rounded-lg overflow-hidden">
              <img 
                src="https://images.unsplash.com/photo-1449157291145-7efd050a4d0e" 
                alt="Institutional architecture"
                className="w-full h-full object-cover"
              />
            </div>

            <p>The grammar of visual culture operates at multiple levels. Surface aesthetics communicate immediate emotional responses—warm or cold, approachable or intimidating, innovative or traditional. But deeper structural elements convey more complex messages about hierarchy, access, and belonging.</p>

            <p>Digital platforms have become the new cathedrals of cultural power. Their interface decisions shape how billions of people communicate, learn, and form opinions. The choice to make something visible or hidden, prominent or buried, is fundamentally an editorial choice about what kinds of content and behavior should be amplified.</p>

            <p>Understanding this grammar isn't just academic—it's practical. Anyone building institutions, products, or movements needs to think carefully about the visual signals they're sending. Are your design choices reinforcing the hierarchies you want to challenge? Are they accessible to the communities you claim to serve?</p>

            <div className="aspect-video mb-8 rounded-lg overflow-hidden">
              <img 
                src="https://images.unsplash.com/photo-1460925895917-afdab827c52f" 
                alt="Design workspace"
                className="w-full h-full object-cover"
              />
            </div>

            <p>The most powerful visual languages don't just communicate existing power structures—they imagine new ones. They create visual vocabularies for values and relationships that don't yet exist in the mainstream. This is why countercultures invest so heavily in aesthetic innovation.</p>

            <p>The future of influence belongs to those who can read and write in the grammar of visual culture. Not just as consumers of existing symbolic systems, but as creators of new visual languages that encode different values and possibilities for human organization.</p>
          </div>
        </div>
      </article>
    </div>
  );
};

export default GrammarVisualCulture;