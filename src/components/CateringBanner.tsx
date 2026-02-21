export default function CateringBanner() {
  return (
    <section className="relative w-full overflow-hidden">
      <div className="relative w-full">
        <img
          src="/att.5Lv_zphasBgFSwxAV-HNZlTrjWJvqzBx8bFPRgYH7Ww.JPG"
          alt="Audrey catering spread with desserts, charcuterie, sliders, and event food"
          className="w-full object-cover object-center"
          loading="lazy"
          width="1200"
          height="1200"
        />
        <div className="absolute inset-0 bg-black/25" />
        <div className="absolute inset-0 flex flex-col items-center justify-end pb-10 sm:pb-14 px-4 text-center">
          <h2 className="text-3xl sm:text-5xl md:text-6xl font-script text-white drop-shadow-lg leading-tight">
            Audrey Event Planning & Treatmaking
          </h2>
          <p className="mt-3 text-sm sm:text-base md:text-lg text-white/90 tracking-widest uppercase font-light drop-shadow">
            Catering&nbsp;&nbsp;•&nbsp;&nbsp;Event Planning&nbsp;&nbsp;•&nbsp;&nbsp;Dessert & Treat Services
          </p>
        </div>
      </div>
    </section>
  );
}
