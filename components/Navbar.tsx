import { useState, useEffect } from 'react';
import { Scissors, Menu, X } from 'lucide-react';

interface NavbarProps {
  onOpenBooking: () => void;
  onOpenAi: () => void;
}

export const Navbar = ({ onOpenBooking, onOpenAi }: NavbarProps) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Services', href: '#services' },
    { name: 'Stylists', href: '#stylists' },
    { name: 'Gallery', href: '#gallery' },
    { name: 'Reviews', href: '#reviews' },
  ];

  return (
    <nav
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
        isScrolled ? 'bg-white/80 backdrop-blur-md shadow-sm py-3' : 'bg-transparent py-6'
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 flex items-center justify-between">
        {/* Logo */}
        <div className="flex items-center gap-2 group cursor-pointer">
          <div className="p-2 bg-primary text-white rounded-full transition-transform group-hover:rotate-180 duration-500">
            <Scissors size={20} />
          </div>
          <span className={`text-2xl font-serif font-bold tracking-tight ${isScrolled ? 'text-primary' : 'text-primary lg:text-white'}`}>
            Lumina
          </span>
        </div>

        {/* Desktop Nav */}
        <div className="hidden lg:flex items-center gap-8">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className={`text-sm font-medium tracking-wide hover:text-accent transition-colors ${
                isScrolled ? 'text-secondary' : 'text-white/90 hover:text-white'
              }`}
            >
              {link.name}
            </a>
          ))}
        </div>

        {/* Actions */}
        <div className="hidden lg:flex items-center gap-4">
           <button
            onClick={onOpenAi}
            className={`px-5 py-2 rounded-full text-sm font-medium transition-all border ${
              isScrolled
                ? 'border-primary text-primary hover:bg-primary hover:text-white'
                : 'border-white/30 text-white hover:bg-white hover:text-primary bg-white/10 backdrop-blur-sm'
            }`}
          >
            AI Consultant
          </button>
          <button
            onClick={onOpenBooking}
            className="px-5 py-2 bg-accent hover:bg-accent/90 text-white rounded-full text-sm font-medium shadow-lg shadow-accent/20 transition-all transform hover:-translate-y-0.5"
          >
            Book Now
          </button>
        </div>

        {/* Mobile Menu Toggle */}
        <button
          className="lg:hidden p-2 text-primary"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        >
          {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} className={!isScrolled ? 'text-white' : 'text-primary'} />}
        </button>
      </div>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="lg:hidden absolute top-full left-0 w-full bg-white border-t border-gray-100 shadow-xl py-6 px-6 flex flex-col gap-4 animate-fade-in-up">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className="text-lg font-serif text-primary"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              {link.name}
            </a>
          ))}
          <hr className="border-gray-100 my-2" />
          <button 
            onClick={() => { onOpenAi(); setIsMobileMenuOpen(false); }}
            className="w-full py-3 border border-primary text-primary rounded-xl font-medium"
          >
            AI Hair Consultant
          </button>
          <button 
            onClick={() => { onOpenBooking(); setIsMobileMenuOpen(false); }}
            className="w-full py-3 bg-primary text-white rounded-xl font-medium shadow-md"
          >
            Book Appointment
          </button>
        </div>
      )}
    </nav>
  );
};