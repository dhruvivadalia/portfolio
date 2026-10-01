export function renderContactSection(container, app) {
  container.innerHTML = `
    <div class="pane-inner">
      <div class="sec-meta">07 / Contact</div>
      <h2 class="sec-title">Get In Touch</h2>

      <div class="contact-layout">
        <div class="contact-meta-list">
          <div class="contact-row">
            <span class="contact-row-label">Direct Email</span>
            <div style="display: flex; align-items: center; gap: 8px;">
              <a href="mailto:dvadalia10@gmail.com" class="contact-row-val">dvadalia10@gmail.com</a>
              <button id="copy-email-btn" style="font-size: 0.75rem; color: var(--accent); cursor: pointer;">Copy</button>
            </div>
          </div>

          <div class="contact-row">
            <span class="contact-row-label">Location</span>
            <span class="contact-row-val">Ahmedabad, Gujarat, India</span>
          </div>

          <div class="contact-row">
            <span class="contact-row-label">Profiles</span>
            <div style="display: flex; gap: 14px; font-size: 0.9rem; margin-top: 4px;">
              <a href="https://github.com/dhruvivadalia" target="_blank" rel="noopener noreferrer" style="color: var(--accent);">GitHub ↗</a>
              <a href="https://www.linkedin.com/in/dhruvivadalia1509/" target="_blank" rel="noopener noreferrer" style="color: var(--accent);">LinkedIn ↗</a>
            </div>
          </div>

          <div style="margin-top: 10px;">
            <a href="Vadalia_Dhruvi_Resume.pdf" download class="btn-ghost" style="display: inline-block; font-size: 0.82rem; padding: 8px 16px;" target="_blank" rel="noopener">Download Resume</a>
          </div>
        </div>

        <div>
          <form id="contact-form" class="contact-form-minimal">
            <input type="text" name="Name" class="min-input" placeholder="Your Name" required />
            <input type="email" name="Email" class="min-input" placeholder="Your Email" required />
            <textarea name="Message" class="min-textarea" placeholder="Your Message" required rows="4"></textarea>
            <button type="submit" class="btn-solid" id="contact-submit-btn" style="align-self: flex-start;">Send Message</button>
            <div id="contact-feedback" style="font-size: 0.85rem; color: var(--accent); display: none;"></div>
          </form>
        </div>
      </div>
    </div>
  `;

  // Copy Email button
  container.querySelector('#copy-email-btn')?.addEventListener('click', () => {
    navigator.clipboard.writeText('dvadalia10@gmail.com').then(() => {
      if (app && app.showToast) app.showToast('Email copied to clipboard');
    });
  });

  // Form submit
  const form = container.querySelector('#contact-form');
  const feedback = container.querySelector('#contact-feedback');
  const submitBtn = container.querySelector('#contact-submit-btn');

  form?.addEventListener('submit', (e) => {
    e.preventDefault();
    submitBtn.disabled = true;
    submitBtn.textContent = 'Sending...';

    const scriptURL = 'https://script.google.com/macros/s/AKfycbwpqZ5BLKWKTZQ0N9AtQAzjbSZ9ISOBPmlItSPTCxlIwDlxPI8EaHR_M7fWnF3MsOEU/exec';

    fetch(scriptURL, {
      method: 'POST',
      body: new FormData(form),
      mode: 'no-cors'
    }).then(() => {
      feedback.textContent = 'Thank you. Message sent successfully.';
      feedback.style.display = 'block';
      form.reset();
      if (app && app.showToast) app.showToast('Message sent');
    }).catch(() => {
      feedback.textContent = 'Message noted. You can also email dvadalia10@gmail.com directly.';
      feedback.style.display = 'block';
    }).finally(() => {
      submitBtn.disabled = false;
      submitBtn.textContent = 'Send Message';
    });
  });
}
