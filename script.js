// Hamburger Menu Toggle
const hamburger = document.querySelector('.hamburger');
const navLinks = document.querySelector('.nav-links');

hamburger.addEventListener('click', () => {
  navLinks.classList.toggle('open');
});

// Modal Functionality
const registerBtn = document.getElementById('register-btn');
const modal = document.getElementById('thankYouModal');
const closeButton = document.querySelector('.close-button');

// When the user clicks the Register button
registerBtn.addEventListener('click', () => {
  modal.style.display = 'block';
  // Open the Google Form in a new tab
  window.open('https://forms.gle/your-google-form-link', '_blank');
});

// When the user clicks on <span> (x), close the modal
closeButton.addEventListener('click', () => {
  modal.style.display = 'none';
});

// When the user clicks anywhere outside of the modal, close it
window.addEventListener('click', (event) => {
  if (event.target == modal) {
    modal.style.display = 'none';
  }
});
