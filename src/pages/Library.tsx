import { useState, useEffect, useRef } from 'react';
import { ChevronLeft, ChevronRight, ChevronDown, ChevronUp } from 'lucide-react';
import BookDetailModal from '../components/BookDetailModal';

// Import book cover images
import scytheImage from '../assets/book-covers/scythe.jpg';
import magiciansImage from '../assets/book-covers/the-magicians.jpg';
import nameOfWindImage from '../assets/book-covers/name-of-wind.jpg';
import assassinsApprenticeImage from '../assets/book-covers/assassins-apprentice.jpg';
import neuromancerImage from '../assets/book-covers/neuromancer.jpg';
import braintrustImage from '../assets/book-covers/braintrust.jpg';
import beginningInfinityImage from '../assets/book-covers/beginning-infinity.jpg';
import godelEscherBachImage from '../assets/book-covers/godel-escher-bach.jpg';
import zenMotorcycleImage from '../assets/book-covers/zen-motorcycle.jpg';
import storyOfArtImage from '../assets/book-covers/story-of-art.jpg';
import sapiensImage from '../assets/book-covers/sapiens.jpg';
import treasureIslandsImage from '../assets/book-covers/treasure-islands.jpg';
import codeImage from '../assets/book-covers/code.jpg';
import hackersImage from '../assets/book-covers/hackers.jpg';
import mythicalManMonthImage from '../assets/book-covers/mythical-man-month.jpg';
import shoeDogImage from '../assets/book-covers/shoe-dog.jpg';
import competitiveStrategyImage from '../assets/book-covers/competitive-strategy.jpg';
import deadCompaniesImage from '../assets/book-covers/dead-companies.jpg';
import dreamsFatherImage from '../assets/book-covers/dreams-father.jpg';
import billionDollarsImage from '../assets/book-covers/billion-dollars.jpg';
import syntheticIntelligenceImage from '../assets/book-covers/synthetic-intelligence.jpg';

interface Book {
  id: number;
  title: string;
  author: string;
  status: 'reading' | 'read';
  category: string;
  type: 'fiction' | 'non-fiction';
  image: string;
  description: string;
  thoughts: string;
}

