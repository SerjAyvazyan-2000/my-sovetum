/**
 * Универсальный хук для интеграции Context7 в Telegram Mini App
 * Предоставляет методы для загрузки актуальной информации и обогащения контента
 * 
 * @author Sovetum Team
 * @version 1.0
 */

import { useState, useEffect, useCallback, useRef } from 'react'

// Типы для Context7 интеграции
// interface Context7Response<T = any> {
//   data: T
//   success: boolean
//   error?: string
//   timestamp: number
// }

interface Context7Options {
  libraryId: string
  topic?: string
  tokens?: number
  cacheTime?: number // в миллисекундах, по умолчанию 5 минут
}

interface UseContext7Result<T = any> {
  data: T | null
  loading: boolean
  error: string | null
  refetch: () => Promise<void>
  clearCache: () => void
}

// Кэш для Context7 данных
const context7Cache = new Map<string, {
  data: any
  timestamp: number
  expiry: number
}>()

/**
 * Основной хук для работы с Context7
 * @param options - конфигурация для Context7 запроса
 * @returns объект с данными, состоянием загрузки и методами управления
 */
export function useContext7<T = any>(options: Context7Options): UseContext7Result<T> {
  const [data, setData] = useState<T | null>(null)
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState<string | null>(null)
  
  // const { libraryId, topic, tokens = 5000, cacheTime = 5 * 60 * 1000 } = options
  const optionsRef = useRef(options)
  
  // Обновляем ref при изменении опций
  useEffect(() => {
    optionsRef.current = options
  }, [options])
  
  /**
   * Генерирует ключ кэша на основе параметров запроса
   */
  const getCacheKey = useCallback((opts: Context7Options): string => {
    return `${opts.libraryId}-${opts.topic || 'default'}-${opts.tokens}`
  }, [])
  
  /**
   * Проверяет актуальность кэшированных данных
   */
  const isCacheValid = useCallback((cacheKey: string): boolean => {
    const cached = context7Cache.get(cacheKey)
    if (!cached) return false
    
    return Date.now() < cached.expiry
  }, [])
  
  /**
   * Загружает данные из Context7 API
   */
  const fetchContext7Data = useCallback(async (opts: Context7Options): Promise<T | null> => {
    const cacheKey = getCacheKey(opts)
    
    // Проверяем кэш
    if (isCacheValid(cacheKey)) {
      const cached = context7Cache.get(cacheKey)
      console.log('📦 Context7: Данные загружены из кэша для', opts.libraryId)
      return cached!.data
    }
    
    try {
      console.log('🌐 Context7: Загрузка данных для', opts.libraryId, opts.topic || 'общие данные')
      
      // Здесь будет реальный API вызов к Context7
      // Пока используем заглушку с реалистичными данными
      const mockResponse = await fetchMockContext7Data(opts) as T
      
      // Кэшируем результат
      context7Cache.set(cacheKey, {
        data: mockResponse,
        timestamp: Date.now(),
        expiry: Date.now() + opts.cacheTime!
      })
      
      console.log('✅ Context7: Данные успешно загружены и закэшированы')
      return mockResponse

    } catch (err: any) {
      console.error('❌ Context7: Ошибка загрузки данных:', err)
      throw new Error(err.message || 'Не удалось загрузить данные из Context7')
    }
  }, [getCacheKey, isCacheValid])
  
  /**
   * Основная функция загрузки данных
   */
  const loadData = useCallback(async () => {
    if (loading) return // Предотвращаем множественные запросы
    
    setLoading(true)
    setError(null)
    
    try {
      const result = await fetchContext7Data(optionsRef.current)
      setData(result)
    } catch (err: any) {
      setError(err.message)
      setData(null)
    } finally {
      setLoading(false)
    }
  }, [fetchContext7Data, loading])
  
  /**
   * Функция для принудительного обновления данных
   */
  const refetch = useCallback(async () => {
    const cacheKey = getCacheKey(optionsRef.current)
    context7Cache.delete(cacheKey) // Очищаем кэш
    await loadData()
  }, [getCacheKey, loadData])
  
  /**
   * Очистка кэша для текущего запроса
   */
  const clearCache = useCallback(() => {
    const cacheKey = getCacheKey(optionsRef.current)
    context7Cache.delete(cacheKey)
    console.log('🗑️ Context7: Кэш очищен для', optionsRef.current.libraryId)
  }, [getCacheKey])
  
  // Загружаем данные при монтировании или изменении опций
  useEffect(() => {
    loadData()
  }, [loadData])
  
  return {
    data,
    loading,
    error,
    refetch,
    clearCache
  }
}

