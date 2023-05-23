const categoriesEl = document.querySelector("#categories");
// console.log(categoriesEl);
// const categoriesElChild = categoriesEl.children;
// console.log(categoriesElChild);
// const categoriesElChildLength = categoriesEl.children.length;
// console.log(categoriesElChildLength);

console.log(`Number of categories: ${categoriesEl.children.length}`);

// titleEl.forEach((name, value) => {
//   console.log(`Categories: ${name.textContent}`);
// });

const titleEl = document.querySelectorAll(".item");
titleEl.forEach((name) => {
  console.log(`Categories: ${name.firstElementChild.textContent}`);
  console.log(`Elements: ${name.lastElementChild.children.length}`);
});
