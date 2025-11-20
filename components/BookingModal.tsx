import { X, Calendar, CheckCircle2 } from 'lucide-react';

interface BookingModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const BookingModal = ({ isOpen, onClose }: BookingModalProps) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-[60] flex items-center justify-center p-4">
      <div 
        className="absolute inset-0 bg-black/40 backdrop-blur-sm transition-opacity" 
        onClick={onClose}
      />
      
      <div className="relative bg-white w-full max-w-md rounded-3xl shadow-2xl overflow-hidden animate-fade-in-up">
        <div className="p-6 border-b border-gray-100 flex justify-between items-center">
          <h3 className="text-xl font-serif font-bold text-primary">Book Appointment</h3>
          <button onClick={onClose} className="p-2 hover:bg-gray-100 rounded-full transition-colors text-gray-500">
            <X size={20} />
          </button>
        </div>

        <div className="p-6 space-y-4">
          <p className="text-sm text-gray-500 mb-4">
            Please select your preferred service and time. A confirmation will be sent to your email.
          </p>

          <form className="space-y-4" onSubmit={(e) => { e.preventDefault(); alert('Booking functionality is a demo!'); onClose(); }}>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">Select Service</label>
              <select className="w-full p-3 bg-gray-50 border border-gray-200 rounded-xl focus:ring-2 focus:ring-accent focus:border-transparent outline-none">
                <option>Signature Cut & Style</option>
                <option>Full Balayage</option>
                <option>Root Touch Up</option>
                <option>Keratin Complex</option>
              </select>
            </div>

             <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">Preferred Date</label>
              <div className="relative">
                <input type="date" className="w-full p-3 bg-gray-50 border border-gray-200 rounded-xl focus:ring-2 focus:ring-accent focus:border-transparent outline-none" />
                <Calendar className="absolute right-3 top-3.5 text-gray-400 pointer-events-none" size={18} />
              </div>
            </div>

            <div className="grid grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">First Name</label>
                  <input type="text" className="w-full p-3 bg-gray-50 border border-gray-200 rounded-xl focus:ring-2 focus:ring-accent outline-none" />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">Last Name</label>
                  <input type="text" className="w-full p-3 bg-gray-50 border border-gray-200 rounded-xl focus:ring-2 focus:ring-accent outline-none" />
                </div>
            </div>

            <button type="submit" className="w-full py-3 mt-2 bg-primary text-white rounded-xl font-bold shadow-md hover:bg-primary/90 transition-all flex justify-center items-center gap-2">
              Confirm Booking <CheckCircle2 size={18} />
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};