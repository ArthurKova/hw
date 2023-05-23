const colorBtn = document.querySelector(".change-color");
const spanEl = document.querySelector(".color");
const bodyEl = document.body;

// console.log(bodyEl);

colorBtn.addEventListener("click", () => {
  bodyEl.style.backgroundColor = `${getRandomHexColor()}`;
  spanEl.textContent = `${bodyEl.style.backgroundColor}`;

  function getRandomHexColor() {
    return `#${Math.floor(Math.random() * 16777215)
      .toString(16)
      .padStart(6, 0)}`;
  }
});
