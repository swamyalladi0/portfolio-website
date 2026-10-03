import { portfolioData } from '../data/portfolioData.js';

export function renderContact() {
  const { contact } = portfolioData;

  return `
    <section class="section" id="contact">
      <div class="container">
        
        <!-- Section Header -->
        <div class="section-header reveal-item">
          <div class="section-eyebrow">
            <span>GET IN TOUCH</span>
          </div>
          <h2 class="section-title">${escapeHtml(contact.heading)}</h2>
          <p class="section-subtitle">
            ${escapeHtml(contact.subheading)}
          </p>
        </div>

        <div class="contact-grid">
          
          <!-- Left Column: Futuristic Contact Telemetry Cards -->
          <div class="contact-left reveal-item">
            <div class="badge badge-pulse" style="margin-bottom: 16px;">
              <span>${escapeHtml(contact.availability)}</span>
            </div>

            <div class="contact-info-list">
              
              <!-- Email Card -->
              <div class="contact-card-item">
                <div class="contact-item-left">
                  <div class="contact-icon-box">
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                      <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path>
                      <polyline points="22,6 12,13 2,6"></polyline>
                    </svg>
                  </div>
                  <div>
                    <div class="contact-label">Electronic Mail</div>
                    <div class="contact-value" id="contact-email-text">${escapeHtml(contact.email)}</div>
                  </div>
                </div>
                <button class="contact-copy-btn" id="copy-email-btn" title="Copy email address">
                  <span>Copy</span>
                </button>
              </div>

              <!-- GitHub Card -->
              <a href="${escapeHtml(contact.github)}" target="_blank" rel="noopener noreferrer" class="contact-card-item">
                <div class="contact-item-left">
                  <div class="contact-icon-box">
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                      <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"></path>
                    </svg>
                  </div>
                  <div>
                    <div class="contact-label">Code Repository</div>
                    <div class="contact-value">${escapeHtml(contact.githubUsername || contact.github)}</div>
                  </div>
                </div>
                <span class="badge" style="font-size: 0.72rem;">Visit ↗</span>
              </a>

              <!-- LinkedIn Card -->
              <a href="${escapeHtml(contact.linkedin)}" target="_blank" rel="noopener noreferrer" class="contact-card-item">
                <div class="contact-item-left">
                  <div class="contact-icon-box">
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                      <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path>
                      <rect x="2" y="9" width="4" height="12"></rect>
                      <circle cx="4" cy="4" r="2"></circle>
                    </svg>
                  </div>
                  <div>
                    <div class="contact-label">Professional Network</div>
                    <div class="contact-value">${escapeHtml(contact.linkedinUsername || contact.linkedin)}</div>
                  </div>
                </div>
                <span class="badge" style="font-size: 0.72rem;">Visit ↗</span>
              </a>

              <!-- Location Card -->
              <div class="contact-card-item">
                <div class="contact-item-left">
                  <div class="contact-icon-box">
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                      <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"></path>
                      <circle cx="12" cy="10" r="3"></circle>
                    </svg>
                  </div>
                  <div>
                    <div class="contact-label">Base Location</div>
                    <div class="contact-value">${escapeHtml(contact.location)}</div>
                  </div>
                </div>
                <span class="badge badge-tech" style="font-size: 0.72rem;">Active</span>
              </div>

            </div>
          </div>

          <!-- Right Column: Interactive Glass Contact Form -->
          <div class="contact-right reveal-item">
            <div class="contact-form-panel">
              
              <form id="contact-form" novalidate>
                <div class="form-group">
                  <label class="form-label" for="contact-name">
                    <span>Your Name</span>
                    <span style="color: var(--accent-blue);">*</span>
                  </label>
                  <input 
                    type="text" 
                    id="contact-name" 
                    class="form-input" 
                    placeholder="e.g. Alex Mercer" 
                    required 
                    autocomplete="name"
                  />
                </div>

                <div class="form-group">
                  <label class="form-label" for="contact-email-input">
                    <span>Email Address</span>
                    <span style="color: var(--accent-blue);">*</span>
                  </label>
                  <input 
                    type="email" 
                    id="contact-email-input" 
                    class="form-input" 
                    placeholder="alex@domain.com" 
                    required 
                    autocomplete="email"
                  />
                </div>

                <div class="form-group">
                  <label class="form-label" for="contact-message">
                    <span>Message</span>
                    <span style="color: var(--accent-blue);">*</span>
                  </label>
                  <textarea 
                    id="contact-message" 
                    class="form-textarea" 
                    placeholder="Write your project details, inquiry, or hello..." 
                    required
                  ></textarea>
                </div>

                <button type="submit" class="btn btn-primary" id="contact-submit-btn" style="width: 100%;">
                  <span>Send Message →</span>
                </button>

                <!-- Status Feedback Message Container -->
                <div id="form-feedback" style="display: none; margin-top: 14px; padding: 12px 16px; border-radius: 10px; font-size: 0.84rem; font-family: var(--font-mono); line-height: 1.5;"></div>

                <p class="form-note">
                  ℹ️ Frontend demonstration mode: No email credentials are exposed in client-side code. To connect live sending, plug your Formspree/EmailJS endpoint in <code>portfolioData.js</code>.
                </p>
              </form>

            </div>
          </div>

        </div>

      </div>
    </section>
  `;
}

