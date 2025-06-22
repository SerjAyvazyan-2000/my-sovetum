/**
 * Layout компонент для общей разметки Telegram Web App
 * Обеспечивает консистентную структуру страниц и безопасную область
 */

import React, { ReactNode } from 'react'

/**
 * Пропсы для Layout компонента
 */
interface LayoutProps {
  children: ReactNode
  className?: string
  showPadding?: boolean
}

/**
 * Основной Layout компонент
 * Предоставляет базовую структуру для всех страниц приложения
 * 
 * @param children - дочерние элементы для рендера
 * @param className - дополнительные CSS классы
 * @param showPadding - показывать ли отступы (по умолчанию true)
 */
const Layout: React.FC<LayoutProps> = ({ 
  children, 
  className = '', 
  showPadding = true
}) => {
  return (
    <div 
      className={`
        min-h-screen 
        bg-white dark:bg-gray-900
        text-gray-900 dark:text-white
        safe-area-padding
        ${className}
      `}
      style={{
        backgroundColor: 'var(--tg-theme-bg-color, #ffffff)',
        color: 'var(--tg-theme-text-color, #000000)'
      }}
    >
      {/* Основной контент */}
      <main 
        className={`
          w-full 
          max-w-md 
          mx-auto 
          min-h-screen
          ${showPadding ? 'telegram-spacing' : ''}
        `}
      >
        {children}
      </main>
    </div>
  )
}

export default Layout 