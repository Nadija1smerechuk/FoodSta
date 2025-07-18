document.addEventListener("DOMContentLoaded", function () {
    const buttons = document.querySelectorAll(".more-btn");

    buttons.forEach(function (btn) {
      btn.addEventListener("click", function () {
        const moreText = this.previousElementSibling.querySelector(".more-text");
        moreText.classList.toggle("show");
        this.textContent = moreText.classList.contains("show") ? "Сховати" : "Дізнатись більше";
      });
    });
  });