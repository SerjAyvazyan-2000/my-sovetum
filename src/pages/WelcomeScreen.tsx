/**
 * Приветственный экран (Splash Screen) - Версия 2025
 * Первый экран в сценарии знакомства с приложением
 * Современный дизайн с продвинутыми анимациями и премиальным внешним видом
 * Соответствует дизайн-спецификации 2025 года
 */

import React, { useState, useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import { useTelegramWebApp } from '../hooks/useTelegramTheme'

/**
 * Компонент приветственного экрана с современным дизайном
 * Реализует первый шаг сценария "Первое знакомство"
 */
const WelcomeScreen: React.FC = () => {
  const navigate = useNavigate()
  const [logoAnimated, setLogoAnimated] = useState(false)
  const [contentVisible, setContentVisible] = useState(false)
  const [buttonsVisible, setButtonsVisible] = useState(false)
  const [isHovering, setIsHovering] = useState(false)
  
  // Получаем данные пользователя из Telegram
  const webApp = useTelegramWebApp()
  const userName = webApp?.initDataUnsafe?.user?.first_name || 'друг'
  
  // Каскадная анимация появления элементов
  useEffect(() => {
    // Этап 1: Анимация логотипа (800ms)
    const logoTimer = setTimeout(() => {
      setLogoAnimated(true)
    }, 300)
    
    // Этап 2: Появление контента (400ms после логотипа)
    const contentTimer = setTimeout(() => {
      setContentVisible(true)
    }, 1200)
    
    // Этап 3: Появление кнопки (300ms после контента)
    const buttonTimer = setTimeout(() => {
      setButtonsVisible(true)
    }, 1800)
    
    return () => {
      clearTimeout(logoTimer)
      clearTimeout(contentTimer)
      clearTimeout(buttonTimer)
    }
  }, [])
  
  /**
   * Обработчик кнопки "Начать" с тактильной обратной связью
   * Переход к экрану выбора первого эксперта
   */
  const handleStartClick = () => {
    console.log('🚀 Пользователь начинает знакомство с экспертами')
    
    // Добавляем микрозадержку для лучшего UX
    setTimeout(() => {
      navigate('/onboarding/expert-selection')
    }, 150)
  }
  
  return (
    <div className="min-h-screen relative overflow-hidden bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-100 dark:from-gray-900 dark:via-slate-900 dark:to-indigo-950">
      
      {/* Анимированные фоновые элементы */}
      <div className="absolute inset-0 overflow-hidden">
        {/* Главный декоративный градиент */}
        <div className="absolute -top-1/2 -right-1/2 w-full h-full bg-gradient-to-br from-blue-400/10 via-purple-400/10 to-indigo-500/10 rounded-full blur-3xl animate-pulse" 
             style={{ animationDelay: '0s', animationDuration: '4s' }} />
        
        {/* Вторичный градиент */}
        <div className="absolute -bottom-1/2 -left-1/2 w-full h-full bg-gradient-to-tr from-purple-400/10 via-pink-400/10 to-blue-500/10 rounded-full blur-3xl animate-pulse" 
             style={{ animationDelay: '2s', animationDuration: '4s' }} />
        
        {/* Парящие декоративные элементы */}
        <div className="absolute top-1/4 left-1/4 w-4 h-4 bg-gradient-to-r from-blue-500 to-purple-600 rounded-full opacity-20 animate-bounce" 
             style={{ animationDelay: '1s', animationDuration: '3s' }} />
        <div className="absolute top-3/4 right-1/4 w-6 h-6 bg-gradient-to-r from-purple-500 to-pink-600 rounded-full opacity-15 animate-bounce" 
             style={{ animationDelay: '2s', animationDuration: '4s' }} />
        <div className="absolute top-1/2 left-1/6 w-3 h-3 bg-gradient-to-r from-indigo-500 to-blue-600 rounded-full opacity-25 animate-bounce" 
             style={{ animationDelay: '0.5s', animationDuration: '3.5s' }} />
      </div>
      
      {/* Основной контент */}
      <div className="relative z-10 min-h-screen flex flex-col items-center justify-center px-8 py-12">
        
        {/* Логотип с продвинутой анимацией */}
        <div className={`relative transition-all duration-800 ease-out transform ${
          logoAnimated 
            ? 'scale-100 opacity-100 translate-y-0 rotate-0' 
            : 'scale-0 opacity-0 translate-y-12 -rotate-12'
        }`}>
          
          {/* Внешнее свечение логотипа */}
          <div className={`absolute inset-0 transition-opacity duration-1000 ${
            logoAnimated ? 'opacity-100' : 'opacity-0'
          }`}>
            <div className="w-28 h-28 mx-auto bg-gradient-to-br from-blue-500/20 via-purple-500/20 to-indigo-600/20 rounded-full blur-xl animate-pulse" 
                 style={{ animationDuration: '2s' }} />
          </div>
          
          {/* Основной логотип */}
          <div className="relative">
            <div className="w-24 h-24 mx-auto mb-8 bg-gradient-to-br from-blue-600 via-purple-600 to-indigo-700 rounded-2xl flex items-center justify-center shadow-2xl shadow-blue-500/25 transform hover:scale-105 transition-transform duration-300">
              
              {/* Иконка экспертов - группа людей */}
              <svg 
                className="w-14 h-14 text-white drop-shadow-lg" 
                fill="currentColor" 
                viewBox="0 0 24 24"
              >
                <path d="M16 4c0-1.11.89-2 2-2s2 .89 2 2-.89 2-2 2-2-.89-2-2zm4 18v-6h2.5l-2.54-7.63A3.014 3.014 0 0 0 17.06 7c-.8 0-1.54.37-2.01.97l-2.05 2.58c-.26.32-.26.8 0 1.12L15.5 14H17v8h3zM12.5 11.5c.83 0 1.5-.67 1.5-1.5s-.67-1.5-1.5-1.5S11 9.17 11 10s.67 1.5 1.5 1.5zM5.5 6c1.11 0 2-.89 2-2s-.89-2-2-2-2 .89-2 2 .89 2 2 2zm2.5 16v-7H9.5l-2.54-7.63A3.014 3.014 0 0 0 4.06 6c-.8 0-1.54.37-2.01.97L.5 9.55c-.26.32-.26.8 0 1.12L3 13.27V22h5z"/>
              </svg>
              
              {/* Внутренний блик */}
              <div className="absolute top-2 left-2 w-4 h-4 bg-white/30 rounded-full blur-sm" />
            </div>
          </div>
        </div>
        
        {/* Текстовый контент с улучшенной анимацией */}
        <div className={`text-center max-w-sm transition-all duration-700 ease-out transform ${
          contentVisible 
            ? 'opacity-100 translate-y-0' 
            : 'opacity-0 translate-y-8'
        }`}>
          
          {/* Главный заголовок */}
          <h1 className="text-4xl font-bold bg-gradient-to-r from-gray-900 via-blue-900 to-purple-900 bg-clip-text text-transparent dark:from-white dark:via-blue-100 dark:to-purple-100 mb-4 leading-tight font-['Inter',system-ui,sans-serif]">
            Ваш персональный совет экспертов 555
          </h1>
          
          {/* Персональное приветствие */}
          <div className="flex items-center justify-center mb-6">
            <span className="text-2xl mr-2">👋</span>
            <p className="text-xl font-medium text-gray-700 dark:text-gray-300">
              Привет, {userName}!
            </p>
          </div>
          
          {/* Описание возможностей */}
          <p className="text-base text-gray-600 dark:text-gray-400 mb-8 leading-relaxed font-['Inter',system-ui,sans-serif]">
            Получайте персональные консультации от AI-экспертов в любой области жизни. 
            Принимайте взвешенные решения и развивайтесь вместе с нами.
          </p>
          
          {/* Ключевые преимущества с иконками */}
          <div className="space-y-4 mb-10">
            {[
              { icon: '🧠', text: '5 уникальных экспертов' },
              { icon: '👥', text: 'Совещания для сложных вопросов' },
              { icon: '🔐', text: 'Полная приватность данных' }
            ].map((item, index) => (
              <div 
                key={index}
                className={`flex items-center justify-center text-sm text-gray-700 dark:text-gray-300 transition-all duration-500 transform ${
                  contentVisible ? 'translate-x-0 opacity-100' : 'translate-x-4 opacity-0'
                }`}
                style={{ transitionDelay: `${600 + index * 100}ms` }}
              >
                <span className="text-lg mr-3">{item.icon}</span>
                <span className="font-medium">{item.text}</span>
              </div>
            ))}
          </div>
        </div>
        
        {/* Кнопка "Начать" с премиальным дизайном */}
        <div className={`w-full max-w-sm transition-all duration-600 ease-out transform ${
          buttonsVisible 
            ? 'opacity-100 translate-y-0 scale-100' 
            : 'opacity-0 translate-y-6 scale-95'
        }`}>
          <button
            onClick={handleStartClick}
            onMouseEnter={() => setIsHovering(true)}
            onMouseLeave={() => setIsHovering(false)}
            className={`
              group relative w-full overflow-hidden
              bg-gradient-to-r from-blue-600 via-purple-600 to-indigo-700
              hover:from-blue-700 hover:via-purple-700 hover:to-indigo-800
              text-white font-semibold text-lg
              py-4 px-8 rounded-2xl
              shadow-2xl shadow-blue-500/25 hover:shadow-purple-500/25
              transform transition-all duration-300 ease-out
              hover:scale-[1.02] active:scale-[0.98]
              focus:outline-none focus:ring-4 focus:ring-blue-500/20
              ${isHovering ? 'shadow-2xl shadow-purple-500/30' : ''}
            `}
          >
            {/* Анимированный фоновый градиент */}
            <div className="absolute inset-0 bg-gradient-to-r from-blue-400/20 via-purple-400/20 to-indigo-500/20 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left" />
            
            {/* Содержимое кнопки */}
            <span className="relative flex items-center justify-center font-['Inter',system-ui,sans-serif]">
              Начать путешествие
              <svg 
                className={`w-6 h-6 ml-3 transition-transform duration-300 ${
                  isHovering ? 'translate-x-1' : ''
                }`} 
                fill="none" 
                stroke="currentColor" 
                viewBox="0 0 24 24"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M13 7l5 5m0 0l-5 5m5-5H6" />
              </svg>
            </span>
            
            {/* Эффект мерцания */}
            <div className={`absolute top-0 left-0 w-full h-full bg-gradient-to-r from-transparent via-white/10 to-transparent transform -skew-x-12 transition-transform duration-1000 ${
              isHovering ? 'translate-x-full' : '-translate-x-full'
            }`} />
          </button>
        </div>
        
        {/* Индикатор готовности внизу */}
        <div className={`absolute bottom-8 left-1/2 transform -translate-x-1/2 transition-all duration-800 ${
          buttonsVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
        }`}>
          <div className="flex items-center space-x-3 text-sm text-gray-500 dark:text-gray-400 font-['Inter',system-ui,sans-serif]">
            <div className="flex space-x-1">
              {[0, 1, 2].map((i) => (
                <div 
                  key={i}
                  className="w-2 h-2 bg-gradient-to-r from-blue-500 to-purple-600 rounded-full animate-pulse" 
                  style={{ 
                    animationDelay: `${i * 200}ms`,
                    animationDuration: '1.5s'
                  }} 
                />
              ))}
            </div>
            <span className="font-medium">Эксперты готовы к работе</span>
          </div>
        </div>
        
      </div>
    </div>
  )
}

export default WelcomeScreen 