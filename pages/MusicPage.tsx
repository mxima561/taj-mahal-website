import React from 'react';
import { Play, Pause, ExternalLink } from 'lucide-react';
import { RESIDENTS } from '../constants';

const MusicPage: React.FC = () => {
  const playlists = [
    {
      title: 'Taj Mahal Nights Vol. 1',
      description: 'Deep house and melodic techno essentials',
      cover: 'https://images.unsplash.com/photo-1493225457124-a3eb161ffa5f?q=80&w=600&auto=format&fit=crop',
      tracks: 24,
      duration: '2h 45m',
    },
    {
      title: 'Sunset Sessions',
      description: 'Chill vibes for golden hour',
      cover: 'https://images.unsplash.com/photo-1514525253161-7a46d19cd819?q=80&w=600&auto=format&fit=crop',
      tracks: 18,
      duration: '1h 52m',
    },
    {
      title: 'Peak Time Energy',
      description: 'High-energy tracks for the main room',
      cover: 'https://images.unsplash.com/photo-1571266028243-e4733b0f0bb0?q=80&w=600&auto=format&fit=crop',
      tracks: 32,
      duration: '3h 20m',
    },
  ];

  const genres = ['Deep House', 'Melodic Techno', 'Afro House', 'Progressive', 'Tech House', 'Organic House'];

  return (
    <div className="min-h-screen pt-32 pb-20">
      {/* Hero Section */}
      <div className="container mx-auto px-4 md:px-8 mb-16">
        <h1 className="font-display text-6xl md:text-9xl font-bold uppercase mb-6">
          Music
        </h1>
        <p className="text-xl text-gray-400 max-w-2xl">
          Discover the sounds that define Taj Mahal. From our resident DJs 
          to exclusive playlists curated for the perfect night.
        </p>
      </div>

      {/* Genres */}
      <div className="container mx-auto px-4 md:px-8 mb-16">
        <div className="flex flex-wrap gap-3">
          {genres.map((genre, index) => (
            <span 
              key={index}
              className="px-6 py-3 rounded-full border border-white/20 hover:border-taj-gold hover:text-taj-gold transition-colors cursor-pointer"
            >
              {genre}
            </span>
          ))}
        </div>
      </div>

      {/* Featured Mix */}
      <div className="container mx-auto px-4 md:px-8 mb-20">
        <div className="relative rounded-3xl overflow-hidden bg-gradient-to-br from-taj-gold/20 to-purple-900/20">
          <div className="grid md:grid-cols-2 gap-8 p-8 md:p-12">
            <div className="aspect-square rounded-2xl overflow-hidden">
              <img 
                src={RESIDENTS[0].image}
                alt="Featured Mix"
                className="w-full h-full object-cover"
              />
            </div>
            <div className="flex flex-col justify-center">
              <span className="text-taj-gold text-sm font-bold uppercase tracking-wider mb-4">Featured Mix</span>
              <h2 className="font-display text-4xl md:text-6xl font-bold uppercase mb-4">
                {RESIDENTS[0].name}
              </h2>
              <p className="text-gray-400 mb-6">
                Live recorded set from the opening night at Taj Mahal Sharm El Sheikh. 
                3 hours of pure electronic bliss.
              </p>
              <div className="flex gap-4">
                <button className="flex items-center gap-3 bg-taj-gold text-black font-bold uppercase px-8 py-4 rounded-full hover:bg-white transition-colors">
                  <Play size={20} fill="currentColor" />
                  Play Now
                </button>
                <button className="flex items-center gap-3 bg-white/10 font-bold uppercase px-8 py-4 rounded-full hover:bg-white hover:text-black transition-colors">
                  <ExternalLink size={20} />
                  SoundCloud
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Playlists */}
      <div className="container mx-auto px-4 md:px-8 mb-20">
        <h3 className="font-display text-3xl font-bold uppercase mb-8">Curated Playlists</h3>
        <div className="grid md:grid-cols-3 gap-6">
          {playlists.map((playlist, index) => (
            <div key={index} className="group cursor-pointer">
              <div className="aspect-square rounded-2xl overflow-hidden mb-4 relative">
                <img 
                  src={playlist.cover}
                  alt={playlist.title}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-black/40 group-hover:bg-black/20 transition-colors flex items-center justify-center">
                  <div className="w-16 h-16 rounded-full bg-taj-gold flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity transform scale-75 group-hover:scale-100">
                    <Play size={28} fill="black" className="text-black ml-1" />
                  </div>
                </div>
              </div>
              <h4 className="font-display text-xl font-bold uppercase group-hover:text-taj-gold transition-colors">
                {playlist.title}
              </h4>
              <p className="text-gray-400 text-sm mt-1">{playlist.description}</p>
              <p className="text-gray-500 text-xs mt-2">{playlist.tracks} tracks • {playlist.duration}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Resident DJs */}
      <div className="container mx-auto px-4 md:px-8">
        <h3 className="font-display text-3xl font-bold uppercase mb-8">Resident DJs</h3>
        <div className="grid grid-cols-2 md:grid-cols-5 gap-4">
          {RESIDENTS.map((artist) => (
            <div key={artist.id} className="group cursor-pointer text-center">
              <div className="aspect-square rounded-full overflow-hidden mb-4 border-2 border-transparent group-hover:border-taj-gold transition-colors">
                <img 
                  src={artist.image}
                  alt={artist.name}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
              </div>
              <h4 className="font-bold uppercase text-sm group-hover:text-taj-gold transition-colors">
                {artist.name}
              </h4>
            </div>
          ))}
        </div>
      </div>

      {/* Spotify Embed Placeholder */}
      <div className="container mx-auto px-4 md:px-8 mt-20">
        <div className="bg-taj-dark rounded-3xl p-8 md:p-16 text-center">
          <h3 className="font-display text-4xl md:text-6xl font-bold uppercase mb-6">
            Follow Us on Spotify
          </h3>
          <p className="text-gray-400 mb-8 max-w-xl mx-auto">
            Get access to all our playlists, mixes, and exclusive releases.
          </p>
          <a 
            href="#" 
            className="inline-flex items-center gap-3 bg-[#1DB954] text-black font-bold uppercase px-8 py-4 rounded-full hover:bg-white transition-colors"
          >
            <svg className="w-6 h-6" viewBox="0 0 24 24" fill="currentColor">
              <path d="M12 0C5.4 0 0 5.4 0 12s5.4 12 12 12 12-5.4 12-12S18.66 0 12 0zm5.521 17.34c-.24.359-.66.48-1.021.24-2.82-1.74-6.36-2.101-10.561-1.141-.418.122-.779-.179-.899-.539-.12-.421.18-.78.54-.9 4.56-1.021 8.52-.6 11.64 1.32.42.18.479.659.301 1.02zm1.44-3.3c-.301.42-.841.6-1.262.3-3.239-1.98-8.159-2.58-11.939-1.38-.479.12-1.02-.12-1.14-.6-.12-.48.12-1.021.6-1.141C9.6 9.9 15 10.561 18.72 12.84c.361.181.54.78.241 1.2zm.12-3.36C15.24 8.4 8.82 8.16 5.16 9.301c-.6.179-1.2-.181-1.38-.721-.18-.601.18-1.2.72-1.381 4.26-1.26 11.28-1.02 15.721 1.621.539.3.719 1.02.419 1.56-.299.421-1.02.599-1.559.3z"/>
            </svg>
            Follow on Spotify
          </a>
        </div>
      </div>
    </div>
  );
};

export default MusicPage;

