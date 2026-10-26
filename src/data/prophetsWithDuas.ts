// Complete list of 25 Prophets with their specific duas/dhikr from Quran and Hadith

export interface ProphetDua {
  prophetNumber: number;
  prophetName: {
    ar: string;
    en: string;
    ta: string;
    ml: string;
  };
  prophetMeaning: {
    en: string;
    ta: string;
    ml: string;
  };
  duas: Array<{
    id: string;
    title: {
      en: string;
      ar: string;
      ur: string;
      fr: string;
      tr: string;
      id: string;
      bn: string;
      ms: string;
      ta: string;
      ml: string;
    };
    arabic: string;
    transliteration: string;
    translation: {
      en: string;
      ta: string;
      ml: string;
    };
    reference: string;
    context: string;
  }>;
}

export const prophetsWithDuas: ProphetDua[] = [
  {
    prophetNumber: 1,
    prophetName: {
      ar: "آدَمُ عَلَيْهِ السَّلَامُ",
      en: "Adam (AS) - The First Human",
      ta: "ஆதம் (அலை) - முதல் மனிதர்",
      ml: "ആദം (അ) - ആദ്യ മനുഷ്യൻ"
    },
    prophetMeaning: {
      en: "Adam means 'human' or 'created from earth' (from 'adim' meaning earth/soil)",
      ta: "ஆதம் என்றால் 'மனிதன்' அல்லது 'மண்ணிலிருந்து படைக்கப்பட்டவர்'",
      ml: "ആദം എന്നാൽ 'മനുഷ്യൻ' അല്ലെങ്കിൽ 'മണ്ണിൽ നിന്ന് സൃഷ്ടിക്കപ്പെട്ടവൻ'"
    },
    duas: [
      {
        id: 'adam-1',
        title: {
          en: "Dua of Repentance after eating from the tree",
          ar: "دعاء التوبة بعد الأكل من الشجرة",
          ur: "درخت سے کھانے کے بعد توبہ کی دعا",
          fr: "Doua de repentance après avoir mangé de l'arbre",
          tr: "Ağaçtan yedikten sonra tövbe duası",
          id: "Doa Taubat setelah makan dari pohon",
          bn: "গাছ থেকে খাওয়ার পরে তাওবার দোয়া",
          ms: "Doa Taubat selepas makan dari pokok",
          ta: "மரத்திலிருந்து உண்ட பின் பாவமன்னிப்பு துஆ",
          ml: "മരത്തിൽ നിന്ന് ഭക്ഷിച്ചതിന് ശേഷം പശ്ചാത്താപ ദുആ"
        },
        arabic: "رَبَّنَا ظَلَمْنَا أَنفُسَنَا وَإِن لَّمْ تَغْفِرْ لَنَا وَتَرْحَمْنَا لَنَكُونَنَّ مِنَ الْخَاسِرِينَ",
        transliteration: "Rabbana zalamna anfusana wa in lam taghfir lana wa tarhamna lanakoonanna minal-khasireen",
        translation: {
          en: "Our Lord, we have wronged ourselves, and if You do not forgive us and have mercy upon us, we will surely be among the losers.",
          ta: "எங்கள் இறைவா, நாங்கள் எங்கள் ஆத்மாக்களுக்கு அநியாயம் செய்தோம், நீர் எங்களை மன்னிக்காவிட்டால் மற்றும் எங்கள் மீது கருணை காட்டாவிட்டால், நிச்சயமாக நாங்கள் நஷ்டமடைபவர்களில் இருப்போம்.",
          ml: "ഞങ്ങളുടെ രക്ഷിതാവേ, ഞങ്ങൾ ഞങ്ങളോട് അനീതി ചെയ്തിരിക്കുന്നു, നീ ഞങ്ങളെ പൊറുക്കുകയും ഞങ്ങളോട് കരുണ കാണിക്കുകയും ചെയ്തില്ലെങ്കിൽ ഞങ്ങൾ നഷ്ടമനുഭവിക്കുന്നവരിൽ ഉണ്ടാകും."
        },
        reference: "Quran 7:23",
        context: "Recited by Prophet Adam (AS) and Hawwa (Eve) after eating from the forbidden tree"
      }
    ]
  },
  {
    prophetNumber: 2,
    prophetName: {
      ar: "إِدْرِيسُ عَلَيْهِ السَّلَامُ",
      en: "Idris (AS) - The Truthful Prophet",
      ta: "இத்ரீஸ் (அலை) - உண்மையுள்ள நபி",
      ml: "ഇദ്‌രീസ് (അ) - സത്യസന്ധനായ നബി"
    },
    prophetMeaning: {
      en: "Idris means 'studious' or 'one who studies much' (from 'darasa' meaning to study)",
      ta: "இத்ரீஸ் என்றால் 'கற்றறிந்தவர்' அல்லது 'அதிகம் படிப்பவர்'",
      ml: "ഇദ്‌രീസ് എന്നാൽ 'പഠനശീലൻ' അല്ലെങ്കിൽ 'വളരെയധികം പഠിക്കുന്നവൻ'"
    },
    duas: [
      {
        id: 'idris-1',
        title: {
          en: "Dua for Knowledge and Wisdom",
          ar: "دعاء للعلم والحكمة",
          ur: "علم اور حکمت کی دعا",
          fr: "Doua pour la connaissance et la sagesse",
          tr: "İlim ve hikmet duası",
          id: "Doa untuk ilmu dan hikmah",
          bn: "জ্ঞান ও প্রজ্ঞার দোয়া",
          ms: "Doa untuk ilmu dan hikmah",
          ta: "அறிவு மற்றும் ஞானத்திற்கான துஆ",
          ml: "അറിവിനും ജ്ഞാനത്തിനുമുള്ള ദുആ"
        },
        arabic: "رَبِّ زِدْنِي عِلْمًا",
        transliteration: "Rabbi zidni 'ilma",
        translation: {
          en: "My Lord, increase me in knowledge.",
          ta: "என் இறைவா, எனக்கு அறிவை அதிகரிப்பாயாக.",
          ml: "എന്റെ രക്ഷിതാവേ, എനിക്ക് അറിവ് വർദ്ധിപ്പിച്ചുതരണമേ."
        },
        reference: "Quran 20:114",
        context: "Prophet Idris (AS) was known for his great knowledge and wisdom"
      }
    ]
  },
  {
    prophetNumber: 3,
    prophetName: {
      ar: "نُوحٌ عَلَيْهِ السَّلَامُ",
      en: "Nuh (AS) - Noah",
      ta: "னூஹ் (அலை) - நோவா",
      ml: "നൂഹ് (അ) - നോഹ"
    },
    prophetMeaning: {
      en: "Nuh means 'rest' or 'comfort' (one who brings comfort to believers)",
      ta: "னூஹ் என்றால் 'ஓய்வு' அல்லது 'ஆறுதல்'",
      ml: "നൂഹ് എന്നാൽ 'വിശ്രമം' അല്ലെങ്കിൽ 'ആശ്വാസം'"
    },
    duas: [
      {
        id: 'nuh-1',
        title: {
          en: "Dua seeking refuge from asking what he has no knowledge of",
          ar: "دعاء الاستعاذة من سؤال ما ليس له به علم",
          ur: "جس کا مجھے علم نہیں اس سے پناہ مانگنے کی دعا",
          fr: "Doua cherchant refuge contre demander ce dont il n'a pas connaissance",
          tr: "Bilmediği şeyi sormaktan sığınma duası",
          id: "Doa berlindung dari meminta apa yang tidak diketahuinya",
          bn: "যা জানেন না তা চাওয়া থেকে আশ্রয় চাওয়ার দোয়া",
          ms: "Doa berlindung daripada meminta apa yang tidak diketahuinya",
          ta: "தனக்கு தெரியாததை கேட்பதிலிருந்து புகலடைதல் துஆ",
          ml: "അറിയാത്തത് ചോദിക്കുന്നതിൽ നിന്ന് അഭയം തേടുന്ന ദുആ"
        },
        arabic: "رَبِّ إِنِّي أَعُوذُ بِكَ أَنْ أَسْأَلَكَ مَا لَيْسَ لِي بِهِ عِلْمٌ ۖ وَإِلَّا تَغْفِرْ لِي وَتَرْحَمْنِي أَكُن مِّنَ الْخَاسِرِينَ",
        transliteration: "Rabbi inni a'udhu bika an as'alaka ma laysa li bihi 'ilm wa illa taghfir li wa tarhamni akun minal-khasireen",
        translation: {
          en: "My Lord, I seek refuge in You from asking that of which I have no knowledge. And unless You forgive me and have mercy upon me, I will be among the losers.",
          ta: "என் இறைவா, எனக்கு அறிவில்லாததை உம்மிடம் கேட்பதிலிருந்து உம்மிடம் புகலளிக்கிறேன். நீர் என்னை மன்னிக்காவிட்டாலும் என் மீது கருணை காட்டாவிட்டாலும், நான் நஷ்டமடைபவர்களில் இருப்பேன்.",
          ml: "എന്റെ രക്ഷിതാവേ, എനിക്ക് അറിയാത്തത് നിന്നോട് ചോദിക്കുന്നതിൽ നിന്ന് ഞാൻ നിന്നോട് അഭയം തേടുന്നു. നീ എന്നെ പൊറുക്കുകയും എന്നോട് കരുണ കാണിക്കുകയും ചെയ്തില്ലെങ്കിൽ ഞാൻ നഷ്ടമനുഭവിക്കുന്നവരിൽ ഉണ്ടാകും."
        },
        reference: "Quran 11:47",
        context: "Prophet Nuh (AS) seeking refuge after his son was drowned in the flood"
      },
      {
        id: 'nuh-2',
        title: {
          en: "Dua for forgiveness and mercy",
          ar: "دعاء المغفرة والرحمة",
          ur: "مغفرت اور رحمت کی دعا",
          fr: "Doua pour le pardon et la miséricorde",
          tr: "Bağışlanma ve merhamet duası",
          id: "Doa ampunan dan rahmat",
          bn: "ক্ষমা ও রহমতের দোয়া",
          ms: "Doa keampunan dan rahmat",
          ta: "மன்னிப்பு மற்றும் இரக்கத்திற்கான துஆ",
          ml: "പാപമോചനത്തിനും കാരുണ്യത്തിനുമുള്ള ദുആ"
        },
        arabic: "رَبِّ اغْفِرْ لِي وَلِوَالِدَيَّ وَلِمَن دَخَلَ بَيْتِيَ مُؤْمِنًا وَلِلْمُؤْمِنِينَ وَالْمُؤْمِنَاتِ",
        transliteration: "Rabbighfir li wa liwalidayya wa liman dakhala baytiya mu'minan wa lil-mu'minina wal-mu'minat",
        translation: {
          en: "My Lord, forgive me and my parents and whoever enters my house a believer and the believing men and believing women.",
          ta: "என் இறைவா, என்னையும் என் பெற்றோரையும் என் வீட்டில் விசுவாசியாக நுழைபவரையும் விசுவாசிக்கும் ஆண்கள் மற்றும் பெண்களையும் மன்னிப்பாயாக.",
          ml: "എന്റെ രക്ഷിതാവേ, എന്നെയും എന്റെ മാതാപിതാക്കളെയും എന്റെ വീട്ടിൽ വിശ്വാസിയായി പ്രവേശിക്കുന്നവരെയും വിശ്വാസികളായ പുരുഷന്മാരെയും സ്ത്രീകളെയും പൊറുക്കണമേ."
        },
        reference: "Quran 71:28",
        context: "Prophet Nuh (AS) praying for forgiveness for himself, his parents, and all believers"
      }
    ]
  },
  {
    prophetNumber: 4,
    prophetName: {
      ar: "هُودٌ عَلَيْهِ السَّلَامُ",
      en: "Hud (AS)",
      ta: "ஹூத் (அலை)",
      ml: "ഹൂദ് (അ)"
    },
    prophetMeaning: {
      en: "Hud means 'to call upon' or 'one who calls' (to call people to Allah)",
      ta: "ஹூத் என்றால் 'அழைப்பவர்' (மக்களை அல்லாஹ்விடம் அழைப்பவர்)",
      ml: "ഹൂദ് എന്നാൽ 'വിളിക്കുന്നവൻ' (ആളുകളെ അല്ലാഹുവിന്റെ അടുക്കലേക്ക് വിളിക്കുന്നവൻ)"
    },
    duas: [
      {
        id: 'hud-1',
        title: {
          en: "Dua of Tawakkul (Trust in Allah)",
          ar: "دعاء التوكل",
          ur: "توکل کی دعا",
          fr: "Doua de Tawakkul (Confiance en Allah)",
          tr: "Tevekkül duası",
          id: "Doa Tawakkal (Berserah diri)",
          bn: "তাওয়াক্কুলের দোয়া",
          ms: "Doa Tawakkal (Berserah diri)",
          ta: "தவக்க்குல் (அல்லாஹ்வின் மீது நம்பிக்கை) துஆ",
          ml: "തവക്കുൽ ദുആ (അല്ലാഹുവിൽ ഭരമേൽപ്പിക്കൽ)"
        },
        arabic: "إِن تَوَكَّلْتُ إِلَّا عَلَى اللَّهِ",
        transliteration: "In tawakkaltu illa 'alallah",
        translation: {
          en: "I have relied upon none but Allah.",
          ta: "அல்லாஹ்வைத் தவிர வேறு யாரையும் நான் நம்பவில்லை.",
          ml: "അല്ലാഹുവല്ലാതെ ആരെയും ഞാൻ ആശ്രയിച്ചിട്ടില്ല."
        },
        reference: "Quran 11:56",
        context: "Prophet Hud (AS) declaring his complete trust in Allah"
      }
    ]
  },
  {
    prophetNumber: 5,
    prophetName: {
      ar: "صَالِحٌ عَلَيْهِ السَّلَامُ",
      en: "Salih (AS) - The Righteous",
      ta: "ஸாலிஹ் (அலை) - நேர்மையானவர்",
      ml: "സ്വാലിഹ് (അ) - നീതിമാൻ"
    },
    prophetMeaning: {
      en: "Salih means 'righteous' or 'virtuous' (one who is righteous and upright)",
      ta: "ஸாலிஹ் என்றால் 'நேர்மையானவர்' அல்லது 'ஒழுக்கமுள்ளவர்'",
      ml: "സ്വാലിഹ് എന്നാൽ 'നീതിമാൻ' അല്ലെങ്കിൽ 'സദ്ഗുണവാനും'"
    },
    duas: [
      {
        id: 'salih-1',
        title: {
          en: "Dua for guidance and righteousness",
          ar: "دعاء للهداية والصلاح",
          ur: "ہدایت اور صلاح کی دعا",
          fr: "Doua pour la guidance et la droiture",
          tr: "Hidayet ve salihlik duası",
          id: "Doa untuk petunjuk dan kesalehan",
          bn: "হেদায়াত ও সৎকাজের দোয়া",
          ms: "Doa untuk petunjuk dan kesalehan",
          ta: "நெறி மற்றும் நேர்மைக்கான துஆ",
          ml: "നേർവഴിക്കും നന്മയ്ക്കുമുള്ള ദുആ"
        },
        arabic: "رَبِّ إِنِّي ظَلَمْتُ نَفْسِي فَاغْفِرْ لِي",
        transliteration: "Rabbi inni zalamtu nafsi faghfir li",
        translation: {
          en: "My Lord, indeed I have wronged myself, so forgive me.",
          ta: "என் இறைவா, நிச்சயமாக நான் என்னிடம் அநியாயம் செய்தேன், எனவே என்னை மன்னிப்பாயாக.",
          ml: "എന്റെ രക്ഷിതാവേ, തീർച്ചയായും ഞാൻ എന്നോട് അനീതി ചെയ്തിരിക്കുന്നു, അതിനാൽ എന്നെ പൊറുക്കണമേ."
        },
        reference: "Quran 28:16 (similar to Musa's dua)",
        context: "Prophet Salih (AS) seeking forgiveness and guidance"
      }
    ]
  },
  {
    prophetNumber: 6,
    prophetName: {
      ar: "إِبْرَاهِيمُ عَلَيْهِ السَّلَامُ",
      en: "Ibrahim (AS) - Abraham, Friend of Allah",
      ta: "இப்ராஹீம் (அலை) - அபிரகாம், அல்லாஹ்வின் நண்பர்",
      ml: "ഇബ്രാഹീം (അ) - അബ്രഹാം, അല്ലാഹുവിന്റെ സുഹൃത്ത്"
    },
    prophetMeaning: {
      en: "Ibrahim means 'father of many' or 'father of mercy' (exalted father)",
      ta: "இப்ராஹீம் என்றால் 'பலரின் தந்தை' அல்லது 'கருணையின் தந்தை'",
      ml: "ഇബ്രാഹീം എന്നാൽ 'പലരുടെ പിതാവ്' അല്ലെങ്കിൽ 'കാരുണ്യത്തിന്റെ പിതാവ്'"
    },
    duas: [
      {
        id: 'ibrahim-1',
        title: {
          en: "Dua after building the Kaaba",
          ar: "دعاء بعد بناء الكعبة",
          ur: "کعبہ بنانے کے بعد دعا",
          fr: "Doua après avoir construit la Ka'bah",
          tr: "Kabe'yi inşa ettikten sonra dua",
          id: "Doa setelah membangun Ka'bah",
          bn: "কাবা নির্মাণের পরে দোয়া",
          ms: "Doa selepas membina Ka'bah",
          ta: "கஃபாவை கட்டிய பின் துஆ",
          ml: "കഅ്ബ നിർമ്മിച്ചതിന് ശേഷം ദുആ"
        },
        arabic: "رَبَّنَا تَقَبَّلْ مِنَّا ۖ إِنَّكَ أَنتَ السَّمِيعُ الْعَلِيمُ",
        transliteration: "Rabbana taqabbal minna innaka antas-samee'ul-'aleem",
        translation: {
          en: "Our Lord, accept [this] from us. Indeed You are the Hearing, the Knowing.",
          ta: "எங்கள் இறைவா, எங்களிடமிருந்து [இதை] ஏற்றுக்கொள்வாயாக. நிச்சயமாக நீ கேட்பவன், அறிபவன்.",
          ml: "ഞങ്ങളുടെ രക്ഷിതാവേ, ഞങ്ങളിൽ നിന്ന് [ഇത്] സ്വീകരിക്കണമേ. തീർച്ചയായും നീ കേൾക്കുന്നവനും അറിയുന്നവനുമാണ്."
        },
        reference: "Quran 2:127",
        context: "Prophet Ibrahim (AS) and Ismail (AS) after completing the construction of Kaaba"
      },
      {
        id: 'ibrahim-2',
        title: {
          en: "Dua for making Makkah secure",
          ar: "دعاء لجعل مكة آمنة",
          ur: "مکہ کو محفوظ بنانے کی دعا",
          fr: "Doua pour rendre La Mecque sûre",
          tr: "Mekke'yi güvenli kılmak için dua",
          id: "Doa untuk menjadikan Makkah aman",
          bn: "মক্কাকে নিরাপদ করার দোয়া",
          ms: "Doa untuk menjadikan Makkah aman",
          ta: "மக்காவை பாதுகாப்பாக ஆக்குவதற்கான துஆ",
          ml: "മക്കയെ സുരക്ഷിതമാക്കാൻ ദുആ"
        },
        arabic: "رَبِّ اجْعَلْ هَٰذَا الْبَلَدَ آمِنًا وَاجْنُبْنِي وَبَنِيَّ أَن نَّعْبُدَ الْأَصْنَامَ",
        transliteration: "Rabbij'al hatha al-balada amanan wajnubni wa baniyya an na'budal-asnam",
        translation: {
          en: "My Lord, make this city secure and keep me and my sons from worshipping idols.",
          ta: "என் இறைவா, இந்த நகரத்தை பாதுகாப்பாக ஆக்குவாயாக, என்னையும் என் மக்களையும் சிலைகளை வணங்குவதிலிருந்து தவிர்க்கச் செய்வாயாக.",
          ml: "എന്റെ രക്ഷിതാവേ, ഈ നഗരം സുരക്ഷിതമാക്കണമേ, എന്നെയും എന്റെ മക്കളെയും വിഗ്രഹാരാധനയിൽ നിന്ന് അകറ്റണമേ."
        },
        reference: "Quran 14:35",
        context: "Prophet Ibrahim (AS) praying for the safety of Makkah"
      },
      {
        id: 'ibrahim-3',
        title: {
          en: "Dua for establishing prayer",
          ar: "دعاء لإقامة الصلاة",
          ur: "نماز قائم کرنے کی دعا",
          fr: "Doua pour établir la prière",
          tr: "Namazı kılmak için dua",
          id: "Doa untuk mendirikan shalat",
          bn: "নামায় কায়েম করার দোয়া",
          ms: "Doa untuk mendirikan solat",
          ta: "தொழுகையை நிலைநாட்டுவதற்கான துஆ",
          ml: "നമസ്കാരം സ്ഥാപിക്കാൻ ദുആ"
        },
        arabic: "رَبِّ اجْعَلْنِي مُقِيمَ الصَّلَاةِ وَمِن ذُرِّيَّتِي ۚ رَبَّنَا وَتَقَبَّلْ دُعَاءِ",
        transliteration: "Rabbij'alni muqimas-salati wa min dhurriyyati rabbana wa taqabbal du'a'",
        translation: {
          en: "My Lord, make me an establisher of prayer, and [many] from my descendants. Our Lord, and accept my supplication.",
          ta: "என் இறைவா, என்னை தொழுகையை நிலைநாட்டுபவனாக ஆக்குவாயாக, என் சந்ததியிலிருந்தும் [பலரை]. எங்கள் இறைவா, என் பிரார்த்தனையை ஏற்றுக்கொள்வாயாக.",
          ml: "എന്റെ രക്ഷിതാവേ, എന്നെ നമസ്കാരം സ്ഥാപിക്കുന്നവനാക്കണമേ, എന്റെ സന്തതിയിൽ നിന്നും [പലരെ]. ഞങ്ങളുടെ രക്ഷിതാവേ, എന്റെ പ്രാർത്ഥന സ്വീകരിക്കണമേ."
        },
        reference: "Quran 14:40",
        context: "Prophet Ibrahim (AS) praying for himself and his descendants to establish prayer"
      },
      {
        id: 'ibrahim-4',
        title: {
          en: "Dua when thrown into fire",
          ar: "دعاء عند إلقاءه في النار",
          ur: "آگ میں ڈالے جانے پر دعا",
          fr: "Doua lorsqu'il a été jeté dans le feu",
          tr: "Ateşe atıldığında dua",
          id: "Doa ketika dilemparkan ke dalam api",
          bn: "আগুনে নিক্ষেপ করার সময় দোয়া",
          ms: "Doa apabila dilemparkan ke dalam api",
          ta: "நெருப்பில் வீசப்படும்போது துஆ",
          ml: "തീയിലേക്ക് എറിയപ്പെടുമ്പോൾ ദുആ"
        },
        arabic: "حَسْبُنَا اللَّهُ وَنِعْمَ الْوَكِيلُ",
        transliteration: "Hasbunallahu wa ni'mal-wakeel",
        translation: {
          en: "Sufficient for us is Allah, and [He is] the best Disposer of affairs.",
          ta: "அல்லாஹ்வே எங்களுக்கு போதுமானவர், மேலும் அவனே சிறந்த பராமரிப்பாளர்.",
          ml: "അല്ലാഹു ഞങ്ങൾക്ക് മതി, അവൻ ഏറ്റവും നല്ല കാര്യനിർവ്വാഹകൻ."
        },
        reference: "Quran 3:173",
        context: "Prophet Ibrahim (AS) when he was thrown into the fire by Nimrod"
      }
    ]
  },
  {
    prophetNumber: 7,
    prophetName: {
      ar: "لُوطٌ عَلَيْهِ السَّلَامُ",
      en: "Lut (AS) - Lot",
      ta: "லூத் (அலை) - லோத்",
      ml: "ലൂത്വ് (അ)"
    },
    prophetMeaning: {
      en: "Lut means 'covering' or 'hiding' (one who covers sins or hides from evil)",
      ta: "லூத் என்றால் 'மறைத்தல்' அல்லது 'மறைவு'",
      ml: "ലൂത്വ് എന്നാൽ 'മറയ്ക്കൽ' അല്ലെങ്കിൽ 'രഹസ്യമാക്കൽ'"
    },
    duas: [
      {
        id: 'lut-1',
        title: {
          en: "Dua for help against his people",
          ar: "دعاء للنصرة على قومه",
          ur: "اپنی قوم پر مدد کی دعا",
          fr: "Doua pour l'aide contre son peuple",
          tr: "Kavmine karşı yardım duası",
          id: "Doa pertolongan terhadap kaumnya",
          bn: "তার সম্প্রদায়ের বিরুদ্ধে সাহায্যের দোয়া",
          ms: "Doa pertolongan terhadap kaumnya",
          ta: "தனது மக்களுக்கு எதிராக உதவிக்கான துஆ",
          ml: "അവന്റെ ജനതയ്‌ക്കെതിരെ സഹായത്തിനുള്ള ദുആ"
        },
        arabic: "رَبِّ انصُرْنِي عَلَى الْقَوْمِ الْمُفْسِدِينَ",
        transliteration: "Rabbinsurni 'alal-qawmil-mufsideen",
        translation: {
          en: "My Lord, help me against the corrupting people.",
          ta: "என் இறைவா, ஊழல் செய்யும் மக்களுக்கு எதிராக எனக்கு உதவுவாயாக.",
          ml: "എന്റെ രക്ഷിതാവേ, അഴിമതിക്കാരായ ജനങ്ങൾക്കെതിരെ എന്നെ സഹായിക്കണമേ."
        },
        reference: "Quran 29:30",
        context: "Prophet Lut (AS) seeking help against his corrupt people"
      }
    ]
  },
  {
    prophetNumber: 8,
    prophetName: {
      ar: "إِسْمَاعِيلُ عَلَيْهِ السَّلَامُ",
      en: "Ismail (AS) - Ishmael",
      ta: "இஸ்மாயீல் (அலை) - இஷ்மவேல்",
      ml: "ഇസ്മാഈൽ (അ)"
    },
    prophetMeaning: {
      en: "Ismail means 'God hears' or 'Allah listens' (from 'sami'a' meaning to hear)",
      ta: "இஸ்மாயீல் என்றால் 'அல்லாஹ் கேட்கிறான்' அல்லது 'அல்லாஹ் செவிமடுக்கிறான்'",
      ml: "ഇസ്മാഈൽ എന്നാൽ 'അല്ലാഹു കേൾക്കുന്നു' അല്ലെങ്കിൽ 'അല്ലാഹു ശ്രവിക്കുന്നു'"
    },
    duas: [
      {
        id: 'ismail-1',
        title: {
          en: "Dua when willing to be sacrificed",
          ar: "دعاء عند الاستعداد للتضحية",
          ur: "قربانی کے لیے تیار ہونے پر دعا",
          fr: "Doua lorsqu'il était prêt à être sacrifié",
          tr: "Kurban edilmeye hazır olduğunda dua",
          id: "Doa ketika bersedia dikurbankan",
          bn: "কুরবানি হতে প্রস্তুত থাকার সময় দোয়া",
          ms: "Doa apabila bersedia dikorbankan",
          ta: "பலியிட தயாராக இருக்கும்போது துஆ",
          ml: "ബലി നൽകാൻ തയ്യാറാകുമ്പോൾ ദുആ"
        },
        arabic: "رَبِّ اجْعَلْنِي مِنَ الصَّالِحِينَ",
        transliteration: "Rabbij'alni minas-saliheen",
        translation: {
          en: "My Lord, make me among the righteous.",
          ta: "என் இறைவா, என்னை நேர்மையானவர்களில் சேர்ப்பாயாக.",
          ml: "എന്റെ രക്ഷിതാവേ, എന്നെ നീതിമാന്മാരുടെ കൂട്ടത്തിൽ ഉൾപ്പെടുത്തണമേ."
        },
        reference: "Quran 37:100",
        context: "Prophet Ismail (AS) showing his willingness to be sacrificed by his father Ibrahim (AS)"
      }
    ]
  },
  {
    prophetNumber: 9,
    prophetName: {
      ar: "إِسْحَاقُ عَلَيْهِ السَّلَامُ",
      en: "Ishaq (AS) - Isaac",
      ta: "இஸ்ஹாக் (அலை) - ஈஸாக்",
      ml: "ഇസ്ഹാഖ് (അ)"
    },
    prophetMeaning: {
      en: "Ishaq means 'he laughs' or 'one who laughs' (from 'dahika' meaning to laugh)",
      ta: "இஸ்ஹாக் என்றால் 'அவர் சிரிக்கிறார்' அல்லது 'சிரிப்பவர்'",
      ml: "ഇസ്ഹാഖ് എന്നാൽ 'അവൻ ചിരിക്കുന്നു' അല്ലെങ്കിൽ 'ചിരിക്കുന്നവൻ'"
    },
    duas: [
      {
        id: 'ishaq-1',
        title: {
          en: "Dua for righteous offspring",
          ar: "دعاء للذرية الصالحة",
          ur: "نیک اولاد کی دعا",
          fr: "Doua pour une descendance pieuse",
          tr: "Salih evlat duası",
          id: "Doa untuk keturunan yang saleh",
          bn: "সৎ সন্তানের দোয়া",
          ms: "Doa untuk keturunan yang soleh",
          ta: "நேர்மையான சந்ததிக்கான துஆ",
          ml: "നല്ല സന്തതിക്കുള്ള ദുആ"
        },
        arabic: "رَبِّ هَبْ لِي مِنَ الصَّالِحِينَ",
        transliteration: "Rabbi hab li minas-saliheen",
        translation: {
          en: "My Lord, grant me [a child] from among the righteous.",
          ta: "என் இறைவா, நேர்மையானவர்களில் [ஒரு குழந்தையை] எனக்கு அளிப்பாயாக.",
          ml: "എന്റെ രക്ഷിതാവേ, നീതിമാന്മാരിൽ [ഒരു കുഞ്ഞ്] ഞങ്ങൾക്ക് നൽകണമേ."
        },
        reference: "Quran 37:100 (context)",
        context: "Prayer for righteous children"
      }
    ]
  },
  {
    prophetNumber: 10,
    prophetName: {
      ar: "يَعْقُوبُ عَلَيْهِ السَّلَامُ",
      en: "Yaqub (AS) - Jacob",
      ta: "யஃகூப் (அலை) - யாக்கோபு",
      ml: "യാഖൂബ് (അ)"
    },
    prophetMeaning: {
      en: "Yaqub means 'he follows' or 'supplanter' (one who follows in the footsteps)",
      ta: "யஃகூப் என்றால் 'அவர் பின்தொடர்கிறார்' அல்லது 'பதிலீடு செய்பவர்'",
      ml: "യാഖൂബ് എന്നാൽ 'അവൻ പിന്തുടരുന്നു' അല്ലെങ്കിൽ 'പകരക്കാരൻ'"
    },
    duas: [
      {
        id: 'yaqub-1',
        title: {
          en: "Dua of patience and complaint to Allah only",
          ar: "دعاء الصبر والشكوى إلى الله فقط",
          ur: "صبر اور صرف اللہ کے سامنے شکایت کی دعا",
          fr: "Doua de patience et de plainte uniquement à Allah",
          tr: "Sabır ve sadece Allah'a şikayet duası",
          id: "Doa kesabaran dan pengaduan hanya kepada Allah",
          bn: "ধৈর্য এবং শুধুমাত্র আল্লাহর কাছে অভিযোগের দোয়া",
          ms: "Doa kesabaran dan aduan hanya kepada Allah",
          ta: "பொறுமை மற்றும் அல்லாஹ்விடம் மட்டுமே முறையிடுதல் துஆ",
          ml: "ക്ഷമയുടെയും അല്ലാഹുവിനോട് മാത്രം പരാതിപ്പെടുന്നതിന്റെയും ദുആ"
        },
        arabic: "إِنَّمَا أَشْكُو بَثِّي وَحُزْنِي إِلَى اللَّهِ",
        transliteration: "Innama ashku baththi wa huzni ilallah",
        translation: {
          en: "I only complain of my suffering and my grief to Allah.",
          ta: "என் துன்பத்தையும் என் துயரத்தையும் அல்லாஹ்விடமே முறையிடுகிறேன்.",
          ml: "എന്റെ ദുഃഖവും സങ്കടവും ഞാൻ അല്ലാഹുവിനോട് മാത്രം പരാതിപ്പെടുന്നു."
        },
        reference: "Quran 12:86",
        context: "Prophet Yaqub (AS) expressing his grief over the loss of Yusuf (AS) but complaining only to Allah"
      }
    ]
  },
  {
    prophetNumber: 11,
    prophetName: {
      ar: "يُوسُفُ عَلَيْهِ السَّلَامُ",
      en: "Yusuf (AS) - Joseph",
      ta: "யூஸுஃப் (அலை) - யோசேப்பு",
      ml: "യൂസുഫ് (അ)"
    },
    prophetMeaning: {
      en: "Yusuf means 'God increases' or 'Allah adds' (from 'yasaf' meaning to add/increase)",
      ta: "யூஸுஃப் என்றால் 'அல்லாஹ் அதிகரிக்கிறான்' அல்லது 'அல்லாஹ் சேர்க்கிறான்'",
      ml: "യൂസുഫ് എന്നാൽ 'അല്ലാഹു വർദ്ധിപ്പിക്കുന്നു' അല്ലെങ്കിൽ 'അല്ലാഹു ചേർക്കുന്നു'"
    },
    duas: [
      {
        id: 'yusuf-1',
        title: {
          en: "Dua upon reuniting with his family",
          ar: "دعاء عند لم شمله مع عائلته",
          ur: "اپنے خاندان سے دوبارہ ملنے پر دعا",
          fr: "Doua lors de la réunion avec sa famille",
          tr: "Ailesiyle yeniden bir araya geldiğinde dua",
          id: "Doa saat berkumpul kembali dengan keluarganya",
          bn: "তার পরিবারের সাথে পুনরায় মিলিত হওয়ার সময় দোয়া",
          ms: "Doa apabila bersatu semula dengan keluarganya",
          ta: "தனது குடும்பத்துடன் மீண்டும் சேரும்போது துஆ",
          ml: "അവന്റെ കുടുംബവുമായി വീണ്ടും ഒന്നിച്ചുകൂടുമ്പോൾ ദുആ"
        },
        arabic: "رَبِّ قَدْ آتَيْتَنِي مِنَ الْمُلْكِ وَعَلَّمْتَنِي مِن تَأْوِيلِ الْأَحَادِيثِ ۚ فَاطِرَ السَّمَاوَاتِ وَالْأَرْضِ أَنتَ وَلِيِّي فِي الدُّنْيَا وَالْآخِرَةِ ۖ تَوَفَّنِي مُسْلِمًا وَأَلْحِقْنِي بِالصَّالِحِينَ",
        transliteration: "Rabbi qad ataytani minal-mulki wa 'allamtani min ta'wilil-ahadith. Fatiras-samawati wal-ardi anta waliyyi fid-dunya wal-akhirah. Tawaffani musliman wa alhiqni bis-saliheen",
        translation: {
          en: "My Lord, You have given me [something] of sovereignty and taught me of the interpretation of dreams. Creator of the heavens and earth, You are my protector in this world and the Hereafter. Cause me to die a Muslim and join me with the righteous.",
          ta: "என் இறைவா, நீர் எனக்கு ஆட்சியில் [ஏதோ] அளித்துள்ளீர், கனவுகளின் விளக்கத்தை எனக்கு கற்றுக்கொடுத்துள்ளீர். வானங்கள் மற்றும் பூமியை படைத்தவரே, இவ்வுலகிலும் மறுமையிலும் நீரே என் பாதுகாவலர். என்னை முஸ்லிமாக மரணமடையச் செய்து, நேர்மையானவர்களுடன் என்னை சேர்ப்பாயாக.",
          ml: "എന്റെ രക്ഷിതാവേ, നീ എനിക്ക് അധികാരത്തിൽ [എന്തോ] നൽകിയിരിക്കുന്നു, സ്വപ്നങ്ങളുടെ വ്യാഖ്യാനം എന്നെ പഠിപ്പിച്ചിരിക്കുന്നു. ആകാശങ്ങളും ഭൂമിയും സൃഷ്ടിച്ചവനേ, ഈ ലോകത്തും പരലോകത്തും നീയാണ് എന്റെ സംരക്ഷകൻ. എന്നെ ഒരു മുസ്ലിമായി മരിപ്പിക്കണമേ, നീതിമാന്മാരുടെ കൂട്ടത്തിൽ എന്നെ ചേർക്കണമേ."
        },
        reference: "Quran 12:101",
        context: "Prophet Yusuf (AS) after being reunited with his father Yaqub (AS) and family in Egypt"
      }
    ]
  },
  {
    prophetNumber: 12,
    prophetName: {
      ar: "أَيُّوبُ عَلَيْهِ السَّلَامُ",
      en: "Ayyub (AS) - Job",
      ta: "அய்யூப் (அலை) - யோபு",
      ml: "അയ്യൂബ് (അ)"
    },
    prophetMeaning: {
      en: "Ayyub means 'persecuted' or 'returning' (one who returns to Allah in patience)",
      ta: "அய்யூப் என்றால் 'துன்புறுத்தப்பட்டவர்' அல்லது 'திரும்புபவர்'",
      ml: "അയ്യൂബ് എന്നാൽ 'പീഡിപ്പിക്കപ്പെട്ടവൻ' അല്ലെങ്കിൽ 'മടങ്ങുന്നവൻ'"
    },
    duas: [
      {
        id: 'ayyub-1',
        title: {
          en: "Dua during illness and hardship",
          ar: "دعاء أثناء المرض والمحنة",
          ur: "بیماری اور مصیبت کے دوران دعا",
          fr: "Doua pendant la maladie et l'épreuve",
          tr: "Hastalık ve zorluk sırasında dua",
          id: "Doa saat sakit dan kesulitan",
          bn: "অসুস্থতা ও কষ্টের সময় দোয়া",
          ms: "Doa semasa sakit dan kesukaran",
          ta: "நோய் மற்றும் கஷ்டகாலத்தில் துஆ",
          ml: "രോഗത്തിലും ബുദ്ധിമുട്ടിലും ദുആ"
        },
        arabic: "أَنِّي مَسَّنِيَ الضُّرُّ وَأَنتَ أَرْحَمُ الرَّاحِمِينَ",
        transliteration: "Annee massaniyad-durru wa anta arhamur-rahimeen",
        translation: {
          en: "Indeed, adversity has touched me, and You are the Most Merciful of the merciful.",
          ta: "நிச்சயமாக, துன்பம் என்னை தொட்டது, மேலும் நீர் கருணையுள்ளவர்களில் மிகவும் கருணையுள்ளவன்.",
          ml: "തീർച്ചയായും, ദുരിതം എന്നെ സ്പർശിച്ചിരിക്കുന്നു, നീയാണ് കാരുണ്യവാന്മാരിൽ ഏറ്റവും കാരുണ്യവാനും."
        },
        reference: "Quran 21:83",
        context: "Prophet Ayyub (AS) during his long illness, calling upon Allah for relief"
      }
    ]
  },
  {
    prophetNumber: 13,
    prophetName: {
      ar: "شُعَيْبٌ عَلَيْهِ السَّلَامُ",
      en: "Shu'ayb (AS)",
      ta: "ஷுஐப் (அலை)",
      ml: "ശുഐബ് (അ)"
    },
    prophetMeaning: {
      en: "Shu'ayb means 'who shows the right path' (one who guides to the correct way)",
      ta: "ஷுஐப் என்றால் 'சரியான பாதையை காட்டுபவர்'",
      ml: "ശുഐബ് എന്നാൽ 'ശരിയായ പാത കാണിക്കുന്നവൻ'"
    },
    duas: [
      {
        id: 'shuayb-1',
        title: {
          en: "Dua for judgment between him and his people",
          ar: "دعاء للحكم بينه وبين قومه",
          ur: "اپنی قوم کے درمیان فیصلے کی دعا",
          fr: "Doua pour le jugement entre lui et son peuple",
          tr: "Kavmi ile arasındaki hüküm duası",
          id: "Doa untuk keputusan antara dia dan kaumnya",
          bn: "তার এবং তার সম্প্রদায়ের মধ্যে বিচারের দোয়া",
          ms: "Doa untuk keputusan antara dia dan kaumnya",
          ta: "தனக்கும் தனது மக்களுக்கும் இடையிலான தீர்ப்பிற்கான துஆ",
          ml: "അവനും അവന്റെ ജനതയും തമ്മിലുള്ള വിധിക്കുള്ള ദുആ"
        },
        arabic: "رَبَّنَا افْتَحْ بَيْنَنَا وَبَيْنَ قَوْمِنَا بِالْحَقِّ وَأَنتَ خَيْرُ الْفَاتِحِينَ",
        transliteration: "Rabbanaftah baynana wa bayna qawmina bil-haqqi wa anta khayrul-fatihheen",
        translation: {
          en: "Our Lord, decide between us and our people in truth, and You are the best of those who give decision.",
          ta: "எங்கள் இறைவா, எங்களுக்கும் எங்கள் மக்களுக்கும் உண்மையுடன் தீர்ப்பளிப்பாயாக, நீ தீர்ப்பளிப்பவர்களில் மிகச் சிறந்தவன்.",
          ml: "ഞങ്ങളുടെ രക്ഷിതാവേ, ഞങ്ങൾക്കും ഞങ്ങളുടെ ജനതയ്ക്കും ഇടയിൽ സത്യത്തോടെ വിധിക്കണമേ, നീയാണ് ഏറ്റവും നല്ല വിധികർത്താവ്."
        },
        reference: "Quran 7:89",
        context: "Prophet Shu'ayb (AS) seeking judgment between himself and his disbelieving people"
      }
    ]
  },
  {
    prophetNumber: 14,
    prophetName: {
      ar: "مُوسَى عَلَيْهِ السَّلَامُ",
      en: "Musa (AS) - Moses",
      ta: "மூஸா (அலை) - மோசே",
      ml: "മൂസാ (അ)"
    },
    prophetMeaning: {
      en: "Musa means 'drawn out' or 'saved from water' (from 'masa' meaning to draw out)",
      ta: "மூஸா என்றால் 'வெளியே இழுக்கப்பட்டவர்' அல்லது 'நீரிலிருந்து காப்பாற்றப்பட்டவர்'",
      ml: "മൂസാ എന്നാൽ 'വലിച്ചെടുക്കപ്പെട്ടവൻ' അല്ലെങ്കിൽ 'വെള്ളത്തിൽ നിന്ന് രക്ഷിക്കപ്പെട്ടവൻ'"
    },
    duas: [
      {
        id: 'musa-1',
        title: {
          en: "Dua for ease of speech and task",
          ar: "دعاء لتسهيل الكلام والمهمة",
          ur: "زبان اور کام آسان کرنے کی دعا",
          fr: "Doua pour faciliter la parole et la tâche",
          tr: "Konuşmayı ve görevi kolaylaştırmak için dua",
          id: "Doa untuk kemudahan bicara dan tugas",
          bn: "কথা এবং কাজ সহজ করার দোয়া",
          ms: "Doa untuk kemudahan bercakap dan tugas",
          ta: "பேச்சு மற்றும் பணியை எளிதாக்குவதற்கான துஆ",
          ml: "സംസാരവും ജോലിയും എളുപ്പമാക്കാൻ ദുആ"
        },
        arabic: "رَبِّ اشْرَحْ لِي صَدْرِي ﴿٢٥﴾ وَيَسِّرْ لِي أَمْرِي ﴿٢٦﴾ وَاحْلُلْ عُقْدَةً مِّن لِّسَانِي ﴿٢٧﴾ يَفْقَهُوا قَوْلِي",
        transliteration: "Rabbishrah li sadri (25) wa yassir li amri (26) wahlul 'uqdatan min lisani (27) yafqahu qawli",
        translation: {
          en: "My Lord, expand for me my chest (25) And ease for me my task (26) And untie the knot from my tongue (27) That they may understand my speech.",
          ta: "என் இறைவா, என் மார்பை விரிவுபடுத்துவாயாக (25) என் காரியத்தை எனக்கு எளிதாக்குவாயாக (26) என் நாவின் முடிச்சை அவிழ்ப்பாயாக (27) அவர்கள் என் பேச்சை புரிந்துகொள்ள (28).",
          ml: "എന്റെ രക്ഷിതാവേ, എന്റെ നെഞ്ച് വികസിപ്പിക്കണമേ (25) എന്റെ കാര്യം എളുപ്പമാക്കണമേ (26) എന്റെ നാക്കിലെ മുണ്ട് അഴിക്കണമേ (27) അവർ എന്റെ വാക്ക് മനസ്സിലാക്കാൻ (28)."
        },
        reference: "Quran 20:25-28",
        context: "Prophet Musa (AS) before going to confront Pharaoh, asking Allah for ease in speech and mission"
      },
      {
        id: 'musa-2',
        title: {
          en: "Dua after accidentally killing a man",
          ar: "دعاء بعد القتل الخطأ",
          ur: "غلطی سے قتل کرنے کے بعد دعا",
          fr: "Doua après avoir tué accidentellement un homme",
          tr: "Yanlışlıkla bir adam öldürdükten sonra dua",
          id: "Doa setelah tidak sengaja membunuh seseorang",
          bn: "ভুলবশত একজন মানুষকে হত্যা করার পরে দোয়া",
          ms: "Doa selepas tidak sengaja membunuh seseorang",
          ta: "தவறுதலாக ஒருவரை கொன்ற பின் துஆ",
          ml: "അബദ്ധവശാൽ ഒരു മനുഷ്യനെ കൊന്നതിന് ശേഷം ദുആ"
        },
        arabic: "رَبِّ إِنِّي ظَلَمْتُ نَفْسِي فَاغْفِرْ لِي",
        transliteration: "Rabbi inni zalamtu nafsi faghfir li",
        translation: {
          en: "My Lord, indeed I have wronged myself, so forgive me.",
          ta: "என் இறைவா, நிச்சயமாக நான் என்னிடம் அநியாயம் செய்தேன், எனவே என்னை மன்னிப்பாயாக.",
          ml: "എന്റെ രക്ഷിതാവേ, തീർച്ചയായും ഞാൻ എന്നോട് അനീതി ചെയ്തിരിക്കുന്നു, അതിനാൽ എന്നെ പൊറുക്കണമേ."
        },
        reference: "Quran 28:16",
        context: "Prophet Musa (AS) after accidentally killing an Egyptian man, seeking forgiveness"
      },
      {
        id: 'musa-3',
        title: {
          en: "Dua for good",
          ar: "دعاء للخير",
          ur: "بھلائی کی دعا",
          fr: "Doua pour le bien",
          tr: "İyilik için dua",
          id: "Doa untuk kebaikan",
          bn: "কল্যাণের দোয়া",
          ms: "Doa untuk kebaikan",
          ta: "நன்மைக்கான துஆ",
          ml: "നന്മയ്ക്കുള്ള ദുആ"
        },
        arabic: "رَبِّ إِنِّي لِمَا أَنزَلْتَ إِلَيَّ مِنْ خَيْرٍ فَقِيرٌ",
        transliteration: "Rabbi inni lima anzalta ilayya min khayrin faqeer",
        translation: {
          en: "My Lord, indeed I am, for whatever good You would send down to me, in need.",
          ta: "என் இறைவா, நிச்சயமாக நீர் எனக்கு அனுப்பும் எந்த நன்மைக்கும் நான் தேவைப்படுகிறேன்.",
          ml: "എന്റെ രക്ഷിതാവേ, നീ എനിക്ക് ഇറക്കിത്തരുന്ന എന്ത് നന്മയ്‌ക്കും ഞാൻ ആവശ്യമുള്ളവനാണ്."
        },
        reference: "Quran 28:24",
        context: "Prophet Musa (AS) when he was in need after fleeing Egypt and arriving in Madyan"
      }
    ]
  },
  {
    prophetNumber: 15,
    prophetName: {
      ar: "هَارُونُ عَلَيْهِ السَّلَامُ",
      en: "Harun (AS) - Aaron",
      ta: "ஹாரூன் (அலை) - ஆரோன்",
      ml: "ഹാറൂൻ (അ)"
    },
    prophetMeaning: {
      en: "Harun means 'exalted' or 'high mountain' (one who is elevated in status)",
      ta: "ஹாரூன் என்றால் 'உயர்ந்தவர்' அல்லது 'உயர்ந்த மலை'",
      ml: "ഹാറൂൻ എന്നാൽ 'ഉന്നതൻ' അല്ലെങ്കിൽ 'ഉയർന്ന മല'"
    },
    duas: [
      {
        id: 'harun-1',
        title: {
          en: "Dua asking Musa not to seize his beard",
          ar: "دعاء يطلب من موسى عدم أخذ لحيته",
          ur: "موسیٰ سے داڑھی نہ پکڑنے کی درخواست کی دعا",
          fr: "Doua demandant à Musa de ne pas saisir sa barbe",
          tr: "Musa'dan sakalını tutmamasını isteyen dua",
          id: "Doa meminta Musa tidak mencengkeram janggutnya",
          bn: "মূসাকে তার দাড়ি ধরতে না করার অনুরোধের দোয়া",
          ms: "Doa meminta Musa tidak mencengkam janggutnya",
          ta: "மூஸா தனது தாடியை பிடிக்காமல் இருக்குமாறு கேட்கும் துஆ",
          ml: "മൂസാ അവന്റെ താടി പിടിക്കരുതെന്ന് അപേക്ഷിക്കുന്ന ദുആ"
        },
        arabic: "يَا ابْنَ أُمَّ لَا تَأْخُذْ بِلِحْيَتِي وَلَا بِرَأْسِي",
        transliteration: "Ya bna umma la ta'khuth bi lihyati wa la bi ra'si",
        translation: {
          en: "O son of my mother, do not seize [me] by my beard or by my head.",
          ta: "என் தாயின் மகனே, என் தாடியையோ அல்லது என் தலையையோ பிடிக்காதே.",
          ml: "എന്റെ അമ്മയുടെ മകനേ, എന്റെ താടിയും തലയും പിടിക്കരുതേ."
        },
        reference: "Quran 20:94",
        context: "Prophet Harun (AS) speaking to his brother Musa (AS) when he returned and found the people worshipping the calf"
      }
    ]
  },
  {
    prophetNumber: 16,
    prophetName: {
      ar: "ذُو الْكِفْلِ عَلَيْهِ السَّلَامُ",
      en: "Dhul-Kifl (AS)",
      ta: "ழுல் கிஃல் (அலை)",
      ml: "ദുൽ കിഫ്ൽ (അ)"
    },
    prophetMeaning: {
      en: "Dhul-Kifl means 'the one with a pledge' or 'possessor of the pledge' (one who fulfilled his promise)",
      ta: "ழுல் கிஃல் என்றால் 'உறுதிமொழியுள்ளவர்' அல்லது 'உறுதிமொழியின் உரிமையாளர்'",
      ml: "ദുൽ കിഫ്ൽ എന്നാൽ 'വാഗ്ദാനമുള്ളവൻ' അല്ലെങ്കിൽ 'വാഗ്ദാനത്തിന്റെ ഉടമ'"
    },
    duas: [
      {
        id: 'dhulkifl-1',
        title: {
          en: "Dua for patience and steadfastness",
          ar: "دعاء للصبر والثبات",
          ur: "صبر اور استقامت کی دعا",
          fr: "Doua pour la patience et la constance",
          tr: "Sabır ve sebat için dua",
          id: "Doa untuk kesabaran dan keteguhan",
          bn: "ধৈর্য এবং দৃঢ়তার দোয়া",
          ms: "Doa untuk kesabaran dan keteguhan",
          ta: "பொறுமை மற்றும் உறுதிக்கான துஆ",
          ml: "ക്ഷമയ്ക്കും ദൃഢതയ്ക്കുമുള്ള ദുആ"
        },
        arabic: "رَبَّنَا أَفْرِغْ عَلَيْنَا صَبْرًا وَتَوَفَّنَا مُسْلِمِينَ",
        transliteration: "Rabbana afrigh 'alayna sabran wa tawaffana muslimeen",
        translation: {
          en: "Our Lord, pour upon us patience and let us die as Muslims.",
          ta: "எங்கள் இறைவா, எங்கள் மீது பொறுமையை பொழிவாயாக, முஸ்லிம்களாக எங்களை மரணமடையச் செய்வாயாக.",
          ml: "ഞങ്ങളുടെ രക്ഷിതാവേ, ഞങ്ങളുടെ മേൽ ക്ഷമ പൊഴിച്ചുതരണമേ, മുസ്ലിങ്ങളായി ഞങ്ങളെ മരിപ്പിക്കണമേ."
        },
        reference: "Quran 7:126 (similar context)",
        context: "Prophet Dhul-Kifl (AS) was known for his patience and fulfilling his pledges"
      }
    ]
  },
  {
    prophetNumber: 17,
    prophetName: {
      ar: "دَاوُودُ عَلَيْهِ السَّلَامُ",
      en: "Dawud (AS) - David",
      ta: "தாவூத் (அலை) - தாவீது",
      ml: "ദാവൂദ് (അ)"
    },
    prophetMeaning: {
      en: "Dawud means 'beloved' or 'dear one' (one who is beloved by Allah)",
      ta: "தாவூத் என்றால் 'அன்புக்குரியவர்' அல்லது 'பிரியமானவர்'",
      ml: "ദാവൂദ് എന്നാൽ 'പ്രിയപ്പെട്ടവൻ' അല്ലെങ്കിൽ 'സ്നേഹത്തിന് പാത്രമായവൻ'"
    },
    duas: [
      {
        id: 'dawud-1',
        title: {
          en: "Dua for patience and victory",
          ar: "دعاء للصبر والنصر",
          ur: "صبر اور فتح کی دعا",
          fr: "Doua pour la patience et la victoire",
          tr: "Sabır ve zafer için dua",
          id: "Doa untuk kesabaran dan kemenangan",
          bn: "ধৈর্য এবং বিজয়ের দোয়া",
          ms: "Doa untuk kesabaran dan kemenangan",
          ta: "பொறுமை மற்றும் வெற்றிக்கான துஆ",
          ml: "ക്ഷമയ്ക്കും വിജയത്തിനുമുള്ള ദുആ"
        },
        arabic: "رَبَّنَا أَفْرِغْ عَلَيْنَا صَبْرًا وَثَبِّتْ أَقْدَامَنَا وَانصُرْنَا عَلَى الْقَوْمِ الْكَافِرِينَ",
        transliteration: "Rabbana afrigh 'alayna sabran wa thabbit aqdamana wansurna 'alal-qawmil-kafireen",
        translation: {
          en: "Our Lord, pour upon us patience and plant firmly our feet and give us victory over the disbelieving people.",
          ta: "எங்கள் இறைவா, எங்கள் மீது பொறுமையை பொழிவாயாக, எங்கள் கால்களை உறுதிப்படுத்துவாயாக, காஃபிர் மக்கள் மீது எங்களுக்கு வெற்றி அளிப்பாயாக.",
          ml: "ഞങ്ങളുടെ രക്ഷിതാവേ, ഞങ്ങളുടെ മേൽ ക്ഷമ പൊഴിച്ചുതരണമേ, ഞങ്ങളുടെ കാലുകൾ ഉറപ്പിക്കണമേ, കാഫിർ ജനതയ്‌ക്കെതിരെ ഞങ്ങൾക്ക് വിജയം നൽകണമേ."
        },
        reference: "Quran 2:250",
        context: "Prophet Dawud (AS) before fighting Jalut (Goliath)"
      }
    ]
  },
  {
    prophetNumber: 18,
    prophetName: {
      ar: "سُلَيْمَانُ عَلَيْهِ السَّلَامُ",
      en: "Sulayman (AS) - Solomon",
      ta: "சுலைமான் (அலை) - சாலொமோன்",
      ml: "സുലൈമാൻ (അ)"
    },
    prophetMeaning: {
      en: "Sulayman means 'peaceful' or 'man of peace' (from 'salam' meaning peace)",
      ta: "சுலைமான் என்றால் 'அமைதியானவர்' அல்லது 'அமைதியின் மனிதர்'",
      ml: "സുലൈമാൻ എന്നാൽ 'സമാധാനപരമായവൻ' അല്ലെങ്കിൽ 'സമാധാനത്തിന്റെ മനുഷ്യൻ'"
    },
    duas: [
      {
        id: 'sulayman-1',
        title: {
          en: "Dua for gratitude and righteous deeds",
          ar: "دعاء للشكر والأعمال الصالحة",
          ur: "شکر اور نیک اعمال کی دعا",
          fr: "Doua pour la gratitude et les bonnes œuvres",
          tr: "Şükür ve salih ameller için dua",
          id: "Doa untuk syukur dan amal saleh",
          bn: "কৃতজ্ঞতা এবং সৎকাজের দোয়া",
          ms: "Doa untuk syukur dan amal soleh",
          ta: "நன்றி மற்றும் நற்செயல்களுக்கான துஆ",
          ml: "നന്ദിയും സൽക്കർമ്മങ്ങൾക്കുമുള്ള ദുആ"
        },
        arabic: "رَبِّ أَوْزِعْنِي أَنْ أَشْكُرَ نِعْمَتَكَ الَّتِي أَنْعَمْتَ عَلَيَّ وَعَلَىٰ وَالِدَيَّ وَأَنْ أَعْمَلَ صَالِحًا تَرْضَاهُ وَأَدْخِلْنِي بِرَحْمَتِكَ فِي عِبَادِكَ الصَّالِحِينَ",
        transliteration: "Rabbi awzi'ni an ashkura ni'matakallati an'amta 'alayya wa 'ala walidayya wa an a'mala salihan tardahu wa adkhilni birahmatika fi 'ibadikas-saliheen",
        translation: {
          en: "My Lord, enable me to be grateful for Your favor which You have bestowed upon me and upon my parents and to do righteousness of which You approve. And admit me by Your mercy into [the ranks of] Your righteous servants.",
          ta: "என் இறைவா, நீர் எனக்கும் என் பெற்றோருக்கும் அளித்த உமது அருளுக்கு நன்றி செலுத்த எனக்கு வல்லமை அளிப்பாயாக, மேலும் நீர் பொருந்தும் நற்செயலைச் செய்ய எனக்கு வல்லமை அளிப்பாயாக, மேலும் உமது கிருபையால் உமது நேர்மையான அடிமைகளில் [வரிசையில்] என்னை சேர்ப்பாயாக.",
          ml: "എന്റെ രക്ഷിതാവേ, നീ എനിക്കും എന്റെ മാതാപിതാക്കൾക്കും നൽകിയ നിന്റെ അനുഗ്രഹത്തിന് നന്ദി പറയാൻ എനിക്ക് ശക്തി നൽകണമേ, നീ അംഗീകരിക്കുന്ന സൽക്കർമ്മം ചെയ്യാൻ എനിക്ക് ശക്തി നൽകണമേ, നിന്റെ കാരുണ്യത്താൽ നിന്റെ നല്ല ദാസന്മാരുടെ [പംക്തിയിൽ] എന്നെ പ്രവേശിപ്പിക്കണമേ."
        },
        reference: "Quran 27:19",
        context: "Prophet Sulayman (AS) after understanding the speech of ants, expressing gratitude to Allah"
      }
    ]
  },
  {
    prophetNumber: 19,
    prophetName: {
      ar: "إِلْيَاسُ عَلَيْهِ السَّلَامُ",
      en: "Ilyas (AS) - Elijah",
      ta: "இல்யாஸ் (அலை) - எலியா",
      ml: "ഇല്യാസ് (അ)"
    },
    prophetMeaning: {
      en: "Ilyas means 'My God is Allah' (from 'Eli' meaning 'my God' and 'Yas' meaning 'Allah')",
      ta: "இல்யாஸ் என்றால் 'என் கடவுள் அல்லாஹ்'",
      ml: "ഇല്യാസ് എന്നാൽ 'എന്റെ ദൈവം അല്ലാഹു ആണ്'"
    },
    duas: [
      {
        id: 'ilyas-1',
        title: {
          en: "Dua declaring Allah as his Lord",
          ar: "دعاء يعلن الله ربه",
          ur: "اللہ کو اپنا رب قرار دینے کی دعا",
          fr: "Doua déclarant Allah comme son Seigneur",
          tr: "Allah'ı Rabbi olarak ilan eden dua",
          id: "Doa menyatakan Allah sebagai Tuhannya",
          bn: "আল্লাহকে তার রব ঘোষণা করার দোয়া",
          ms: "Doa menyatakan Allah sebagai Tuhannya",
          ta: "அல்லாஹ்வை தனது இறைவனாக அறிவிக்கும் துஆ",
          ml: "അല്ലാഹുവിനെ അവന്റെ രക്ഷിതാവായി പ്രഖ്യാപിക്കുന്ന ദുആ"
        },
        arabic: "اللَّهُ رَبِّي وَرَبُّكُمْ",
        transliteration: "Allahu rabbi wa rabbukum",
        translation: {
          en: "Allah is my Lord and your Lord.",
          ta: "அல்லாஹ்வே என் இறைவன் மற்றும் உங்கள் இறைவன்.",
          ml: "അല്ലാഹു ആണ് എന്റെ രക്ഷിതാവും നിങ്ങളുടെ രക്ഷിതാവും."
        },
        reference: "Quran 37:132",
        context: "Prophet Ilyas (AS) declaring to his people that Allah is their Lord"
      }
    ]
  },
  {
    prophetNumber: 20,
    prophetName: {
      ar: "الْيَسَعُ عَلَيْهِ السَّلَامُ",
      en: "Al-Yasa (AS) - Elisha",
      ta: "அல்யஸα (அலை) - எலிஷா",
      ml: "അൽ-യസഅ് (അ)"
    },
    prophetMeaning: {
      en: "Al-Yasa means 'God saves' or 'Allah is salvation' (from 'yasha' meaning to save)",
      ta: "அல்யஸα என்றால் 'கடவுள் காப்பாற்றுகிறார்' அல்லது 'அல்லாஹ்வே மீட்பு'",
      ml: "അൽ-യസഅ് എന്നാൽ 'ദൈവം രക്ഷിക്കുന്നു' അല്ലെങ്കിൽ 'അല്ലാഹു ആണ് രക്ഷ'"
    },
    duas: [
      {
        id: 'yasa-1',
        title: {
          en: "Dua for guidance and steadfastness",
          ar: "دعاء للهداية والثبات",
          ur: "ہدایت اور استقامت کی دعا",
          fr: "Doua pour la guidance et la constance",
          tr: "Hidayet ve sebat için dua",
          id: "Doa untuk petunjuk dan keteguhan",
          bn: "হেদায়াত ও দৃঢ়তার দোয়া",
          ms: "Doa untuk petunjuk dan keteguhan",
          ta: "நெறி மற்றும் உறுதிக்கான துஆ",
          ml: "നേർവഴിക്കും ദൃഢതയ്ക്കുമുള്ള ദുആ"
        },
        arabic: "رَبَّنَا لَا تُزِغْ قُلُوبَنَا بَعْدَ إِذْ هَدَيْتَنَا",
        transliteration: "Rabbana la tuzigh quloobana ba'da ith hadaytana",
        translation: {
          en: "Our Lord, let not our hearts deviate after You have guided us.",
          ta: "எங்கள் இறைவா, நீர் எங்களுக்கு நெறி காட்டிய பின் எங்கள் இதயங்களை வழிதவற வைக்காதே.",
          ml: "ഞങ്ങളുടെ രക്ഷിതാവേ, നീ ഞങ്ങൾക്ക് നേർവഴി കാണിച്ചതിനുശേഷം ഞങ്ങളുടെ ഹൃദയങ്ങൾ വഴിതെറ്റിക്കരുതേ."
        },
        reference: "Quran 3:8 (similar context)",
        context: "Prophet Al-Yasa (AS) seeking steadfastness on the path of guidance"
      }
    ]
  },
  {
    prophetNumber: 21,
    prophetName: {
      ar: "يُونُسُ عَلَيْهِ السَّلَامُ",
      en: "Yunus (AS) - Jonah",
      ta: "யூனுஸ் (அலை) - யோனா",
      ml: "യൂനുസ് (അ)"
    },
    prophetMeaning: {
      en: "Yunus means 'dove' or 'pigeon' (symbol of peace and message)",
      ta: "யூனுஸ் என்றால் 'புறா' அல்லது 'சமாதானத்தின் அடையாளம்'",
      ml: "യൂനുസ് എന്നാൽ 'പ്രാവ്' അല്ലെങ്കിൽ 'സമാധാനത്തിന്റെ പ്രതീകം'"
    },
    duas: [
      {
        id: 'yunus-1',
        title: {
          en: "Dua in the belly of the whale (Dua of Dhun-Nun)",
          ar: "دعاء في بطن الحوت (دعاء ذي النون)",
          ur: "مچھلی کے پیٹ میں دعا (ذوالنون کی دعا)",
          fr: "Doua dans le ventre de la baleine (Doua de Dhun-Nun)",
          tr: "Balığın karnında dua (Zun-Nun'un duası)",
          id: "Doa di dalam perut ikan paus (Doa Dzun-Nun)",
          bn: "তিমির পেটে দোয়া (যুন-নুনের দোয়া)",
          ms: "Doa di dalam perut ikan paus (Doa Dzun-Nun)",
          ta: "திமிங்கலத்தின் வயிற்றில் துஆ (துன்-னூனின் துஆ)",
          ml: "തിമിംഗലത്തിന്റെ വയറ്റിലെ ദുആ (ദുൻ-നൂനിന്റെ ദുആ)"
        },
        arabic: "لَّا إِلَٰهَ إِلَّا أَنتَ سُبْحَانَكَ إِنِّي كُنتُ مِنَ الظَّالِمِينَ",
        transliteration: "La ilaha illa anta subhanaka inni kuntu minaz-zalimeen",
        translation: {
          en: "There is no deity except You; exalted are You. Indeed, I have been of the wrongdoers.",
          ta: "உம்மைத் தவிர வணக்கத்திற்குரியவர் இல்லை; நீர் மகிமை மிகுந்தவர். நிச்சயமாக நான் அநியாயக்காரர்களில் இருந்தேன்.",
          ml: "നിന്നല്ലാതെ ആരാധനയർഹനായ ദൈവമില്ല; നീ പരിശുദ്ധൻ. തീർച്ചയായും ഞാൻ അക്രമികളിൽപ്പെട്ടവനായിരുന്നു."
        },
        reference: "Quran 21:87",
        context: "Prophet Yunus (AS) in the belly of the whale, calling upon Allah for deliverance"
      }
    ]
  },
  {
    prophetNumber: 22,
    prophetName: {
      ar: "زَكَرِيَّا عَلَيْهِ السَّلَامُ",
      en: "Zakariya (AS) - Zechariah",
      ta: "ஸகரிய்யா (அலை) - ஜகறிய்யா",
      ml: "സകരിയ്യ (അ)"
    },
    prophetMeaning: {
      en: "Zakariya means 'Allah remembers' or 'remembered by Allah' (from 'zakara' meaning to remember)",
      ta: "ஸகரிய்யா என்றால் 'அல்லாஹ் நினைவு கூறுகிறான்' அல்லது 'அல்லாஹ்வால் நினைவு கூரப்பட்டவர்'",
      ml: "സകരിയ്യ എന്നാൽ 'അല്ലാഹു ഓർക്കുന്നു' അല്ലെങ്കിൽ 'അല്ലാഹു ഓർമ്മിക്കുന്നവൻ'"
    },
    duas: [
      {
        id: 'zakariya-1',
        title: {
          en: "Dua for a righteous child",
          ar: "دعاء لطفل صالح",
          ur: "نیک بچے کی دعا",
          fr: "Doua pour un enfant pieux",
          tr: "Salih bir çocuk için dua",
          id: "Doa untuk anak yang saleh",
          bn: "সৎ সন্তানের দোয়া",
          ms: "Doa untuk anak yang soleh",
          ta: "நேர்மையான குழந்தைக்கான துஆ",
          ml: "നല്ല കുഞ്ഞിനുള്ള ദുആ"
        },
        arabic: "رَبِّ لَا تَذَرْنِي فَرْدًا وَأَنتَ خَيْرُ الْوَارِثِينَ",
        transliteration: "Rabbi la tatharni fardan wa anta khayrul-waritheen",
        translation: {
          en: "My Lord, do not leave me alone [with no heir], while You are the best of inheritors.",
          ta: "என் இறைவா, நீரே சிறந்த வாரிசுதாரராக இருக்க, என்னை தனியாக [வாரிசு இல்லாமல்] விடாதே.",
          ml: "എന്റെ രക്ഷിതാവേ, നീ ഏറ്റവും നല്ല അവകാശി ആയിരിക്കെ, എന്നെ ഒറ്റയ്ക്ക് [അവകാശി ഇല്ലാതെ] ഉപേക്ഷിക്കരുതേ."
        },
        reference: "Quran 21:89",
        context: "Prophet Zakariya (AS) praying for a child in his old age"
      }
    ]
  },
  {
    prophetNumber: 23,
    prophetName: {
      ar: "يَحْيَى عَلَيْهِ السَّلَامُ",
      en: "Yahya (AS) - John",
      ta: "யஹ்யா (அலை) - யோவான்",
      ml: "യഹ്‌യ (അ)"
    },
    prophetMeaning: {
      en: "Yahya means 'He lives' or 'Allah lives' (from 'yahya' meaning to live)",
      ta: "யஹ்யா என்றால் 'அவர் வாழ்கிறார்' அல்லது 'அல்லாஹ் வாழ்கிறார்'",
      ml: "യഹ്‌യ എന്നാൽ 'അവൻ ജീവിക്കുന്നു' അല്ലെങ്കിൽ 'അല്ലാഹു ജീവിക്കുന്നു'"
    },
    duas: [
      {
        id: 'yahya-1',
        title: {
          en: "Dua for maintaining the Scripture with determination",
          ar: "دعاء للحفاظ على الكتاب بعزم",
          ur: "عزم کے ساتھ کتاب کو برقرار رکھنے کی دعا",
          fr: "Doua pour maintenir l'Écriture avec détermination",
          tr: "Kitabı kararlılıkla korumak için dua",
          id: "Doa untuk memelihara Kitab dengan tekad",
          bn: "দৃঢ়তার সাথে গ্রন্থ বজায় রাখার দোয়া",
          ms: "Doa untuk memelihara Kitab dengan tekad",
          ta: "உறுதியுடன் வேதாகமத்தை பராமரிப்பதற்கான துஆ",
          ml: "ദൃഢനിശ്ചയത്തോടെ ഗ്രന്ഥം നിലനിർത്താൻ ദുആ"
        },
        arabic: "يَا يَحْيَى خُذِ الْكِتَابَ بِقُوَّةٍ",
        transliteration: "Ya yahya khudhil-kitaba bi quwwah",
        translation: {
          en: "[Allah said]: O Yahya, take the Scripture with determination.",
          ta: "[அல்லாஹ் கூறினார்]: யஹ்யாவே, உறுதியுடன் வேதாகமத்தை ஏற்றுக்கொள்வாயாக.",
          ml: "[അല്ലാഹു പറഞ്ഞു]: യഹ്യാ, ഗ്രന്ഥം ദൃഢനിശ്ചയത്തോടെ സ്വീകരിക്കുക."
        },
        reference: "Quran 19:12",
        context: "Allah commanding Prophet Yahya (AS) to hold firmly to the Scripture"
      }
    ]
  },
  {
    prophetNumber: 24,
    prophetName: {
      ar: "عِيسَى عَلَيْهِ السَّلَامُ",
      en: "Isa (AS) - Jesus",
      ta: "ஈஸா (அலை) - ஏசு",
      ml: "ഈസാ (അ)"
    },
    prophetMeaning: {
      en: "Isa means 'God saves' or 'Allah is salvation' (from 'wasa' meaning to save)",
      ta: "ஈஸா என்றால் 'கடவுள் காப்பாற்றுகிறார்' அல்லது 'அல்லாஹ்வே மீட்பு'",
      ml: "ഈസാ എന്നാൽ 'ദൈവം രക്ഷിക്കുന്നു' അല്ലെങ്കിൽ 'അല്ലാഹു ആണ് രക്ഷ'"
    },
    duas: [
      {
        id: 'isa-1',
        title: {
          en: "Dua for a table spread with food from heaven",
          ar: "دعاء لمائدة من السماء",
          ur: "آسمان سے کھانے کی میز کی دعا",
          fr: "Doua pour une table garnie du ciel",
          tr: "Gökten sofralanmış yemek için dua",
          id: "Doa untuk hidangan dari langit",
          bn: "আকাশ থেকে খাদ্যের টেবিলের দোয়া",
          ms: "Doa untuk hidangan dari langit",
          ta: "சுவர்க்கத்திலிருந்து விரிக்கப்பட்ட உணவு மேசைக்கான துஆ",
          ml: "സ്വർഗത്തിൽ നിന്നുള്ള ഭക്ഷണ മേശയ്ക്കുള്ള ദുആ"
        },
        arabic: "رَبَّنَا أَنزِلْ عَلَيْنَا مَائِدَةً مِّنَ السَّمَاءِ تَكُونُ لَنَا عِيدًا لِّأَوَّلِنَا وَآخِرِنَا وَآيَةً مِّنكَ ۖ وَارْزُقْنَا وَأَنتَ خَيْرُ الرَّازِقِينَ",
        transliteration: "Rabbana anzil 'alayna ma'idatan minas-sama'i takoonu lana 'eedan li-awwalina wa akhirina wa ayatan minka warzuqna wa anta khayrur-raziqeen",
        translation: {
          en: "Our Lord, send down to us a table [spread with food] from the heaven to be for us a festival for the first of us and the last of us and a sign from You. And provide for us, and You are the best of providers.",
          ta: "எங்கள் இறைவா, வானத்திலிருந்து எங்கள் மீது [உணவு நிரம்பிய] ஒரு மேசையை இறக்குவாயாக, அது எங்கள் முன்னவர்களுக்கும் பின்னவர்களுக்கும் ஒரு பெருநாளாக இருக்கும், மேலும் உம்மிடமிருந்து ஒரு அடையாளமாக இருக்கும். மேலும் எங்களுக்கு உபஜீவனம் அளிப்பாயாக, நீ உபஜீவனம் அளிப்பவர்களில் மிகச் சிறந்தவன்.",
          ml: "ഞങ്ങളുടെ രക്ഷിതാവേ, ആകാശത്ത് നിന്ന് ഞങ്ങളുടെ മേൽ [ഭക്ഷണം നിറഞ്ഞ] ഒരു മേശ ഇറക്കണമേ, അത് ഞങ്ങളുടെ മുൻഗാമികൾക്കും പിൻഗാമികൾക്കും ഒരു ആഘോഷദിനമാകട്ടെ, നിങ്കൽ നിന്നുള്ള ഒരു അടയാളവും ആകട്ടെ. ഞങ്ങൾക്ക് ഉപജീവനം നൽകണമേ, നീയാണ് ഏറ്റവും നല്ല ഉപജീവനം നൽകുന്നവൻ."
        },
        reference: "Quran 5:114",
        context: "Prophet Isa (AS) and his disciples asking Allah for a table spread with food from heaven"
      }
    ]
  },
  {
    prophetNumber: 25,
    prophetName: {
      ar: "مُحَمَّدٌ صَلَّى اللَّهُ عَلَيْهِ وَسَلَّمَ",
      en: "Muhammad (SAW) - The Praised One",
      ta: "முஹம்மது (ஸல்) - புகழப்பட்டவர்",
      ml: "മുഹമ്മദ് (സ) - സ്തുതിക്കപ്പെട്ടവൻ"
    },
    prophetMeaning: {
      en: "Muhammad means 'the praised one' or 'the praiseworthy' (from 'hamida' meaning to praise)",
      ta: "முஹம்மது என்றால் 'புகழப்பட்டவர்' அல்லது 'புகழத்தக்கவர்'",
      ml: "മുഹമ്മദ് എന്നാൽ 'സ്തുതിക്കപ്പെട്ടവൻ' അല്ലെങ്കിൽ 'സ്തുത്യൻ'"
    },
    duas: [
      {
        id: 'muhammad-1',
        title: {
          en: "Dua for increase in knowledge",
          ar: "دعاء لزيادة العلم",
          ur: "علم میں اضافے کی دعا",
          fr: "Doua pour l'augmentation du savoir",
          tr: "İlimde artış için dua",
          id: "Doa untuk peningkatan ilmu",
          bn: "জ্ঞান বৃদ্ধির দোয়া",
          ms: "Doa untuk peningkatan ilmu",
          ta: "அறிவு அதிகரிப்புக்கான துஆ",
          ml: "അറിവ് വർദ്ധിക്കാൻ ദുആ"
        },
        arabic: "رَبِّ زِدْنِي عِلْمًا",
        transliteration: "Rabbi zidni 'ilma",
        translation: {
          en: "My Lord, increase me in knowledge.",
          ta: "என் இறைவா, எனக்கு அறிவை அதிகரிப்பாயாக.",
          ml: "എന്റെ രക്ഷിതാവേ, എനിക്ക് അറിവ് വർദ്ധിപ്പിച്ചുതരണമേ."
        },
        reference: "Quran 20:114",
        context: "Prophet Muhammad (SAW) commanded to seek increase in knowledge"
      },
      {
        id: 'muhammad-2',
        title: {
          en: "Dua for entering the mosque",
          ar: "دعاء دخول المسجد",
          ur: "مسجد میں داخل ہونے کی دعا",
          fr: "Doua pour entrer dans la mosquée",
          tr: "Camiye girme duası",
          id: "Doa masuk masjid",
          bn: "মসজিদে প্রবেশের দোয়া",
          ms: "Doa masuk masjid",
          ta: "மஸ்ஜிதில் நுழையும் துஆ",
          ml: "മസ്ജിദിൽ പ്രവേശിക്കുന്ന ദുആ"
        },
        arabic: "اللَّهُمَّ افْتَحْ لِي أَبْوَابَ رَحْمَتِكَ",
        transliteration: "Allahummaftah li abwaba rahmatik",
        translation: {
          en: "O Allah, open for me the doors of Your mercy.",
          ta: "இறைவா, உமது கிருபையின் கதவுகளை எனக்காக திறப்பாயாக.",
          ml: "അല്ലാഹുവേ, നിന്റെ കാരുണ്യത്തിന്റെ വാതിലുകൾ എനിക്ക് തുറന്നുതരണമേ."
        },
        reference: "Sahih Muslim",
        context: "Prophet Muhammad (SAW) taught this dua when entering the mosque"
      },
      {
        id: 'muhammad-3',
        title: {
          en: "Dua for leaving the mosque",
          ar: "دعاء الخروج من المسجد",
          ur: "مسجد سے نکلنے کی دعا",
          fr: "Doua pour sortir de la mosquée",
          tr: "Camiden çıkma duası",
          id: "Doa keluar masjid",
          bn: "মসজিদ থেকে বের হওয়ার দোয়া",
          ms: "Doa keluar masjid",
          ta: "மஸ்ஜிதை விட்டு வெளியேறும் துஆ",
          ml: "മസ്ജിദിൽ നിന്ന് പുറപ്പെടുന്ന ദുആ"
        },
        arabic: "اللَّهُمَّ إِنِّي أَسْأَلُكَ مِنْ فَضْلِكَ",
        transliteration: "Allahumma inni as'aluka min fadlik",
        translation: {
          en: "O Allah, I ask You from Your favor.",
          ta: "இறைவா, உமது அருளிலிருந்து நான் உம்மிடம் கேட்கிறேன்.",
          ml: "അല്ലാഹുവേ, നിന്റെ അനുഗ്രഹത്തിൽ നിന്ന് ഞാൻ നിന്നോട് ചോദിക്കുന്നു."
        },
        reference: "Sahih Muslim",
        context: "Prophet Muhammad (SAW) taught this dua when leaving the mosque"
      }
    ]
  }
];

