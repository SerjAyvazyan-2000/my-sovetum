/**
 * Сервис для работы с экспертами
 * Интегрируется с Django AI Engine API endpoints
 * Поддерживает контекст разговоров через localStorage
 */

import { ApiService } from './api';

/**
 * Интерфейс эксперта согласно Django модели
 */
export interface Expert {
  id: number;
  name: string;
  role: string;
  description: string;
  avatar_url?: string;
  expertise_areas: string[];
  total_conversations: number;
  total_messages: number;
  average_rating: number;
  required_subscription: 'free' | 'pro' | 'premium';
  is_available: boolean;
}

/**
 * Интерфейс сообщения в чате
 */
export interface ChatMessage {
  id: number;
  message_type: 'user' | 'expert' | 'system';
  content: string;
  created_at: string;
  user_rating?: number;
  metadata?: {
    model_used?: string;
    tokens_used?: number;
    generation_time?: number;
    temperature?: number;
    provider?: string;
  };
}

/**
 * Интерфейс сессии разговора
 */
export interface ConversationSession {
  id: number;
  title: string;
  status: string;
  total_messages: number;
  created_at: string;
  last_activity: string;
  context_summary?: string;
  expert: {
    id: number;
    name: string;
    role: string;
    avatar_url?: string;
  };
  last_message?: {
    content: string;
    created_at: string;
    message_type: string;
  };
}

/**
 * Ответ при отправке сообщения эксперту
 */
export interface SendMessageResponse {
  success: boolean;
  session_id: number;
  user_message: {
    id: number;
    content: string;
    created_at: string;
  };
  expert_response: {
    id: number;
    content: string;
    created_at: string;
    metadata?: any;
  };
  expert: {
    id: number;
    name: string;
    role?: string;
    avatar_url?: string;
  };
  error?: string;
}

/**
 * Параметры для отправки сообщения
 */
export interface SendMessageRequest {
  expert_id: number;
  message: string;
  session_id?: number;
}

/**
 * Ответ при получении списка экспертов
 */
export interface ExpertsResponse {
  experts: Expert[];
  user_subscription: string;
}

/**
 * Ответ при получении сессий пользователя
 */
export interface SessionsResponse {
  sessions: ConversationSession[];
  has_more: boolean;
}

/**
 * Ответ при получении сообщений сессии
 */
export interface SessionMessagesResponse {
  session: ConversationSession;
  messages: ChatMessage[];
  has_more: boolean;
}

/**
 * Ответ при получении последней активной сессии
 */
export interface LastActiveSessionResponse {
  has_session: boolean;
  session: ConversationSession | null;
  last_messages: ChatMessage[];
  expert?: {
    id: number;
    name: string;
    role: string;
    avatar_url?: string;
    description?: string;
  };
  metadata?: {
    messages_loaded?: number;
    session_restored_at?: string;
    cache_hit?: boolean;
    session_priority_score?: number;
  };
}

/**
 * Интерфейс для статистики сессий пользователя
 */
export interface UserSessionsStatistics {
  general_stats: {
    total_sessions: number;
    total_messages: number;
    active_sessions_count: number;
    experts_used: number;
    period_days: number;
    avg_messages_per_session: number;
  };
  expert_stats: ExpertStatistics[];
  active_sessions: ActiveSessionInfo[];
  resumable_sessions: ResumableSessionInfo[];
  recommendations: SessionRecommendation[];
  metadata: {
    generated_at: string;
    period_start: string;
    period_end: string;
  };
}

/**
 * Статистика по конкретному эксперту
 */
export interface ExpertStatistics {
  expert: {
    id: number;
    name: string;
    role: string;
    avatar_url?: string;
  };
  total_sessions: number;
  total_messages: number;
  active_sessions: number;
  last_activity: string | null;
  avg_session_length: number;
  priority_score: number;
}

/**
 * Информация об активной сессии
 */
export interface ActiveSessionInfo {
  session_id: number;
  expert_id: number;
  expert_name: string;
  last_activity: string;
  total_messages: number;
  title: string;
  priority_score: number;
}

/**
 * Информация о сессии, готовой к восстановлению
 */
export interface ResumableSessionInfo {
  session_id: number;
  expert_id: number;
  expert_name: string;
  last_activity: string;
  total_messages: number;
  priority_score: number;
  status: string;
  context_summary?: string;
}

