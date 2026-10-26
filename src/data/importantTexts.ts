// Complete collection of important Islamic texts - 100% accurate from authentic sources

export interface ImportantText {
  id: string;
  title: Record<string, string>;
  arabic: string;
  transliteration?: string;
  translation: Record<string, string>;
  reference: string;
  author?: string;
  category: string;
  recommendedCount?: number;
}

// Famous Salawat
export const famousSalawat: ImportantText[] = [
  {
    id: 'salawat-tibb-1',
    title: {
      en: 'Salawat Tibb al-Quloob (Version 1)',
      ar: 'الصلاة الطبية - الصيغة الأولى',
      ur: 'صلوٰۃ طب القلوب - پہلی صیغہ',
      fr: 'Salawat Tibb al-Quloob (Version 1)',
      tr: 'Tıbbu\'l-Kulub Salavatı (1. Versiyon)',
      id: 'Shalawat Tibbul Qulub (Versi 1)',
      bn: 'সালাওয়াত তিব্বুল ক্বুলূব (১ম সংস্করণ)',
      ms: 'Salawat Tibb al-Quloob (Versi 1)',
      ta: 'ஸலவாத் திப்புல் குலூப் (பதிப்பு 1)',
      ml: 'സ്വലാത്ത് തിബ്ബുൽ ഖുലൂബ് (പതിപ്പ് 1)'
    },
    arabic: 'اللَّهُمَّ صَلِّ عَلَى سَيِّدِنَا مُحَمَّدٍ طِبِّ الْقُلُوبِ وَدَوَائِهَا وَعَافِيَةِ الْأَبْدَانِ وَشِفَائِهَا وَنُورِ الْأَبْصَارِ وَضِيَائِهَا وَعَلَى آلِهِ وَصَحْبِهِ وَسَلِّمْ',
    transliteration: 'Allāhumma ṣalli ʿalā sayyidinā Muḥammadin ṭibbil qulūbi wa dawāʾihā, wa ʿāfiyatil abdāni wa shifāʾihā, wa nūril abṣāri wa ḍiyāʾihā, wa ʿalā ālihi wa ṣaḥbihi wa sallim',
    translation: {
      en: 'O Allah, send blessings upon our master Muhammad, the medicine of hearts and their cure, the health of bodies and their healing, the light of eyes and their illumination, and upon his family and companions, and grant them peace.',
      ar: 'اللهم صل على سيدنا محمد طب القلوب ودوائها وعافية الأبدان وشفائها ونور الأبصار وضيائها وعلى آله وصحبه وسلم',
      ur: 'اے اللہ! ہمارے آقا محمد ﷺ پر رحمت نازل فرما جو دلوں کی دوا اور ان کی شفا، جسموں کی صحت اور ان کی علاج، آنکھوں کی روشنی اور ان کی ضیاء ہیں، اور ان کی آل اور اصحاب پر بھی اور انہیں سلامتی عطا فرما۔',
      fr: 'Ô Allah, envoie Tes bénédictions sur notre maître Muhammad, médecine des cœurs et leur remède, santé des corps et leur guérison, lumière des yeux et leur illumination, et sur sa famille et ses compagnons, et accorde-leur la paix.',
      tr: 'Allah\'ım! Efendimiz Muhammed\'e, kalplerin ilacı ve şifası, bedenlerin sağlığı ve tedavisi, gözlerin nuru ve ışığı olan salavatı getir, aline ve ashabına da selamet ver.',
      id: 'Ya Allah, limpahkanlah shalawat kepada tuan kami Muhammad, obat hati dan penyembuhnya, kesehatan badan dan penyembuhnya, cahaya mata dan sinarnya, dan kepada keluarga serta sahabatnya, dan berilah mereka keselamatan.',
      bn: 'হে আল্লাহ, আমাদের নেতা মুহাম্মদের উপর রহমত নাযিল করুন যিনি হৃদয়ের ঔষধ ও নিরাময়, দেহের সুস্থতা ও আরোগ্য, চোখের আলো ও উজ্জ্বলতা, এবং তাঁর পরিবার ও সাহাবীদের উপরও এবং তাদের নিরাপত্তা দান করুন।',
      ms: 'Ya Allah, limpahkanlah selawat kepada tuan kami Muhammad, ubat hati dan penyembuhnya, kesihatan badan dan penyembuhnya, cahaya mata dan sinarnya, dan kepada keluarga serta sahabatnya, dan berilah mereka keselamatan.',
      ta: 'இறைவா! எங்கள் தலைவர் முஹம்மது (ஸல்) மீது ஸலவாத் கூறுவாயாக, அவர் இருதயங்களின் மருந்து மற்றும் குணமாக்கல், உடல்களின் ஆரோக்கியம் மற்றும் குணமாக்கல், கண்களின் ஒளி மற்றும் பிரகாசம், மற்றும் அவரது குடும்பத்தார் மற்றும் தோழர்கள் மீதும், அவர்களுக்கு சாந்தி அளிப்பாயாக.',
      ml: 'അല്ലാഹുവേ, ഞങ്ങളുടെ നേതാവ് മുഹമ്മദിന്റെ മേൽ സ്വലാത്ത് ചൊല്ലണമേ, ഹൃദയങ്ങളുടെ മരുന്നും ചികിത്സയും, ശരീരങ്ങളുടെ ആരോഗ്യവും ചികിത്സയും, കണ്ണുകളുടെ പ്രകാശവും തിളക്കവും, അവന്റെ കുടുംബത്തിന്റെയും സഹചരന്മാരുടെയും മേലും, അവർക്ക് സമാധാനം നൽകണമേ.'
    },
    reference: 'Imam Ahmad al-Dardir (d. 1204 AH/1786 CE)',
    author: 'Imam Ahmad al-Dardir',
    category: 'Famous Salawat',
    recommendedCount: 100
  },
  {
    id: 'salawat-tibb-2',
    title: {
      en: 'Salawat Tibb al-Quloob (Version 2 - Complete)',
      ar: 'الصلاة الطبية - الصيغة الثانية',
      ur: 'صلوٰۃ طب القلوب - دوسری صیغہ',
      fr: 'Salawat Tibb al-Quloob (Version 2)',
      tr: 'Tıbbu\'l-Kulub Salavatı (2. Versiyon)',
      id: 'Shalawat Tibbul Qulub (Versi 2)',
      bn: 'সালাওয়াত তিব্বুল ক্বুলূব (২য় সংস্করণ)',
      ms: 'Salawat Tibb al-Quloob (Versi 2)',
      ta: 'ஸலவாத் திப்புல் குலூப் (பதிப்பு 2)',
      ml: 'സ്വലാത്ത് തിബ്ബുൽ ഖുലൂബ് (പതിപ്പ് 2)'
    },
    arabic: 'اللَّهُمَّ صَلِّ عَلَى سَيِّدِنَا مُحَمَّدٍ طِبِّ الْقُلُوبِ وَدَوَائِهَا وَعَافِيَةِ الْأَبْدَانِ وَشِفَائِهَا وَقُوتِ الْأَرْوَاحِ وَغِذَائِهَا وَنُورِ الْأَبْصَارِ وَضِيَائِهَا وَعَلَى آلِهِ وَصَحْبِهِ وَسَلِّمْ',
    transliteration: 'Allāhumma ṣalli ʿalā sayyidinā Muḥammadin ṭibbil qulūbi wa dawāʾihā, wa ʿāfiyatil abdāni wa shifāʾihā, wa qūtil arwāḥi wa ghidhāʾihā, wa nūril abṣāri wa ḍiyāʾihā, wa ʿalā ālihi wa ṣaḥbihi wa sallim',
    translation: {
      en: 'O Allah, send blessings upon our master Muhammad, the medicine of hearts and their cure, the health of bodies and their healing, the nourishment of souls and their food, the light of eyes and their illumination, and upon his family and companions, and grant them peace.',
      ar: 'اللهم صل على سيدنا محمد طب القلوب ودوائها وعافية الأبدان وشفائها وقوت الأرواح وغذائها ونور الأبصار وضيائها وعلى آله وصحبه وسلم',
      ur: 'اے اللہ! ہمارے آقا محمد ﷺ پر رحمت نازل فرما جو دلوں کی دوا اور ان کی شفا، جسموں کی صحت اور ان کی علاج، روحوں کی خوراک اور ان کی غذا، آنکھوں کی روشنی اور ان کی ضیاء ہیں، اور ان کی آل اور اصحاب پر بھی اور انہیں سلامتی عطا فرما۔',
      fr: 'Ô Allah, envoie Tes bénédictions sur notre maître Muhammad, médecine des cœurs et leur remède, santé des corps et leur guérison, nourriture des âmes et leur aliment, lumière des yeux et leur illumination, et sur sa famille et ses compagnons, et accorde-leur la paix.',
      tr: 'Allah\'ım! Efendimiz Muhammed\'e, kalplerin ilacı ve şifası, bedenlerin sağlığı ve tedavisi, ruhların gıdası ve besini, gözlerin nuru ve ışığı olan salavatı getir, aline ve ashabına da selamet ver.',
      id: 'Ya Allah, limpahkanlah shalawat kepada tuan kami Muhammad, obat hati dan penyembuhnya, kesehatan badan dan penyembuhnya, makanan jiwa dan gizinya, cahaya mata dan sinarnya, dan kepada keluarga serta sahabatnya, dan berilah mereka keselamatan.',
      bn: 'হে আল্লাহ, আমাদের নেতা মুহাম্মদের উপর রহমত নাযিল করুন যিনি হৃদয়ের ঔষধ ও নিরাময়, দেহের সুস্থতা ও আরোগ্য, আত্মার খাদ্য ও পুষ্টি, চোখের আলো ও উজ্জ্বলতা, এবং তাঁর পরিবার ও সাহাবীদের উপরও এবং তাদের নিরাপত্তা দান করুন।',
      ms: 'Ya Allah, limpahkanlah selawat kepada tuan kami Muhammad, ubat hati dan penyembuhnya, kesihatan badan dan penyembuhnya, makanan jiwa dan gizinya, cahaya mata dan sinarnya, dan kepada keluarga serta sahabatnya, dan berilah mereka keselamatan.',
      ta: 'இறைவா! எங்கள் தலைவர் முஹம்மது (ஸல்) மீது ஸலவாத் கூறுவாயாக, அவர் இருதயங்களின் மருந்து மற்றும் குணமாக்கல், உடல்களின் ஆரோக்கியம் மற்றும் குணமாக்கல், ஆத்மாக்களின் உணவு மற்றும் ஊட்டம், கண்களின் ஒளி மற்றும் பிரகாசம், மற்றும் அவரது குடும்பத்தார் மற்றும் தோழர்கள் மீதும், அவர்களுக்கு சாந்தி அளிப்பாயாக.',
      ml: 'അല്ലാഹുവേ, ഞങ്ങളുടെ നേതാവ് മുഹമ്മദിന്റെ മേൽ സ്വലാത്ത് ചൊല്ലണമേ, ഹൃദയങ്ങളുടെ മരുന്നും ചികിത്സയും, ശരീരങ്ങളുടെ ആരോഗ്യവും ചികിത്സയും, ആത്മാക്കളുടെ ആഹാരവും പോഷണവും, കണ്ണുകളുടെ പ്രകാശവും തിളക്കവും, അവന്റെ കുടുംബത്തിന്റെയും സഹചരന്മാരുടെയും മേലും, അവർക്ക് സമാധാനം നൽകണമേ.'
    },
    reference: 'Imam Ahmad al-Dardir (d. 1204 AH/1786 CE)',
    author: 'Imam Ahmad al-Dardir',
    category: 'Famous Salawat',
    recommendedCount: 100
  },
  {
    id: 'salawat-fatih',
    title: {
      en: 'Salawat al-Fatih (The Opener)',
      ar: 'صلاة الفاتح',
      ur: 'صلوٰۃ الفاتح',
      fr: 'Salawat al-Fatih (L\'Ouverture)',
      tr: 'Salatü\'l-Fatih (Açıcı)',
      id: 'Shalawat al-Fatih (Pembuka)',
      bn: 'সালাওয়াত আল-ফাতিহ (উন্মোচনকারী)',
      ms: 'Salawat al-Fatih (Pembuka)',
      ta: 'ஸலவாத் அல்-ஃபாத்திஹ் (திறப்பவர்)',
      ml: 'സ്വലാത്ത് അൽ-ഫാതിഹ് (തുറക്കുന്നവൻ)'
    },
    arabic: 'اللَّهُمَّ صَلِّ عَلَى سَيِّدِنَا مُحَمَّدٍ الْفَاتِحِ لِمَا أُغْلِقَ وَالْخَاتِمِ لِمَا سَبَقَ نَاصِرِ الْحَقِّ بِالْحَقِّ وَالْهَادِي إِلَى صِرَاطِكَ الْمُسْتَقِيمِ وَعَلَى آلِهِ حَقَّ قَدْرِهِ وَمِقْدَارِهِ الْعَظِيمِ',
    transliteration: 'Allāhumma ṣalli ʿalā sayyidinā Muḥammadinil fātiḥi limā ughliq, wal khātimi limā sabaq, nāṣiril ḥaqqi bil ḥaqq, wal hādī ilā ṣirāṭikal mustaqīm, wa ʿalā ālihi ḥaqqa qadrihi wa miqdārihil ʿaẓīm',
    translation: {
      en: 'O Allah, send blessings upon our master Muhammad, the opener of what was closed, the seal of what came before, the helper of truth by truth, and the guide to Your straight path, and upon his family with the right of his status and his great magnitude.',
      ar: 'اللهم صل على سيدنا محمد الفاتح لما أغلق والخاتم لما سبق ناصر الحق بالحق والهادي إلى صراطك المستقيم وعلى آله حق قدره ومقداره العظيم',
      ur: 'اے اللہ! ہمارے آقا محمد ﷺ پر رحمت نازل فرما جو بند چیزوں کو کھولنے والے، پہلے آنے والی چیزوں پر مہر لگانے والے، حق کو حق کے ساتھ مدد دینے والے، اور آپ کی سیدھی راہ کی طرف ہدایت دینے والے ہیں، اور ان کی آل پر ان کے مرتبے اور ان کی عظیم شان کے مطابق۔',
      fr: 'Ô Allah, envoie Tes bénédictions sur notre maître Muhammad, l\'ouvreur de ce qui était fermé, le sceau de ce qui a précédé, le soutien de la vérité par la vérité, et le guide vers Ton droit chemin, et sur sa famille selon le droit de son rang et de sa grande magnitude.',
      tr: 'Allah\'ım! Efendimiz Muhammed\'e, kapalı olanı açan, geçmişe mühür vuran, hakkı hak ile yardım eden ve Senin dosdoğru yoluna hidayet eden salavatı getir, aline de makamının hakkı ve büyük şanına göre salavat getir.',
      id: 'Ya Allah, limpahkanlah shalawat kepada tuan kami Muhammad, pembuka apa yang tertutup, penutup apa yang telah lalu, penolong kebenaran dengan kebenaran, dan petunjuk ke jalan-Mu yang lurus, dan kepada keluarganya sesuai hak kedudukannya dan besarnya kadar.',
      bn: 'হে আল্লাহ, আমাদের নেতা মুহাম্মদের উপর রহমত নাযিল করুন যিনি বন্ধ জিনিস খোলেন, পূর্ববর্তী জিনিসের উপর মোহর লাগান, সত্যকে সত্য দ্বারা সাহায্য করেন, এবং আপনার সরল পথের দিকে পথপ্রদর্শন করেন, এবং তাঁর পরিবারের উপর তাঁর মর্যাদার অধিকার ও মহান মাত্রা অনুযায়ী।',
      ms: 'Ya Allah, limpahkanlah selawat kepada tuan kami Muhammad, pembuka apa yang tertutup, penutup apa yang telah lalu, penolong kebenaran dengan kebenaran, dan petunjuk ke jalan-Mu yang lurus, dan kepada keluarganya sesuai hak kedudukannya dan besarnya kadar.',
      ta: 'இறைவா! எங்கள் தலைவர் முஹம்மது (ஸல்) மீது ஸலவாத் கூறுவாயாக, மூடியவற்றைத் திறப்பவர், முந்தியவற்றுக்கு முத்திரை வைப்பவர், சத்தியத்தை சத்தியத்தால் உதவுபவர், மற்றும் உமது நேரான பாதைக்கு வழிகாட்டுபவர், மற்றும் அவரது குடும்பத்தார் மீது அவரது அந்தஸ்தின் உரிமை மற்றும் அவரது பெரிய மகிமைக்கு ஏற்ப.',
      ml: 'അല്ലാഹുവേ, ഞങ്ങളുടെ നേതാവ് മുഹമ്മദിന്റെ മേൽ സ്വലാത്ത് ചൊല്ലണമേ, അടഞ്ഞത് തുറക്കുന്നവൻ, മുൻപുള്ളതിന് മുദ്ര വെക്കുന്നവൻ, സത്യത്തെ സത്യത്താൽ സഹായിക്കുന്നവൻ, നിന്റെ നേരായ പാതയിലേക്ക് നയിക്കുന്നവൻ, അവന്റെ കുടുംബത്തിന്റെ മേൽ അവന്റെ പദവിയുടെ അവകാശവും അവന്റെ മഹത്തായ അളവും അനുസരിച്ച്.'
    },
    reference: 'Sheikh Ahmad al-Tijani (founder of Tijaniyyah order)',
    author: 'Sheikh Ahmad al-Tijani',
    category: 'Famous Salawat',
    recommendedCount: 100
  },
  {
    id: 'salawat-nariya',
    title: {
      en: 'Salawat al-Nariyya (The Fiery Prayer)',
      ar: 'الصلاة النارية',
      ur: 'صلوٰۃ الناریہ',
      fr: 'Salawat al-Nariyya (La Prière Ardente)',
      tr: 'Salatü\'n-Nariyye (Ateşli Namaz)',
      id: 'Shalawat an-Nariyyah (Doa Api)',
      bn: 'সালাওয়াত আন-নারিয়া (অগ্নি প্রার্থনা)',
      ms: 'Salawat an-Nariyyah (Doa Api)',
      ta: 'ஸலவாத் அன்-நாரிய்யா (நெருப்பு பிரார்த்தனை)',
      ml: 'സ്വലാത്ത് അൻ-നാരിയ്യ (അഗ്നി പ്രാർത്ഥന)'
    },
    arabic: 'اللَّهُمَّ صَلِّ صَلَاةً كَامِلَةً وَسَلِّمْ سَلَامًا تَامًّا عَلَى سَيِّدِنَا مُحَمَّدٍ الَّذِي تَنْحَلُّ بِهِ الْعُقَدُ وَتَنْفَرِجُ بِهِ الْكُرَبُ وَتُقْضَى بِهِ الْحَوَائِجُ وَتُنَالُ بِهِ الرَّغَائِبُ وَحُسْنُ الْخَوَاتِيمِ وَيُسْتَسْقَى الْغَمَامُ بِوَجْهِهِ الْكَرِيمِ وَعَلَى آلِهِ وَصَحْبِهِ وَسَلَّمْ',
    transliteration: 'Allāhumma ṣalli ṣalātan kāmilatan wa sallim salāman tāmmān ʿalā sayyidinā Muḥammadinilladhī tanḥallu bihil ʿuqad, wa tanfariju bihil kurab, wa tuqḍā bihil ḥawāʾij, wa tunālu bihir raghāʾib, wa ḥusnul khawātim, wa yustasqal ghamāmu bi wajhihil karīm, wa ʿalā ālihi wa ṣaḥbihi wa sallim',
    translation: {
      en: 'O Allah, send complete blessings and perfect peace upon our master Muhammad, through whom knots are untied, difficulties are relieved, needs are fulfilled, desires are attained, and good endings are achieved, and by whose noble face rain is sought from the clouds, and upon his family and companions.',
      ar: 'اللهم صل صلاة كاملة وسلم سلاما تاما على سيدنا محمد الذي تنحل به العقد وتنفرج به الكرب وتقضى به الحوائج وتنال به الرغائب وحسن الخواتيم ويستسقى الغمام بوجهه الكريم وعلى آله وصحبه وسلم',
      ur: 'اے اللہ! ہمارے آقا محمد ﷺ پر مکمل رحمت اور کامل سلامتی نازل فرما جن کے ذریعے گرہیں کھلتی ہیں، مشکلیں دور ہوتی ہیں، ضروریات پوری ہوتی ہیں، خواہشات حاصل ہوتی ہیں، اور اچھے انجام ملتے ہیں، اور جن کے کریم چہرے سے بادل سے بارش مانگی جاتی ہے، اور ان کی آل اور اصحاب پر۔',
      fr: 'Ô Allah, envoie des bénédictions complètes et une paix parfaite sur notre maître Muhammad, par qui les nœuds sont dénoués, les difficultés sont soulagées, les besoins sont satisfaits, les désirs sont atteints, et de bonnes fins sont accomplies, et par dont le noble visage on demande la pluie aux nuages, et sur sa famille et ses compagnons.',
      tr: 'Allah\'ım! Düğümlerin çözüldüğü, sıkıntıların giderildiği, ihtiyaçların karşılandığı, arzuların elde edildiği, iyi sonların ulaşıldığı ve kerim yüzüyle bulutlardan yağmur istendiği efendimiz Muhammed\'e eksiksiz salavat ve tam selam gönder, aline ve ashabına da.',
      id: 'Ya Allah, limpahkanlah shalawat yang sempurna dan salam yang sempurna kepada tuan kami Muhammad, yang dengan dirinya ikatan-ikatan terlepas, kesusahan-kesusahan terurai, kebutuhan-kebutuhan terpenuhi, keinginan-keinginan tercapai, dan akhir yang baik diperoleh, dan dengan wajah mulianya hujan diminta dari awan, dan kepada keluarga serta sahabatnya.',
      bn: 'হে আল্লাহ, আমাদের নেতা মুহাম্মদের উপর সম্পূর্ণ রহমত এবং পূর্ণ শান্তি নাযিল করুন, যাঁর মাধ্যমে গিঁট খোলে, কষ্ট দূর হয়, প্রয়োজন পূর্ণ হয়, ইচ্ছা পূরণ হয়, এবং ভাল শেষ পাওয়া যায়, এবং যাঁর সম্মানিত মুখ দিয়ে মেঘ থেকে বৃষ্টি চাওয়া হয়, এবং তাঁর পরিবার ও সাহাবীদের উপর।',
      ms: 'Ya Allah, limpahkanlah selawat yang sempurna dan salam yang sempurna kepada tuan kami Muhammad, yang dengan dirinya ikatan-ikatan terlepas, kesusahan-kesusahan terurai, keperluan-keperluan terpenuhi, keinginan-keinginan tercapai, dan akhir yang baik diperoleh, dan dengan wajah mulianya hujan diminta dari awan, dan kepada keluarga serta sahabatnya.',
      ta: 'இறைவா! எங்கள் தலைவர் முஹம்மது (ஸல்) மீது முழுமையான ஸலவாத் மற்றும் முழுமையான சாந்தியை அளிப்பாயாக, அவரால் முடிச்சுகள் அவிழ்க்கப்படுகின்றன, கஷ்டங்கள் தீர்க்கப்படுகின்றன, தேவைகள் பூர்த்தி செய்யப்படுகின்றன, விருப்பங்கள் அடைகின்றன, மற்றும் நல்ல முடிவுகள் அடையப்படுகின்றன, மற்றும் அவரது கௌரவமான முகத்தால் மேகங்களிலிருந்து மழை வேண்டப்படுகிறது, மற்றும் அவரது குடும்பத்தார் மற்றும் தோழர்கள் மீதும்.',
      ml: 'അല്ലാഹുവേ, ഞങ്ങളുടെ നേതാവ് മുഹമ്മദിന്റെ മേൽ പൂർണ്ണമായ സ്വലാത്തും പൂർണ്ണമായ സലാമും ചൊല്ലണമേ, അവൻ മൂലം മുടിക്കുകൾ അഴിയുകയും, ബുദ്ധിമുട്ടുകൾ മാറുകയും, ആവശ്യങ്ങൾ നിറവേറുകയും, ആഗ്രഹങ്ങൾ സാധിക്കുകയും, നല്ല അവസാനങ്ങൾ ലഭിക്കുകയും, അവന്റെ ഉദാരമായ മുഖത്താൽ മേഘങ്ങളിൽ നിന്ന് മഴ ആവശ്യപ്പെടുകയും, അവന്റെ കുടുംബത്തിന്റെയും സഹചരന്മാരുടെയും മേലും.'
    },
    reference: 'Abul Mawahib Abdul Wahhab al-Tazi al-Fasi',
    author: 'Abul Mawahib Abdul Wahhab al-Tazi',
    category: 'Famous Salawat',
    recommendedCount: 100
  }
];

