/**
 * Главная страница с приветствием и списком доступных экспертов
 * Интегрирована с Telegram Web App API для получения данных экспертов
 */

import React, { useState, useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import { useLaunchParams } from '@telegram-apps/sdk-react'
import Loading from '../components/common/Loading'
import { expertService, Expert } from '../services/expertService'

/**
 * Главная страница приложения
 * Отображает список доступных экспертов для консультации
 */
const HomePage: React.FC = () => {
  const navigate = useNavigate()
  const launchParams = useLaunchParams()
  
  // Состояние компонента
  const [experts, setExperts] = useState<Expert[]>([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState<string | null>(null)
  const [userSubscription, setUserSubscription] = useState<string>('free')
  
  /**
   * Загружает список экспертов с backend API
   */
  const loadExperts = async () => {
    try {
      setLoading(true)
      setError(null)
      
      console.log('📥 Загрузка списка экспертов с Django backend...')
      
      // Используем реальный API вместо заглушек
      const response = await expertService.getExperts()
      
      setExperts(response.experts)
      setUserSubscription(response.user_subscription)
      
      console.log('✅ Экспертов загружено с backend:', response.experts.length)
      console.log('👤 Подписка пользователя:', response.user_subscription)
      
    } catch (err: any) {
      console.error('❌ Ошибка загрузки экспертов:', err)
      setError(err.message || 'Не удалось загрузить список экспертов. Попробуйте позже.')
      
      // Fallback: используем локальные данные при ошибке API
      const fallbackExperts: Expert[] = [
        {
          id: 1,
          name: 'Александр Бизнесов',
          role: 'Бизнес-консультант',
          description: 'Опытный предприниматель и стратег. Помогу с планированием бизнеса, анализом рынка и развитием компании.',
          expertise_areas: ['business', 'entrepreneurship', 'strategy'],
          total_conversations: 0,
          total_messages: 0,
          average_rating: 0,
          required_subscription: 'free',
          is_available: true
        },
        {
          id: 2,
          name: 'Елена Психологова',
          role: 'Психолог-консультант',
          description: 'Помогу разобраться с личными вопросами, отношениями и эмоциональными проблемами.',
          expertise_areas: ['psychology', 'relationships', 'mental_health'],
          total_conversations: 0,
          total_messages: 0,
          average_rating: 0,
          required_subscription: 'free',
          is_available: true
        },
        {
          id: 3,
          name: 'Дмитрий Финансов',
          role: 'Финансовый советник',
          description: 'Консультации по инвестициям, планированию бюджета и финансовой грамотности.',
          expertise_areas: ['finance', 'investing', 'budgeting'],
          total_conversations: 0,
          total_messages: 0,
          average_rating: 0,
          required_subscription: 'pro',
          is_available: true
        },
        {
          id: 4,
          name: 'Анна Карьерова',
          role: 'Карьерный коуч',
          description: 'Помогу с выбором профессии, поиском работы и карьерным развитием.',
          expertise_areas: ['career', 'job_search', 'professional_development'],
          total_conversations: 0,
          total_messages: 0,
          average_rating: 0,
          required_subscription: 'free',
          is_available: true
        },
        {
          id: 5,
          name: 'Максим Техников',
          role: 'IT-эксперт',
          description: 'Консультации по технологиям, программированию и IT-карьере.',
          expertise_areas: ['technology', 'programming', 'it_career'],
          total_conversations: 0,
          total_messages: 0,
          average_rating: 0,
          required_subscription: 'pro',
          is_available: true
        }
      ]
      
      setExperts(fallbackExperts)
      console.log('🔄 Использованы fallback данные экспертов')
      
    } finally {
      setLoading(false)
    }
  }
  
  /**
   * Обработчик выбора эксперта
   * @param expert - выбранный эксперт
   */
  const handleExpertSelect = async (expert: Expert) => {
    console.log('🎯 Выбран эксперт:', expert.name)
    
    // Проверяем доступность эксперта
    if (!expert.is_available) {
      console.warn('⚠️ Эксперт недоступен:', expert.name)
      return
    }
    
    // Проверяем подписку для Pro экспертов
    if (expert.required_subscription === 'pro' && userSubscription === 'free') {
      console.warn('💰 Нужна Pro подписка для эксперта:', expert.name)
      // Здесь можно показать popup с информацией о подписке
      return
    }
    
    navigate(`/chat/${expert.id}`)
  }
  
  /**
   * Получает иконку эксперта по специализации
   * @param expertiseAreas - области знаний эксперта
   */
  const getExpertIcon = (expertiseAreas: string[]) => {
    const iconMap: { [key: string]: string } = {
      business: '👔',
      entrepreneurship: '🚀',
      psychology: '🧠',
      relationships: '💝',
      finance: '💰',
      investing: '📈',
      technology: '💻',
      programming: '⌨️',
      career: '📈',
      job_search: '🔍'
    }
    
    // Находим первую подходящую иконку
    for (const area of expertiseAreas) {
      if (iconMap[area]) {
        return iconMap[area]
      }
    }
    
    return '🎯' // Иконка по умолчанию
  }
  
  /**
   * Получает бейдж подписки
   * @param requiredSubscription - требуемая подписка
   */
  const getSubscriptionBadge = (requiredSubscription: string) => {
    switch (requiredSubscription) {
      case 'pro':
        return { text: 'PRO', className: 'bg-yellow-100 text-yellow-800' }
      case 'premium':
        return { text: 'PREMIUM', className: 'bg-purple-100 text-purple-800' }
      default:
        return { text: 'FREE', className: 'bg-green-100 text-green-800' }
    }
  }
  
  // Загружаем экспертов при монтировании компонента
  useEffect(() => {
    loadExperts()
  }, [])
  
  // Показываем состояние загрузки
  if (loading) {
    return (
      <div className="flex items-center justify-center min-h-screen">
        <Loading text="Загрузка экспертов..." />
      </div>
    )
  }
  
  // Показываем ошибку
  if (error && experts.length === 0) {
    return (
      <div className="flex flex-col items-center justify-center min-h-screen telegram-spacing text-center">
        <div className="text-4xl mb-4">😔</div>
        <h2 className="text-lg font-bold mb-2">Ошибка загрузки</h2>
        <p className="text-sm tg-hint mb-4">{error}</p>
        <button 
          onClick={loadExperts}
          className="tg-button"
        >
          Попробовать снова
        </button>
      </div>
    )
  }
  
  return (
    <div className="animate-fade-in">
      {/* Заголовок и приветствие */}
      <div className="text-center mb-6">
        <h1 
          className="text-2xl font-bold mb-2"
          style={{ color: 'var(--tg-theme-text-color, #000000)' }}
        >
          Совет Экспертов
        </h1>
        <p 
          className="text-sm"
          style={{ color: 'var(--tg-theme-hint-color, #999999)' }}
        >
          Выберите эксперта для консультации
        </p>
        
        {/* Показываем статус подписки */}
        {userSubscription && (
          <div className="mt-2">
            <span 
              className={`
                inline-flex 
                items-center 
                px-2 
                py-1 
                text-xs 
                rounded-full 
                font-medium
                ${getSubscriptionBadge(userSubscription).className}
              `}
            >
              Ваша подписка: {getSubscriptionBadge(userSubscription).text}
            </span>
          </div>
        )}
      </div>
      
      {/* Предупреждение об ошибке API (если fallback данные) */}
      {error && experts.length > 0 && (
        <div className="mb-4 p-3 rounded-lg border border-yellow-200 bg-yellow-50">
          <p className="text-sm text-yellow-800">
            ⚠️ Проблемы с подключением к серверу. Показаны локальные данные.
          </p>
        </div>
      )}
      
      {/* Список экспертов */}
      <div className="space-y-3">
        {experts.map((expert) => {
          const subscriptionBadge = getSubscriptionBadge(expert.required_subscription)
          const isAccessible = expert.is_available && 
            (expert.required_subscription === 'free' || userSubscription !== 'free')
          
          return (
            <div
              key={expert.id}
              onClick={() => handleExpertSelect(expert)}
              className={`
                card 
                cursor-pointer
                transition-all
                duration-200
                ${isAccessible 
                  ? 'hover:shadow-lg transform hover:scale-[1.02]' 
                  : 'opacity-60 cursor-not-allowed'
                }
              `}
            >
              <div className="flex items-start space-x-3">
                {/* Аватар эксперта */}
                <div 
                  className="
                    w-12 
                    h-12 
                    rounded-full 
                    flex 
                    items-center 
                    justify-center 
                    text-2xl
                    flex-shrink-0
                  "
                  style={{
                    backgroundColor: isAccessible 
                      ? 'var(--tg-theme-button-color, #2481cc)' 
                      : 'var(--tg-theme-hint-color, #999999)',
                    color: '#ffffff'
                  }}
                >
                  {expert.avatar_url ? (
                    <img 
                      src={expert.avatar_url} 
                      alt={expert.name}
                      className="w-full h-full rounded-full object-cover"
                    />
                  ) : (
                    getExpertIcon(expert.expertise_areas)
                  )}
                </div>
                
                {/* Информация об эксперте */}
                <div className="flex-1 min-w-0">
                  <div className="flex items-center justify-between mb-1">
                    <h3 
                      className="font-semibold text-sm"
                      style={{ color: 'var(--tg-theme-text-color, #000000)' }}
                    >
                      {expert.name}
                    </h3>
                    
                    {/* Бейдж уровня подписки */}
                    <span 
                      className={`
                        px-2 
                        py-1 
                        text-xs 
                        rounded-full 
                        font-medium
                        ${subscriptionBadge.className}
                      `}
                    >
                      {subscriptionBadge.text}
                    </span>
                  </div>
                  
                  <p 
                    className="text-xs font-medium mb-2"
                    style={{ color: 'var(--tg-theme-accent-text-color, #2481cc)' }}
                  >
                    {expert.role}
                  </p>
                  
                  <p 
                    className="text-xs leading-relaxed mb-2"
                    style={{ color: 'var(--tg-theme-hint-color, #999999)' }}
                  >
                    {expert.description}
                  </p>
                  
                  {/* Статистика эксперта */}
                  {(expert.total_conversations > 0 || expert.average_rating > 0) && (
                    <div className="flex items-center space-x-3 text-xs">
                      {expert.total_conversations > 0 && (
                        <span style={{ color: 'var(--tg-theme-hint-color, #999999)' }}>
                          💬 {expert.total_conversations} диалогов
                        </span>
                      )}
                      {expert.average_rating > 0 && (
                        <span style={{ color: 'var(--tg-theme-hint-color, #999999)' }}>
                          ⭐ {expert.average_rating.toFixed(1)}
                        </span>
                      )}
                    </div>
                  )}
                  
                  {/* Предупреждение о недоступности */}
                  {!isAccessible && expert.required_subscription !== 'free' && userSubscription === 'free' && (
                    <p className="text-xs text-orange-600 mt-1">
                      🔒 Требуется {subscriptionBadge.text} подписка
                    </p>
                  )}
                </div>
                
                {/* Стрелка */}
                <div 
                  className="text-lg"
                  style={{ color: 'var(--tg-theme-hint-color, #999999)' }}
                >
                  {isAccessible ? '→' : '🔒'}
                </div>
              </div>
            </div>
          )
        })}
      </div>
      
      {/* Информация о пользователе из Telegram (в dev режиме) */}
      {import.meta.env.DEV && launchParams && (
        <div className="mt-6 p-3 rounded text-xs border-t">
          <details>
            <summary 
              className="cursor-pointer font-medium"
              style={{ color: 'var(--tg-theme-link-color, #2481cc)' }}
            >
              Debug: Telegram данные
            </summary>
            <pre 
              className="mt-2 text-xs overflow-auto"
              style={{ color: 'var(--tg-theme-hint-color, #999999)' }}
            >
              {JSON.stringify(launchParams, null, 2)}
            </pre>
          </details>
        </div>
      )}
    </div>
  )
}

export default HomePage