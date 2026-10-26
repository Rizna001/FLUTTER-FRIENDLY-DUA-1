import { useState } from 'react';
import { asmaUlAnbiya } from '../data/completeLists';
import { useTheme } from '../contexts/ThemeContext';
import AudioPlayer from './AudioPlayer';

interface AsmaUlAnbiyaViewProps {
  language: string;
  onBack: () => void;
}

export default function AsmaUlAnbiyaView({ language, onBack }: AsmaUlAnbiyaViewProps) {
  const { isDark } = useTheme();
  const [selectedProphet, setSelectedProphet] = useState<number | null>(null);

  const labels: Record<string, Record<string, string>> = {
    en: { title: "25 Prophets", subtitle: "Asma ul Anbiya - Names of the Prophets", back: "Back to Categories" },
    ar: { title: "25 نبي", subtitle: "أسماء الأنبياء", back: "العودة للفئات" },
    ur: { title: "25 انبیاء", subtitle: "اسماء الانبیاء", back: "زمرہ جات پر واپس" },
    fr: { title: "25 Prophètes", subtitle: "Asma ul Anbiya - Noms des Prophètes", back: "Retour" },
    tr: { title: "25 Peygamber", subtitle: "Peygamberlerin İsimleri", back: "Geri" },
    id: { title: "25 Nabi", subtitle: "Nama-Nama Nabi", back: "Kembali" },
    bn: { title: "২৫ নবী", subtitle: "নবীদের নাম", back: "পিছনে" },
    ms: { title: "25 Nabi", subtitle: "Nama-Nama Nabi", back: "Kembali" },
    ta: { title: "25 நபிமார்கள்", subtitle: "நபிமார்களின் பெயர்கள்", back: "பின்" },
    ml: { title: "25 നബിമാർ", subtitle: "നബിമാരുടെ നാമങ്ങൾ", back: "തിരികെ" }
  };

  const label = labels[language] || labels.en;

  return (
    <div className="max-w-4xl mx-auto">
      {/* Header */}
      <button
        onClick={onBack}
        className={`mb-6 flex items-center gap-2 transition-colors ${
          isDark ? 'text-gray-400 hover:text-white' : 'text-gray-600 hover:text-gray-900'
        }`}
      >
        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
        </svg>
        <span>{label.back}</span>
      </button>

      <div className="bg-gradient-to-r from-indigo-500 to-blue-600 rounded-2xl p-6 mb-6 text-white shadow-lg">
        <div className="flex items-center gap-3 mb-2">
          <span className="text-4xl">📖</span>
          <div>
            <h2 className="text-2xl font-bold">{label.title}</h2>
            <p className="text-white/80 text-sm">{label.subtitle}</p>
          </div>
        </div>
      </div>

      {/* List of Prophets */}
      <div className="space-y-4">
        {asmaUlAnbiya.map((prophet) => (
          <div
            key={prophet.n}
            onClick={() => setSelectedProphet(selectedProphet === prophet.n ? null : prophet.n)}
            className={`cursor-pointer rounded-xl p-5 border transition-all ${
              isDark 
                ? 'bg-slate-800 border-slate-700 hover:border-indigo-500' 
                : 'bg-white border-gray-200 hover:border-indigo-400 hover:shadow-md'
            } ${selectedProphet === prophet.n ? (isDark ? 'border-indigo-500 bg-slate-700' : 'border-indigo-500 shadow-lg') : ''}`}
          >
            <div className="flex items-start gap-4">
              <div className={`w-10 h-10 rounded-full flex items-center justify-center text-sm font-bold flex-shrink-0 ${
                isDark ? 'bg-indigo-900 text-indigo-300' : 'bg-indigo-100 text-indigo-700'
              }`}>
                {prophet.n}
              </div>
              <div className="flex-1">
                <div className="flex items-start justify-between gap-3">
                  <div>
                    <p dir="rtl" className="text-2xl font-arabic mb-1" style={{ fontFamily: "'Amiri', serif" }}>
                      {prophet.ar}
                    </p>
                    <p className={`text-base font-semibold ${isDark ? 'text-indigo-300' : 'text-indigo-700'}`}>
                      {language === 'ta' ? prophet.ta : language === 'ml' ? prophet.ml : prophet.en}
                    </p>
                    <p className={`text-sm mt-1 ${isDark ? 'text-gray-400' : 'text-gray-600'}`}>
                      {prophet.title}
                    </p>
                    <p className={`text-xs mt-1 ${isDark ? 'text-gray-500' : 'text-gray-500'}`}>
                      {prophet.years}
                    </p>
                  </div>
                </div>

                {/* Expanded view with audio */}
                {selectedProphet === prophet.n && (
                  <div className="mt-4 pt-4 border-t border-gray-200 dark:border-slate-600">
                    <AudioPlayer arabicText={prophet.ar} language={language} />
                  </div>
                )}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
