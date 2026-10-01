export function renderProjectsSection(container) {
  const projects = [
    {
      title: 'Employee Management System',
      stack: 'Angular · .NET Core · SQL Server · Argon2id · JWT',
      desc: 'Layered architecture with Generic Repository and DTOs; dynamic connection strings for runtime DB switching; Argon2id password hashing; JWT access/refresh with Angular Interceptors and Guards (RBAC).',
      link: 'https://github.com/dhruvivadalia'
    },
    {
      title: 'Task Manager',
      stack: 'Angular · .NET Core · Dapper · JWT',
      desc: 'Dapper-optimized SQL + Reactive Forms; strict JWT signature/method validation; multi-column filtering, server-side pagination, real-time task status; Postman end-to-end API testing.',
      link: 'https://github.com/dhruvivadalia'
    },
    {
      title: 'ToonSharp',
      stack: '.NET Core · C# Serialization',
      desc: "Serializes identical data to TOON and JSON; compares payload size, encoding efficiency, and parsing performance; demonstrates TOON's smaller data footprint.",
      link: 'https://github.com/dhruvivadalia'
    },
    {
      title: 'Local Keyless Chatbot',
      stack: 'C# · Microsoft.Agents.AI · OllamaChatClient',
      desc: 'Offline, privacy-focused chatbot with dynamic tools (GetStockPrice, SearchWebAsync, CalculateMath); ChatClientAgent handles factual and casual queries via an interactive console.',
      link: 'https://github.com/dhruvivadalia'
    },
    {
      title: 'To-Do Microservice',
      stack: 'React.js · Node.js · Express · MongoDB',
      desc: 'React Hooks state management; Axios service-driven fetching; RESTful endpoints for task lifecycle.',
      link: 'https://github.com/dhruvivadalia'
    }
  ];

  container.innerHTML = `
    <div class="pane-inner">
      <div class="sec-meta">05 / Projects</div>
      <h2 class="sec-title">Selected Work</h2>

      <div class="projects-deck">
        ${projects.map(p => `
          <div class="project-box">
            <div>
              <div class="proj-head">
                <h3 class="proj-title">${p.title}</h3>
                <a href="${p.link}" target="_blank" rel="noopener noreferrer" style="font-size: 0.8rem; color: var(--text-dim);">GitHub ↗</a>
              </div>
              <div class="proj-stack" style="margin: 4px 0 10px 0;">${p.stack}</div>
              <p class="proj-desc">${p.desc}</p>
            </div>
          </div>
        `).join('')}
      </div>
    </div>
  `;
}
