const progressBar = document.getElementById('progressBar');
const menuButton = document.getElementById('menuButton');
const navLinks = document.getElementById('navLinks');
const copyEmail = document.getElementById('copyEmail');
const copyStatus = document.getElementById('copyStatus');

document.getElementById('year').textContent = new Date().getFullYear();

function updateProgress() {
  const scrollable = document.documentElement.scrollHeight - window.innerHeight;
  const percentage = scrollable > 0 ? (window.scrollY / scrollable) * 100 : 0;
  progressBar.style.width = `${percentage}%`;
}
window.addEventListener('scroll', updateProgress, { passive: true });
updateProgress();

menuButton.addEventListener('click', () => {
  const open = navLinks.classList.toggle('open');
  menuButton.setAttribute('aria-expanded', String(open));
});
navLinks.addEventListener('click', event => {
  if (event.target.matches('a')) {
    navLinks.classList.remove('open');
    menuButton.setAttribute('aria-expanded', 'false');
  }
});

copyEmail.addEventListener('click', async () => {
  try {
    await navigator.clipboard.writeText('maheshkon1255@gmail.com');
    copyStatus.textContent = 'Email copied';
    copyEmail.textContent = 'Copied';
  } catch {
    copyStatus.textContent = 'Copy maheshkon1255@gmail.com';
  }
  window.setTimeout(() => {
    copyStatus.textContent = '';
    copyEmail.textContent = 'Copy email';
  }, 2500);
});

const observer = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('visible');
      observer.unobserve(entry.target);
    }
  });
}, { threshold: 0.12 });

document.querySelectorAll('.reveal').forEach(element => observer.observe(element));
