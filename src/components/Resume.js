import { portfolioData } from '../data/portfolioData.js';

export function renderResume() {
  const { resume } = portfolioData;

  return `
    <section class="section" id="resume-section" style="padding-top: 50px; padding-bottom: 50px;">
      <div class="container">
        
        <div class="resume-card reveal-item">
          
          <!-- Content Left -->
          <div class="resume-content">
            <div class="badge badge-tech" style="width: fit-content;">
              <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5">
                <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"></path>
                <polyline points="14 2 14 8 20 8"></polyline>
                <line x1="16" y1="13" x2="8" y2="13"></line>
                <line x1="16" y1="17" x2="8" y2="17"></line>
              </svg>
              <span>CURRICULUM VITAE // 2026</span>
            </div>

            <h2 class="resume-title">
              ${escapeHtml(resume.heading)}
            </h2>

            <p class="resume-text">
              ${escapeHtml(resume.text)}
            </p>
          </div>

          <!-- Actions Right -->
          <div class="resume-actions">
            <!-- Direct Download Trigger -->
            <a href="${escapeHtml(resume.filePath)}" download="resume.pdf" class="btn btn-primary" id="resume-download-btn" target="_blank" rel="noopener noreferrer">
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round">
                <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"></path>
                <polyline points="7 10 12 15 17 10"></polyline>
                <line x1="12" y1="15" x2="12" y2="3"></line>
              </svg>
              <span>Download Resume</span>
            </a>

            <!-- Quick In-Browser Preview Modal Trigger -->
            <button class="btn btn-secondary" id="open-resume-modal-btn">
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round">
                <circle cx="12" cy="12" r="10"></circle>
                <line x1="12" y1="16" x2="12" y2="12"></line>
                <line x1="12" y1="8" x2="12.01" y2="8"></line>
              </svg>
              <span>Quick Preview</span>
            </button>

            <!-- Jump to Contact -->
            <a href="#contact" class="btn btn-outline">
              <span>Contact Me →</span>
            </a>
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
