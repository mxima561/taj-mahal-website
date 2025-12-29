import React from 'react';
import { Star, Wine, Users, Sparkles } from 'lucide-react';

const VIPPage: React.FC = () => {
  const packages = [
    {
      name: 'Silver',
      price: '$500',
      features: ['Reserved table for 4', 'Premium bottle service', 'Priority entry', 'Dedicated server'],
      color: 'from-gray-400 to-gray-600',
    },
    {
      name: 'Gold',
      price: '$1,000',
      features: ['Reserved table for 6', 'Premium bottle service', 'Express VIP entry', 'Dedicated server', 'Complimentary champagne'],
      color: 'from-taj-gold to-yellow-600',
      featured: true,
    },
    {
      name: 'Platinum',
      price: '$2,500',
      features: ['Private booth for 10', 'Unlimited premium spirits', 'Private entrance', 'Personal concierge', 'Backstage access', 'Meet & greet with artists'],
      color: 'from-purple-400 to-purple-600',
    },
  ];

  return (
    <div className="min-h-screen pt-32 pb-20">
      {/* Hero Section */}
      <div className="container mx-auto px-4 md:px-8 mb-16">
        <h1 className="font-display text-6xl md:text-9xl font-bold uppercase mb-6">
          VIP <span className="text-taj-gold">Tables</span>
        </h1>
        <p className="text-xl text-gray-400 max-w-2xl">
          Elevate your night with our exclusive VIP experience. 
          Premium seating, bottle service, and unparalleled luxury await.
        </p>
      </div>

      {/* Features Grid */}
      <div className="container mx-auto px-4 md:px-8 mb-20">
        <div className="grid md:grid-cols-4 gap-6">
          {[
            { icon: Star, title: 'Premium Location', desc: 'Best views of the stage' },
            { icon: Wine, title: 'Bottle Service', desc: 'Top-shelf spirits & champagne' },
            { icon: Users, title: 'Dedicated Staff', desc: 'Personal server all night' },
            { icon: Sparkles, title: 'Exclusive Access', desc: 'Private areas & backstage' },
          ].map((feature, index) => (
            <div key={index} className="bg-taj-dark rounded-2xl p-6 text-center group hover:bg-taj-gold hover:text-black transition-all duration-300">
              <feature.icon className="w-10 h-10 mx-auto mb-4 group-hover:scale-110 transition-transform" />
              <h4 className="font-bold uppercase mb-2">{feature.title}</h4>
              <p className="text-sm text-gray-400 group-hover:text-black/70">{feature.desc}</p>
            </div>
          ))}
        </div>
      </div>

      {/* VIP Packages */}
      <div className="container mx-auto px-4 md:px-8 mb-20">
        <h3 className="font-display text-3xl font-bold uppercase mb-12 text-center">Choose Your Experience</h3>
        <div className="grid md:grid-cols-3 gap-8">
          {packages.map((pkg, index) => (
            <div 
              key={index} 
              className={`relative rounded-3xl overflow-hidden ${pkg.featured ? 'ring-2 ring-taj-gold' : ''}`}
            >
              {pkg.featured && (
                <div className="absolute top-0 left-0 w-full bg-taj-gold text-black text-center py-2 text-sm font-bold uppercase">
                  Most Popular
                </div>
              )}
              <div className={`bg-gradient-to-br ${pkg.color} p-1 h-full`}>
                <div className="bg-taj-black rounded-[1.4rem] p-8 h-full flex flex-col">
                  <h4 className="font-display text-3xl font-bold uppercase mb-2">{pkg.name}</h4>
                  <p className="text-4xl font-bold mb-6">{pkg.price}<span className="text-sm text-gray-400">/night</span></p>
                  <ul className="space-y-3 mb-8 flex-grow">
                    {pkg.features.map((feature, i) => (
                      <li key={i} className="flex items-center gap-3 text-gray-300">
                        <Star size={16} className="text-taj-gold shrink-0" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                  <button className={`w-full py-4 rounded-full font-bold uppercase transition-colors ${pkg.featured ? 'bg-taj-gold text-black hover:bg-white' : 'bg-white/10 hover:bg-white hover:text-black'}`}>
                    Reserve Now
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Gallery Section */}
      <div className="container mx-auto px-4 md:px-8 mb-20">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {[
            'https://images.unsplash.com/photo-1566737236500-c8ac43014a67?q=80&w=600&auto=format&fit=crop',
            'https://images.unsplash.com/photo-1545128485-c400e7702796?q=80&w=600&auto=format&fit=crop',
            'https://images.unsplash.com/photo-1470225620780-dba8ba36b745?q=80&w=600&auto=format&fit=crop',
            'https://images.unsplash.com/photo-1516450360452-9312f5e86fc7?q=80&w=600&auto=format&fit=crop',
          ].map((img, index) => (
            <div key={index} className="aspect-square rounded-2xl overflow-hidden">
              <img src={img} alt="VIP Experience" className="w-full h-full object-cover hover:scale-110 transition-transform duration-500" />
            </div>
          ))}
        </div>
      </div>

      {/* Contact Section */}
      <div className="container mx-auto px-4 md:px-8">
        <div className="bg-taj-dark rounded-3xl p-8 md:p-16 text-center">
          <h3 className="font-display text-4xl md:text-6xl font-bold uppercase mb-6">
            Make a Reservation
          </h3>
          <p className="text-gray-400 mb-8 max-w-xl mx-auto">
            Contact our VIP team to reserve your table and customize your experience.
          </p>
          <div className="flex flex-col md:flex-row gap-4 justify-center">
            <a href="tel:+201228220601" className="bg-taj-gold text-black font-bold uppercase px-8 py-4 rounded-full hover:bg-white transition-colors">
              Call +20 12-282-20601
            </a>
            <a href="https://wa.me/201228220601" className="bg-white/10 font-bold uppercase px-8 py-4 rounded-full hover:bg-white hover:text-black transition-colors">
              WhatsApp Us
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default VIPPage;