export function initContactInteractions() {
  const form = document.getElementById('contact-form');
  const submitBtn = document.getElementById('contact-submit-btn');
  const feedback = document.getElementById('form-feedback');
  const copyBtn = document.getElementById('copy-email-btn');

  // Copy Email Handler
  copyBtn?.addEventListener('click', () => {
    const email = portfolioData.contact.email;
    navigator.clipboard.writeText(email).then(() => {
      copyBtn.innerHTML = `<span>Copied! ✓</span>`;
      setTimeout(() => {
        copyBtn.innerHTML = `<span>Copy</span>`;
      }, 2500);
    }).catch(() => {
      // Fallback
      alert(`Email: ${email}`);
    });
  });

  // Form Submission Handler
  form?.addEventListener('submit', (e) => {
    e.preventDefault();

    const nameInput = document.getElementById('contact-name');
    const emailInput = document.getElementById('contact-email-input');
    const messageInput = document.getElementById('contact-message');

    const name = nameInput?.value?.trim();
    const email = emailInput?.value?.trim();
    const message = messageInput?.value?.trim();

    if (!name || !email || !message) {
      if (feedback) {
        feedback.style.display = 'block';
        feedback.style.background = 'rgba(239, 68, 68, 0.12)';
        feedback.style.border = '1px solid rgba(239, 68, 68, 0.3)';
        feedback.style.color = '#ef4444';
        feedback.textContent = '[ERROR] Please fill out all required fields before transmitting.';
      }
      return;
    }

    if (submitBtn) {
      submitBtn.innerHTML = `<span>Transmitting...</span>`;
      submitBtn.disabled = true;
    }

    setTimeout(() => {
      if (feedback) {
        feedback.style.display = 'block';
        feedback.style.background = 'rgba(16, 185, 129, 0.12)';
        feedback.style.border = '1px solid rgba(16, 185, 129, 0.3)';
        feedback.style.color = '#10b981';
        feedback.innerHTML = `
          <strong>[MESSAGE LOGGED IN DEMO MODE]</strong><br>
          Thank you, <strong>${escapeHtml(name)}</strong>! Since this is a client-side portfolio template, connect your EmailJS or Formspree ID to receive messages in production. You can also email directly at <strong>${escapeHtml(portfolioData.contact.email)}</strong>.
        `;
      }

      form.reset();
      if (submitBtn) {
        submitBtn.innerHTML = `<span>Message Sent ✓</span>`;
        setTimeout(() => {
          submitBtn.innerHTML = `<span>Send Message →</span>`;
          submitBtn.disabled = false;
        }, 4000);
      }
    }, 700);
  });
}

function escapeHtml(str) {
  if (!str) return '';
  return str.replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;").replace(/"/g, "&quot;");
}
