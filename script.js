// Header background on scroll
window.addEventListener('scroll', function() {
  const header = document.getElementById('header');
  if(window.scrollY > 40) header.classList.add('solid');
  else header.classList.remove('solid');
});

// Hamburger menu
const hamburger = document.getElementById('hamburger');
const nav = document.getElementById('nav');
if(hamburger && nav) {
  hamburger.addEventListener('click', function() {
    nav.classList.toggle('active');
  });
  // Close menu on link click (mobile)
  nav.querySelectorAll('a').forEach(link => {
    link.addEventListener('click', () => nav.classList.remove('active'));
  });
}

// Smooth scroll for anchor links (for older browsers)
document.querySelectorAll('a[href^="#"]').forEach(link => {
  link.addEventListener('click', function(e) {
    const target = document.querySelector(this.getAttribute('href'));
    if(target) {
      e.preventDefault();
      target.scrollIntoView({ behavior: 'smooth' });
    }
  });
});

// Animate fade-in on hero
window.addEventListener('DOMContentLoaded', () => {
  document.querySelectorAll('.fade-in').forEach(el => {
    el.style.opacity = 1;
    el.style.transform = 'none';
  });
});
