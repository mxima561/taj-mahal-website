import React from 'react';
import { Artist, MenuItem, NewsItem, SocialLink } from './types';
import { Instagram, Facebook, Twitter, Youtube, Music } from 'lucide-react';

export const MENU_ITEMS: MenuItem[] = [
  { label: 'Events', href: '/events' },
  { label: 'VIP Tables', href: '/vip' },
  { label: 'Music', href: '/music' },
  { label: 'Gallery', href: '/gallery' },
  { label: 'The Club', href: '/about' },
  { label: 'Contact', href: '/contact' },
];

// Toto Chiavetta promotional poster - stored in /public folder
const TOTO_IMAGE = '/toto.jpeg'; 
const TBA_IMAGE = 'https://images.unsplash.com/photo-1550684848-fac1c5b4e853?q=80&w=1200&auto=format&fit=crop'; // Dark abstract texture

export const RESIDENTS: Artist[] = [
  {
    id: '1',
    name: 'Toto Chiavetta',
    residency: 'Fri. 2nd Jan',
    image: TOTO_IMAGE,
  },
  {
    id: '2',
    name: 'To Be Announced',
    residency: 'Coming Soon',
    image: TBA_IMAGE,
  },
  {
    id: '3',
    name: 'To Be Announced',
    residency: 'Coming Soon',
    image: TBA_IMAGE,
  },
];

export const NEWS_ITEMS: NewsItem[] = [
  {
    id: '1',
    title: 'TOTO CHIAVETTA TO HEADLINE SEASON OPENING',
    category: 'Events',
    image: TOTO_IMAGE, // Matches the event poster
    link: '#',
  },
  {
    id: '2',
    title: 'TAJ MAHAL SHARM VOTED WORLD\'S #1 CLUB 2025',
    category: 'News',
    image: 'https://images.unsplash.com/photo-1516450360452-9312f5e86fc7?q=80&w=1200&auto=format&fit=crop',
    link: '#',
  },
  {
    id: '3',
    title: 'NEW VIP TERRACE UNVEILED',
    category: 'Club',
    image: 'https://images.unsplash.com/photo-1563351672-62b74891a28a?q=80&w=800&auto=format&fit=crop',
    link: '#',
  },
];

export const SOCIAL_LINKS: SocialLink[] = [
  { platform: 'Instagram', url: '#', icon: <Instagram size={20} /> },
  { platform: 'Facebook', url: '#', icon: <Facebook size={20} /> },
  { platform: 'Twitter', url: '#', icon: <Twitter size={20} /> },
  { platform: 'Youtube', url: '#', icon: <Youtube size={20} /> },
  { platform: 'Spotify', url: '#', icon: <Music size={20} /> },
];