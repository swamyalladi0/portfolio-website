import { portfolioData } from '../data/portfolioData.js?v=2.1';

export function renderFooter() {
  const { personal, footer } = portfolioData;

  return `
    <footer class="footer">
      <div class="container">
        
        <!-- Top Row: Brand & Nav Links -->
        <div class="footer-top">
          <div class="footer-brand">
            <span style="font-family: var(--font-heading); font-size: 1.15rem; font-weight: 700; color: var(--text-primary);">
              ${escapeHtml(personal.name)}
            </span>
            <p style="font-size: 0.85rem; color: var(--text-dim); margin-top: 4px;">
              ${escapeHtml(footer.quote)}
            </p>
          </div>

          <ul class="footer-nav">
            ${footer.links.map(link => `
              <li><a href="${escapeHtml(link.href)}" class="footer-link">${escapeHtml(link.label)}</a></li>
            `).join('')}
          </ul>
        </div>

        <!-- Bottom Row: Copyright & Back-to-Top -->
        <div class="footer-bottom">
          <div>
            ${escapeHtml(footer.copyright)}
          </div>

          <div style="display: flex; align-items: center; gap: 20px;">
            <a href="${escapeHtml(personal.github)}" target="_blank" rel="noopener noreferrer" class="footer-link">GitHub</a>
            <a href="${escapeHtml(personal.linkedin)}" target="_blank" rel="noopener noreferrer" class="footer-link">LinkedIn</a>
            <a href="mailto:${escapeHtml(personal.email)}" class="footer-link">Email</a>
            
            <button class="back-to-top" id="back-to-top-btn" aria-label="Back to top of page">
              <span>Back to Top</span>
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                <line x1="12" y1="19" x2="12" y2="5"></line>
                <polyline points="5 12 12 5 19 12"></polyline>
              </svg>
            </button>
          </div>
        </div>

      </div>
    </footer>
  `;
}

export function initFooterInteractions() {
  const backToTopBtn = document.getElementById('back-to-top-btn');
  backToTopBtn?.addEventListener('click', () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  });
}

function escapeHtml(str) {
  if (!str) return '';
  return str.replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;").replace(/"/g, "&quot;");
}
