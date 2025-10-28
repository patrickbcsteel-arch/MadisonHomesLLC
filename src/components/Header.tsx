import { Menu, X } from 'lucide-react';
import { useState } from 'react';

interface HeaderProps {
  currentPage: string;
}

export default function Header({ currentPage }: HeaderProps) {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const navItems = [
    { name: 'Home', href: '#home' },
    { name: 'About', href: '#about' },
    { name: 'Services', href: '#services' },
    { name: 'Gallery', href: '#gallery' },
    { name: 'Contact', href: '#contact' },
  ];

  return (
    <header className="bg-white shadow-md fixed w-full top-0 z-50">
      <div className="container mx-auto px-4 py-4 flex items-center justify-between">
        <div className="flex items-center gap-3">
          <img src="/malo.png" alt="Madison Homes LLC DBA Malo Construction Logo" className="h-16 md:h-20" />
        </div>

        <nav className="hidden md:block">
          <ul className="flex gap-8">
            {navItems.map((item) => (
              <li key={item.name}>
                <a
                  href={item.href}
                  className={`text-gray-700 hover:text-[#1a1f3a] transition-colors font-medium ${
                    currentPage === item.name.toLowerCase() ? 'text-[#1a1f3a]' : ''
                  }`}
                >
                  {item.name}
                </a>
              </li>
            ))}
          </ul>
        </nav>

        <button
          className="md:hidden text-gray-700 hover:text-[#1a1f3a]"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>

      {isMenuOpen && (
        <div className="md:hidden bg-white border-t">
          <ul className="flex flex-col">
            {navItems.map((item) => (
              <li key={item.name}>
                <a
                  href={item.href}
                  className={`block px-4 py-3 text-gray-700 hover:bg-blue-50 hover:text-[#1a1f3a] transition-colors ${
                    currentPage === item.name.toLowerCase() ? 'text-[#1a1f3a] bg-blue-50' : ''
                  }`}
                  onClick={() => setIsMenuOpen(false)}
                >
                  {item.name}
                </a>
              </li>
            ))}
          </ul>
        </div>
      )}
    </header>
  );
}
