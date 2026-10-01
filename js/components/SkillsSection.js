export function renderSkillsSection(container) {
  const groups = [
    {
      title: 'Frontend',
      items: ['Angular', 'React.js', 'TypeScript', 'Client-side Security Monitoring', 'HTML5', 'CSS3']
    },
    {
      title: 'Backend',
      items: ['.NET Core', 'Node.js', 'C#', 'ASP.NET Web API', 'Argon2id Hashing', 'Dynamic DB Configuration']
    },
    {
      title: 'Database & ORM',
      items: ['SQL Server (SSMS)', 'MySQL', 'Entity Framework Core', 'Dapper']
    },
    {
      title: 'Architecture & Patterns',
      items: ['Repository Pattern', 'DTOs', 'Dependency Injection']
    },
    {
      title: 'Security & Integrity',
      items: ['JWT Authentication', 'Local Storage Integrity', 'Guards', 'Interceptors']
    },
    {
      title: 'Tools',
      items: ['Visual Studio', 'VS Code', 'Postman', 'Git', 'GitHub', 'Swagger']
    }
  ];

  container.innerHTML = `
    <div class="pane-inner">
      <div class="sec-meta">03 / Skills</div>
      <h2 class="sec-title">Technical Expertise</h2>

      <div class="skills-list-grid">
        ${groups.map(g => `
          <div class="skill-group">
            <div class="group-title">${g.title}</div>
            <div class="group-items">
              ${g.items.map(item => `<span class="skill-tag">${item}</span>`).join('')}
            </div>
          </div>
        `).join('')}
      </div>
    </div>
  `;
}
