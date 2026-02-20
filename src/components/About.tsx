export default function About() {
  return (
    <section id="about" className="py-24 bg-white">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-2 gap-16 items-center">
          <div className="order-2 md:order-1">
            <p className="text-xs uppercase tracking-widest text-gold mb-3 font-medium">Our Story</p>
            <h2 className="text-5xl md:text-6xl font-script text-blush mb-6 leading-tight">
              Made with Love, Served with Style
            </h2>
            <div className="w-12 h-px bg-gold mb-6" />
            <div className="space-y-4 text-gray-600 leading-relaxed">
              <p>
                Based in Riverside, CA, Audrey's Event Planning & Treatmaking was born from a deep passion for creating beautiful, one-of-a-kind celebrations that feel personal, polished, and effortlessly stylish.
              </p>
              <p>
                From handcrafted chocolate-covered strawberries and custom dessert tables to full catering spreads and boba bars, every detail is thoughtfully curated with you in mind. We believe your special day should be as unique as you are.
              </p>
              <p>
                Whether you're planning a baby shower, bachelorette, gender reveal, or festival prep, we're here to make it stunning—without the stress. Let's celebrate together.
              </p>
            </div>
            <div className="mt-8 flex flex-wrap gap-6">
              {['Baby Showers', 'Bridal Events', 'Bachelorettes', 'Gender Reveals', 'Festival Prep'].map(tag => (
                <span key={tag} className="text-xs uppercase tracking-widest text-champagne-dark border border-champagne/60 rounded-full px-4 py-2">
                  {tag}
                </span>
              ))}
            </div>
          </div>

          <div className="order-1 md:order-2 grid grid-cols-2 gap-4">
            <div className="rounded-2xl overflow-hidden shadow-elegant aspect-[3/4]">
              <img src="/image2.jpeg" alt="Chocolate covered strawberries" className="w-full h-full object-cover" />
            </div>
            <div className="rounded-2xl overflow-hidden shadow-elegant aspect-[3/4] mt-8">
              <img src="/image3.jpeg" alt="Treats and desserts" className="w-full h-full object-cover" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
