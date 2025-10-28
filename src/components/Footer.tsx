
export default function Footer() {
  const footerLinks = [
    { name: 'Home', href: '#home' },
    { name: 'About', href: '#about' },
    { name: 'Services', href: '#services' },
    { name: 'Gallery', href: '#gallery' },
    { name: 'Contact', href: '#contact' },
  ];

  return (
    <footer className="bg-gray-900 text-gray-300 py-12 px-4">
      <div className="container mx-auto max-w-6xl">
        <div className="flex flex-col items-center mb-8">
          <div className="flex flex-col items-center mb-4">
            <img src="/malo.png" alt="Madison Homes LLC DBA Malo Construction Logo" className="h-20 md:h-24 mb-3" />
            <p className="text-sm text-gray-400">Madison Homes LLC DBA Malo Construction</p>
            <p className="text-xs text-gray-500 mt-1">Licensed & Insured</p>
          </div>
          <nav className="flex flex-wrap justify-center gap-6 mb-6">
            {footerLinks.map((link, index) => (
              <span key={link.name}>
                <a
                  href={link.href}
                  className="hover:text-[#1a1f3a] transition-colors"
                >
                  {link.name}
                </a>
                {index < footerLinks.length - 1 && (
                  <span className="ml-6 text-gray-600">|</span>
                )}
              </span>
            ))}
          </nav>
        </div>
        <div className="border-t border-gray-800 pt-8 text-center">
          <p className="text-sm mb-2">
            2297 Ayers Dr, Reynoldsburg, OH 43068
          </p>
          <p className="text-sm">
            &copy; 2025 Madison Homes LLC DBA Malo Construction. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