const books: Book[] = [
  // Fiction
  {
    id: 1,
    title: "Scythe",
    author: "Neal Shusterman",
    status: "read",
    category: "Dystopian Sci-Fi",
    type: "fiction",
    image: scytheImage,
    description: "Dystopian sci-fi that wrestles with ethics, technology, and what it means to be human.",
    thoughts: "Shusterman brilliantly explores the institutional mechanics of power when death becomes optional. The concept of 'scythes' as necessary agents of population control mirrors how breakthrough technologies often require new institutional frameworks. It's a masterclass in how ethical systems must evolve alongside technological capability—directly relevant to how we think about AI governance and the architecture of future decision-making systems."
  },
  {
    id: 2,
    title: "The Magicians",
    author: "Lev Grossman",
    status: "reading",
    category: "Modern Fantasy",
    type: "fiction",
    image: magiciansImage,
    description: "Modern fantasy exploring power, disillusionment, and the search for meaning.",
    thoughts: "What happens when you get everything you thought you wanted? Grossman deconstructs the fantasy of mastery and expertise, showing how technical competence doesn't automatically translate to wisdom or fulfillment. This resonates deeply with Silicon Valley culture and the mythology of disruption—the book exposes the gap between capability and purpose that drives so much institutional dysfunction."
  },
  {
    id: 3,
    title: "The Name of the Wind",
    author: "Patrick Rothfuss",
    status: "read",
    category: "Epic Fantasy",
    type: "fiction",
    image: nameOfWindImage,
    description: "Beautifully crafted fantasy about storytelling, knowledge, and ambition.",
    thoughts: "Rothfuss understands that knowledge acquisition isn't just about facts—it's about developing cognitive frameworks that allow you to see patterns others miss. Kvothe's journey through the University mirrors how breakthrough thinking emerges from interdisciplinary collision. The magic system based on understanding true names reflects how mastery comes from grasping underlying principles rather than surface techniques."
  },
  {
    id: 4,
    title: "Assassin's Apprentice",
    author: "Robin Hobb",
    status: "read",
    category: "Royal Fantasy",
    type: "fiction",
    image: assassinsApprenticeImage,
    description: "Fantasy classic mixing royal intrigue, loyalty, and coming-of-age journeys.",
    thoughts: "Hobb's exploration of institutional loyalty vs personal ethics anticipates many modern dilemmas about organizational culture. Fitz's position as both insider and outsider mirrors the role of institutional entrepreneurs—those who must navigate existing power structures while working to transform them. The magic system based on emotional bonds reflects how real influence operates through relationship networks, not formal authority."
  },
  {
    id: 5,
    title: "Neuromancer",
    author: "William Gibson",
    status: "read",
    category: "Cyberpunk",
    type: "fiction",
    image: neuromancerImage,
    description: "Cyberpunk's foundational text, mixing tech speculation, noir, and dazzling prose.",
    thoughts: "Gibson didn't just predict the internet—he understood how technology would reshape consciousness itself. The novel's vision of corporate-dominated virtual spaces feels prophetic today. More importantly, it shows how breakthrough technologies don't just solve problems; they create entirely new categories of human experience. Essential reading for understanding how digital systems become cognitive extensions."
  },
  
  // Non-Fiction
  {
    id: 6,
    title: "Braintrust: What Neuroscience Tells Us About Morality",
    author: "Patricia Churchland",
    status: "read",
    category: "Neurophilosophy",
    type: "non-fiction",
    image: braintrustImage,
    description: "Neurophilosophy's challenge to ethics and the nature of moral thought.",
    thoughts: "Churchland demolishes the idea that moral reasoning happens in some ethereal realm separate from biology. Her work shows how cooperation and ethical behavior emerge from evolutionary pressures and neural architecture. This has profound implications for institutional design—instead of imposing abstract moral frameworks, we should design systems that align with how human psychology actually works."
  },
  {
    id: 7,
    title: "The Beginning of Infinity",
    author: "David Deutsch",
    status: "read",
    category: "Physics & Philosophy",
    type: "non-fiction",
    image: beginningInfinityImage,
    description: "Radical optimism about knowledge, progress, and the possibility of solving any problem.",
    thoughts: "Deutsch's central insight—that all evil is due to insufficient knowledge—reframes every institutional failure as an epistemological problem. His vision of knowledge as infinite and improvable provides the philosophical foundation for breakthrough thinking. The book shows why certain types of systems can continue improving indefinitely while others hit fundamental limits."
  },
  {
    id: 8,
    title: "Gödel, Escher, Bach",
    author: "Douglas Hofstadter",
    status: "read",
    category: "Consciousness & Logic",
    type: "non-fiction",
    image: godelEscherBachImage,
    description: "A cult classic on self-reference, logic, art, and consciousness.",
    thoughts: "Hofstadter reveals how complex systems develop emergent properties through self-reference and recursive loops. This is the key to understanding how breakthrough innovations emerge—they often involve systems that can model and modify themselves. The book's exploration of strange loops illuminates how institutions can evolve beyond their original design constraints."
  },
  {
    id: 9,
    title: "Zen and the Art of Motorcycle Maintenance",
    author: "Robert Pirsig",
    status: "read",
    category: "Philosophy",
    type: "non-fiction",
    image: zenMotorcycleImage,
    description: "Philosophical inquiry into quality, craftsmanship, and meaning.",
    thoughts: "Pirsig's concept of 'Quality' as the source of all value resonates with anyone who's tried to build something excellent. His distinction between classical and romantic understanding maps perfectly onto the tension between systematic thinking and intuitive insight. The book argues that breakthrough work emerges when these modes complement rather than compete with each other."
  },
  {
    id: 10,
    title: "The Story of Art",
    author: "E.H. Gombrich",
    status: "read",
    category: "Art History",
    type: "non-fiction",
    image: storyOfArtImage,
    description: "Elegant, readable history of art, perfect for broadening creative perspective.",
    thoughts: "Gombrich shows how artistic breakthroughs often emerge from technical constraints and cultural collision. His analysis of how artists solve visual problems parallels how innovators in any field push against limitations to create new possibilities. The progression from representation to abstraction mirrors how conceptual thinking evolves in any domain."
  },
  {
    id: 11,
    title: "Sapiens",
    author: "Yuval Noah Harari",
    status: "read",
    category: "Anthropology",
    type: "non-fiction",
    image: sapiensImage,
    description: "Brilliant narrative of human evolution, society, and ideas.",
    thoughts: "Harari's insight that large-scale cooperation depends on shared fictions is crucial for understanding institutional design. Religions, corporations, and nation-states are all 'imagined orders' that become real through collective belief. This explains why breakthrough adoption often requires changing the stories people tell themselves about what's possible."
  },
  {
    id: 12,
    title: "Treasure Islands",
    author: "Nicholas Shaxson",
    status: "read",
    category: "Finance",
    type: "non-fiction",
    image: treasureIslandsImage,
    description: "A dive into tax havens and the shadow world of global finance and power.",
    thoughts: "Shaxson exposes how offshore finance creates parallel institutional systems that undermine democratic governance. His analysis reveals how complexity can be weaponized to obscure power relationships. Understanding these shadow networks is essential for anyone working on institutional change—you need to map the real power structure, not just the official one."
  },
  {
    id: 13,
    title: "Code: The Hidden Language of Computer Hardware and Software",
    author: "Charles Petzold",
    status: "read",
    category: "Computer Science",
    type: "non-fiction",
    image: codeImage,
    description: "A cult favorite among programmers, demystifying how computers truly work, from Morse code to modern systems. Clear, fascinating, and timeless.",
    thoughts: "Petzold builds understanding from first principles, showing how complex systems emerge from simple rules. His progression from telegraph codes to microprocessors demonstrates how breakthrough technologies often involve finding elegant abstractions that hide complexity while preserving functionality. Essential for understanding how digital systems can augment human cognition."
  },
  {
    id: 14,
    title: "Hackers: Heroes of the Computer Revolution",
    author: "Steven Levy",
    status: "read",
    category: "Technology History",
    type: "non-fiction",
    image: hackersImage,
    description: "A fun, vivid history of hacker culture and the spirit of creative coding.",
    thoughts: "Levy captures the hacker ethic of building for the joy of building—a mindset that prioritizes elegance and functionality over profit. This culture produced many of our most transformative technologies precisely because it was driven by intrinsic rather than extrinsic motivation. The book shows how breakthrough innovation often emerges from communities organized around craft rather than commerce."
  },
  {
    id: 15,
    title: "The Mythical Man-Month",
    author: "Frederick P. Brooks Jr.",
    status: "read",
    category: "Software Engineering",
    type: "non-fiction",
    image: mythicalManMonthImage,
    description: "A technical cult classic. Lessons about software engineering, project management, and why adding people to a late project makes it later. Still quoted decades later.",
    thoughts: "Brooks' insights about communication overhead and system complexity apply far beyond software. His observation that 'adding manpower to a late project makes it later' reveals fundamental truths about how knowledge work scales. The book's enduring relevance proves that some principles of institutional design are invariant across technological paradigms."
  },
  {
    id: 16,
    title: "Shoe Dog",
    author: "Phil Knight",
    status: "read",
    category: "Business Memoir",
    type: "non-fiction",
    image: shoeDogImage,
    description: "Instead of Principles, here's a gripping business memoir. Brilliant storytelling from the founder of Nike—about risk, vision, and the chaotic path of building.",
    thoughts: "Knight's story reveals how breakthrough businesses often emerge from a combination of obsession, improvisation, and willingness to operate in constant crisis mode. Nike's early years show how companies can succeed by getting the culture right even when everything else is chaos. The book demonstrates how narrative and meaning-making are as important as strategy in building enduring institutions."
  },
  {
    id: 17,
    title: "Competitive Strategy",
    author: "Michael Porter",
    status: "read",
    category: "Business Strategy",
    type: "non-fiction",
    image: competitiveStrategyImage,
    description: "The cornerstone of modern business strategy thinking. Moats, industry structure, and competitive advantage.",
    thoughts: "Porter's framework for analyzing competitive dynamics remains foundational because it focuses on structural factors rather than tactics. His five forces model shows how to think systematically about industry evolution and defensive positioning. However, the framework works best for stable industries—breakthrough innovation often involves creating entirely new competitive landscapes where traditional analysis breaks down."
  },
  {
    id: 18,
    title: "Dead Companies Walking",
    author: "Scott Fearon",
    status: "read",
    category: "Business Analysis",
    type: "non-fiction",
    image: deadCompaniesImage,
    description: "A refreshingly irreverent look at how and why businesses fail, from a hedge fund manager's perspective.",
    thoughts: "Fearon's pattern recognition around corporate failure reveals how institutions develop cognitive blind spots that prevent adaptation. His stories show how successful companies often die from their strengths—the very capabilities that created success become obstacles to necessary change. This paradox explains why breakthrough innovation often comes from outsiders rather than incumbents."
  },
  {
    id: 19,
    title: "Dreams From My Father",
    author: "Barack Obama",
    status: "read",
    category: "Political Memoir",
    type: "non-fiction",
    image: dreamsFatherImage,
    description: "Masterfully written memoir of identity, purpose, and ambition.",
    thoughts: "Obama's exploration of identity formation reveals how personal narrative shapes institutional effectiveness. His ability to navigate between different cultural contexts while maintaining coherent values demonstrates the kind of cognitive flexibility required for institutional entrepreneurship. The book shows how breakthrough leadership often involves synthesizing seemingly contradictory perspectives."
  },
  {
    id: 20,
    title: "How to Turn Down a Billion Dollars",
    author: "Billy Gallagher",
    status: "read",
    category: "Tech Business",
    type: "non-fiction",
    image: billionDollarsImage,
    description: "Inside the rise of Snapchat — modern founder culture, startup life, and tech industry realities.",
    thoughts: "Gallagher's Snapchat chronicle shows how breakthrough products often emerge from understanding cultural shifts that established players miss. The book reveals how young founders can succeed precisely because they're building for behavioral patterns that older decision-makers don't recognize as significant. It's a case study in how generational change drives institutional transformation."
  },
  {
    id: 21,
    title: "Principles of Synthetic Intelligence",
    author: "Joscha Bach",
    status: "read",
    category: "Cognitive Science",
    type: "non-fiction",
    image: syntheticIntelligenceImage,
    description: "Bach explores how minds emerge from information processing, proposing a unified model of cognition and motivation.",
    thoughts: "Bach's framework for understanding intelligence as information processing provides a foundation for thinking about how artificial and human cognition might eventually merge. His work on motivation and goal formation is particularly relevant for institutional design—it shows how to create systems that can adapt their objectives as circumstances change. Essential reading for anyone working on AI governance or human-AI collaboration."
  }
];

