const images = document.querySelectorAll('#certificate-slider img');
  const prevBtn = document.getElementById('prev-btn');
  const nextBtn = document.getElementById('next-btn');
  let current = 0;

  function showImage(index) {
    images.forEach((img, i) => {
      img.classList.toggle('active', i === index);
    });
  }

  prevBtn.addEventListener('click', () => {
    current = (current - 1 + images.length) % images.length;
    showImage(current);
  });

  nextBtn.addEventListener('click', () => {
    current = (current + 1) % images.length;
    showImage(current);
  });

  // Показати перше зображення при завантаженні
showImage(current);
  

const certificateImages = document.querySelectorAll('.certificate-image');
const overlay = document.getElementById('overlay');
const enlargedImage = document.getElementById('enlarged-image');
const closeButton = document.querySelector('.close-button');

certificateImages.forEach(image => {
    image.addEventListener('click', () => {
        enlargedImage.src = image.src;
        overlay.style.display = 'flex'; // Показуємо оверлей
    });
});

closeButton.addEventListener('click', () => {
    overlay.style.display = 'none'; // Ховаємо оверлей
});

overlay.addEventListener('click', (event) => {
    if (event.target === overlay) { // Закриваємо оверлей, якщо клікнули поза зображенням
      overlay.style.display = 'none';
    }
});

