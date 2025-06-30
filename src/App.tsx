/**
 * Главный компонент приложения "Совет Экспертов"
 * Содержит роутинг, Telegram SDK интеграцию и общую логику приложения
 */

import React, { useEffect } from 'react'
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom'

// Импортируем страницы
import HomePage from './pages/HomePage'
import ChatPage from './pages/ChatPage'
import ProfilePage from './pages/ProfilePage'

// Импортируем экраны онбординга
import InterestSelectionScreen from './pages/InterestSelectionScreen'
import ExpertIntroductionScreen from './pages/ExpertIntroductionScreen'

// Импортируем новый SplashScreen
import SplashScreen from './pages/Onboarding/SplashScreen'
import OnboardingWelcomeScreen from '@pages/Onboarding/OnboardingWelcomeScreen.tsx'
import OnboardingDemo from './pages/OnboardingDemo'
import InterestScreen from '@pages/Onboarding/InterestScreen.tsx'

// Импортируем тестовую страницу
import SimpleTestPage from './pages/SimpleTestPage'

// Импортируем компоненты
import Layout from './components/layout/Layout'
import ErrorBoundary from './components/common/ErrorBoundary'
import Loading from './components/common/Loading'

// Импортируем хуки
import { useTelegramTheme } from './hooks/useTelegramTheme'

// Импортируем стили
import './styles/globals.css'
import AcquaintanceScreen from "@pages/Onboarding/AcquaintanceScreen.tsx";
import WelcomeScreen from './pages/WelcomeScreen'
import ConsultationsScreen from "@pages/Onboarding/ConsultationsScreen.tsx";
import Home from "@pages/Onboarding/Home.tsx";
import CreateExpert from "@pages/Onboarding/CreateExpert.tsx";
import CreateExpertStep1 from "@pages/Onboarding/CreateExpertStep1.tsx";
import CreateExpertStep2 from './pages/Onboarding/CreateExpertStep2'
import CreateExpertStep3 from './pages/Onboarding/CreateExpertStep3'
import CreateExpertStep4 from './pages/Onboarding/CreateExpertStep4'
import Settings from "@pages/Onboarding/Settings.tsx";
import MyExperts from './pages/Onboarding/MyExperts'
import PremiumSub from "@pages/Onboarding/PremiumSub.tsx";
import ChatWithExpert from '@pages/Onboarding/ChatWithExpert.tsx'
import ExpertProfile from './pages/Onboarding/ExpertProfile'
import Analytics from './pages/Onboarding/Analytics'
import Progress from './pages/Onboarding/Progress'
import ExpertMeetings from './pages/Onboarding/ExpertMeetings'
import NewMeeting from './pages/Onboarding/NewMeeting'
import NewMeetingStep2 from './pages/Onboarding/NewMeetingStep2'
import NewMeetingStep3 from './pages/Onboarding/NewMeetingStep3'
import ImproveFinancial from './pages/Onboarding/ImproveFinancial'
import Meeting from './pages/Onboarding/Meeting'
import ResultsMeeting from "@pages/Onboarding/ResultsMeeting.tsx";

/**
 * Основной компонент приложения
 * Обеспечивает инициализацию, роутинг и управление состоянием
 */
