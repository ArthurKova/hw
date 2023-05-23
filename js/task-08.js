const formEl = document.querySelector(".login-form");
const inputEl = formEl.querySelectorAll("input");
console.log(inputEl);

formEl.addEventListener("submit", (event) => {
  event.preventDefault();
  const mailEl = inputEl[0];
  const passEl = inputEl[1];
  console.log(mailEl.value);
  console.log(passEl.value);

  if (mailEl.value === "" || passEl.value === "") {
    alert("введите почту и пароль");
  }

  const formData = new FormData(event.currentTarget);
});
