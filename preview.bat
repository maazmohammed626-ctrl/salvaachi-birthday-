@echo off
cd /d "%~dp0"
echo Starting Birthday Garden preview...
echo.
echo Keep this window open while previewing the website.
echo If the browser does not open, go to:
echo http://127.0.0.1:5500/index.html
echo.
start "" powershell -NoProfile -ExecutionPolicy Bypass -Command "Start-Sleep -Seconds 1; Start-Process 'http://127.0.0.1:5500/index.html'"
py -m http.server 5500 --bind 127.0.0.1
pause
