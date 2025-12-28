import React from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import SectionTitle from './components/SectionTitle';
import Carousel from './components/Carousel';
import Footer from './components/Footer';
import { RESIDENTS, NEWS_ITEMS } from './constants';

function App() {
  return (
    <div className="bg-taj-black min-h-screen text-taj-white selection:bg-taj-gold selection:text-black">
      <Header />
      
      <main>
        {/* Hero Section */}
        <Hero />

        {/* Residents Section */}
        <section id="residents" className="relative pb-20">
          <SectionTitle title="Residents" />
          
          <div className="relative z-10 -mt-[30vh]">
            <Carousel>
              {RESIDENTS.map((artist) => (
                <div key={artist.id} className="snap-center shrink-0 w-[85vw] md:w-[25vw] relative group cursor-pointer">
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
                </div>
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
              <a href="#about" className="text-sm font-bold uppercase tracking-[0.2em] border-b border-taj-gold pb-1 hover:text-taj-gold transition-colors">
                Discover The Club
              </a>
            </div>
          </div>
        </section>

        {/* News & Shop Section */}
        <section id="news" className="relative pb-20">
          <SectionTitle title="Latest News" />
          
          <div className="relative z-10 -mt-[30vh]">
            <Carousel>
              {NEWS_ITEMS.map((item) => (
                <div key={item.id} className="snap-center shrink-0 w-[85vw] md:w-[30vw] relative group cursor-pointer">
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
                </div>
              ))}
            </Carousel>
          </div>
        </section>

        {/* Art Section */}
        <section className="relative min-h-screen w-full flex items-center justify-center overflow-hidden bg-taj-dark">
           <div className="container mx-auto px-4 relative z-10 grid md:grid-cols-2 gap-12 items-center">
              <div className="order-2 md:order-1">
                 <h2 className="font-display text-5xl md:text-8xl font-bold uppercase mb-6 leading-none">
                   Immersive <br/> <span className="text-taj-gold">Art</span>
                 </h2>
                 <p className="text-lg text-gray-400 mb-8 max-w-md">
                   Where technology meets creativity. Experience our new visual installations transforming the night into a living canvas.
                 </p>
                 <button className="bg-white text-black font-bold uppercase px-8 py-4 rounded-full hover:bg-taj-gold transition-colors">
                   View Gallery
                 </button>
              </div>
              <div className="order-1 md:order-2 relative">
                <div className="aspect-[4/5] rounded-full overflow-hidden border border-white/10">
                  <img 
                    src="https://images.unsplash.com/photo-1550684848-fac1c5b4e853?q=80&w=1200&auto=format&fit=crop" 
                    alt="Art Installation" 
                    className="w-full h-full object-cover animate-pulse" 
                    style={{ animationDuration: '4s' }}
                  />
                </div>
              </div>
           </div>
        </section>

      </main>

      <Footer />
    </div>
  );
}

export default App;
