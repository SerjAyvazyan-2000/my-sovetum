/**
 * Loading компонент для отображения состояния загрузки
 * Адаптирован для Telegram Web App с анимацией и правильными цветами
 */

import React from 'react'

/**
 * Пропсы для Loading компонента
 */
interface LoadingProps {
  text?: string
  size?: 'small' | 'medium' | 'large'
  className?: string
}

/**
 * Компонент спиннера загрузки
 * 
 * @param text - текст для отображения под спиннером
 * @param size - размер спиннера (small, medium, large)
 * @param className - дополнительные CSS классы
 */
const Loading: React.FC<LoadingProps> = ({ 
  text = 'Загрузка...', 
  size = 'medium',
  className = ''
}) => {
  // Определяем размеры спиннера
  const sizeClasses = {
    small: 'w-4 h-4',
    medium: 'w-8 h-8', 
    large: 'w-12 h-12'
  }
  
  // Определяем размеры текста
  const textSizeClasses = {
    small: 'text-sm',
    medium: 'text-base',
    large: 'text-lg'
  }
  
  return (
    <div 
      className={`
        flex 
        flex-col 
        items-center 
        justify-center 
        gap-3
        animate-fade-in
        ${className}
      `}
    >
      {/* Спиннер */}
      <div 
        className={`
          ${sizeClasses[size]}
          border-2 
          border-gray-300 
          border-t-2 
          border-t-blue-500
          rounded-full 
          animate-spin
        `}
        style={{
          borderColor: 'var(--tg-theme-hint-color, #999999)',
          borderTopColor: 'var(--tg-theme-button-color, #2481cc)'
        }}
      />
      
      {/* Текст загрузки */}
      {text && (
        <p 
          className={`
            ${textSizeClasses[size]}
            font-medium
            text-center
          `}
          style={{
            color: 'var(--tg-theme-hint-color, #999999)'
          }}
        >
          {text}
        </p>
      )}
    </div>
  )
}

/**
 * Полноэкранный компонент загрузки с оверлеем
 */
export const LoadingOverlay: React.FC<LoadingProps> = (props) => {
  return (
    <div className="loading-overlay">
      <div 
        className="
          bg-white dark:bg-gray-800 
          rounded-lg 
          p-6 
          shadow-lg
        "
        style={{
          backgroundColor: 'var(--tg-theme-secondary-bg-color, #f1f1f1)'
        }}
      >
        <Loading {...props} />
      </div>
    </div>
  )
}

export default Loading 