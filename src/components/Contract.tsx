import { FileText, Shield, Clock, Star } from 'lucide-react';

const steps = [
  {
    icon: FileText,
    title: 'Submit Inquiry',
    description: 'Fill out the booking form with your event details and preferences.'
  },
  {
    icon: Clock,
    title: 'Get Your Quote',
    description: 'We\'ll respond within 24–48 hours with a custom quote tailored to your event.'
  },
  {
    icon: Shield,
    title: 'Sign Electronically',
    description: 'A contract is sent to your email for secure digital signature—quick and easy.'
  },
  {
    icon: Star,
    title: 'Celebrate!',
    description: 'Relax and enjoy your event. We handle every beautiful detail.'
  }
];

export default function Contract() {
  return (
    <section className="py-24 bg-white">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-14">
          <p className="text-xs uppercase tracking-widest text-gold mb-3 font-medium">Process</p>
          <h2 className="text-5xl md:text-6xl font-script text-blush mb-4">Client Agreement</h2>
          <div className="w-16 h-px bg-gold mx-auto mb-5" />
          <p className="text-gray-500 max-w-xl mx-auto">
            Booking with us is simple and secure. Once we finalize your event details, all agreements are signed electronically for a smooth, paperless experience.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8 mb-14">
          {steps.map(({ icon: Icon, title, description }, i) => (
            <div key={title} className="text-center group">
              <div className="relative inline-flex items-center justify-center w-14 h-14 rounded-full bg-blush/10 text-gold mb-4 group-hover:bg-gold group-hover:text-white transition-all duration-300">
                <Icon size={24} strokeWidth={1.5} />
                <span className="absolute -top-2 -right-2 w-5 h-5 bg-gold text-white text-xs rounded-full flex items-center justify-center font-medium group-hover:bg-blush transition-colors duration-300">
                  {i + 1}
                </span>
              </div>
              <h4 className="text-lg font-script text-blush mb-2">{title}</h4>
              <p className="text-sm text-gray-500 leading-relaxed">{description}</p>
            </div>
          ))}
        </div>

        <div className="bg-gradient-to-br from-blush/5 to-champagne/10 rounded-3xl p-10 text-center border border-champagne/40">
          <FileText className="mx-auto text-gold mb-4" size={40} strokeWidth={1.5} />
          <h3 className="text-3xl font-script text-blush mb-3">Ready to Get Started?</h3>
          <p className="text-gray-500 mb-6 max-w-md mx-auto text-sm">
            Contracts are sent electronically via email after we review your event inquiry. No printing, no hassle.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a href="#booking" onClick={e => { e.preventDefault(); document.getElementById('booking')?.scrollIntoView({ behavior: 'smooth' }); }} className="btn-primary text-sm px-10 py-3 inline-block">
              Request Quote & Contract
            </a>
            <a href="tel:9516679011" className="btn-secondary text-sm px-10 py-3 inline-block">
              Call 951-667-9011
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
