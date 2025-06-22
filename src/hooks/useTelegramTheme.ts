/**
 * Хук для применения цветовой схемы Telegram к приложению
 * Автоматически отслеживает изменения темы и применяет соответствующие CSS переменные
 */

import { useEffect } from 'react'

/**
 * Интерфейс для цветовых параметров темы Telegram
 */
interface TelegramThemeParams {
  bg_color?: string
  text_color?: string
  hint_color?: string
  link_color?: string
  button_color?: string
  button_text_color?: string
  secondary_bg_color?: string
  header_bg_color?: string
  accent_text_color?: string
  section_bg_color?: string
  section_header_text_color?: string
  subtitle_text_color?: string
  destructive_text_color?: string
}

/**
 * Применяет параметры темы Telegram к CSS переменным
 * @param themeParams - объект с параметрами темы от Telegram
 */
const applyTelegramTheme = (themeParams: TelegramThemeParams) => {
  const root = document.documentElement
  
  // Мапинг Telegram параметров на CSS переменные
  const colorMappings: Record<keyof TelegramThemeParams, string> = {
    bg_color: '--tg-theme-bg-color',
    text_color: '--tg-theme-text-color', 
    hint_color: '--tg-theme-hint-color',
    link_color: '--tg-theme-link-color',
    button_color: '--tg-theme-button-color',
    button_text_color: '--tg-theme-button-text-color',
    secondary_bg_color: '--tg-theme-secondary-bg-color',
    header_bg_color: '--tg-theme-header-bg-color',
    accent_text_color: '--tg-theme-accent-text-color',
    section_bg_color: '--tg-theme-section-bg-color',
    section_header_text_color: '--tg-theme-section-header-text-color',
    subtitle_text_color: '--tg-theme-subtitle-text-color',
    destructive_text_color: '--tg-theme-destructive-text-color'
  }
  
  // Применяем каждый параметр темы
  Object.entries(themeParams).forEach(([key, value]) => {
    const cssVariable = colorMappings[key as keyof TelegramThemeParams]
    if (cssVariable && value) {
      root.style.setProperty(cssVariable, value)
      console.log(`🎨 Применена тема: ${cssVariable} = ${value}`)
    }
  })
}

/**
 * Хук для автоматического применения темы Telegram
 * Отслеживает изменения темы и применяет их к приложению
 */
export const useTelegramTheme = () => {
  useEffect(() => {
    console.log('🎨 Инициализация темы Telegram...')
    
    // Проверяем доступность Telegram WebApp
    if (typeof window !== 'undefined' && window.Telegram?.WebApp) {
      const webApp = window.Telegram.WebApp
      
      // Получаем текущие параметры темы
      const themeParams = webApp.themeParams
      
      if (themeParams) {
        console.log('📋 Получены параметры темы:', themeParams)
        applyTelegramTheme(themeParams)
        
        // Устанавливаем класс темы на body
        const isDark = webApp.colorScheme === 'dark'
        document.body.classList.toggle('dark', isDark)
        console.log(`🌓 Установлена ${isDark ? 'темная' : 'светлая'} тема`)
      }
      
      // Слушаем изменения темы
      const handleThemeChanged = () => {
        console.log('🔄 Тема изменена')
        const newThemeParams = webApp.themeParams
        if (newThemeParams) {
          applyTelegramTheme(newThemeParams)
          
          // Обновляем класс темы
          const isDark = webApp.colorScheme === 'dark'
          document.body.classList.toggle('dark', isDark)
        }
      }
      
      // Подписываемся на события изменения темы
      webApp.onEvent('themeChanged', handleThemeChanged)
      
      // Очистка при размонтировании
      return () => {
        webApp.offEvent('themeChanged', handleThemeChanged)
      }
    } else {
      console.log('⚠️ Telegram WebApp не доступен, используем дефолтную тему')
      
      // Применяем дефолтную светлую тему
      applyTelegramTheme({
        bg_color: '#ffffff',
        text_color: '#000000',
        hint_color: '#999999',
        link_color: '#2481cc',
        button_color: '#2481cc',
        button_text_color: '#ffffff',
        secondary_bg_color: '#f1f1f1'
      })
    }
  }, [])
}

/**
 * Хук для получения доступа к Telegram WebApp API
 * Предоставляет безопасный доступ к данным пользователя и функциям WebApp
 */
export const useTelegramWebApp = () => {
  // Проверяем доступность Telegram WebApp
  if (typeof window !== 'undefined' && window.Telegram?.WebApp) {
    return window.Telegram.WebApp
  }
  
  // Возвращаем null если WebApp недоступен
  return null
}

export default useTelegramTheme 