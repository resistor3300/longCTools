@echo off
:: Bước 1: Lưu đường dẫn file hiện tại vào một biến
set CURRENT_CMD=%~f0
set TEMP_CMD=%TEMP%\update-temp.cmd

:: Bước 2: Sao chép chính file `update.cmd` vào vị trí tạm để tiếp tục chạy sau khi cập nhật
copy "%CURRENT_CMD%" "%TEMP_CMD%" >nul

:: Bước 3: Chuyển vào thư mục chứa Git repository
cd /d "%~dp0"
:: Bước 4: Sao lưu file .env (nếu tồn tại)
if exist .env (
    echo Sao luu file .env...
    copy /y .env .env.bak >nul
)
:: Bước 4: Thực hiện các lệnh Git
git fetch
git reset --hard HEAD
git pull
:: Bước 6: Phục hồi file .env từ bản sao lưu (nếu có)
if exist .env.bak (
    echo Phuc hoi file .env...
    copy /y .env.bak .env >nul
    del .env.bak >nul
)
:: Bước 5: Ghi đè file `update.cmd` từ Git nếu có thay đổi
if exist "%TEMP_CMD%" (
    echo Updating self...
    copy /y "%~dp0update.cmd" "%CURRENT_CMD%" >nul
    del "%TEMP_CMD%" >nul
)
call npm install
echo Update completed! mèn đét ơi chờ xíu...
echo Mèn Đét Ơi Update ok rồi
pause
