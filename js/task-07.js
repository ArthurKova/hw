const barEl = document.getElementById("font-size-control");
const spanEl = document.getElementById("text");
console.log(spanEl);

barEl.addEventListener("input", (event) => {
  // console.log(event.currentTarget.value);
  spanEl.style.fontSize = `${event.currentTarget.value}px`;
  console.log(spanEl);
});
