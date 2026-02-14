import { useState } from 'react';
import { Calendar, Cake, Heart, Music, Sparkles, UtensilsCrossed, Instagram, Mail, MapPin, Menu, X } from 'lucide-react';

function App() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [formData, setFormData] = useState({
    eventType: '',
    eventDate: '',
    location: '',
    guestCount: '',
    treatSelections: '',
    cateringSelections: '',
    decorStyle: '',
    budgetRange: '',
    name: '',
    email: '',
    phone: '',
    message: ''
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
    alert('Thank you for your inquiry! We\'ll be in touch soon.');
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    element?.scrollIntoView({ behavior: 'smooth' });
    setIsMenuOpen(false);
  };

  return (
    <div className="min-h-screen bg-cream">
      {/* Navigation */}
      <nav className="fixed top-0 w-full bg-white/95 backdrop-blur-sm shadow-sm z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-20">
            <div className="text-2xl sm:text-3xl font-script text-blush">
              Audrey Events & Treatmaking
            </div>

            {/* Desktop Navigation */}
            <div className="hidden md:flex space-x-8">
              <button onClick={() => scrollToSection('about')} className="nav-link">About</button>
              <button onClick={() => scrollToSection('services')} className="nav-link">Services</button>
              <button onClick={() => scrollToSection('gallery')} className="nav-link">Gallery</button>
              <button onClick={() => scrollToSection('contact')} className="nav-link">Contact</button>
            </div>

            {/* Mobile menu button */}
            <button
              className="md:hidden text-blush"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              {isMenuOpen ? <X size={28} /> : <Menu size={28} />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden bg-white border-t border-champagne">
            <div className="px-4 py-4 space-y-3">
              <button onClick={() => scrollToSection('about')} className="block w-full text-left py-2 nav-link">About</button>
              <button onClick={() => scrollToSection('services')} className="block w-full text-left py-2 nav-link">Services</button>
              <button onClick={() => scrollToSection('gallery')} className="block w-full text-left py-2 nav-link">Gallery</button>
              <button onClick={() => scrollToSection('contact')} className="block w-full text-left py-2 nav-link">Contact</button>
            </div>
          </div>
        )}
      </nav>

      {/* Hero Section */}
      <section className="relative h-screen flex items-center justify-center bg-gradient-to-br from-blush/10 via-champagne/20 to-cream">
        <div className="absolute inset-0 bg-[url('https://images.pexels.com/photos/1702373/pexels-photo-1702373.jpeg?auto=compress&cs=tinysrgb&w=1920')] bg-cover bg-center opacity-20"></div>
        <div className="relative z-10 text-center px-4 max-w-4xl mx-auto">
          <h1 className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-script text-blush mb-6 animate-fade-in">
            Elegant Events & Custom Treats Designed Just for You
          </h1>
          <p className="text-lg sm:text-xl md:text-2xl text-champagne-dark mb-8 font-light">
            Baby Showers • Bridal Showers • Bachelorettes • Gender Reveals • Catering • Festival Prep
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button
              onClick={() => scrollToSection('contact')}
              className="btn-primary text-lg px-8 py-4"
            >
              Book Your Event
            </button>
            <button
              onClick={() => scrollToSection('gallery')}
              className="btn-secondary text-lg px-8 py-4"
            >
              View Our Work
            </button>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-24 bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="order-2 md:order-1">
              <h2 className="text-5xl md:text-6xl font-script text-blush mb-6">Our Story</h2>
              <div className="space-y-4 text-gray-700 leading-relaxed">
                <p>
                  What started as a passion for creating beautiful moments has blossomed into a full-service event planning and treatmaking business that serves the most special celebrations in your life.
                </p>
                <p>
                  With a keen eye for detail and a relaxed, personalized approach, we bring your Pinterest boards to life without the stress. Whether you're planning an intimate baby shower or a festival-ready bachelorette weekend, we craft experiences that feel authentically you.
                </p>
                <p>
                  Our philosophy is simple: high-quality, thoughtful celebrations that are fun, beautiful, and unforgettable—without being overly extravagant. Let's create something magical together.
                </p>
              </div>
            </div>
            <div className="order-1 md:order-2">
              <div className="rounded-2xl overflow-hidden shadow-elegant">
                <img
                  src="https://images.pexels.com/photos/1024967/pexels-photo-1024967.jpeg?auto=compress&cs=tinysrgb&w=800"
                  alt="Beautiful event setup"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-24 bg-gradient-to-b from-cream to-blush/5">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-5xl md:text-6xl font-script text-blush mb-4">Our Services</h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              From concept to celebration, we handle every detail with care and creativity
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Event Planning */}
            <div className="service-card group">
              <div className="mb-6 text-gold">
                <Calendar size={48} className="group-hover:scale-110 transition-transform duration-300" />
              </div>
              <h3 className="text-2xl font-script text-blush mb-4">Event Planning</h3>
              <p className="text-gray-600 leading-relaxed">
                From baby showers to bridal celebrations, we design and execute every detail of your special day with elegance and ease.
              </p>
            </div>

            {/* Treatmaking */}
            <div className="service-card group">
              <div className="mb-6 text-gold">
                <Cake size={48} className="group-hover:scale-110 transition-transform duration-300" />
              </div>
              <h3 className="text-2xl font-script text-blush mb-4">Treatmaking</h3>
              <p className="text-gray-600 leading-relaxed">
                Custom desserts, sweet treats, and confections that are as beautiful as they are delicious—perfect for any celebration.
              </p>
            </div>

            {/* Catering */}
            <div className="service-card group">
              <div className="mb-6 text-gold">
                <UtensilsCrossed size={48} className="group-hover:scale-110 transition-transform duration-300" />
              </div>
              <h3 className="text-2xl font-script text-blush mb-4">Catering</h3>
              <p className="text-gray-600 leading-relaxed">
                Thoughtfully curated menus featuring fresh, delicious cuisine that delights your guests and complements your event style.
              </p>
            </div>

            {/* Bachelorettes */}
            <div className="service-card group">
              <div className="mb-6 text-gold">
                <Heart size={48} className="group-hover:scale-110 transition-transform duration-300" />
              </div>
              <h3 className="text-2xl font-script text-blush mb-4">Bachelorettes</h3>
              <p className="text-gray-600 leading-relaxed">
                Unforgettable experiences for the bride-to-be and her crew, from intimate gatherings to all-out celebrations.
              </p>
            </div>

            {/* Festival Prep */}
            <div className="service-card group">
              <div className="mb-6 text-gold">
                <Music size={48} className="group-hover:scale-110 transition-transform duration-300" />
              </div>
              <h3 className="text-2xl font-script text-blush mb-4">Festival Prep</h3>
              <p className="text-gray-600 leading-relaxed">
                Get festival-ready with our Coachella and Stagecoach prep services—styled outfits, curated treats, and Instagram-worthy details.
              </p>
            </div>

            {/* Custom Celebrations */}
            <div className="service-card group">
              <div className="mb-6 text-gold">
                <Sparkles size={48} className="group-hover:scale-110 transition-transform duration-300" />
              </div>
              <h3 className="text-2xl font-script text-blush mb-4">Custom Celebrations</h3>
              <p className="text-gray-600 leading-relaxed">
                Have something unique in mind? We love bringing your creative vision to life with personalized planning and design.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Gallery Section */}
      <section id="gallery" className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-5xl md:text-6xl font-script text-blush mb-4">Our Work</h2>
            <p className="text-xl text-gray-600">
              A glimpse into the celebrations we've created
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              'https://images.pexels.com/photos/1702373/pexels-photo-1702373.jpeg?auto=compress&cs=tinysrgb&w=600',
              'https://images.pexels.com/photos/1702340/pexels-photo-1702340.jpeg?auto=compress&cs=tinysrgb&w=600',
              'https://images.pexels.com/photos/587741/pexels-photo-587741.jpeg?auto=compress&cs=tinysrgb&w=600',
              'https://images.pexels.com/photos/1395964/pexels-photo-1395964.jpeg?auto=compress&cs=tinysrgb&w=600',
              'https://images.pexels.com/photos/1857157/pexels-photo-1857157.jpeg?auto=compress&cs=tinysrgb&w=600',
              'https://images.pexels.com/photos/1850595/pexels-photo-1850595.jpeg?auto=compress&cs=tinysrgb&w=600',
              'https://images.pexels.com/photos/1788174/pexels-photo-1788174.jpeg?auto=compress&cs=tinysrgb&w=600',
              'https://images.pexels.com/photos/1024967/pexels-photo-1024967.jpeg?auto=compress&cs=tinysrgb&w=600',
              'https://images.pexels.com/photos/265920/pexels-photo-265920.jpeg?auto=compress&cs=tinysrgb&w=600'
            ].map((src, idx) => (
              <div key={idx} className="gallery-item group overflow-hidden rounded-2xl shadow-elegant">
                <img
                  src={src}
                  alt={`Gallery image ${idx + 1}`}
                  className="w-full h-80 object-cover group-hover:scale-110 transition-transform duration-500"
                />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Form Section */}
      <section id="contact" className="py-24 bg-gradient-to-b from-blush/5 to-champagne/10">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-5xl md:text-6xl font-script text-blush mb-4">Let's Create Something Beautiful</h2>
            <p className="text-xl text-gray-600">
              Tell us about your celebration and we'll make it unforgettable
            </p>
          </div>

          <form onSubmit={handleSubmit} className="form-elegant">
            <div className="grid md:grid-cols-2 gap-6">
              <div className="form-group">
                <label htmlFor="eventType" className="form-label">Event Type *</label>
                <select
                  id="eventType"
                  name="eventType"
                  required
                  value={formData.eventType}
                  onChange={handleChange}
                  className="form-input"
                >
                  <option value="">Select event type</option>
                  <option value="baby-shower">Baby Shower</option>
                  <option value="bridal-shower">Bridal Shower</option>
                  <option value="bachelorette">Bachelorette</option>
                  <option value="gender-reveal">Gender Reveal</option>
                  <option value="catering">Catering</option>
                  <option value="festival-prep">Festival Prep</option>
                  <option value="other">Other</option>
                </select>
              </div>

              <div className="form-group">
                <label htmlFor="eventDate" className="form-label">Event Date *</label>
                <input
                  type="date"
                  id="eventDate"
                  name="eventDate"
                  required
                  value={formData.eventDate}
                  onChange={handleChange}
                  className="form-input"
                />
              </div>

              <div className="form-group">
                <label htmlFor="location" className="form-label">Location *</label>
                <input
                  type="text"
                  id="location"
                  name="location"
                  required
                  placeholder="City or venue"
                  value={formData.location}
                  onChange={handleChange}
                  className="form-input"
                />
              </div>

              <div className="form-group">
                <label htmlFor="guestCount" className="form-label">Estimated Guest Count *</label>
                <input
                  type="number"
                  id="guestCount"
                  name="guestCount"
                  required
                  placeholder="Number of guests"
                  value={formData.guestCount}
                  onChange={handleChange}
                  className="form-input"
                />
              </div>

              <div className="form-group">
                <label htmlFor="decorStyle" className="form-label">Decor Style</label>
                <select
                  id="decorStyle"
                  name="decorStyle"
                  value={formData.decorStyle}
                  onChange={handleChange}
                  className="form-input"
                >
                  <option value="">Select style</option>
                  <option value="boho">Boho</option>
                  <option value="glam">Glam</option>
                  <option value="minimal">Minimal</option>
                  <option value="colorful">Colorful</option>
                  <option value="romantic">Romantic</option>
                  <option value="modern">Modern</option>
                </select>
              </div>

              <div className="form-group">
                <label htmlFor="budgetRange" className="form-label">Budget Range</label>
                <select
                  id="budgetRange"
                  name="budgetRange"
                  value={formData.budgetRange}
                  onChange={handleChange}
                  className="form-input"
                >
                  <option value="">Select range</option>
                  <option value="under-1000">Under $1,000</option>
                  <option value="1000-2500">$1,000 - $2,500</option>
                  <option value="2500-5000">$2,500 - $5,000</option>
                  <option value="5000-10000">$5,000 - $10,000</option>
                  <option value="10000-plus">$10,000+</option>
                </select>
              </div>
            </div>

            <div className="form-group mt-6">
              <label htmlFor="treatSelections" className="form-label">Treat Selections</label>
              <textarea
                id="treatSelections"
                name="treatSelections"
                rows={3}
                placeholder="Tell us about any custom treats you'd like..."
                value={formData.treatSelections}
                onChange={handleChange}
                className="form-input"
              ></textarea>
            </div>

            <div className="form-group">
              <label htmlFor="cateringSelections" className="form-label">Catering Selections</label>
              <textarea
                id="cateringSelections"
                name="cateringSelections"
                rows={3}
                placeholder="Any dietary restrictions or menu preferences..."
                value={formData.cateringSelections}
                onChange={handleChange}
                className="form-input"
              ></textarea>
            </div>

            <div className="form-group">
              <label htmlFor="message" className="form-label">Additional Details</label>
              <textarea
                id="message"
                name="message"
                rows={4}
                placeholder="Share your vision, inspiration, or any special requests..."
                value={formData.message}
                onChange={handleChange}
                className="form-input"
              ></textarea>
            </div>

            <div className="border-t border-champagne pt-6 mt-6">
              <h3 className="text-xl font-script text-blush mb-4">Your Contact Information</h3>
              <div className="grid md:grid-cols-3 gap-6">
                <div className="form-group">
                  <label htmlFor="name" className="form-label">Name *</label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    required
                    placeholder="Your name"
                    value={formData.name}
                    onChange={handleChange}
                    className="form-input"
                  />
                </div>

                <div className="form-group">
                  <label htmlFor="email" className="form-label">Email *</label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    required
                    placeholder="your@email.com"
                    value={formData.email}
                    onChange={handleChange}
                    className="form-input"
                  />
                </div>

                <div className="form-group">
                  <label htmlFor="phone" className="form-label">Phone *</label>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    required
                    placeholder="(555) 123-4567"
                    value={formData.phone}
                    onChange={handleChange}
                    className="form-input"
                  />
                </div>
              </div>
            </div>

            <div className="mt-8 text-center">
              <button type="submit" className="btn-primary text-lg px-12 py-4">
                Send Inquiry
              </button>
              <p className="mt-4 text-sm text-gray-500">
                We'll get back to you within 24-48 hours
              </p>
            </div>
          </form>
        </div>
      </section>

      {/* Contract Section Placeholder */}
      <section className="py-24 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h2 className="text-5xl md:text-6xl font-script text-blush mb-6">Client Agreement</h2>
            <p className="text-xl text-gray-600 mb-8">
              Once we've discussed your event details, we'll provide a customized agreement for your review and signature.
            </p>
            <div className="bg-blush/5 rounded-2xl p-12 border-2 border-dashed border-champagne">
              <Sparkles className="mx-auto text-gold mb-4" size={48} />
              <p className="text-gray-600">
                Digital contract signing integration coming soon
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-blush/10 py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h3 className="text-3xl font-script text-blush mb-6">Audrey Events & Treatmaking</h3>

            <div className="flex justify-center space-x-8 mb-8">
              <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="footer-link">
                <Instagram size={24} />
                <span className="ml-2">@audreyevents</span>
              </a>
              <a href="mailto:hello@audreyevents.com" className="footer-link">
                <Mail size={24} />
                <span className="ml-2">hello@audreyevents.com</span>
              </a>
              <a href="#" className="footer-link">
                <MapPin size={24} />
                <span className="ml-2">Los Angeles, CA</span>
              </a>
            </div>

            <div className="border-t border-champagne pt-8">
              <p className="text-gray-600 text-sm">
                © 2026 Audrey Events & Treatmaking. All rights reserved.
              </p>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;
