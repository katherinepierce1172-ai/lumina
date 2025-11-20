import { useState } from 'react';
import { X, Sparkles, Send, Loader2 } from 'lucide-react';
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
      setStep('input'); // Reset on error for now
      alert("Something went wrong. Please try again.");
    }
  };

  return (
    <div className="fixed inset-0 z-[60] flex items-center justify-center p-4">
      {/* Backdrop */}
      <div 
        className="absolute inset-0 bg-black/60 backdrop-blur-sm transition-opacity" 
        onClick={onClose}
      />

      {/* Modal Content */}
      <div className="relative bg-white w-full max-w-2xl rounded-3xl shadow-2xl overflow-hidden flex flex-col max-h-[90vh]">
        {/* Header */}
        <div className="bg-gradient-to-r from-primary to-slate-800 p-6 text-white flex justify-between items-center shrink-0">
          <div className="flex items-center gap-3">
            <div className="p-2 bg-white/10 rounded-lg backdrop-blur-md">
              <Sparkles size={24} className="text-yellow-300" />
            </div>
            <div>
              <h3 className="text-xl font-serif font-bold">Lumina AI Stylist</h3>
              <p className="text-white/60 text-xs uppercase tracking-wider">Personalized Consultation</p>
            </div>
          </div>
          <button onClick={onClose} className="p-2 hover:bg-white/10 rounded-full transition-colors">
            <X size={20} />
          </button>
        </div>

        {/* Body */}
        <div className="p-6 sm:p-8 overflow-y-auto flex-1 bg-gray-50">
          
          {step === 'input' && (
            <div className="space-y-6 animate-fade-in-up">
              <div className="text-center mb-8">
                <h4 className="text-2xl font-bold text-primary mb-2">Let's find your perfect look</h4>
                <p className="text-gray-500">Tell us a bit about your hair and what you're looking for.</p>
              </div>

              <div className="space-y-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Current Hair Type & Length</label>
                  <input
                    type="text"
                    placeholder="e.g., Wavy, shoulder length, thick, prone to frizz..."
                    className="w-full p-4 bg-white border border-gray-200 rounded-xl focus:ring-2 focus:ring-accent focus:border-transparent outline-none transition-all"
                    value={hairType}
                    onChange={(e) => setHairType(e.target.value)}
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Goals & Preferences</label>
                  <textarea
                    placeholder="e.g., I want something low maintenance for summer, maybe bangs, professional but fun..."
                    className="w-full p-4 bg-white border border-gray-200 rounded-xl focus:ring-2 focus:ring-accent focus:border-transparent outline-none transition-all min-h-[120px] resize-none"
                    value={preferences}
                    onChange={(e) => setPreferences(e.target.value)}
                  />
                </div>
              </div>

              <button
                onClick={handleSubmit}
                disabled={!hairType || !preferences}
                className="w-full py-4 bg-primary text-white rounded-xl font-bold shadow-lg shadow-primary/20 hover:bg-primary/90 disabled:opacity-50 disabled:cursor-not-allowed transition-all flex items-center justify-center gap-2 mt-4"
              >
                Generate Suggestions <Send size={18} />
              </button>
            </div>
          )}

          {step === 'loading' && (
            <div className="flex flex-col items-center justify-center h-64 text-center space-y-4">
              <Loader2 size={48} className="text-accent animate-spin" />
              <div>
                <h4 className="text-lg font-semibold text-primary">Analyzing Profile...</h4>
                <p className="text-gray-500 text-sm">Our AI is curating styles just for you.</p>
              </div>
            </div>
          )}

          {step === 'results' && (
            <div className="space-y-6 animate-fade-in-up">
              <div className="flex justify-between items-end mb-4">
                <h4 className="text-xl font-bold text-primary">Your Curated Looks</h4>
                <button 
                  onClick={() => setStep('input')} 
                  className="text-sm text-accent hover:underline"
                >
                  Start Over
                </button>
              </div>
              
              <div className="grid gap-4">
                {results.map((style, index) => (
                  <div key={index} className="bg-white p-6 rounded-2xl shadow-sm border border-gray-100 hover:shadow-md transition-shadow">
                    <div className="flex justify-between items-start mb-2">
                      <h5 className="text-lg font-bold text-primary">{style.styleName}</h5>
                      <span className={`px-3 py-1 rounded-full text-xs font-medium ${
                        style.maintenanceLevel === 'Low' ? 'bg-green-100 text-green-700' :
                        style.maintenanceLevel === 'Medium' ? 'bg-yellow-100 text-yellow-700' :
                        'bg-red-100 text-red-700'
                      }`}>
                        {style.maintenanceLevel} Maint.
                      </span>
                    </div>
                    <p className="text-gray-600 text-sm mb-4">{style.description}</p>
                    
                    <div className="bg-gray-50 rounded-xl p-4 space-y-2">
                      <div className="flex gap-2 text-xs">
                        <span className="font-bold text-primary shrink-0">Why it works:</span>
                        <span className="text-gray-600">{style.suitability}</span>
                      </div>
                      <div className="flex gap-2 text-xs">
                        <span className="font-bold text-primary shrink-0">Pro Tip:</span>
                        <span className="text-gray-600">{style.tips}</span>
                      </div>
                    </div>
                  </div>
                ))}
              </div>

              <button className="w-full py-4 bg-accent text-white rounded-xl font-bold shadow-lg shadow-accent/20 hover:bg-accent/90 transition-all">
                Book One of These Styles
              </button>
            </div>
          )}

        </div>
      </div>
    </div>
  );
};