/**
 * Рекомендация по работе с сессией
 */
export interface SessionRecommendation {
  type: 'resume_session' | 'new_session' | 'complete_session';
  session_id: number;
  expert_id: number;
  recommendation: string;
  priority: number;
}

/**
 * Ключи для localStorage
 */
const STORAGE_KEYS = {
  EXPERT_SESSIONS: 'sovetum_expert_sessions',
  ACTIVE_SESSION: 'sovetum_active_session'
} as const;

/**
 * Интерфейс для хранения данных сессий в localStorage
 */
interface StoredSessionData {
  expertId: number;
  sessionId: number;
  lastActivity: string;
  expertName: string;
  expertRole?: string;
}

/**
 * Интерфейс для активной сессии
 */
interface ActiveSessionData {
  expertId: number;
  sessionId: number;
  expertName: string;
}

/**
 * Сервис для работы с AI экспертами
 * Предоставляет методы для взаимодействия с Django backend
 * Автоматически поддерживает контекст через сессии
 */
export class ExpertService extends ApiService {
  
  /**
   * Получает сохранённые сессии из localStorage
   */
  private getStoredSessions(): Record<number, StoredSessionData> {
    try {
      const stored = localStorage.getItem(STORAGE_KEYS.EXPERT_SESSIONS);
      return stored ? JSON.parse(stored) : {};
    } catch (error) {
      console.warn('⚠️ Ошибка чтения сессий из localStorage:', error);
      return {};
    }
  }

  /**
   * Сохраняет данные сессии в localStorage
   */
  private saveSessionData(expertId: number, sessionData: StoredSessionData): void {
    try {
      const sessions = this.getStoredSessions();
      sessions[expertId] = sessionData;
      localStorage.setItem(STORAGE_KEYS.EXPERT_SESSIONS, JSON.stringify(sessions));
      
      console.log(`💾 Сессия сохранена для эксперта ${expertId}:`, sessionData);
    } catch (error) {
      console.warn('⚠️ Ошибка сохранения сессии в localStorage:', error);
    }
  }

  /**
   * Получает ID активной сессии для эксперта
   */
  getExpertSessionId(expertId: number): number | null {
    const sessions = this.getStoredSessions();
    const sessionData = sessions[expertId];
    
    if (!sessionData) {
      console.log(`📝 Нет сохранённой сессии для эксперта ${expertId}`);
      return null;
    }

    // Проверяем, не устарела ли сессия (например, больше 24 часов)
    const lastActivity = new Date(sessionData.lastActivity);
    const now = new Date();
    const hoursSinceLastActivity = (now.getTime() - lastActivity.getTime()) / (1000 * 60 * 60);
    
    if (hoursSinceLastActivity > 24) {
      console.log(`⏰ Сессия для эксперта ${expertId} устарела (${hoursSinceLastActivity.toFixed(1)}ч назад)`);
      this.clearExpertSession(expertId);
      return null;
    }

    console.log(`🔄 Используем сохранённую сессию ${sessionData.sessionId} для эксперта ${expertId}`);
    return sessionData.sessionId;
  }

  /**
   * Устанавливает активную сессию
   */
  private setActiveSession(expertId: number, sessionId: number, expertName: string): void {
    try {
      const activeSession: ActiveSessionData = {
        expertId,
        sessionId,
        expertName
      };
      localStorage.setItem(STORAGE_KEYS.ACTIVE_SESSION, JSON.stringify(activeSession));
      console.log(`✅ Установлена активная сессия:`, activeSession);
    } catch (error) {
      console.warn('⚠️ Ошибка установки активной сессии:', error);
    }
  }

  /**
   * Получает данные активной сессии
   */
  getActiveSession(): ActiveSessionData | null {
    try {
      const stored = localStorage.getItem(STORAGE_KEYS.ACTIVE_SESSION);
      return stored ? JSON.parse(stored) : null;
    } catch (error) {
      console.warn('⚠️ Ошибка чтения активной сессии:', error);
      return null;
    }
  }

  /**
   * Очищает сессию для конкретного эксперта
   */
  clearExpertSession(expertId: number): void {
    try {
      const sessions = this.getStoredSessions();
      delete sessions[expertId];
      localStorage.setItem(STORAGE_KEYS.EXPERT_SESSIONS, JSON.stringify(sessions));
      
      // Очищаем активную сессию, если она принадлежит этому эксперту
      const activeSession = this.getActiveSession();
      if (activeSession && activeSession.expertId === expertId) {
        localStorage.removeItem(STORAGE_KEYS.ACTIVE_SESSION);
      }
      
      console.log(`🧹 Сессия для эксперта ${expertId} очищена`);
    } catch (error) {
      console.warn('⚠️ Ошибка очистки сессии:', error);
    }
  }

