export default function HomePage() {
  return (
    <section className="relative bg-teal-700 text-white py-24 px-6">
      <div className="container mx-auto text-center max-w-3xl">
        <h1 className="text-4xl sm:text-5xl font-extrabold mb-6 leading-tight">
          Your Trusted Partner for Skilled Manpower Solutions
        </h1>
        <p className="text-lg sm:text-xl mb-8 text-teal-100">
          We connect businesses with reliable, skilled, and professional workers across various industries.
        </p>
        <a
          href="#contact"
          className="inline-block bg-white text-teal-700 font-semibold px-6 py-3 rounded-md hover:bg-gray-200 transition"
        >
          Get in Touch
        </a>
      </div>

      {/* Optional: Background overlay */}
      <div className="absolute inset-0 bg-black opacity-20 pointer-events-none"></div>
    </section>
  );
}
