@echo off
cd /d "%~dp0"
set TIMEOUT_SECONDS=120
node --expose-gc task.js

:loop
echo Vui long cho, Chuong trinh se chay lai sau %TIMEOUT_SECONDS%s...
timeout /t %TIMEOUT_SECONDS% /nobreak

echo Bat dau chay...
node --expose-gc task.js

echo Chuong trinh da thoat, Tu dong chay lai sau %TIMEOUT_SECONDS%s...
goto loop
