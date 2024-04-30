const sections = document.querySelectorAll('section');

window.addEventListener('scroll', () => {
  for (const section of sections) {
    const sectionY = section.getBoundingClientRect().top;
    const screenHeight = window.innerHeight;

    if (sectionY < screenHeight * 0.8) {
      section.classList.add('show');
    }
  }
});