const menuToggle = document.getElementById('menuToggle');
const navLinks = document.getElementById('navLinks');

menuToggle.addEventListener('click', () => {
  const isOpen = navLinks.classList.toggle('open');
  menuToggle.setAttribute('aria-expanded', String(isOpen));
  menuToggle.textContent = isOpen ? '×' : '☰';
});

navLinks.querySelectorAll('a').forEach((link) => {
  link.addEventListener('click', () => {
    navLinks.classList.remove('open');
    menuToggle.setAttribute('aria-expanded', 'false');
    menuToggle.textContent = '☰';
  });
});

document.getElementById('year').textContent = new Date().getFullYear();

// If the demo video is missing, keep the helpful placeholder visible.
// If a valid video file is present, hide the placeholder.
const projectVideo = document.getElementById('projectVideo');
const videoPlaceholder = document.getElementById('videoPlaceholder');

projectVideo.addEventListener('loadedmetadata', () => {
  videoPlaceholder.style.display = 'none';
});
projectVideo.addEventListener('error', () => {
  videoPlaceholder.style.display = 'flex';
});

// This front-end form opens the visitor's email application.
// Replace this address with the official project email.
const contactForm = document.getElementById('contactForm');
const formStatus = document.getElementById('formStatus');
const projectEmail = 'your-email@example.com';

contactForm.addEventListener('submit', (event) => {
  event.preventDefault();

  const name = document.getElementById('name').value.trim();
  const email = document.getElementById('email').value.trim();
  const subject = document.getElementById('subject').value.trim();
  const message = document.getElementById('message').value.trim();

  if (!name || !email || !subject || !message) {
    formStatus.textContent = 'Please complete all fields before preparing your message.';
    return;
  }

  const body = `Name: ${name}\nReply email: ${email}\n\n${message}`;
  const mailto = `mailto:${projectEmail}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
  formStatus.textContent = 'Opening your email app. If nothing happens, check that an email app is configured.';
  window.location.href = mailto;
});