  /**
   * Создаёт новую сессию для эксперта (принудительно)
   */
  createNewSession(expertId: number): void {
    console.log(`🆕 Создание новой сессии для эксперта ${expertId}`);
    this.clearExpertSession(expertId);
  }

  /**
   * Очищает все сессии
   */
  clearAllSessions(): void {
    try {
      localStorage.removeItem(STORAGE_KEYS.EXPERT_SESSIONS);
      localStorage.removeItem(STORAGE_KEYS.ACTIVE_SESSION);
      console.log('🧹 Все сессии очищены');
    } catch (error) {
      console.warn('⚠️ Ошибка очистки всех сессий:', error);
    }
  }

  /**
   * Получает информацию о всех активных сессиях
   */
  getAllSessions(): Record<number, StoredSessionData> {
    return this.getStoredSessions();
  }

  /**
   * Получает список доступных экспертов
   * Использует Telegram Web App endpoint без аутентификации
   */
  async getExperts(): Promise<ExpertsResponse> {
    try {
      console.log('📥 Загрузка списка экспертов из Telegram Web App...');
      
      // Используем новый Telegram endpoint без аутентификации
      const response = await this.get<ExpertsResponse>('/ai-engine/telegram/experts/');
      
      console.log('✅ Экспертов загружено с backend:', response.experts.length);
      return response;
    } catch (error: any) {
      console.error('❌ Ошибка загрузки экспертов:', error);
      
      // Fallback: возвращаем локальные данные если API недоступен
      console.log('🔄 Переключение на fallback данные экспертов');
      
      const fallbackExperts: Expert[] = [
        {
          id: 1,
          name: 'Александр Бизнесов',
          role: 'Бизнес-консультант',
          description: 'Опытный предприниматель и стратег. Помогу с планированием бизнеса, анализом рынка и развитием компании.',
          expertise_areas: ['business', 'entrepreneurship', 'strategy'],
          total_conversations: 0,
          total_messages: 0,
          average_rating: 0,
          required_subscription: 'free',
          is_available: true
        },
        {
          id: 2,
          name: 'Елена Психологова',
          role: 'Психолог-консультант',
          description: 'Помогу разобраться с личными вопросами, отношениями и эмоциональными проблемами.',
          expertise_areas: ['psychology', 'relationships', 'mental_health'],
          total_conversations: 0,
          total_messages: 0,
          average_rating: 0,
          required_subscription: 'free',
          is_available: true
        },
        {
          id: 3,
          name: 'Дмитрий Финансов',
          role: 'Финансовый советник',
          description: 'Консультации по инвестициям, планированию бюджета и финансовой грамотности.',
          expertise_areas: ['finance', 'investing', 'budgeting'],
          total_conversations: 0,
          total_messages: 0,
          average_rating: 0,
          required_subscription: 'pro',
          is_available: true
        },
        {
          id: 4,
          name: 'Анна Карьерова',
          role: 'Карьерный коуч',
          description: 'Помогу с выбором профессии, поиском работы и карьерным развитием.',
          expertise_areas: ['career', 'job_search', 'professional_development'],
          total_conversations: 0,
          total_messages: 0,
          average_rating: 0,
          required_subscription: 'free',
          is_available: true
        },
        {
          id: 5,
          name: 'Максим Техников',
          role: 'IT-эксперт',
          description: 'Консультации по технологиям, программированию и IT-карьере.',
          expertise_areas: ['technology', 'programming', 'it_career'],
          total_conversations: 0,
          total_messages: 0,
          average_rating: 0,
          required_subscription: 'pro',
          is_available: true
        }
      ];
      
      return {
        experts: fallbackExperts,
        user_subscription: 'free'
      };
    }
  }

