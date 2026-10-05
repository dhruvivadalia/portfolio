export function renderProjectsSection(container) {
  const allProjects = [
    {
      title: 'Employee Management System',
      category: 'software',
      categoryLabel: 'Full-Stack System',
      stack: 'Angular · .NET Core · SQL Server · Argon2id · JWT',
      desc: 'Layered architecture with Generic Repository and DTOs; dynamic connection strings for runtime DB switching; Argon2id password hashing; JWT access/refresh with Angular Interceptors and Guards (RBAC).',
      link: 'https://github.com/dhruvivadalia',
      isLive: false
    },
    {
      title: 'Task Manager',
      category: 'software',
      categoryLabel: 'Full-Stack System',
      stack: 'Angular · .NET Core · Dapper · JWT',
      desc: 'Dapper-optimized SQL + Reactive Forms; strict JWT signature/method validation; multi-column filtering, server-side pagination, real-time task status; Postman end-to-end API testing.',
      link: 'https://github.com/dhruvivadalia',
      isLive: false
    },
    {
      title: 'ToonSharp',
      category: 'software',
      categoryLabel: 'Core Library / Tool',
      stack: '.NET Core · C# Serialization',
      desc: "Serializes identical data to TOON and JSON; compares payload size, encoding efficiency, and parsing performance; demonstrates TOON's smaller data footprint.",
      link: 'https://github.com/dhruvivadalia',
      isLive: false
    },
    {
      title: 'Local Keyless Chatbot',
      category: 'software',
      categoryLabel: 'AI Application',
      stack: 'C# · Microsoft.Agents.AI · OllamaChatClient',
      desc: 'Offline, privacy-focused chatbot with dynamic tools (GetStockPrice, SearchWebAsync, CalculateMath); ChatClientAgent handles factual and casual queries via an interactive console.',
      link: 'https://github.com/dhruvivadalia',
      isLive: false
    },
    {
      title: 'To-Do Microservice',
      category: 'software',
      categoryLabel: 'Microservice',
      stack: 'React.js · Node.js · Express · MongoDB',
      desc: 'React Hooks state management; Axios service-driven fetching; RESTful endpoints for task lifecycle.',
      link: 'https://github.com/dhruvivadalia',
      isLive: false
    },
    {
      title: 'The Peak Vibes',
      category: 'website',
      categoryLabel: 'Live Website',
      stack: 'Web Development · Responsive Design · SEO',
      desc: 'Official live website and digital brand platform engineered with responsive modern UI and optimized web performance.',
      link: 'https://thepeakvibes.com/',
      isLive: true
    },
    {
      title: 'Total Wellness Physio',
      category: 'website',
      categoryLabel: 'Live Website',
      stack: 'Web Development · Healthcare · Responsive UI',
      desc: 'Production website for physiotherapy and wellness clinic featuring service breakdowns, patient inquiry channels, and clinic information.',
      link: 'https://totalwellnessphysio.com/',
      isLive: true
    },
    {
      title: 'Altho Brain Services',
      category: 'website',
      categoryLabel: 'Live Website',
      stack: 'Web Development · Career Consulting · UI/UX',
      desc: 'Production website for career consulting, mentorship, and professional advisory services, designed for intuitive client navigation and service discovery.',
      link: 'https://althobrainservices.com/',
      isLive: true
    }
  ];

  let currentFilter = 'software';

  function render() {
    const filteredProjects = currentFilter === 'all'
      ? allProjects
      : allProjects.filter(p => p.category === currentFilter);

    container.innerHTML = `
      <div class="pane-inner">
        <div class="sec-meta">05 / Projects &amp; Works</div>
        <h2 class="sec-title">Selected Work</h2>

        <div class="proj-filter-bar">
          <button class="proj-filter-btn ${currentFilter === 'software' ? 'active' : ''}" data-filter="software">Software &amp; Architecture (5)</button>
          <button class="proj-filter-btn ${currentFilter === 'website' ? 'active' : ''}" data-filter="website">Live Websites (3)</button>
          <button class="proj-filter-btn ${currentFilter === 'all' ? 'active' : ''}" data-filter="all">All (${allProjects.length})</button>
        </div>

        <div class="projects-deck">
          ${filteredProjects.map(p => `
            <div class="project-box">
              <div>
                <div class="proj-head">
                  <h3 class="proj-title">${p.title}</h3>
                  <a href="${p.link}" target="_blank" rel="noopener noreferrer" class="proj-link ${p.isLive ? 'proj-link-live' : ''}">
                    ${p.isLive ? 'Visit Site ↗' : 'GitHub ↗'}
                  </a>
                </div>
                <div class="proj-stack" style="margin: 6px 0 10px 0;">${p.stack}</div>
                <p class="proj-desc">${p.desc}</p>
              </div>
            </div>
          `).join('')}
        </div>
      </div>
    `;

    // Filter clicks
    container.querySelectorAll('.proj-filter-btn').forEach(btn => {
      btn.addEventListener('click', () => {
        currentFilter = btn.dataset.filter;
        render();
      });
    });
  }

  render();
}


