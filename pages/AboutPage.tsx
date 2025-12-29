import React from 'react';
import { MapPin, Clock, Music, Sparkles } from 'lucide-react';

const AboutPage: React.FC = () => {
  return (
    <div className="min-h-screen pt-32 pb-20">
      {/* Hero Section */}
      <div className="container mx-auto px-4 md:px-8 mb-16">
        <h1 className="font-display text-6xl md:text-9xl font-bold uppercase mb-6">
          The <span className="text-taj-gold">Club</span>
        </h1>
        <p className="text-xl text-gray-400 max-w-2xl">
          Where legends are made and memories last forever. 
          Welcome to Sharm El Sheikh's crown jewel of nightlife.
        </p>
      </div>

      {/* Hero Image */}
      <div className="container mx-auto px-4 md:px-8 mb-20">
        <div className="relative rounded-3xl overflow-hidden aspect-video">
          <img 
            src="https://images.unsplash.com/photo-1566737236500-c8ac43014a67?q=80&w=1600&auto=format&fit=crop"
            alt="Taj Mahal Club"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent" />
          <div className="absolute bottom-8 left-8 right-8">
            <p className="text-2xl md:text-4xl font-display font-bold uppercase">
              "The crown jewel of Red Sea nightlife"
            </p>
            <p className="text-gray-400 mt-2">— DJ Mag</p>
          </div>
        </div>
      </div>

      {/* Story Section */}
      <div className="container mx-auto px-4 md:px-8 mb-20">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="font-display text-4xl md:text-6xl font-bold uppercase mb-6">
              Our Story
            </h2>
            <div className="space-y-4 text-gray-400 text-lg">
              <p>
                Born from a vision to create an unparalleled nightlife experience in Egypt, 
                Taj Mahal Sharm El Sheikh opened its doors in 2020, quickly becoming the 
                premier destination for electronic music enthusiasts across the Middle East and beyond.
              </p>
              <p>
                Our state-of-the-art Funktion-One sound system, cutting-edge visual installations, 
                and world-class resident DJs create an atmosphere that transcends ordinary clubbing.
              </p>
              <p>
                Every weekend, we welcome thousands of guests from over 50 countries, united by 
                their love for music, culture, and unforgettable experiences.
              </p>
            </div>
          </div>
          <div className="grid grid-cols-2 gap-4">
            <div className="aspect-[3/4] rounded-2xl overflow-hidden">
              <img 
                src="https://images.unsplash.com/photo-1545128485-c400e7702796?q=80&w=600&auto=format&fit=crop"
                alt="Club Interior"
                className="w-full h-full object-cover"
              />
            </div>
            <div className="aspect-[3/4] rounded-2xl overflow-hidden mt-8">
              <img 
                src="https://images.unsplash.com/photo-1470225620780-dba8ba36b745?q=80&w=600&auto=format&fit=crop"
                alt="DJ Booth"
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>
      </div>

      {/* Features Grid */}
      <div className="bg-taj-dark py-20 mb-20">
        <div className="container mx-auto px-4 md:px-8">
          <h2 className="font-display text-4xl md:text-6xl font-bold uppercase mb-12 text-center">
            The Experience
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                icon: Music,
                title: 'Funktion-One Sound',
                description: 'Crystal-clear audio from the world\'s finest sound system',
              },
              {
                icon: Sparkles,
                title: 'Visual Spectacle',
                description: 'Cutting-edge LED walls and laser installations',
              },
              {
                icon: MapPin,
                title: 'Prime Location',
                description: 'Steps from the beach in El Hadaba, Sharm El Sheikh',
              },
              {
                icon: Clock,
                title: 'All Night Long',
                description: 'Open Thursday to Saturday, 11PM until sunrise',
              },
            ].map((feature, index) => (
              <div key={index} className="text-center">
                <div className="w-16 h-16 rounded-full bg-taj-gold/20 flex items-center justify-center mx-auto mb-6">
                  <feature.icon className="w-8 h-8 text-taj-gold" />
                </div>
                <h3 className="font-display text-xl font-bold uppercase mb-3">{feature.title}</h3>
                <p className="text-gray-400">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Stats Section */}
      <div className="container mx-auto px-4 md:px-8 mb-20">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
          {[
            { number: '2,000+', label: 'Capacity' },
            { number: '50+', label: 'Countries Represented' },
            { number: '100+', label: 'Events Per Year' },
            { number: '#1', label: 'Club in Egypt' },
          ].map((stat, index) => (
            <div key={index}>
              <p className="font-display text-5xl md:text-7xl font-bold text-taj-gold mb-2">{stat.number}</p>
              <p className="text-gray-400 uppercase tracking-wider text-sm">{stat.label}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Location Section */}
      <div className="container mx-auto px-4 md:px-8">
        <div className="bg-taj-dark rounded-3xl overflow-hidden">
          <div className="grid md:grid-cols-2">
            <div className="p-8 md:p-12">
              <h2 className="font-display text-4xl font-bold uppercase mb-6">
                Find Us
              </h2>
              <div className="space-y-6 text-gray-400">
                <div>
                  <h4 className="text-white font-bold uppercase mb-2">Address</h4>
                  <p>El Hadaba, Sharm El Sheikh<br />South Sinai, Egypt</p>
                </div>
                <div>
                  <h4 className="text-white font-bold uppercase mb-2">Hours</h4>
                  <p>Thursday - Saturday<br />11:00 PM - 6:00 AM</p>
                </div>
                <div>
                  <h4 className="text-white font-bold uppercase mb-2">Contact</h4>
                  <p>+20 12-282-20601<br />info@tajmahalsharm.com</p>
                </div>
              </div>
              <div className="mt-8">
                <a 
                  href="https://maps.google.com" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 bg-taj-gold text-black font-bold uppercase px-6 py-3 rounded-full hover:bg-white transition-colors"
                >
                  <MapPin size={18} />
                  Get Directions
                </a>
              </div>
            </div>
            <div className="aspect-square md:aspect-auto">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3456.789!2d34.3285!3d27.9158!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMjfCsDU0JzU2LjkiTiAzNMKwMTknNDIuNiJF!5e0!3m2!1sen!2seg!4v1234567890"
                width="100%"
                height="100%"
                style={{ border: 0, minHeight: '400px' }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutPage;

