import * as React from 'react';
import { Scissors, Instagram, Facebook, Twitter } from 'lucide-react';

export const Footer: React.FC = () => {
  return (
    <footer className="bg-primary text-white pt-20 pb-8">
      <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-4 gap-12 mb-16">
        <div className="space-y-6">
          <div className="flex items-center gap-2">
            <div className="p-2 bg-white text-primary rounded-full">
              <Scissors size={20} />
            </div>
            <span className="text-2xl font-serif font-bold">Lumina</span>
          </div>
          <p className="text-gray-400 text-sm leading-relaxed">
            Elevating hair styling to an art form. Join us for a transformative experience in a space designed for your comfort and beauty.
          </p>
        </div>

        <div>
          <h4 className="font-serif font-bold text-lg mb-6">Services</h4>
          <ul className="space-y-3 text-gray-400 text-sm">
            <li className="hover:text-accent cursor-pointer transition-colors">Haircuts & Styling</li>
            <li className="hover:text-accent cursor-pointer transition-colors">Color & Highlights</li>
            <li className="hover:text-accent cursor-pointer transition-colors">Treatments</li>
            <li className="hover:text-accent cursor-pointer transition-colors">Bridal & Events</li>
          </ul>
        </div>

        <div>
          <h4 className="font-serif font-bold text-lg mb-6">Contact</h4>
          <ul className="space-y-3 text-gray-400 text-sm">
            <li>123 Fashion Ave, Suite 100</li>
            <li>New York, NY 10012</li>
            <li>(212) 555-0123</li>
            <li>hello@lumina.salon</li>
          </ul>
        </div>

        <div>
          <h4 className="font-serif font-bold text-lg mb-6">Hours</h4>
          <ul className="space-y-3 text-gray-400 text-sm">
            <li className="flex justify-between"><span>Mon - Fri</span> <span>9am - 8pm</span></li>
            <li className="flex justify-between"><span>Saturday</span> <span>10am - 6pm</span></li>
            <li className="flex justify-between"><span>Sunday</span> <span>Closed</span></li>
          </ul>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-6 pt-8 border-t border-white/10 flex flex-col md:flex-row justify-between items-center gap-4">
        <span className="text-gray-500 text-xs">© 2024 Lumina Salon. All rights reserved.</span>
        <div className="flex gap-6">
          <Instagram size={18} className="text-gray-400 hover:text-white cursor-pointer transition-colors" />
          <Facebook size={18} className="text-gray-400 hover:text-white cursor-pointer transition-colors" />
          <Twitter size={18} className="text-gray-400 hover:text-white cursor-pointer transition-colors" />
        </div>
      </div>
    </footer>
  );
};