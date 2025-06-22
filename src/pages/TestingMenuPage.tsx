/**
 * Тестовая страница для просмотра экранов онбординга
 * Позволяет быстро переходить между экранами для тестирования UI/UX
 */

import React from 'react'
import { useNavigate } from 'react-router-dom'

/**
 * Интерфейс для пункта меню тестирования
 */
interface TestMenuItem {
  id: string
  title: string
  description: string
  route: string
  icon: string
}

/**
 * Список экранов для тестирования
 */
const TEST_SCREENS: TestMenuItem[] = [
  {
    id: 'welcome',
    title: 'Приветственный экран',
    description: 'Splash screen с логотипом и анимациями',
    route: '/welcome',
    icon: '👋'
  },
  {
    id: 'interests',
    title: 'Выбор интересов',
    description: 'Экран выбора тем для персонализации',
    route: '/onboarding/expert-selection',
    icon: '🎯'
  },
  {
    id: 'experts',
    title: 'Знакомство с экспертами',
    description: 'Карусель экспертов для выбора первого',
    route: '/onboarding/expert-introduction',
    icon: '👥'
  },
  {
    id: 'homepage',
    title: 'Главная страница',
    description: 'Список экспертов (основной экран)',
    route: '/home',
    icon: '🏠'
  },
  {
    id: 'chat',
    title: 'Чат с экспертом',
    description: 'Страница диалога (тестовый эксперт)',
    route: '/chat/anna_business',
    icon: '💬'
  }
]

/**
 * Компонент тестового меню
 */
const TestingMenuPage: React.FC = () => {
  const navigate = useNavigate()
  
  /**
   * Обработчик перехода к тестовому экрану
   */
  const handleNavigateToScreen = (route: string) => {
    console.log('🧪 Переход к тестовому экрану:', route)
    
    // Сбрасываем флаг первого запуска для тестирования
    if (route === '/welcome') {
      localStorage.removeItem('sovetum_has_visited')
      localStorage.removeItem('sovetum_onboarding_completed')
    }
    
    // Переходим к выбранному экрану
    navigate(route, {
      state: {
        isTestMode: true,
        selectedInterests: ['money', 'career', 'business'] // Тестовые данные
      }
    })
  }
  
  /**
   * Сброс всех данных приложения
   */
  const handleResetAppData = () => {
    console.log('🔄 Сброс данных приложения для тестирования')
    
    // Очищаем localStorage
    const keysToRemove = [
      'sovetum_has_visited',
      'sovetum_onboarding_completed', 
      'sovetum_selected_interests',
      'sovetum_first_expert'
    ]
    
    keysToRemove.forEach(key => {
      localStorage.removeItem(key)
    })
    
    alert('✅ Данные приложения сброшены! Можно тестировать с чистого состояния.')
  }
  
  /**
   * Заполнение тестовыми данными
   */
  const handleFillTestData = () => {
    console.log('📋 Заполнение тестовыми данными')
    
    localStorage.setItem('sovetum_has_visited', 'true')
    localStorage.setItem('sovetum_onboarding_completed', 'true')
    localStorage.setItem('sovetum_selected_interests', JSON.stringify(['money', 'career', 'business', 'psychology']))
    localStorage.setItem('sovetum_first_expert', 'anna_business')
    
    alert('✅ Тестовые данные заполнены!')
  }
  
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-purple-50 dark:from-gray-900 dark:to-gray-800 p-6">
      <div className="max-w-md mx-auto">
        {/* Заголовок */}
        <div className="text-center mb-8">
          <h1 className="text-3xl font-bold text-gray-900 dark:text-white mb-2">
            🧪 Тестирование UI
          </h1>
          <p className="text-gray-600 dark:text-gray-400">
            Быстрый доступ ко всем экранам приложения
          </p>
        </div>
        
        {/* Кнопки управления данными */}
        <div className="mb-8 space-y-3">
          <button
            onClick={handleResetAppData}
            className="w-full bg-red-500 hover:bg-red-600 text-white font-medium py-3 px-4 rounded-xl transition-all duration-200"
          >
            🔄 Сбросить все данные
          </button>
          
          <button
            onClick={handleFillTestData}
            className="w-full bg-green-500 hover:bg-green-600 text-white font-medium py-3 px-4 rounded-xl transition-all duration-200"
          >
            📋 Заполнить тестовыми данными
          </button>
        </div>
        
        {/* Список экранов для тестирования */}
        <div className="space-y-4">
          {TEST_SCREENS.map((screen) => (
            <button
              key={screen.id}
              onClick={() => handleNavigateToScreen(screen.route)}
              className="w-full bg-white dark:bg-gray-800 rounded-2xl p-4 shadow-lg hover:shadow-xl transition-all duration-200 text-left group"
            >
              <div className="flex items-center space-x-4">
                {/* Иконка */}
                <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-purple-600 rounded-xl flex items-center justify-center text-2xl">
                  {screen.icon}
                </div>
                
                {/* Информация */}
                <div className="flex-1">
                  <h3 className="text-lg font-semibold text-gray-900 dark:text-white group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">
                    {screen.title}
                  </h3>
                  <p className="text-sm text-gray-600 dark:text-gray-400">
                    {screen.description}
                  </p>
                </div>
                
                {/* Стрелка */}
                <div className="text-gray-400 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </div>
              </div>
            </button>
          ))}
        </div>
        
        {/* Информация о состоянии */}
        <div className="mt-8 p-4 bg-white dark:bg-gray-800 rounded-xl shadow-sm">
          <h4 className="font-semibold text-gray-900 dark:text-white mb-2">
            📊 Текущее состояние:
          </h4>
          <div className="text-sm text-gray-600 dark:text-gray-400 space-y-1">
            <div>
              Посещал: {localStorage.getItem('sovetum_has_visited') ? '✅' : '❌'}
            </div>
            <div>
              Онбординг: {localStorage.getItem('sovetum_onboarding_completed') ? '✅' : '❌'}
            </div>
            <div>
              Интересы: {localStorage.getItem('sovetum_selected_interests') ? '✅' : '❌'}
            </div>
            <div>
              Первый эксперт: {localStorage.getItem('sovetum_first_expert') || '❌'}
            </div>
          </div>
        </div>
        
        {/* Подсказка */}
        <div className="mt-6 p-4 bg-blue-50 dark:bg-blue-900/20 rounded-xl">
          <p className="text-sm text-blue-700 dark:text-blue-300">
            💡 <strong>Совет:</strong> Начните с "Сброс данных", затем тестируйте экраны в порядке: Приветственный → Интересы → Эксперты
          </p>
        </div>
      </div>
    </div>
  )
}

export default TestingMenuPage 