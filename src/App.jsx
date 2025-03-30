import React from 'react';
import { Helmet } from 'react-helmet';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Home, Picture, Card, Cake, Present } from './components';
import './index.css';

function App() {
  return (
    <Router basename="/Nikaaday">
      <Helmet>
        {/* Open Graph Meta Tags */}
        <meta property="og:title" content="A Special Birthday Wish for You!" />
        <meta property="og:description" content="Click to see your special birthday surprise! 🎉" />
        <meta property="og:image" content="/assets/IMG_6744.JPG" />
        <meta property="og:url" content="https://vitvit123.github.io/Nikaaday/" />
        <meta property="og:type" content="website" />

        {/* For Messenger, Telegram, Instagram */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:site" content="@yourhandle" />
        <meta name="twitter:title" content="A Special Birthday Wish for You!" />
        <meta name="twitter:description" content="Click to see your special birthday surprise! 🎉" />
        <meta name="twitter:image" content="/assets/IMG_6744.JPG" />
      </Helmet>
      
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/pictures" element={<Picture />} />
        <Route path="/card" element={<Card />} />
        <Route path="/cake" element={<Cake />} />
        <Route path="/present" element={<Present />} />
      </Routes>
    </Router>
  );
}

export default App;
