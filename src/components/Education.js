import { portfolioData } from '../data/portfolioData.js';

export function renderEducation() {
  const { education } = portfolioData;

  return `
    <section class="section" id="education">
      <div class="container">
        
        <!-- Section Header -->
        <div class="section-header reveal-item">
          <div class="section-eyebrow">
            <span>ACADEMIC BACKGROUND</span>
          </div>
          <h2 class="section-title">Education & Milestones</h2>
          <p class="section-subtitle">
            Formal engineering education, core computer science curriculum, and technical foundation.
          </p>
        </div>

        <!-- Futuristic Timeline Layout -->
        <div class="timeline-container">
          <div class="timeline-line"></div>

          <!-- Academic Card -->
          <div class="timeline-card reveal-item">
            <div class="timeline-node-pin"></div>

            <!-- Year & Degree Badge -->
            <div class="edu-badge-row">
              <span class="edu-year-badge">${escapeHtml(education.year)}</span>
              <span class="badge badge-tech">${escapeHtml(education.status)}</span>
            </div>

            <h3 class="edu-degree">${escapeHtml(education.degree)}</h3>
            <h4 class="edu-major">${escapeHtml(education.major)}</h4>

            <!-- Grid of Institutional Details & Placeholders -->
            <div class="edu-details-grid">
              <div class="edu-detail-item">
                <span class="edu-detail-label">Institution:</span>
                <span class="edu-detail-value">${escapeHtml(education.institution)}</span>
              </div>

              <div class="edu-detail-item">
                <span class="edu-detail-label">University / Board:</span>
                <span class="edu-detail-value">${escapeHtml(education.university)}</span>
              </div>

              <div class="edu-detail-item">
                <span class="edu-detail-label">Academic Score / CGPA:</span>
                <span class="edu-detail-value" style="color: var(--accent-blue);">${escapeHtml(education.cgpa)}</span>
              </div>

              <div class="edu-detail-item">
                <span class="edu-detail-label">Location:</span>
                <span class="edu-detail-value">${escapeHtml(education.location)}</span>
              </div>
            </div>

            <!-- Timeline Notes -->
            <ul class="project-highlights" style="margin-top: 18px;">
              ${education.timelineNotes.map(note => `
                <li class="highlight-item">${escapeHtml(note)}</li>
              `).join('')}
            </ul>

            <!-- Relevant Coursework -->
            <div class="coursework-box">
              <div class="coursework-title">// RELEVANT COMPUTER SCIENCE COURSEWORK</div>
              <div class="coursework-pills">
                ${education.relevantCoursework.map(course => `
                  <span class="course-pill">${escapeHtml(course)}</span>
                `).join('')}
              </div>
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
