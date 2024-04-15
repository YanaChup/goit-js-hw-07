const categoriesListRef = document.querySelector("#categories");
const categoriesItemsRef = categoriesListRef.querySelectorAll(".item");

console.log(`Numbers of categories: ${categoriesItemsRef.length}`);

categoriesItemsRef.forEach((category) => {
  const categoryTitle = category.querySelector("h2").textContent;
  const categoryItems = category.querySelectorAll("li");

  console.log(`Category: ${categoryTitle}`);
  console.log(`Elements: ${categoryItems.length}`);
});
