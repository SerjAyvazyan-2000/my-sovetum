/**
 * Простая тестовая страница для диагностики
 * Минимальный компонент без сложной логики + ссылки для тестирования
 */

import React from 'react'

const SimpleTestPage: React.FC = () => {
  console.log('🧪 SimpleTestPage отрендерен успешно!')
  
  /**
   * Обработчик сброса данных приложения
   */
  const handleResetData = () => {
    const keysToRemove = [
      'sovetum_has_visited',
      'sovetum_onboarding_completed', 
      'sovetum_selected_interests',
      'sovetum_first_expert'
    ]
    
    keysToRemove.forEach(key => {
      localStorage.removeItem(key)
    })
    
    alert('✅ Данные приложения сброшены!')
    console.log('🔄 localStorage очищен для тестирования')
  }
  
  return (
    <div style={{ 
      padding: '20px', 
      backgroundColor: '#ffffff',
      minHeight: '100vh',
      fontFamily: 'Arial, sans-serif'
    }}>
      <h1 style={{ color: '#333333', marginBottom: '20px' }}>
        ✅ Тестовая страница работает!
      </h1>
      
      <div style={{ 
        backgroundColor: '#f0f0f0', 
        padding: '15px', 
        borderRadius: '8px',
        marginBottom: '20px'
      }}>
        <p style={{ margin: 0, color: '#666666' }}>
          Проблема с маршрутизацией решена. Теперь можно тестировать экраны!
        </p>
      </div>
      
      {/* Управление данными */}
      <div style={{ marginBottom: '30px' }}>
        <h3 style={{ color: '#333333', marginBottom: '15px' }}>Управление данными:</h3>
        <button 
          onClick={handleResetData}
          style={{
            backgroundColor: '#dc3545',
            color: 'white',
            border: 'none',
            padding: '10px 20px',
            borderRadius: '6px',
            fontSize: '14px',
            cursor: 'pointer',
            marginRight: '10px'
          }}
        >
          🔄 Сбросить данные
        </button>
        
        <button 
          onClick={() => {
            console.log('🔄 Кнопка JavaScript нажата!')
            alert('JavaScript работает!')
          }}
          style={{
            backgroundColor: '#007cba',
            color: 'white',
            border: 'none',
            padding: '10px 20px',
            borderRadius: '6px',
            fontSize: '14px',
            cursor: 'pointer'
          }}
        >
          Проверить JavaScript
        </button>
      </div>
      
      {/* Ссылки для тестирования экранов */}
      <div style={{ marginBottom: '30px' }}>
        <h3 style={{ color: '#333333', marginBottom: '15px' }}>Тестирование экранов:</h3>
        
        <div style={{ display: 'grid', gap: '10px', maxWidth: '400px' }}>
          <a 
            href="/splash" 
            style={{ 
              display: 'block',
              padding: '12px 16px', 
              backgroundColor: '#e8f5e8', 
              color: '#388e3c',
              textDecoration: 'none',
              borderRadius: '6px',
              border: '1px solid #c8e6c9'
            }}
            onClick={() => console.log('🧪 Переход к: New SplashScreen')}
          >
            🚀 Новый SplashScreen (с анимациями)
          </a>
          
          <a 
            href="/welcome" 
            style={{ 
              display: 'block',
              padding: '12px 16px', 
              backgroundColor: '#e3f2fd', 
              color: '#1976d2',
              textDecoration: 'none',
              borderRadius: '6px',
              border: '1px solid #bbdefb'
            }}
            onClick={() => console.log('🧪 Переход к: Welcome Screen')}
          >
            👋 Старый приветственный экран
          </a>
          
          <a 
            href="/onboarding/expert-selection" 
            style={{ 
              display: 'block',
              padding: '12px 16px', 
              backgroundColor: '#f3e5f5', 
              color: '#7b1fa2',
              textDecoration: 'none',
              borderRadius: '6px',
              border: '1px solid #e1bee7'
            }}
            onClick={() => console.log('🧪 Переход к: Interest Selection')}
          >
            🎯 Выбор интересов
          </a>
          
          <a 
            href="/onboarding/expert-introduction" 
            style={{ 
              display: 'block',
              padding: '12px 16px', 
              backgroundColor: '#e8f5e8', 
              color: '#388e3c',
              textDecoration: 'none',
              borderRadius: '6px',
              border: '1px solid #c8e6c9'
            }}
            onClick={() => console.log('🧪 Переход к: Expert Introduction')}
          >
            👥 Знакомство с экспертами
          </a>
          
          <a 
            href="/home" 
            style={{ 
              display: 'block',
              padding: '12px 16px', 
              backgroundColor: '#fff3e0', 
              color: '#f57c00',
              textDecoration: 'none',
              borderRadius: '6px',
              border: '1px solid #ffcc02'
            }}
            onClick={() => console.log('🧪 Переход к: Home Page')}
          >
            🏠 Главная страница
          </a>
        </div>
      </div>
      
      {/* Инструкции */}
      <div style={{ marginBottom: '20px' }}>
        <h3 style={{ color: '#333333' }}>Инструкции по тестированию:</h3>
        <ol style={{ color: '#666666', lineHeight: '1.6' }}>
          <li>Нажмите "🔄 Сбросить данные" для чистого состояния</li>
          <li>Кликните "👋 Приветственный экран" для начала онбординга</li>
          <li>Следуйте flow: Приветствие → Интересы → Эксперты</li>
          <li>Проверьте навигацию и анимации</li>
          <li>Откройте консоль браузера (F12) для отслеживания логов</li>
        </ol>
      </div>
      
      {/* Информация о состоянии */}
      <div style={{ 
        marginTop: '30px',
        padding: '15px',
        backgroundColor: '#f8f9fa',
        borderRadius: '6px',
        border: '1px solid #dee2e6'
      }}>
        <h4 style={{ color: '#333333', marginBottom: '10px' }}>📊 Текущее состояние:</h4>
        <div style={{ fontSize: '14px', color: '#666666' }}>
          <div>Посещал: {localStorage.getItem('sovetum_has_visited') ? '✅' : '❌'}</div>
          <div>Онбординг: {localStorage.getItem('sovetum_onboarding_completed') ? '✅' : '❌'}</div>
          <div>Интересы: {localStorage.getItem('sovetum_selected_interests') ? '✅' : '❌'}</div>
          <div>Первый эксперт: {localStorage.getItem('sovetum_first_expert') || '❌'}</div>
        </div>
      </div>
      
      <div style={{ 
        marginTop: '30px',
        fontSize: '12px',
        color: '#999999'
      }}>
        Время: {new Date().toLocaleString()}
      </div>
    </div>
  )
}

export default SimpleTestPage 