/**
 * Экран знакомства с экспертами
 * Третий шаг в сценарии "Первое знакомство"
 * Карусель с экспертами для выбора первого
 */

import React, { useState } from 'react'
import { useNavigate, useLocation } from 'react-router-dom'

/**
 * Интерфейс для эксперта
 */
interface Expert {
  id: string
  name: string
  title: string
  description: string
  avatar: string
  specialties: string[]
  experience: string
  gradientFrom: string
  gradientTo: string
}

/**
 * Данные экспертов для карусели
 */
const EXPERTS: Expert[] = [
  {
    id: 'anna_business',
    name: 'Елена Фокус',
    title: 'Бизнес-коуч',
    description: 'Бизнес-коуч с 10-летним стажем. Поможет найти точки роста для вашего дела',
    avatar: '👩‍💼',
    specialties: ['Бизнес', 'Стратегия', 'Развитие'],
    experience: '10+ лет',
    gradientFrom: '#2563EB',
    gradientTo: '#60A5FA'
  },
  {
    id: 'dmitry_finance',
    name: 'Виктор Капиталов',
    title: 'Финансовый консультант',
    description: 'Эксперт по инвестициям и личным финансам. Научит управлять деньгами эффективно',
    avatar: '👨‍💼',
    specialties: ['Инвестиции', 'Бюджет', 'Планирование'],
    experience: '8+ лет',
    gradientFrom: '#10B981',
    gradientTo: '#34D399'
  },
  {
    id: 'elena_psychology',
    name: 'Елена Психологова',
    title: 'Психолог-коуч',
    description: 'Поможет разобраться с внутренними блоками и найти гармонию в жизни',
    avatar: '👩‍⚕️',
    specialties: ['Психология', 'Коучинг', 'Развитие'],
    experience: '12+ лет',
    gradientFrom: '#7C3AED',
    gradientTo: '#A78BFA'
  },
  {
    id: 'maxim_tech',
    name: 'Максим Техников',
    title: 'IT-ментор',
    description: 'Разработчик с опытом создания продуктов. Поможет в IT-карьере и технологиях',
    avatar: '👨‍💻',
    specialties: ['Программирование', 'Карьера', 'Продукты'],
    experience: '15+ лет',
    gradientFrom: '#3B82F6',
    gradientTo: '#93C5FD'
  },
  {
    id: 'anna_career',
    name: 'Анна Карьерова',
    title: 'Карьерный консультант',
    description: 'Специалист по развитию карьеры. Поможет найти путь к работе мечты',
    avatar: '👩‍🎓',
    specialties: ['Карьера', 'HR', 'Развитие'],
    experience: '7+ лет',
    gradientFrom: '#F59E0B',
    gradientTo: '#FCD34D'
  }
]

/**
 * Компонент экрана знакомства с экспертами
 */
