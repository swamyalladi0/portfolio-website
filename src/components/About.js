import { portfolioData } from '../data/portfolioData.js?v=2.1';

export function renderAbout() {
  const { personal, aboutHighlights } = portfolioData;

  const getHighlightIcon = (iconName) => {
    switch (iconName) {
      case 'graduation-cap':
        return `<svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M22 10v6M2 10l10-5 10 5-10 5z"></path><path d="M6 12v5c3 3 9 3 12 0v-5"></path></svg>`;
      case 'code':
        return `<svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polyline points="16 18 22 12 16 6"></polyline><polyline points="8 6 2 12 8 18"></polyline></svg>`;
      case 'database':
        return `<svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><ellipse cx="12" cy="5" rx="9" ry="3"></ellipse><path d="M21 12c0 1.66-4 3-9 3s-9-1.34-9-3"></path><path d="M3 5v14c0 1.66 4 3 9 3s9-1.34 9-3V5"></path></svg>`;
      case 'cpu':
      default:
        return `<svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect x="4" y="4" width="16" height="16" rx="2"></rect><rect x="9" y="9" width="6" height="6"></rect><line x1="9" y1="1" x2="9" y2="4"></line><line x1="15" y1="1" x2="15" y2="4"></line><line x1="9" y1="20" x2="9" y2="23"></line><line x1="15" y1="20" x2="15" y2="23"></line><line x1="20" y1="9" x2="23" y2="9"></line><line x1="20" y1="14" x2="23" y2="14"></line><line x1="1" y1="9" x2="4" y2="9"></line><line x1="1" y1="14" x2="4" y2="14"></line></svg>`;
    }
  };

  return `
    <section class="section" id="about">
      <div class="container">
        
        <!-- Section Header -->
        <div class="section-header reveal-item">
          <div class="section-eyebrow">
            <span>ABOUT ME</span>
          </div>
          <h2 class="section-title">Who I Am & What I Build</h2>
        </div>

        <div class="about-grid">
          
          <!-- Left Column: Bold Typography & System Specs -->
          <div class="about-left reveal-item">
            <h3 class="about-statement">
              <span>Curious by nature.</span>
              <span class="gradient-text">Built to learn.</span>
              <span class="gradient-text-purple">Ready to create.</span>
            </h3>

            <!-- High-tech Telemetry Spec Card -->
            <div class="about-specs-card">
              <div class="specs-header">
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                  <circle cx="12" cy="12" r="10"></circle>
                  <line x1="12" y1="16" x2="12" y2="12"></line>
                  <line x1="12" y1="8" x2="12.01" y2="8"></line>
                </svg>
                <span>ENGINEERING SYSTEM SPECIFICATION</span>
              </div>
              <div class="specs-row">
                <span class="specs-label">Specialization:</span>
                <span class="specs-value">Computer Science & Engineering</span>
              </div>
              <div class="specs-row">
                <span class="specs-label">Graduation Year:</span>
                <span class="specs-value">2026</span>
              </div>
              <div class="specs-row">
                <span class="specs-label">Primary Languages:</span>
                <span class="specs-value">Python, Java, SQL, JavaScript</span>
              </div>
              <div class="specs-row">
                <span class="specs-label">Engineering Focus:</span>
                <span class="specs-value">Clean Code, DBMS & Logic Design</span>
              </div>
              <div class="specs-row">
                <span class="specs-label">Availability:</span>
                <span class="specs-value" style="color: var(--accent-emerald);">● Ready For Opportunities</span>
              </div>
            </div>
          </div>

          <!-- Right Column: Paragraph & 4 Information Cards -->
          <div class="about-right reveal-item">
            <p class="about-bio-text">
              ${escapeHtml(personal.aboutDescription)}
            </p>

            <!-- 4 Information Cards -->
            <div class="telemetry-grid">
              ${aboutHighlights.map(item => `
                <div class="telemetry-card">
                  <div class="telemetry-icon-box">
                    ${getHighlightIcon(item.icon)}
                  </div>
                  <div class="telemetry-metric">${escapeHtml(item.metric)}</div>
                  <div class="telemetry-label">${escapeHtml(item.label)}</div>
                  <p class="telemetry-desc">${escapeHtml(item.description)}</p>
                </div>
              `).join('')}
            </div>
          </div>

        </div>

      </div>
    </section>
  `;
}

function escapeHtml(str) {
  if (!str) return '';
  return str.replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;").replace(/"/g, "&quot;");
}
