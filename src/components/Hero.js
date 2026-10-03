import { portfolioData } from '../data/portfolioData.js';

export function renderHero() {
  const { personal } = portfolioData;

  return `
    <section class="hero-section" id="home">
      <div class="container">
        <div class="hero-grid">
          
          <!-- Left Column: Hero Typography & Actions -->
          <div class="hero-content reveal-item">
            
            <!-- Eyebrow Badge -->
            <div class="hero-eyebrow">
              <span class="badge-pulse"></span>
              <span>${escapeHtml(personal.eyebrow || "COMPUTER SCIENCE ENGINEERING • 2026")}</span>
            </div>

            <!-- Primary Headings -->
            <div class="hero-title-group">
              <h1 class="hero-heading">
                Hi, I'm <span class="gradient-text">${escapeHtml(personal.name)}</span>.
              </h1>
              <p class="hero-tagline gradient-text-purple">
                ${escapeHtml(personal.tagline)}
              </p>
            </div>

            <!-- Supporting Description -->
            <p class="hero-bio">
              ${escapeHtml(personal.shortBio)}
            </p>

            <!-- Action Buttons -->
            <div class="hero-actions">
              <a href="#projects" class="btn btn-primary" id="hero-view-work-btn">
                <span>View My Work</span>
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round">
                  <line x1="12" y1="5" x2="12" y2="19"></line>
                  <polyline points="19 12 12 19 5 12"></polyline>
                </svg>
              </a>

              <a href="${escapeHtml(personal.resumeUrl)}" download="resume.pdf" class="btn btn-secondary" id="hero-resume-btn" target="_blank" rel="noopener noreferrer">
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round">
                  <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"></path>
                  <polyline points="7 10 12 15 17 10"></polyline>
                  <line x1="12" y1="15" x2="12" y2="3"></line>
                </svg>
                <span>Download Resume</span>
              </a>
            </div>

            <!-- Social Connectivity Badges -->
            <div class="hero-socials">
              <span class="social-label">Connect:</span>
              
              <a href="${escapeHtml(personal.github)}" target="_blank" rel="noopener noreferrer" class="social-link" title="Visit GitHub Profile">
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                  <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"></path>
                </svg>
                <span>GitHub</span>
              </a>

              <a href="${escapeHtml(personal.linkedin)}" target="_blank" rel="noopener noreferrer" class="social-link" title="Visit LinkedIn Profile">
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                  <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path>
                  <rect x="2" y="9" width="4" height="12"></rect>
                  <circle cx="4" cy="4" r="2"></circle>
                </svg>
                <span>LinkedIn</span>
              </a>
            </div>

          </div>

          <!-- Right Column: Futuristic Photo Card Frame -->
          <div class="hero-visual reveal-item">
            
            <!-- Radial ambient soft blue/purple glow orb -->
            <div class="hero-ambient-glow" aria-hidden="true"></div>

            <!-- Integrated Glass Card Frame -->
            <div class="photo-frame-card floating-anim" id="photo-frame-card">
              
              <!-- Frame Header HUD -->
              <div class="frame-hud-header">
                <span class="hud-id">
                  <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5">
                    <rect x="3" y="3" width="18" height="18" rx="2"></rect>
                    <path d="M9 3v18"></path>
                  </svg>
                  CSE // 2026
                </span>
                <span class="hud-status">
                  <span class="hud-status-dot"></span>
                  READY TO BUILD
                </span>
              </div>

              <!-- Main Photo Wrapper -->
              <div class="photo-img-wrapper" id="photo-img-wrapper">
                <!-- Head-and-Shoulders Portrait -->
                <img 
                  src="${escapeHtml(personal.profilePhoto)}" 
                  alt="${escapeHtml(personal.name)} - Head and Shoulders Portrait" 
                  class="profile-photo"
                  id="hero-profile-img"
                  loading="eager"
                  onerror="this.onerror=null; this.src='https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=800&q=80';"
                />

                <!-- High-tech HUD Brackets -->
                <div class="photo-bracket-tl"></div>
                <div class="photo-bracket-br"></div>
                <div class="photo-scanline"></div>

                <!-- Floating Biometric Status Badge -->
                <div class="photo-floating-badge">
                  <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="#38bdf8" stroke-width="2.5">
                    <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"></polygon>
                  </svg>
                  <span>SOFTWARE DEVELOPER</span>
                </div>
              </div>

              <!-- Frame Footer & Quick Photo Swap -->
              <div class="frame-footer">
                <span>IDENTITY: VERIFIED</span>
                
                <!-- Quick Swap Trigger for User's Convenience -->
                <label class="photo-swap-btn" title="Click to test loading your custom photo locally">
                  <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                    <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"></path>
                    <polyline points="17 8 12 3 7 8"></polyline>
                    <line x1="12" y1="3" x2="12" y2="15"></line>
                  </svg>
                  <span>Change Photo</span>
                  <input type="file" id="hero-photo-input" accept="image/*" style="display: none;" />
                </label>
              </div>

            </div>

          </div>

        </div>
      </div>
    </section>
  `;
}

export function initHeroInteractions() {
  const card = document.getElementById('photo-frame-card');
  const photoInput = document.getElementById('hero-photo-input');
  const profileImg = document.getElementById('hero-profile-img');

  // Interactive 3D Parallax Tilt for Desktop
  if (card && window.matchMedia('(min-width: 1024px)').matches && !window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
    card.addEventListener('mousemove', (e) => {
      const rect = card.getBoundingClientRect();
      const x = e.clientX - rect.left - rect.width / 2;
      const y = e.clientY - rect.top - rect.height / 2;

      const rotateX = (-y / (rect.height / 2)) * 8;
      const rotateY = (x / (rect.width / 2)) * 8;

      card.style.transform = `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) translateY(-6px)`;
    });

    card.addEventListener('mouseleave', () => {
      card.style.transform = 'perspective(1000px) rotateX(0deg) rotateY(0deg) translateY(0px)';
    });
  }

  // Instant local photo replacement handler
  photoInput?.addEventListener('change', (e) => {
    const file = e.target.files?.[0];
    if (file && profileImg) {
      const reader = new FileReader();
      reader.onload = (event) => {
        profileImg.src = event.target.result;
        localStorage.setItem('custom_portfolio_photo', event.target.result);
      };
      reader.readAsDataURL(file);
    }
  });

  // Check if previously saved local photo exists
  const savedPhoto = localStorage.getItem('custom_portfolio_photo');
  if (savedPhoto && profileImg) {
    profileImg.src = savedPhoto;
  }
}

function escapeHtml(str) {
  if (!str) return '';
  return str.replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;").replace(/"/g, "&quot;");
}