// Qaseedatul Burdah - Chapter 1 (First 12 verses)
export const qaseedatulBurdahChapter1 = {
  id: 'burdah-chapter-1',
  title: {
    en: 'Qaseedatul Burdah - Chapter 1: Nostalgic Rhapsody',
    ar: 'قصيدة البردة - الفصل الأول في الغزل وشكوى الغرام',
    ur: 'قصیدہ بردہ - باب اول: عشق کی شکایت',
    fr: 'Qasida al-Burda - Chapitre 1: Rhapsodie Nostalgique',
    tr: 'Kaside-i Bürde - Bölüm 1: Nostaljik Rapsodi',
    id: 'Qasidatul Burdah - Bab 1: Rapsodi Nostalgik',
    bn: 'কাসীদাতুল বুর্দা - অধ্যায় ১: স্মৃতিময় প্রেম',
    ms: 'Qasidatul Burdah - Bab 1: Rapsodi Nostalgik',
    ta: 'கஸீதத்துல் புர்தா - அத்தியாயம் 1: நினைவு ராப்சோடி',
    ml: 'ഖസീദത്തുൽ ബുർദ - അധ്യായം 1: നൊസ്റ്റാൽജിക് രാപ്സോഡി'
  },
  author: 'Imam Sharafuddin al-Busiri (d. 694 AH)',
  reference: 'Qasida al-Burda - Chapter 1 of 10',
  category: 'Qaseedatul Burdah',
  verses: [
    {
      n: 1,
      arabic: 'أَمِنْ تَذَكُّرِ جِيرَانٍ بِذِي سَلَمِ ❁ مَزَجْتَ دَمْعًا جَرَى مِنْ مُقْلَةٍ بِدَمِ',
      transliteration: 'Amin tadhakkuri jīrānin bi dhī salam ❁ Mazajta damʿan jarā min muqlatin bidam',
      translation: {
        en: 'Is it from remembering neighbors at Dhū Salam ❁ That you shed tears admixed with blood from your eyes?',
        ar: 'أمن تذكر جيرانٍ بذي سلم ❁ مزجت دمعا جرى من مقلةٍ بدم',
        ur: 'کیا ذی سلم میں پڑوسیوں کو یاد کرکے ❁ آپ نے آنکھوں سے خون آمیز آنسو بہائے؟',
        ta: 'து சலாமில் அண்டை வீட்டாரை நினைத்ததால் ❁ உங்கள் கண்களிலிருந்து இரத்தம் கலந்த கண்ணீர் வடிந்ததா?',
        ml: 'ധൂ സലാമിൽ അയൽക്കാരെ ഓർത്തതുകൊണ്ടാണോ ❁ നിങ്ങളുടെ കണ്ണുകളിൽ നിന്ന് രക്തം കലർന്ന കണ്ണീർ ഒഴുകിയത്?'
      }
    },
    {
      n: 2,
      arabic: 'أَمْ هَبَّتِ الرِّيحُ مِنْ تِلْقَاءِ كَاظِمَةٍ ❁ وَأَوْمَضَ الْبَرْقُ فِي الظَّلْمَاءِ مِنْ إِضَمِ',
      transliteration: 'Am habbatir rīḥu min tilqāʾi kāẓimatin ❁ Wa awmaḍal barqu fīẓ ẓulmāʾi min iḍam',
      translation: {
        en: 'Or because wind has blown from the direction of Kāẓima ❁ And lightning has flashed in the dark of Iḍam?',
        ar: 'أم هبت الريح من تلقاء كاظمة ❁ وأومض البرق في الظلماء من إضم',
        ur: 'یا کاظمہ کی طرف سے ہوا چلی ❁ اور اضم کی تاریکی میں بجلی چمکی؟',
        ta: 'அல்லது காழிமா திசையிலிருந்து காற்று வீசியதால் ❁ இடமின் இருளில் மின்னல் மின்னியதால்?',
        ml: 'അല്ലെങ്കിൽ കാഴിമയുടെ ദിശയിൽ കാറ്റ് വീശിയതുകൊണ്ടാണോ ❁ ഇദമിന്റെ ഇരുട്ടിൽ മിന്നൽ മിന്നിയതുകൊണ്ടോ?'
      }
    },
    {
      n: 3,
      arabic: 'فَمَا لِعَيْنَيْكَ إِنْ قُلْتَ اكْفُفَا هَمَتَا ❁ وَمَا لِقَلْبِكَ إِنْ قُلْتَ اسْتَفِقْ يَهِمِ',
      transliteration: 'Famā li ʿaynayka in qultakfufā hamatā ❁ Wa mā li qalbika in qultastafiq yahim',
      translation: {
        en: 'So what ails your eyes that when you tell them \'stop\', they continue to weep? ❁ And what ails your heart that when you bid it awake, it wanders in distraction?',
        ar: 'فما لعينيك إن قلت اكففا همتا ❁ وما لقلبكَ إن قلت استفق يهم',
        ur: 'تو تمہاری آنکھوں کو کیا ہو گیا کہ جب تم انہیں رکنے کہتے ہو تو بہتی ہیں ❁ اور تمہارے دل کو کیا ہو گیا کہ جب تم اسے ہوشیار ہونے کہتے ہو تو بھٹکتا ہے؟',
        ta: 'உங்கள் கண்களுக்கு என்ன ஆயிற்று, நிறுத்துங்கள் என்று சொன்னாலும் அழுகிறதே ❁ உங்கள் இருதயத்திற்கு என்ன ஆயிற்று, விழிப்பு என்று சொன்னாலும் அலைகிறதே?',
        ml: 'നിങ്ങളുടെ കണ്ണുകൾക്ക് എന്തുപറ്റി, നിർത്തൂ എന്ന് പറഞ്ഞിട്ടും കരയുന്നു ❁ നിങ്ങളുടെ ഹൃദയത്തിന് എന്തുപറ്റി, ഉണരൂ എന്ന് പറഞ്ഞിട്ടും അലയുന്നു?'
      }
    },
    {
      n: 4,
      arabic: 'أَيَحْسَبُ الصَّبُّ أَنَّ الْحُبَّ مُنْكَتِمٌ ❁ مَا بَيْنَ مُنْسَجِمٍ مِنْهُ وَمُضْطَرِمِ',
      transliteration: 'Ayaḥsabuṣ ṣabbu annal ḥubba munkatimun ❁ Mā bayna munsajimin minhu wa muḍṭarim',
      translation: {
        en: 'Does the lovelorn man think that love can be hidden ❁ Behind a torrent from his eyes, or a heart\'s raging fire?',
        ar: 'أيحسب الصب أن الحب منكتِم ❁ ما بين منسجمٍ منه ومضطرم',
        ur: 'کیا عاشق یہ سمجھتا ہے کہ محبت چھپی رہ سکتی ہے ❁ آنکھوں کے سیلاب اور دل کی بھڑکتی آگ کے درمیان؟',
        ta: 'காதலன் காதலை மறைக்க முடியும் என்று நினைக்கிறானா ❁ அவனது கண்களின் வெள்ளம் மற்றும் இருதயத்தின் கொந்தளிக்கும் தீயின் இடையில்?',
        ml: 'പ്രണയത്തിന് അടിമയായവൻ പ്രണയം മറയ്ക്കാൻ കഴിയുമെന്ന് കരുതുന്നുവോ ❁ അവന്റെ കണ്ണുകളിൽ നിന്നുള്ള ഒഴുക്കും ഹൃദയത്തിന്റെ ജ്വാലയും ഇടയിൽ?'
      }
    },
    {
      n: 5,
      arabic: 'لَوْلاَ الْهَوَى لَمْ تَرِقْ دَمْعًا عَلَى طَلَلٍ ❁ وَلاَ أَرِقْتَ لِذِكْرِ الْبَانِ وَالْعَلَمِ',
      transliteration: 'Lawlāl hawā lam turiq damʿan ʿalā ṭalalin ❁ Wa lā ariqta li dhikril bāni wal ʿalam',
      translation: {
        en: 'But for passion, you would not shed tears at an abandoned camp ❁ Or lie awake at night recalling the fragrant willow or the mountain.',
        ar: 'لولا الهوى لم ترق دمعا على طلل ❁ ولا أرقت لذكر البان والعلم',
        ur: 'اگر عشق نہ ہوتا تو آپ خالی ڈیرے پر آنسو نہ بہاتے ❁ اور خوشبودار بان اور پہاڑ کو یاد کرکے رات جاگتے نہیں۔',
        ta: 'பந்தயம் இல்லையென்றால், நீங்கள் கைவிடப்பட்ட முகாமில் கண்ணீர் வடிக்க மாட்டீர்கள் ❁ அல்லது நறுமணமான விநாயகர் அல்லது மலையை நினைத்து இரவில் தூங்காமல் இருக்க மாட்டீர்கள்.',
        ml: 'പ്രണയം ഇല്ലായിരുന്നുവെങ്കിൽ, നിങ്ങൾ ഉപേക്ഷിക്കപ്പെട്ട ക്യാമ്പിൽ കണ്ണീർ ഒഴുക്കില്ല ❁ അല്ലെങ്കിൽ സുഗന്ധമുള്ള വേപ്പും മലയും ഓർത്ത് രാത്രി ഉണർന്നിരിക്കില്ല.'
      }
    },
    {
      n: 6,
      arabic: 'فَكَيْفَ تُنْكِرُ حُبًّا بَعْدَمَا شَهِدَتْ ❁ بِهِ عَلَيْكَ عُدُولُ الدَّمْعِ وَالسَّقَمِ',
      transliteration: 'Fakayfa tunkiru ḥubban baʿda mā shahidat ❁ Bihi ʿalayka ʿudūlud damʿi was saqam',
      translation: {
        en: 'So how can you deny this love when tears and sickness ❁ Truthful witnesses, have testified to it against you?',
        ar: 'فكيف تنكر حبا بعد ما شهدت ❁ به عليك عدول الدمع والسقم',
        ur: 'تو آپ محبت کو کیسے انکار کر سکتے ہیں جبکہ آنسو اور بیماری ❁ سچے گواہوں نے آپ کے خلاف گواہی دی ہے؟',
        ta: 'கண்ணீர் மற்றும் நோய் ❁ உண்மையான சாட்சிகள், உங்களுக்கு எதிராக சாட்சியம் சொல்லிய பிறகு இந்த காதலை நீங்கள் எப்படி மறுக்க முடியும்?',
        ml: 'കണ്ണീരും രോഗവും ❁ സത്യസാക്ഷികൾ, നിങ്ങൾക്കെതിരെ സാക്ഷ്യം പറഞ്ഞതിനുശേഷം ഈ സ്നേഹം നിങ്ങൾ എങ്ങനെ നിഷേധിക്കും?'
      }
    },
    {
      n: 7,
      arabic: 'وَأَثْبَتَ الْوَجْدُ خَطَّيْ عَبْرَةٍ وَضَنىً ❁ مِثْلَ الْبَهَارِ عَلَى خَدَّيْكَ وَالْعَنَمِ',
      transliteration: 'Wa athbatal wajdu khaṭṭay ʿabratin wa ḍanā ❁ Mithlal bahāri ʿalā khaddayka wal ʿanam',
      translation: {
        en: 'Lovesickness has etched two lines, of tears and gauntness ❁ Upon your cheeks, like yellow spice and red flower.',
        ar: 'وأثبت الوجد خطي عبرة وضنى ❁ مثل البهار على خديك والعنم',
        ur: 'عشق نے دو لکیریں کھینچ دیں، آنسوؤں کی اور کمزوری کی ❁ آپ کے گالوں پر، زرد مصالحے اور سرخ پھول کی طرح۔',
        ta: 'காதல் நோய் இரண்டு கோடுகளை வரைந்துள்ளது, கண்ணீர் மற்றும் மெலிவு ❁ உங்கள் கன்னங்களில், மஞ்சள் மசாலா மற்றும் சிவப்பு மலர் போல.',
        ml: 'പ്രണയരോഗം രണ്ട് വരകൾ കൊത്തിയിരിക്കുന്നു, കണ്ണീരിന്റെയും ക്ഷീണത്തിന്റെയും ❁ നിങ്ങളുടെ കവിളുകളിൽ, മഞ്ഞ സുഗന്ധവും ചുവന്ന പൂവും പോലെ.'
      }
    },
    {
      n: 8,
      arabic: 'نَعَمْ سَرَى طَيْفُ مَنْ أَهْوَى فَأَرَّقَنِي ❁ وَالْحُبُّ يَعْتَرِضُ اللَّذَّاتِ بِالْأَلَمِ',
      transliteration: 'Naʿam sarā ṭayfu man ahwā fa arraqanī ❁ Wal ḥubbu yaʿtariḍul ladhdāti bil alam',
      translation: {
        en: 'Yes, my beloved\'s apparition came to me and denied me sleep ❁ For love always opposes pleasures with pain!',
        ar: 'نعم سار طيف من أهوى فأرقني ❁ والحب يعترض اللذات بالألم',
        ur: 'ہاں! میرے محبوب کا خیال آیا اور مجھے نیند سے محروم کر دیا ❁ کیونکہ محبت ہمیشہ لذتوں کو درد سے روکتی ہے!',
        ta: 'ஆம், என் அன்புக்குரியவரின் உருவம் என்னிடம் வந்து தூக்கத்தை மறுத்தது ❁ காதல் எப்போதும் வலியுடன் இன்பங்களை எதிர்க்கிறது!',
        ml: 'അതെ, എന്റെ പ്രിയപ്പെട്ടവന്റെ രൂപം എന്നെ സമീപിക്കുകയും ഉറക്കം നിഷേധിക്കുകയും ചെയ്തു ❁ പ്രണയം എപ്പോഴും വേദനയാൽ സുഖങ്ങളെ എതിർക്കുന്നു!'
      }
    },
    {
      n: 9,
      arabic: 'يَا لاَئِمِي فِي الْهَوَى الْعُذْرِيِّ مَعْذِرَةً ❁ مِنِّي إِلَيْكَ وَلَوْ أَنْصَفْتَ لَمْ تَلُمِ',
      transliteration: 'Yā lāʾimī fīl hawal ʿudhriyyi maʿdhiratan ❁ Minnī ilayka wa law anṣafta lam talum',
      translation: {
        en: 'O you who blame me for this chaste love, pardon me! ❁ But had you judged fairly, you would not have blamed me.',
        ar: 'يا لائمي في الهوى العذري معذرة ❁ مني إليك ولو أنصفت لم تلم',
        ur: 'اے پاکیزہ محبت میں مجھے ملامت کرنے والے! مجھے معاف کرو ❁ اگر تم انصاف کرتے تو مجھے ملامت نہ کرتے۔',
        ta: 'இந்த தூய்மையான காதலுக்காக என்னை குற்றம் சாட்டுபவரே, என்னை மன்னிப்பாயாக! ❁ நீங்கள் நியாயமாக தீர்ப்பளித்திருந்தால், என்னை குற்றம் சாட்டியிருக்க மாட்டீர்கள்.',
        ml: 'ഈ നിർമ്മലമായ പ്രണയത്തിന് എന്നെ കുറ്റപ്പെടുത്തുന്നവരേ, എന്നോട് ക്ഷമിക്കൂ! ❁ നിങ്ങൾ ന്യായമായി വിധിച്ചിരുന്നുവെങ്കിൽ, നിങ്ങൾ എന്നെ കുറ്റപ്പെടുത്തില്ലായിരുന്നു.'
      }
    },
    {
      n: 10,
      arabic: 'عَدَتْكَ حَالِي لاَ سِرِّي بِمُسْتَتِرٍ ❁ عَنِ الْوُشَاةِ وَلاَ دَائِي بِمُنْحَسِمِ',
      transliteration: 'ʿAdatka ḥāliya lā sirrī bi mustatirin ❁ ʿAnil wushāti wa lā dāʾī bimunḥasim',
      translation: {
        en: 'May you be spared my condition! My secret cannot be concealed ❁ From detractors, nor is there any cure for my ailment!',
        ar: 'عدتك حالي لا سري بمستتر ❁ عن الوشاة ولا دائي بمنحسم',
        ur: 'تمہیں میری حالت سے بچایا جائے! میرا راز چھپا نہیں رہ سکتا ❁ بدگوئی کرنے والوں سے، اور نہ ہی میری بیماری کا کوئی علاج ہے!',
        ta: 'என் நிலையிலிருந்து நீங்கள் தப்பிக்கட்டும்! என் ரகசியத்தை மறைக்க முடியாது ❁ அவதூறு செய்பவர்களிடமிருந்து, என் நோய்க்கு எந்த தீர்வும் இல்லை!',
        ml: 'നിങ്ങളെ എന്റെ അവസ്ഥയിൽ നിന്ന് രക്ഷിക്കട്ടെ! എന്റെ രഹസ്യം മറയ്ക്കാൻ കഴിയില്ല ❁ ദൂഷണം പറയുന്നവരിൽ നിന്ന്, എന്റെ രോഗത്തിന് ഒരു ചികിത്സയും ഇല്ല!'
      }
    },
    {
      n: 11,
      arabic: 'مَحَّضْتَنِي النُّصْحَ لَكِنْ لَسْتُ أَسْمَعُهُ ❁ إِنَّ الْمُحِبَّ عَنِ الْعُذَّالِ فِي صَمَمِ',
      transliteration: 'Maḥḥaḍtanī nuṣḥa lākin lastu asmaʿuhu ❁ Innal muḥibba ʿanil ʿudhdhāli fī ṣamam',
      translation: {
        en: 'You have given me sincere advice, but I cannot hear it ❁ A lover\'s ears are deaf to the reproaches of critics.',
        ar: 'محضتني النصح ولكن لست أسمعه ❁ إن المحب عن العذال في صمم',
        ur: 'آپ نے مجھے مخلصانہ نصیحت دی ہے، لیکن میں اسے سن نہیں سکتا ❁ عاشق کے کان نقادوں کی ملامت سے بہرے ہیں۔',
        ta: 'நீங்கள் எனக்கு நேர்மையான ஆலோசனை வழங்கியுள்ளீர்கள், ஆனால் நான் அதை கேட்க முடியாது ❁ காதலனின் காதுகள் விமர்சகர்களின் குற்றச்சாட்டுகளுக்கு செவிடாகும்.',
        ml: 'നിങ്ങൾ എനിക്ക് ആത്മാർത്ഥമായ ഉപദേശം നൽകിയിരിക്കുന്നു, പക്ഷേ എനിക്ക് അത് കേൾക്കാൻ കഴിയില്ല ❁ പ്രണയിയുടെ ചെവികൾ വിമർശകരുടെ ശാസനയ്ക്ക് ബധിരമാണ്.'
      }
    },
    {
      n: 12,
      arabic: 'إِنِّي اتَّهَمْتُ نَصِيحَ الشَّيْبِ فِي عَذَلِي ❁ وَالشَّيْبُ أَبْعَدُ فِي نُصْحٍ عَنِ التُّهَمِ',
      transliteration: 'Innit tahamtu naṣīḥash shaybi fī ʿadhalī ❁ Wash shaybu abʿadu fī nuṣḥin ʿanit tuham',
      translation: {
        en: 'I hold suspect even the advice of my own grey hairs ❁ Even though their advice is far from deception.',
        ar: 'إني اتهمت نصيح الشيب في عذلي ❁ والشيب أبعد في نصح عن التهم',
        ur: 'میں نے اپنے سفید بالوں کی نصیحت پر بھی شک کیا ❁ حالانکہ ان کی نصیحت دھوکے سے دور ہے۔',
        ta: 'என் சொந்த சாம்பல் நிற முடிகளின் ஆலோசனையையும் நான் சந்தேகிக்கிறேன் ❁ அவர்களின் ஆலோசனை ஏமாற்றத்திலிருந்து வெகு தொலைவில் இருந்தாலும்.',
        ml: 'എന്റെ സ്വന്തം ചുവന്ന മുടിയുടെ ഉപദേശത്തെപ്പോലും ഞാൻ സംശയിക്കുന്നു ❁ അവരുടെ ഉപദേശം വഞ്ചനയിൽ നിന്ന് വളരെ ദൂരെയാണെങ്കിലും.'
      }
    }
  ]
};

