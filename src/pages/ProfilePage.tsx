/**
 * Страница профиля пользователя
 * Отображает информацию пользователя из Telegram и статистику использования
 */

import React, { useState, useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import { useLaunchParams, backButton } from '@telegram-apps/sdk-react'
import Loading from '../components/common/Loading'

/**
 * Интерфейс для данных пользователя
 */
interface User {
  id?: number
  first_name?: string
  last_name?: string
  username?: string
  language_code?: string
  is_premium?: boolean
}

/**
 * Интерфейс для статистики пользователя
 */
interface UserStats {
  total_sessions: number
  total_messages: number
  favorite_expert?: string
  last_session?: Date
}

/**
 * Страница профиля пользователя
 * Показывает данные от Telegram и статистику использования приложения
 */
const ProfilePage: React.FC = () => {
  const navigate = useNavigate()
  const launchParams = useLaunchParams()
  
  // Состояние компонента
  const [user, setUser] = useState<User | null>(null)
  const [stats, setStats] = useState<UserStats | null>(null)
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState<string | null>(null)
  
  /**
   * Загружает данные пользователя из Telegram
   */
  const loadUserData = async () => {
    try {
      setLoading(true)
      setError(null)
      
      console.log('📥 Загрузка данных пользователя...')
      
      // Получаем данные пользователя из Telegram
      let telegramUser: User | null = null
      
      if (launchParams?.initData?.user) {
        telegramUser = {
          id: launchParams.initData.user.id,
          first_name: launchParams.initData.user.firstName,
          last_name: launchParams.initData.user.lastName,
          username: launchParams.initData.user.username,
          language_code: launchParams.initData.user.languageCode,
          is_premium: launchParams.initData.user.isPremium
        }
        console.log('✅ Данные пользователя получены из Telegram:', telegramUser)
      } else {
        // Заглушка для тестирования
        telegramUser = {
          id: 12345,
          first_name: 'Тестовый',
          last_name: 'Пользователь',
          username: 'testuser',
          language_code: 'ru',
          is_premium: false
        }
        console.log('⚠️ Используются тестовые данные пользователя')
      }
      
      setUser(telegramUser)
      
      // Симуляция загрузки статистики (в реальном приложении - API вызов)
      await new Promise(resolve => setTimeout(resolve, 1000))
      
      const mockStats: UserStats = {
        total_sessions: 12,
        total_messages: 45,
        favorite_expert: 'Александр Бизнесов',
        last_session: new Date(Date.now() - 2 * 60 * 60 * 1000) // 2 часа назад
      }
      
      setStats(mockStats)
      console.log('✅ Статистика пользователя загружена')
      
    } catch (err) {
      console.error('❌ Ошибка загрузки данных:', err)
      setError('Не удалось загрузить данные профиля')
    } finally {
      setLoading(false)
    }
  }
  
  /**
   * Возвращается на главную страницу
   */
  const goBack = () => {
    console.log('⬅️ Возврат на главную страницу')
    navigate('/')
  }
  
  /**
   * Очищает данные пользователя (выход)
   */
  const handleLogout = () => {
    console.log('🚪 Выход из приложения')
    // В реальном приложении здесь будет вызов API для выхода
    // window.Telegram?.WebApp?.close()
    alert('Функция выхода будет реализована позже')
  }
  
  /**
   * Форматирует время последней сессии
   */
  const formatLastSession = (date: Date) => {
    const now = new Date()
    const diffMs = now.getTime() - date.getTime()
    const diffHours = Math.floor(diffMs / (1000 * 60 * 60))
    const diffDays = Math.floor(diffMs / (1000 * 60 * 60 * 24))
    
    if (diffDays > 0) {
      return `${diffDays} ${diffDays === 1 ? 'день' : 'дня'} назад`
    } else if (diffHours > 0) {
      return `${diffHours} ${diffHours === 1 ? 'час' : 'часа'} назад`
    } else {
      return 'только что'
    }
  }
  
  // Эффект для загрузки данных при монтировании
  useEffect(() => {
    loadUserData()
  }, [])
  
  // Эффект для настройки кнопки "Назад"
  useEffect(() => {
    if (backButton.show.isAvailable()) {
      backButton.show()
      backButton.onClick(goBack)
    }
    
    return () => {
      if (backButton.hide.isAvailable()) {
        backButton.hide()
      }
      if (backButton.offClick) {
        backButton.offClick(goBack)
      }
    }
  }, [])
  
  // Показываем загрузку
  if (loading) {
    return (
      <div className="flex items-center justify-center min-h-screen">
        <Loading text="Загрузка профиля..." />
      </div>
    )
  }
  
  // Показываем ошибку
  if (error) {
    return (
      <div className="flex flex-col items-center justify-center min-h-screen telegram-spacing text-center">
        <div className="text-4xl mb-4">😔</div>
        <h2 className="text-lg font-bold mb-2">Ошибка загрузки</h2>
        <p className="text-sm tg-hint mb-4">{error}</p>
        <button 
          onClick={loadUserData}
          className="tg-button"
        >
          Попробовать снова
        </button>
      </div>
    )
  }
  
  return (
    <div className="animate-fade-in">
      {/* Заголовок */}
      <div className="flex items-center mb-6">
        <button
          onClick={goBack}
          className="mr-3 text-lg"
          style={{ color: 'var(--tg-theme-link-color, #2481cc)' }}
        >
          ←
        </button>
        <h1 
          className="text-xl font-bold"
          style={{ color: 'var(--tg-theme-text-color, #000000)' }}
        >
          Профиль
        </h1>
      </div>
      
      {/* Информация о пользователе */}
      {user && (
        <div className="card mb-6">
          <div className="flex items-center space-x-4 mb-4">
            {/* Аватар пользователя */}
            <div 
              className="
                w-16 
                h-16 
                rounded-full 
                flex 
                items-center 
                justify-center 
                text-2xl
                font-bold
              "
              style={{
                backgroundColor: 'var(--tg-theme-button-color, #2481cc)',
                color: '#ffffff'
              }}
            >
              {user.first_name.charAt(0).toUpperCase()}
              {user.last_name?.charAt(0).toUpperCase() || ''}
            </div>
            
            {/* Информация */}
            <div className="flex-1">
              <h2 
                className="text-lg font-bold"
                style={{ color: 'var(--tg-theme-text-color, #000000)' }}
              >
                {user.first_name} {user.last_name || ''}
              </h2>
              
              {user.username && (
                <p 
                  className="text-sm"
                  style={{ color: 'var(--tg-theme-link-color, #2481cc)' }}
                >
                  @{user.username}
                </p>
              )}
              
              <div className="flex items-center space-x-2 mt-2">
                <span 
                  className="text-xs"
                  style={{ color: 'var(--tg-theme-hint-color, #999999)' }}
                >
                  ID: {user.id}
                </span>
                
                {user.is_premium && (
                  <span className="px-2 py-1 text-xs rounded-full bg-yellow-100 text-yellow-800 font-medium">
                    Premium
                  </span>
                )}
              </div>
            </div>
          </div>
          
          {/* Дополнительная информация */}
          <div className="space-y-2 text-sm">
            <div className="flex justify-between">
              <span style={{ color: 'var(--tg-theme-hint-color, #999999)' }}>
                Язык:
              </span>
              <span style={{ color: 'var(--tg-theme-text-color, #000000)' }}>
                {user.language_code?.toUpperCase() || 'RU'}
              </span>
            </div>
          </div>
        </div>
      )}
      
      {/* Статистика использования */}
      {stats && (
        <div className="card mb-6">
          <h3 
            className="text-lg font-semibold mb-4"
            style={{ color: 'var(--tg-theme-text-color, #000000)' }}
          >
            Статистика
          </h3>
          
          <div className="grid grid-cols-2 gap-4 mb-4">
            <div className="text-center">
              <div 
                className="text-2xl font-bold"
                style={{ color: 'var(--tg-theme-button-color, #2481cc)' }}
              >
                {stats.total_sessions}
              </div>
              <div 
                className="text-xs"
                style={{ color: 'var(--tg-theme-hint-color, #999999)' }}
              >
                Сессий
              </div>
            </div>
            
            <div className="text-center">
              <div 
                className="text-2xl font-bold"
                style={{ color: 'var(--tg-theme-button-color, #2481cc)' }}
              >
                {stats.total_messages}
              </div>
              <div 
                className="text-xs"
                style={{ color: 'var(--tg-theme-hint-color, #999999)' }}
              >
                Сообщений
              </div>
            </div>
          </div>
          
          {stats.favorite_expert && (
            <div className="text-sm space-y-1">
              <div className="flex justify-between">
                <span style={{ color: 'var(--tg-theme-hint-color, #999999)' }}>
                  Любимый эксперт:
                </span>
                <span style={{ color: 'var(--tg-theme-text-color, #000000)' }}>
                  {stats.favorite_expert}
                </span>
              </div>
            </div>
          )}
          
          {stats.last_session && (
            <div className="text-sm mt-2">
              <div className="flex justify-between">
                <span style={{ color: 'var(--tg-theme-hint-color, #999999)' }}>
                  Последняя активность:
                </span>
                <span style={{ color: 'var(--tg-theme-text-color, #000000)' }}>
                  {formatLastSession(stats.last_session)}
                </span>
              </div>
            </div>
          )}
        </div>
      )}
      
      {/* Настройки и действия */}
      <div className="card">
        <h3 
          className="text-lg font-semibold mb-4"
          style={{ color: 'var(--tg-theme-text-color, #000000)' }}
        >
          Настройки
        </h3>
        
        <div className="space-y-3">
          <button
            onClick={() => navigate('/')}
            className="
              w-full 
              text-left 
              p-3 
              rounded-lg 
              border 
              text-sm
              hover:bg-gray-50
            "
            style={{
              borderColor: 'var(--tg-theme-hint-color, #999999)',
              color: 'var(--tg-theme-text-color, #000000)'
            }}
          >
            🏠 Главная страница
          </button>
          
          <button
            onClick={handleLogout}
            className="
              w-full 
              text-left 
              p-3 
              rounded-lg 
              border 
              text-sm
              hover:bg-red-50
            "
            style={{
              borderColor: 'var(--tg-theme-destructive-text-color, #ff6b6b)',
              color: 'var(--tg-theme-destructive-text-color, #ff6b6b)'
            }}
          >
            🚪 Выйти из приложения
          </button>
        </div>
      </div>
      
      {/* Информация о приложении */}
      <div className="mt-6 text-center">
        <p 
          className="text-xs"
          style={{ color: 'var(--tg-theme-hint-color, #999999)' }}
        >
          Совет Экспертов v1.0
        </p>
        <p 
          className="text-xs mt-1"
          style={{ color: 'var(--tg-theme-hint-color, #999999)' }}
        >
          Telegram Mini App
        </p>
      </div>
      
      {/* Debug информация в dev режиме */}
      {import.meta.env.DEV && launchParams && (
        <div className="mt-6 p-3 rounded text-xs border-t">
          <details>
            <summary 
              className="cursor-pointer font-medium"
              style={{ color: 'var(--tg-theme-link-color, #2481cc)' }}
            >
              Debug: LaunchParams
            </summary>
            <pre 
              className="mt-2 text-xs overflow-auto max-h-40"
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

export default ProfilePage 