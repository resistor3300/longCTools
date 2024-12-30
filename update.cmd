@echo off
:: Di chuyển chính file update.cmd ra khỏi thư mục tạm
set TEMP_CMD=%TEMP%\update-temp.cmd
copy "%~f0" "%TEMP_CMD%" >nul

:: Thực hiện các lệnh Git
cd /d "%~dp0"
git fetch
git reset --hard HEAD
git pull

:: Di chuyển file update.cmd quay lại vị trí cũ (nếu cần)
copy "%TEMP_CMD%" "%~f0" >nul
del "%TEMP_CMD%" >nul

echo Update completed! ok mèn đét ơi
pause
