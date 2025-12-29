import React, { useState } from 'react';
import { Mail, Phone, MapPin, Clock, Send, Instagram, Facebook, Twitter } from 'lucide-react';

const ContactPage: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission
    alert('Thank you for your message! We will get back to you soon.');
    setFormData({ name: '', email: '', subject: '', message: '' });
  };

  return (
    <div className="min-h-screen pt-32 pb-20">
      {/* Hero Section */}
      <div className="container mx-auto px-4 md:px-8 mb-16">
        <h1 className="font-display text-6xl md:text-9xl font-bold uppercase mb-6">
          Contact
        </h1>
        <p className="text-xl text-gray-400 max-w-2xl">
          Have a question, want to book a VIP table, or interested in performing? 
          We'd love to hear from you.
        </p>
      </div>

      <div className="container mx-auto px-4 md:px-8">
        <div className="grid lg:grid-cols-2 gap-12">
          {/* Contact Form */}
          <div className="bg-taj-dark rounded-3xl p-8 md:p-12">
            <h2 className="font-display text-3xl font-bold uppercase mb-8">Send a Message</h2>
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-bold uppercase tracking-wider mb-2">Name</label>
                  <input
                    type="text"
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    required
                    className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 focus:outline-none focus:border-taj-gold transition-colors"
                    placeholder="Your name"
                  />
                </div>
                <div>
                  <label className="block text-sm font-bold uppercase tracking-wider mb-2">Email</label>
                  <input
                    type="email"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    required
                    className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 focus:outline-none focus:border-taj-gold transition-colors"
                    placeholder="your@email.com"
                  />
                </div>
              </div>
              <div>
                <label className="block text-sm font-bold uppercase tracking-wider mb-2">Subject</label>
                <select
                  value={formData.subject}
                  onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                  required
                  className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 focus:outline-none focus:border-taj-gold transition-colors"
                >
                  <option value="">Select a subject</option>
                  <option value="vip">VIP Table Reservation</option>
                  <option value="events">Event Information</option>
                  <option value="booking">Artist Booking</option>
                  <option value="partnership">Partnership Inquiry</option>
                  <option value="other">Other</option>
                </select>
              </div>
              <div>
                <label className="block text-sm font-bold uppercase tracking-wider mb-2">Message</label>
                <textarea
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  required
                  rows={5}
                  className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 focus:outline-none focus:border-taj-gold transition-colors resize-none"
                  placeholder="Your message..."
                />
              </div>
              <button
                type="submit"
                className="w-full flex items-center justify-center gap-3 bg-taj-gold text-black font-bold uppercase px-8 py-4 rounded-full hover:bg-white transition-colors"
              >
                <Send size={20} />
                Send Message
              </button>
            </form>
          </div>

          {/* Contact Info */}
          <div className="space-y-8">
            {/* Quick Contact */}
            <div className="bg-taj-dark rounded-3xl p-8">
              <h3 className="font-display text-2xl font-bold uppercase mb-6">Quick Contact</h3>
              <div className="space-y-6">
                <a href="tel:+201228220601" className="flex items-center gap-4 group">
                  <div className="w-12 h-12 rounded-full bg-taj-gold/20 flex items-center justify-center group-hover:bg-taj-gold transition-colors">
                    <Phone className="w-5 h-5 text-taj-gold group-hover:text-black transition-colors" />
                  </div>
                  <div>
                    <p className="text-sm text-gray-400">Phone</p>
                    <p className="font-bold group-hover:text-taj-gold transition-colors">+20 12-282-20601</p>
                  </div>
                </a>
                <a href="mailto:info@tajmahalsharm.com" className="flex items-center gap-4 group">
                  <div className="w-12 h-12 rounded-full bg-taj-gold/20 flex items-center justify-center group-hover:bg-taj-gold transition-colors">
                    <Mail className="w-5 h-5 text-taj-gold group-hover:text-black transition-colors" />
                  </div>
                  <div>
                    <p className="text-sm text-gray-400">Email</p>
                    <p className="font-bold group-hover:text-taj-gold transition-colors">info@tajmahalsharm.com</p>
                  </div>
                </a>
                <a href="https://wa.me/201228220601" className="flex items-center gap-4 group">
                  <div className="w-12 h-12 rounded-full bg-[#25D366]/20 flex items-center justify-center group-hover:bg-[#25D366] transition-colors">
                    <svg className="w-5 h-5 text-[#25D366] group-hover:text-white transition-colors" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
                    </svg>
                  </div>
                  <div>
                    <p className="text-sm text-gray-400">WhatsApp</p>
                    <p className="font-bold group-hover:text-[#25D366] transition-colors">Message Us</p>
                  </div>
                </a>
              </div>
            </div>

            {/* Location */}
            <div className="bg-taj-dark rounded-3xl p-8">
              <h3 className="font-display text-2xl font-bold uppercase mb-6">Location</h3>
              <div className="flex items-start gap-4 mb-6">
                <div className="w-12 h-12 rounded-full bg-taj-gold/20 flex items-center justify-center shrink-0">
                  <MapPin className="w-5 h-5 text-taj-gold" />
                </div>
                <div>
                  <p className="font-bold">Taj Mahal Sharm El Sheikh</p>
                  <p className="text-gray-400">El Hadaba<br />Sharm El Sheikh<br />South Sinai, Egypt</p>
                </div>
              </div>
              <a 
                href="https://maps.google.com" 
                target="_blank"
                rel="noopener noreferrer"
                className="block w-full text-center bg-white/10 font-bold uppercase px-6 py-3 rounded-full hover:bg-white hover:text-black transition-colors"
              >
                Get Directions
              </a>
            </div>

            {/* Hours */}
            <div className="bg-taj-dark rounded-3xl p-8">
              <h3 className="font-display text-2xl font-bold uppercase mb-6">Opening Hours</h3>
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-full bg-taj-gold/20 flex items-center justify-center shrink-0">
                  <Clock className="w-5 h-5 text-taj-gold" />
                </div>
                <div>
                  <div className="space-y-2">
                    <div className="flex justify-between">
                      <span className="text-gray-400">Thursday</span>
                      <span className="font-bold">11:00 PM - 6:00 AM</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-gray-400">Friday</span>
                      <span className="font-bold">11:00 PM - 6:00 AM</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-gray-400">Saturday</span>
                      <span className="font-bold">11:00 PM - 6:00 AM</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-gray-400">Sun - Wed</span>
                      <span className="text-gray-500">Closed</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Social */}
            <div className="bg-taj-dark rounded-3xl p-8">
              <h3 className="font-display text-2xl font-bold uppercase mb-6">Follow Us</h3>
              <div className="flex gap-4">
                {[
                  { icon: Instagram, href: '#', color: 'hover:bg-gradient-to-br hover:from-purple-500 hover:via-pink-500 hover:to-orange-500' },
                  { icon: Facebook, href: '#', color: 'hover:bg-[#1877F2]' },
                  { icon: Twitter, href: '#', color: 'hover:bg-[#1DA1F2]' },
                ].map((social, index) => (
                  <a
                    key={index}
                    href={social.href}
                    className={`w-12 h-12 rounded-full bg-white/10 flex items-center justify-center transition-all ${social.color}`}
                  >
                    <social.icon size={20} />
                  </a>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactPage;

