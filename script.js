// Dark Mode Toggle
const toggleBtn = document.createElement('button');
toggleBtn.className = 'toggle-dark';
toggleBtn.innerText = '🌙 Dark Mode';
document.body.appendChild(toggleBtn);

toggleBtn.addEventListener('click', () => {
  document.body.classList.toggle('dark-mode');
  toggleBtn.innerText = document.body.classList.contains('dark-mode') ? '☀️ Light Mode' : '🌙 Dark Mode';
});

// Scroll to Top Button
const topBtn = document.createElement('button');
topBtn.id = 'topBtn';
topBtn.innerText = '⬆️';
document.body.appendChild(topBtn);

window.addEventListener('scroll', () => {
  if (document.body.scrollTop > 100 || document.documentElement.scrollTop > 100) {
    topBtn.style.display = 'block';
  } else {
    topBtn.style.display = 'none';
  }
});

topBtn.onclick = () => {
  window.scrollTo({ top: 0, behavior: 'smooth' });
};
