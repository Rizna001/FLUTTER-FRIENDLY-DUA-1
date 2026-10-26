import { useState } from 'react';
import { useTheme } from '../contexts/ThemeContext';
import { famousSalawat, qaseedatulBurdahChapter1, additionalImportantTexts } from '../data/importantTexts';
import AudioPlayer from './AudioPlayer';

interface ImportantTextViewsProps {
  language: string;
  onBack: () => void;
}

export default function ImportantTextViews({ language, onBack }: ImportantTextViewsProps) {
  const { isDark } = useTheme();
  const [selectedText, setSelectedText] = useState<string | null>(null);
  const [fontSize, setFontSize] = useState<'sm' | 'md' | 'lg' | 'xl'>('lg');
  const [readingMode, setReadingMode] = useState(false);

  const fontSizeClass = {
    sm: 'text-2xl',
    md: 'text-3xl',
    lg: 'text-4xl',
    xl: 'text-5xl',
  };

  const labels = {
    en: { title: 'Important Islamic Texts', back: 'Back', readMore: 'Read More', author: 'Author', reference: 'Reference', recommended: 'Recommended', times: 'times', verses: 'verses', readingMode: 'Reading Mode', exitReading: 'Exit Reading' },
    ar: { title: 'نصوص إسلامية مهمة', back: 'رجوع', readMore: 'اقرأ المزيد', author: 'المؤلف', reference: 'المرجع', recommended: 'المستحب', times: 'مرات', verses: 'أبيات', readingMode: 'وضع القراءة', exitReading: 'الخروج من القراءة' },
    ur: { title: 'اہم اسلامی متون', back: 'واپس', readMore: 'مزید پڑھیں', author: 'مصنف', reference: 'حوالہ', recommended: 'مستحب', times: 'بار', verses: 'اشعار', readingMode: 'پڑھنے کا موڈ', exitReading: 'پڑھنے سے باہر' },
    fr: { title: 'Textes Islamiques Importants', back: 'Retour', readMore: 'Lire Plus', author: 'Auteur', reference: 'Référence', recommended: 'Recommandé', times: 'fois', verses: 'versets', readingMode: 'Mode Lecture', exitReading: 'Quitter la Lecture' },
    tr: { title: 'Önemli İslami Metinler', back: 'Geri', readMore: 'Daha Fazla Oku', author: 'Yazar', reference: 'Kaynak', recommended: 'Önerilen', times: 'kez', verses: 'beyit', readingMode: 'Okuma Modu', exitReading: 'Okumadan Çık' },
    id: { title: 'Teks Islam Penting', back: 'Kembali', readMore: 'Baca Lebih', author: 'Penulis', reference: 'Referensi', recommended: 'Dianjurkan', times: 'kali', verses: 'bait', readingMode: 'Mode Membaca', exitReading: 'Keluar Membaca' },
    bn: { title: 'গুরুত্বপূর্ণ ইসলামী পাঠ্য', back: 'পিছনে', readMore: 'আরও পড়ুন', author: 'লেখক', reference: 'সূত্র', recommended: 'প্রস্তাবিত', times: 'বার', verses: 'পংক্তি', readingMode: 'পড়ার মোড', exitReading: 'পড়া থেকে বের হন' },
    ms: { title: 'Teks Islam Penting', back: 'Kembali', readMore: 'Baca Lagi', author: 'Penulis', reference: 'Rujukan', recommended: 'Digalakkan', times: 'kali', verses: 'bait', readingMode: 'Mod Membaca', exitReading: 'Keluar Membaca' },
    ta: { title: 'முக்கிய இஸ்லாமிய நூல்கள்', back: 'பின்', readMore: 'மேலும் படிக்க', author: 'ஆசிரியர்', reference: 'ஆதாரம்', recommended: 'பரிந்துரைக்கப்பட்டது', times: 'முறை', verses: 'வரிகள்', readingMode: 'படிக்கும் முறை', exitReading: 'படிப்பிலிருந்து வெளியேறு' },
    ml: { title: 'പ്രധാന ഇസ്‌ലാമിക ഗ്രന്ഥങ്ങൾ', back: 'തിരികെ', readMore: 'കൂടുതൽ വായിക്കുക', author: 'രചയിതാവ്', reference: 'അവലംബം', recommended: 'ശുപാർശ ചെയ്തത്', times: 'തവണ', verses: 'വരികൾ', readingMode: 'വായനാ മോഡ്', exitReading: 'വായനയിൽ നിന്ന് പുറത്തുകടക്കുക' },
  };

  const label = labels[language as keyof typeof labels] || labels.en;

  if (readingMode && selectedText) {
    const text = [...famousSalawat, ...additionalImportantTexts].find(t => t.id === selectedText);
    if (text) {
      return (
        <div className={`min-h-screen ${isDark ? 'bg-slate-900' : 'bg-amber-50'}`}>
          <div className="max-w-4xl mx-auto p-6">
            <button
              onClick={() => setReadingMode(false)}
              className={`mb-6 flex items-center gap-2 ${isDark ? 'text-gray-400 hover:text-white' : 'text-gray-600 hover:text-gray-900'}`}
            >
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
              {label.exitReading}
            </button>

            <h1 className={`text-2xl font-bold mb-6 text-center ${isDark ? 'text-white' : 'text-gray-900'}`}>
              {text.title[language] || text.title.en}
            </h1>

            <div className="flex justify-center gap-2 mb-6">
              {(['sm', 'md', 'lg', 'xl'] as const).map((size) => (
                <button
                  key={size}
                  onClick={() => setFontSize(size)}
                  className={`px-3 py-1 rounded text-sm ${
                    fontSize === size
                      ? isDark ? 'bg-emerald-600 text-white' : 'bg-emerald-500 text-white'
                      : isDark ? 'bg-slate-700 text-gray-300' : 'bg-white text-gray-700'
                  }`}
                >
                  {size.toUpperCase()}
                </button>
              ))}
            </div>

            <div className={`text-center ${isDark ? 'text-white' : 'text-gray-900'}`}>
              <p
                dir="rtl"
                className={`${fontSizeClass[fontSize]} leading-loose mb-8`}
                style={{ fontFamily: "'Amiri', 'Noto Naskh Arabic', serif" }}
              >
                {text.arabic}
              </p>

              {text.transliteration && (
                <p className={`text-lg italic mb-6 ${isDark ? 'text-gray-400' : 'text-gray-600'}`}>
                  {text.transliteration}
                </p>
              )}

              <p className={`text-lg leading-relaxed ${isDark ? 'text-gray-300' : 'text-gray-700'}`}>
                {text.translation[language as keyof typeof text.translation] || text.translation.en}
              </p>
            </div>

            <div className="mt-8">
              <AudioPlayer arabicText={text.arabic} language={language} />
            </div>
          </div>
        </div>
      );
    }
  }

  // Qaseedatul Burdah View
  if (selectedText === 'burdah-chapter-1') {
    return (
      <div className="max-w-4xl mx-auto">
        <button
          onClick={onBack}
          className={`mb-6 flex items-center gap-2 ${isDark ? 'text-gray-400 hover:text-white' : 'text-gray-600 hover:text-gray-900'}`}
        >
          <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
          </svg>
          {label.back}
        </button>

        <div className="bg-gradient-to-r from-amber-500 to-orange-600 rounded-2xl p-6 mb-6 text-white shadow-lg">
          <h2 className="text-2xl font-bold mb-2">
            {qaseedatulBurdahChapter1.title[language as keyof typeof qaseedatulBurdahChapter1.title] || qaseedatulBurdahChapter1.title.en}
          </h2>
          <p className="text-white/80 text-sm">
            {qaseedatulBurdahChapter1.author}
          </p>
        </div>

        <div className="space-y-6">
          {qaseedatulBurdahChapter1.verses.map((verse) => (
            <div
              key={verse.n}
              className={`p-6 rounded-xl border ${isDark ? 'bg-slate-800 border-slate-700' : 'bg-white border-gray-200'} shadow-md`}
            >
              <div className="flex items-start gap-4">
                <div className={`w-10 h-10 rounded-full flex items-center justify-center text-sm font-bold flex-shrink-0 ${
                  isDark ? 'bg-amber-900 text-amber-300' : 'bg-amber-100 text-amber-700'
                }`}>
                  {verse.n}
                </div>
                <div className="flex-1">
                  <p
                    dir="rtl"
                    className={`text-2xl mb-3 leading-loose ${isDark ? 'text-white' : 'text-gray-900'}`}
                    style={{ fontFamily: "'Amiri', 'Noto Naskh Arabic', serif" }}
                  >
                    {verse.arabic}
                  </p>
                  {verse.transliteration && (
                    <p className={`text-sm italic mb-2 ${isDark ? 'text-gray-400' : 'text-gray-600'}`}>
                      {verse.transliteration}
                    </p>
                  )}
                  <p className={`text-base ${isDark ? 'text-gray-300' : 'text-gray-700'}`}>
                    {verse.translation[language as keyof typeof verse.translation] || verse.translation.en}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    );
  }

  // Main List View
  return (
    <div className="max-w-4xl mx-auto">
      <button
        onClick={onBack}
        className={`mb-6 flex items-center gap-2 ${isDark ? 'text-gray-400 hover:text-white' : 'text-gray-600 hover:text-gray-900'}`}
      >
        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
        </svg>
        {label.back}
      </button>

      <div className="bg-gradient-to-r from-amber-500 to-orange-600 rounded-2xl p-6 mb-6 text-white shadow-lg">
        <h2 className="text-2xl font-bold">{label.title}</h2>
      </div>

      <div className="space-y-4">
        {/* Qaseedatul Burdah */}
        <div
          onClick={() => setSelectedText('burdah-chapter-1')}
          className={`p-5 rounded-xl border cursor-pointer transition-all hover:shadow-lg ${
            isDark ? 'bg-slate-800 border-slate-700 hover:border-amber-500' : 'bg-white border-gray-200 hover:border-amber-400'
          }`}
        >
          <div className="flex items-start gap-4">
            <div className={`w-12 h-12 rounded-xl bg-gradient-to-br from-amber-400 to-orange-500 flex items-center justify-center text-2xl flex-shrink-0`}>
              📜
            </div>
            <div className="flex-1">
              <h3 className={`font-bold text-lg mb-1 ${isDark ? 'text-white' : 'text-gray-900'}`}>
                Qaseedatul Burdah - Chapter 1
              </h3>
              <p className={`text-sm mb-2 ${isDark ? 'text-gray-400' : 'text-gray-600'}`}>
                {qaseedatulBurdahChapter1.author}
              </p>
              <p className={`text-xs ${isDark ? 'text-amber-400' : 'text-amber-600'}`}>
                {qaseedatulBurdahChapter1.verses.length} {label.verses}
              </p>
            </div>
          </div>
        </div>

        {/* Famous Salawat */}
        {famousSalawat.map((text) => (
          <div
            key={text.id}
            onClick={() => {
              setSelectedText(text.id);
              setReadingMode(true);
            }}
            className={`p-5 rounded-xl border cursor-pointer transition-all hover:shadow-lg ${
              isDark ? 'bg-slate-800 border-slate-700 hover:border-emerald-500' : 'bg-white border-gray-200 hover:border-emerald-400'
            }`}
          >
            <div className="flex items-start gap-4">
              <div className={`w-12 h-12 rounded-xl bg-gradient-to-br from-emerald-400 to-teal-500 flex items-center justify-center text-2xl flex-shrink-0`}>
                💚
              </div>
              <div className="flex-1">
                <h3 className={`font-bold text-lg mb-1 ${isDark ? 'text-white' : 'text-gray-900'}`}>
                  {text.title[language] || text.title.en}
                </h3>
                <p className={`text-sm mb-2 ${isDark ? 'text-gray-400' : 'text-gray-600'}`}>
                  {text.author}
                </p>
                <div className="flex items-center gap-3">
                  <span className={`text-xs ${isDark ? 'text-emerald-400' : 'text-emerald-600'}`}>
                    {label.recommended}: {text.recommendedCount} {label.times}
                  </span>
                </div>
                <p
                  dir="rtl"
                  className={`text-lg mt-2 ${isDark ? 'text-gray-300' : 'text-gray-700'}`}
                  style={{ fontFamily: "'Amiri', serif" }}
                >
                  {text.arabic.substring(0, 80)}...
                </p>
              </div>
            </div>
          </div>
        ))}

        {/* Additional Important Duas */}
        {additionalImportantTexts.map((text) => (
          <div
            key={text.id}
            onClick={() => {
              setSelectedText(text.id);
              setReadingMode(true);
            }}
            className={`p-5 rounded-xl border cursor-pointer transition-all hover:shadow-lg ${
              isDark ? 'bg-slate-800 border-slate-700 hover:border-blue-500' : 'bg-white border-gray-200 hover:border-blue-400'
            }`}
          >
            <div className="flex items-start gap-4">
              <div className={`w-12 h-12 rounded-xl bg-gradient-to-br from-blue-400 to-indigo-500 flex items-center justify-center text-2xl flex-shrink-0`}>
                🤲
              </div>
              <div className="flex-1">
                <h3 className={`font-bold text-lg mb-1 ${isDark ? 'text-white' : 'text-gray-900'}`}>
                  {text.title[language] || text.title.en}
                </h3>
                <p className={`text-sm mb-2 ${isDark ? 'text-gray-400' : 'text-gray-600'}`}>
                  {text.reference}
                </p>
                <p
                  dir="rtl"
                  className={`text-lg mt-2 ${isDark ? 'text-gray-300' : 'text-gray-700'}`}
                  style={{ fontFamily: "'Amiri', serif" }}
                >
                  {text.arabic.substring(0, 80)}...
                </p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
