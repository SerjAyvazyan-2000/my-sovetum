#!/bin/bash

# Startup скрипт для запуска React приложения и figma-developer-mcp
echo "🚀 Запускаю все сервисы..."

# Устанавливаем figma-developer-mcp глобально если не установлен
if ! command -v figma-developer-mcp &> /dev/null; then
    echo "📦 Устанавливаю figma-developer-mcp..."
    npm install -g figma-developer-mcp
fi

# Запускаем figma-developer-mcp в фоне
echo "▶️  Запускаю figma-developer-mcp на порту 3333..."
npx figma-developer-mcp --figma-api-key=${FIGMA_API_KEY} &

# Ждем инициализации
sleep 3

echo "✅ figma-developer-mcp запущен!"
echo "🌐 Доступные эндпоинты:"
echo "   - SSE: http://localhost:3333/sse"
echo "   - Messages: http://localhost:3333/messages"
echo "   - MCP: http://localhost:3333/mcp"

# Запускаем React приложение (главный процесс)
echo "⚛️  Запускаю React приложение..."
exec npm run dev -- --host 0.0.0.0 