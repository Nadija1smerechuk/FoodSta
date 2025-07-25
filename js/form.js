const form = document.getElementById('contactForm');
const messageDiv = document.getElementById('formMessage');

form.addEventListener('submit', async function (e) {
  e.preventDefault();

  const formData = new FormData(form);
  messageDiv.style.display = 'none'; // Ховаємо попереднє повідомлення

  try {
    const response = await fetch(form.action, {
      method: form.method,
      headers: {
        'Accept': 'application/json'
      },
      body: formData
    });

    if (response.ok) {
      form.reset();
      showMessage('Дякуємо! Повідомлення надіслано.', 'success');
    } else {
      showMessage('Виникла помилка. Спробуйте ще раз.', 'error');
    }
  } catch (error) {
    showMessage('Помилка при відправці форми.', 'error');
    console.error(error);
  }
});

// Функція показу повідомлення з автозникненням
function showMessage(text, type) {
  messageDiv.textContent = text;
  messageDiv.className = `form-message ${type}`;
  messageDiv.style.display = 'block';

  // Ховаємо повідомлення через 5 секунд
  setTimeout(() => {
    messageDiv.style.display = 'none';
  }, 3000);
}
