import { portfolioData } from '../data/portfolioData.js';

export function renderNavbar() {
  const { personal } = portfolioData;

  return `
    <header class="navbar-wrapper" id="navbar-wrapper">
      <nav class="navbar" aria-label="Main Navigation">
        <!-- Brand / Monogram -->
        <a href="#home" class="nav-brand" aria-label="Return to top">
          <div class="brand-monogram">${escapeHtml(personal.initials || "YN")}</div>
          <div class="brand-text">
            <span class="brand-name">${escapeHtml(personal.name)}</span>
            <span class="brand-role">PORTFOLIO // 2026</span>
          </div>
        </a>

        <!-- Desktop Navigation Links -->
        <ul class="nav-links">
          <li><a href="#home" class="nav-link active" data-section="home">Home</a></li>
          <li><a href="#about" class="nav-link" data-section="about">About</a></li>
          <li><a href="#skills" class="nav-link" data-section="skills">Skills</a></li>
          <li><a href="#projects" class="nav-link" data-section="projects">Projects</a></li>
          <li><a href="#education" class="nav-link" data-section="education">Education</a></li>
          <li><a href="#contact" class="nav-link" data-section="contact">Contact</a></li>
        </ul>

        <!-- Right Side CTA & Mobile Toggle -->
        <div class="nav-cta">
          <a href="#contact" class="btn btn-primary" style="padding: 9px 18px; font-size: 0.85rem;">
            <span>Let's Connect</span>
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round">
              <line x1="5" y1="12" x2="19" y2="12"></line>
              <polyline points="12 5 19 12 12 19"></polyline>
            </svg>
          </a>

          <!-- Mobile Hamburger Button -->
          <button class="hamburger-btn" id="hamburger-btn" aria-label="Toggle navigation menu" aria-expanded="false">
            <span class="hamburger-line"></span>
            <span class="hamburger-line"></span>
            <span class="hamburger-line"></span>
          </button>
        </div>
      </nav>

      <!-- Mobile Navigation Drawer -->
      <div class="mobile-nav-drawer" id="mobile-nav-drawer">
        <a href="#home" class="mobile-nav-link active" data-section="home">Home</a>
        <a href="#about" class="mobile-nav-link" data-section="about">About</a>
        <a href="#skills" class="mobile-nav-link" data-section="skills">Skills</a>
        <a href="#projects" class="mobile-nav-link" data-section="projects">Projects</a>
        <a href="#education" class="mobile-nav-link" data-section="education">Education</a>
        <a href="#contact" class="mobile-nav-link" data-section="contact">Contact</a>
        <a href="#contact" class="btn btn-primary" style="margin-top: 10px; width: 100%;">
          <span>Let's Connect →</span>
        </a>
      </div>
    </header>
  `;
}

export function initNavbarInteractions() {
  const navbarWrapper = document.getElementById('navbar-wrapper');
  const hamburgerBtn = document.getElementById('hamburger-btn');
  const mobileDrawer = document.getElementById('mobile-nav-drawer');
  const desktopLinks = document.querySelectorAll('.nav-link');
  const mobileLinks = document.querySelectorAll('.mobile-nav-link');
  const sections = document.querySelectorAll('section[id]');

  // Scroll listener for sticky blur & section active state
  window.addEventListener('scroll', () => {
    if (window.scrollY > 40) {
      navbarWrapper?.classList.add('navbar-scrolled');
    } else {
      navbarWrapper?.classList.remove('navbar-scrolled');
    }

    // Scroll spy for current active section
    let currentId = 'home';
    sections.forEach(section => {
      const sectionTop = section.offsetTop - 140;
      const sectionHeight = section.offsetHeight;
      if (window.scrollY >= sectionTop && window.scrollY < sectionTop + sectionHeight) {
        currentId = section.getAttribute('id');
      }
    });

    desktopLinks.forEach(link => {
      if (link.getAttribute('data-section') === currentId) {
        link.classList.add('active');
      } else {
        link.classList.remove('active');
      }
    });

    mobileLinks.forEach(link => {
      if (link.getAttribute('data-section') === currentId) {
        link.classList.add('active');
      } else {
        link.classList.remove('active');
      }
    });
  }, { passive: true });

  // Toggle mobile drawer
  hamburgerBtn?.addEventListener('click', () => {
    const isOpen = hamburgerBtn.classList.toggle('open');
    mobileDrawer?.classList.toggle('open');
    hamburgerBtn.setAttribute('aria-expanded', isOpen ? 'true' : 'false');
  });

  // Close mobile drawer on link click
  mobileLinks.forEach(link => {
    link.addEventListener('click', () => {
      hamburgerBtn?.classList.remove('open');
      mobileDrawer?.classList.remove('open');
      hamburgerBtn?.setAttribute('aria-expanded', 'false');
    });
  });
}

function escapeHtml(str) {
  if (!str) return '';
  return str.replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;").replace(/"/g, "&quot;");
}
