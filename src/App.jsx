import { useState } from 'react';
import { useReveal } from './components/shared/hooks';
import ScrollBar from './components/shared/ScrollBar';
import Header from './components/shared/Header';
import Footer from './components/shared/Footer';
import Hero from './components/Hero';
import Learn from './components/Learn';
import Chapters from './components/Chapters';
import Preview from './components/Preview';
import Authors from './components/Authors';
import Reviews from './components/Reviews';
import Order from './components/Order';
import OrderFormPage from './components/OrderFormPage';

export default function App() {
  useReveal();
  const [showOrderForm, setShowOrderForm] = useState(false);

  const scrollToOrder = () => {
    const el = document.getElementById('order');
    if (el) window.scrollTo({ top: el.getBoundingClientRect().top + window.scrollY - 20, behavior: 'smooth' });
  };

  const openOrderForm = () => setShowOrderForm(true);

  return (
    <>
      {showOrderForm && <OrderFormPage onClose={() => setShowOrderForm(false)} />}
      <ScrollBar />
      <Header onOrder={scrollToOrder} />
      <main>
        <Hero onOrder={scrollToOrder} />
        <Learn />
        <Chapters />
        <Preview />
        <Authors />
        <Reviews />
        <Order onWhatsapp={openOrderForm} />
      </main>
      <Footer />
    </>
  );
}
