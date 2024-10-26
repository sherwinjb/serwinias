const sections = document.querySelectorAll('section');

window.addEventListener('scroll', () => {
  sections.forEach(section => {
    const sectionTop = section.getBoundingClientRect().top;
    if (sectionTop < window.innerHeight - 100) {
      section.classList.add('visible');
    }
  });
});

document.getElementById('toggle-details').addEventListener('click', function() {
  const details = document.getElementById('details');
  if (details.style.display === 'none') {
    details.style.display = 'block';
    this.innerHTML = '<i class="fas fa-chevron-up"></i> Hide Details';
  } else {
    details.style.display = 'none';
    this.innerHTML = '<i class="fas fa-chevron-down"></i> Show Details';
  }
});