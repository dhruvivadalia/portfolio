export function renderEducationSection(container) {
  container.innerHTML = `
    <div class="pane-inner">
      <div class="sec-meta">06 / Education</div>
      <h2 class="sec-title">Academic Background</h2>

      <div class="edu-box">
        <h3 class="edu-degree">Bachelor of Engineering in Information &amp; Communication Technology</h3>
        <div class="edu-school">Gujarat Technological University (GTU)</div>
        <div class="edu-meta">2021 – 2025</div>
        <p style="color: var(--text-muted); font-size: 0.95rem; line-height: 1.6;">
          Core coursework and practical engineering training covering Data Structures, Algorithms, Relational Databases, System Architecture, Object-Oriented Software Design, and Distributed Systems.
        </p>
      </div>
    </div>
  `;
}
