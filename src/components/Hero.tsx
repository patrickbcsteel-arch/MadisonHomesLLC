export default function Hero() {
  return (
    <section className="relative bg-gradient-to-br from-gray-800 via-gray-900 to-gray-800 text-white pt-32 pb-20 px-4">
      <div className="absolute inset-0 bg-[url('https://images.pexels.com/photos/159358/construction-site-build-construction-work-159358.jpeg')] bg-cover bg-center opacity-20"></div>
      <div className="container mx-auto text-center relative z-10">
        <h1 className="text-5xl md:text-6xl font-bold mb-6 leading-tight">
          Quality Metal Construction
        </h1>
        <p className="text-xl md:text-2xl mb-8 text-gray-200 max-w-3xl mx-auto">
          Specializing in metal and steel buildings for residential, commercial, and government projects.
        </p>
        <a
          href="#contact"
          className="inline-block bg-[#1a1f3a] hover:bg-[#252b47] text-white font-semibold px-8 py-4 rounded-lg transition-all transform hover:scale-105 shadow-lg"
        >
          Get in Touch
        </a>
      </div>
    </section>
  );
}
