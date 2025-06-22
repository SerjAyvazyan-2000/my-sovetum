import { FC, useEffect } from "react";
import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";
import { useOnboardingStore } from "../../store/onboarding";

// вспомогательный CSS-класс для фирменного градиента кнопки
const btnClass =
  "px-8 py-4 rounded-2xl bg-white text-teal-600 font-semibold text-lg shadow-xl " +
  "hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-teal-600 " +
  "transition-all duration-200 transform hover:scale-105 active:scale-95";

const SplashScreen: FC = () => {
  const navigate = useNavigate();
  const setStep = useOnboardingStore((s) => s.setStep);

  // Сообщаем Telegram-клиенту, что Mini App готов к показу
  useEffect(() => {
    if (typeof window !== 'undefined' && window.Telegram?.WebApp?.ready) {
      window.Telegram.WebApp.ready();
    }
  }, []);

  const handleStart = () => {
    setStep(2);                  // запоминаем, что пользователь завершил первый экран
    navigate("/onboarding/interests");
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen px-6 text-center bg-gradient-to-br from-teal-500 to-teal-600">

      {/* Логотип команды экспертов */}
      <motion.div
        initial={{ opacity: 0, scale: 0.6 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        className="mb-16"
      >
        {/* SVG иконка команды экспертов */}
        <div className="relative">
          <svg 
            width="120" 
            height="120" 
            viewBox="0 0 120 120" 
            fill="none" 
            className="drop-shadow-2xl"
          >
            {/* Речевой пузырь */}
            <motion.path
              initial={{ pathLength: 0, opacity: 0 }}
              animate={{ pathLength: 1, opacity: 1 }}
              transition={{ delay: 0.3, duration: 0.8 }}
              d="M30 25 L90 25 Q95 25 95 30 L95 40 Q95 45 90 45 L50 45 L40 55 L45 45 L35 45 Q30 45 30 40 L30 30 Q30 25 35 25 Z" 
              stroke="white" 
              strokeWidth="3" 
              fill="white"
            />
            {/* Точки в пузыре */}
            <circle cx="50" cy="35" r="2" fill="currentColor" className="text-teal-600" />
            <circle cx="60" cy="35" r="2" fill="currentColor" className="text-teal-600" />
            <circle cx="70" cy="35" r="2" fill="currentColor" className="text-teal-600" />
            
            {/* Центральная фигура */}
            <motion.g
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              transition={{ delay: 0.5, duration: 0.6 }}
            >
              <circle cx="60" cy="75" r="8" stroke="white" strokeWidth="3" fill="none"/>
              <path d="M45 95 Q45 85 60 85 Q75 85 75 95 L75 105 L45 105 Z" stroke="white" strokeWidth="3" fill="none"/>
            </motion.g>
            
            {/* Левая фигура */}
            <motion.g
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              transition={{ delay: 0.7, duration: 0.6 }}
            >
              <circle cx="35" cy="80" r="6" stroke="white" strokeWidth="3" fill="none"/>
              <path d="M25 95 Q25 88 35 88 Q45 88 45 95 L45 105 L25 105 Z" stroke="white" strokeWidth="3" fill="none"/>
            </motion.g>
            
            {/* Правая фигура */}
            <motion.g
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              transition={{ delay: 0.7, duration: 0.6 }}
            >
              <circle cx="85" cy="80" r="6" stroke="white" strokeWidth="3" fill="none"/>
              <path d="M75 95 Q75 88 85 88 Q95 88 95 95 L95 105 L75 105 Z" stroke="white" strokeWidth="3" fill="none"/>
            </motion.g>
            
            {/* Стол/круг соединяющий экспертов */}
            <motion.ellipse
              initial={{ scaleX: 0 }}
              animate={{ scaleX: 1 }}
              transition={{ delay: 0.9, duration: 0.8 }}
              cx="60" 
              cy="95" 
              rx="20" 
              ry="8" 
              stroke="white" 
              strokeWidth="3" 
              fill="none"
            />
          </svg>
        </div>
      </motion.div>

      {/* Название SOVETUM */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.4, duration: 0.6 }}
        className="mb-8"
      >
        <h1 className="text-5xl font-bold text-white tracking-wider mb-2">
          SOVETUM
        </h1>
        <div className="w-16 h-1 bg-white/30 mx-auto rounded-full"></div>
      </motion.div>

      {/* Подзаголовок */}
      <motion.p
        initial={{ opacity: 0, y: 12 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.6, duration: 0.6 }}
        className="text-xl text-white/90 mb-12 max-w-sm leading-relaxed"
      >
        Ваш персональный совет экспертов для принятия важных решений
      </motion.p>

      {/* CTA-кнопка «Начать» */}
      <motion.button
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.8, duration: 0.6 }}
        whileTap={{ scale: 0.95 }}
        whileHover={{ scale: 1.05 }}
        onClick={handleStart}
        className={btnClass}
      >
        Начать работу
      </motion.button>
      
      {/* Декоративные элементы */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <motion.div 
          animate={{ 
            scale: [1, 1.1, 1],
            opacity: [0.1, 0.2, 0.1]
          }}
          transition={{ 
            duration: 4, 
            repeat: Infinity, 
            ease: "easeInOut" 
          }}
          className="absolute -top-20 -left-20 w-40 h-40 bg-white rounded-full"
        />
        <motion.div 
          animate={{ 
            scale: [1, 1.2, 1],
            opacity: [0.05, 0.15, 0.05]
          }}
          transition={{ 
            duration: 5, 
            repeat: Infinity, 
            ease: "easeInOut",
            delay: 1
          }}
          className="absolute -bottom-20 -right-20 w-60 h-60 bg-white rounded-full"
        />
      </div>
    </div>
  );
};

export default SplashScreen;
