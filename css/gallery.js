// Get references to DOM elements
const gallery = document.querySelector('.gallery');
const images = gallery.querySelectorAll('img');
const prevButton = document.querySelector('.prev-button');
const nextButton = document.querySelector('.next-button');

// Set up initial state
let currentImageIndex = 0;
images[currentImageIndex].classList.add('active');

// Add event listeners to buttons
prevButton.addEventListener('click', () => {
  images[currentImageIndex].classList.remove('active');
  currentImageIndex = (currentImageIndex - 1 + images.length) % images.length;
  images[currentImageIndex].classList.add('active');
});

nextButton.addEventListener('click', () => {
  images[currentImageIndex].classList.remove('active');
  currentImageIndex = (currentImageIndex + 1) % images.length;
  images[currentImageIndex].classList.add('active');
});