const ExpertIntroductionScreen: React.FC = () => {
  const navigate = useNavigate()
  const location = useLocation()
  const [currentExpertIndex, setCurrentExpertIndex] = useState(0)
  const [isAnimating, setIsAnimating] = useState(false)
  
  // Получаем выбранные интересы из предыдущего экрана
  const selectedInterests = location.state?.selectedInterests || []
  
  const currentExpert = EXPERTS[currentExpertIndex]
  
  // Проверяем, что эксперт существует
  if (!currentExpert) {
    return (
      <div className="min-h-screen bg-white dark:bg-gray-900 flex items-center justify-center">
        <div className="text-center">
          <p className="text-gray-600 dark:text-gray-400">Эксперт не найден</p>
          <button
            onClick={() => navigate(-1)}
            className="mt-4 px-4 py-2 bg-blue-600 text-white rounded-lg"
          >
            Назад
          </button>
        </div>
      </div>
    )
  }
  
  /**
   * Переход к следующему эксперту
   */
  const nextExpert = () => {
    if (currentExpertIndex < EXPERTS.length - 1) {
      setIsAnimating(true)
      setTimeout(() => {
        setCurrentExpertIndex(prev => prev + 1)
        setIsAnimating(false)
      }, 150)
    }
  }
  
  /**
   * Переход к предыдущему эксперту
   */
  const prevExpert = () => {
    if (currentExpertIndex > 0) {
      setIsAnimating(true)
      setTimeout(() => {
        setCurrentExpertIndex(prev => prev - 1)
        setIsAnimating(false)
      }, 150)
    }
  }
  
  /**
   * Выбор эксперта и завершение онбординга
   */
  const handleSelectExpert = () => {
    console.log('🎯 Выбран эксперт:', currentExpert.id)
    console.log('📋 Интересы пользователя:', selectedInterests)
    
    // Отмечаем, что пользователь завершил онбординг
    localStorage.setItem('sovetum_has_visited', 'true')
    localStorage.setItem('sovetum_onboarding_completed', 'true')
    localStorage.setItem('sovetum_selected_interests', JSON.stringify(selectedInterests))
    localStorage.setItem('sovetum_first_expert', currentExpert.id)
    
    console.log('✅ Онбординг завершен успешно')
    
    // Переходим к чату с выбранным экспертом
    navigate(`/chat/${currentExpert.id}`, {
      state: { 
        isFirstTime: true,
        selectedInterests 
      }
    })
  }
  
  /**
   * Возврат к предыдущему экрану
   */
  const handleBack = () => {
    navigate(-1)
  }
  
  // Прогресс - 3 из 3 шагов
  const progress = 100
  
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
      <div className="flex-1 px-6 pt-4 pb-6 flex flex-col">
        {/* Заголовок */}
        <div className="mb-8 text-center">
          <h1 className="text-2xl font-bold text-gray-900 dark:text-white mb-2">
            Знакомство с экспертами
          </h1>
          <p className="text-base text-gray-600 dark:text-gray-400 leading-relaxed">
            Выберите эксперта для первого разговора. Позже вы сможете общаться со всеми
          </p>
        </div>
        
        {/* Карусель экспертов */}
        <div className="flex-1 flex flex-col items-center justify-center relative">
          {/* Навигационные стрелки */}
          <div className="flex items-center justify-between w-full mb-8">
            <button
              onClick={prevExpert}
              disabled={currentExpertIndex === 0}
              className={`
                w-12 h-12 rounded-full flex items-center justify-center transition-all duration-200
                ${currentExpertIndex === 0 
                  ? 'bg-gray-100 dark:bg-gray-800 text-gray-400 cursor-not-allowed' 
                  : 'bg-white dark:bg-gray-800 shadow-lg hover:shadow-xl text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white active:scale-95'
                }
              `}
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
              </svg>
            </button>
            
            <button
              onClick={nextExpert}
              disabled={currentExpertIndex === EXPERTS.length - 1}
              className={`
                w-12 h-12 rounded-full flex items-center justify-center transition-all duration-200
                ${currentExpertIndex === EXPERTS.length - 1 
                  ? 'bg-gray-100 dark:bg-gray-800 text-gray-400 cursor-not-allowed' 
                  : 'bg-white dark:bg-gray-800 shadow-lg hover:shadow-xl text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white active:scale-95'
                }
              `}
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </button>
          </div>
          
          {/* Карточка эксперта */}
          <div className={`
            w-full max-w-sm mx-auto transition-all duration-300 ease-out
            ${isAnimating ? 'opacity-50 scale-95' : 'opacity-100 scale-100'}
          `}>
            <div className="bg-white dark:bg-gray-800 rounded-3xl shadow-xl p-8 text-center">
              {/* Аватар эксперта */}
              <div 
                className="w-32 h-32 mx-auto mb-6 rounded-3xl flex items-center justify-center text-6xl shadow-lg"
                style={{
                  background: `linear-gradient(135deg, ${currentExpert.gradientFrom}, ${currentExpert.gradientTo})`
                }}
              >
                {currentExpert.avatar}
              </div>
              
              {/* Информация об эксперте */}
              <h2 className="text-xl font-bold text-gray-900 dark:text-white mb-2">
                {currentExpert.name}
              </h2>
              
              <p className="text-base font-medium text-gray-600 dark:text-gray-400 mb-4">
                {currentExpert.title}
              </p>
              
              <p className="text-sm text-gray-700 dark:text-gray-300 leading-relaxed mb-6">
                {currentExpert.description}
              </p>
              
              {/* Специализации */}
              <div className="flex flex-wrap justify-center gap-2 mb-4">
                {currentExpert.specialties.map((specialty, index) => (
                  <span 
                    key={index}
                    className="px-3 py-1 text-xs font-medium rounded-full bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300"
                  >
                    {specialty}
                  </span>
                ))}
              </div>
              
              {/* Опыт */}
              <p className="text-xs text-gray-500 dark:text-gray-400 mb-6">
                Опыт: {currentExpert.experience}
              </p>
            </div>
          </div>
          
          {/* Индикаторы карусели */}
          <div className="flex items-center space-x-2 mt-8">
            {EXPERTS.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentExpertIndex(index)}
                className={`
                  w-2 h-2 rounded-full transition-all duration-200
                  ${index === currentExpertIndex 
                    ? 'bg-blue-500 w-6' 
                    : 'bg-gray-300 dark:bg-gray-600'
                  }
                `}
              />
            ))}
          </div>
        </div>
      </div>
      
      {/* Нижняя панель с прогрессом и кнопкой */}
      <div className="p-6 border-t border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-900">
        {/* Прогресс-бар */}
        <div className="mb-4">
          <div className="flex justify-between items-center mb-2">
            <span className="text-xs text-gray-500 dark:text-gray-400">Шаг 3 из 3</span>
            <span className="text-xs text-gray-500 dark:text-gray-400">{progress}%</span>
          </div>
          <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-2">
            <div 
              className="bg-gradient-to-r from-blue-600 to-purple-600 h-2 rounded-full transition-all duration-500 ease-out"
              style={{ width: `${progress}%` }}
            />
          </div>
        </div>
        
        {/* Кнопка выбрать эксперта */}
        <button
          onClick={handleSelectExpert}
          className="w-full bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white font-medium py-4 px-6 rounded-xl shadow-lg hover:shadow-xl transform hover:scale-[1.02] active:scale-[0.98] transition-all duration-200 ease-out"
        >
          <span className="flex items-center justify-center">
            Выбрать первого эксперта
            <svg className="w-5 h-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </span>
        </button>
      </div>
    </div>
  )
}

export default ExpertIntroductionScreen 