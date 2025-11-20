import { useState } from 'react';
import { X, Sparkles, Send, Loader2, User, Scissors, RefreshCcw } from 'lucide-react';
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
    <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 sm:p-6">
      {/* Backdrop */}
      <div 
        className="absolute inset-0 bg-primary/40 backdrop-blur-md transition-opacity duration-500" 
        onClick={onClose}
      />

      {/* Modal Container */}
      <div className="relative bg-white w-full max-w-3xl h-[85vh] rounded-[2rem] shadow-2xl overflow-hidden flex flex-col animate-fade-in-up border border-white/20">
        
        {/* Header */}
        <div className="bg-white border-b border-gray-100 p-6 flex justify-between items-center shrink-0 sticky top-0 z-10">
          <div className="flex items-center gap-4">
            <div className="w-12 h-12 bg-gradient-to-br from-accent to-emerald-600 rounded-2xl flex items-center justify-center shadow-lg shadow-accent/20">
              <Sparkles size={24} className="text-white" />
            </div>
            <div>
              <h3 className="text-xl font-serif font-bold text-primary">AI Consultant</h3>
              <p className="text-secondary text-xs uppercase tracking-wider font-medium">Powered by Gemini 2.5</p>
            </div>
          </div>
          <button 
            onClick={onClose} 
            className="p-3 hover:bg-gray-50 rounded-full transition-colors text-gray-400 hover:text-primary"
          >
            <X size={24} />
          </button>
        </div>

        {/* Content Area */}
        <div className="flex-1 overflow-y-auto p-6 sm:p-8 bg-gray-50/50 scroll-smooth">
          
          {step === 'input' && (
            <div className="max-w-xl mx-auto space-y-8 py-8">
              <div className="text-center space-y-4">
                <h4 className="text-3xl font-serif font-bold text-primary">Describe your dream look.</h4>
                <p className="text-secondary leading-relaxed">
                  Our AI analyzes your hair type and preferences to suggest three personalized styles that match your vibe.
                </p>
              </div>

              <div className="space-y-6 bg-white p-8 rounded-3xl shadow-sm border border-gray-100">
                <div className="space-y-2">
                  <label className="flex items-center gap-2 text-sm font-bold text-primary uppercase tracking-wide">
                    <User size={16} className="text-accent" /> Current Hair Profile
                  </label>
                  <input
                    type="text"
                    placeholder="e.g., Shoulder length, thick wavy hair, dark brown..."
                    className="w-full p-4 bg-gray-50 border border-gray-200 rounded-xl focus:ring-2 focus:ring-accent focus:border-transparent outline-none transition-all placeholder:text-gray-400"
                    value={hairType}
                    onChange={(e) => setHairType(e.target.value)}
                  />
                </div>
                <div className="space-y-2">
                  <label className="flex items-center gap-2 text-sm font-bold text-primary uppercase tracking-wide">
                    <Scissors size={16} className="text-accent" /> Desired Style / Goals
                  </label>
                  <textarea
                    placeholder="e.g., I want a low-maintenance bob, maybe some curtain bangs. I need to look professional but trendy..."
                    className="w-full p-4 bg-gray-50 border border-gray-200 rounded-xl focus:ring-2 focus:ring-accent focus:border-transparent outline-none transition-all min-h-[140px] resize-none placeholder:text-gray-400"
                    value={preferences}
                    onChange={(e) => setPreferences(e.target.value)}
                  />
                </div>
              </div>

              <button
                onClick={handleSubmit}
                disabled={!hairType || !preferences}
                className="w-full py-5 bg-primary text-white rounded-2xl font-bold text-lg shadow-xl shadow-primary/20 hover:bg-primary/90 disabled:opacity-50 disabled:cursor-not-allowed transition-all transform hover:-translate-y-1 flex items-center justify-center gap-3"
              >
                <span>Generate Recommendations</span>
                <Send size={20} />
              </button>
            </div>
          )}

          {step === 'loading' && (
            <div className="h-full flex flex-col items-center justify-center text-center space-y-8 animate-fade-in-up">
              <div className="relative">
                <div className="w-24 h-24 border-4 border-gray-100 border-t-accent rounded-full animate-spin" />
                <div className="absolute inset-0 flex items-center justify-center">
                  <Sparkles size={32} className="text-accent animate-pulse" />
                </div>
              </div>
              <div className="space-y-2">
                <h4 className="text-2xl font-serif font-bold text-primary">Analyzing...</h4>
                <p className="text-secondary max-w-xs mx-auto">
                  Considering your {hairType || 'hair'} to find the perfect match.
                </p>
              </div>
            </div>
          )}

          {step === 'results' && (
            <div className="space-y-8 pb-20">
              <div className="flex justify-between items-center sticky top-0 bg-gray-50/95 backdrop-blur-sm py-4 z-10 -mx-2 px-2">
                <div>
                  <h4 className="text-xl font-bold text-primary">Your Personalized Edits</h4>
                  <p className="text-sm text-secondary">Based on your unique profile</p>
                </div>
                <button 
                  onClick={() => setStep('input')} 
                  className="p-2 text-secondary hover:text-accent transition-colors flex items-center gap-2 text-sm font-medium bg-white rounded-full border border-gray-200 px-4"
                >
                  <RefreshCcw size={14} /> New Search
                </button>
              </div>
              
              <div className="grid gap-6">
                {results.map((style, index) => (
                  <div 
                    key={index} 
                    className="group bg-white p-8 rounded-[2rem] shadow-sm border border-gray-100 hover:shadow-xl hover:shadow-gray-200/50 transition-all duration-500"
                    style={{ animationDelay: `${index * 150}ms` }}
                  >
                    <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-6">
                      <h5 className="text-2xl font-serif font-bold text-primary">{style.styleName}</h5>
                      <span className={`inline-flex items-center px-4 py-2 rounded-full text-xs font-bold uppercase tracking-wider ${
                        style.maintenanceLevel === 'Low' ? 'bg-emerald-100 text-emerald-800' :
                        style.maintenanceLevel === 'Medium' ? 'bg-amber-100 text-amber-800' :
                        'bg-rose-100 text-rose-800'
                      }`}>
                        {style.maintenanceLevel} Maintenance
                      </span>
                    </div>
                    
                    <p className="text-gray-600 leading-relaxed mb-8 text-lg font-light">
                      {style.description}
                    </p>
                    
                    <div className="grid md:grid-cols-2 gap-4">
                      <div className="bg-blue-50/50 rounded-2xl p-5 space-y-2">
                        <span className="text-xs font-bold text-blue-600 uppercase tracking-wider flex items-center gap-2">
                          <User size={14} /> Why it works for you
                        </span>
                        <p className="text-sm text-gray-700 font-medium leading-relaxed">{style.suitability}</p>
                      </div>
                      <div className="bg-purple-50/50 rounded-2xl p-5 space-y-2">
                        <span className="text-xs font-bold text-purple-600 uppercase tracking-wider flex items-center gap-2">
                          <Sparkles size={14} /> Pro Styling Tip
                        </span>
                        <p className="text-sm text-gray-700 font-medium leading-relaxed">{style.tips}</p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}
        </div>
        
        {/* Footer Action for Results */}
        {step === 'results' && (
          <div className="p-6 bg-white border-t border-gray-100 shrink-0 flex justify-center">
             <button className="w-full md:w-auto px-12 py-4 bg-accent text-white rounded-xl font-bold shadow-lg shadow-accent/20 hover:bg-accent/90 transition-all transform hover:-translate-y-1">
                Book One of These Looks
              </button>
          </div>
        )}
      </div>
    </div>
  );
};