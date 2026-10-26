import { createContext, useContext, useEffect, useState, ReactNode } from 'react';

interface NotificationsContextType {
  notificationsEnabled: boolean;
  toggleNotifications: () => void;
  notificationTime: string;
  setNotificationTime: (time: string) => void;
  notificationSound: string;
  setNotificationSound: (sound: string) => void;
  lastNotification: string | null;
  requestPermission: () => Promise<boolean>;
  playSound: () => void;
}

const NOTIFICATION_SOUNDS = [
  { id: 'adhan', name: 'Adhan', file: 'adhan.mp3' },
  { id: 'bell', name: 'Bell', file: 'bell.mp3' },
  { id: 'chime', name: 'Chime', file: 'chime.mp3' },
  { id: 'default', name: 'Default', file: 'default.mp3' },
  { id: 'gentle', name: 'Gentle', file: 'gentle.mp3' },
  { id: 'none', name: 'No Sound', file: '' },
];

const NotificationsContext = createContext<NotificationsContextType | undefined>(undefined);

export function NotificationsProvider({ children }: { children: ReactNode }) {
  const [notificationsEnabled, setNotificationsEnabled] = useState(() => {
    if (typeof window !== 'undefined') {
      return localStorage.getItem('notificationsEnabled') === 'true';
    }
    return false;
  });

  const [notificationTime, setNotificationTimeState] = useState(() => {
    if (typeof window !== 'undefined') {
      return localStorage.getItem('notificationTime') || '08:00';
    }
    return '08:00';
  });

  const [notificationSound, setNotificationSoundState] = useState(() => {
    if (typeof window !== 'undefined') {
      return localStorage.getItem('notificationSound') || 'adhan';
    }
    return 'adhan';
  });

  const [lastNotification, setLastNotification] = useState<string | null>(() => {
    if (typeof window !== 'undefined') {
      return localStorage.getItem('lastNotification');
    }
    return null;
  });

  useEffect(() => {
    localStorage.setItem('notificationsEnabled', String(notificationsEnabled));
  }, [notificationsEnabled]);

  useEffect(() => {
    localStorage.setItem('notificationTime', notificationTime);
  }, [notificationTime]);

  useEffect(() => {
    localStorage.setItem('notificationSound', notificationSound);
  }, [notificationSound]);

  useEffect(() => {
    if (lastNotification) {
      localStorage.setItem('lastNotification', lastNotification);
    }
  }, [lastNotification]);

  // Check for daily notification
  useEffect(() => {
    if (!notificationsEnabled) return;

    const checkNotification = () => {
      const now = new Date();
      const currentTime = `${String(now.getHours()).padStart(2, '0')}:${String(now.getMinutes()).padStart(2, '0')}`;
      const today = now.toDateString();

      if (currentTime === notificationTime && lastNotification !== today) {
        sendDailyNotification();
        setLastNotification(today);
      }
    };

    const interval = setInterval(checkNotification, 60000);
    return () => clearInterval(interval);
  }, [notificationsEnabled, notificationTime, lastNotification]);

  const playSound = () => {
    // Play notification sound using Web Audio API
    const audioContext = new (window.AudioContext || (window as any).webkitAudioContext)();
    const oscillator = audioContext.createOscillator();
    const gainNode = audioContext.createGain();
    
    oscillator.connect(gainNode);
    gainNode.connect(audioContext.destination);
    
    // Different sounds based on selection
    if (notificationSound === 'adhan') {
      oscillator.frequency.value = 440;
      oscillator.type = 'sine';
    } else if (notificationSound === 'bell') {
      oscillator.frequency.value = 800;
      oscillator.type = 'triangle';
    } else if (notificationSound === 'chime') {
      oscillator.frequency.value = 600;
      oscillator.type = 'sine';
    } else if (notificationSound === 'gentle') {
      oscillator.frequency.value = 300;
      oscillator.type = 'sine';
    } else {
      oscillator.frequency.value = 440;
      oscillator.type = 'sine';
    }
    
    gainNode.gain.setValueAtTime(0.3, audioContext.currentTime);
    gainNode.gain.exponentialRampToValueAtTime(0.01, audioContext.currentTime + 0.5);
    
    oscillator.start(audioContext.currentTime);
    oscillator.stop(audioContext.currentTime + 0.5);
  };

  const requestPermission = async (): Promise<boolean> => {
    if (!('Notification' in window)) {
      return false;
    }

    if (Notification.permission === 'granted') {
      return true;
    }

    if (Notification.permission !== 'denied') {
      const permission = await Notification.requestPermission();
      return permission === 'granted';
    }

    return false;
  };

  const toggleNotifications = async () => {
    if (!notificationsEnabled) {
      const granted = await requestPermission();
      if (granted) {
        setNotificationsEnabled(true);
        showNotification(
          'Notifications Enabled',
          'You will receive daily duas at your scheduled time.',
          '🔔'
        );
      }
    } else {
      setNotificationsEnabled(false);
    }
  };

  const setNotificationTime = (time: string) => {
    setNotificationTimeState(time);
    if (notificationsEnabled) {
      showNotification(
        'Time Updated',
        `Daily duas will be sent at ${time}`,
        '⏰'
      );
    }
  };

  const setNotificationSound = (sound: string) => {
    setNotificationSoundState(sound);
    if (sound !== 'none') {
      playSound();
    }
  };

  const sendDailyNotification = () => {
    const duas = [
      { title: 'Morning Remembrance', text: 'أَصْبَحْنَا وَأَصْبَحَ الْمُلْكُ لِلَّهِ' },
      { title: 'Seeking Forgiveness', text: 'اللَّهُمَّ إِنَّكَ عَفُوٌّ كَرِيمٌ تُحِبُّ الْعَفْوَ فَاعْفُ عَنِّي' },
      { title: 'Protection', text: 'أَعُوذُ بِكَلِمَاتِ اللهِ التَّامَّاتِ مِنْ شَرِّ مَا خَلَقَ' },
      { title: 'Guidance', text: 'رَبِّ زِدْنِي عِلْمًا' },
      { title: 'Gratitude', text: 'الْحَمْدُ لِلَّهِ رَبِّ الْعَالَمِينَ' },
    ];

    const randomDua = duas[Math.floor(Math.random() * duas.length)];
    showNotification(
      `Daily Dua: ${randomDua.title}`,
      randomDua.text,
      '🤲'
    );
    
    if (notificationSound !== 'none') {
      playSound();
    }
  };

  const showNotification = (title: string, body: string, icon: string = '🤲') => {
    if ('Notification' in window && Notification.permission === 'granted') {
      new Notification(`${icon} ${title}`, {
        body,
        icon: '/favicon.ico',
        badge: '/favicon.ico',
        tag: 'daily-dua',
        requireInteraction: false,
      });
    }
  };

  return (
    <NotificationsContext.Provider value={{
      notificationsEnabled,
      toggleNotifications,
      notificationTime,
      setNotificationTime,
      notificationSound,
      setNotificationSound,
      lastNotification,
      requestPermission,
      playSound,
    }}>
      {children}
    </NotificationsContext.Provider>
  );
}

export function useNotifications() {
  const context = useContext(NotificationsContext);
  if (!context) throw new Error('useNotifications must be used within NotificationsProvider');
  return context;
}

export { NOTIFICATION_SOUNDS };
