import { renderNavbar, initNavbarInteractions } from './components/Navbar.js?v=2.1';
import { renderHero, initHeroInteractions } from './components/Hero.js?v=2.1';
import { renderAbout } from './components/About.js?v=2.1';
import { renderSkills, initSkillsInteractions } from './components/Skills.js?v=2.1';
import { renderProjects } from './components/Projects.js?v=2.1';
import { renderEducation } from './components/Education.js?v=2.1';
import { renderResume } from './components/Resume.js?v=2.1';
import { renderContact, initContactInteractions } from './components/Contact.js?v=2.1';
import { renderFooter, initFooterInteractions } from './components/Footer.js?v=2.1';
import { renderModals, initModalsInteractions } from './components/Modals.js?v=2.1';
import { renderLiveEditor, initLiveEditorInteractions } from './components/LiveEditor.js?v=2.1';
import { initBackgroundEffects } from './components/Background.js?v=2.1';

function initApp() {
  const appContainer = document.getElementById('app');
  if (!appContainer) return;

  // Render Full Page HTML
  appContainer.innerHTML = `
    <!-- Top Scroll Progress Bar -->
    <div id="scroll-progress"></div>

    <!-- Ambient Cursor Glow for Desktop -->
    <div id="cursor-glow" aria-hidden="true"></div>

    <!-- Background Particle Canvas & Circuit Grid -->
    <canvas id="bg-canvas" aria-hidden="true"></canvas>
    <div class="circuit-grid" aria-hidden="true"></div>

    <!-- Primary Layout Components -->
    ${renderNavbar()}
    
    <main id="main-content">
      ${renderHero()}
      ${renderAbout()}
      ${renderSkills()}
      ${renderProjects()}
      ${renderEducation()}
      ${renderResume()}
      ${renderContact()}
    </main>

    ${renderFooter()}

    <!-- Interactive Demos & Modals -->
    ${renderModals()}

    <!-- Developer Quick Customizer HUD -->
    ${renderLiveEditor()}
  `;

  // Initialize Interactive Behaviors
  initNavbarInteractions();
  initHeroInteractions();
  initSkillsInteractions();
  initContactInteractions();
  initFooterInteractions();
  initModalsInteractions();
  initLiveEditorInteractions();
  initBackgroundEffects();

  // Initialize Scroll Reveal Animations with IntersectionObserver
  initScrollReveal();

  // Initialize Smooth Anchor Link Offset Scroll
  initSmoothScroll();
}

function initScrollReveal() {
  const revealElements = document.querySelectorAll('.reveal-item');
  if (!('IntersectionObserver' in window)) {
    // Fallback if IntersectionObserver isn't supported
    revealElements.forEach(el => el.classList.add('revealed'));
    return;
  }

  const observer = new IntersectionObserver((entries, obs) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('revealed');
        obs.unobserve(entry.target);
      }
    });
  }, {
    threshold: 0.12,
    rootMargin: '0px 0px -40px 0px'
  });

  revealElements.forEach(el => observer.observe(el));
}

function initSmoothScroll() {
  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
      const targetId = this.getAttribute('href');
      if (targetId === '#' || !targetId) return;

      const targetElement = document.querySelector(targetId);
      if (targetElement) {
        e.preventDefault();
        const navHeight = 74;
        const elementPosition = targetElement.getBoundingClientRect().top;
        const offsetPosition = elementPosition + window.pageYOffset - navHeight;

        window.scrollTo({
          top: offsetPosition,
          behavior: 'smooth'
        });

        // Update URL hash without jumping
        history.pushState(null, null, targetId);
      }
    });
  });
}

// Execute when DOM is ready
if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', initApp);
} else {
  initApp();
}
