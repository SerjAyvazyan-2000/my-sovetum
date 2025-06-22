/**
 * Экран выбора интересов
 * Второй шаг в сценарии "Первое знакомство"
 * Позволяет пользователю выбрать интересующие темы
 */

import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'

/**
 * Интерфейс для темы интересов
 */
interface InterestTopic {
  id: string
  label: string
  emoji?: string
}

/**
 * Список доступных тем для выбора
 */
const INTEREST_TOPICS: InterestTopic[] = [
  { id: 'money', label: 'Деньги', emoji: '💰' },
  { id: 'career', label: 'Карьера', emoji: '🚀' },
  { id: 'business', label: 'Бизнес', emoji: '💼' },
  { id: 'marketing', label: 'Маркетинг', emoji: '📈' },
  { id: 'self-development', label: 'Саморазвитие', emoji: '🌱' },
  { id: 'analytics', label: 'Аналитика', emoji: '📊' },
  { id: 'productivity', label: 'Продуктивность', emoji: '⚡' },
  { id: 'languages', label: 'Иностранные языки', emoji: '🌍' },
  { id: 'psychology', label: 'Психология', emoji: '🧠' },
  { id: 'health', label: 'Здоровье', emoji: '💪' },
  { id: 'sport', label: 'Спорт', emoji: '🏃' }
]

/**
 * Компонент экрана выбора интересов
 */
const InterestSelectionScreen: React.FC = () => {
  const navigate = useNavigate()
  const [selectedInterests, setSelectedInterests] = useState<string[]>([])
  const [isAnimating, setIsAnimating] = useState(false)
  
  /**
   * Обработчик выбора/отмены интереса
   */
  const handleInterestToggle = (interestId: string) => {
    setSelectedInterests(prev => {
      if (prev.includes(interestId)) {
        // Убираем интерес из выбранных
        return prev.filter(id => id !== interestId)
      } else {
        // Добавляем интерес к выбранным
        return [...prev, interestId]
      }
    })
  }
  
  /**
   * Переход к следующему шагу - знакомство с экспертами
   */
  const handleContinue = () => {
    if (selectedInterests.length === 0) {
      return // Не даем продолжить без выбора интересов
    }
    
    setIsAnimating(true)
    console.log('🎯 Выбранные интересы:', selectedInterests)
    
    // Переходим к экрану знакомства с экспертами
    setTimeout(() => {
      navigate('/onboarding/expert-introduction', {
        state: { selectedInterests }
      })
    }, 300)
  }
  
  /**
   * Возврат к предыдущему экрану
   */
  const handleBack = () => {
    navigate(-1)
  }
  
  // Прогресс - 2 из 3 шагов
  const progress = (2 / 3) * 100
  
  return (
    <div className="min-h-screen bg-white dark:bg-gray-900 flex flex-col">
      {/* Header с кнопкой назад */}
      <div className="flex items-center p-4 pb-2">
        <button
          onClick={handleBack}
          className="w-10 h-10 flex items-center justify-center rounded-full hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors"
        >
          <svg className="w-6 h-6 text-gray-600 dark:text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
          </svg>
        </button>
      </div>
      
      {/* Основной контент */}
      <div className="flex-1 px-6 pt-4 pb-6">
        {/* Заголовок */}
        <div className="mb-8">
          <h1 className="text-2xl font-bold text-gray-900 dark:text-white mb-2 text-center">
            Что вас интересует?
          </h1>
          <p className="text-base text-gray-600 dark:text-gray-400 text-center leading-relaxed">
            Выберите темы, которые важны для вас. Это поможет нам подобрать подходящих экспертов
          </p>
        </div>
        
        {/* Сетка с чипсами интересов */}
        <div className="grid grid-cols-2 gap-3 mb-8">
          {INTEREST_TOPICS.map((topic) => {
            const isSelected = selectedInterests.includes(topic.id)
            
            return (
              <button
                key={topic.id}
                onClick={() => handleInterestToggle(topic.id)}
                className={`
                  group relative p-4 rounded-2xl border-2 transition-all duration-200 ease-out
                  ${isSelected 
                    ? 'border-blue-500 bg-blue-50 dark:bg-blue-900/20 shadow-lg shadow-blue-500/20' 
                    : 'border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-800 hover:border-gray-300 dark:hover:border-gray-600'
                  }
                  active:scale-95 transform
                `}
              >
                {/* Контент чипа */}
                <div className="flex items-center justify-center space-x-2">
                  {topic.emoji && (
                    <span className="text-lg">{topic.emoji}</span>
                  )}
                  <span className={`
                    text-sm font-medium
                    ${isSelected 
                      ? 'text-blue-700 dark:text-blue-300' 
                      : 'text-gray-700 dark:text-gray-300'
                    }
                  `}>
                    {topic.label}
                  </span>
                </div>
                
                {/* Индикатор выбора */}
                {isSelected && (
                  <div className="absolute top-2 right-2 w-5 h-5 bg-blue-500 rounded-full flex items-center justify-center">
                    <svg className="w-3 h-3 text-white" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                  </div>
                )}
              </button>
            )
          })}
        </div>
        
        {/* Счетчик выбранных тем */}
        {selectedInterests.length > 0 && (
          <div className="mb-6 text-center">
            <p className="text-sm text-gray-600 dark:text-gray-400">
              Выбрано тем: <span className="font-medium text-blue-600 dark:text-blue-400">{selectedInterests.length}</span>
            </p>
          </div>
        )}
      </div>
      
      {/* Нижняя панель с прогрессом и кнопкой */}
      <div className="p-6 border-t border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-900">
        {/* Прогресс-бар */}
        <div className="mb-4">
          <div className="flex justify-between items-center mb-2">
            <span className="text-xs text-gray-500 dark:text-gray-400">Шаг 2 из 3</span>
            <span className="text-xs text-gray-500 dark:text-gray-400">{Math.round(progress)}%</span>
          </div>
          <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-2">
            <div 
              className="bg-gradient-to-r from-blue-600 to-purple-600 h-2 rounded-full transition-all duration-500 ease-out"
              style={{ width: `${progress}%` }}
            />
          </div>
        </div>
        
        {/* Кнопка продолжить */}
        <button
          onClick={handleContinue}
          disabled={selectedInterests.length === 0 || isAnimating}
          className={`
            w-full py-4 px-6 rounded-xl font-medium transition-all duration-200 ease-out
            ${selectedInterests.length > 0 && !isAnimating
              ? 'bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white shadow-lg hover:shadow-xl transform hover:scale-[1.02] active:scale-[0.98]'
              : 'bg-gray-200 dark:bg-gray-700 text-gray-400 dark:text-gray-500 cursor-not-allowed'
            }
          `}
        >
          {isAnimating ? (
            <div className="flex items-center justify-center">
              <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin mr-2" />
              Загрузка...
            </div>
          ) : selectedInterests.length > 0 ? (
            `Продолжить (${selectedInterests.length})`
          ) : (
            'Выберите хотя бы одну тему'
          )}
        </button>
      </div>
    </div>
  )
}

export default InterestSelectionScreen 