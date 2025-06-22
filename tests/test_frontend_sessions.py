#!/usr/bin/env python3
"""
Тест системы сессий frontend для проекта "Совет Экспертов"

Этот скрипт имитирует поведение frontend с localStorage
для проверки работы контекста экспертов.
"""

import asyncio
import os
import sys
import json
import time
from typing import List, Dict

# Добавляем путь к Django проекту
sys.path.append('/mnt/apps/sovetum/sovetum_project/sovetum-backend')

import django
os.environ.setdefault('DJANGO_SETTINGS_MODULE', 'sovetum.settings')
django.setup()

from apps.ai_engine.models import ConversationSession, AIMessage
from apps.ai_engine.ai_service import AIExpertService
from apps.experts.models import Expert
from apps.users.models import User

# Имитация localStorage
class MockLocalStorage:
    """
    Имитация localStorage браузера для тестирования
    """
    def __init__(self):
        self.storage = {}
    
    def getItem(self, key: str) -> str | None:
        return self.storage.get(key)
    
    def setItem(self, key: str, value: str) -> None:
        self.storage[key] = value
        print(f"💾 localStorage.setItem('{key}', '{value[:100]}...')")
    
    def removeItem(self, key: str) -> None:
        if key in self.storage:
            del self.storage[key]
            print(f"🧹 localStorage.removeItem('{key}')")
    
    def clear(self) -> None:
        self.storage.clear()
        print("🧹 localStorage.clear()")

