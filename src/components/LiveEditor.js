import { portfolioData } from '../data/portfolioData.js?v=2.1';

export function renderLiveEditor() {
  const { personal, education } = portfolioData;

  return `
    <!-- Floating HUD Toggle -->
    <button class="hud-customizer-toggle" id="hud-customizer-toggle" aria-label="Toggle live customization drawer">
      <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5">
        <polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2"></polygon>
      </svg>
      <span>⚡ Quick Customizer</span>
    </button>

    <!-- Slide-up HUD Drawer -->
    <div class="hud-customizer-panel" id="hud-customizer-panel">
      <div style="display: flex; justify-content: space-between; align-items: center; border-bottom: 1px solid var(--border-subtle); padding-bottom: 10px;">
        <span style="font-family: var(--font-mono); font-size: 0.82rem; font-weight: 700; color: var(--accent-blue);">
          // LIVE HUD EDITOR
        </span>
        <button id="close-hud-btn" style="color: var(--text-dim); font-size: 1rem; cursor: pointer;">&times;</button>
      </div>

      <p style="font-size: 0.76rem; color: var(--text-muted); line-height: 1.4;">
        Test your info in real time. To save permanently, edit <code>src/data/portfolioData.js</code>.
      </p>

      <div style="display: flex; flex-direction: column; gap: 8px; font-family: var(--font-mono); font-size: 0.75rem;">
        <div>
          <label style="color: var(--text-dim); display: block; margin-bottom: 2px;">Your Name:</label>
          <input type="text" id="hud-input-name" class="form-input" style="padding: 6px 10px; font-size: 0.8rem;" value="${escapeHtml(personal.name)}" />
        </div>

        <div>
          <label style="color: var(--text-dim); display: block; margin-bottom: 2px;">College Name:</label>
          <input type="text" id="hud-input-college" class="form-input" style="padding: 6px 10px; font-size: 0.8rem;" value="${escapeHtml(education.institution)}" />
        </div>

        <div>
          <label style="color: var(--text-dim); display: block; margin-bottom: 2px;">CGPA / Academic Score:</label>
          <input type="text" id="hud-input-cgpa" class="form-input" style="padding: 6px 10px; font-size: 0.8rem;" value="${escapeHtml(education.cgpa)}" />
        </div>

        <div>
          <label style="color: var(--text-dim); display: block; margin-bottom: 2px;">Email Address:</label>
          <input type="text" id="hud-input-email" class="form-input" style="padding: 6px 10px; font-size: 0.8rem;" value="${escapeHtml(personal.email)}" />
        </div>
      </div>

      <div style="display: flex; gap: 8px; margin-top: 6px;">
        <button class="btn btn-primary" id="hud-apply-btn" style="flex: 1; padding: 7px 12px; font-size: 0.75rem;">Apply Preview</button>
        <button class="btn btn-secondary" id="hud-copy-config-btn" style="padding: 7px 12px; font-size: 0.75rem;">Copy Config</button>
      </div>
      
      <div id="hud-feedback" style="display: none; font-size: 0.72rem; color: var(--accent-emerald); font-family: var(--font-mono);">
        ✓ Values updated in live DOM preview!
      </div>
    </div>
  `;
}

export function initLiveEditorInteractions() {
  const toggleBtn = document.getElementById('hud-customizer-toggle');
  const panel = document.getElementById('hud-customizer-panel');
  const closeBtn = document.getElementById('close-hud-btn');
  const applyBtn = document.getElementById('hud-apply-btn');
  const copyBtn = document.getElementById('hud-copy-config-btn');
  const feedback = document.getElementById('hud-feedback');

  toggleBtn?.addEventListener('click', () => {
    panel?.classList.toggle('open');
  });

  closeBtn?.addEventListener('click', () => {
    panel?.classList.remove('open');
  });

  applyBtn?.addEventListener('click', () => {
    const nameVal = document.getElementById('hud-input-name')?.value?.trim();
    const collegeVal = document.getElementById('hud-input-college')?.value?.trim();
    const cgpaVal = document.getElementById('hud-input-cgpa')?.value?.trim();
    const emailVal = document.getElementById('hud-input-email')?.value?.trim();

    if (nameVal) {
      document.querySelectorAll('.brand-name, .hero-heading .gradient-text, .footer-brand span').forEach(el => {
        el.textContent = nameVal;
      });
    }

    if (collegeVal) {
      document.querySelectorAll('.edu-detail-value').forEach(el => {
        if (el.textContent.includes('[COLLEGE NAME]') || el.textContent === portfolioData.education.institution) {
          el.textContent = collegeVal;
        }
      });
    }

    if (cgpaVal) {
      document.querySelectorAll('.edu-detail-value').forEach(el => {
        if (el.textContent.includes('[CGPA]') || el.textContent === portfolioData.education.cgpa) {
          el.textContent = cgpaVal;
        }
      });
    }

    if (emailVal) {
      const emailEl = document.getElementById('contact-email-text');
      if (emailEl) emailEl.textContent = emailVal;
    }

    if (feedback) {
      feedback.style.display = 'block';
      setTimeout(() => {
        feedback.style.display = 'none';
      }, 3000);
    }
  });

  copyBtn?.addEventListener('click', () => {
    const nameVal = document.getElementById('hud-input-name')?.value?.trim() || portfolioData.personal.name;
    const collegeVal = document.getElementById('hud-input-college')?.value?.trim() || portfolioData.education.institution;
    const cgpaVal = document.getElementById('hud-input-cgpa')?.value?.trim() || portfolioData.education.cgpa;
    const emailVal = document.getElementById('hud-input-email')?.value?.trim() || portfolioData.personal.email;

    const exportSnippet = `// Quick configuration snippet for src/data/portfolioData.js:
personal: {
  name: "${nameVal}",
  email: "${emailVal}",
  ...
},
education: {
  institution: "${collegeVal}",
  cgpa: "${cgpaVal}",
  ...
}`;

    navigator.clipboard.writeText(exportSnippet).then(() => {
      alert("Configuration snippet copied to clipboard! Paste it into src/data/portfolioData.js.");
    });
  });
}

function escapeHtml(str) {
  if (!str) return '';
  return str.replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;").replace(/"/g, "&quot;");
}
