import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import { HomePage, EventsPage, VIPPage, MusicPage, GalleryPage, AboutPage, ContactPage } from './pages';

function App() {
  return (
    <Router>
      <div className="bg-taj-black min-h-screen text-taj-white selection:bg-taj-gold selection:text-black">
        <Header />
        
        <main>
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/events" element={<EventsPage />} />
            <Route path="/vip" element={<VIPPage />} />
            <Route path="/music" element={<MusicPage />} />
            <Route path="/gallery" element={<GalleryPage />} />
            <Route path="/about" element={<AboutPage />} />
            <Route path="/contact" element={<ContactPage />} />
          </Routes>
        </main>

        <Footer />
      </div>
    </Router>
  );
}

export default App;
