export function renderExperienceSection(container) {
  const experiences = [
    {
      role: 'Full Stack Developer',
      company: 'Everest Instruments Pvt. Ltd.',
      period: 'July 2025 – Present',
      bullets: [
        'End-to-end architecture with Angular and .NET Core (dynamic connection strings cut deployment time 40%).',
        'Security hardening via Argon2id and LocalStorage monitors (25% fewer unauthorized access attempts, 100% client-side data integrity).',
        'JWT + Entity Framework APIs (30% faster data retrieval, led a team of 4 through 10+ sprints).',
        'Rebuilt the Everest digital platform from legacy modules into Angular components on a scalable .NET Core service layer.'
      ]
    },
    {
      role: 'Front-End Developer Intern',
      company: 'Infolabz Pvt. Ltd.',
      period: 'Jan 2025 – April 2025',
      bullets: [
        'Designed and developed the Uniform Catalog Web App in React.js.',
        'Clean component-based UI focused on performance and reusability.',
        'Responsive layouts from research, wireframes, and user-flow logic.'
      ]
    }
  ];

  container.innerHTML = `
    <div class="pane-inner">
      <div class="sec-meta">04 / Experience</div>
      <h2 class="sec-title">Work History</h2>

      <div class="experience-list">
        ${experiences.map(exp => `
          <div class="exp-item">
            <div class="exp-header">
              <div>
                <span class="exp-role">${exp.role}</span>
                <span style="color: var(--text-dim);"> · </span>
                <span class="exp-company">${exp.company}</span>
              </div>
              <span class="exp-date">${exp.period}</span>
            </div>
            <ul class="exp-bullets">
              ${exp.bullets.map(b => `<li class="exp-bullet">${b}</li>`).join('')}
            </ul>
          </div>
        `).join('')}
      </div>
    </div>
  `;
}
