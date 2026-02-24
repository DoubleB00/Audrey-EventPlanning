import Navigation from './components/Navigation';
import Hero from './components/Hero';
import CateringBanner from './components/CateringBanner';
import About from './components/About';
import Services from './components/Services';
import SignatureBars from './components/SignatureBars';
import Gallery from './components/Gallery';
import Policies from './components/Policies';
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
      <Policies />
      <BookingForm />
      <Contract />
      <Footer />

      <div className="fixed bottom-6 left-1/2 -translate-x-1/2 z-40 sm:left-auto sm:right-6 sm:translate-x-0">
        <button
          onClick={() => scrollToSection('booking')}
          className="btn-primary text-sm px-7 py-3 shadow-lg"
          style={{ boxShadow: '0 8px 32px rgba(201,168,92,0.35)' }}
        >
          Book Your Event
        </button>
      </div>
    </div>
  );
}

export default App;
