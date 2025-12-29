import React, { useState } from 'react';
import { X, ChevronLeft, ChevronRight } from 'lucide-react';

const GalleryPage: React.FC = () => {
  const [selectedImage, setSelectedImage] = useState<number | null>(null);

  const images = [
    {
      src: 'https://images.unsplash.com/photo-1566737236500-c8ac43014a67?q=80&w=1200&auto=format&fit=crop',
      category: 'Club',
    },
    {
      src: 'https://images.unsplash.com/photo-1545128485-c400e7702796?q=80&w=1200&auto=format&fit=crop',
      category: 'Events',
    },
    {
      src: 'https://images.unsplash.com/photo-1470225620780-dba8ba36b745?q=80&w=1200&auto=format&fit=crop',
      category: 'DJ',
    },
    {
      src: 'https://images.unsplash.com/photo-1516450360452-9312f5e86fc7?q=80&w=1200&auto=format&fit=crop',
      category: 'Crowd',
    },
    {
      src: 'https://images.unsplash.com/photo-1514525253161-7a46d19cd819?q=80&w=1200&auto=format&fit=crop',
      category: 'Events',
    },
    {
      src: 'https://images.unsplash.com/photo-1571266028243-e4733b0f0bb0?q=80&w=1200&auto=format&fit=crop',
      category: 'DJ',
    },
    {
      src: 'https://images.unsplash.com/photo-1493225457124-a3eb161ffa5f?q=80&w=1200&auto=format&fit=crop',
      category: 'Club',
    },
    {
      src: 'https://images.unsplash.com/photo-1571266025472-a68022dc7985?q=80&w=1200&auto=format&fit=crop',
      category: 'Lights',
    },
    {
      src: 'https://images.unsplash.com/photo-1563351672-62b74891a28a?q=80&w=1200&auto=format&fit=crop',
      category: 'VIP',
    },
    {
      src: 'https://images.unsplash.com/photo-1550684848-fac1c5b4e853?q=80&w=1200&auto=format&fit=crop',
      category: 'Art',
    },
    {
      src: 'https://images.unsplash.com/photo-1598387993441-a364f854c3e1?q=80&w=1200&auto=format&fit=crop',
      category: 'Events',
    },
    {
      src: 'https://images.unsplash.com/photo-1574391884720-bbc3740c59d1?q=80&w=1200&auto=format&fit=crop',
      category: 'Club',
    },
  ];

  const categories = ['All', ...new Set(images.map(img => img.category))];
  const [activeCategory, setActiveCategory] = useState('All');

  const filteredImages = activeCategory === 'All' 
    ? images 
    : images.filter(img => img.category === activeCategory);

  const navigate = (direction: 'prev' | 'next') => {
    if (selectedImage === null) return;
    const currentIndex = filteredImages.findIndex((_, i) => i === selectedImage);
    if (direction === 'prev') {
      setSelectedImage(currentIndex === 0 ? filteredImages.length - 1 : currentIndex - 1);
    } else {
      setSelectedImage(currentIndex === filteredImages.length - 1 ? 0 : currentIndex + 1);
    }
  };

  return (
    <div className="min-h-screen pt-32 pb-20">
      {/* Hero Section */}
      <div className="container mx-auto px-4 md:px-8 mb-16">
        <h1 className="font-display text-6xl md:text-9xl font-bold uppercase mb-6">
          Gallery
        </h1>
        <p className="text-xl text-gray-400 max-w-2xl">
          Immerse yourself in the visual journey of Taj Mahal. 
          Moments captured from unforgettable nights.
        </p>
      </div>

      {/* Category Filter */}
      <div className="container mx-auto px-4 md:px-8 mb-12">
        <div className="flex flex-wrap gap-3">
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setActiveCategory(category)}
              className={`px-6 py-3 rounded-full font-bold uppercase text-sm transition-all ${
                activeCategory === category
                  ? 'bg-taj-gold text-black'
                  : 'border border-white/20 hover:border-taj-gold hover:text-taj-gold'
              }`}
            >
              {category}
            </button>
          ))}
        </div>
      </div>

      {/* Gallery Grid */}
      <div className="container mx-auto px-4 md:px-8">
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
          {filteredImages.map((image, index) => (
            <div
              key={index}
              onClick={() => setSelectedImage(index)}
              className={`cursor-pointer overflow-hidden rounded-2xl ${
                index % 5 === 0 ? 'md:col-span-2 md:row-span-2' : ''
              }`}
            >
              <div className="aspect-square relative group">
                <img
                  src={image.src}
                  alt={`Gallery ${index + 1}`}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-black/0 group-hover:bg-black/40 transition-colors flex items-center justify-center">
                  <span className="opacity-0 group-hover:opacity-100 transition-opacity bg-white/10 backdrop-blur-md px-4 py-2 rounded-full text-sm font-bold uppercase">
                    {image.category}
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Lightbox */}
      {selectedImage !== null && (
        <div className="fixed inset-0 bg-black/95 z-50 flex items-center justify-center">
          <button
            onClick={() => setSelectedImage(null)}
            className="absolute top-6 right-6 w-12 h-12 rounded-full bg-white/10 flex items-center justify-center hover:bg-white hover:text-black transition-colors"
          >
            <X size={24} />
          </button>
          
          <button
            onClick={() => navigate('prev')}
            className="absolute left-6 top-1/2 -translate-y-1/2 w-12 h-12 rounded-full bg-white/10 flex items-center justify-center hover:bg-white hover:text-black transition-colors"
          >
            <ChevronLeft size={24} />
          </button>
          
          <button
            onClick={() => navigate('next')}
            className="absolute right-6 top-1/2 -translate-y-1/2 w-12 h-12 rounded-full bg-white/10 flex items-center justify-center hover:bg-white hover:text-black transition-colors"
          >
            <ChevronRight size={24} />
          </button>

          <img
            src={filteredImages[selectedImage].src}
            alt={`Gallery ${selectedImage + 1}`}
            className="max-w-[90vw] max-h-[90vh] object-contain rounded-lg"
          />
        </div>
      )}

      {/* CTA Section */}
      <div className="container mx-auto px-4 md:px-8 mt-20">
        <div className="bg-taj-dark rounded-3xl p-8 md:p-16 text-center">
          <h3 className="font-display text-4xl md:text-6xl font-bold uppercase mb-6">
            Share Your Moments
          </h3>
          <p className="text-gray-400 mb-8 max-w-xl mx-auto">
            Tag us on Instagram @tajmahalsharm for a chance to be featured in our gallery.
          </p>
          <a 
            href="https://instagram.com" 
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-3 bg-gradient-to-r from-purple-500 via-pink-500 to-orange-500 text-white font-bold uppercase px-8 py-4 rounded-full hover:opacity-90 transition-opacity"
          >
            Follow @tajmahalsharm
          </a>
        </div>
      </div>
    </div>
  );
};

export default GalleryPage;

