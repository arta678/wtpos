@echo off
REM ===== SET PORT =====
set PORT=8000

REM ===== PINDAH KE FOLDER FILE INI =====
cd /d "%~dp0"

REM ===== BUKA BROWSER =====
start http://localhost:%PORT%/h_hutang_tab.html

REM ===== JALANKAN PYTHON SERVER =====
python -m http.server %PORT%

pause
