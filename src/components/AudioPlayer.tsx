import { useState, useEffect, useRef, useCallback } from 'react';
import { useTheme } from '../contexts/ThemeContext';

interface AudioPlayerProps {
  arabicText: string;
  language: string;
}

export default function AudioPlayer({ arabicText, language }: AudioPlayerProps) {
  const [isPlaying, setIsPlaying] = useState(false);
  const [isSupported, setIsSupported] = useState(true);
  const [speed, setSpeed] = useState(0.8);
  const [voices, setVoices] = useState<SpeechSynthesisVoice[]>([]);
  const [selectedVoice, setSelectedVoice] = useState<SpeechSynthesisVoice | null>(null);
  const utteranceRef = useRef<SpeechSynthesisUtterance | null>(null);
  const { isDark } = useTheme();

  // Load voices
  useEffect(() => {
    if (!('speechSynthesis' in window)) {
      setIsSupported(false);
      return;
    }

    const loadVoices = () => {
      const availableVoices = window.speechSynthesis.getVoices();
      setVoices(availableVoices);
      
      // Find best Arabic voice
      const arabicVoice = availableVoices.find(v => v.lang === 'ar-SA') ||
        availableVoices.find(v => v.lang.startsWith('ar')) ||
        availableVoices.find(v => v.lang === 'ar');
      
      if (arabicVoice) {
        setSelectedVoice(arabicVoice);
      }
    };

    loadVoices();
    
    // Voices may load asynchronously
    if (window.speechSynthesis.onvoiceschanged !== undefined) {
      window.speechSynthesis.onvoiceschanged = loadVoices;
    }

    return () => {
      window.speechSynthesis.cancel();
    };
  }, []);

  const playAudio = useCallback(() => {
    if (!isSupported) return;

    // Cancel any ongoing speech first
    window.speechSynthesis.cancel();

    // Small delay to ensure cancellation is complete (fixes iOS bug)
    setTimeout(() => {
      const utterance = new SpeechSynthesisUtterance(arabicText);
      utterance.lang = 'ar-SA';
      utterance.rate = speed;
      utterance.pitch = 1;
      utterance.volume = 1;

      if (selectedVoice) {
        utterance.voice = selectedVoice;
      }

      utterance.onstart = () => setIsPlaying(true);
      utterance.onend = () => setIsPlaying(false);
      utterance.onerror = (e) => {
        console.log('Speech error:', e);
        setIsPlaying(false);
      };

      utteranceRef.current = utterance;
      window.speechSynthesis.speak(utterance);
    }, 100);
  }, [arabicText, speed, selectedVoice, isSupported]);

  const pauseAudio = () => {
    window.speechSynthesis.cancel();
    setIsPlaying(false);
  };

  const togglePlay = () => {
    if (isPlaying) {
      pauseAudio();
    } else {
      playAudio();
    }
  };

  const increaseSpeed = () => {
    setSpeed(prev => Math.min(prev + 0.1, 1.5));
    if (isPlaying) {
      pauseAudio();
      setTimeout(() => playAudio(), 150);
    }
  };

  const decreaseSpeed = () => {
    setSpeed(prev => Math.max(prev - 0.1, 0.3));
    if (isPlaying) {
      pauseAudio();
      setTimeout(() => playAudio(), 150);
    }
  };

  if (!isSupported) {
    return (
      <div className={`mt-4 p-3 rounded-xl text-center text-sm ${isDark ? 'bg-slate-800 text-gray-400' : 'bg-gray-50 text-gray-500'}`}>
        {language === 'en' ? '🔇 Audio not supported on this device' :
         language === 'ar' ? '🔇 الصوت غير مدعوم على هذا الجهاز' :
         language === 'ta' ? '🔇 இந்த சாதனத்தில் ஆடியோ ஆதரிக்கப்படவில்லை' :
         language === 'ml' ? '🔇 ഈ ഉപകരണത്തിൽ ഓഡിയോ പിന്തുണയ്ക്കുന്നില്ല' :
         '🔇 Audio not supported'}
      </div>
    );
  }

  const labels: Record<string, Record<string, string>> = {
    en: { listen: 'Listen', play: 'Play', pause: 'Pause', speed: 'Speed', note: 'Uses browser speech synthesis' },
    ar: { listen: 'استمع', play: 'تشغيل', pause: 'إيقاف', speed: 'السرعة', note: 'يستخدم تخليق كلام المتصفح' },
    ur: { listen: 'سنیں', play: 'چلائیں', pause: 'روکیں', speed: 'رفتار', note: 'براؤزر اسپیچ سنتھیسس استعمال کرتا ہے' },
    fr: { listen: 'Écouter', play: 'Lecture', pause: 'Pause', speed: 'Vitesse', note: 'Utilise la synthèse vocale du navigateur' },
    tr: { listen: 'Dinle', play: 'Oynat', pause: 'Duraklat', speed: 'Hız', note: 'Tarayıcı konuşma sentezini kullanır' },
    id: { listen: 'Dengarkan', play: 'Putar', pause: 'Jeda', speed: 'Kecepatan', note: 'Menggunakan sintesis ucapan browser' },
    bn: { listen: 'শুনুন', play: 'চালান', pause: 'বিরতি', speed: 'গতি', note: 'ব্রাউজার স্পিচ সিন্থেসিস ব্যবহার করে' },
    ms: { listen: 'Dengar', play: 'Main', pause: 'Jeda', speed: 'Kelajuan', note: 'Menggunakan sintesis ucapan pelayar' },
    ta: { listen: 'கேளுங்கள்', play: 'இயக்கு', pause: 'இடைநிறுத்து', speed: 'வேகம்', note: 'உலாவி பேச்சு தொகுப்பைப் பயன்படுத்துகிறது' },
    ml: { listen: 'കേൾക്കുക', play: 'പ്ലേ', pause: 'നിർത്തുക', speed: 'വേഗത', note: 'ബ്രൗസർ സ്പീച്ച് സിന്തസിസ് ഉപയോഗിക്കുന്നു' },
  };

  const label = labels[language] || labels.en;

  return (
    <div className={`mt-4 p-4 rounded-xl border ${isDark ? 'bg-slate-800 border-slate-700' : 'bg-gray-50 border-gray-200'}`}>
      <div className="flex items-center justify-between mb-3">
        <span className={`text-xs font-medium ${isDark ? 'text-gray-400' : 'text-gray-500'}`}>
          🎧 {label.listen}
        </span>
        <div className="flex items-center gap-2">
          <button
            onClick={decreaseSpeed}
            disabled={speed <= 0.3}
            className={`w-7 h-7 rounded-md text-xs font-bold transition-colors ${
              isDark 
                ? 'bg-slate-700 text-gray-300 hover:bg-slate-600 disabled:opacity-50' 
                : 'bg-white text-gray-600 hover:bg-gray-100 disabled:opacity-50'
            }`}
          >
            -
          </button>
          <span className={`text-xs font-medium min-w-[3rem] text-center ${isDark ? 'text-gray-300' : 'text-gray-600'}`}>
            {speed.toFixed(1)}x
          </span>
          <button
            onClick={increaseSpeed}
            disabled={speed >= 1.5}
            className={`w-7 h-7 rounded-md text-xs font-bold transition-colors ${
              isDark 
                ? 'bg-slate-700 text-gray-300 hover:bg-slate-600 disabled:opacity-50' 
                : 'bg-white text-gray-600 hover:bg-gray-100 disabled:opacity-50'
            }`}
          >
            +
          </button>
        </div>
      </div>

      <button
        onClick={togglePlay}
        className={`w-full py-3 px-4 rounded-lg font-medium transition-all flex items-center justify-center gap-2 ${
          isPlaying
            ? isDark
              ? 'bg-red-600 hover:bg-red-700 text-white'
              : 'bg-red-500 hover:bg-red-600 text-white'
            : isDark
            ? 'bg-emerald-600 hover:bg-emerald-700 text-white'
            : 'bg-emerald-500 hover:bg-emerald-600 text-white'
        }`}
      >
        {isPlaying ? (
          <>
            <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
              <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zM7 8a1 1 0 012 0v4a1 1 0 11-2 0V8zm5-1a1 1 0 00-1 1v4a1 1 0 102 0V8a1 1 0 00-1-1z" clipRule="evenodd" />
            </svg>
            <span>{label.pause}</span>
            <div className="audio-wave ml-2">
              <span></span><span></span><span></span><span></span><span></span>
            </div>
          </>
        ) : (
          <>
            <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
              <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM9.555 7.168A1 1 0 008 8v4a1 1 0 001.555.832l3-2a1 1 0 000-1.664l-3-2z" clipRule="evenodd" />
            </svg>
            <span>{label.play}</span>
          </>
        )}
      </button>

      <p className={`text-xs mt-2 text-center ${isDark ? 'text-gray-500' : 'text-gray-400'}`}>
        {label.note}
      </p>
    </div>
  );
}
