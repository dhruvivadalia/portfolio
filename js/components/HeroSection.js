export function renderHeroSection(container, app) {
  container.innerHTML = `
    <div class="pane-inner hero-layout-full">
      <div class="hero-top-block">
        <div class="sec-meta">01 / Introduction</div>
        <h1 class="hero-name">Dhruvi Vadalia</h1>
        <div class="hero-subtitle">Full Stack Developer — Angular &amp; .NET Core</div>
        <p class="hero-statement">
          Building secure, scalable web applications with clean backend architectures and responsive frontend engineering.
        </p>

        <div class="hero-actions">
          <button class="btn-solid" id="hero-work-btn">View My Work</button>
          <button class="btn-ghost" id="hero-contact-btn">Contact Me</button>
          <a href="Vadalia_Dhruvi_Resume.pdf" download class="btn-ghost" id="hero-cv-btn" target="_blank" rel="noopener">Download CV</a>
        </div>
      </div>

      <div class="hero-footer-grid">
        <div class="hero-footer-item">
          <span class="hero-footer-label">Location</span>
          <span class="hero-footer-val">Ahmedabad, India</span>
        </div>
        <div class="hero-footer-item">
          <span class="hero-footer-label">Email</span>
          <a href="mailto:dvadalia10@gmail.com" class="hero-footer-val hero-footer-link">dvadalia10@gmail.com</a>
        </div>
        <div class="hero-footer-item">
          <span class="hero-footer-label">Profiles</span>
          <div class="hero-footer-links">
            <a href="https://github.com/dhruvivadalia" target="_blank" rel="noopener noreferrer">GitHub ↗</a>
            <a href="https://www.linkedin.com/in/dhruvivadalia1509/" target="_blank" rel="noopener noreferrer">LinkedIn ↗</a>
          </div>
        </div>
      </div>
    </div>
  `;

  container.querySelector('#hero-work-btn')?.addEventListener('click', () => {
    app.goToSection('projects');
  });

  container.querySelector('#hero-contact-btn')?.addEventListener('click', () => {
    app.goToSection('contact');
  });
}