const Library = () => {
  const [scrollY, setScrollY] = useState(0);
  const [filter, setFilter] = useState<'all' | 'fiction' | 'non-fiction'>('all');
  const [showCompleteCollection, setShowCompleteCollection] = useState(false);
  const [selectedBook, setSelectedBook] = useState<Book | null>(null);
  const scrollContainerRef = useRef<HTMLDivElement>(null);
  
  const currentlyReading = books.find(book => book.status === 'reading');
  const readBooks = books.filter(book => book.status === 'read');
  
  const filteredBooks = filter === 'all' 
    ? readBooks 
    : readBooks.filter(book => book.type === filter);

  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollLeft = () => {
    if (scrollContainerRef.current) {
      scrollContainerRef.current.scrollBy({ left: -400, behavior: 'smooth' });
    }
  };

  const scrollRight = () => {
    if (scrollContainerRef.current) {
      scrollContainerRef.current.scrollBy({ left: 400, behavior: 'smooth' });
    }
  };

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
              <div 
                className="max-w-md bg-card rounded-lg p-8 shadow-lg border border-border/20 transform hover:scale-105 transition-transform duration-300 cursor-pointer"
                onClick={() => setSelectedBook(currentlyReading)}
              >
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
                  <div className="flex items-center gap-2 mb-3">
                    <span className="text-sm text-muted-foreground/80">{currentlyReading.category}</span>
                    <span className={`text-xs px-2 py-1 rounded-full ${
                      currentlyReading.type === 'fiction' 
                        ? 'bg-purple-500/20 text-purple-400' 
                        : 'bg-blue-500/20 text-blue-400'
                    }`}>
                      {currentlyReading.type}
                    </span>
                  </div>
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    {currentlyReading.description}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>
      )}

      {/* Filter Controls */}
      <section className="py-8 px-8">
        <div className="max-w-6xl mx-auto">
          <div className="flex justify-center gap-4 mb-8">
            <button
              onClick={() => setFilter('all')}
              className={`px-6 py-2 rounded-full font-light tracking-wide transition-all duration-300 ${
                filter === 'all' 
                  ? 'bg-primary text-primary-foreground' 
                  : 'bg-secondary/20 text-muted-foreground hover:bg-secondary/40'
              }`}
            >
              All Books
            </button>
            <button
              onClick={() => setFilter('fiction')}
              className={`px-6 py-2 rounded-full font-light tracking-wide transition-all duration-300 ${
                filter === 'fiction' 
                  ? 'bg-primary text-primary-foreground' 
                  : 'bg-secondary/20 text-muted-foreground hover:bg-secondary/40'
              }`}
            >
              Fiction
            </button>
            <button
              onClick={() => setFilter('non-fiction')}
              className={`px-6 py-2 rounded-full font-light tracking-wide transition-all duration-300 ${
                filter === 'non-fiction' 
                  ? 'bg-primary text-primary-foreground' 
                  : 'bg-secondary/20 text-muted-foreground hover:bg-secondary/40'
              }`}
            >
              Non-Fiction
            </button>
          </div>
        </div>
      </section>

      {/* Horizontal Scrolling Gallery */}
      <section className="py-8 px-8">
        <div className="max-w-7xl mx-auto">
          <div className="flex items-center justify-between mb-8">
            <h2 className="text-3xl font-light tracking-wide text-foreground">
              Previously Read
            </h2>
            <div className="flex gap-2">
              <button
                onClick={scrollLeft}
                className="p-2 rounded-full bg-secondary/20 text-muted-foreground hover:bg-secondary/40 hover:text-foreground transition-all duration-300"
              >
                <ChevronLeft className="w-5 h-5" />
              </button>
              <button
                onClick={scrollRight}
                className="p-2 rounded-full bg-secondary/20 text-muted-foreground hover:bg-secondary/40 hover:text-foreground transition-all duration-300"
              >
                <ChevronRight className="w-5 h-5" />
              </button>
            </div>
          </div>
          
          <div 
            ref={scrollContainerRef}
            className="flex gap-6 overflow-x-auto scrollbar-hide pb-4"
            style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
          >
            {filteredBooks.map((book, index) => (
              <div 
                key={book.id}
                className="flex-none w-72 bg-card rounded-lg p-6 shadow-lg border border-border/20 hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 cursor-pointer"
                style={{
                  transform: `translateY(${Math.sin((scrollY + index * 100) * 0.005) * 3}px) scale(${1 + Math.sin((scrollY + index * 50) * 0.003) * 0.02})`,
                  transition: 'transform 0.1s ease-out, box-shadow 0.3s ease-out'
                }}
                onClick={() => setSelectedBook(book)}
              >
                <div className="aspect-[3/4] mb-4 overflow-hidden rounded-lg">
                  <img 
                    src={book.image} 
                    alt={book.title}
                    className="w-full h-full object-cover hover:scale-110 transition-transform duration-500"
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
                  <div className="flex items-center gap-2 mb-3">
                    <span className="text-xs text-muted-foreground/80">{book.category}</span>
                    <span className={`text-xs px-2 py-1 rounded-full ${
                      book.type === 'fiction' 
                        ? 'bg-purple-500/20 text-purple-400' 
                        : 'bg-blue-500/20 text-blue-400'
                    }`}>
                      {book.type}
                    </span>
                  </div>
                  <p className="text-xs text-muted-foreground leading-relaxed">
                    {book.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Complete Collection - Collapsible */}
      <section className="py-16 px-8">
        <div className="max-w-6xl mx-auto">
          <button
            onClick={() => setShowCompleteCollection(!showCompleteCollection)}
            className="flex items-center justify-center gap-3 w-full text-2xl font-light tracking-wide text-foreground mb-8 opacity-60 hover:opacity-100 transition-opacity duration-300"
          >
            <span>Complete Collection</span>
            {showCompleteCollection ? (
              <ChevronUp className="w-5 h-5" />
            ) : (
              <ChevronDown className="w-5 h-5" />
            )}
          </button>
          
          {showCompleteCollection && (
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-4 animate-fade-in">
              {filteredBooks.map((book, index) => (
                <div 
                  key={`grid-${book.id}`}
                  className="bg-card/50 rounded-lg p-4 border border-border/10 hover:border-border/30 transition-all duration-300 transform hover:scale-105 cursor-pointer"
                  onClick={() => setSelectedBook(book)}
                >
                  <div className="aspect-[3/4] mb-3 overflow-hidden rounded-lg">
                    <img 
                      src={book.image} 
                      alt={book.title}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <h4 className="text-sm font-medium text-foreground mb-1 leading-tight line-clamp-2">
                    {book.title}
                  </h4>
                  <p className="text-xs text-muted-foreground mb-2">{book.author}</p>
                  <span className={`text-xs px-2 py-1 rounded-full ${
                    book.type === 'fiction' 
                      ? 'bg-purple-500/20 text-purple-400' 
                      : 'bg-blue-500/20 text-blue-400'
                  }`}>
                    {book.type}
                  </span>
                </div>
              ))}
            </div>
          )}
        </div>
      </section>

      {/* Book Detail Modal */}
      {selectedBook && (
        <BookDetailModal
          book={selectedBook}
          isOpen={!!selectedBook}
          onClose={() => setSelectedBook(null)}
        />
      )}

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