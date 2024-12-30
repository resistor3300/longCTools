@echo off
:: Chuyển đến thư mục hiện tại
cd /d "%~dp0"

:: Kiểm tra phiên bản Windows
for /f "tokens=4-5 delims=[.] " %%i in ('ver') do set "ver_major=%%i" & set "ver_minor=%%j"

if "%ver_major%"=="10" (
    echo WINDOWS OK...
) else if "%ver_major%"=="11" (
    echo WINDOWS 11...
    powershell -Command "Set-ExecutionPolicy RemoteSigned -Scope Process"
) else (
    echo KHONG XAC DINH DUOC Windows. TIEP Tuc...
)

:: Thực thi npm install
npm install

:: Hiển thị thông báo hoàn tất
echo Đã hoàn thành
echo.
echo Bấm phím bất kỳ để thoát...
pause >nul
:: Lệnh dừng hộp thoại (đề phòng)
cmd /k