/**
 * Специализированные хуки для разных типов данных
 */

/**
 * Хук для загрузки информации об экспертах
 */
export function useContext7Experts() {
  return useContext7<ExpertEnrichmentData>({
    libraryId: '/experts/psychology',
    topic: 'expert profiles and statistics',
    tokens: 3000,
    cacheTime: 10 * 60 * 1000 // 10 минут кэш для экспертов
  })
}

/**
 * Хук для загрузки актуальных советов и рекомендаций
 */
export function useContext7Tips(category?: string) {
  return useContext7<TipsData>({
    libraryId: '/lifestyle/tips',
    topic: category ? `tips for ${category}` : 'general life tips',
    tokens: 2000,
    cacheTime: 30 * 60 * 1000 // 30 минут кэш для советов
  })
}

/**
 * Хук для загрузки статистики и аналитики
 */
export function useContext7Analytics() {
  return useContext7<AnalyticsData>({
    libraryId: '/analytics/insights',
    topic: 'user behavior and app analytics',
    tokens: 4000,
    cacheTime: 2 * 60 * 1000 // 2 минуты кэш для аналитики
  })
}

/**
 * Хук для загрузки мотивационного контента
 */
export function useContext7Motivation() {
  return useContext7<MotivationData>({
    libraryId: '/psychology/motivation',
    topic: 'motivational quotes and success stories',
    tokens: 1500,
    cacheTime: 60 * 60 * 1000 // 1 час кэш для мотивации
  })
}

// Типы данных для специализированных хуков
interface ExpertEnrichmentData {
  topExperts: Array<{
    id: number
    name: string
    specialization: string
    rating: number
    responseTime: string
    successStories: number
  }>
  categories: Array<{
    id: string
    name: string
    icon: string
    expertsCount: number
    averageRating: number
  }>
  trending: {
    topics: string[]
    experts: number[]
  }
}

interface TipsData {
  dailyTip: {
    title: string
    content: string
    author: string
    category: string
  }
  categoryTips: Array<{
    title: string
    preview: string
    readTime: string
    difficulty: 'easy' | 'medium' | 'hard'
  }>
  trending: string[]
}

interface AnalyticsData {
  userStats: {
    totalSessions: number
    averageRating: number
    favoriteCategories: string[]
    timeSpent: number
  }
  appStats: {
    activeExperts: number
    totalConsultations: number
    satisfactionRate: number
  }
  insights: Array<{
    type: 'tip' | 'warning' | 'achievement'
    message: string
    actionable: boolean
  }>
}

interface MotivationData {
  quote: {
    text: string
    author: string
    category: string
  }
  successStory: {
    title: string
    preview: string
    outcome: string
    timeframe: string
  }
  challenges: Array<{
    title: string
    description: string
    difficulty: number
    reward: string
  }>
}

/**
 * Заглушка для Context7 API (временная реализация)
 * В продакшене будет заменена на реальные вызовы Context7
 */
