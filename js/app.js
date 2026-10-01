// ==========================================================================
// Minimal Component Switcher Engine (Non-scrolling, Gesture & Wheel Driven)
// Optimized for Desktop, Tablet, and Mobile
// ==========================================================================

class PortfolioApp {
  constructor() {
    this.sections = [
      { id: 'hero', label: 'Intro', loader: () => import('./components/HeroSection.js').then(m => m.renderHeroSection) },
      { id: 'summary', label: 'Summary', loader: () => import('./components/SummarySection.js').then(m => m.renderSummarySection) },
      { id: 'skills', label: 'Skills', loader: () => import('./components/SkillsSection.js').then(m => m.renderSkillsSection) },
      { id: 'experience', label: 'Experience', loader: () => import('./components/ExperienceSection.js').then(m => m.renderExperienceSection) },
      { id: 'projects', label: 'Projects', loader: () => import('./components/ProjectsSection.js').then(m => m.renderProjectsSection) },
      { id: 'education', label: 'Education', loader: () => import('./components/EducationSection.js').then(m => m.renderEducationSection) },
      { id: 'contact', label: 'Contact', loader: () => import('./components/ContactSection.js').then(m => m.renderContactSection) }
    ];

    this.currentIndex = 0;
    this.isTransitioning = false;
    this.touchStartY = 0;
    this.touchStartX = 0;
    this.loadedSections = new Set();
  }

  init() {
    this.buildDOMElements();
    this.bindEvents();

    // Check URL hash or start at 0
    const hash = window.location.hash.replace('#', '');
    const initialIndex = this.sections.findIndex(s => s.id === hash);
    this.goToIndex(initialIndex >= 0 ? initialIndex : 0, true);
  }

  buildDOMElements() {
    // Stage panes
    const stage = document.getElementById('stage-container');
    if (stage) {
      stage.innerHTML = this.sections.map((s, idx) => `
        <div class="section-pane ${idx === 0 ? 'active' : ''}" id="pane-${s.id}" data-index="${idx}">
          <div style="color: var(--text-dim); font-size: 0.85rem; padding: 40px 0;">Loading...</div>
        </div>
      `).join('');
    }

    // Side dots
    const sideNav = document.getElementById('side-nav');
    if (sideNav) {
      sideNav.innerHTML = this.sections.map((s, idx) => `
        <button class="dot-btn ${idx === 0 ? 'active' : ''}" data-index="${idx}" aria-label="Go to ${s.label}">
          <span class="dot"></span>
          <span class="dot-label">0${idx + 1} ${s.label}</span>
        </button>
      `).join('');
    }

    // Top nav links
    const topNav = document.getElementById('top-nav');
    if (topNav) {
      topNav.innerHTML = this.sections.map((s, idx) => `
        <a href="#${s.id}" class="top-nav-link ${idx === 0 ? 'active' : ''}" data-index="${idx}">${s.label}</a>
      `).join('');
    }
  }

  bindEvents() {
    // Wheel / trackpad gesture
    window.addEventListener('wheel', (e) => {
      const activePane = document.querySelector('.section-pane.active');
      if (activePane) {
        const atTop = activePane.scrollTop <= 2;
        const atBottom = activePane.scrollTop + activePane.clientHeight >= activePane.scrollHeight - 4;

        if (e.deltaY > 0 && !atBottom) return; // Allow normal inner scroll downwards
        if (e.deltaY < 0 && !atTop) return;    // Allow normal inner scroll upwards
      }

      if (Math.abs(e.deltaY) < 18) return; // ignore micro jitters
      e.preventDefault();

      if (this.isTransitioning) return;

      if (e.deltaY > 0) {
        this.next();
      } else {
        this.prev();
      }
    }, { passive: false });

    // Keyboard navigation
    window.addEventListener('keydown', (e) => {
      if (['input', 'textarea'].includes(document.activeElement?.tagName.toLowerCase())) return;

      if (['ArrowDown', 'PageDown', ' '].includes(e.key)) {
        e.preventDefault();
        this.next();
      } else if (['ArrowUp', 'PageUp'].includes(e.key)) {
        e.preventDefault();
        this.prev();
      }
    });

    // Touch gesture with boundary check for mobile
    window.addEventListener('touchstart', (e) => {
      this.touchStartY = e.touches[0].clientY;
      this.touchStartX = e.touches[0].clientX;
    }, { passive: true });

    window.addEventListener('touchend', (e) => {
      const deltaY = this.touchStartY - e.changedTouches[0].clientY;
      const deltaX = this.touchStartX - e.changedTouches[0].clientX;

      // Ignore horizontal swipes
      if (Math.abs(deltaX) > Math.abs(deltaY)) return;

      if (Math.abs(deltaY) > 45) {
        const activePane = document.querySelector('.section-pane.active');
        if (activePane) {
          const atTop = activePane.scrollTop <= 4;
          const atBottom = activePane.scrollTop + activePane.clientHeight >= activePane.scrollHeight - 6;

          if (deltaY > 0 && !atBottom) return; // Allow normal scroll down inside pane
          if (deltaY < 0 && !atTop) return;    // Allow normal scroll up inside pane
        }

        if (deltaY > 0) {
          this.next();
        } else {
          this.prev();
        }
      }
    }, { passive: true });

    // Side dots click
    document.getElementById('side-nav')?.addEventListener('click', (e) => {
      const btn = e.target.closest('.dot-btn');
      if (btn) {
        const idx = parseInt(btn.dataset.index, 10);
        this.goToIndex(idx);
      }
    });

    // Top nav click
    document.getElementById('top-nav')?.addEventListener('click', (e) => {
      const link = e.target.closest('.top-nav-link');
      if (link) {
        e.preventDefault();
        const idx = parseInt(link.dataset.index, 10);
        this.goToIndex(idx);
      }
    });

    // Bottom arrow buttons
    document.getElementById('btn-prev')?.addEventListener('click', () => this.prev());
    document.getElementById('btn-next')?.addEventListener('click', () => this.next());
  }

