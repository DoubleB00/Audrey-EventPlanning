import { useState } from 'react';
import { CheckCircle } from 'lucide-react';

const EVENT_TYPES = [
  'Birthday Celebration',
  'Graduation',
  'Corporate Gathering',
  'Bridal Shower',
  'Baby Shower',
  'Holiday Party',
  'Private Festival Gathering (10–20 guests)',
];

const GUEST_COUNTS = ['10–20 (Festival Only)', '20–40', '40–60', '60–85', '85–100'];

const LOCATIONS = [
  'Indoor Venue',
  'Outdoor Venue',
  'Private Residence',
  'Hotel Suite',
  'Airbnb Property',
];

const MAIN_SERVICES = [
  'Full Event Planning',
  'Styled Tablescape',
  'Festival Private Catering (10–20 Guests)',
  'Luxury Dessert Display Upgrade',
  'Coffee & Matcha Bar',
  'Caviar Experience',
];

const ADD_ONS = [
  'Extra service hour',
  'Late night food',
  'Staff uniforms',
  'Premium plates',
  'Custom signage',
  'Favor packaging',
  'Clean up service',
];

const DIETARY = ['Vegetarian', 'Vegan', 'Gluten-Free', 'Nut Allergy'];

interface FormState {
  name: string;
  email: string;
  phone: string;
  eventType: string;
  eventDate: string;
  guestCount: string;
  locationCategory: string;
  cityVenue: string;
  services: string[];
  addOns: string[];
  dietary: string[];
  otherDietary: string;
  message: string;
  agreedToPolicy: boolean;
  clientFullName: string;
  signature: string;
}

function ChipGroup({
  options,
  selected,
  onToggle,
}: {
  options: string[];
  selected: string[];
  onToggle: (val: string) => void;
}) {
  return (
    <div className="flex flex-wrap gap-2">
      {options.map(opt => (
        <button
          key={opt}
          type="button"
          onClick={() => onToggle(opt)}
          className={`px-4 py-2 rounded-full text-sm font-medium border transition-all duration-200 ${
            selected.includes(opt)
              ? 'bg-gold text-white border-gold shadow-sm'
              : 'border-champagne text-gray-600 hover:border-gold hover:text-gold bg-white'
          }`}
        >
          {opt}
        </button>
      ))}
    </div>
  );
}