# Имитация ExpertService frontend логики
class MockExpertService:
    """
    Имитация ExpertService с localStorage для тестирования контекста
    """
    STORAGE_KEYS = {
        'EXPERT_SESSIONS': 'sovetum_expert_sessions',
        'ACTIVE_SESSION': 'sovetum_active_session'
    }
    
    def __init__(self, localStorage: MockLocalStorage):
        self.localStorage = localStorage
        self.ai_service = AIExpertService()
    
    def getStoredSessions(self) -> dict:
        """Получает сохранённые сессии из localStorage"""
        try:
            stored = self.localStorage.getItem(self.STORAGE_KEYS['EXPERT_SESSIONS'])
            return json.loads(stored) if stored else {}
        except Exception as error:
            print(f'⚠️ Ошибка чтения сессий из localStorage: {error}')
            return {}
    
    def saveSessionData(self, expertId: int, sessionData: dict) -> None:
        """Сохраняет данные сессии в localStorage"""
        try:
            sessions = self.getStoredSessions()
            sessions[str(expertId)] = sessionData
            self.localStorage.setItem(
                self.STORAGE_KEYS['EXPERT_SESSIONS'], 
                json.dumps(sessions)
            )
            print(f'💾 Сессия сохранена для эксперта {expertId}: {sessionData}')
        except Exception as error:
            print(f'⚠️ Ошибка сохранения сессии в localStorage: {error}')
    
    def getExpertSessionId(self, expertId: int) -> int | None:
        """Получает ID активной сессии для эксперта"""
        sessions = self.getStoredSessions()
        sessionData = sessions.get(str(expertId))
        
        if not sessionData:
            print(f'📝 Нет сохранённой сессии для эксперта {expertId}')
            return None
        
        # Проверяем, не устарела ли сессия (больше 24 часов)
        from datetime import datetime
        last_activity = datetime.fromisoformat(sessionData['lastActivity'].replace('Z', '+00:00'))
        now = datetime.now(last_activity.tzinfo)
        hours_since_last_activity = (now - last_activity).total_seconds() / 3600
        
        if hours_since_last_activity > 24:
            print(f'⏰ Сессия для эксперта {expertId} устарела ({hours_since_last_activity:.1f}ч назад)')
            self.clearExpertSession(expertId)
            return None
        
        print(f'🔄 Используем сохранённую сессию {sessionData["sessionId"]} для эксперта {expertId}')
        return sessionData['sessionId']
    
    def setActiveSession(self, expertId: int, sessionId: int, expertName: str) -> None:
        """Устанавливает активную сессию"""
        try:
            activeSession = {
                'expertId': expertId,
                'sessionId': sessionId,
                'expertName': expertName
            }
            self.localStorage.setItem(
                self.STORAGE_KEYS['ACTIVE_SESSION'], 
                json.dumps(activeSession)
            )
            print(f'✅ Установлена активная сессия: {activeSession}')
        except Exception as error:
            print(f'⚠️ Ошибка установки активной сессии: {error}')
    
    def clearExpertSession(self, expertId: int) -> None:
        """Очищает сессию для конкретного эксперта"""
        try:
            sessions = self.getStoredSessions()
            if str(expertId) in sessions:
                del sessions[str(expertId)]
                self.localStorage.setItem(
                    self.STORAGE_KEYS['EXPERT_SESSIONS'], 
                    json.dumps(sessions)
                )
            print(f'🧹 Сессия для эксперта {expertId} очищена')
        except Exception as error:
            print(f'⚠️ Ошибка очистки сессии: {error}')
    
    async def sendMessage(self, expert_id: int, message: str, session_id: int = None) -> dict:
        """
        Имитация метода sendMessage с автоматическим управлением сессиями
        """
        print(f'📤 Отправка сообщения эксперту {expert_id}: {message[:50]}...')
        
        # Автоматически получаем сохранённую сессию, если session_id не передан
        if not session_id:
            session_id = self.getExpertSessionId(expert_id)
            print(f'🔍 Автоматически найден session_id: {session_id or "нет"}')
        
        # Получаем пользователя для тестирования
        user = await User.objects.aget(username='test_context_user')
        
        # Отправляем сообщение через AI service
        result = await self.ai_service.process_user_message(
            user=user,
            expert_id=expert_id,
            message_content=message,
            session_id=session_id
        )
        
        if result.get('success'):
            # Имитируем структуру ответа API
            expert = await Expert.objects.aget(id=expert_id)
            response = {
                'success': True,
                'session_id': result['session_id'],
                'user_message': result['user_message'],
                'expert_response': result['expert_response'],
                'expert': {
                    'id': expert.id,
                    'name': expert.name,
                    'role': expert.role
                }
            }
            
            # Сохраняем информацию о сессии
            self.saveSessionData(expert_id, {
                'expertId': expert_id,
                'sessionId': result['session_id'],
                'lastActivity': result['expert_response']['created_at'],
                'expertName': expert.name,
                'expertRole': expert.role
            })
            
            # Устанавливаем активную сессию
            self.setActiveSession(expert_id, result['session_id'], expert.name)
            
            print(f'💾 Контекст сохранён: сессия {result["session_id"]} для эксперта {expert.name}')
            return response
        else:
            return result

