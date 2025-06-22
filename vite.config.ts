/**
 * Конфигурация Vite для Telegram Web App "Совет Экспертов"
 * Оптимизирована для сборки и разработки Telegram Mini App
 */

import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import { resolve } from 'path'
import tailwindcss from '@tailwindcss/vite'




// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react(), tailwindcss(),],

  // Настройки для разработки
  server: {
    port: 5173,
    host: true, // Позволяет подключаться с других устройств в сети
    strictPort: false,
    // Разрешаем запросы от нашего домена
    allowedHosts: [
      'localhost',
      '127.0.0.1',
      'sovetum.ru',
      'www.sovetum.ru',
      '.sovetum.ru', // Включает все поддомены
      'local.sovetum.ru'
    ],
    hmr: {
      port: 3001 // Отдельный порт для Hot Module Replacement
    },

  },




  // Настройки для сборки
  build: {
    outDir: 'dist',
    assetsDir: 'assets',
    sourcemap: false, // Отключаем sourcemap для продакшена
    minify: 'terser',
    target: 'es2020',
    
    // Оптимизация размера бандла
    rollupOptions: {
      output: {
        manualChunks: {
          // Выносим крупные зависимости в отдельные чанки
          'react-vendor': ['react', 'react-dom'],
          'router-vendor': ['react-router-dom'],
          'telegram-vendor': ['@telegram-apps/sdk-react'],
          'ui-vendor': ['zustand', 'axios']
        }
      }
    },
    
    // Сжатие и оптимизация
    chunkSizeWarningLimit: 1000, // Предупреждение для чанков больше 1MB
    
    // Настройки терсера для лучшего сжатия
    terserOptions: {
      compress: {
        drop_console: true, // Удаляем console.log в продакшене
        drop_debugger: true
      }
    }
  },
  
  // Алиасы для удобного импорта
  resolve: {
    alias: {
      '@': resolve(__dirname, 'src'),
      '@components': resolve(__dirname, 'src/components'),
      '@pages': resolve(__dirname, 'src/pages'),
      '@hooks': resolve(__dirname, 'src/hooks'),
      '@services': resolve(__dirname, 'src/services'),
      '@types': resolve(__dirname, 'src/types'),
      '@utils': resolve(__dirname, 'src/utils'),
      '@styles': resolve(__dirname, 'src/styles'),
      '@store': resolve(__dirname, 'src/store')
    }
  },
  
  // Настройки окружения
  define: {
    // Передаем переменные окружения в сборку
    __DEV__: JSON.stringify(process.env.NODE_ENV === 'development'),
    __PROD__: JSON.stringify(process.env.NODE_ENV === 'production')
  },
  
  // Настройки для Telegram Web App
  base: './', // Относительные пути для лучшей совместимости
  
  // Оптимизация зависимостей
  optimizeDeps: {
    include: [
      'react',
      'react-dom',
      'react-router-dom',
      '@telegram-apps/sdk-react',
      'zustand',
      'axios'
    ]
  },
  
  // CSS настройки
  css: {
    modules: {
      localsConvention: 'camelCase'
    },
    postcss: {
      plugins: [
        // PostCSS плагины можно добавить здесь при необходимости
      ]
    }
  },
  
  // Preview настройки для тестирования сборки
  preview: {
    port: 3002,
    host: true,
    strictPort: true,
    // Также разрешаем хосты для preview режима
    allowedHosts: [
      'localhost',
      '127.0.0.1',
      'sovetum.ru',
      'www.sovetum.ru',
      '.sovetum.ru'
    ]
  }
}) 