export default function BookingForm() {
  const [submitted, setSubmitted] = useState(false);
  const [form, setForm] = useState<FormState>({
    name: '',
    email: '',
    phone: '',
    eventType: '',
    eventDate: '',
    guestCount: '',
    locationCategory: '',
    cityVenue: '',
    services: [],
    addOns: [],
    dietary: [],
    otherDietary: '',
    message: '',
    agreedToPolicy: false,
    clientFullName: '',
    signature: '',
  });

  const set = (field: keyof FormState, value: string | boolean) =>
    setForm(prev => ({ ...prev, [field]: value }));

  const toggleArray = (field: 'services' | 'addOns' | 'dietary', val: string) =>
    setForm(prev => {
      const arr = prev[field] as string[];
      return { ...prev, [field]: arr.includes(val) ? arr.filter(v => v !== val) : [...arr, val] };
    });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  if (submitted) {
    return (
      <section id="booking" className="py-24 bg-gradient-to-b from-blush/5 to-champagne/10">
        <div className="max-w-2xl mx-auto px-4 text-center">
          <div className="bg-white rounded-3xl p-12 shadow-elegant border border-champagne/40">
            <CheckCircle className="text-gold mx-auto mb-6" size={56} strokeWidth={1.5} />
            <h3 className="text-4xl font-script text-blush mb-4">Thank You!</h3>
            <p className="text-gray-600 mb-2">Your inquiry has been received.</p>
            <p className="text-gray-500 mb-8 text-sm leading-relaxed max-w-md mx-auto">
              We'll reach out within 24–48 hours with your custom quote and contract details. We can't wait to celebrate with you!
            </p>
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
          <h2 className="text-5xl md:text-6xl font-script text-blush mb-4">Event Inquiry</h2>
          <div className="w-16 h-px bg-gold mx-auto mb-4" />
          <p className="text-gray-500 max-w-lg mx-auto text-sm leading-relaxed">
            Fill out the form below and we'll send you a custom quote. A contract will be sent electronically once we confirm the details.
          </p>
        </div>

        <form onSubmit={handleSubmit} className="form-elegant space-y-10">

          <div>
            <h3 className="text-2xl font-script text-blush mb-1">Event Details</h3>
            <div className="w-8 h-px bg-gold mb-6" />
            <div className="grid md:grid-cols-2 gap-5">
              <div>
                <label className="form-label">Event Type *</label>
                <select required value={form.eventType} onChange={e => set('eventType', e.target.value)} className="form-input">
                  <option value="">Select event type</option>
                  {EVENT_TYPES.map(t => <option key={t}>{t}</option>)}
                </select>
              </div>
              <div>
                <label className="form-label">Event Date *</label>
                <input type="date" required value={form.eventDate} onChange={e => set('eventDate', e.target.value)} className="form-input" />
              </div>
              <div>
                <label className="form-label">Estimated Guest Count *</label>
                <select required value={form.guestCount} onChange={e => set('guestCount', e.target.value)} className="form-input">
                  <option value="">Select guest count</option>
                  {GUEST_COUNTS.map(g => <option key={g}>{g}</option>)}
                </select>
              </div>
              <div>
                <label className="form-label">Event Location Type *</label>
                <select required value={form.locationCategory} onChange={e => set('locationCategory', e.target.value)} className="form-input">
                  <option value="">Select location type</option>
                  {LOCATIONS.map(l => <option key={l}>{l}</option>)}
                </select>
              </div>
              <div className="md:col-span-2">
                <label className="form-label">City & Venue Name *</label>
                <input type="text" required placeholder="e.g. Riverside — Riverside Convention Center" value={form.cityVenue} onChange={e => set('cityVenue', e.target.value)} className="form-input" />
              </div>
            </div>
          </div>

          <div>
            <h3 className="text-2xl font-script text-blush mb-1">Services</h3>
            <div className="w-8 h-px bg-gold mb-3" />
            <p className="text-xs text-gray-400 mb-4 uppercase tracking-wide">Select all that apply</p>
            <ChipGroup options={MAIN_SERVICES} selected={form.services} onToggle={v => toggleArray('services', v)} />
          </div>

          <div>
            <h3 className="text-2xl font-script text-blush mb-1">Add-Ons</h3>
            <div className="w-8 h-px bg-gold mb-3" />
            <p className="text-xs text-gray-400 mb-4 uppercase tracking-wide">Optional enhancements</p>
            <ChipGroup options={ADD_ONS} selected={form.addOns} onToggle={v => toggleArray('addOns', v)} />
          </div>

          <div>
            <h3 className="text-2xl font-script text-blush mb-1">Dietary Restrictions</h3>
            <div className="w-8 h-px bg-gold mb-3" />
            <p className="text-xs text-gray-400 mb-4 uppercase tracking-wide">Select all that apply for your guests</p>
            <ChipGroup options={DIETARY} selected={form.dietary} onToggle={v => toggleArray('dietary', v)} />
            <div className="mt-4">
              <label className="form-label">Other dietary needs</label>
              <input type="text" placeholder="Please describe any other restrictions..." value={form.otherDietary} onChange={e => set('otherDietary', e.target.value)} className="form-input" />
            </div>
          </div>

          <div>
            <label className="form-label">Additional Details / Inspiration</label>
            <textarea rows={4} placeholder="Share your vision, inspo links, theme colors, or any special requests..." value={form.message} onChange={e => set('message', e.target.value)} className="form-input" />
          </div>

          <div className="border-t border-champagne/60 pt-8">
            <h3 className="text-2xl font-script text-blush mb-1">Your Contact Info</h3>
            <div className="w-8 h-px bg-gold mb-6" />
            <div className="grid md:grid-cols-3 gap-5">
              <div>
                <label className="form-label">Name *</label>
                <input type="text" required placeholder="Your name" value={form.name} onChange={e => set('name', e.target.value)} className="form-input" />
              </div>
              <div>
                <label className="form-label">Email *</label>
                <input type="email" required placeholder="your@email.com" value={form.email} onChange={e => set('email', e.target.value)} className="form-input" />
              </div>
              <div>
                <label className="form-label">Phone *</label>
                <input type="tel" required placeholder="(951) 000-0000" value={form.phone} onChange={e => set('phone', e.target.value)} className="form-input" />
              </div>
            </div>
          </div>

          <div className="border-t border-champagne/60 pt-8">
            <h3 className="text-2xl font-script text-blush mb-1">Agreement & Signature</h3>
            <div className="w-8 h-px bg-gold mb-6" />
            <div className="bg-gradient-to-br from-blush/5 to-champagne/10 rounded-2xl p-6 border border-champagne/40 mb-6">
              <label className="flex items-start gap-3 cursor-pointer">
                <input
                  type="checkbox"
                  required
                  checked={form.agreedToPolicy}
                  onChange={e => set('agreedToPolicy', e.target.checked)}
                  className="mt-1 w-4 h-4 accent-gold flex-shrink-0"
                />
                <span className="text-sm text-gray-600 leading-relaxed">
                  I understand that a <strong className="text-champagne-dark">non-refundable retainer</strong> is required to secure my event date. Full payment is due within 2 weeks of booking. All payments are non-refundable as supplies, food, and décor are purchased in advance.
                </span>
              </label>
            </div>
            <div className="grid md:grid-cols-2 gap-5">
              <div>
                <label className="form-label">Client Full Name *</label>
                <input type="text" required placeholder="Full legal name" value={form.clientFullName} onChange={e => set('clientFullName', e.target.value)} className="form-input" />
              </div>
              <div>
                <label className="form-label">Electronic Signature *</label>
                <input
                  type="text"
                  required
                  placeholder="Type your full name to sign"
                  value={form.signature}
                  onChange={e => set('signature', e.target.value)}
                  className="form-input"
                  style={{ fontFamily: "'Great Vibes', cursive", fontSize: '1.1rem' }}
                />
              </div>
            </div>
          </div>

          <div className="pt-4 text-center">
            <button type="submit" className="btn-primary text-base px-14 py-4">
              Submit Inquiry
            </button>
            <p className="mt-4 text-xs text-gray-400">
              A digital contract will be sent to your email once we review your inquiry.
            </p>
          </div>
        </form>
      </div>
    </section>
  );
}
