@echo off
echo.
echo [GitHub 저장소 연결 도우미]
echo.
echo 1. Git 설치 여부를 확인합니다...
where git >nul 2>nul
if %errorlevel% neq 0 (
    echo [오류] Git이 설치되어 있지 않거나 PATH에 등록되어 있지 않습니다.
    echo https://git-scm.com/ 에서 Git을 먼저 설치해 주세요.
    pause
    exit /b
)

echo 2. 로컬 저장소를 초기화합니다...
git init

echo 3. 파일을 추가하고 첫 커밋을 생성합니다...
git add .
git commit -m "Initial commit from Antigravity"

echo 4. 원격 저장소를 연결합니다 (thdwognso7/thdwognso7)...
git branch -M main
git remote add origin https://github.com/thdwognso7/thdwognso7.git

echo 5. GitHub로 업로드(Push)합니다...
echo (GitHub 로그인 창이 뜨면 로그인해 주세요)
git push -u origin main

echo.
echo [완료] GitHub 저장소와 성공적으로 연결되었습니다!
pause
