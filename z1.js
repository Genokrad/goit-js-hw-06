const categoriesParrent = document.querySelectorAll("#categories .item");
console.log("Number of categories:", categoriesParrent.length);

categoriesParrent.forEach((categry) => {
  console.log("");
  console.log("Category:", categry.querySelector("h2").textContent);
  console.log("Elements:", categry.querySelectorAll(".item li").length);
});