  /**
   * Отправляет сообщение эксперту
   * Автоматически использует сохранённую сессию или создаёт новую
   * Использует Telegram Web App endpoint без аутентификации
   */
  async sendMessage(request: SendMessageRequest): Promise<SendMessageResponse> {
    try {
      console.log('📤 Отправка сообщения эксперту через Telegram API:', request.expert_id);
      
      // Автоматически получаем сохранённую сессию, если session_id не передан
      let sessionId: number | undefined = request.session_id;
      if (!sessionId) {
        const savedSessionId = this.getExpertSessionId(request.expert_id);
        sessionId = savedSessionId || undefined;
        console.log(`🔍 Автоматически найден session_id: ${sessionId || 'нет'}`);
      }

      // Подготавливаем данные для отправки
      const sendData = {
        expert_id: request.expert_id,
        message: request.message,
        session_id: sessionId
      };

      console.log('📡 Отправляемые данные:', sendData);
      
      // Используем новый Telegram endpoint без аутентификации
      const response = await this.post<SendMessageResponse>('/ai-engine/telegram/message/', sendData);
      
      if (response.success) {
        console.log('✅ Получен ответ от эксперта через Telegram API');
        
        // Сохраняем информацию о сессии для будущих запросов
        const expertData = response.expert;
        this.saveSessionData(request.expert_id, {
          expertId: request.expert_id,
          sessionId: response.session_id,
          lastActivity: new Date().toISOString(),
          expertName: expertData.name,
          expertRole: expertData.role ?? 'AI Консультант'
        });

        // Устанавливаем активную сессию
        this.setActiveSession(
          request.expert_id, 
          response.session_id, 
          expertData.name
        );

        console.log(`💾 Контекст сохранён: сессия ${response.session_id} для эксперта ${expertData.name}`);
        
        return response;
      } else {
        throw new Error(response.error || 'Неизвестная ошибка');
      }
    } catch (error: any) {
      console.error('❌ Ошибка отправки сообщения через Telegram API:', error);
      
      // Fallback: создаем локальный ответ
      console.log('🔄 Генерация fallback ответа эксперта');
      
      const fallbackResponses = [
        'Понимаю ваш вопрос. К сожалению, сейчас у меня проблемы с подключением к AI серверу.',
        'Спасибо за ваше сообщение! Технические неполадки мешают мне дать полноценный ответ.',
        'Ваш запрос важен для меня. Попробуйте отправить сообщение еще раз через несколько минут.',
        'Временные технические трудности. Работаем над решением проблемы!',
        'Извините за задержку. Сейчас есть проблемы с AI системой, но скоро все наладится.'
      ];
      
      const randomResponse: string = fallbackResponses[Math.floor(Math.random() * fallbackResponses.length)] || 'Технические неполадки. Попробуйте позже.';
      
      // Возвращаем fallback ответ в формате API
      const savedSessionId = this.getExpertSessionId(request.expert_id);
      const fallbackSessionId = request.session_id || savedSessionId || Date.now();
      
      const fallbackResponse: SendMessageResponse = {
        success: true,
        session_id: fallbackSessionId,
        user_message: {
          id: Date.now(),
          content: request.message,
          created_at: new Date().toISOString()
        },
        expert_response: {
          id: Date.now() + 1,
          content: randomResponse,
          created_at: new Date().toISOString(),
          metadata: {
            provider: 'fallback',
            generation_time: 0.1,
            tokens_used: 0
          }
        },
        expert: {
          id: request.expert_id,
          name: 'Эксперт'
        }
      };
      
      return fallbackResponse;
    }
  }

  /**
   * Получает сессии разговоров пользователя
   * Соответствует Django endpoint: GET /api/v1/ai-engine/sessions/
   */
  async getUserSessions(expertId?: number, limit = 20, offset = 0): Promise<SessionsResponse> {
    try {
      console.log('📥 Загрузка сессий пользователя...');
      
      const params: any = { limit, offset };
      if (expertId) {
        params.expert_id = expertId;
      }
      
      const response = await this.get<SessionsResponse>('/ai-engine/sessions/', params);
      console.log('✅ Сессий загружено:', response.sessions.length);
      return response;
    } catch (error) {
      console.error('❌ Ошибка загрузки сессий:', error);
      throw new Error('Не удалось загрузить историю разговоров');
    }
  }

