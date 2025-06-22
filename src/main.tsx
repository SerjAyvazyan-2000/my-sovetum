/**
 * Точка входа в приложение Telegram Web App "Совет Экспертов"
 * Инициализирует Telegram SDK и запускает React приложение
 */

import React from 'react'
import ReactDOM from 'react-dom/client'
import { init } from '@telegram-apps/sdk-react'
import App from './App.tsx'
import './styles/index.css'

// Инициализация Telegram Mini App SDK
console.log('🚀 Инициализация Telegram Web App...')

// Переменная для отслеживания успешности инициализации SDK
let telegramSDKInitialized = false

try {
  // Проверяем доступность Telegram Web App API
  if (typeof window !== 'undefined' && window.Telegram?.WebApp) {
    console.log('📱 Telegram Web App API обнаружен')
    
    // Инициализируем базовые функции Telegram
    window.Telegram.WebApp.ready()
    window.Telegram.WebApp.expand()
    
    // Настраиваем цвета в соответствии с темой (используем свойства, а не методы)
    try {
      // Используем свойства headerColor и backgroundColor вместо методов
      if (window.Telegram.WebApp.headerColor) {
        window.Telegram.WebApp.headerColor = window.Telegram.WebApp.themeParams.bg_color || '#ffffff'
      }
      if (window.Telegram.WebApp.backgroundColor) {
        window.Telegram.WebApp.backgroundColor = 
          window.Telegram.WebApp.colorScheme === 'dark' ? '#1a1a1a' : '#ffffff'
      }
    } catch (colorError) {
      console.warn('⚠️ Ошибка настройки цветов:', colorError)
    }
    
    telegramSDKInitialized = true
    console.log('✅ Telegram Web App базовая инициализация завершена')
  } else {
    console.warn('⚠️ Telegram Web App API недоступен, работаем в браузерном режиме')
  }
  
  // Пытаемся инициализировать расширенный SDK
  import('@telegram-apps/sdk-react').then(({ backButton, mainButton, viewport }) => {
    // Инициализируем SDK с правильной конфигурацией
    try {
      init({
        acceptCustomStyles: true,
      })
      
      console.log('✅ Telegram SDK @telegram-apps инициализирован успешно')
      
      // Монтируем компоненты Telegram для управления (с проверками)
      try {
        if (backButton && backButton.mount && backButton.mount.isAvailable()) {
          backButton.mount()
          console.log('✅ BackButton смонтирован')
        }
      } catch (backButtonError) {
        console.warn('⚠️ Ошибка монтирования BackButton:', backButtonError)
      }
      
      try {
        if (mainButton && mainButton.mount && mainButton.mount.isAvailable()) {
          mainButton.mount()
          console.log('✅ MainButton смонтирован')
        }
      } catch (mainButtonError) {
        console.warn('⚠️ Ошибка монтирования MainButton:', mainButtonError)
      }
      
      try {
        if (viewport && viewport.mount && viewport.mount.isAvailable()) {
          viewport.mount()
          console.log('✅ Viewport смонтирован')
          
          // Настраиваем viewport для полного использования пространства
          if (viewport.expand && viewport.expand.isAvailable()) {
            viewport.expand()
            console.log('✅ Viewport расширен')
          }
        }
      } catch (viewportError) {
        console.warn('⚠️ Ошибка монтирования Viewport:', viewportError)
      }
    } catch (initError: any) {
      console.warn('⚠️ Ошибка init SDK:', initError)
    }
  }).catch((sdkError: any) => {
    console.warn('⚠️ Ошибка загрузки расширенного Telegram SDK:', sdkError)
    console.log('🔄 Продолжаем работу с базовым Telegram API')
  })
  
} catch (error) {
  console.error('❌ Ошибка инициализации Telegram SDK:', error)
  console.log('🔄 Продолжаем работу в режиме обычного веб-приложения')
}

// Запуск React приложения
const rootElement = document.getElementById('root')
if (rootElement) {
  ReactDOM.createRoot(rootElement).render(
    <React.StrictMode>
      <App />
    </React.StrictMode>,
  )
  console.log('✅ React приложение запущено')
  
  if (telegramSDKInitialized) {
    console.log('🎉 Приложение готово к работе в Telegram Web App')
  } else {
    console.log('🌐 Приложение готово к работе в браузерном режиме')
  }
} else {
  console.error('❌ Элемент #root не найден')
} 