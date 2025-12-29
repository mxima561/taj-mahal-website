import React from 'react';
import Hero from '../components/Hero';
import SectionTitle from '../components/SectionTitle';
import Carousel from '../components/Carousel';
import { RESIDENTS, NEWS_ITEMS } from '../constants';
import { Link } from 'react-router-dom';

const HomePage: React.FC = () => {
  return (
    <>
      {/* Hero Section */}
      <Hero />

      {/* Events Section */}
      <section id="events" className="relative pb-20">
        <SectionTitle title="Events" />
        
        <div className="relative z-10 -mt-[30vh]">
          <Carousel>
            {RESIDENTS.map((artist) => (
              <Link to="/events" key={artist.id} className="snap-center shrink-0 w-[85vw] md:w-[25vw] relative group cursor-pointer">
                <div className="aspect-[3/4] overflow-hidden rounded-2xl bg-gray-900 relative">
                  <div className="absolute top-4 left-4 z-20">
                    <span className="bg-white/10 backdrop-blur-md px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider border border-white/20">
                      {artist.residency}
                    </span>
                  </div>
                  <img 
                    src={artist.image} 
                    alt={artist.name}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-60 group-hover:opacity-40 transition-opacity" />
                  <div className="absolute bottom-0 left-0 w-full p-6 transform translate-y-2 group-hover:translate-y-0 transition-transform duration-300">
                    <h3 className="font-display text-4xl md:text-5xl font-bold uppercase leading-none">
                      {artist.name}
                    </h3>
                  </div>
                </div>
              </Link>
            ))}
          </Carousel>
        </div>
      </section>

      {/* Text Interlude */}
      <section className="relative py-32 px-4 bg-taj-black z-20">
        <div className="container mx-auto max-w-4xl text-center">
          <h3 className="font-display text-6xl md:text-9xl font-bold text-taj-dark mb-8 uppercase select-none opacity-50">
            The Experience
          </h3>
          <p className="text-xl md:text-3xl font-light leading-relaxed text-gray-300">
            Officially the crown jewel of Sharm El Sheikh nightlife. <br className="hidden md:block" />
            <span className="text-taj-gold font-normal">Taj Mahal</span> is a sensory masterpiece featuring world-class sound, 
            immersive production, and an atmosphere that transcends borders.
          </p>
          <div className="mt-12">
            <Link to="/about" className="text-sm font-bold uppercase tracking-[0.2em] border-b border-taj-gold pb-1 hover:text-taj-gold transition-colors">
              Discover The Club
            </Link>
          </div>
        </div>
      </section>

      {/* News Section */}
      <section id="news" className="relative pb-20">
        <SectionTitle title="Latest News" />
        
        <div className="relative z-10 -mt-[30vh]">
          <Carousel>
            {NEWS_ITEMS.map((item) => (
              <Link to="/events" key={item.id} className="snap-center shrink-0 w-[85vw] md:w-[30vw] relative group cursor-pointer">
                <div className="aspect-square overflow-hidden rounded-2xl bg-gray-900 relative">
                  <div className="absolute top-4 right-4 z-20">
                    <span className="bg-taj-gold text-black px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider">
                      {item.category}
                    </span>
                  </div>
                  <img 
                    src={item.image} 
                    alt={item.title}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105 filter grayscale group-hover:grayscale-0"
                  />
                  <div className="absolute inset-0 bg-black/20 group-hover:bg-transparent transition-colors" />
                </div>
                <div className="mt-6 px-2">
                  <h3 className="font-display text-3xl font-bold uppercase leading-tight group-hover:text-taj-gold transition-colors">
                    {item.title}
                  </h3>
                  <div className="mt-4">
                    <span className="text-sm uppercase tracking-wider border border-white/20 rounded-full px-6 py-2 hover:bg-white hover:text-black transition-all inline-block">
                      Read More
                    </span>
                  </div>
                </div>
              </Link>
            ))}
          </Carousel>
        </div>
      </section>

      {/* Club Gallery Section */}
      <section className="relative py-20 md:py-32 overflow-hidden bg-taj-dark">
        <div className="container mx-auto px-4 md:px-8">
          <div className="grid md:grid-cols-2 gap-8 md:gap-16 items-center mb-12">
            <div>
              <h2 className="font-display text-5xl md:text-8xl font-bold uppercase mb-6 leading-none">
                Inside <br/> <span className="text-taj-gold">Taj Mahal</span>
              </h2>
              <p className="text-lg text-gray-400 mb-8 max-w-md">
                Step into Sharm El Sheikh's most iconic nightlife destination. World-class sound, 
                stunning visuals, and an atmosphere that keeps you coming back.
              </p>
              <Link to="/gallery" className="bg-white text-black font-bold uppercase px-8 py-4 rounded-full hover:bg-taj-gold transition-colors inline-block">
                Explore Gallery
              </Link>
            </div>
            <div className="hidden md:block text-right">
              <p className="text-9xl font-display font-bold text-white/5 uppercase leading-none">
                Since<br/>2020
              </p>
            </div>
          </div>
          
          {/* Photo Grid */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-3 md:gap-4">
            <Link to="/gallery" className="group col-span-2 row-span-2 aspect-square rounded-2xl overflow-hidden relative">
              <img 
                src="https://images.unsplash.com/photo-1566737236500-c8ac43014a67?q=80&w=1200&auto=format&fit=crop" 
                alt="Club Main Floor"
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
              <div className="absolute bottom-4 left-4 opacity-0 group-hover:opacity-100 transition-opacity">
                <span className="bg-taj-gold text-black px-3 py-1 rounded-full text-xs font-bold uppercase">Main Floor</span>
              </div>
            </Link>
            <Link to="/gallery" className="group aspect-square rounded-2xl overflow-hidden relative">
              <img 
                src="https://images.unsplash.com/photo-1470225620780-dba8ba36b745?q=80&w=600&auto=format&fit=crop" 
                alt="DJ Booth"
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-black/20 group-hover:bg-transparent transition-colors" />
            </Link>
            <Link to="/gallery" className="group aspect-square rounded-2xl overflow-hidden relative">
              <img 
                src="https://images.unsplash.com/photo-1516450360452-9312f5e86fc7?q=80&w=600&auto=format&fit=crop" 
                alt="Crowd"
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-black/20 group-hover:bg-transparent transition-colors" />
            </Link>
            <Link to="/gallery" className="group aspect-square rounded-2xl overflow-hidden relative">
              <img 
                src="https://images.unsplash.com/photo-1545128485-c400e7702796?q=80&w=600&auto=format&fit=crop" 
                alt="VIP Area"
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-black/20 group-hover:bg-transparent transition-colors" />
            </Link>
            <Link to="/gallery" className="group aspect-square rounded-2xl overflow-hidden relative">
              <img 
                src="https://images.unsplash.com/photo-1571266028243-e4733b0f0bb0?q=80&w=600&auto=format&fit=crop" 
                alt="Lights"
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-black/20 group-hover:bg-transparent transition-colors" />
            </Link>
          </div>
        </div>
      </section>
    </>
  );
};

export default HomePage;

