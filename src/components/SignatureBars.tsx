export default function SignatureBars() {
  return (
    <section className="py-24 bg-white">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <p className="text-xs uppercase tracking-widest text-gold mb-3 font-medium">Specialty Add-Ons</p>
          <h2 className="text-5xl md:text-6xl font-script text-blush mb-4">Signature Bar Options</h2>
          <div className="w-16 h-px bg-gold mx-auto mb-5" />
          <p className="text-gray-500 max-w-xl mx-auto text-base">
            Enhance your event with our interactive signature drink bar experiences, including boba tea and margarita bar options.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="group rounded-2xl overflow-hidden shadow-elegant border border-champagne/40 bg-cream transition-all duration-300 hover:-translate-y-2 hover:shadow-2xl">
            <div className="overflow-hidden">
              <img
                src="/image0_(1).jpeg"
                alt="Audrey's Signature Boba Bar menu featuring Thai Tea, Taro, Mango Green Tea, and Strawberry Milk Tea"
                className="w-full object-cover transition-transform duration-500 group-hover:scale-105"
                loading="lazy"
                width="800"
                height="1000"
              />
            </div>
            <div className="px-6 py-5 text-center">
              <h3 className="text-2xl font-script text-blush mb-1">Signature Boba Bar</h3>
              <p className="text-xs uppercase tracking-widest text-champagne-dark">Thai Tea · Taro · Mango Green Tea · Strawberry Milk Tea</p>
            </div>
          </div>

          <div className="group rounded-2xl overflow-hidden shadow-elegant border border-champagne/40 bg-cream transition-all duration-300 hover:-translate-y-2 hover:shadow-2xl">
            <div className="overflow-hidden">
              <img
                src="/image1_(2).jpeg"
                alt="Audrey's Signature Margarita Bar menu featuring Strawberry, Watermelon, Mango, Classic Lime, Pineapple Jalapeño, and Spicy Jalapeño-Lime"
                className="w-full object-cover transition-transform duration-500 group-hover:scale-105"
                loading="lazy"
                width="800"
                height="1000"
              />
            </div>
            <div className="px-6 py-5 text-center">
              <h3 className="text-2xl font-script text-blush mb-1">Signature Margarita Bar</h3>
              <p className="text-xs uppercase tracking-widest text-champagne-dark">Fruity & Sweet · Bold & Spicy · Custom Flavors</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
