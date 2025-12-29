import React from 'react';
import { RESIDENTS } from '../constants';
import { Calendar, MapPin, Clock } from 'lucide-react';

const EventsPage: React.FC = () => {
  return (
    <div className="min-h-screen pt-32 pb-20">
      {/* Hero Section */}
      <div className="container mx-auto px-4 md:px-8 mb-16">
        <h1 className="font-display text-6xl md:text-9xl font-bold uppercase mb-6">
          Events
        </h1>
        <p className="text-xl text-gray-400 max-w-2xl">
          Experience world-class electronic music events at the heart of Sharm El Sheikh. 
          From intimate sessions to massive productions.
        </p>
      </div>

      {/* Featured Event */}
      <div className="container mx-auto px-4 md:px-8 mb-20">
        <div className="relative rounded-3xl overflow-hidden">
          <img 
            src={RESIDENTS[0].image} 
            alt={RESIDENTS[0].name}
            className="w-full h-[60vh] object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black via-black/50 to-transparent" />
          <div className="absolute bottom-0 left-0 w-full p-8 md:p-12">
            <span className="bg-taj-gold text-black px-4 py-2 rounded-full text-sm font-bold uppercase tracking-wider inline-block mb-6">
              Featured Event
            </span>
            <h2 className="font-display text-5xl md:text-7xl font-bold uppercase mb-4">
              {RESIDENTS[0].name}
            </h2>
            <div className="flex flex-wrap gap-6 text-gray-300 mb-8">
              <div className="flex items-center gap-2">
                <Calendar size={20} />
                <span>{RESIDENTS[0].residency}</span>
              </div>
              <div className="flex items-center gap-2">
                <Clock size={20} />
                <span>11:00 PM - 6:00 AM</span>
              </div>
              <div className="flex items-center gap-2">
                <MapPin size={20} />
                <span>Taj Mahal Club, Sharm El Sheikh</span>
              </div>
            </div>
            <button className="bg-white text-black font-bold uppercase px-8 py-4 rounded-full hover:bg-taj-gold transition-colors">
              Get Tickets
            </button>
          </div>
        </div>
      </div>

      {/* Upcoming Events */}
      <div className="container mx-auto px-4 md:px-8">
        <h3 className="font-display text-3xl font-bold uppercase mb-8">Upcoming Events</h3>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {RESIDENTS.slice(1).map((artist, index) => (
            <div key={artist.id} className="group cursor-pointer">
              <div className="aspect-[4/3] rounded-2xl overflow-hidden mb-4 relative">
                <img 
                  src={artist.image} 
                  alt={artist.name}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-black/40 group-hover:bg-black/20 transition-colors" />
                <div className="absolute top-4 left-4">
                  <span className="bg-white/10 backdrop-blur-md px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider border border-white/20">
                    {artist.residency}
                  </span>
                </div>
              </div>
              <h4 className="font-display text-2xl font-bold uppercase group-hover:text-taj-gold transition-colors">
                {artist.name}
              </h4>
              <p className="text-gray-400 mt-2">Electronic / Deep House</p>
            </div>
          ))}
        </div>
      </div>

      {/* CTA Section */}
      <div className="container mx-auto px-4 md:px-8 mt-20">
        <div className="bg-taj-dark rounded-3xl p-8 md:p-16 text-center">
          <h3 className="font-display text-4xl md:text-6xl font-bold uppercase mb-6">
            Never Miss an Event
          </h3>
          <p className="text-gray-400 mb-8 max-w-xl mx-auto">
            Subscribe to our newsletter and be the first to know about upcoming events, 
            exclusive pre-sales, and special offers.
          </p>
          <div className="flex flex-col md:flex-row gap-4 justify-center max-w-md mx-auto">
            <input 
              type="email" 
              placeholder="Your email address"
              className="bg-white/5 border border-white/10 px-6 py-4 rounded-full flex-grow focus:outline-none focus:border-taj-gold transition-colors"
            />
            <button className="bg-taj-gold text-black font-bold uppercase px-8 py-4 rounded-full hover:bg-white transition-colors">
              Subscribe
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default EventsPage;