  /**
   * Получает сообщения конкретной сессии
   * Соответствует Django endpoint: GET /api/v1/ai-engine/sessions/{id}/messages/
   */
  async getSessionMessages(sessionId: number, limit = 50, offset = 0): Promise<SessionMessagesResponse> {
    try {
      console.log('📥 Загрузка сообщений сессии:', sessionId);
      
      const response = await this.get<SessionMessagesResponse>(
        `/ai-engine/sessions/${sessionId}/messages/`,
        { limit, offset }
      );
      
      console.log('✅ Сообщений загружено:', response.messages.length);
      return response;
    } catch (error) {
      console.error('❌ Ошибка загрузки сообщений:', error);
      throw new Error('Не удалось загрузить историю сообщений');
    }
  }

  /**
   * Оценивает сообщение эксперта
   * Соответствует Django endpoint: POST /api/v1/ai-engine/messages/{id}/rate/
   */
  async rateMessage(messageId: number, rating: number): Promise<{ success: boolean; message: string }> {
    try {
      console.log('⭐ Оценка сообщения:', messageId, 'рейтинг:', rating);
      
      if (rating < 1 || rating > 5) {
        throw new Error('Рейтинг должен быть от 1 до 5');
      }
      
      const response = await this.post<{ success: boolean; message: string }>(
        `/ai-engine/messages/${messageId}/rate/`,
        { rating }
      );
      
      console.log('✅ Рейтинг сохранён');
      return response;
    } catch (error) {
      console.error('❌ Ошибка сохранения рейтинга:', error);
      throw new Error('Не удалось сохранить оценку');
    }
  }

  /**
   * Взаимодействие через Telegram Web App API
   * Соответствует Django endpoint: POST /api/v1/ai-engine/telegram-app/
   */
  async telegramWebAppAction(action: string, data: any): Promise<any> {
    try {
      console.log('📱 Telegram Web App действие:', action);
      
      const response = await this.post('/ai-engine/telegram-app/', {
        action,
        ...data,
        telegram_user: window.Telegram?.WebApp?.initDataUnsafe?.user
      });
      
      console.log('✅ Telegram Web App ответ получен');
      return response;
    } catch (error) {
      console.error('❌ Ошибка Telegram Web App:', error);
      throw error;
    }
  }

  /**
   * Получает данные конкретного эксперта по ID
   * Вспомогательный метод для извлечения эксперта из общего списка
   */
  async getExpertById(expertId: number): Promise<Expert | null> {
    try {
      const { experts } = await this.getExperts();
      return experts.find(expert => expert.id === expertId) || null;
    } catch (error) {
      console.error('❌ Ошибка получения эксперта:', error);
      return null;
    }
  }

  /**
   * Проверяет доступность эксперта для пользователя
   */
  async isExpertAvailable(expertId: number): Promise<boolean> {
    try {
      const expert = await this.getExpertById(expertId);
      return expert?.is_available || false;
    } catch (error) {
      console.error('❌ Ошибка проверки доступности эксперта:', error);
      return false;
    }
  }

  /**
   * Получает последнюю активную сессию пользователя с экспертом
   * Соответствует Django endpoint: GET /api/v1/ai-engine/sessions/last/
   * Автоматически сохраняет найденную сессию в localStorage для быстрого доступа
   */
  async getLastActiveSession(expertId: number, includeInactive = false): Promise<LastActiveSessionResponse> {
    try {
      console.log('🔍 Поиск последней активной сессии для эксперта:', expertId);
      
      const response = await this.get<LastActiveSessionResponse>('/ai-engine/sessions/last/', {
        expert_id: expertId,
        include_inactive: includeInactive ? 'true' : 'false'
      });
      
      if (response.has_session && response.session) {
        console.log('✅ Найдена активная сессия:', response.session.id);
        console.log(`📊 Приоритет сессии: ${response.metadata?.session_priority_score || 'N/A'}`);
        
        // Автоматически сохраняем информацию о найденной сессии в localStorage
        this.saveSessionData(expertId, {
          expertId: expertId,
          sessionId: response.session.id,
          lastActivity: response.session.last_activity,
          expertName: response.session.expert.name,
          expertRole: response.session.expert.role
        });

        // Устанавливаем как активную сессию
        this.setActiveSession(
          expertId, 
          response.session.id, 
          response.session.expert.name
        );

        console.log(`💾 Контекст автоматически сохранен: сессия ${response.session.id} для эксперта ${response.session.expert.name}`);
        console.log(`📊 Загружено ${response.last_messages.length} предыдущих сообщений для восстановления контекста`);
        
        // Сохраняем дополнительную информацию о контексте сессии
        if (response.session.context_summary) {
          this.saveSessionContext(expertId, response.session.id, {
            summary: response.session.context_summary,
            messageCount: response.session.total_messages,
            lastActivity: response.session.last_activity,
            priorityScore: response.metadata?.session_priority_score || 50
          });
        }
      } else {
        console.log('ℹ️ Активной сессии с экспертом не найдено - будет создана новая');
        
        // Очищаем старые данные сессии для этого эксперта
        this.clearExpertSession(expertId);
      }
      
      return response;
    } catch (error) {
      console.error('❌ Ошибка получения последней сессии:', error);
      
      // При ошибке API проверяем локальные данные как fallback
      const localSessionId = this.getExpertSessionId(expertId);
      if (localSessionId) {
        console.log('🔄 Используем локально сохраненную сессию как fallback:', localSessionId);
        
        // Возвращаем минимальную структуру с локальными данными
        return {
          has_session: true,
          session: {
            id: localSessionId,
            title: '',
            status: 'active',
            total_messages: 0,
            created_at: new Date().toISOString(),
            last_activity: new Date().toISOString(),
            expert: {
              id: expertId,
              name: 'Эксперт',
              role: ''
            }
          },
          last_messages: []
        };
      }
      
      // Возвращаем пустой результат при полной ошибке
      return {
        has_session: false,
        session: null,
        last_messages: []
      };
    }
  }

