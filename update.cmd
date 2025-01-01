@echo off
:: Bước 1: Lưu đường dẫn file hiện tại vào một biến
set CURRENT_CMD=%~f0
set TEMP_CMD=%TEMP%\update-temp.cmd

:: Bước 2: Sao chép chính file `update.cmd` vào vị trí tạm để tiếp tục chạy sau khi cập nhật
copy "%CURRENT_CMD%" "%TEMP_CMD%" >nul

:: Bước 3: Chuyển vào thư mục chứa Git repository
cd /d "%~dp0"

:: Bước 4: Thực hiện các lệnh Git
git fetch
git reset --hard HEAD
git pull

:: Bước 5: Ghi đè file `update.cmd` từ Git nếu có thay đổi
if exist "%TEMP_CMD%" (
    echo Updating self...
    copy /y "%~dp0update.cmd" "%CURRENT_CMD%" >nul
    del "%TEMP_CMD%" >nul
)

echo Update completed! mèn đét ơi chờ xíu...
call npm install
echo Mèn Đét Ơi Update ok rồi
pause
