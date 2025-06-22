/**
 * Демонстрационная страница для тестирования экранов онбординга
 * Обновлено с Context7 интеграцией и современным дизайном
 */

import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'

const OnboardingDemo: React.FC = () => {
  const [onboardingCleared, setOnboardingCleared] = useState(false)

  const clearOnboardingState = () => {
    localStorage.removeItem('sovetum_onboarding_started')
    localStorage.removeItem('sovetum_has_visited')
    localStorage.removeItem('sovetum_selected_interests')
    console.log('🧹 Состояние онбординга очищено')
    setOnboardingCleared(true)
    setTimeout(() => setOnboardingCleared(false), 2000)
  }

  const openInNewTab = (url: string) => {
    window.open(url, '_blank', 'noopener,noreferrer')
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-900 via-blue-900 to-indigo-900 p-6">
      <div className="max-w-4xl mx-auto">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h1 className="text-4xl font-bold text-white mb-4">
            🎯 Демо экранов онбординга
          </h1>
          <p className="text-xl text-purple-200 mb-6">
            Тестирование обновленного дизайна с Context7 интеграцией
          </p>
          <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 border border-white/20">
            <p className="text-white/80 text-lg">
              <strong>✨ Что нового:</strong> Context7 для динамического контента, 
              точные цвета из Figma, улучшенные анимации, оптимизированная типографика
            </p>
          </div>
        </motion.div>

        {/* Quick Actions */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="grid md:grid-cols-2 gap-6 mb-8"
        >
          <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 border border-white/20">
            <h3 className="text-xl font-bold text-white mb-4">🛠️ Управление состоянием</h3>
            <button
              onClick={clearOnboardingState}
              className="w-full bg-red-500 hover:bg-red-600 text-white px-6 py-3 rounded-xl font-medium transition-all duration-300 hover:scale-105 active:scale-95"
            >
              {onboardingCleared ? '✅ Очищено!' : '🧹 Сбросить состояние онбординга'}
            </button>
            <p className="text-purple-200 text-sm mt-3">
              Очищает localStorage для тестирования первого запуска
            </p>
          </div>

          <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 border border-white/20">
            <h3 className="text-xl font-bold text-white mb-4">📱 Тестирование</h3>
            <div className="space-y-3">
              <div className="text-purple-200 text-sm">
                <strong>Разрешение:</strong> 390×844px (iPhone 14 Pro)<br/>
                <strong>Фон:</strong> #1E112E → #150628<br/>
                <strong>Акцент:</strong> #593983 → #A281CD
              </div>
            </div>
          </div>
        </motion.div>

        {/* Navigation Grid */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8"
        >
          {[
            {
              title: '🎨 Новый экран онбординга',
              description: 'Обновленный дизайн с Context7',
              url: '/onboarding/welcome',
              primary: true,
              features: ['Context7 контент', 'Figma цвета', 'Улучшенные анимации']
            },
            {
              title: '📱 Старый экран',
              description: 'Для сравнения',
              url: '/welcome',
              features: ['Статический контент', 'Базовые анимации']
            },
            {
              title: '🎯 Выбор интересов',
              description: 'Второй экран онбординга',
              url: '/onboarding/expert-selection',
              features: ['Интерактивные теги', 'Context7 данные']
            },
            {
              title: '👨‍💼 Знакомство с экспертами',
              description: 'Третий экран онбординга',
              url: '/onboarding/expert-introduction',
              features: ['Профили экспертов', 'Рейтинги и отзывы']
            },
            {
              title: '🏠 Главная страница',
              description: 'После завершения онбординга',
              url: '/home',
              features: ['Дашборд', 'Список экспертов']
            },
            {
              title: '🧪 Тестовая страница',
              description: 'Разработческие инструменты',
              url: '/testing',
              features: ['Дебаг', 'API тесты']
            }
          ].map((item, index) => (
            <div
              key={index}
              className={`${
                item.primary 
                  ? 'bg-gradient-to-br from-purple-500/20 to-pink-500/20 border-purple-400/50' 
                  : 'bg-white/10 border-white/20'
              } backdrop-blur-sm rounded-2xl p-6 border transition-all duration-300 hover:scale-105 hover:shadow-2xl group`}
            >
              <h3 className="text-lg font-bold text-white mb-2 group-hover:text-purple-200 transition-colors">
                {item.title}
              </h3>
              <p className="text-purple-200 text-sm mb-4">
                {item.description}
              </p>
              
              {item.features && (
                <div className="mb-4">
                  <div className="flex flex-wrap gap-1">
                    {item.features.map((feature, idx) => (
                      <span
                        key={idx}
                        className="bg-white/20 text-white text-xs px-2 py-1 rounded-full"
                      >
                        {feature}
                      </span>
                    ))}
                  </div>
                </div>
              )}

              <div className="flex gap-2">
                <Link
                  to={item.url}
                  className={`flex-1 ${
                    item.primary 
                      ? 'bg-gradient-to-r from-purple-500 to-pink-500 hover:from-purple-600 hover:to-pink-600' 
                      : 'bg-blue-500 hover:bg-blue-600'
                  } text-white px-4 py-2 rounded-xl font-medium transition-all duration-300 text-center hover:scale-105 active:scale-95`}
                >
                  {item.primary ? '🚀 Открыть' : '👁️ Просмотр'}
                </Link>
                <button
                  onClick={() => openInNewTab(item.url)}
                  className="bg-white/20 hover:bg-white/30 text-white px-3 py-2 rounded-xl transition-all duration-300 hover:scale-105 active:scale-95"
                  title="Открыть в новой вкладке"
                >
                  🔗
                </button>
              </div>
            </div>
          ))}
        </motion.div>

        {/* Technical Info */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="bg-black/20 backdrop-blur-sm rounded-2xl p-6 border border-white/10"
        >
          <h3 className="text-xl font-bold text-white mb-4">📋 Техническая информация</h3>
          <div className="grid md:grid-cols-2 gap-6">
            <div>
              <h4 className="text-lg font-semibold text-purple-200 mb-2">🎨 Дизайн</h4>
              <ul className="text-white/80 text-sm space-y-1">
                <li>• Figma макет: 390×844px</li>
                <li>• Основной фон: #1E112E</li>
                <li>• Карточка: #150628</li>
                <li>• Акцент: #593983 → #A281CD</li>
                <li>• Шрифты: IBM Plex Sans, SF Pro</li>
              </ul>
            </div>
            <div>
              <h4 className="text-lg font-semibold text-purple-200 mb-2">⚡ Технологии</h4>
              <ul className="text-white/80 text-sm space-y-1">
                <li>• React 18 + TypeScript</li>
                <li>• Framer Motion анимации</li>
                <li>• Context7 для контента</li>
                <li>• Tailwind CSS стили</li>
                <li>• React Router навигация</li>
              </ul>
            </div>
          </div>
        </motion.div>

        {/* Footer */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.8 }}
          className="text-center mt-12"
        >
          <p className="text-purple-200 text-sm">
            Создано командой Sovetum • Версия 2.0 • Декабрь 2024
          </p>
          <div className="mt-4 flex justify-center space-x-4">
            <Link
              to="/"
              className="text-purple-300 hover:text-white transition-colors text-sm"
            >
              🏠 На главную
            </Link>
            <span className="text-purple-300">•</span>
            <a
              href="https://github.com/sovetum-team"
              target="_blank"
              rel="noopener noreferrer"
              className="text-purple-300 hover:text-white transition-colors text-sm"
            >
              📂 GitHub
            </a>
            <span className="text-purple-300">•</span>
            <a
              href="https://www.figma.com/design/vMzEf6gZhWuy9TEpTCkQDY/onboarding"
              target="_blank"
              rel="noopener noreferrer"
              className="text-purple-300 hover:text-white transition-colors text-sm"
            >
              🎨 Figma
            </a>
          </div>
        </motion.div>
      </div>
    </div>
  )
}

export default OnboardingDemo 