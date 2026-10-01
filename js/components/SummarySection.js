export function renderSummarySection(container) {
  container.innerHTML = `
    <div class="pane-inner">
      <div class="sec-meta">02 / Summary</div>
      <h2 class="sec-title">About My Work</h2>
      
      <p class="summary-text">
        Full Stack Developer skilled in developing scalable web applications using <strong>Angular</strong> and <strong>.NET Core</strong>. Proficient in building secure REST APIs, implementing JWT authentication (access/refresh tokens), and using the Generic Repository Pattern for clean backend architecture.
      </p>

      <p class="summary-subtext">
        Strong understanding of frontend frameworks, responsive UI design, and database interaction. Committed to writing clean, maintainable, and testable code that delivers business value. Developed a keyless chatbot using <strong>Microsoft.Agents.AI</strong> and <strong>OllamaChatClient</strong> for offline, privacy-focused interactions with dynamic tool integrations.
      </p>

      <div class="summary-highlights">
        <div class="summary-point">
          <span class="point-title">Architecture</span>
          <span class="point-desc">Generic Repository Pattern, DTOs &amp; Dependency Injection.</span>
        </div>
        <div class="summary-point">
          <span class="point-title">Security</span>
          <span class="point-desc">Argon2id hashing, JWT access/refresh token rotation &amp; route guards.</span>
        </div>
        <div class="summary-point">
          <span class="point-title">Data &amp; APIs</span>
          <span class="point-desc">Dynamic connection strings, EF Core &amp; Dapper micro-ORM.</span>
        </div>
      </div>
    </div>
  `;
}
