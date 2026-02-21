import Navigation from './components/Navigation';
import Hero from './components/Hero';
import CateringBanner from './components/CateringBanner';
import About from './components/About';
import Services from './components/Services';
import SignatureBars from './components/SignatureBars';
import Gallery from './components/Gallery';
import BookingForm from './components/BookingForm';
import Contract from './components/Contract';
import Footer from './components/Footer';

function App() {
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    element?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div className="min-h-screen bg-cream">
      <Navigation onScrollTo={scrollToSection} />
      <Hero onScrollTo={scrollToSection} />
      <CateringBanner />
      <About />
      <Services />
      <SignatureBars />
      <Gallery />
      <BookingForm />
      <Contract />
      <Footer />
    </div>
  );
}

export default App;
