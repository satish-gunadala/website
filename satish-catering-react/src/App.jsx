import React from 'react';
import Header from './components/Header';
import NavBar from './components/NavBar';
import AboutUs from './components/AboutUs';
import Services from './components/Services';
import Gallery from './components/Gallery';
import ContactForm from './components/ContactForm';
import Footer from './components/Footer';
import './styles/main.css';

const App = () => {
  return (
    <div>
      <Header />
      <NavBar />
      <main>
        <AboutUs />
        <Services />
        <Gallery />
        <ContactForm />
      </main>
      <Footer />
    </div>
  );
};

export default App;