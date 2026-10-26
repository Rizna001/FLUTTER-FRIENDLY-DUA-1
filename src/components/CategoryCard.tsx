export default function CategoryCard({
  category,
  language,
  onClick,
}: {
  category: any;
  language: string;
  onClick: () => void;
}) {
  return (
    <button
      onClick={onClick}
      className={`${category.bg} ${category.border} border rounded-2xl p-5 text-left hover:shadow-lg transition-all duration-300 hover:scale-[1.02] group`}
    >
      <div className="flex items-start gap-3 mb-3">
        <div className={`w-12 h-12 rounded-xl bg-gradient-to-br ${category.gradient} flex items-center justify-center shadow-md group-hover:shadow-lg transition-shadow`}>
          <span className="text-2xl">{category.icon}</span>
        </div>
        <div className="flex-1 min-w-0">
          <h3 className={`font-bold ${category.text} text-base leading-tight`}>
            {category.name[language] || category.name.en}
          </h3>
          <p className="text-gray-500 text-xs mt-1">
            {category.duas.length} {language === 'en' ? 'duas' : language === 'ar' ? 'دعاء' : language === 'ur' ? 'دعائیں' : language === 'fr' ? 'duas' : language === 'tr' ? 'dua' : language === 'id' ? 'doa' : language === 'bn' ? 'দোয়া' : 'doa'}
          </p>
        </div>
      </div>
      <div className="flex flex-wrap gap-1.5">
        {category.duas.slice(0, 2).map((dua: any) => (
          <span
            key={dua.id}
            className="text-xs bg-white/70 text-gray-600 px-2 py-1 rounded-md truncate max-w-[120px]"
          >
            {dua.title[language] || dua.title.en}
          </span>
        ))}
        {category.duas.length > 2 && (
          <span className="text-xs bg-white/70 text-gray-400 px-2 py-1 rounded-md">
            +{category.duas.length - 2}
          </span>
        )}
      </div>
    </button>
  );
}
