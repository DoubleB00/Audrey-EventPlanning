import { Instagram, Mail, MapPin, Phone } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-gradient-to-b from-blush/10 to-champagne/10 pt-14 pb-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-10">
          <h3 className="text-4xl font-script text-blush mb-2">Audrey's Event Planning</h3>
          <p className="text-xs uppercase tracking-widest text-champagne-dark">& Treatmaking</p>

          <div className="w-12 h-px bg-gold mx-auto my-6" />

          <div className="flex flex-wrap justify-center gap-6 sm:gap-10 mb-8">
            <a
              href="https://instagram.com/audrey_events_treatmaking"
              target="_blank"
              rel="noopener noreferrer"
              className="footer-link group"
            >
              <Instagram size={18} className="group-hover:scale-110 transition-transform" />
              <span className="ml-2 text-sm">@audrey_events_treatmaking</span>
            </a>
            <a href="tel:9516679011" className="footer-link group">
              <Phone size={18} className="group-hover:scale-110 transition-transform" />
              <span className="ml-2 text-sm">951-667-9011</span>
            </a>
            <a href="mailto:hello@audreyevents.com" className="footer-link group">
              <Mail size={18} className="group-hover:scale-110 transition-transform" />
              <span className="ml-2 text-sm">hello@audreyevents.com</span>
            </a>
            <span className="footer-link">
              <MapPin size={18} />
              <span className="ml-2 text-sm">Riverside, CA</span>
            </span>
          </div>

          <div className="flex flex-wrap justify-center gap-3 mb-8 text-xs uppercase tracking-widest text-champagne-dark">
            {['Baby Showers', 'Bridal Showers', 'Bachelorettes', 'Gender Reveals', 'Catering', 'Boba Bar', 'Festival Prep'].map(tag => (
              <span key={tag}>{tag} &nbsp;·</span>
            ))}
          </div>
        </div>

        <div className="border-t border-champagne/40 pt-6 text-center">
          <p className="text-gray-400 text-xs">
            © 2026 Audrey's Event Planning & Treatmaking · Riverside, CA · All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
