import { useState } from 'react';
import { prophetNamesWithMeanings } from '../data/prophetsWithDuas';
import { useTheme } from '../contexts/ThemeContext';

interface ProphetNamesViewProps {
  language: string;
  onBack: () => void;
}

export default function ProphetNamesView({ language, onBack }: ProphetNamesViewProps) {
  const { isDark } = useTheme();
  const [selectedProphet, setSelectedProphet] = useState<number | null>(null);
  const [searchQuery, setSearchQuery] = useState('');

  const filteredProphets = prophetNamesWithMeanings.filter(prophet => {
    if (!searchQuery) return true;
    const query = searchQuery.toLowerCase();
    return (
      prophet.name.toLowerCase().includes(query) ||
      prophet.arabic.includes(searchQuery) ||
      prophet.meaning.toLowerCase().includes(query)
    );
  });

  const labels: Record<string, Record<string, string>> = {
    en: { title: "Names of Prophets with Meanings", subtitle: "Understanding the meanings behind prophet names", back: "Back to Categories", search: "Search prophets...", meaning: "Meaning" },
    ar: { title: "أسماء الأنبياء مع معانيها", subtitle: "فهم معاني أسماء الأنبياء", back: "العودة للفئات", search: "ابحث عن الأنبياء...", meaning: "المعنى" },
    ur: { title: "انبیاء کے نام معانی کے ساتھ", subtitle: "انبیاء کے ناموں کے معانی کو سمجھنا", back: "زمرہ جات پر واپس", search: "انبیاء تلاش کریں...", meaning: "مطلب" },
    fr: { title: "Noms des Prophètes avec Significations", subtitle: "Comprendre les significations des noms des prophètes", back: "Retour", search: "Rechercher...", meaning: "Signification" },
    tr: { title: "Peygamber İsimleri ve Anlamları", subtitle: "Peygamber isimlerinin anlamlarını anlamak", back: "Geri", search: "Peygamber ara...", meaning: "Anlam" },
    id: { title: "Nama-Nama Nabi dengan Makna", subtitle: "Memahami makna di balik nama-nama nabi", back: "Kembali", search: "Cari nabi...", meaning: "Makna" },
    bn: { title: "নবীদের নাম অর্থসহ", subtitle: "নবীদের নামের অর্থ বোঝা", back: "পিছনে", search: "নবী খুঁজুন...", meaning: "অর্থ" },
    ms: { title: "Nama-Nama Nabi dengan Makna", subtitle: "Memahami makna di sebalik nama-nama nabi", back: "Kembali", search: "Cari nabi...", meaning: "Makna" },
    ta: { title: "நபிமார்களின் பெயர்கள் பொருளுடன்", subtitle: "நபிமார்களின் பெயர்களின் பொருளைப் புரிந்துகொள்ளுதல்", back: "பின்", search: "நபிகளைத் தேடு...", meaning: "பொருள்" },
    ml: { title: "നബിമാരുടെ നാമങ്ങൾ അർത്ഥത്തോടെ", subtitle: "നബിമാരുടെ നാമങ്ങൾക്ക് പിന്നിലുള്ള അർത്ഥങ്ങൾ മനസ്സിലാക്കുക", back: "തിരികെ", search: "നബിമാരെ തിരയുക...", meaning: "അർത്ഥം" }
  };

  const label = labels[language] || labels.en;

  return (
    <div className="max-w-4xl mx-auto">
      {/* Back Button */}
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

      {/* Header */}
      <div className="bg-gradient-to-r from-purple-500 to-pink-600 rounded-2xl p-6 mb-6 text-white shadow-lg">
        <div className="flex items-center gap-3 mb-2">
          <span className="text-4xl">📚</span>
          <div>
            <h2 className="text-2xl font-bold">{label.title}</h2>
            <p className="text-white/80 text-sm">{label.subtitle}</p>
          </div>
        </div>
      </div>

      {/* Search */}
      <div className="mb-6">
        <input
          type="text"
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
          placeholder={label.search}
          className={`w-full px-4 py-3 rounded-xl border ${
            isDark 
              ? 'bg-slate-800 border-slate-700 text-white placeholder-gray-500' 
              : 'bg-white border-gray-200 text-gray-900 placeholder-gray-400'
          }`}
        />
      </div>

      {/* List of Prophets */}
      <div className="space-y-4">
        {filteredProphets.map((prophet) => (
          <div
            key={prophet.number}
            onClick={() => setSelectedProphet(selectedProphet === prophet.number ? null : prophet.number)}
            className={`cursor-pointer rounded-xl p-5 border transition-all ${
              isDark 
                ? 'bg-slate-800 border-slate-700 hover:border-purple-500' 
                : 'bg-white border-gray-200 hover:border-purple-400 hover:shadow-md'
            } ${selectedProphet === prophet.number ? (isDark ? 'border-purple-500 bg-slate-700' : 'border-purple-500 shadow-lg') : ''}`}
          >
            <div className="flex items-start gap-4">
              <div className={`w-10 h-10 rounded-full flex items-center justify-center text-sm font-bold flex-shrink-0 ${
                isDark ? 'bg-purple-900 text-purple-300' : 'bg-purple-100 text-purple-700'
              }`}>
                {prophet.number}
              </div>
              <div className="flex-1">
                <p dir="rtl" className="text-2xl font-arabic mb-1" style={{ fontFamily: "'Amiri', serif" }}>
                  {prophet.arabic}
                </p>
                <p className={`text-base font-semibold ${isDark ? 'text-purple-300' : 'text-purple-700'}`}>
                  {prophet.name}
                </p>
                
                {/* Expanded view with meaning */}
                {selectedProphet === prophet.number && (
                  <div className="mt-3 pt-3 border-t border-gray-200 dark:border-slate-600">
                    <div className="mb-2">
                      <span className={`text-xs font-semibold uppercase ${isDark ? 'text-gray-400' : 'text-gray-500'}`}>
                        {label.meaning}
                      </span>
                      <p className={`text-sm mt-1 ${isDark ? 'text-gray-300' : 'text-gray-700'}`}>
                        {prophet.meaning}
                      </p>
                    </div>
                    
                    {(prophet.ta || prophet.ml) && (
                      <div className="mt-2">
                        {language === 'ta' && prophet.ta && (
                          <p className={`text-sm ${isDark ? 'text-gray-400' : 'text-gray-600'}`}>
                            <span className="font-semibold">தமிழ்:</span> {prophet.ta}
                          </p>
                        )}
                        {language === 'ml' && prophet.ml && (
                          <p className={`text-sm ${isDark ? 'text-gray-400' : 'text-gray-600'}`}>
                            <span className="font-semibold">മലയാളം:</span> {prophet.ml}
                          </p>
                        )}
                      </div>
                    )}
                  </div>
                )}
              </div>
            </div>
          </div>
        ))}
      </div>

      {filteredProphets.length === 0 && (
        <div className="text-center py-12">
          <p className={`text-lg ${isDark ? 'text-gray-400' : 'text-gray-500'}`}>
            {language === 'en' ? 'No prophets found' : 'لا يوجد أنبياء'}
          </p>
        </div>
      )}
    </div>
  );
}
