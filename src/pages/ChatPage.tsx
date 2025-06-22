/**
 * Страница чата с выбранным экспертом
 * Реализует полноценный интерфейс сообщений с интеграцией Telegram Web App
 */

import React, { useState, useEffect, useRef } from 'react'
import { useParams, useNavigate } from 'react-router-dom'
import { backButton, mainButton, useSignal } from '@telegram-apps/sdk-react'
import Loading from '../components/common/Loading'
import { expertService, type Expert, type SendMessageRequest } from '../services/expertService'

/**
 * Интерфейс для отображения сообщения в UI
 */
interface DisplayMessage {
  id: number
  text: string
  sender: 'user' | 'expert'
  timestamp: Date
  isLoading?: boolean
  metadata?: any
}

/**
 * Страница чата с экспертом
 * Обеспечивает двустороннюю коммуникацию пользователя с AI экспертом
 */
const ChatPage: React.FC = () => {
  const { expertId } = useParams<{ expertId: string }>()
  const navigate = useNavigate()
  
  // Реф для скролла к последнему сообщению
  const messagesEndRef = useRef<HTMLDivElement>(null)
  const inputRef = useRef<HTMLInputElement>(null)
  
  // Состояние компонента
  const [expert, setExpert] = useState<Expert | null>(null)
  const [messages, setMessages] = useState<DisplayMessage[]>([])
  const [inputValue, setInputValue] = useState('')
  const [loading, setLoading] = useState(true)
  const [sending, setSending] = useState(false)
  const [error, setError] = useState<string | null>(null)
  const [sessionId, setSessionId] = useState<number | null>(null)
  
  // Отслеживаем состояние главной кнопки Telegram

  /**
   * Получает данные эксперта по ID и автоматически восстанавливает последнюю сессию
   * Приоритет: серверные данные -> localStorage -> новая сессия
   */
  const loadExpert = async () => {
    if (!expertId) return
    
    setLoading(true)
    setError('')
    
    try {
      const expertData = await expertService.getExpertById(Number(expertId))
      
      if (!expertData) {
        throw new Error('Эксперт не найден')
      }
      
      if (!expertData.is_available) {
        throw new Error('Эксперт в данный момент недоступен')
      }
      
      setExpert(expertData)
      
      // 🚀 НОВАЯ ЛОГИКА: Автоматическое восстановление контекста
      console.log('🔄 Автоматическое восстановление контекста для эксперта:', expertData.name)
      const restorationResult = await expertService.autoRestoreContext(expertData.id)
      
      if (restorationResult.restored && restorationResult.sessionId && restorationResult.messages) {
        console.log(`✅ Контекст восстановлен методом: ${restorationResult.method}`)
        
        // Устанавливаем восстановленную сессию
        setSessionId(restorationResult.sessionId)
        
        // Преобразуем сообщения в формат для отображения
        const displayMessages: DisplayMessage[] = restorationResult.messages.map(msg => ({
          id: msg.id,
          text: msg.content,
          sender: msg.message_type === 'user' ? 'user' : 'expert',
          timestamp: new Date(msg.created_at),
          metadata: msg.metadata
        }))
        
        // Определяем тип сообщения о восстановлении на основе метода
        let resumeMessageText = ''
        let resumeMessageType = ''
        
        if (restorationResult.method === 'server') {
          resumeMessageText = `Добро пожаловать обратно! Продолжаем наш разговор с того места, где остановились.`
          resumeMessageType = 'server_restore'
          
          // Добавляем дополнительную информацию о контексте
          if (restorationResult.context?.context_summary) {
            resumeMessageText += ` \n\n📝 Контекст разговора: ${restorationResult.context.context_summary}`
          }
          
          if (restorationResult.context?.total_messages) {
            resumeMessageText += `\n💬 Всего сообщений в сессии: ${restorationResult.context.total_messages}`
          }
        } else if (restorationResult.method === 'local') {
          resumeMessageText = `Восстанавливаю наш предыдущий разговор из локального хранилища...`
          resumeMessageType = 'local_restore'
        }
        
        // Добавляем сообщение о восстановлении
        const resumeMessage: DisplayMessage = {
          id: Date.now(),
          text: resumeMessageText,
          sender: 'expert',
          timestamp: new Date(),
          metadata: { 
            is_system_message: true, 
            restoration_method: restorationResult.method,
            restoration_type: resumeMessageType
          }
        }
        
        setMessages([resumeMessage, ...displayMessages])
        console.log(`🔄 Сессия восстановлена: ${displayMessages.length} предыдущих сообщений загружено`)
        
        // Проверяем рекомендации для этого эксперта
        try {
          const recommendations = await expertService.getExpertRecommendations(expertData.id)
          if (recommendations.length > 0) {
            console.log(`💡 Получено ${recommendations.length} рекомендаций для улучшения диалога`)
            
            // Можно добавить уведомление пользователю о рекомендациях
            const recommendationMessage: DisplayMessage = {
              id: Date.now() + 1,
              text: `💡 У меня есть несколько рекомендаций по продолжению нашего разговора. Хотите узнать больше?`,
              sender: 'expert',
              timestamp: new Date(),
              metadata: { 
                is_recommendation_prompt: true,
                recommendations: recommendations
              }
            }
            
            // Добавляем рекомендационное сообщение через небольшую задержку
            setTimeout(() => {
              setMessages(prev => [...prev, recommendationMessage])
            }, 2000)
          }
        } catch (recError) {
          console.warn('⚠️ Не удалось загрузить рекомендации:', recError)
        }
        
        return // Выходим, контекст успешно восстановлен
      }
      
      // 🆕 СОЗДАНИЕ НОВОЙ СЕССИИ
      console.log('🆕 Создаем новую сессию с экспертом:', expertData.name)
      
      // Добавляем приветственное сообщение для новой сессии
      const welcomeMessage: DisplayMessage = {
        id: Date.now(),
        text: `Привет! Я ${expertData.name} - ${expertData.role}. Чем могу помочь?`,
        sender: 'expert',
        timestamp: new Date(),
        metadata: { 
          is_welcome_message: true,
          expert_id: expertData.id
        }
      }
      
      setMessages([welcomeMessage])
      console.log('✅ Создана новая сессия с экспертом:', expertData.name)
      
    } catch (err: any) {
      console.error('❌ Ошибка загрузки эксперта:', err)
      setError(err.message || 'Эксперт не найден')
      
      // Fallback: используем локальные данные экспертов
      const fallbackExperts: Record<string, Expert> = {
        '1': {
          id: 1,
          name: 'Александр Бизнесов',
          role: 'Бизнес-консультант',
          description: 'Бизнес-эксперт',
          expertise_areas: ['business'],
          total_conversations: 0,
          total_messages: 0,
          average_rating: 0,
          required_subscription: 'free',
          is_available: true
        },
        '2': {
          id: 2,
          name: 'Елена Психологова',
          role: 'Психолог-консультант',
          description: 'Психолог-эксперт',
          expertise_areas: ['psychology'],
          total_conversations: 0,
          total_messages: 0,
          average_rating: 0,
          required_subscription: 'free',
          is_available: true
        },
        '3': {
          id: 3,
          name: 'Дмитрий Финансов',
          role: 'Финансовый советник',
          description: 'Финансовый эксперт',
          expertise_areas: ['finance'],
          total_conversations: 0,
          total_messages: 0,
          average_rating: 0,
          required_subscription: 'pro',
          is_available: true
        },
        '4': {
          id: 4,
          name: 'Анна Карьерова',
          role: 'Карьерный коуч',
          description: 'Карьерный эксперт',
          expertise_areas: ['career'],
          total_conversations: 0,
          total_messages: 0,
          average_rating: 0,
          required_subscription: 'free',
          is_available: true
        },
        '5': {
          id: 5,
          name: 'Максим Техников',
          role: 'IT-эксперт',
          description: 'IT-эксперт',
          expertise_areas: ['technology'],
          total_conversations: 0,
          total_messages: 0,
          average_rating: 0,
          required_subscription: 'pro',
          is_available: true
        }
      }
      
      const foundExpert = fallbackExperts[expertId!]
      if (foundExpert) {
        setExpert(foundExpert)
        
        // Проверяем сохраненную сессию и для fallback экспертов
        const savedSessionId = expertService.getExpertSessionId(foundExpert.id)
        if (savedSessionId) {
          console.log(`🔄 Найдена сохраненная сессия ${savedSessionId} для fallback эксперта ${foundExpert.name}`)
          setSessionId(savedSessionId)
        }
        
        const welcomeMessage: DisplayMessage = {
          id: Date.now(),
          text: `Привет! Я ${foundExpert.name} - ${foundExpert.role}. Чем могу помочь?`,
          sender: 'expert',
          timestamp: new Date(),
          metadata: { is_fallback_mode: true }
        }
        setMessages([welcomeMessage])
        console.log('🔄 Использованы fallback данные эксперта')
      }
      
    } finally {
      setLoading(false)
    }
  }
  
  /**
   * Отправляет сообщение эксперту
   */
  const sendMessage = async () => {
    if (!inputValue.trim() || sending || !expert) return
    
    const messageText = inputValue.trim()
    setInputValue('')
    setSending(true)
    
    try {
      // Добавляем сообщение пользователя
      const userMessage: DisplayMessage = {
        id: Date.now(),
        text: messageText,
        sender: 'user',
        timestamp: new Date()
      }
      
      setMessages(prev => [...prev, userMessage])
      
      // Добавляем индикатор печатания эксперта
      const typingMessage: DisplayMessage = {
        id: Date.now() + 1,
        text: 'Печатает...',
        sender: 'expert',
        timestamp: new Date(),
        isLoading: true
      }
      
      setMessages(prev => [...prev, typingMessage])
      
      console.log('📤 Отправка сообщения эксперту через API:', messageText)
      
      // Подготавливаем запрос для API
      const sendRequest: SendMessageRequest = {
        expert_id: expert.id,
        message: messageText,
        ...(sessionId && { session_id: sessionId })
      }
      
      // Отправляем сообщение через реальный API
      const response = await expertService.sendMessage(sendRequest)
      
      if (response.success) {
        // Обновляем session_id если это первое сообщение
        if (!sessionId) {
          setSessionId(response.session_id)
        }
        
        // Заменяем индикатор печатания на реальный ответ
        setMessages(prev => prev.map(msg => 
          msg.isLoading && msg.sender === 'expert' 
            ? {
                id: response.expert_response.id,
                text: response.expert_response.content,
                sender: 'expert' as const,
                timestamp: new Date(response.expert_response.created_at),
                isLoading: false,
                metadata: response.expert_response.metadata
              }
            : msg
        ))
        
        console.log('✅ Получен ответ от эксперта через VPN:', response.expert_response.metadata?.provider)
        
      } else {
        throw new Error('Не удалось отправить сообщение')
      }
      
    } catch (err: any) {
      console.error('❌ Ошибка отправки сообщения:', err)
      
      // Удаляем индикатор печатания
      setMessages(prev => prev.filter(msg => !msg.isLoading))
      
      // Определяем тип ошибки и показываем соответствующее сообщение
      let errorMessage = 'Извините, произошла ошибка. Попробуйте еще раз.'
      
      if (err.message.includes('лимит')) {
        errorMessage = 'Превышен лимит сообщений. Пожалуйста, подождите или обновите подписку.'
      } else if (err.message.includes('подключение')) {
        errorMessage = 'Проблемы с подключением к серверу. Проверьте интернет-соединение.'
      }
      
      // Показываем fallback ответ
      const fallbackResponses = [
        'Понимаю, что у вас есть вопрос. К сожалению, сейчас у меня проблемы с подключением к серверу.',
        'Извините за задержку. Технические неполадки мешают мне дать полноценный ответ.',
        'Ваш вопрос важен. Попробуйте отправить сообщение еще раз через несколько минут.',
        'Временные технические трудности. Скоро все наладится!',
        'Благодарю за терпение. Сейчас есть проблемы с AI системой.'
      ]
      
      const fallbackResponse = fallbackResponses[Math.floor(Math.random() * fallbackResponses.length)]
      
      const errorDisplayMessage: DisplayMessage = {
        id: Date.now() + 2,
        text: `${errorMessage}\n\n${fallbackResponse}`,
        sender: 'expert',
        timestamp: new Date()
      }
      
      setMessages(prev => [...prev, errorDisplayMessage])
      console.log('🔄 Показан fallback ответ эксперта')
      
    } finally {
      setSending(false)
    }
  }
  
  /**
   * Обработчик нажатия Enter в поле ввода
   */
  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault()
      sendMessage()
    }
  }
  
  /**
   * Прокручивает к последнему сообщению
   */
  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' })
  }
  
  /**
   * Возвращается на главную страницу
   */
  const goBack = () => {
    console.log('⬅️ Возврат на главную страницу')
    navigate('/')
  }
  
  /**
   * Получает иконку эксперта
   */
  const getExpertIcon = (expertiseAreas: string[]) => {
    const iconMap: { [key: string]: string } = {
      business: '👔',
      psychology: '🧠',
      finance: '💰',
      career: '📈',
      technology: '💻'
    }
    
    for (const area of expertiseAreas) {
      if (iconMap[area]) {
        return iconMap[area]
      }
    }
    
    return '🎯'
  }
  
  /**
   * Оценивает сообщение эксперта
   */
  const rateMessage = async (messageId: number, rating: number) => {
    try {
      await expertService.rateMessage(messageId, rating)
      console.log('⭐ Рейтинг сохранен:', rating)
    } catch (error) {
      console.error('❌ Ошибка сохранения рейтинга:', error)
    }
  }
  
  /**
   * Начинает новый разговор с экспертом
   * Очищает текущую сессию и создает новое приветственное сообщение
   */
  const startNewConversation = async () => {
    if (!expert) return
    
    console.log('🆕 Начинаем новый разговор с экспертом:', expert.name)
    
    try {
      // Очищаем текущую сессию и данные
      expertService.clearExpertSession(expert.id)
      setSessionId(null)
      setError(null)
      
      // Добавляем сообщение о начале нового разговора
      const newConversationMessage: DisplayMessage = {
        id: Date.now(),
        text: `Отлично! Начинаем новый разговор. Я ${expert.name} - ${expert.role}. Чем могу помочь?`,
        sender: 'expert',
        timestamp: new Date(),
        metadata: { is_new_conversation: true }
      }
      
      setMessages([newConversationMessage])
      
      // Фокусируемся на поле ввода
      if (inputRef.current) {
        inputRef.current.focus()
      }
      
      console.log('✅ Новый разговор успешно начат')
    } catch (error) {
      console.error('❌ Ошибка создания нового разговора:', error)
      
      // Fallback: простое очищение сообщений
      setMessages([{
        id: Date.now(),
        text: `Привет! Я ${expert.name}. Готов помочь вам!`,
        sender: 'expert',
        timestamp: new Date()
      }])
    }
  }
  
  // Эффект для загрузки эксперта
  useEffect(() => {
    if (expertId) {
      loadExpert()
    }
  }, [expertId])
  
  // Эффект для настройки Telegram кнопок
  useEffect(() => {
    try {
      // Проверяем и настраиваем кнопку "Назад"
      if (backButton && backButton.show && backButton.show.isAvailable()) {
        backButton.show()
        if (backButton.onClick) {
          backButton.onClick(goBack)
        }
      }
      
      // Проверяем и скрываем главную кнопку
      if (mainButton && mainButton.isVisible && mainButton.isVisible()) {
        try {
          mainButton.hide()
        } catch (error) {
          console.warn('⚠️ Не удалось скрыть главную кнопку:', error)
        }
      }
      
      console.log('✅ Telegram кнопки настроены в ChatPage')
    } catch (error) {
      console.warn('⚠️ Ошибка настройки Telegram кнопок:', error)
      // Продолжаем работу без Telegram кнопок
    }
    
    return () => {
      try {
        // Очищаем обработчики при размонтировании
        if (backButton && backButton.hide && backButton.hide.isAvailable()) {
          backButton.hide()
        }
        if (backButton && backButton.offClick) {
          backButton.offClick(goBack)
        }
      } catch (error) {
        console.warn('⚠️ Ошибка очистки Telegram кнопок:', error)
      }
    }
  }, [])
  
  // Эффект для автоскролла к новым сообщениям
  useEffect(() => {
    scrollToBottom()
  }, [messages])
  
  // Эффект для фокуса на поле ввода
  useEffect(() => {
    if (!loading && inputRef.current) {
      inputRef.current.focus()
    }
  }, [loading])
  
  // Показываем загрузку
  if (loading) {
    return (
      <div className="flex items-center justify-center min-h-screen">
        <Loading text="Подключение к эксперту..." />
      </div>
    )
  }
  
  // Показываем ошибку
  if (error && !expert) {
    return (
      <div className="flex flex-col items-center justify-center min-h-screen telegram-spacing text-center">
        <div className="text-4xl mb-4">😔</div>
        <h2 className="text-lg font-bold mb-2">Эксперт недоступен</h2>
        <p className="text-sm tg-hint mb-4">{error}</p>
        <button 
          onClick={goBack}
          className="tg-button"
        >
          Вернуться к списку
        </button>
      </div>
    )
  }
  
  if (!expert) {
    return null
  }
  
  return (
    <div className="chat-container">
      {/* Заголовок чата */}
      <div 
        className="
          flex 
          items-center 
          p-4 
          border-b
          sticky 
          top-0 
          z-10
        "
        style={{
          backgroundColor: 'var(--tg-theme-bg-color, #ffffff)',
          borderColor: 'var(--tg-theme-hint-color, #999999)'
        }}
      >
        <button
          onClick={goBack}
          className="mr-3 text-lg"
          style={{ color: 'var(--tg-theme-link-color, #2481cc)' }}
        >
          ←
        </button>
        
        <div 
          className="
            w-10 
            h-10 
            rounded-full 
            flex 
            items-center 
            justify-center 
            mr-3
            text-lg
          "
          style={{
            backgroundColor: 'var(--tg-theme-button-color, #2481cc)',
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
        
        <div className="flex-1">
          <h2 
            className="font-semibold text-sm"
            style={{ color: 'var(--tg-theme-text-color, #000000)' }}
          >
            {expert.name}
          </h2>
          <p 
            className="text-xs"
            style={{ color: 'var(--tg-theme-hint-color, #999999)' }}
          >
            {expert.role}
          </p>
        </div>
        
        {/* Показываем статус сессии и кнопку нового разговора */}
        <div className="flex items-center space-x-2">
          {sessionId && (
            <>
              <div 
                className="text-xs flex items-center space-x-1"
                style={{ color: 'var(--tg-theme-hint-color, #999999)' }}
              >
                <span>🔗</span>
                <span>Сессия #{sessionId}</span>
              </div>
              <button
                onClick={startNewConversation}
                className="text-xs px-2 py-1 rounded bg-opacity-20 hover:bg-opacity-30 transition-all"
                style={{ 
                  color: 'var(--tg-theme-link-color, #2481cc)',
                  backgroundColor: 'var(--tg-theme-link-color, #2481cc)'
                }}
                title="Начать новый разговор"
              >
                🆕 Новый
              </button>
            </>
          )}
          
          {/* Индикатор восстановленного разговора */}
          {messages.length > 0 && messages[0].metadata?.restoration_method && (
            <div 
              className="text-xs px-2 py-1 rounded flex items-center space-x-1"
              style={{ 
                backgroundColor: messages[0].metadata.restoration_method === 'server' 
                  ? 'rgba(34, 197, 94, 0.2)' 
                  : 'rgba(59, 130, 246, 0.2)',
                color: messages[0].metadata.restoration_method === 'server' 
                  ? 'var(--tg-theme-link-color, #22c55e)' 
                  : 'var(--tg-theme-link-color, #3b82f6)'
              }}
              title={`Разговор восстановлен методом: ${messages[0].metadata.restoration_method}`}
            >
              {messages[0].metadata.restoration_method === 'server' ? (
                <>
                  <span>☁️</span>
                  <span>Синхронизирован</span>
                </>
              ) : (
                <>
                  <span>💾</span>
                  <span>Локально</span>
                </>
              )}
            </div>
          )}
        </div>
      </div>
      
      {/* Сообщения */}
      <div className="chat-messages hide-scrollbar">
        <div className="space-y-3">
          {messages.map((message) => (
            <div
              key={message.id}
              className={`
                flex 
                ${message.sender === 'user' ? 'justify-end' : 'justify-start'}
                ${message.metadata?.is_system_message ? 'justify-center' : ''}
              `}
            >
              <div
                className={`
                  message 
                  ${message.sender}
                  ${message.isLoading ? 'opacity-70' : ''}
                  ${message.metadata?.is_system_message ? 'system-message' : ''}
                  ${message.metadata?.is_recommendation_prompt ? 'recommendation-message' : ''}
                  ${message.metadata?.restoration_method ? 'restoration-message' : ''}
                  max-w-[80%]
                `}
                style={message.metadata?.is_system_message ? {
                  backgroundColor: message.metadata?.restoration_method === 'server' 
                    ? 'rgba(34, 197, 94, 0.1)'
                    : message.metadata?.restoration_method === 'local'
                    ? 'rgba(59, 130, 246, 0.1)'
                    : 'var(--tg-theme-secondary-bg-color, #f1f1f1)',
                  border: '1px solid',
                  borderColor: message.metadata?.restoration_method === 'server'
                    ? 'rgba(34, 197, 94, 0.3)'
                    : message.metadata?.restoration_method === 'local'
                    ? 'rgba(59, 130, 246, 0.3)'
                    : 'var(--tg-theme-hint-color, #999999)',
                  borderRadius: '12px',
                  padding: '12px',
                  maxWidth: '90%',
                  margin: '0 auto',
                  textAlign: 'center' as const
                } : undefined}
              >
                {/* Специальная иконка для системных сообщений */}
                {message.metadata?.is_system_message && (
                  <div 
                    className="flex items-center justify-center mb-2"
                    style={{ color: 'var(--tg-theme-hint-color, #999999)' }}
                  >
                    {message.metadata?.restoration_method === 'server' && '☁️'}
                    {message.metadata?.restoration_method === 'local' && '💾'}
                    {message.metadata?.is_welcome_message && '👋'}
                    {message.metadata?.is_new_conversation && '🆕'}
                    {message.metadata?.is_recommendation_prompt && '💡'}
                  </div>
                )}
                
                <p className={`text-sm whitespace-pre-wrap ${
                  message.metadata?.is_system_message ? 'text-center' : ''
                }`}>
                  {message.text}
                </p>
                
                {/* Дополнительная информация для восстановленных сессий */}
                {message.metadata?.restoration_method && message.metadata?.is_system_message && (
                  <div 
                    className="mt-2 text-xs opacity-70"
                    style={{ color: 'var(--tg-theme-hint-color, #999999)' }}
                  >
                    {message.metadata.restoration_method === 'server' && (
                      <span>✅ Синхронизировано с сервером</span>
                    )}
                    {message.metadata.restoration_method === 'local' && (
                      <span>📱 Восстановлено из локального хранилища</span>
                    )}
                  </div>
                )}
                
                {/* Кнопки для рекомендаций */}
                {message.metadata?.is_recommendation_prompt && message.metadata?.recommendations && Array.isArray(message.metadata.recommendations) && message.metadata.recommendations.length > 0 && (
                  <div className="mt-3 space-y-2">
                    {message.metadata.recommendations.slice(0, 3).map((rec: any, index: number) => (
                      <button
                        key={index}
                        className="block w-full text-xs px-3 py-2 rounded bg-opacity-20 hover:bg-opacity-30 transition-all"
                        style={{ 
                          backgroundColor: 'var(--tg-theme-button-color, #2481cc)',
                          color: 'var(--tg-theme-button-text-color, #ffffff)'
                        }}
                        onClick={() => {
                          // Можно добавить обработку нажатия на рекомендацию
                          console.log('Выбрана рекомендация:', rec.recommendation);
                        }}
                      >
                        {rec.recommendation}
                      </button>
                    ))}
                  </div>
                )}
                
                <div className="flex items-center justify-between mt-1">
                  <div 
                    className="text-xs opacity-60"
                  >
                    {message.timestamp.toLocaleTimeString('ru-RU', {
                      hour: '2-digit',
                      minute: '2-digit'
                    })}
                  </div>
                  
                  {/* Показываем метаданные для сообщений эксперта */}
                  {message.sender === 'expert' && message.metadata && !message.isLoading && !message.metadata.is_system_message && (
                    <div className="flex items-center space-x-2 text-xs opacity-60">
                      {message.metadata.provider && (
                        <span title={`Провайдер: ${message.metadata.provider}`}>
                          {message.metadata.provider === 'openai' ? '🤖' : '🔄'}
                        </span>
                      )}
                      {message.metadata.generation_time && (
                        <span title={`Время генерации: ${message.metadata.generation_time.toFixed(1)}с`}>
                          ⏱️
                        </span>
                      )}
                      {message.metadata.tokens_used && (
                        <span title={`Токены: ${message.metadata.tokens_used}`}>
                          📊
                        </span>
                      )}
                    </div>
                  )}
                  
                  {/* Кнопки оценки для сообщений эксперта (кроме системных) */}
                  {message.sender === 'expert' && !message.isLoading && !message.metadata?.is_system_message && typeof message.id === 'number' && (
                    <div className="flex items-center space-x-1 ml-2">
                      {[1, 2, 3, 4, 5].map((rating) => (
                        <button
                          key={rating}
                          onClick={() => rateMessage(message.id, rating)}
                          className="text-xs opacity-60 hover:opacity-100 transition-opacity"
                          title={`Оценить ${rating} звезд`}
                        >
                          ⭐
                        </button>
                      ))}
                    </div>
                  )}
                </div>
              </div>
            </div>
          ))}
          <div ref={messagesEndRef} />
        </div>
      </div>
      
      {/* Поле ввода */}
      <div className="chat-input">
        <div className="flex items-center space-x-3">
          <input
            ref={inputRef}
            type="text"
            value={inputValue}
            onChange={(e) => setInputValue(e.target.value)}
            onKeyPress={handleKeyPress}
            placeholder="Напишите сообщение..."
            disabled={sending}
            className="
              flex-1 
              px-4 
              py-3 
              rounded-lg 
              border 
              text-sm
              focus:outline-none 
              focus:ring-2
              disabled:opacity-50
            "
            style={{
              backgroundColor: 'var(--tg-theme-secondary-bg-color, #f1f1f1)',
              borderColor: 'var(--tg-theme-hint-color, #999999)',
              color: 'var(--tg-theme-text-color, #000000)'
            }}
          />
          
          <button
            onClick={sendMessage}
            disabled={!inputValue.trim() || sending}
            className="
              px-4 
              py-3 
              rounded-lg 
              font-medium 
              text-sm
              disabled:opacity-50
              tg-button
              transition-all
              duration-200
            "
          >
            {sending ? '⏳' : '➤'}
          </button>
        </div>
        
        {/* Показываем информацию о статусе */}
        {error && (
          <div className="mt-2 p-2 text-xs text-orange-600 bg-orange-50 rounded">
            ⚠️ Работаем в автономном режиме
          </div>
        )}
      </div>
    </div>
  )
}

export default ChatPage 