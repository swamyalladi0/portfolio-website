@echo off
setlocal
echo ========================================================
echo  Deploying Swami's Futuristic Portfolio to GitHub Pages
echo ========================================================
echo.

set PATH=%PATH%;C:\Users\swamy\AppData\Local\Programs\Git\cmd

echo Checking git status...
git status
echo.

echo Staging all changes...
git add .
git commit -m "Update portfolio for Swami (CSE 2026)" --quiet
echo.

echo Select your GitHub repository name:
echo [1] swamyalladi0.github.io  (Live URL: https://swamyalladi0.github.io)
echo [2] portfolio               (Live URL: https://swamyalladi0.github.io/portfolio)
echo.
set /p choice="Enter option (1 or 2, default is 1): "

if "%choice%"=="2" (
    set REPO_NAME=portfolio
) else (
    set REPO_NAME=swamyalladi0.github.io
)

echo.
echo Setting remote repository: https://github.com/swamyalladi0/%REPO_NAME%.git ...
git remote remove origin >nul 2>&1
git remote add origin https://github.com/swamyalladi0/%REPO_NAME%.git
git branch -M main

echo.
echo Pushing to GitHub...
git push -u origin main

if %errorlevel% equ 0 (
    echo.
    echo ========================================================
    echo  SUCCESSFULLY PUSHED TO GITHUB!
    echo ========================================================
    echo If this is a new repository, enable GitHub Pages:
    echo 1. Go to: https://github.com/swamyalladi0/%REPO_NAME%/settings/pages
    echo 2. Under 'Build and deployment' > 'Branch', select 'main' and '/ (root)'
    echo 3. Click Save.
    echo.
    echo Your site will be live at:
    if "%REPO_NAME%"=="swamyalladi0.github.io" (
        echo https://swamyalladi0.github.io/
    ) else (
        echo https://swamyalladi0.github.io/portfolio/
    )
    echo ========================================================
) else (
    echo.
    echo [NOTE] If you haven't created the repository on GitHub yet:
    echo 1. Go to https://github.com/new
    echo 2. Set repository name to: %REPO_NAME%
    echo 3. Choose 'Public' and click 'Create repository'
    echo 4. Then re-run this script!
)

echo.
pause
