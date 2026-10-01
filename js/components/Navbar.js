import { icons } from '../utils/icons.js';

export function renderNavbar(container) {
  const navHTML = `
    <header class="site-header" id="site-header">
      <div class="nav-container">
        <a href="#hero" class="nav-brand" aria-label="Dhruvi Vadalia Homepage">
          <div class="brand-badge">DV</div>
          <div class="brand-text">Dhruvi <span class="brand-accent">Vadalia</span></div>
        </a>

        <ul class="nav-links" id="nav-links">
          <li><a href="#hero" class="nav-link active" data-section="hero">Home</a></li>
          <li><a href="#summary" class="nav-link" data-section="summary">Summary</a></li>
          <li><a href="#skills" class="nav-link" data-section="skills">Skills</a></li>
          <li><a href="#experience" class="nav-link" data-section="experience">Experience</a></li>
          <li><a href="#projects" class="nav-link" data-section="projects">Projects</a></li>
          <li><a href="#education" class="nav-link" data-section="education">Education</a></li>
          <li><a href="#contact" class="nav-link" data-section="contact">Contact</a></li>
        </ul>

        <div class="nav-actions">
          <a href="Vadalia_Dhruvi_Resume.pdf" download class="btn btn-secondary nav-cta" target="_blank" rel="noopener">
            ${icons.download}
            <span>Resume</span>
          </a>
          <button class="mobile-toggle" id="mobile-toggle" aria-label="Toggle navigation menu" aria-expanded="false">
            ${icons.menu}
          </button>
        </div>
      </div>
    </header>
  `;

  container.innerHTML = navHTML;

  // Setup navbar interactions
  const header = document.getElementById('site-header');
  const mobileToggle = document.getElementById('mobile-toggle');
  const navLinks = document.getElementById('nav-links');
  const links = document.querySelectorAll('.nav-link');

  // Sticky header scroll behavior
  const handleScroll = () => {
    if (window.scrollY > 40) {
      header.classList.add('scrolled');
    } else {
      header.classList.remove('scrolled');
    }
  };
  window.addEventListener('scroll', handleScroll, { passive: true });
  handleScroll();

  // Mobile menu toggle
  if (mobileToggle) {
    mobileToggle.addEventListener('click', () => {
      const isOpen = navLinks.classList.toggle('open');
      mobileToggle.setAttribute('aria-expanded', isOpen);
      mobileToggle.innerHTML = isOpen ? icons.close : icons.menu;
    });
  }

  // Smooth scroll and auto-close mobile drawer on link click
  links.forEach(link => {
    link.addEventListener('click', (e) => {
      const targetId = link.getAttribute('href');
      if (targetId.startsWith('#')) {
        const targetElement = document.querySelector(targetId);
        if (targetElement) {
          e.preventDefault();
          targetElement.scrollIntoView({ behavior: 'smooth', block: 'start' });
        }
      }

      if (navLinks.classList.contains('open')) {
        navLinks.classList.remove('open');
        mobileToggle.setAttribute('aria-expanded', 'false');
        mobileToggle.innerHTML = icons.menu;
      }
    });
  });

  return {
    updateActiveLink: (sectionId) => {
      links.forEach(link => {
        if (link.dataset.section === sectionId) {
          link.classList.add('active');
        } else {
          link.classList.remove('active');
        }
      });
    }
  };
}
