import { useState } from 'react';
import { Menu, X, Phone } from 'lucide-react';

interface NavigationProps {
  onScrollTo: (id: string) => void;
}

export default function Navigation({ onScrollTo }: NavigationProps) {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const handleNav = (id: string) => {
    onScrollTo(id);
    setIsMenuOpen(false);
  };

  return (
    <nav className="fixed top-0 w-full bg-white/97 backdrop-blur-md shadow-sm z-50 border-b border-champagne/40">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          <div className="flex items-center">
            <img
              src="/att.DOn5QAZFOnrw9VO8Jhc5z9AogvDYYNOS1aZxDwN_YYg.JPG"
              alt="Audrey Event Planning Catering and Treatmaking logo"
              className="h-[45px] sm:h-[62px] w-auto object-contain"
            />
          </div>

          <div className="hidden md:flex items-center space-x-8">
            <button onClick={() => handleNav('about')} className="nav-link">About</button>
            <button onClick={() => handleNav('services')} className="nav-link">Services</button>
            <button onClick={() => handleNav('gallery')} className="nav-link">Gallery</button>
            <button onClick={() => handleNav('booking')} className="nav-link">Book</button>
            <a href="tel:9516679011" className="flex items-center gap-2 text-sm text-gold font-medium hover:text-blush transition-colors duration-300">
              <Phone size={15} />
              951-667-9011
            </a>
          </div>

          <button className="md:hidden text-blush" onClick={() => setIsMenuOpen(!isMenuOpen)}>
            {isMenuOpen ? <X size={26} /> : <Menu size={26} />}
          </button>
        </div>
      </div>

      {isMenuOpen && (
        <div className="md:hidden bg-white border-t border-champagne/40">
          <div className="px-4 py-4 space-y-3">
            <button onClick={() => handleNav('about')} className="block w-full text-left py-2 nav-link">About</button>
            <button onClick={() => handleNav('services')} className="block w-full text-left py-2 nav-link">Services</button>
            <button onClick={() => handleNav('gallery')} className="block w-full text-left py-2 nav-link">Gallery</button>
            <button onClick={() => handleNav('booking')} className="block w-full text-left py-2 nav-link">Book</button>
            <a href="tel:9516679011" className="flex items-center gap-2 py-2 text-gold font-medium">
              <Phone size={15} />
              951-667-9011
            </a>
          </div>
        </div>
      )}
    </nav>
  );
}
