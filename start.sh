#!/bin/bash

# Backend starten
cd backend
source venv/bin/activate
uvicorn app.main:app --reload &
BACKEND_PID=$!
cd ..

# Frontend starten
cd frontend
npm run dev &
FRONTEND_PID=$!
cd ..

echo "Backend läuft  → http://localhost:8000"
echo "Frontend läuft → http://localhost:5173"
echo "Zum Beenden: Ctrl+C"

# Beide Server beenden wenn Script gestoppt wird
trap "kill $BACKEND_PID $FRONTEND_PID" EXIT
wait
