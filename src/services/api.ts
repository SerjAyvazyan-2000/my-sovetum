/**
 * API сервис для взаимодействия с Django backend
 * Базовый слой для всех HTTP запросов к серверу
 */

import axios, { AxiosInstance, AxiosResponse } from 'axios';

/**
 * Базовая конфигурация API клиента
 */
const API_BASE_URL = import.meta.env.VITE_API_URL || 'http://localhost:8020/api/v1';

/**
 * Настроенный экземпляр axios для API вызовов
 */
const apiClient: AxiosInstance = axios.create({
  baseURL: API_BASE_URL,
  timeout: 30000, // 30 секунд для AI запросов
  headers: {
    'Content-Type': 'application/json',
    'Accept': 'application/json',
  },
});

/**
 * Interceptor для добавления аутентификации
 * Добавляет Telegram Web App данные в каждый запрос
 */
apiClient.interceptors.request.use(
  (config) => {
    // Добавляем Telegram Web App данные если доступны
    if (window.Telegram?.WebApp?.initDataUnsafe) {
      const telegramData = window.Telegram.WebApp.initDataUnsafe;
      config.headers['X-Telegram-User-ID'] = telegramData.user?.id;
      config.headers['X-Telegram-Username'] = telegramData.user?.username;
      config.headers['X-Telegram-First-Name'] = telegramData.user?.first_name;
      config.headers['X-Telegram-Last-Name'] = telegramData.user?.last_name;
      config.headers['X-Telegram-Auth-Date'] = telegramData.auth_date;
      config.headers['X-Telegram-Hash'] = telegramData.hash;
    }
    
    console.log('🔄 API Request:', config.method?.toUpperCase(), config.url);
    return config;
  },
  (error) => {
    console.error('❌ API Request Error:', error);
    return Promise.reject(error);
  }
);

/**
 * Interceptor для обработки ответов
 * Логирует успешные ответы и ошибки
 */
apiClient.interceptors.response.use(
  (response: AxiosResponse) => {
    console.log('✅ API Response:', response.status, response.config.url);
    return response;
  },
  (error) => {
    console.error('❌ API Response Error:', error.response?.status, error.response?.data);
    
    // Обработка различных типов ошибок
    if (error.response?.status === 401) {
      console.warn('🔒 Unauthorized - перенаправление на авторизацию');
      // Здесь можно добавить логику редиректа на авторизацию
    } else if (error.response?.status === 429) {
      console.warn('⏳ Rate limit exceeded');
    } else if (error.response?.status >= 500) {
      console.error('🔥 Server error');
    }
    
    return Promise.reject(error);
  }
);

/**
 * Базовый API Service класс
 * Предоставляет общие методы для HTTP запросов
 */
export class ApiService {
  protected client = apiClient;

  /**
   * Выполняет GET запрос
   */
  protected async get<T>(url: string, params?: any): Promise<T> {
    const response = await this.client.get<T>(url, { params });
    return response.data;
  }

  /**
   * Выполняет POST запрос
   */
  protected async post<T>(url: string, data?: any): Promise<T> {
    const response = await this.client.post<T>(url, data);
    return response.data;
  }

  /**
   * Выполняет PUT запрос
   */
  protected async put<T>(url: string, data?: any): Promise<T> {
    const response = await this.client.put<T>(url, data);
    return response.data;
  }

  /**
   * Выполняет DELETE запрос
   */
  protected async delete<T>(url: string): Promise<T> {
    const response = await this.client.delete<T>(url);
    return response.data;
  }

  /**
   * Проверяет доступность API
   */
  async healthCheck(): Promise<boolean> {
    try {
      await this.get('/health/');
      return true;
    } catch (error) {
      console.error('API health check failed:', error);
      return false;
    }
  }
}

export default apiClient; 