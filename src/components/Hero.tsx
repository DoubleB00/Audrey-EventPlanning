interface HeroProps {
  onScrollTo: (id: string) => void;
}

export default function Hero({ onScrollTo }: HeroProps) {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{ backgroundImage: "url('/image0.jpeg')" }}
      />
      <div className="absolute inset-0 bg-gradient-to-b from-white/80 via-white/65 to-white/90" />

      <div className="relative z-10 text-center px-4 max-w-4xl mx-auto">
        <div className="flex justify-center mb-6">
          <img
            src="/att.DOn5QAZFOnrw9VO8Jhc5z9AogvDYYNOS1aZxDwN_YYg.JPG"
            alt="Audrey Event Planning Catering and Treatmaking logo"
            className="w-48 sm:w-56 md:w-64 h-auto object-contain drop-shadow-lg"
          />
        </div>
        <p className="text-sm uppercase tracking-widest text-champagne-dark mb-4 font-medium">
          Riverside, CA
        </p>
        <h1 className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-script text-blush mb-5 animate-fade-in leading-tight">
          Audrey's Event Planning & Treatmaking
        </h1>
        <div className="w-20 h-px bg-gold mx-auto mb-6" />
        <p className="text-base sm:text-xl md:text-2xl text-champagne-dark mb-10 font-light tracking-wide">
          Catering&nbsp;&nbsp;•&nbsp;&nbsp;Desserts&nbsp;&nbsp;•&nbsp;&nbsp;Boba Bar&nbsp;&nbsp;•&nbsp;&nbsp;Event Rentals
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <button onClick={() => onScrollTo('booking')} className="btn-primary text-base px-10 py-4">
            Book Your Event
          </button>
          <button onClick={() => onScrollTo('gallery')} className="btn-secondary text-base px-10 py-4">
            View Our Work
          </button>
        </div>
        <p className="mt-6 text-sm text-gray-500">
          Call us · <a href="tel:9516679011" className="text-gold hover:underline">951-667-9011</a>
        </p>
      </div>

      <div className="absolute bottom-8 left-0 right-0 flex justify-center animate-bounce-slow z-10">
        <div className="w-6 h-10 rounded-full border-2 border-champagne/60 flex items-start justify-center pt-2">
          <div className="w-1 h-2 bg-champagne/60 rounded-full" />
        </div>
      </div>
    </section>
  );
}
