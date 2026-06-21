#!/bin/bash
pkill -f "node server.js" 2>/dev/null || true
pkill -f "vite" 2>/dev/null || true
sleep 1
node server.js &
exec npx vite
