export default function Intro() {
  return (
    <section id="about" className="py-20 px-4 bg-white">
      <div className="container mx-auto max-w-4xl">
        <h2 className="text-4xl font-bold text-gray-900 mb-6 text-center">
          Welcome to Madison Homes LLC DBA Malo Construction
        </h2>
        <p className="text-lg text-gray-700 leading-relaxed text-center mb-6">
          Madison Homes LLC DBA Malo Construction is a fully licensed and insured company dedicated to delivering professional, reliable metal building
          solutions across the United States. Our experienced team specializes in metal and steel work,
          metal buildings, and roofing to ensure each project is built with precision and integrity.
          We pride ourselves on outstanding service and results for both residential and commercial clients.
        </p>
        <div className="flex justify-center items-center gap-8 mt-8">
          <div className="text-center">
            <div className="inline-flex items-center justify-center w-16 h-16 bg-[#1a1f3a] text-white rounded-full mb-2">
              <svg xmlns="http://www.w3.org/2000/svg" className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
              </svg>
            </div>
            <p className="font-semibold text-gray-900">Licensed</p>
          </div>
          <div className="text-center">
            <div className="inline-flex items-center justify-center w-16 h-16 bg-[#1a1f3a] text-white rounded-full mb-2">
              <svg xmlns="http://www.w3.org/2000/svg" className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
              </svg>
            </div>
            <p className="font-semibold text-gray-900">Insured</p>
          </div>
        </div>
      </div>
    </section>
  );
}