function App() {
  // Применяем тему Telegram к приложению (работает и без Telegram)
  useTelegramTheme()


  // Состояние для проверки первого запуска
  const [isFirstVisit, setIsFirstVisit] = React.useState<boolean | null>(null)
  const [isReady, setIsReady] = React.useState(false)

  // Эффект для проверки первого запуска
  useEffect(() => {
    const checkFirstVisit = () => {
      try {
        const hasVisited = localStorage.getItem('sovetum_has_visited')
        const firstVisit = !hasVisited
        
        console.log('🔍 Проверка первого запуска:', firstVisit ? 'Да' : 'Нет')
        setIsFirstVisit(firstVisit)
        setIsReady(true)
      } catch (error) {
        console.error('❌ Ошибка при проверке первого запуска:', error)
        // Устанавливаем дефолтные значения при ошибке
        setIsFirstVisit(false)
        setIsReady(true)
      }
    }
    
    checkFirstVisit()
  }, [])

  useEffect(() => {
    document.documentElement.style.scrollBehavior = 'auto';
    window.scrollTo(0, 0);
  }, [window.location.pathname]);

  // Эффект для инициализации приложения
  useEffect(() => {
    console.log('🎯 App компонент инициализирован')
    
    // Проверяем доступность Telegram SDK без ошибок
    const checkTelegramSDK = () => {
      try {
        if (typeof window !== 'undefined' && window.Telegram?.WebApp) {
          console.log('📱 Telegram WebApp обнаружен')
          const webApp = window.Telegram.WebApp
          
          // Инициализируем WebApp если доступен
          if (webApp.ready) {
            webApp.ready()
          }
          
          // Устанавливаем кнопку "Назад" если нужно
          if (webApp.BackButton) {
            webApp.BackButton.hide()
          }
          
          console.log('✅ Telegram SDK инициализирован успешно')
        } else {
          console.log('🌐 Запуск в браузере (без Telegram)')
        }
      } catch (error) {
        console.warn('⚠️ Ошибка инициализации Telegram SDK:', error)
        // Игнорируем ошибки SDK для работы в браузере
      }
    }
    
    checkTelegramSDK()
  }, [])
  
  // Если еще инициализируемся, показываем загрузку
  if (!isReady || isFirstVisit === null) {
    return (
      <div className="min-h-screen  bg-gray-100 dark:bg-gray-900 flex items-center justify-center">
        <Loading text="Инициализация приложения..." />
      </div>
    )
  }





  
  return (
    <ErrorBoundary>
      <Router>
        <Layout>
          <Routes>
            {/* Тестовая страница для разработки - ВСЕГДА доступна первой */}
            <Route path="/testing" element={<SimpleTestPage />} />
            
            {/* Демо страница для онбординга */}
            <Route path="/onboarding-demo" element={<OnboardingDemo />} />
            
            {/* Новый SplashScreen с анимациями */}
            <Route path="/splash" element={<SplashScreen />} />
            
            {/* Экраны онбординга */}
            <Route path="/onboarding/welcome" element={<OnboardingWelcomeScreen />} />
            <Route path="/onboarding/acquaintance" element={<AcquaintanceScreen />} />
            <Route path="/onboarding/interest" element={<InterestScreen />} />
            <Route path="/onboarding/consultation" element={<ConsultationsScreen />} />
            <Route path="/onboarding/home" element={<Home />} />
            <Route path="/onboarding/createExpert" element={<CreateExpert />} />
            <Route path="/onboarding/createExpertStep1" element={<CreateExpertStep1 />} />
            <Route path="/onboarding/createExpertStep2" element={<CreateExpertStep2 />} />
            <Route path="/onboarding/createExpertStep3" element={<CreateExpertStep3 />} />
            <Route path="/onboarding/createExpertStep4" element={<CreateExpertStep4 />} />
            <Route path="/onboarding/settings" element={<Settings />} />
            <Route path="/onboarding/myExperts" element={<MyExperts />} />
            <Route path="/onboarding/premiumSub" element={<PremiumSub />} />
            <Route path="/onboarding/chatWithExpert" element={<ChatWithExpert />} />
            <Route path="/onboarding/expertProfile" element={<ExpertProfile />} />
            <Route path="/onboarding/analytics" element={<Analytics />} />

            <Route path="/onboarding/progress" element={<Progress />} />
            <Route path="/onboarding/expertMeetings" element={<ExpertMeetings />} />
            <Route path="/onboarding/newMeeting" element={<NewMeeting />} />
            <Route path="/onboarding/newMeetingStep2" element={<NewMeetingStep2 />} />
            <Route path="/onboarding/newMeetingStep3" element={<NewMeetingStep3 />} />
            <Route path="/onboarding/improveFinancial" element={<ImproveFinancial />} />
            <Route path="/onboarding/meeting" element={<Meeting />} />
            <Route path="/onboarding/resultsMeeting" element={<ResultsMeeting />} />






            <Route path="/welcome" element={<WelcomeScreen />} />


            <Route path="/onboarding/expert-selection" element={<InterestSelectionScreen />} />
            <Route path="/onboarding/expert-introduction" element={<ExpertIntroductionScreen />} />
            
            {/* Основные страницы приложения */}
            <Route path="/home" element={<HomePage />} />
            <Route path="/chat/:expertId" element={<ChatPage />} />
            <Route path="/profile" element={<ProfilePage />} />
            
            {/* Главная страница с логикой первого запуска */}
            <Route 
              path="/" 
              element={<Navigate to="/onboarding/welcome" replace />} 
            />
          </Routes>
        </Layout>
      </Router>
    </ErrorBoundary>
  )
}

export default App 