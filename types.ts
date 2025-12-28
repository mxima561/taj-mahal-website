import React from 'react';

export interface Artist {
  id: string;
  name: string;
  image: string;
  day?: string;
  residency?: string;
}

export interface NewsItem {
  id: string;
  title: string;
  image: string;
  category: string;
  link: string;
}

export interface MenuItem {
  label: string;
  href: string;
}

export interface SocialLink {
  platform: string;
  url: string;
  icon: React.ReactNode;
}