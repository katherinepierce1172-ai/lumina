import { useState } from 'react';
import { X, Sparkles, Send, Loader2, User, Scissors, RefreshCcw, ArrowRight } from 'lucide-react';
import { getStyleAdvice } from '../services/geminiService';
import { StyleRecommendation } from '../types';

interface AiConsultantProps {
  isOpen: boolean;
  onClose: () => void;
}

export const AiConsultant = ({ isOpen, onClose }: AiConsultantProps) => {
  const [step, setStep] = useState<'input' | 'loading' | 'results'>('input');
  const [hairType, setHairType] = useState('');
  const [preferences, setPreferences] = useState('');
  const [results, setResults] = useState<StyleRecommendation[]>([]);

  if (!isOpen) return null;

  const handleSubmit = async () => {
    if (!hairType || !preferences) return;

    setStep('loading');
    try {
      const recommendations = await getStyleAdvice(preferences, hairType);
      setResults(recommendations);
      setStep('results');
    } catch (error) {
      console.error(error);
      setStep('input');
      alert("Something went wrong. Please try again.");
    }
  };

  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center p-4">
      {/* Backdrop */}
      <div 
        className="absolute inset-0 bg-gray-900/20 backdrop-blur-sm transition-opacity duration-500" 
        onClick={onClose}
      />

      {/* Modal Container */}
      <div className="relative bg-white w-full max-w-4xl h-[85vh] rounded-3xl shadow-2xl overflow-hidden flex flex-col animate-fade-in-up ring-1 ring-gray-900/5">
        
        {/* Header */}
        <div className="bg-white border-b border-gray-100 px-6 py-4 flex justify-between items-center shrink-0">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 bg-surface rounded-full flex items-center justify-center border border-gray-100">
              <Sparkles size={18} className="text-accent" />
            </div>
            <div>
              <h3 className="text-lg font-bold text-primary leading-tight">Lumina AI Stylist</h3>
              <p className="text-gray-400 text-xs font-medium">Personalized recommendations</p>
            </div>
          </div>
          <button 
            onClick={onClose} 
            className="p-2 hover:bg-surface rounded-full transition-colors text-gray-400 hover:text-primary"
          >
            <X size={20} />
          </button>
        </div>

        {/* Content Area */}
        <div className="flex-1 overflow-y-auto bg-surface scroll-smooth">
          
          {step === 'input' && (
            <div className="max-w-2xl mx-auto p-6 md:p-12 space-y-8">
              <div className="text-center space-y-3">
                <h4 className="text-3xl font-serif text-primary">Let's find your new look.</h4>
                <p className="text-secondary text-lg font-light">
                  Tell us about your hair and your goals. Our AI will curate 3 custom styles just for you.
                </p>
              </div>

              <div className="space-y-6 bg-white p-8 rounded-3xl shadow-sm border border-gray-100">
                <div className="space-y-3">
                  <label className="block text-sm font-bold text-primary uppercase tracking-wide">
                    Current Hair Type
                  </label>
                  <input
                    type="text"
                    placeholder="e.g. Thick, wavy, shoulder-length..."
                    className="w-full p-4 bg-surface border-0 rounded-xl text-primary font-medium placeholder:text-gray-400 focus:ring-2 focus:ring-accent/20 outline-none transition-all"
                    value={hairType}
                    onChange={(e) => setHairType(e.target.value)}
                  />
                </div>
                <div className="space-y-3">
                  <label className="block text-sm font-bold text-primary uppercase tracking-wide">
                    Style Goals
                  </label>
                  <textarea
                    placeholder="e.g. I want something low maintenance but professional. Maybe curtain bangs?"
                    className="w-full p-4 bg-surface border-0 rounded-xl text-primary font-medium placeholder:text-gray-400 focus:ring-2 focus:ring-accent/20 outline-none transition-all min-h-[120px] resize-none"
                    value={preferences}
                    onChange={(e) => setPreferences(e.target.value)}
                  />
                </div>
              </div>

              <button
                onClick={handleSubmit}
                disabled={!hairType || !preferences}
                className="w-full py-4 bg-primary text-white rounded-xl font-bold text-lg hover:bg-gray-900 disabled:opacity-50 disabled:cursor-not-allowed transition-all flex items-center justify-center gap-3 shadow-xl shadow-primary/10"
              >
                <span>Generate Styles</span>
                <Send size={18} />
              </button>
            </div>
          )}

          {step === 'loading' && (
            <div className="h-full flex flex-col items-center justify-center text-center p-8 space-y-6 animate-fade-in-up">
              <div className="relative">
                <div className="w-20 h-20 border-4 border-gray-100 border-t-accent rounded-full animate-spin" />
                <div className="absolute inset-0 flex items-center justify-center">
                  <Sparkles size={24} className="text-accent/50" />
                </div>
              </div>
              <div className="space-y-2">
                <h4 className="text-xl font-medium text-primary">Consulting our style database...</h4>
                <p className="text-secondary text-sm">Analyzing face shapes and trends.</p>
              </div>
            </div>
          )}

          {step === 'results' && (
            <div className="p-6 md:p-10 space-y-8">
              <div className="flex justify-between items-end">
                <div>
                  <h4 className="text-2xl font-serif text-primary">Your Style Edit</h4>
                  <p className="text-secondary">Tailored exclusively for you.</p>
                </div>
                <button 
                  onClick={() => setStep('input')} 
                  className="px-4 py-2 text-sm font-medium text-secondary bg-white border border-gray-200 rounded-lg hover:bg-gray-50 transition-colors flex items-center gap-2"
                >
                  <RefreshCcw size={14} /> Restart
                </button>
              </div>
              
              <div className="grid lg:grid-cols-3 gap-6">
                {results.map((style, index) => (
                  <div 
                    key={index} 
                    className="bg-white p-6 rounded-2xl shadow-sm border border-gray-100 flex flex-col h-full hover:shadow-md transition-shadow"
                    style={{ animationDelay: `${index * 150}ms` }}
                  >
                    <div className="mb-4">
                      <div className="flex justify-between items-start mb-2">
                         <h5 className="text-lg font-bold text-primary">{style.styleName}</h5>
                         <span className={`px-2 py-1 rounded text-[10px] font-bold uppercase tracking-wider ${
                            style.maintenanceLevel === 'Low' ? 'bg-green-50 text-green-700' :
                            style.maintenanceLevel === 'Medium' ? 'bg-yellow-50 text-yellow-700' :
                            'bg-red-50 text-red-700'
                          }`}>
                            {style.maintenanceLevel} Maint
                          </span>
                      </div>
                      <p className="text-gray-500 text-sm leading-relaxed">
                        {style.description}
                      </p>
                    </div>
                    
                    <div className="mt-auto space-y-3 pt-4 border-t border-gray-50">
                      <div className="flex gap-3 items-start">
                        <User size={16} className="text-accent shrink-0 mt-0.5" />
                        <p className="text-xs text-gray-600 font-medium">{style.suitability}</p>
                      </div>
                      <div className="flex gap-3 items-start">
                        <Scissors size={16} className="text-accent shrink-0 mt-0.5" />
                        <p className="text-xs text-gray-600 font-medium">{style.tips}</p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}
        </div>
        
        {step === 'results' && (
          <div className="p-6 bg-white border-t border-gray-100 flex justify-end">
             <button className="px-8 py-3 bg-primary text-white rounded-lg font-bold shadow-lg hover:bg-gray-900 transition-all flex items-center gap-2">
                Book This Look <ArrowRight size={18} />
              </button>
          </div>
        )}
      </div>
    </div>
  );
};