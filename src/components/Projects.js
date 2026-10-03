import { portfolioData } from '../data/portfolioData.js';

export function renderProjects() {
  const { projects } = portfolioData;

  return `
    <section class="section" id="projects">
      <div class="container">
        
        <!-- Section Header -->
        <div class="section-header reveal-item">
          <div class="section-eyebrow">
            <span>PORTFOLIO SHOWCASE</span>
          </div>
          <h2 class="section-title">Selected Projects</h2>
          <p class="section-subtitle">
            Things I've built while learning and experimenting. Focused on core logic, relational queries, and clean engineering.
          </p>
        </div>

        <!-- Projects List -->
        <div class="projects-list">
          ${projects.map(project => `
            <article class="project-card reveal-item" id="${project.id}">
              
              <!-- Content Area -->
              <div class="project-content">
                <div class="project-header">
                  <span class="project-number">// PROJECT ${escapeHtml(project.number)}</span>
                  <h3 class="project-title">${escapeHtml(project.title)}</h3>
                  <p class="project-tagline">${escapeHtml(project.tagline)}</p>
                </div>

                <p class="project-desc">${escapeHtml(project.description)}</p>

                <!-- Project Highlights / Key Pillars -->
                <ul class="project-highlights">
                  ${project.highlights.map(item => `
                    <li class="highlight-item">${escapeHtml(item)}</li>
                  `).join('')}
                </ul>

                <!-- Tech Tags -->
                <div class="project-tags">
                  ${project.techStack.map(tag => `
                    <span class="badge badge-tech">${escapeHtml(tag)}</span>
                  `).join('')}
                </div>

                <!-- Action Buttons -->
                <div class="project-actions">
                  <a href="${escapeHtml(project.codeUrl)}" target="_blank" rel="noopener noreferrer" class="btn btn-secondary" style="font-size: 0.88rem; padding: 10px 18px;">
                    <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                      <polyline points="16 18 22 12 16 6"></polyline>
                      <polyline points="8 6 2 12 8 18"></polyline>
                    </svg>
                    <span>View Code</span>
                  </a>

                  ${project.hasLiveDemo ? `
                    <button class="btn btn-primary open-demo-btn" data-project="${project.id}" style="font-size: 0.88rem; padding: 10px 18px;">
                      <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                        <polygon points="5 3 19 12 5 21 5 3"></polygon>
                      </svg>
                      <span>Interactive Demo</span>
                    </button>
                  ` : ''}
                </div>
              </div>

              <!-- Visual Preview Area (Abstract UI Mockups) -->
              <div class="project-preview">
                
                <!-- HUD Top Bar -->
                <div class="preview-hud-bar">
                  <div class="hud-dots">
                    <span class="hud-dot hud-dot-red"></span>
                    <span class="hud-dot hud-dot-yellow"></span>
                    <span class="hud-dot hud-dot-green"></span>
                  </div>
                  <span class="hud-file-label">
                    ${project.id === 'project-1' ? 'guesser.py // python3' : (project.id === 'project-2' ? 'healthcare_schema.sql // PostgreSQL' : 'project_blueprint.config')}
                  </span>
                </div>

                <!-- Preview Body Content -->
                <div class="preview-body">
                  ${renderProjectVisual(project)}
                </div>

              </div>

            </article>
          `).join('')}
        </div>

      </div>
    </section>
  `;
}

