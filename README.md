# 🚀 Futuristic Developer Portfolio // CSE 2026

A premium, cinematic, dark-themed personal portfolio website built for a **2026 Computer Science Engineering Graduate** and **Aspiring Software Developer**.

Designed with an **"AI / Developer Lab"** aesthetic featuring glassmorphism, responsive HUD overlays, animated particle constellations, interactive project mockups (playable Python CLI terminal & SQL relational schema explorer), and smooth micro-interactions.

---

## 📁 Project Architecture

```
portfolio-2026/
├── index.html                  # SEO metadata, OpenGraph tags, Google Fonts, root mount
├── package.json                # Optional Vite / npm scripts
├── vite.config.js              # Vite configuration with relative path for GitHub Pages
├── README.md                   # Complete documentation & deployment guide
├── public/
│   ├── favicon.svg             # Futuristic developer monogram favicon
│   └── robots.txt
├── src/
│   ├── main.js                 # App initialization, scroll-reveal & smooth scrolling
│   ├── data/
│   │   └── portfolioData.js    # 🌟 SINGLE SOURCE OF TRUTH: All personal data & placeholders
│   ├── styles/
│   │   ├── main.css            # Design tokens, variables, typography, and utility classes
│   │   └── components.css      # Component styles: HUD cards, photo frame, glassmorphism
│   ├── components/
│   │   ├── Navbar.js           # Frosted glass navbar with scroll-spy & hamburger menu
│   │   ├── Hero.js             # Hero section with 3D parallax biometric photo card
│   │   ├── About.js            # Split layout, system specification telemetry & stats
│   │   ├── Skills.js           # Filterable interactive technology cards with cursor glow
│   │   ├── Projects.js         # Abstract UI mockups: Python terminal & SQL visualizer
│   │   ├── Education.js        # Futuristic timeline with CGPA & coursework pills
│   │   ├── Resume.js           # Resume CTA, download trigger & instant preview
│   │   ├── Contact.js          # Contact telemetry cards & interactive glass form
│   │   ├── Footer.js           # Minimal footer with back-to-top button
│   │   ├── Background.js       # Battery-friendly canvas particle constellation & grid
│   │   ├── Modals.js           # Playable Python guessing game & SQL query explorer
│   │   └── LiveEditor.js       # Floating Quick Customizer HUD widget
│   └── assets/
│       ├── profile.jpg         # Profile image (head-and-shoulders portrait)
│       └── resume.pdf          # Resume document
```

---

## ⚡ Quick Customization (Under 2 Minutes)

All personal details, links, and content are centralized in **one single file**:
👉 [`src/data/portfolioData.js`](file:///C:/Users/swamy/.gemini/antigravity/scratch/portfolio-2026/src/data/portfolioData.js)

### 1. Replace Placeholders
Open `src/data/portfolioData.js` and update:
- `name`: Replace `[YOUR NAME]` with your full name
- `email`: Replace `[YOUR EMAIL]` with your email address
- `github`: Replace `[YOUR-GITHUB]` with your GitHub username
- `linkedin`: Replace `[YOUR-LINKEDIN]` with your LinkedIn profile
- `location`: Replace `[YOUR LOCATION]` with your city/country
- `institution`: Replace `[COLLEGE NAME]` with your university or college
- `cgpa`: Replace `[CGPA]` with your current CGPA (e.g. `8.7 / 10.0`)

### 2. Update Your Personal Photo
- Place your head-and-shoulders portrait directly into:
  `src/assets/profile.jpg`
- Alternatively, you can use the **Change Photo** button on the hero photo card or the **⚡ Quick Customizer** button on the bottom-left to test any image instantly!

### 3. Update Your Resume PDF
- Replace `src/assets/resume.pdf` with your actual resume file.

---

## 🖥️ Running Locally

### Option A: Using Python (Zero Installation Needed)
Since Python 3 is already available, run:
```powershell
python -m http.server 3000
```
Then open your browser to:
👉 `http://localhost:3000`

### Option B: Using Vite (If Node.js is installed)
```bash
npm install
npm run dev
```

---

## 🌐 1-Click Deployment to GitHub Pages

1. Initialize a git repository and push to GitHub:
   ```bash
   git init
   git add .
   git commit -m "Initial portfolio commit"
   git branch -M main
   git remote add origin https://github.com/<YOUR-USERNAME>/<REPO-NAME>.git
   git push -u origin main
   ```
2. In your GitHub repository:
   - Go to **Settings** → **Pages**.
   - Under **Build and deployment** > **Branch**, select `main` branch and `/ (root)`.
   - Click **Save**.
3. Your futuristic portfolio will be live at:
   `https://<YOUR-USERNAME>.github.io/<REPO-NAME>/`
