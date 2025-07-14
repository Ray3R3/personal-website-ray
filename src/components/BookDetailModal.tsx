import { X } from 'lucide-react';

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

interface BookDetailModalProps {
  book: Book;
  isOpen: boolean;
  onClose: () => void;
}

const BookDetailModal = ({ book, isOpen, onClose }: BookDetailModalProps) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
      {/* Backdrop */}
      <div 
        className="absolute inset-0 bg-black/60 backdrop-blur-sm"
        onClick={onClose}
      />
      
      {/* Modal */}
      <div className="relative bg-card border border-border/20 rounded-xl shadow-2xl max-w-2xl w-full max-h-[90vh] overflow-y-auto">
        {/* Close button */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 z-10 p-2 rounded-full bg-background/80 hover:bg-background transition-colors duration-200"
        >
          <X className="w-4 h-4" />
        </button>

        {/* Content */}
        <div className="p-8">
          <div className="flex flex-col md:flex-row gap-6">
            {/* Book cover */}
            <div className="flex-shrink-0">
              <div className="w-48 aspect-[3/4] overflow-hidden rounded-lg shadow-lg">
                <img 
                  src={book.image} 
                  alt={book.title}
                  className="w-full h-full object-cover"
                />
              </div>
            </div>

            {/* Book details */}
            <div className="flex-1">
              <div className="flex items-center gap-2 mb-3">
                <span className={`text-xs px-2 py-1 rounded-full ${
                  book.type === 'fiction' 
                    ? 'bg-purple-500/20 text-purple-400' 
                    : 'bg-blue-500/20 text-blue-400'
                }`}>
                  {book.type}
                </span>
                <span className="text-sm text-muted-foreground">{book.category}</span>
              </div>

              <h2 className="text-2xl font-semibold text-foreground mb-2">
                {book.title}
              </h2>
              
              <p className="text-lg text-muted-foreground mb-4">
                {book.author}
              </p>

              <div className="space-y-4">
                <div>
                  <h3 className="text-sm font-medium text-foreground mb-2 uppercase tracking-wide">
                    Description
                  </h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    {book.description}
                  </p>
                </div>

                <div>
                  <h3 className="text-sm font-medium text-foreground mb-2 uppercase tracking-wide">
                    My Thoughts
                  </h3>
                  <div className="prose prose-sm max-w-none">
                    <p className="text-sm text-muted-foreground leading-relaxed">
                      {book.thoughts}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BookDetailModal;