@echo off
cd /d "%~dp0"
git pull
echo update ok men!
npm install
echo done men!
pause