  /**
   * Получает статистику сессий пользователя
   * Соответствует Django endpoint: GET /api/v1/ai-engine/sessions/statistics/
   */
  async getUserSessionsStatistics(days = 30): Promise<UserSessionsStatistics> {
    try {
      console.log(`📊 Загрузка статистики сессий за ${days} дней...`);
      
      const response = await this.get<UserSessionsStatistics>('/ai-engine/sessions/statistics/', {
        days: days
      });
      
      console.log(`✅ Статистика загружена: ${response.general_stats.total_sessions} сессий, ${response.recommendations.length} рекомендаций`);
      
      // Кэшируем статистику на 10 минут для быстрого доступа
      const cacheKey = `user_sessions_stats_${days}d`;
      localStorage.setItem(cacheKey, JSON.stringify({
        data: response,
        timestamp: Date.now(),
        expires: Date.now() + 10 * 60 * 1000 // 10 минут
      }));
      
      return response;
    } catch (error) {
      console.error('❌ Ошибка загрузки статистики сессий:', error);
      
      // Пытаемся загрузить из кэша как fallback
      const cacheKey = `user_sessions_stats_${days}d`;
      const cached = localStorage.getItem(cacheKey);
      
      if (cached) {
        try {
          const cachedData = JSON.parse(cached);
          if (cachedData.expires > Date.now()) {
            console.log('🔄 Используем кэшированную статистику как fallback');
            return cachedData.data;
          }
        } catch (parseError) {
          console.warn('⚠️ Ошибка парсинга кэшированной статистики:', parseError);
        }
      }
      
      // Возвращаем пустую статистику при полной ошибке
      return {
        general_stats: {
          total_sessions: 0,
          total_messages: 0,
          active_sessions_count: 0,
          experts_used: 0,
          period_days: days,
          avg_messages_per_session: 0
        },
        expert_stats: [],
        active_sessions: [],
        resumable_sessions: [],
        recommendations: [],
        metadata: {
          generated_at: new Date().toISOString(),
          period_start: new Date(Date.now() - days * 24 * 60 * 60 * 1000).toISOString(),
          period_end: new Date().toISOString()
        }
      };
    }
  }

  /**
   * Интеллектуальный поиск лучшей сессии для восстановления
   * Анализирует все доступные сессии и возвращает наиболее подходящую
   */
  async findBestSessionToResume(expertId: number): Promise<ResumableSessionInfo | null> {
    try {
      console.log('🎯 Интеллектуальный поиск лучшей сессии для восстановления...');
      
      const statistics = await this.getUserSessionsStatistics(7); // Анализируем последние 7 дней
      
      // Фильтруем сессии для конкретного эксперта
      const expertSessions = statistics.resumable_sessions.filter(
        session => session.expert_id === expertId
      );
      
      if (expertSessions.length === 0) {
        console.log('ℹ️ Нет подходящих сессий для восстановления');
        return null;
      }
      
      // Сортируем по приоритету и выбираем лучшую
      expertSessions.sort((a, b) => b.priority_score - a.priority_score);
      const bestSession = expertSessions[0];
      
      if (!bestSession) {
        console.log('ℹ️ Не удалось найти подходящую сессию');
        return null;
      }
      
      console.log(`🎯 Найдена лучшая сессия для восстановления: ${bestSession.session_id} (приоритет: ${bestSession.priority_score})`);
      
      return bestSession;
    } catch (error) {
      console.error('❌ Ошибка поиска лучшей сессии:', error);
      return null;
    }
  }

