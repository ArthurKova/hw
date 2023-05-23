const ingredients = [
  "Potatoes",
  "Mushrooms",
  "Garlic",
  "Tomatos",
  "Herbs",
  "Condiments",
];
const mainList = document.querySelector("#ingredients");

ingredients.map((igredient) => {
  console.log(igredient);
  const listEl = document.createElement("li");
  listEl.textContent = igredient;
  listEl.classList = "item";

  mainList.append(listEl);
});
