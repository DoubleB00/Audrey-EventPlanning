import { Calendar, Cake, Coffee, Gift, UtensilsCrossed, Sparkles } from 'lucide-react';

const services = [
  {
    icon: UtensilsCrossed,
    title: 'Catering',
    description: 'Fresh, flavorful menus designed to complement your event. From grazing boards to full buffets, every bite is made with care.',
    tag: 'Popular'
  },
  {
    icon: Cake,
    title: 'Dessert Tables',
    description: 'Stunning custom dessert setups including chocolate-covered strawberries, dipped Oreos, macarons, and more—styled to match your theme.',
    tag: 'Signature'
  },
  {
    icon: Coffee,
    title: 'Boba Bar',
    description: 'A unique, Instagram-worthy boba bar experience for your event. Custom flavors, toppings, and branded cups to wow your guests.',
    tag: 'New'
  },
  {
    icon: Calendar,
    title: 'Event Planning',
    description: 'Full-service event coordination from concept to celebration. Baby showers, bridal showers, gender reveals, and beyond.',
    tag: null
  },
  {
    icon: Sparkles,
    title: 'Treatmaking',
    description: 'Handcrafted chocolate-dipped treats, custom desserts, and edible gifts. Made fresh and customized for your event colors and theme.',
    tag: null
  },
  {
    icon: Gift,
    title: 'Party Packages',
    description: 'All-inclusive party packages bundling catering, treats, décor, and boba bar into one seamless, stress-free experience.',
    tag: 'Best Value'
  }
];

export default function Services() {
  return (
    <section id="services" className="py-24 bg-gradient-to-b from-cream to-blush/5">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <p className="text-xs uppercase tracking-widest text-gold mb-3 font-medium">What We Offer</p>
          <h2 className="text-5xl md:text-6xl font-script text-blush mb-4">Our Services</h2>
          <div className="w-16 h-px bg-gold mx-auto mb-4" />
          <p className="text-lg text-gray-500 max-w-xl mx-auto">
            From concept to celebration, every detail crafted with heart
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map(({ icon: Icon, title, description, tag }) => (
            <div key={title} className="service-card group relative">
              {tag && (
                <span className="absolute top-5 right-5 text-xs uppercase tracking-wider text-gold border border-gold/40 rounded-full px-3 py-1">
                  {tag}
                </span>
              )}
              <div className="mb-5 text-gold">
                <Icon size={40} className="group-hover:scale-110 transition-transform duration-300" strokeWidth={1.5} />
              </div>
              <h3 className="text-2xl font-script text-blush mb-3">{title}</h3>
              <p className="text-gray-500 leading-relaxed text-sm">{description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
