import { portfolioData } from '../data/portfolioData.js?v=2.1';

export function renderSkills() {
  const { techStack } = portfolioData;

  const categories = ["All", ...techStack.map(c => c.category)];

  return `
    <section class="section" id="skills">
      <div class="container">
        
        <!-- Section Header -->
        <div class="section-header reveal-item">
          <div class="section-eyebrow">
            <span>TECH STACK</span>
          </div>
          <h2 class="section-title">Technologies I Work With</h2>
          <p class="section-subtitle">
            Focused on core engineering fundamentals, clean logic, relational database systems, and modern web technologies.
          </p>
        </div>

        <!-- Filter Tabs -->
        <div class="skills-filter-bar reveal-item" id="skills-filter-bar" role="tablist" aria-label="Technology Categories">
          ${categories.map((cat, idx) => `
            <button 
              class="filter-btn ${idx === 0 ? 'active' : ''}" 
              data-category="${cat}"
              role="tab"
              aria-selected="${idx === 0 ? 'true' : 'false'}"
            >
              ${cat === 'All' ? 'All Technologies' : cat}
            </button>
          `).join('')}
        </div>

        <!-- Tech Stack Categories Grid -->
        <div class="skills-container" id="skills-container">
          ${techStack.map(group => `
            <div class="skills-category-group" data-category="${group.category}">
              <div class="category-header">
                <h3 class="category-title">${escapeHtml(group.category)}</h3>
                <span class="category-desc">// ${escapeHtml(group.description)}</span>
              </div>

              <div class="skills-grid">
                ${group.skills.map(skill => `
                  <div class="skill-card reveal-item" data-skill="${escapeHtml(skill.name)}">
                    <div class="skill-top">
                      <div class="skill-icon-wrap" aria-hidden="true">
                        ${renderSkillIcon(skill.icon)}
                      </div>
                      <span class="skill-badge">${escapeHtml(skill.level)}</span>
                    </div>
                    <h4 class="skill-name">${escapeHtml(skill.name)}</h4>
                    <p class="skill-desc">${escapeHtml(skill.description)}</p>
                  </div>
                `).join('')}
              </div>
            </div>
          `).join('')}
        </div>

      </div>
    </section>
  `;
}

export function initSkillsInteractions() {
  const filterBtns = document.querySelectorAll('.filter-btn');
  const categoryGroups = document.querySelectorAll('.skills-category-group');
  const skillCards = document.querySelectorAll('.skill-card');

  // Category Filtering logic
  filterBtns.forEach(btn => {
    btn.addEventListener('click', () => {
      filterBtns.forEach(b => {
        b.classList.remove('active');
        b.setAttribute('aria-selected', 'false');
      });
      btn.classList.add('active');
      btn.setAttribute('aria-selected', 'true');

      const selectedCategory = btn.getAttribute('data-category');

      categoryGroups.forEach(group => {
        const groupCategory = group.getAttribute('data-category');
        if (selectedCategory === 'All' || groupCategory === selectedCategory) {
          group.style.display = 'block';
        } else {
          group.style.display = 'none';
        }
      });
    });
  });

  // Dynamic Mouse Spotlight effect on cards
  skillCards.forEach(card => {
    card.addEventListener('mousemove', (e) => {
      const rect = card.getBoundingClientRect();
      const x = ((e.clientX - rect.left) / rect.width) * 100;
      const y = ((e.clientY - rect.top) / rect.height) * 100;
      card.style.setProperty('--mouse-x', `${x}%`);
      card.style.setProperty('--mouse-y', `${y}%`);
    });
  });
}

