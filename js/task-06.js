const inputEl = document.querySelector("#validation-input");

inputEl.addEventListener("blur", (event) => {
  const accept = inputEl.getAttribute("data-length");
  const eventNumber = event.currentTarget.value.length;
  if (eventNumber > accept) {
    inputEl.classList.add("valid");
    inputEl.classList.remove("invalid");
  } else inputEl.classList.add("invalid");
});