  next() {
    if (this.currentIndex < this.sections.length - 1) {
      this.goToIndex(this.currentIndex + 1);
    }
  }

  prev() {
    if (this.currentIndex > 0) {
      this.goToIndex(this.currentIndex - 1);
    }
  }

  goToSection(sectionId) {
    const idx = this.sections.findIndex(s => s.id === sectionId);
    if (idx >= 0) this.goToIndex(idx);
  }

  async goToIndex(targetIndex, force = false) {
    if (targetIndex < 0 || targetIndex >= this.sections.length) return;
    if (!force && (this.currentIndex === targetIndex || this.isTransitioning)) return;

    this.isTransitioning = true;
    const direction = targetIndex > this.currentIndex ? 'down' : 'up';
    const oldIndex = this.currentIndex;
    this.currentIndex = targetIndex;

    const currentSection = this.sections[targetIndex];
    const targetPane = document.getElementById(`pane-${currentSection.id}`);

    // Lazy load target component if not already loaded
    if (!this.loadedSections.has(currentSection.id) && targetPane) {
      try {
        const renderer = await currentSection.loader();
        targetPane.innerHTML = '';
        renderer(targetPane, this);
        this.loadedSections.add(currentSection.id);
      } catch (err) {
        console.error('Error loading component:', err);
      }
    }

    // Animate panes
    const allPanes = document.querySelectorAll('.section-pane');
    allPanes.forEach((pane, idx) => {
      if (idx === targetIndex) {
        pane.classList.remove('exit-up', 'exit-down');
        pane.classList.add('active');
        pane.scrollTop = 0; // Always reset scroll to top of new section
      } else if (idx === oldIndex && !force) {
        pane.classList.remove('active');
        pane.classList.add(direction === 'down' ? 'exit-up' : 'exit-down');
      } else {
        pane.classList.remove('active', 'exit-up', 'exit-down');
      }
    });

    // Update UI Indicators
    this.updateIndicators();

    // Update URL hash quietly
    history.replaceState(null, '', `#${currentSection.id}`);

    setTimeout(() => {
      this.isTransitioning = false;
    }, 420);
  }

  updateIndicators() {
    const currentSection = this.sections[this.currentIndex];

    // Side dots
    document.querySelectorAll('.dot-btn').forEach((btn, idx) => {
      btn.classList.toggle('active', idx === this.currentIndex);
    });

    // Top links
    document.querySelectorAll('.top-nav-link').forEach((link, idx) => {
      link.classList.toggle('active', idx === this.currentIndex);
    });

    // Progress text
    const prog = document.getElementById('progress-indicator');
    if (prog) {
      prog.textContent = `0${this.currentIndex + 1} / 0${this.sections.length}  ${currentSection.label}`;
    }

    // Arrow buttons state
    const prevBtn = document.getElementById('btn-prev');
    const nextBtn = document.getElementById('btn-next');
    if (prevBtn) prevBtn.disabled = this.currentIndex === 0;
    if (nextBtn) nextBtn.disabled = this.currentIndex === this.sections.length - 1;
  }

  showToast(msg) {
    let toast = document.getElementById('minimal-toast');
    if (!toast) {
      toast = document.createElement('div');
      toast.id = 'minimal-toast';
      toast.className = 'minimal-toast';
      document.body.appendChild(toast);
    }
    toast.textContent = msg;
    toast.classList.add('show');
    setTimeout(() => toast.classList.remove('show'), 2500);
  }
}

document.addEventListener('DOMContentLoaded', () => {
  const app = new PortfolioApp();
  app.init();
});
