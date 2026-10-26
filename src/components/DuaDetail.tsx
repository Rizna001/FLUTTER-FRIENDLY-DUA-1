import { useState } from 'react';

export default function DuaDetail({
  dua,
  category,
  language,
  onBack,
}: {
  dua: any;
  category: any;
  language: string;
  onBack: () => void;
}) {
  const [copied, setCopied] = useState(false);
  const [fontSize, setFontSize] = useState<'sm' | 'md' | 'lg' | 'xl'>('lg');

  const arabicFontSize = {
    sm: 'text-2xl',
    md: 'text-3xl',
    lg: 'text-4xl',
    xl: 'text-5xl',
  };

  const handleCopy = () => {
    const text = `${dua.arabic}\n\n${dua.translation[language] || dua.translation.en}`;
    navigator.clipboard.writeText(text);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const reciteLabel = language === 'en' ? 'Recite' :
    language === 'ar' ? 'اقرأ' :
    language === 'ur' ? 'پڑھیں' :
    language === 'fr' ? 'Réciter' :
    language === 'tr' ? 'Oku' :
    language === 'id' ? 'Baca' :
    language === 'bn' ? 'পড়ুন' :
    'Baca';

  const referenceLabel = language === 'en' ? 'Reference' :
    language === 'ar' ? 'المصدر' :
    language === 'ur' ? 'حوالہ' :
    language === 'fr' ? 'Référence' :
    language === 'tr' ? 'Kaynak' :
    language === 'id' ? 'Referensi' :
    language === 'bn' ? 'সূত্র' :
    'Rujukan';

  const timesLabel = language === 'en' ? 'times' :
    language === 'ar' ? 'مرات' :
    language === 'ur' ? 'بار' :
    language === 'fr' ? 'fois' :
    language === 'tr' ? 'kez' :
    language === 'id' ? 'kali' :
    language === 'bn' ? 'বার' :
    'kali';

  return (
    <div className="max-w-3xl mx-auto">
      {/* Back Button */}
      <button
        onClick={onBack}
        className="mb-6 flex items-center gap-2 text-gray-600 hover:text-gray-900 transition-colors"
      >
        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
        </svg>
        <span>{language === 'en' ? 'Back' : language === 'ar' ? 'رجوع' : language === 'ur' ? 'واپس' : language === 'fr' ? 'Retour' : language === 'tr' ? 'Geri' : language === 'id' ? 'Kembali' : language === 'bn' ? 'পিছনে' : 'Kembali'}</span>
      </button>

      {/* Dua Card */}
      <div className="bg-white rounded-2xl shadow-xl border border-gray-100 overflow-hidden">
        {/* Header */}
        <div className={`bg-gradient-to-r ${category.gradient} p-6 text-white`}>
          <div className="flex items-center gap-3 mb-2">
            <span className="text-2xl">{category.icon}</span>
            <span className="text-sm text-white/80">{category.name[language] || category.name.en}</span>
          </div>
          <h2 className="text-xl font-bold">{dua.title[language] || dua.title.en}</h2>
          <div className="flex items-center gap-3 mt-2">
            <span className="text-xs bg-white/20 px-2 py-1 rounded-full">{referenceLabel}: {dua.reference}</span>
            <span className="text-xs bg-white/20 px-2 py-1 rounded-full">{reciteLabel}: {dua.times} {timesLabel}</span>
          </div>
        </div>

        {/* Arabic Text */}
        <div className="p-6 border-b border-gray-100">
          <div className="flex items-center justify-between mb-4">
            <span className="text-xs font-medium text-gray-400 uppercase tracking-wider">
              {language === 'en' ? 'Arabic Text' : language === 'ar' ? 'النص العربي' : language === 'ur' ? 'عربی متن' : language === 'fr' ? 'Texte Arabe' : language === 'tr' ? 'Arapça Metin' : language === 'id' ? 'Teks Arab' : language === 'bn' ? 'আরবি টেক্সট' : 'Teks Arab'}
            </span>
            {/* Font Size Controls */}
            <div className="flex items-center gap-1">
              {(['sm', 'md', 'lg', 'xl'] as const).map((size) => (
                <button
                  key={size}
                  onClick={() => setFontSize(size)}
                  className={`w-7 h-7 rounded-md text-xs font-bold transition-colors ${
                    fontSize === size
                      ? 'bg-emerald-100 text-emerald-700'
                      : 'text-gray-400 hover:text-gray-600 hover:bg-gray-100'
                  }`}
                >
                  {size === 'sm' ? 'A' : size === 'md' ? 'A' : size === 'lg' ? 'A' : 'A'}
                  <span className="sr-only">{size}</span>
                </button>
              ))}
            </div>
          </div>
          <p
            dir="rtl"
            className={`${arabicFontSize[fontSize]} leading-loose text-center font-arabic text-gray-800 py-4`}
            style={{ fontFamily: "'Amiri', 'Traditional Arabic', 'Noto Naskh Arabic', serif" }}
          >
            {dua.arabic}
          </p>
        </div>

        {/* Translation */}
        <div className="p-6 border-b border-gray-100 bg-gray-50/50">
          <span className="text-xs font-medium text-gray-400 uppercase tracking-wider mb-3 block">
            {language === 'en' ? 'Translation' : language === 'ar' ? 'الترجمة' : language === 'ur' ? 'ترجمہ' : language === 'fr' ? 'Traduction' : language === 'tr' ? 'Çeviri' : language === 'id' ? 'Terjemahan' : language === 'bn' ? 'অনুবাদ' : 'Terjemahan'}
          </span>
          <p className="text-gray-700 text-lg leading-relaxed">
            {dua.translation[language] || dua.translation.en}
          </p>
        </div>

        {/* Actions */}
        <div className="p-4 flex items-center justify-between bg-white">
          <div className="flex items-center gap-2">
            <span className="text-xs text-gray-400">{dua.reference}</span>
          </div>
          <button
            onClick={handleCopy}
            className={`flex items-center gap-2 px-4 py-2 rounded-lg text-sm font-medium transition-all ${
              copied
                ? 'bg-emerald-100 text-emerald-700'
                : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
            }`}
          >
            {copied ? (
              <>
                <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                </svg>
                {language === 'en' ? 'Copied!' : language === 'ar' ? 'تم النسخ!' : language === 'ur' ? 'کاپی ہو گیا!' : language === 'fr' ? 'Copié!' : language === 'tr' ? 'Kopyalandı!' : language === 'id' ? 'Disalin!' : language === 'bn' ? 'কপি হয়েছে!' : 'Disalin!'}
              </>
            ) : (
              <>
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 16H6a2 2 0 01-2-2V6a2 2 0 012-2h8a2 2 0 012 2v2m-6 12h8a2 2 0 002-2v-8a2 2 0 00-2-2h-8a2 2 0 00-2 2v8a2 2 0 002 2z" />
                </svg>
                {language === 'en' ? 'Copy' : language === 'ar' ? 'نسخ' : language === 'ur' ? 'کاپی' : language === 'fr' ? 'Copier' : language === 'tr' ? 'Kopyala' : language === 'id' ? 'Salin' : language === 'bn' ? 'কপি' : 'Salin'}
              </>
            )}
          </button>
        </div>
      </div>

      {/* Counter */}
      <DuaCounter language={language} targetTimes={dua.times} />
    </div>
  );
}

function DuaCounter({ language, targetTimes }: { language: string; targetTimes: number }) {
  const [count, setCount] = useState(0);

  const label = language === 'en' ? 'Dua Counter' :
    language === 'ar' ? 'عداد الذكر' :
    language === 'ur' ? 'ذکر کاؤنٹر' :
    language === 'fr' ? 'Compteur de Dua' :
    language === 'tr' ? 'Dua Sayacı' :
    language === 'id' ? 'Penghitung Doa' :
    language === 'bn' ? 'দোয়া কাউন্টার' :
    'Penghitung Doa';

  return (
    <div className="mt-6 bg-white rounded-2xl shadow-lg border border-gray-100 p-6 text-center">
      <h3 className="text-sm font-medium text-gray-500 mb-4">{label}</h3>
      <div className="flex items-center justify-center gap-6">
        <button
          onClick={() => setCount(Math.max(0, count - 1))}
          className="w-12 h-12 rounded-full bg-gray-100 hover:bg-gray-200 flex items-center justify-center text-gray-600 transition-colors"
        >
          <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M20 12H4" />
          </svg>
        </button>
        
        <div className="text-center">
          <div className={`text-4xl font-bold ${count >= targetTimes ? 'text-emerald-500' : 'text-gray-800'}`}>
            {count}
          </div>
          <div className="text-xs text-gray-400 mt-1">/ {targetTimes}</div>
        </div>

        <button
          onClick={() => setCount(count + 1)}
          className="w-12 h-12 rounded-full bg-emerald-100 hover:bg-emerald-200 flex items-center justify-center text-emerald-600 transition-colors"
        >
          <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4v16m8-8H4" />
          </svg>
        </button>
      </div>

      <button
        onClick={() => setCount(0)}
        className="mt-4 text-xs text-gray-400 hover:text-gray-600 transition-colors"
      >
        {language === 'en' ? 'Reset' : language === 'ar' ? 'إعادة' : language === 'ur' ? 'ری سیٹ' : language === 'fr' ? 'Réinitialiser' : language === 'tr' ? 'Sıfırla' : language === 'id' ? 'Reset' : language === 'bn' ? 'রিসেট' : 'Reset'}
      </button>

      {count >= targetTimes && (
        <div className="mt-3 text-emerald-500 text-sm font-medium animate-pulse">
          ✓ {language === 'en' ? 'Completed!' : language === 'ar' ? 'تم!' : language === 'ur' ? 'مکمل!' : language === 'fr' ? 'Terminé!' : language === 'tr' ? 'Tamamlandı!' : language === 'id' ? 'Selesai!' : language === 'bn' ? 'সম্পন্ন!' : 'Selesai!'}
        </div>
      )}
    </div>
  );
}