function renderProjectVisual(project) {
  if (project.id === 'project-1') {
    return `
      <div class="terminal-snippet">
        <span class="token-kw">import</span> random<br><br>
        <span class="token-kw">def</span> <span class="token-fn">play_guessing_game</span>():<br>
        &nbsp;&nbsp;secret_number = random.<span class="token-fn">randint</span>(1, 100)<br>
        &nbsp;&nbsp;attempts = 0<br>
        &nbsp;&nbsp;<span class="token-kw">while</span> attempts &lt; 7:<br>
        &nbsp;&nbsp;&nbsp;&nbsp;guess = <span class="token-fn">int</span>(<span class="token-fn">input</span>(<span class="token-str">"Guess > "</span>))<br>
        &nbsp;&nbsp;&nbsp;&nbsp;<span class="token-kw">if</span> guess == secret_number:<br>
        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="token-fn">print</span>(<span class="token-str">"[SUCCESS] Solved!"</span>)<br>
        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="token-kw">return</span> True<br>
        &nbsp;&nbsp;&nbsp;&nbsp;<span class="token-comment"># Dynamic range evaluation</span>
      </div>

      <div class="terminal-interactive-hint">
        <span>⚡ Interactive Python Terminal Available</span>
        <button class="btn btn-outline open-demo-btn" data-project="project-1" style="padding: 4px 10px; font-size: 0.72rem;">Launch CLI →</button>
      </div>
    `;
  }

  if (project.id === 'project-2') {
    return `
      <div class="db-schema-visual">
        <!-- Node 1: Patients & Appointments -->
        <div class="db-node-card">
          <div class="db-node-title">
            <span>TABLE: patients</span>
            <span class="badge" style="font-size: 0.65rem; padding: 2px 6px;">ENTITY</span>
          </div>
          <div class="db-fields-list">
            <span class="db-field-pill db-field-pk">PK patient_id</span>
            <span class="db-field-pill">patient_name</span>
            <span class="db-field-pill">dob</span>
            <span class="db-field-pill">blood_group</span>
            <span class="db-field-pill">contact_no</span>
          </div>
        </div>

        <!-- Node 2: Doctors & Hospitals -->
        <div class="db-node-card">
          <div class="db-node-title">
            <span>TABLE: appointments</span>
            <span class="badge" style="font-size: 0.65rem; padding: 2px 6px;">RELATION</span>
          </div>
          <div class="db-fields-list">
            <span class="db-field-pill db-field-pk">PK appointment_id</span>
            <span class="db-field-pill">FK patient_id</span>
            <span class="db-field-pill">FK doctor_id</span>
            <span class="db-field-pill">FK room_id</span>
            <span class="db-field-pill">status</span>
          </div>
        </div>

        <!-- Node 3: Rooms / Hospitals -->
        <div class="db-node-card" style="opacity: 0.85;">
          <div class="db-node-title">
            <span>TABLE: hospitals_and_rooms</span>
            <span class="badge" style="font-size: 0.65rem; padding: 2px 6px;">FACILITY</span>
          </div>
          <div class="db-fields-list">
            <span class="db-field-pill db-field-pk">PK room_id</span>
            <span class="db-field-pill">FK hospital_id</span>
            <span class="db-field-pill">room_type</span>
            <span class="db-field-pill">is_occupied</span>
          </div>
        </div>
      </div>

      <div class="terminal-interactive-hint" style="margin-top: 14px;">
        <span>🔍 Explore Relational Queries & Joins</span>
        <button class="btn btn-outline open-demo-btn" data-project="project-2" style="padding: 4px 10px; font-size: 0.72rem;">Open Schema →</button>
      </div>
    `;
  }

  // Project 3 Blueprint Mockup
  return `
    <div class="blueprint-card">
      <div class="blueprint-icon">
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
          <circle cx="12" cy="12" r="10"></circle>
          <line x1="12" y1="8" x2="12" y2="16"></line>
          <line x1="8" y1="12" x2="16" y2="12"></line>
        </svg>
      </div>
      <span style="font-weight: 700; color: var(--text-primary); font-size: 0.95rem;">SLOT READY FOR PROJECT 03</span>
      <p style="font-size: 0.78rem; color: var(--text-dim); max-width: 260px;">
        Easily update project details in <code>src/data/portfolioData.js</code>.
      </p>
    </div>
  `;
}

function escapeHtml(str) {
  if (!str) return '';
  return str.replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;").replace(/"/g, "&quot;");
}
