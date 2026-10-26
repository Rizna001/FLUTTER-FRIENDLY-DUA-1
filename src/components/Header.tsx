export default function Header({
  language,
  languages,
  showLanguageMenu,
  setShowLanguageMenu,
  setLanguage,
  currentLanguage,
}: {
  language: string;
  languages: { code: string; name: string; flag: string }[];
  showLanguageMenu: boolean;
  setShowLanguageMenu: (v: boolean) => void;
  setLanguage: (code: any) => void;
  currentLanguage: { code: string; name: string; flag: string };
}) {
  const title = language === 'en' ? 'Duas Collection' :
    language === 'ar' ? 'مجموعة الأدعية' :
    language === 'ur' ? 'مجموعہ دعائیں' :
    language === 'fr' ? 'Collection de Duas' :
    language === 'tr' ? 'Dua Koleksiyonu' :
    language === 'id' ? 'Koleksi Doa' :
    language === 'bn' ? 'দোয়া সংকলন' :
    'Koleksi Doa';

  const subtitle = language === 'en' ? 'Authentic supplications for every occasion' :
    language === 'ar' ? 'أدعية صحيحة لكل مناسبة' :
    language === 'ur' ? 'ہر موقع کے لیے مستند دعائیں' :
    language === 'fr' ? 'Invocations authentiques pour chaque occasion' :
    language === 'tr' ? 'Her durum için sahih dualar' :
    language === 'id' ? 'Doa-doa shahih untuk setiap keadaan' :
    language === 'bn' ? 'প্রতিটি উপলক্ষ্যের জন্য সহীহ দোয়া' :
    'Doa-doa sahih untuk setiap keadaan';

  return (
    <header className="sticky top-0 z-50 backdrop-blur-xl bg-white/80 border-b border-gray-100 shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo & Title */}
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-emerald-400 to-teal-600 flex items-center justify-center shadow-lg shadow-emerald-200">
              <span className="text-white text-lg">🤲</span>
            </div>
            <div className="hidden sm:block">
              <h1 className="text-lg font-bold text-gray-900">{title}</h1>
              <p className="text-xs text-gray-500">{subtitle}</p>
            </div>
          </div>

          {/* Language Selector */}
          <div className="relative">
            <button
              onClick={() => setShowLanguageMenu(!showLanguageMenu)}
              className="flex items-center gap-2 px-3 py-2 rounded-lg bg-gray-50 hover:bg-gray-100 border border-gray-200 transition-colors"
            >
              <span className="text-lg">{currentLanguage.flag}</span>
              <span className="text-sm font-medium text-gray-700 hidden sm:inline">{currentLanguage.name}</span>
              <svg className={`w-4 h-4 text-gray-500 transition-transform ${showLanguageMenu ? 'rotate-180' : ''}`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
              </svg>
            </button>

            {showLanguageMenu && (
              <>
                <div className="fixed inset-0 z-40" onClick={() => setShowLanguageMenu(false)} />
                <div className="absolute right-0 mt-2 w-48 bg-white rounded-xl shadow-xl border border-gray-100 py-2 z-50 max-h-80 overflow-y-auto">
                  {languages.map((lang) => (
                    <button
                      key={lang.code}
                      onClick={() => {
                        setLanguage(lang.code);
                        setShowLanguageMenu(false);
                      }}
                      className={`w-full flex items-center gap-3 px-4 py-2.5 text-left hover:bg-gray-50 transition-colors ${
                        language === lang.code ? 'bg-emerald-50 text-emerald-700' : 'text-gray-700'
                      }`}
                    >
                      <span className="text-lg">{lang.flag}</span>
                      <span className="text-sm font-medium">{lang.name}</span>
                      {language === lang.code && (
                        <svg className="w-4 h-4 ml-auto text-emerald-500" fill="currentColor" viewBox="0 0 20 20">
                          <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                        </svg>
                      )}
                    </button>
                  ))}
                </div>
              </>
            )}
          </div>
        </div>
      </div>
    </header>
  );
}