function renderSkillIcon(icon) {
  switch (icon) {
    case 'python':
      return `<svg width="24" height="24" viewBox="0 0 24 24" fill="none"><path d="M11.9 2c-3.4 0-5.7.5-6.8 1.6C4 4.7 4 7 4 7h4v1H3.6C2.2 8 1 9.4 1 11.2c0 2 1.3 3.3 3 3.3H6v-2.3c0-1.8 1.5-3.3 3.3-3.3h5.4c1.5 0 2.7-1.2 2.7-2.7V4.7C17.4 3 15.3 2 11.9 2zm-2.1 2.2a1 1 0 1 1 0 2 1 1 0 0 1 0-2z" fill="#38bdf8"/><path d="M12.1 22c3.4 0 5.7-.5 6.8-1.6 1.1-1.1 1.1-3.4 1.1-3.4h-4v-1h4.4c1.4 0 2.6-1.4 2.6-3.2 0-2-1.3-3.3-3-3.3H18v2.3c0 1.8-1.5 3.3-3.3 3.3H9.3c-1.5 0-2.7 1.2-2.7 2.7v1.5c0 1.7 2.1 2.7 5.5 2.7zm2.1-2.2a1 1 0 1 1 0-2 1 1 0 0 1 0 2z" fill="#818cf8"/></svg>`;
    
    case 'java':
      return `<svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#f59e0b" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><path d="M18 8h1a4 4 0 0 1 0 8h-1"></path><path d="M2 8h16v9a4 4 0 0 1-4 4H6a4 4 0 0 1-4-4V8z"></path><line x1="6" y1="1" x2="6" y2="4"></line><line x1="10" y1="1" x2="10" y2="4"></line><line x1="14" y1="1" x2="14" y2="4"></line></svg>`;

    case 'html':
      return `<svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#f97316" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><polygon points="3 2 21 2 19.3 19 12 22 4.7 19"></polygon><polyline points="7.5 7 16.5 7 16 11 8 11"></polyline><polyline points="15.8 14 12 15 8.2 14 8 12"></polyline></svg>`;

    case 'css':
      return `<svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#38bdf8" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><polygon points="3 2 21 2 19.3 19 12 22 4.7 19"></polygon><path d="M7.5 7h9l-1 9-3.5 1-3.5-1-.3-3h2.3l.1 1.5 1.4.4 1.4-.4.2-2.5H7.5"></path></svg>`;

    case 'javascript':
      return `<svg width="24" height="24" viewBox="0 0 24 24" fill="none"><rect x="2" y="2" width="20" height="20" rx="4" fill="#eab308" opacity="0.15" stroke="#eab308" stroke-width="1.5"/><path d="M10 9v6c0 .8-.5 1.5-1.5 1.5s-1.5-.5-1.5-1.5" stroke="#eab308" stroke-width="1.8" stroke-linecap="round"/><path d="M14 16.5c1 .5 2.5.5 2.5-.5 0-1.5-2.5-.8-2.5-2.5 0-1 1-1.5 2.5-1.5.8 0 1.5.2 2 .5" stroke="#eab308" stroke-width="1.8" stroke-linecap="round"/></svg>`;

    case 'database':
      return `<svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#38bdf8" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><ellipse cx="12" cy="5" rx="9" ry="3"></ellipse><path d="M21 12c0 1.66-4 3-9 3s-9-1.34-9-3"></path><path d="M3 5v14c0 1.66 4 3 9 3s9-1.34 9-3V5"></path></svg>`;

    case 'box':
      return `<svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#a855f7" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><path d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z"></path><polyline points="3.27 6.96 12 12.01 20.73 6.96"></polyline><line x1="12" y1="22.08" x2="12" y2="12"></line></svg>`;

    case 'layers':
      return `<svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#06b6d4" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><polygon points="12 2 2 7 12 12 22 7 12 2"></polygon><polyline points="2 17 12 22 22 17"></polyline><polyline points="2 12 12 17 22 12"></polyline></svg>`;

    case 'git-branch':
      return `<svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#10b981" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><line x1="6" y1="3" x2="6" y2="15"></line><circle cx="18" cy="6" r="3"></circle><circle cx="6" cy="18" r="3"></circle><path d="M18 9a9 9 0 0 1-9 9"></path></svg>`;

    case 'git':
      return `<svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#f43f5e" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><circle cx="18" cy="18" r="3"></circle><circle cx="6" cy="6" r="3"></circle><circle cx="6" cy="18" r="3"></circle><line x1="6" y1="9" x2="6" y2="15"></line><path d="M9 6h6a3 3 0 0 1 3 3v6"></path></svg>`;

    case 'github':
    default:
      return `<svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#cbd5e1" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"></path></svg>`;
  }
}

function escapeHtml(str) {
  if (!str) return '';
  return str.replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;").replace(/"/g, "&quot;");
}
