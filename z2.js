const ingredients = [
  "Potatoes",
  "Mushrooms",
  "Garlic",
  "Tomatos",
  "Herbs",
  "Condiments",
];

const item = document.createElement("li");

const liWithData = (ingredients) => {
  const list = document.querySelector("ul");
  // const item = document.createElement("li");
  const allItems = ingredients.map((ingredient) => {
    console.log(ingredient);
    const item = document.createElement("li");
    item.textContent = ingredient;
    return item;
  });

  // for (const iingredient of ingredients) {
  //   console.log(iingredient);
  //   const item = document.createElement("li");
  //   item.textContent = iingredient;
  //   allItems.push(item);
  // }
  console.log(allItems);
  list.append(...allItems);
};

liWithData(ingredients);
// console.log(ingredients);

// const brands = ["mike", "Pooma", "bershka", "lui", "zara", "D&G"];

// const itemWithBrands = (brands) => {
//   const listWithData = document.querySelector("ul");
//   const allBrand = brands.map((brand) => {
//     const item = document.createElement("li");
//     item.textContent = brand;
//     return item;
//   });
//   listWithData.append(...allBrand);
// };

// itemWithBrands(brands);
