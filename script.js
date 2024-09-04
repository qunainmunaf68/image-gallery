// Get elements
const lightbox = document.getElementById('lightbox');
const lightboxImage = document.getElementById('lightbox-image');
const captionText = document.getElementById('caption');
const images = document.querySelectorAll('.image img');
let currentIndex;

// Open the lightbox
images.forEach((img, index) => {
    img.addEventListener('click', () => {
        lightbox.style.display = 'block';
        lightboxImage.src = img.src;
        captionText.textContent = img.alt;
        currentIndex = index;
    });
});

// Close the lightbox
document.querySelector('.close').addEventListener('click', () => {
    lightbox.style.display = 'none';
});

// Navigate to the next/prev image
document.querySelector('.next').addEventListener('click', () => {
    currentIndex = (currentIndex + 1) % images.length;
    updateLightbox();
});

document.querySelector('.prev').addEventListener('click', () => {
    currentIndex = (currentIndex - 1 + images.length) % images.length;
    updateLightbox();
});

function updateLightbox() {
    lightboxImage.src = images[currentIndex].src;
    captionText.textContent = images[currentIndex].alt;
}
