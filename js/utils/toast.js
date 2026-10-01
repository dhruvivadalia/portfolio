// Lightweight toast notification utility
export function showToast(message, type = 'info', duration = 3500) {
  let container = document.getElementById('toast-container');
  if (!container) {
    container = document.createElement('div');
    container.id = 'toast-container';
    container.className = 'toast-container';
    document.body.appendChild(container);
  }

  const toast = document.createElement('div');
  toast.className = `toast toast-${type}`;
  
  const iconMarkup = type === 'success' 
    ? `<span class="toast-icon">✓</span>` 
    : type === 'error' 
      ? `<span class="toast-icon">✕</span>` 
      : `<span class="toast-icon">ℹ</span>`;

  toast.innerHTML = `
    ${iconMarkup}
    <div class="toast-content">${message}</div>
    <button class="toast-close" aria-label="Close notification">&times;</button>
  `;

  container.appendChild(toast);

  // Trigger entrance animation
  requestAnimationFrame(() => {
    toast.classList.add('show');
  });

  const removeToast = () => {
    toast.classList.remove('show');
    toast.classList.add('hide');
    toast.addEventListener('transitionend', () => {
      if (toast.parentElement) toast.remove();
    }, { once: true });
  };

  const timer = setTimeout(removeToast, duration);

  const closeBtn = toast.querySelector('.toast-close');
  if (closeBtn) {
    closeBtn.addEventListener('click', () => {
      clearTimeout(timer);
      removeToast();
    });
  }
}
