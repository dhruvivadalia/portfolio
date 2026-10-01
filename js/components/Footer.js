import { icons } from '../utils/icons.js';

export function renderFooter(container) {
  const footerHTML = `
    <footer class="site-footer">
      <div class="container">
        <div class="footer-content">
          <div class="footer-brand">
            <div class="footer-logo">Dhruvi <span class="gradient-text">Vadalia</span></div>
            <p class="footer-tagline">Full Stack Developer — Angular &amp; .NET Core</p>
          </div>

          <div class="footer-links">
            <a href="#hero" class="footer-link">Home</a>
            <a href="#summary" class="footer-link">Summary</a>
            <a href="#skills" class="footer-link">Skills</a>
            <a href="#experience" class="footer-link">Experience</a>
            <a href="#projects" class="footer-link">Projects</a>
            <a href="#education" class="footer-link">Education</a>
            <a href="#contact" class="footer-link">Contact</a>
          </div>
        </div>

        <div class="footer-bottom">
          <div>
            &copy; ${new Date().getFullYear()} Dhruvi Vadalia. All rights reserved.
          </div>
          <div>
            Built with modern modular JavaScript, Intersection Observer Lazy-Loading &amp; Vanilla CSS.
          </div>
        </div>
      </div>

      <!-- Back to top floating button -->
      <button class="back-to-top-btn" id="back-to-top" aria-label="Scroll back to top">
        ${icons.arrowUp}
      </button>
    </footer>
  `;

  container.innerHTML = footerHTML;

  // Back to top behavior
  const backToTopBtn = container.querySelector('#back-to-top');
  if (backToTopBtn) {
    window.addEventListener('scroll', () => {
      if (window.scrollY > 400) {
        backToTopBtn.classList.add('visible');
      } else {
        backToTopBtn.classList.remove('visible');
      }
    }, { passive: true });

    backToTopBtn.addEventListener('click', () => {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    });
  }
}
