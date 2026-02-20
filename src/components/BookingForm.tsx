import { useState } from 'react';
import { CheckCircle } from 'lucide-react';

export default function BookingForm() {
  const [submitted, setSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    eventType: '',
    eventDate: '',
    location: '',
    guestCount: '',
    services: [] as string[],
    decorStyle: '',
    budgetRange: '',
    treatSelections: '',
    cateringSelections: '',
    message: ''
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleServiceToggle = (service: string) => {
    const current = formData.services;
    setFormData({
      ...formData,
      services: current.includes(service)
        ? current.filter(s => s !== service)
        : [...current, service]
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  const serviceOptions = ['Catering', 'Dessert Table', 'Boba Bar', 'Event Planning', 'Treatmaking', 'Party Package'];

  if (submitted) {
    return (
      <section id="booking" className="py-24 bg-gradient-to-b from-blush/5 to-champagne/10">
        <div className="max-w-2xl mx-auto px-4 text-center">
          <div className="bg-white rounded-3xl p-12 shadow-elegant">
            <CheckCircle className="text-gold mx-auto mb-6" size={56} />
            <h3 className="text-4xl font-script text-blush mb-4">Thank You!</h3>
            <p className="text-gray-600 mb-2">Your inquiry has been received.</p>
            <p className="text-gray-600 mb-6">We'll reach out within 24–48 hours with your custom quote and contract details.</p>
            <a href="tel:9516679011" className="btn-primary text-sm px-8 py-3 inline-block">
              Call Us Now · 951-667-9011
            </a>
          </div>
        </div>
      </section>
    );
  }

  return (
    <section id="booking" className="py-24 bg-gradient-to-b from-blush/5 to-champagne/10">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <p className="text-xs uppercase tracking-widest text-gold mb-3 font-medium">Let's Celebrate</p>
          <h2 className="text-5xl md:text-6xl font-script text-blush mb-4">Book Your Event</h2>
          <div className="w-16 h-px bg-gold mx-auto mb-4" />
          <p className="text-gray-500 max-w-lg mx-auto">
            Fill out the form below and we'll send you a custom quote. A contract will be sent electronically once we confirm the details.
          </p>
        </div>

        <form onSubmit={handleSubmit} className="form-elegant">
          <div className="mb-8">
            <h3 className="text-xl font-script text-blush mb-5">Event Details</h3>
            <div className="grid md:grid-cols-2 gap-5">
              <div>
                <label className="form-label">Event Type *</label>
                <select name="eventType" required value={formData.eventType} onChange={handleChange} className="form-input">
                  <option value="">Select type</option>
                  <option>Baby Shower</option>
                  <option>Bridal Shower</option>
                  <option>Bachelorette</option>
                  <option>Gender Reveal</option>
                  <option>Birthday Party</option>
                  <option>Festival Prep</option>
                  <option>Corporate Event</option>
                  <option>Other</option>
                </select>
              </div>
              <div>
                <label className="form-label">Event Date *</label>
                <input type="date" name="eventDate" required value={formData.eventDate} onChange={handleChange} className="form-input" />
              </div>
              <div>
                <label className="form-label">Location / Venue *</label>
                <input type="text" name="location" required placeholder="City or venue name" value={formData.location} onChange={handleChange} className="form-input" />
              </div>
              <div>
                <label className="form-label">Estimated Guest Count *</label>
                <input type="number" name="guestCount" required placeholder="e.g. 30" value={formData.guestCount} onChange={handleChange} className="form-input" />
              </div>
              <div>
                <label className="form-label">Decor Style</label>
                <select name="decorStyle" value={formData.decorStyle} onChange={handleChange} className="form-input">
                  <option value="">Select style</option>
                  <option>Boho</option>
                  <option>Glam</option>
                  <option>Minimal</option>
                  <option>Colorful</option>
                  <option>Romantic</option>
                  <option>Coachella / Festival</option>
                </select>
              </div>
              <div>
                <label className="form-label">Budget Range</label>
                <select name="budgetRange" value={formData.budgetRange} onChange={handleChange} className="form-input">
                  <option value="">Select range</option>
                  <option>Under $500</option>
                  <option>$500 – $1,000</option>
                  <option>$1,000 – $2,500</option>
                  <option>$2,500 – $5,000</option>
                  <option>$5,000+</option>
                </select>
              </div>
            </div>
          </div>

          <div className="mb-8">
            <h3 className="text-xl font-script text-blush mb-2">Services Needed</h3>
            <p className="text-xs text-gray-400 mb-4">Select all that apply</p>
            <div className="flex flex-wrap gap-3">
              {serviceOptions.map(service => (
                <button
                  key={service}
                  type="button"
                  onClick={() => handleServiceToggle(service)}
                  className={`px-4 py-2 rounded-full text-sm font-medium border transition-all duration-200 ${
                    formData.services.includes(service)
                      ? 'bg-gold text-white border-gold shadow-sm'
                      : 'border-champagne text-gray-600 hover:border-gold hover:text-gold'
                  }`}
                >
                  {service}
                </button>
              ))}
            </div>
          </div>

          <div className="mb-8 grid md:grid-cols-2 gap-5">
            <div>
              <label className="form-label">Treat Preferences</label>
              <textarea name="treatSelections" rows={3} placeholder="Chocolate strawberries, dipped Oreos, custom colors..." value={formData.treatSelections} onChange={handleChange} className="form-input" />
            </div>
            <div>
              <label className="form-label">Catering Preferences</label>
              <textarea name="cateringSelections" rows={3} placeholder="Menu ideas, dietary restrictions..." value={formData.cateringSelections} onChange={handleChange} className="form-input" />
            </div>
          </div>

          <div className="mb-8">
            <label className="form-label">Additional Details / Inspiration</label>
            <textarea name="message" rows={4} placeholder="Share your vision, inspo links, theme colors, or any special requests..." value={formData.message} onChange={handleChange} className="form-input" />
          </div>

          <div className="border-t border-champagne/60 pt-8">
            <h3 className="text-xl font-script text-blush mb-5">Your Contact Info</h3>
            <div className="grid md:grid-cols-3 gap-5">
              <div>
                <label className="form-label">Name *</label>
                <input type="text" name="name" required placeholder="Your name" value={formData.name} onChange={handleChange} className="form-input" />
              </div>
              <div>
                <label className="form-label">Email *</label>
                <input type="email" name="email" required placeholder="your@email.com" value={formData.email} onChange={handleChange} className="form-input" />
              </div>
              <div>
                <label className="form-label">Phone *</label>
                <input type="tel" name="phone" required placeholder="(951) 000-0000" value={formData.phone} onChange={handleChange} className="form-input" />
              </div>
            </div>
          </div>

          <div className="mt-10 text-center">
            <button type="submit" className="btn-primary text-base px-14 py-4">
              Request Quote & Contract
            </button>
            <p className="mt-4 text-xs text-gray-400">
              A digital contract will be sent to your email once we confirm your event details.
            </p>
          </div>
        </form>
      </div>
    </section>
  );
}
