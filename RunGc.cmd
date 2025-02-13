@echo off
cd /d "%~dp0"
node --expose-gc task.js
pause
