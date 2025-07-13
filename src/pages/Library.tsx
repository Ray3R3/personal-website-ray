import { useState, useEffect } from 'react';
import { ChevronLeft } from 'lucide-react';

interface Book {
  id: number;
  title: string;
  author: string;
  status: 'reading' | 'read';
  category: string;
  image: string;
  description: string;
}

const books: Book[] = [
  {
    id: 1,
    title: "The Structure of Scientific Revolutions",
    author: "Thomas S. Kuhn",
    status: "read",
    category: "Philosophy of Science",
    image: "/lovable-uploads/02c320e6-f01e-40c5-ab9c-6cac9688a0ec.png",
    description: "How scientific paradigms shift and what it means for breakthrough innovation."
  },
  {
    id: 2,
    title: "Foundation",
    author: "Isaac Asimov",
    status: "reading",
    category: "Science Fiction",
    image: "/lovable-uploads/0b1ff97e-2062-4113-883f-01359307aedb.png",
    description: "Psychohistory and the mathematics of civilization collapse and renewal."
  },
  {
    id: 3,
    title: "The Medici Effect",
    author: "Frans Johansson",
    status: "read",
    category: "Innovation",
    image: "/lovable-uploads/2bdbc61c-1813-4c03-b2a2-89c224d65fa4.png",
    description: "How breakthrough ideas emerge at the intersection of disciplines."
  },
  {
    id: 4,
    title: "Zero to One",
    author: "Peter Thiel",
    status: "read",
    category: "Business",
    image: "/lovable-uploads/40a96855-c9b0-49cf-b573-998cd979be56.png",
    description: "Notes on startups and building monopolies that create value."
  },
  {
    id: 5,
    title: "The Art of War",
    author: "Sun Tzu",
    status: "read",
    category: "Strategy",
    image: "/lovable-uploads/618d0172-f7d4-4f24-bfbb-54b7f37a1d7c.png",
    description: "Strategic thinking that applies to business and institutional navigation."
  },
  {
    id: 6,
    title: "Ways of Seeing",
    author: "John Berger",
    status: "read",
    category: "Art Theory",
    image: "/lovable-uploads/6f7e419a-cada-4358-9f77-78a2da5626b4.png",
    description: "How we perceive visual culture and what it reveals about power structures."
  },
  {
    id: 7,
    title: "The Sovereign Individual",
    author: "James Dale Davidson",
    status: "read",
    category: "Economics",
    image: "/lovable-uploads/77682d7c-a923-4df3-9e0c-2a4f0b449d28.png",
    description: "How technology transforms governance and individual autonomy."
  },
  {
    id: 8,
    title: "Antifragile",
    author: "Nassim Nicholas Taleb",
    status: "read",
    category: "Risk",
    image: "/lovable-uploads/7a8d8dd1-3036-4be0-a743-9050f9ab2ebd.png",
    description: "Systems that gain from disorder and how to build resilient structures."
  },
  {
    id: 9,
    title: "The Innovator's Dilemma",
    author: "Clayton M. Christensen",
    status: "read",
    category: "Innovation",
    image: "/lovable-uploads/9065d938-4080-4a30-82c5-71d998633f42.png",
    description: "Why successful companies fail and how disruptive innovation works."
  },
  {
    id: 10,
    title: "Gödel, Escher, Bach",
    author: "Douglas Hofstadter",
    status: "read",
    category: "Cognitive Science",
    image: "/lovable-uploads/a8d0c9f1-8b95-4207-870d-2f03a99ac1f6.png",
    description: "An eternal golden braid connecting mathematics, art, and consciousness."
  }
];

const Library = () => {
  const [scrollY, setScrollY] = useState(0);
  const currentlyReading = books.find(book => book.status === 'reading');
  const readBooks = books.filter(book => book.status === 'read');

  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="min-h-screen bg-background text-foreground">
      {/* Navigation */}
      <nav className="absolute top-8 left-8 z-20">
        <a 
          href="/" 
          className="flex items-center gap-2 text-muted-foreground hover:text-foreground transition-colors duration-300"
        >
          <ChevronLeft className="w-4 h-4" />
          <span className="font-light tracking-wide">Back</span>
        </a>
      </nav>

      {/* Header */}
      <section className="pt-32 pb-16 px-8">
        <div className="max-w-6xl mx-auto">
          <div 
            className="transform transition-transform duration-700"
            style={{ transform: `translateY(${scrollY * 0.1}px)` }}
          >
            <h1 className="text-6xl md:text-8xl font-light tracking-tight text-foreground mb-6">
              Library
            </h1>
            <p className="text-xl text-muted-foreground font-light max-w-2xl">
              The books that shape how I think about systems, innovation, and the intersection of disciplines. Each one a piece of the larger framework for understanding breakthrough adoption and institutional change.
            </p>
          </div>
        </div>
      </section>

      {/* Currently Reading - Center Feature */}
      {currentlyReading && (
        <section className="py-16 px-8">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-3xl font-light tracking-wide text-foreground mb-12 text-center">
              Currently Reading
            </h2>
            <div className="flex justify-center">
              <div className="max-w-md bg-card rounded-lg p-8 shadow-lg border border-border/20 transform hover:scale-105 transition-transform duration-300">
                <div className="aspect-[3/4] mb-6 overflow-hidden rounded-lg">
                  <img 
                    src={currentlyReading.image} 
                    alt={currentlyReading.title}
                    className="w-full h-full object-cover"
                  />
                </div>
                <div 
                  className="transform transition-transform duration-700"
                  style={{ transform: `translateX(${Math.sin(scrollY * 0.01) * 5}px)` }}
                >
                  <h3 className="text-xl font-medium text-foreground mb-2">
                    {currentlyReading.title}
                  </h3>
                  <p className="text-muted-foreground mb-2">{currentlyReading.author}</p>
                  <p className="text-sm text-muted-foreground/80 mb-3">{currentlyReading.category}</p>
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    {currentlyReading.description}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>
      )}

      {/* Read Books Grid */}
      <section className="py-16 px-8">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-light tracking-wide text-foreground mb-12 text-center">
            Previously Read
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
            {readBooks.map((book, index) => (
              <div 
                key={book.id}
                className="bg-card rounded-lg p-6 shadow-lg border border-border/20 hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1"
                style={{
                  transform: `translateY(${Math.sin((scrollY + index * 100) * 0.005) * 3}px)`,
                  transition: 'transform 0.1s ease-out'
                }}
              >
                <div className="aspect-[3/4] mb-4 overflow-hidden rounded-lg">
                  <img 
                    src={book.image} 
                    alt={book.title}
                    className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                  />
                </div>
                <div>
                  <h3 
                    className="text-lg font-medium text-foreground mb-2 leading-tight"
                    style={{
                      transform: `translateX(${Math.sin((scrollY + index * 50) * 0.008) * 2}px)`,
                      transition: 'transform 0.1s ease-out'
                    }}
                  >
                    {book.title}
                  </h3>
                  <p className="text-muted-foreground mb-2 text-sm">{book.author}</p>
                  <p className="text-xs text-muted-foreground/80 mb-3">{book.category}</p>
                  <p className="text-xs text-muted-foreground leading-relaxed">
                    {book.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-16 px-8 border-t border-border/30">
        <div className="max-w-6xl mx-auto text-center">
          <p className="text-muted-foreground font-light">
            "A room without books is like a body without a soul" — Cicero
          </p>
        </div>
      </footer>
    </div>
  );
};

export default Library;