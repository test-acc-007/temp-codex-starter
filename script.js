const revealElements = document.querySelectorAll('.reveal, .reveal-left');

const observer = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add('visible');
        observer.unobserve(entry.target);
      }
    });
  },
  { threshold: 0.16 }
);

revealElements.forEach((element) => observer.observe(element));

const heroBg = document.querySelector('.hero-bg');
const motionAllowed = !window.matchMedia('(prefers-reduced-motion: reduce)').matches;

if (heroBg && motionAllowed) {
  window.addEventListener('scroll', () => {
    const y = window.scrollY * 0.12;
    heroBg.style.transform = `scale(1.08) translateY(${y}px)`;
  });
}

const form = document.querySelector('#booking-form');
const formMessage = document.querySelector('#form-message');

if (form && formMessage) {
  form.addEventListener('submit', (event) => {
    event.preventDefault();

    if (!form.checkValidity()) {
      formMessage.textContent = 'Please complete all required fields before submitting.';
      formMessage.style.color = '#b42318';
      form.reportValidity();
      return;
    }

    const submitButton = form.querySelector('button[type="submit"]');
    submitButton.disabled = true;
    submitButton.textContent = 'Sending...';

    setTimeout(() => {
      formMessage.textContent = 'Thanks! You’ll hear back within 24 hours.';
      formMessage.style.color = '#19663f';
      form.reset();
      submitButton.disabled = false;
      submitButton.textContent = 'Request Appointment';
    }, 900);
  });
}

const yearNode = document.querySelector('#year');
if (yearNode) {
  yearNode.textContent = String(new Date().getFullYear());
}