  /**
   * Сохраняет расширенный контекст сессии в localStorage
   */
  private saveSessionContext(expertId: number, sessionId: number, context: {
    summary: string;
    messageCount: number;
    lastActivity: string;
    priorityScore: number;
  }): void {
    try {
      const key = `session_context_${expertId}_${sessionId}`;
      const contextData = {
        ...context,
        savedAt: new Date().toISOString()
      };
      
      localStorage.setItem(key, JSON.stringify(contextData));
      console.log(`💾 Контекст сессии сохранен: ${key}`);
    } catch (error) {
      console.warn('⚠️ Не удалось сохранить контекст сессии:', error);
    }
  }

  /**
   * Получает расширенный контекст сессии из localStorage
   */
  getSessionContext(expertId: number, sessionId: number): any | null {
    try {
      const key = `session_context_${expertId}_${sessionId}`;
      const stored = localStorage.getItem(key);
      
      if (stored) {
        const context = JSON.parse(stored);
        console.log(`📖 Загружен контекст сессии: ${key}`);
        return context;
      }
      
      return null;
    } catch (error) {
      console.warn('⚠️ Ошибка загрузки контекста сессии:', error);
      return null;
    }
  }

  /**
   * Получает рекомендации по возобновлению разговоров для конкретного эксперта
   */
  async getExpertRecommendations(expertId: number): Promise<SessionRecommendation[]> {
    try {
      const statistics = await this.getUserSessionsStatistics(14); // 2 недели
      
      // Фильтруем рекомендации для конкретного эксперта
      const expertRecommendations = statistics.recommendations.filter(
        rec => rec.expert_id === expertId
      );
      
      console.log(`💡 Найдено ${expertRecommendations.length} рекомендаций для эксперта ${expertId}`);
      return expertRecommendations;
    } catch (error) {
      console.error('❌ Ошибка получения рекомендаций:', error);
      return [];
    }
  }

  /**
   * Автоматическое восстановление контекста при входе к эксперту
   * Интеллектуально выбирает лучший способ восстановления
   */
  async autoRestoreContext(expertId: number): Promise<{
    restored: boolean;
    sessionId?: number;
    method: 'server' | 'local' | 'new';
    context?: any;
    messages?: ChatMessage[];
  }> {
    try {
      console.log('🔄 Автоматическое восстановление контекста для эксперта:', expertId);
      
      // 1. Проверяем серверную сессию
      const serverSession = await this.getLastActiveSession(expertId);
      if (serverSession.has_session && serverSession.session && serverSession.last_messages.length > 0) {
        console.log('✅ Контекст восстановлен с сервера');
        return {
          restored: true,
          sessionId: serverSession.session.id,
          method: 'server',
          context: serverSession.session,
          messages: serverSession.last_messages
        };
      }
      
      // 2. Проверяем локальные данные
      const localSessionId = this.getExpertSessionId(expertId);
      if (localSessionId) {
        try {
          const sessionMessages = await this.getSessionMessages(localSessionId);
          if (sessionMessages.messages.length > 0) {
            console.log('✅ Контекст восстановлен локально');
            return {
              restored: true,
              sessionId: localSessionId,
              method: 'local',
              context: sessionMessages.session,
              messages: sessionMessages.messages
            };
          }
        } catch (localError) {
          console.warn('⚠️ Не удалось загрузить локальный контекст:', localError);
        }
      }
      
      // 3. Создаем новую сессию
      console.log('🆕 Создание новой сессии');
      this.clearExpertSession(expertId);
      
      return {
        restored: false,
        method: 'new',
        context: null,
        messages: []
      };
      
    } catch (error) {
      console.error('❌ Ошибка автоматического восстановления контекста:', error);
      return {
        restored: false,
        method: 'new',
        context: null,
        messages: []
      };
    }
  }
}

// Создаем глобальный экземпляр сервиса
export const expertService = new ExpertService(); 