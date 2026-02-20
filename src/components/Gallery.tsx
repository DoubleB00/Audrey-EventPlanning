import { useState } from 'react';
import { X, ChevronLeft, ChevronRight } from 'lucide-react';

const galleryItems = [
  {
    src: '/image0.jpeg',
    alt: 'Assorted chocolate covered strawberries',
    category: 'Treats'
  },
  {
    src: '/image1.jpeg',
    alt: 'Chocolate covered strawberries and dipped oreos',
    category: 'Treats'
  },
  {
    src: '/image2.jpeg',
    alt: 'Premium dark and white chocolate strawberries',
    category: 'Treats'
  },
  {
    src: '/image3.jpeg',
    alt: 'Dessert treats with glitter oreos and strawberries',
    category: 'Treats'
  },
  {
    src: 'https://images.pexels.com/photos/1702373/pexels-photo-1702373.jpeg?auto=compress&cs=tinysrgb&w=800',
    alt: 'Beautiful event setup',
    category: 'Events'
  },
  {
    src: 'https://images.pexels.com/photos/587741/pexels-photo-587741.jpeg?auto=compress&cs=tinysrgb&w=800',
    alt: 'Elegant party decor',
    category: 'Events'
  },
  {
    src: 'https://images.pexels.com/photos/1395964/pexels-photo-1395964.jpeg?auto=compress&cs=tinysrgb&w=800',
    alt: 'Event catering spread',
    category: 'Catering'
  },
  {
    src: 'https://images.pexels.com/photos/1857157/pexels-photo-1857157.jpeg?auto=compress&cs=tinysrgb&w=800',
    alt: 'Dessert table display',
    category: 'Desserts'
  },
  {
    src: 'https://images.pexels.com/photos/1850595/pexels-photo-1850595.jpeg?auto=compress&cs=tinysrgb&w=800',
    alt: 'Party food presentation',
    category: 'Catering'
  }
];

const categories = ['All', 'Treats', 'Events', 'Catering', 'Desserts'];

export default function Gallery() {
  const [activeCategory, setActiveCategory] = useState('All');
  const [lightboxIndex, setLightboxIndex] = useState<number | null>(null);

  const filtered = activeCategory === 'All'
    ? galleryItems
    : galleryItems.filter(item => item.category === activeCategory);

  const openLightbox = (index: number) => setLightboxIndex(index);
  const closeLightbox = () => setLightboxIndex(null);

  const prev = () => {
    if (lightboxIndex === null) return;
    setLightboxIndex((lightboxIndex - 1 + filtered.length) % filtered.length);
  };

  const next = () => {
    if (lightboxIndex === null) return;
    setLightboxIndex((lightboxIndex + 1) % filtered.length);
  };

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === 'ArrowLeft') prev();
    if (e.key === 'ArrowRight') next();
    if (e.key === 'Escape') closeLightbox();
  };

  return (
    <section id="gallery" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <p className="text-xs uppercase tracking-widest text-gold mb-3 font-medium">Portfolio</p>
          <h2 className="text-5xl md:text-6xl font-script text-blush mb-4">Our Work</h2>
          <div className="w-16 h-px bg-gold mx-auto mb-6" />
          <p className="text-lg text-gray-500">A glimpse into the celebrations we've created</p>
        </div>

        <div className="flex flex-wrap justify-center gap-3 mb-10">
          {categories.map(cat => (
            <button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              className={`px-5 py-2 rounded-full text-sm font-medium transition-all duration-300 ${
                activeCategory === cat
                  ? 'bg-gold text-white shadow-md'
                  : 'border border-champagne text-gray-600 hover:border-gold hover:text-gold'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {filtered.map((item, idx) => (
            <div
              key={idx}
              className="gallery-item group overflow-hidden rounded-2xl shadow-elegant cursor-pointer relative aspect-square"
              onClick={() => openLightbox(idx)}
            >
              <img
                src={item.src}
                alt={item.alt}
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-4">
                <span className="text-white text-sm font-medium">{item.alt}</span>
              </div>
              <div className="absolute top-3 right-3 bg-white/90 backdrop-blur-sm rounded-full px-3 py-1 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <span className="text-xs text-gold font-medium">{item.category}</span>
              </div>
            </div>
          ))}
        </div>
      </div>

      {lightboxIndex !== null && (
        <div
          className="fixed inset-0 bg-black/95 z-50 flex items-center justify-center"
          onClick={closeLightbox}
          onKeyDown={handleKeyDown}
          tabIndex={0}
        >
          <button
            className="absolute top-4 right-4 text-white/80 hover:text-white transition-colors p-2 z-10"
            onClick={closeLightbox}
          >
            <X size={32} />
          </button>

          <button
            className="absolute left-4 text-white/80 hover:text-white transition-colors p-2 z-10 bg-white/10 rounded-full"
            onClick={(e) => { e.stopPropagation(); prev(); }}
          >
            <ChevronLeft size={32} />
          </button>

          <div className="max-w-4xl max-h-screen p-4 flex flex-col items-center" onClick={e => e.stopPropagation()}>
            <img
              src={filtered[lightboxIndex].src}
              alt={filtered[lightboxIndex].alt}
              className="max-w-full max-h-[80vh] object-contain rounded-xl shadow-2xl"
            />
            <div className="mt-4 text-center">
              <p className="text-white text-sm">{filtered[lightboxIndex].alt}</p>
              <p className="text-gold text-xs mt-1 uppercase tracking-widest">{filtered[lightboxIndex].category}</p>
              <p className="text-white/40 text-xs mt-3">{lightboxIndex + 1} / {filtered.length}</p>
            </div>
          </div>

          <button
            className="absolute right-4 text-white/80 hover:text-white transition-colors p-2 z-10 bg-white/10 rounded-full"
            onClick={(e) => { e.stopPropagation(); next(); }}
          >
            <ChevronRight size={32} />
          </button>
        </div>
      )}
    </section>
  );
}