async function fetchMockContext7Data<T>(options: Context7Options): Promise<T> {
  // Симулируем задержку сети
  await new Promise(resolve => setTimeout(resolve, 500 + Math.random() * 1000))
  
  // Возвращаем моковые данные в зависимости от libraryId
  switch (options.libraryId) {
    case '/experts/psychology':
      return {
        topExperts: [
          {
            id: 1,
            name: 'Александр Бизнесов',
            specialization: 'Бизнес-стратегия',
            rating: 4.9,
            responseTime: '< 5 мин',
            successStories: 127
          },
          {
            id: 2,
            name: 'Елена Психологова',
            specialization: 'Личностный рост',
            rating: 4.8,
            responseTime: '< 10 мин',
            successStories: 89
          },
          {
            id: 3,
            name: 'Дмитрий Финансов',
            specialization: 'Инвестиции',
            rating: 4.9,
            responseTime: '< 3 мин',
            successStories: 156
          }
        ],
        categories: [
          {
            id: 'business',
            name: 'Бизнес и предпринимательство',
            icon: '👔',
            expertsCount: 12,
            averageRating: 4.7
          },
          {
            id: 'psychology',
            name: 'Психология и отношения',
            icon: '🧠',
            expertsCount: 8,
            averageRating: 4.8
          },
          {
            id: 'finance',
            name: 'Финансы и инвестиции',
            icon: '💰',
            expertsCount: 6,
            averageRating: 4.9
          }
        ],
        trending: {
          topics: ['стартап', 'инвестиции', 'мотивация', 'продуктивность'],
          experts: [1, 3, 2]
        }
      } as T
      
    case '/lifestyle/tips':
      return {
        dailyTip: {
          title: 'Правило 2 минут',
          content: 'Если задача займет менее 2 минут - выполните её сразу. Это поможет избежать накопления мелких дел.',
          author: 'Дэвид Аллен',
          category: 'Продуктивность'
        },
        categoryTips: [
          {
            title: 'Как начать утро продуктивно',
            preview: 'Простые шаги для энергичного начала дня',
            readTime: '3 мин',
            difficulty: 'easy'
          },
          {
            title: 'Управление временем в цифровую эпоху',
            preview: 'Техники фокусировки среди цифровых отвлечений',
            readTime: '7 мин',
            difficulty: 'medium'
          }
        ],
        trending: ['фокус', 'привычки', 'тайм-менеджмент']
      } as T
      
    case '/analytics/insights':
      return {
        userStats: {
          totalSessions: 23,
          averageRating: 4.6,
          favoriteCategories: ['business', 'psychology'],
          timeSpent: 340 // минут
        },
        appStats: {
          activeExperts: 26,
          totalConsultations: 1247,
          satisfactionRate: 0.94
        },
        insights: [
          {
            type: 'tip',
            message: 'Вы чаще обращаетесь к экспертам в вечернее время. Попробуйте утренние консультации для лучшей продуктивности.',
            actionable: true
          },
          {
            type: 'achievement',
            message: 'Поздравляем! Вы достигли 20+ сессий консультаций.',
            actionable: false
          }
        ]
      } as T
      
    case '/psychology/motivation':
      return {
        quote: {
          text: 'Успех - это способность идти от неудачи к неудаче, не теряя энтузиазма.',
          author: 'Уинстон Черчилль',
          category: 'Успех'
        },
        successStory: {
          title: 'От идеи к стартапу за 3 месяца',
          preview: 'История о том, как консультации с экспертами помогли запустить IT-проект',
          outcome: 'Успешный запуск и первые клиенты',
          timeframe: '3 месяца'
        },
        challenges: [
          {
            title: '7-дневный вызов продуктивности',
            description: 'Ежедневно выполняйте одну важную задачу до 10 утра',
            difficulty: 3,
            reward: 'Бесплатная консультация с экспертом'
          }
        ]
      } as T
      
    default:
      return {
        message: 'Данные загружены',
        timestamp: Date.now()
      } as T
  }
}

/**
 * Глобальная функция для очистки всего кэша Context7
 */
export function clearAllContext7Cache() {
  context7Cache.clear()
  console.log('🗑️ Context7: Весь кэш очищен')
}

/**
 * Функция для получения статистики кэша
 */
export function getContext7CacheStats() {
  return {
    size: context7Cache.size,
    keys: Array.from(context7Cache.keys()),
    totalMemory: JSON.stringify([...context7Cache.entries()]).length
  }
}

// Дополнительные хуки для онбординга

/**
 * Хук для получения случайного мотивационного текста
 */
export const useRandomMotivationalText = () => {
  const { data: motivationData, loading, error } = useContext7Motivation();
  
  return { 
    currentText: motivationData?.quote, 
    loading, 
    error 
  };
};

/**
 * Хук для получения списка интересов (для экрана выбора интересов)
 */
export const useOnboardingInterests = () => {
  const interests = [
    "Планирование дня",
    "Спорт", 
    "Рацион",
    "Финансовый вопрос",
    "Восстановление",
    "Творчество",
    "Хобби",
    "Психическое здоровье",
    "Уход за собой"
  ];
  
  return { 
    interests, 
    loading: false, 
    error: null 
  };
}; 