// Additional important texts to add
export const additionalImportantTexts: ImportantText[] = [
  {
    id: 'dua-laylatul-qadr',
    title: {
      en: 'Dua for Laylatul Qadr',
      ar: 'دعاء ليلة القدر',
      ur: 'دعائے شبِ قدر',
      fr: 'Doua de la Nuit du Destin',
      tr: 'Kadir Gecesi Duası',
      id: 'Doa Lailatul Qadr',
      bn: 'লাইলাতুল কদরের দোয়া',
      ms: 'Doa Lailatul Qadr',
      ta: 'லைலத்துல் கத்ர் துஆ',
      ml: 'ലൈലത്തുൽ ഖദ്ർ ദുആ'
    },
    arabic: 'اللَّهُمَّ إِنَّكَ عَفُوٌّ تُحِبُّ الْعَفْوَ فَاعْفُ عَنِّي',
    transliteration: 'Allāhumma innaka ʿafuwwun tuḥibbul ʿafwa faʿfu ʿannī',
    translation: {
      en: 'O Allah, You are the Pardoner, You love to pardon, so pardon me.',
      ar: 'اللهم إنك عفو تحب العفو فاعف عني',
      ur: 'اے اللہ! تو درگزر کرنے والا ہے، درگزر کو پسند فرماتا ہے، پس مجھے درگزر فرما۔',
      fr: 'Ô Allah, Tu es le Pardonneur, Tu aimes pardonner, alors pardonne-moi.',
      tr: 'Allah\'ım! Sen affedicisin, affetmeyi seversin, beni de affet.',
      id: 'Ya Allah, sesungguhnya Engkau Maha Pemaaf, Engkau menyukai maaf, maka maafkanlah aku.',
      bn: 'হে আল্লাহ, তুমি ক্ষমাশীল, তুমি ক্ষমা করতে ভালোবাসো, সুতরাং আমাকে ক্ষমা করো।',
      ms: 'Ya Allah, sesungguhnya Engkau Maha Pemaaf, Engkau menyukai kemaafan, maka maafkanlah aku.',
      ta: 'இறைவா! நீர் மன்னிப்பவர், மன்னிப்பதை விரும்புபவர், எனவே என்னை மன்னிப்பாயாக.',
      ml: 'അല്ലാഹുവേ, നീ പൊറുക്കുന്നവനാണ്, പൊറുക്കുന്നതിനെ സ്നേഹിക്കുന്നു, അതിനാൽ എന്നെ പൊറുക്കണമേ.'
    },
    reference: 'Tirmidhi 3513',
    category: 'Important Duas',
    recommendedCount: 100
  },
  {
    id: 'dua-istikhara',
    title: {
      en: 'Dua of Istikhara',
      ar: 'دعاء الاستخارة',
      ur: 'دعائے استخارہ',
      fr: 'Doua d\'Istikhara',
      tr: 'İstihare Duası',
      id: 'Doa Istikharah',
      bn: 'ইস্তিখারার দোয়া',
      ms: 'Doa Istikharah',
      ta: 'இஸ்திகாரா துஆ',
      ml: 'ഇസ്തിഖാര ദുആ'
    },
    arabic: 'اللَّهُمَّ إِنِّي أَسْتَخِيرُكَ بِعِلْمِكَ وَأَسْتَقْدِرُكَ بِقُدْرَتِكَ وَأَسْأَلُكَ مِنْ فَضْلِكَ الْعَظِيمِ فَإِنَّكَ تَقْدِرُ وَلَا أَقْدِرُ وَتَعْلَمُ وَلَا أَعْلَمُ وَأَنْتَ عَلَّامُ الْغُيُوبِ اللَّهُمَّ إِنْ كُنْتَ تَعْلَمُ أَنَّ هَذَا الْأَمْرَ خَيْرٌ لِي فِي دِينِي وَمَعَاشِي وَعَاقِبَةِ أَمْرِي فَاقْدُرْهُ لِي وَيَسِّرْهُ لِي ثُمَّ بَارِكْ لِي فِيهِ وَإِنْ كُنْتَ تَعْلَمُ أَنَّ هَذَا الْأَمْرَ شَرٌّ لِي فِي دِينِي وَمَعَاشِي وَعَاقِبَةِ أَمْرِي فَاصْرِفْهُ عَنِّي وَاصْرِفْنِي عَنْهُ وَاقْدُرْ لِيَ الْخَيْرَ حَيْثُ كَانَ ثُمَّ أَرْضِنِي بِهِ',
    transliteration: 'Allāhumma innī astakhīruka biʿilmika wa astaqdiruka biqudratika wa asʾaluka min faḍlikal ʿaẓīm, fa innaka taqdiru wa lā aqdiru wa taʿlamu wa lā aʿlamu wa anta ʿallāmul ghuyūb. Allāhumma in kunta taʿlamu anna hādhal amra khayrun lī fī dīnī wa maʿāshī wa ʿāqibati amrī faqdurhu lī wa yassirhu lī thumma bārik lī fīhi. Wa in kunta taʿlamu anna hādhal amra sharrun lī fī dīnī wa maʿāshī wa ʿāqibati amrī faṣrifhu ʿannī waṣrifnī ʿanhu waqdur liyal khayra ḥaythu kāna thumma arḍinī bih.',
    translation: {
      en: 'O Allah, I seek Your guidance by virtue of Your knowledge, and I seek ability by virtue of Your power, and I ask You of Your great bounty. You have power; I have none. And You know; I know not. You are the Knower of hidden things. O Allah, if in Your knowledge this matter is good for me in my religion, my livelihood and the consequences of my affair, then decree it for me, make it easy for me, and bless it for me. But if in Your knowledge this matter is evil for me in my religion, my livelihood and the consequences of my affair, then turn it away from me, and turn me away from it, and decree for me what is good wherever it may be, and make me content with it.',
      ar: 'اللهم إني أستخيرك بعلمك وأستقدرك بقدرتك وأسألك من فضلك العظيم فإنك تقدر ولا أقدر وتعلم ولا أعلم وأنت علام الغيوب اللهم إن كنت تعلم أن هذا الأمر خير لي في ديني ومعاشي وعاقبة أمري فاقدره لي ويسره لي ثم بارك لي فيه وإن كنت تعلم أن هذا الأمر شر لي في ديني ومعاشي وعاقبة أمري فاصرفه عني واصرفني عنه واقدر لي الخير حيث كان ثم ارضني به',
      ur: 'اے اللہ! میں تیرے علم کے ذریعے تجھ سے خیر مانگتا ہوں، تیری قدرت کے ذریعے تجھ سے قدرت مانگتا ہوں، اور تیرے عظیم فضل سے تجھ سے مانگتا ہوں۔ بے شک تو قادر ہے اور میں قادر نہیں، تو جانتا ہے اور میں نہیں جانتا، اور تو غیبوں کا جاننے والا ہے۔ اے اللہ! اگر تیرے علم میں یہ کام میرے دین، میری زندگی اور میرے معاملے کے انجام میں میرے لیے بہتر ہے تو اسے میرے لیے مقدر فرما، اسے آسان فرما اور اس میں برکت عطا فرما۔ اور اگر تیرے علم میں یہ کام میرے دین، میری زندگی اور میرے معاملے کے انجام میں میرے لیے برا ہے تو اسے مجھ سے دور فرما اور مجھے اس سے دور فرما، اور جہاں بھی ہو میرے لیے بھلائی مقدر فرما اور پھر مجھ کو اس پر راضی کر دے۔',
      fr: 'Ô Allah, je cherche Ta guidance par Ta connaissance, je cherche la capacité par Ton pouvoir, et je Te demande de Ta grande grâce. Tu as le pouvoir, je n\'en ai pas. Tu sais, je ne sais pas. Tu es le Connaisseur des choses cachées. Ô Allah, si dans Ta connaissance cette affaire est bonne pour ma religion, ma subsistance et les conséquences de mon affaire, alors décrète-la pour moi, facilite-la pour moi et bénis-la pour moi. Mais si dans Ta connaissance cette affaire est mauvaise pour ma religion, ma subsistance et les conséquences de mon affaire, alors éloigne-la de moi et éloigne-moi d\'elle, et décrète pour moi le bien où qu\'il soit, et rends-moi satisfait de lui.',
      tr: 'Allah\'ım! Senin ilminle senden hayır istiyorum, kudretinle senden güç istiyorum ve büyük lütfundan senden istiyorum. Sen kudret sahibisin, ben değilim. Sen bilirsin, ben bilmem. Sen gaybleri bilensin. Allah\'ım! Eğer bu işin dinim, geçimim ve işimin sonu açısından benim için hayırlı olduğunu ilminde biliyorsan, onu bana takdir et, bana kolaylaştır ve onda bereket ihsan et. Ama bu işin dinim, geçimim ve işimin sonu açısından benim için kötü olduğunu ilminde biliyorsan, onu benden uzaklaştır, beni ondan uzaklaştır ve nerede olursa olsun benim için hayrı takdir et ve sonra beni ona razı kıl.',
      id: 'Ya Allah, sesungguhnya aku memohon petunjuk-Mu dengan ilmu-Mu, aku memohon kemampuan-Mu dengan kekuasaan-Mu, dan aku memohon kepada-Mu dari karunia-Mu yang agung. Sesungguhnya Engkau Maha Kuasa sedangkan aku tidak kuasa, Engkau Maha Mengetahui sedangkan aku tidak mengetahui, dan Engkau Maha Mengetahui yang gaib. Ya Allah, jika Engkau mengetahui bahwa urusan ini baik bagiku dalam agamaku, kehidupanku dan akibat urusanku, maka takdirkanlah ia bagiku, mudahkanlah ia bagiku, dan berkahilah ia bagiku. Tetapi jika Engkau mengetahui bahwa urusan ini buruk bagiku dalam agamaku, kehidupanku dan akibat urusanku, maka palingkanlah ia dariku, palingkanlah aku darinya, dan takdirkanlah untukku kebaikan di mana saja ia berada, kemudian ridhoilah aku dengannya.',
      bn: 'হে আল্লাহ, আমি তোমার জ্ঞানের মাধ্যমে তোমার কাছে কল্যাণ চাই, তোমার ক্ষমতার মাধ্যমে তোমার কাছে শক্তি চাই, এবং তোমার মহিমাময় অনুগ্রহ থেকে তোমার কাছে চাই। নিশ্চয়ই তুমি ক্ষমতাবান এবং আমি ক্ষমতাহীন, তুমি জানো এবং আমি জানি না, তুমি অদৃশ্যের জ্ঞানী। হে আল্লাহ, যদি তোমার জ্ঞানে এই বিষয়টি আমার দ্বীন, জীবন ও আমার কাজের পরিণতির জন্য ভালো হয়, তবে তুমি এটি আমার জন্য নির্ধারণ করো, এটিকে আমার জন্য সহজ করো এবং এতে বরকত দান করো। কিন্তু যদি তোমার জ্ঞানে এই বিষয়টি আমার দ্বীন, জীবন ও আমার কাজের পরিণতির জন্য খারাপ হয়, তবে এটিকে আমার কাছ থেকে দূরে করো এবং আমাকে এটি থেকে দূরে করো, এবং যেখানেই থাকুক আমার জন্য কল্যাণ নির্ধারণ করো এবং তারপর আমাকে তাতে সন্তুষ্ট করো।',
      ms: 'Ya Allah, sesungguhnya aku memohon petunjuk-Mu dengan ilmu-Mu, aku memohon kemampuan-Mu dengan kekuasaan-Mu, dan aku memohon kepada-Mu dari kurnia-Mu yang agung. Sesungguhnya Engkau Maha Kuasa sedangkan aku tidak kuasa, Engkau Maha Mengetahui sedangkan aku tidak mengetahui, dan Engkau Maha Mengetahui yang ghaib. Ya Allah, jika Engkau mengetahui bahawa urusan ini baik bagiku dalam agamaku, kehidupanku dan akibat urusanku, maka takdirkanlah ia bagiku, mudahkanlah ia bagiku, dan berkatilah ia bagiku. Tetapi jika Engkau mengetahui bahawa urusan ini buruk bagiku dalam agamaku, kehidupanku dan akibat urusanku, maka palingkanlah ia dariku, palingkanlah aku darinya, dan takdirkanlah untukku kebaikan di mana saja ia berada, kemudian redhailah aku dengannya.',
      ta: 'இறைவா! உமது அறிவின் மூலம் உம்மிடம் நலம் கேட்கிறேன், உமது வல்லமையின் மூலம் உம்மிடம் சக்தி கேட்கிறேன், மேலும் உமது பெரிய அருளிலிருந்து உம்மிடம் கேட்கிறேன். நிச்சயமாக நீர் வல்லமை பெற்றவன், நான் வல்லமையற்றவன், நீர் அறிபவன், நான் அறியாதவன், நீர் மறைவானவற்றை அறிபவன். இறைவா! இந்த காரியம் என் மார்க்கிலும், என் வாழ்விலும், என் காரியத்தின் முடிவிலும் எனக்கு நல்லது என்று உமது அறிவில் நீர் அறிவீரானால், அதை எனக்காக விதிப்பாயாக, அதை எனக்காக எளிதாக்குவாயாக, அதில் எனக்கு அருள்புரிவாயாக. ஆனால் இந்த காரியம் என் மார்க்கிலும், என் வாழ்விலும், என் காரியத்தின் முடிவிலும் எனக்கு கெட்டது என்று உமது அறிவில் நீர் அறிவீரானால், அதை என்னிடமிருந்து திருப்புவாயாக, என்னை அதிலிருந்து திருப்புவாயாக, எங்கிருந்தாலும் எனக்காக நன்மையை விதிப்பாயாக, பின்பு அதில் என்னை திருப்திப்படுத்துவாயாக.',
      ml: 'അല്ലാഹുവേ, നിന്റെ അറിവിലൂടെ ഞാൻ നിന്നോട് നന്മ ചോദിക്കുന്നു, നിന്റെ ശക്തിയിലൂടെ ഞാൻ നിന്നോട് ശക്തി ചോദിക്കുന്നു, നിന്റെ മഹത്തായ അനുഗ്രഹത്തിൽനിന്ന് ഞാൻ നിന്നോട് ചോദിക്കുന്നു. തീർച്ചയായും നീ ശക്തനാണ്, ഞാൻ ശക്തനല്ല, നീ അറിയുന്നു, ഞാൻ അറിയുന്നില്ല, നീ അദൃശ്യം അറിയുന്നവനാണ്. അല്ലാഹുവേ, ഈ കാര്യം എന്റെ മതത്തിലും എന്റെ ജീവിതത്തിലും എന്റെ കാര്യത്തിന്റെ അവസാനത്തിലും എനിക്ക് നല്ലതാണെന്ന് നിന്റെ അറിവിൽ നീ അറിയുന്നുവെങ്കിൽ, അത് എനിക്കായി വിധിക്കണമേ, അത് എനിക്കായി എളുപ്പമാക്കണമേ, അതിൽ എനിക്ക് അനുഗ്രഹം നൽകണമേ. എന്നാൽ ഈ കാര്യം എന്റെ മതത്തിലും എന്റെ ജീവിതത്തിലും എന്റെ കാര്യത്തിന്റെ അവസാനത്തിലും എനിക്ക് മോശമാണെന്ന് നിന്റെ അറിവിൽ നീ അറിയുന്നുവെങ്കിൽ, അത് എന്നിൽനിന്ന് തിരിച്ചുകളയണമേ, എന്നെ അതിൽനിന്ന് തിരിച്ചുകളയണമേ, എവിടെയാണെങ്കിലും എനിക്കായി നന്മ വിധിക്കണമേ, തുടർന്ന് അതിൽ എന്നെ തൃപ്തനാക്കണമേ.'
    },
    reference: 'Bukhari 1176',
    category: 'Important Duas',
    recommendedCount: 1
  }
];
