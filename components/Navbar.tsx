import { useState, useEffect } from 'react';
import { Scissors, Menu, X, Calendar, Sparkles } from 'lucide-react';

interface NavbarProps {
  onOpenBooking: () => void;
  onOpenAi: () => void;
}

export const Navbar = ({ onOpenBooking, onOpenAi }: NavbarProps) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Services', href: '#services' },
    { name: 'Gallery', href: '#gallery' },
    { name: 'Reviews', href: '#reviews' },
  ];

  return (
    <nav
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
        isScrolled ? 'glass py-3' : 'bg-transparent py-5'
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 flex items-center justify-between">
        {/* Logo */}
        <div className="flex items-center gap-2 group cursor-pointer">
          <div className={`p-2 rounded-lg transition-colors ${isScrolled ? 'bg-primary text-white' : 'bg-white text-primary'}`}>
            <Scissors size={20} />
          </div>
          <span className={`text-2xl font-serif font-bold tracking-tight ${isScrolled ? 'text-primary' : 'text-white'}`}>
            Lumina
          </span>
        </div>

        {/* Desktop Nav */}
        <div className="hidden lg:flex items-center gap-8">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className={`text-sm font-medium tracking-wide transition-colors ${
                isScrolled 
                  ? 'text-secondary hover:text-primary' 
                  : 'text-white/80 hover:text-white'
              }`}
            >
              {link.name}
            </a>
          ))}
        </div>

        {/* Actions */}
        <div className="hidden lg:flex items-center gap-3">
           <button
            onClick={onOpenAi}
            className={`px-5 py-2.5 rounded-full text-sm font-semibold transition-all flex items-center gap-2 ${
              isScrolled
                ? 'bg-surface text-primary hover:bg-gray-100 border border-gray-200'
                : 'bg-white/10 backdrop-blur-md text-white border border-white/20 hover:bg-white/20'
            }`}
          >
            <Sparkles size={16} className="text-accent" />
            AI Consult
          </button>
          <button
            onClick={onOpenBooking}
            className="px-6 py-2.5 bg-primary text-white hover:bg-gray-900 rounded-full text-sm font-semibold shadow-lg shadow-gray-200/50 transition-all transform hover:-translate-y-0.5 flex items-center gap-2"
          >
            Book Now
          </button>
        </div>

        {/* Mobile Menu Toggle */}
        <button
          className={`lg:hidden p-2 rounded-md ${isScrolled ? 'text-primary' : 'text-white'}`}
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        >
          {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="lg:hidden absolute top-full left-0 w-full bg-white border-t border-gray-100 shadow-xl py-8 px-6 flex flex-col gap-6 animate-fade-in-up h-screen">
          <div className="flex flex-col gap-4">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="text-2xl font-serif font-medium text-primary"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                {link.name}
              </a>
            ))}
          </div>
          <hr className="border-gray-100" />
          <div className="grid grid-cols-2 gap-4">
            <button 
              onClick={() => { onOpenAi(); setIsMobileMenuOpen(false); }}
              className="flex flex-col items-center justify-center gap-2 py-6 border border-gray-100 rounded-2xl bg-surface hover:bg-gray-100 transition-colors"
            >
              <Sparkles size={24} className="text-accent" />
              <span className="font-semibold text-primary">AI Style Guide</span>
            </button>
            <button 
              onClick={() => { onOpenBooking(); setIsMobileMenuOpen(false); }}
              className="flex flex-col items-center justify-center gap-2 py-6 bg-primary text-white rounded-2xl shadow-lg"
            >
              <Calendar size={24} />
              <span className="font-semibold">Book Appt</span>
            </button>
          </div>
        </div>
      )}
    </nav>
  );
};