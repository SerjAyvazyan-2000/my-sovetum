/**
 * ErrorBoundary компонент для перехвата и обработки ошибок React
 * Предоставляет пользовательский интерфейс для ошибок в стиле Telegram
 */

import React, { Component, ReactNode } from 'react'

/**
 * Пропсы для ErrorBoundary
 */
interface ErrorBoundaryProps {
  children: ReactNode
  fallback?: ReactNode
}

/**
 * Состояние ErrorBoundary
 */
interface ErrorBoundaryState {
  hasError: boolean
  error?: Error
  errorInfo?: React.ErrorInfo
}

/**
 * ErrorBoundary класс для перехвата ошибок React
 * Отображает пользовательский интерфейс ошибки вместо краша приложения
 */
class ErrorBoundary extends Component<ErrorBoundaryProps, ErrorBoundaryState> {
  constructor(props: ErrorBoundaryProps) {
    super(props)
    
    this.state = {
      hasError: false
    }
  }

  /**
   * Статический метод для обновления состояния при ошибке
   * @param error - объект ошибки
   */
  static getDerivedStateFromError(error: Error): ErrorBoundaryState {
    console.error('🚨 ErrorBoundary перехватил ошибку:', error)
    
    return {
      hasError: true,
      error
    }
  }

  /**
   * Метод жизненного цикла для обработки ошибок
   * @param error - объект ошибки
   * @param errorInfo - дополнительная информация об ошибке
   */
  componentDidCatch(error: Error, errorInfo: React.ErrorInfo) {
    console.error('🚨 Детали ошибки:', {
      error,
      errorInfo,
      componentStack: errorInfo.componentStack
    })
    
    this.setState({
      error,
      errorInfo
    })
    
    // Отправляем ошибку в систему логирования (если нужно)
    this.reportError(error, errorInfo)
  }

  /**
   * Отправляет ошибку в систему мониторинга
   * @param error - объект ошибки
   * @param errorInfo - дополнительная информация
   */
  private reportError(error: Error, errorInfo: React.ErrorInfo) {
    // В будущем здесь можно добавить отправку в Sentry, LogRocket и т.д.
    console.log('📊 Отправка ошибки в систему мониторинга:', {
      message: error.message,
      stack: error.stack,
      componentStack: errorInfo.componentStack
    })
  }

  /**
   * Обработчик кнопки "Попробовать снова"
   */
  handleRetry = () => {
    this.setState({
      hasError: false,
      error: undefined,
      errorInfo: undefined
    })
  }

  /**
   * Обработчик кнопки "Перезагрузить приложение"
   */
  handleReload = () => {
    window.location.reload()
  }

  render() {
    if (this.state.hasError) {
      // Если передан кастомный fallback, используем его
      if (this.props.fallback) {
        return this.props.fallback
      }

      // Иначе показываем стандартный UI ошибки
      return (
        <div 
          className="
            min-h-screen 
            flex 
            flex-col 
            items-center 
            justify-center 
            telegram-spacing
            text-center
          "
          style={{
            backgroundColor: 'var(--tg-theme-bg-color, #ffffff)',
            color: 'var(--tg-theme-text-color, #000000)'
          }}
        >
          {/* Иконка ошибки */}
          <div 
            className="
              w-16 
              h-16 
              rounded-full 
              flex 
              items-center 
              justify-center 
              mb-4
              text-2xl
            "
            style={{
              backgroundColor: 'var(--tg-theme-destructive-text-color, #ff6b6b)',
              color: '#ffffff'
            }}
          >
            ⚠️
          </div>
          
          {/* Заголовок ошибки */}
          <h2 
            className="text-xl font-bold mb-2"
            style={{
              color: 'var(--tg-theme-text-color, #000000)'
            }}
          >
            Упс! Что-то пошло не так
          </h2>
          
          {/* Описание ошибки */}
          <p 
            className="text-sm mb-6 max-w-sm"
            style={{
              color: 'var(--tg-theme-hint-color, #999999)'
            }}
          >
            Произошла неожиданная ошибка. Попробуйте перезагрузить приложение или повторить действие.
          </p>
          
          {/* Детали ошибки в dev режиме */}
          {import.meta.env.DEV && this.state.error && (
            <details className="mb-6 text-left max-w-sm">
              <summary 
                className="cursor-pointer text-sm font-medium mb-2"
                style={{
                  color: 'var(--tg-theme-link-color, #2481cc)'
                }}
              >
                Детали ошибки (только в dev режиме)
              </summary>
              <pre 
                className="
                  text-xs 
                  p-3 
                  rounded 
                  overflow-auto 
                  max-h-32
                "
                style={{
                  backgroundColor: 'var(--tg-theme-secondary-bg-color, #f1f1f1)',
                  color: 'var(--tg-theme-text-color, #000000)'
                }}
              >
                {this.state.error.message}
                {'\n'}
                {this.state.error.stack}
              </pre>
            </details>
          )}
          
          {/* Кнопки действий */}
          <div className="flex flex-col gap-3 w-full max-w-xs">
            <button
              onClick={this.handleRetry}
              className="tg-button w-full"
            >
              Попробовать снова
            </button>
            
            <button
              onClick={this.handleReload}
              className="
                px-4 
                py-2 
                border 
                rounded-lg 
                text-sm 
                font-medium
                w-full
              "
              style={{
                borderColor: 'var(--tg-theme-hint-color, #999999)',
                color: 'var(--tg-theme-text-color, #000000)'
              }}
            >
              Перезагрузить приложение
            </button>
          </div>
        </div>
      )
    }

    return this.props.children
  }
}

export default ErrorBoundary 