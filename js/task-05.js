const inputValue = document.querySelector("#name-input");
const spanValue = document.querySelector("#name-output");

inputValue.addEventListener("input", (event) => {
  if (inputValue.value === "") {
    spanValue.textContent = "Anonymous";
  } else spanValue.textContent = event.currentTarget.value;
});