// Names of all 25 prophets with their meanings
export const prophetNamesWithMeanings = [
  { number: 1, arabic: "آدَمُ", name: "Adam", meaning: "Human/Earth (from 'adim' - earth/soil)", ta: "மனிதன்/பூமி ('ஆதிம்' - மண்/மண்ணிலிருந்து)", ml: "മനുഷ്യൻ/ഭൂമി ('ആദിം' - മണ്ണ്/മണ്ണിൽ നിന്ന്)" },
  { number: 2, arabic: "إِدْرِيسُ", name: "Idris", meaning: "Studious/One who studies much (from 'darasa' - to study)", ta: "கற்றறிந்தவர்/அதிகம் படிப்பவர் ('தராசா' - படிக்க)", ml: "പഠനശീലൻ/വളരെയധികം പഠിക്കുന്നവൻ ('ദരസ' - പഠിക്കുക)" },
  { number: 3, arabic: "نُوحٌ", name: "Nuh (Noah)", meaning: "Rest/Comfort (one who brings comfort to believers)", ta: "ஓய்வு/ஆறுதல் (விசுவாசிகளுக்கு ஆறுதல் அளிப்பவர்)", ml: "വിശ്രമം/ആശ്വാസം (വിശ്വാസികൾക്ക് ആശ്വാസം നൽകുന്നവൻ)" },
  { number: 4, arabic: "هُودٌ", name: "Hud", meaning: "To call upon/One who calls (to call people to Allah)", ta: "அழைப்பவர் (மக்களை அல்லாஹ்விடம் அழைப்பவர்)", ml: "വിളിക്കുന്നവൻ (ആളുകളെ അല്ലാഹുവിന്റെ അടുക്കലേക്ക് വിളിക്കുന്നവൻ)" },
  { number: 5, arabic: "صَالِحٌ", name: "Salih", meaning: "Righteous/Virtuous (one who is righteous and upright)", ta: "நேர்மையானவர்/ஒழுக்கமுள்ளவர்", ml: "നീതിമാൻ/സദ്ഗുണവാനും" },
  { number: 6, arabic: "إِبْرَاهِيمُ", name: "Ibrahim (Abraham)", meaning: "Father of many/Father of mercy (exalted father)", ta: "பலரின் தந்தை/கருணையின் தந்தை (உயர்ந்த தந்தை)", ml: "പലരുടെ പിതാവ്/കാരുണ്യത്തിന്റെ പിതാവ് (ഉന്നതനായ പിതാവ്)" },
  { number: 7, arabic: "لُوطٌ", name: "Lut (Lot)", meaning: "Covering/Hiding (one who covers sins or hides from evil)", ta: "மறைத்தல்/மறைவு (பாவங்களை மறைப்பவர் அல்லது தீமையிலிருந்து மறைபவர்)", ml: "മറയ്ക്കൽ/രഹസ്യമാക്കൽ (പാപങ്ങൾ മറയ്ക്കുന്നവൻ അല്ലെങ്കിൽ തിന്മയിൽ നിന്ന് ഒളിക്കുന്നവൻ)" },
  { number: 8, arabic: "إِسْمَاعِيلُ", name: "Ismail (Ishmael)", meaning: "God hears/Allah listens (from 'sami'a' - to hear)", ta: "அல்லாஹ் கேட்கிறான்/அல்லாஹ் செவிமடுக்கிறான் ('ஸமிஆ' - கேட்க)", ml: "അല്ലാഹു കേൾക്കുന്നു/അല്ലാഹു ശ്രവിക്കുന്നു ('സമിഅ' - കേൾക്കുക)" },
  { number: 9, arabic: "إِسْحَاقُ", name: "Ishaq (Isaac)", meaning: "He laughs/One who laughs (from 'dahika' - to laugh)", ta: "அவர் சிரிக்கிறார்/சிரிப்பவர் ('தஹிகா' - சிரிக்க)", ml: "അവൻ ചിരിക്കുന്നു/ചിരിക്കുന്നവൻ ('ദഹിക' - ചിരിക്കുക)" },
  { number: 10, arabic: "يَعْقُوبُ", name: "Yaqub (Jacob)", meaning: "He follows/Supplanter (one who follows in the footsteps)", ta: "அவர் பின்தொடர்கிறார்/பதிலீடு செய்பவர்", ml: "അവൻ പിന്തുടരുന്നു/പകരക്കാരൻ" },
  { number: 11, arabic: "يُوسُفُ", name: "Yusuf (Joseph)", meaning: "God increases/Allah adds (from 'yasaf' - to add/increase)", ta: "அல்லாஹ் அதிகரிக்கிறான்/அல்லாஹ் சேர்க்கிறான் ('யாசஃப்' - சேர்க்க/அதிகரிக்க)", ml: "അല്ലാഹു വർദ്ധിപ്പിക്കുന്നു/അല്ലാഹു ചേർക്കുന്നു ('യസഫ്' - ചേർക്കുക/വർദ്ധിപ്പിക്കുക)" },
  { number: 12, arabic: "أَيُّوبُ", name: "Ayyub (Job)", meaning: "Persecuted/Returning (one who returns to Allah in patience)", ta: "துன்புறுத்தப்பட்டவர்/திரும்புபவர் (பொறுமையுடன் அல்லாஹ்விடம் திரும்புபவர்)", ml: "പീഡിപ്പിക്കപ്പെട്ടവൻ/മടങ്ങുന്നവൻ (ക്ഷമയോടെ അല്ലാഹുവിന്റെ അടുക്കലേക്ക് മടങ്ങുന്നവൻ)" },
  { number: 13, arabic: "شُعَيْبٌ", name: "Shu'ayb", meaning: "Who shows the right path (one who guides to the correct way)", ta: "சரியான பாதையை காட்டுபவர் (சரியான வழியில் வழிகாட்டுபவர்)", ml: "ശരിയായ പാത കാണിക്കുന്നവൻ (ശരിയായ വഴിയിലേക്ക് നയിക്കുന്നവൻ)" },
  { number: 14, arabic: "مُوسَى", name: "Musa (Moses)", meaning: "Drawn out/Saved from water (from 'masa' - to draw out)", ta: "வெளியே இழுக்கப்பட்டவர்/நீரிலிருந்து காப்பாற்றப்பட்டவர் ('மாசா' - வெளியே இழுக்க)", ml: "വലിച്ചെടുക്കപ്പെട്ടവൻ/വെള്ളത്തിൽ നിന്ന് രക്ഷിക്കപ്പെട്ടവൻ ('മസ' - വലിച്ചെടുക്കുക)" },
  { number: 15, arabic: "هَارُونُ", name: "Harun (Aaron)", meaning: "Exalted/High mountain (one who is elevated in status)", ta: "உயர்ந்தவர்/உயர்ந்த மலை (அந்தஸ்தில் உயர்த்தப்பட்டவர்)", ml: "ഉന്നതൻ/ഉയർന്ന മല (പദവിയിൽ ഉയർത്തപ്പെട്ടവൻ)" },
  { number: 16, arabic: "ذُو الْكِفْلِ", name: "Dhul-Kifl", meaning: "The one with a pledge/Possessor of the pledge (one who fulfilled his promise)", ta: "உறுதிமொழியுள்ளவர்/உறுதிமொழியின் உரிமையாளர் (தனது வாக்குறுதியை நிறைவேற்றியவர்)", ml: "വാഗ്ദാനമുള്ളവൻ/വാഗ്ദാനത്തിന്റെ ഉടമ (തന്റെ വാഗ്ദാനം പാലിച്ചവൻ)" },
  { number: 17, arabic: "دَاوُودُ", name: "Dawud (David)", meaning: "Beloved/Dear one (one who is beloved by Allah)", ta: "அன்புக்குரியவர்/பிரியமானவர் (அல்லாஹ்வால் அன்புக்குரியவர்)", ml: "പ്രിയപ്പെട്ടവൻ/സ്നേഹത്തിന് പാത്രമായവൻ (അല്ലാഹുവിന് പ്രിയപ്പെട്ടവൻ)" },
  { number: 18, arabic: "سُلَيْمَانُ", name: "Sulayman (Solomon)", meaning: "Peaceful/Man of peace (from 'salam' - peace)", ta: "அமைதியானவர்/அமைதியின் மனிதர் ('ஸலாம்' - அமைதி)", ml: "സമാധാനപരമായവൻ/സമാധാനത്തിന്റെ മനുഷ്യൻ ('സലാം' - സമാധാനം)" },
  { number: 19, arabic: "إِلْيَاسُ", name: "Ilyas (Elijah)", meaning: "My God is Allah (from 'Eli' - my God, and 'Yas' - Allah)", ta: "என் கடவுள் அல்லாஹ் ('ஏலி' - என் கடவுள், 'யாஸ்' - அல்லாஹ்)", ml: "എന്റെ ദൈവം അല്ലാഹു ആണ് ('ഏലി' - എന്റെ ദൈവം, 'യാസ്' - അല്ലാഹു)" },
  { number: 20, arabic: "الْيَسَعُ", name: "Al-Yasa (Elisha)", meaning: "God saves/Allah is salvation (from 'yasha' - to save)", ta: "கடவுள் காப்பாற்றுகிறார்/அல்லாஹ்வே மீட்பு ('யாஷா' - காப்பாற்ற)", ml: "ദൈവം രക്ഷിക്കുന്നു/അല്ലാഹു ആണ് രക്ഷ ('യശ' - രക്ഷിക്കുക)" },
  { number: 21, arabic: "يُونُسُ", name: "Yunus (Jonah)", meaning: "Dove/Pigeon (symbol of peace and message)", ta: "புறா/புறா (அமைதி மற்றும் செய்தியின் அடையாளம்)", ml: "പ്രാവ്/പ്രാവ് (സമാധാനത്തിന്റെയും സന്ദേശത്തിന്റെയും പ്രതീകം)" },
  { number: 22, arabic: "زَكَرِيَّا", name: "Zakariya (Zechariah)", meaning: "Allah remembers/Remembered by Allah (from 'zakara' - to remember)", ta: "அல்லாஹ் நினைவு கூறுகிறான்/அல்லாஹ்வால் நினைவு கூரப்பட்டவர் ('ஸகரா' - நினைவு கூற)", ml: "അല്ലാഹു ഓർക്കുന്നു/അല്ലാഹു ഓർമ്മിക്കുന്നവൻ ('സകര' - ഓർക്കുക)" },
  { number: 23, arabic: "يَحْيَى", name: "Yahya (John)", meaning: "He lives/Allah lives (from 'yahya' - to live)", ta: "அவர் வாழ்கிறார்/அல்லாஹ் வாழ்கிறார் ('யஹ்யா' - வாழ)", ml: "അവൻ ജീവിക്കുന്നു/അല്ലാഹു ജീവിക്കുന്നു ('യഹ്‌യ' - ജീവിക്കുക)" },
  { number: 24, arabic: "عِيسَى", name: "Isa (Jesus)", meaning: "God saves/Allah is salvation (from 'wasa' - to save)", ta: "கடவுள் காப்பாற்றுகிறார்/அல்லாஹ்வே மீட்பு ('வஸா' - காப்பாற்ற)", ml: "ദൈവം രക്ഷിക്കുന്നു/അല്ലാഹു ആണ് രക്ഷ ('വസ' - രക്ഷിക്കുക)" },
  { number: 25, arabic: "مُحَمَّدٌ", name: "Muhammad (SAW)", meaning: "The praised one/The praiseworthy (from 'hamida' - to praise)", ta: "புகழப்பட்டவர்/புகழத்தக்கவர் ('ஹமிதா' - புகழ)", ml: "സ്തുതിക്കപ്പെട്ടവൻ/സ്തുത്യൻ ('ഹമിദ' - സ്തുതിക്കുക)" }
];