async def test_frontend_sessions():
    """
    Основной тест системы сессий frontend
    """
    print("🧪 ТЕСТИРОВАНИЕ СИСТЕМЫ СЕССИЙ FRONTEND")
    print("=" * 60)
    
    # Создаём имитацию localStorage и ExpertService
    localStorage = MockLocalStorage()
    expertService = MockExpertService(localStorage)
    
    # Получаем тестового эксперта
    expert = await Expert.objects.aget(name="Александр Бизнесов", is_active=True)
    expert_id = expert.id
    
    print(f"\n1️⃣ Тестируем эксперта: {expert.name} (ID: {expert_id})")
    
    # Очищаем localStorage
    localStorage.clear()
    
    # Первое сообщение (создание новой сессии)
    print("\n2️⃣ Первое сообщение (новая сессия)...")
    response1 = await expertService.sendMessage(
        expert_id=expert_id,
        message="Привет! Меня зовут Анна. Я хочу открыть кафе."
    )
    
    session_id = response1['session_id']
    print(f"✅ Создана сессия: {session_id}")
    print(f"📝 Ответ: {response1['expert_response']['content'][:100]}...")
    
    # Проверяем, что сессия сохранена
    stored_sessions = expertService.getStoredSessions()
    print(f"💾 В localStorage сохранено сессий: {len(stored_sessions)}")
    
    # Второе сообщение (использование существующей сессии)
    print("\n3️⃣ Второе сообщение (существующая сессия)...")
    response2 = await expertService.sendMessage(
        expert_id=expert_id,
        message="Сколько денег мне потребуется для старта?"
    )
    
    print(f"✅ Используется сессия: {response2['session_id']}")
    print(f"📝 Ответ: {response2['expert_response']['content'][:100]}...")
    
    # Проверка контекста
    if session_id == response2['session_id']:
        print("✅ Сессия корректно переиспользуется")
    else:
        print("❌ ОШИБКА: Создана новая сессия вместо переиспользования")
    
    # Третье сообщение с референсом к контексту
    print("\n4️⃣ Третье сообщение (проверка контекста)...")
    response3 = await expertService.sendMessage(
        expert_id=expert_id,
        message="Можешь подробнее рассказать про аренду для моего кафе?"
    )
    
    print(f"✅ Используется сессия: {response3['session_id']}")
    print(f"📝 Ответ: {response3['expert_response']['content'][:100]}...")
    
    # Анализ контекста в ответах
    print("\n5️⃣ Анализ контекста...")
    
    cafe_mentioned = False
    anna_mentioned = False
    
    for i, response in enumerate([response1, response2, response3], 1):
        content = response['expert_response']['content'].lower()
        print(f"   Ответ {i}: {'🏪' if 'кафе' in content else '❌'} кафе, {'👤' if 'анна' in content else '❌'} имя")
        
        if 'кафе' in content:
            cafe_mentioned = True
        if 'анна' in content:
            anna_mentioned = True
    
    # Проверка других экспертов (изоляция)
    print("\n6️⃣ Тест изоляции между экспертами...")
    
    other_expert = await Expert.objects.exclude(id=expert_id).first()
    if other_expert:
        response_other = await expertService.sendMessage(
            expert_id=other_expert.id,
            message="Привет! Хочу обсудить инвестиции."
        )
        
        other_content = response_other['expert_response']['content'].lower()
        
        if 'кафе' not in other_content and 'анна' not in other_content:
            print(f"✅ Изоляция работает: {other_expert.name} не знает о кафе Анны")
        else:
            print(f"❌ ОШИБКА изоляции: {other_expert.name} знает контекст другого эксперта")
    
    # Финальный отчёт
    print("\n📋 ИТОГОВЫЙ ОТЧЁТ FRONTEND СЕССИЙ")
    print("=" * 60)
    
    print(f"💾 Сессий в localStorage: {len(expertService.getStoredSessions())}")
    print(f"🔄 Переиспользование сессий: {'✅' if session_id == response2['session_id'] == response3['session_id'] else '❌'}")
    print(f"🏪 Контекст о кафе сохранён: {'✅' if cafe_mentioned else '❌'}")
    print(f"👤 Имя пользователя сохранено: {'✅' if anna_mentioned else '⚠️'}")
    
    # Показываем содержимое localStorage
    print(f"\n💾 Содержимое localStorage:")
    for key, value in localStorage.storage.items():
        print(f"   {key}: {value[:200]}...")
    
    return all([
        session_id == response2['session_id'] == response3['session_id'],
        cafe_mentioned
    ])

if __name__ == "__main__":
    async def main():
        print("🚀 Запуск тестов системы сессий frontend...")
        
        success = await test_frontend_sessions()
        
        if success:
            print("\n🎉 ВСЕ ТЕСТЫ FRONTEND ПРОЙДЕНЫ!")
            print("   Система сессий с localStorage работает корректно.")
        else:
            print("\n⚠️ ОБНАРУЖЕНЫ ПРОБЛЕМЫ с системой сессий frontend.")
        
        return success
    
    # Запускаем тесты
    asyncio.run(main()) 