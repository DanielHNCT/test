const arr = ["un", "deux", "trois"];
arr.forEach((item, index) => {
  console.log(item);
});
const divs = [];
for (const item of arr) {
  divs.push(`<div>${item}</div>`);
}
console.log(
  `<div class="list">
    ${arr
      .filter((item) => {
        return item !== "deux";
      })
      .map((item) => {
        return `<div>${item}</div>`;
      })
      .join("\n")}
  </div>`
);
for (let i = 0; i < arr.length; i++) {
  console.log(arr[i], i);
}
async function loadData(route) {
  const res = await fetch(`https://dummyjson.com/${route}`);
  if (res.status !== 200) {
    throw new Error("API ERROR: " + res.status);
  }
  const data = await res.json();
  return data;
}
async function loadAll() {
  const recipes = await loadData("recipes");
  const products = await loadData("products");
  console.log(recipes);
  console.log(products);
}
loadAll();
async function loadData(route) {
  const res = await fetch(`https://dummyjson.com/${route}`);
  if (res.status !== 200) {
    throw new Error("API ERROR: " + res.status);
  }
  const data = await res.json();
  return data;
}
async function loadAll() {
  const recipes = loadData("recipes");
  const products = loadData("products");
  const data = await Promise.all([recipes, products]);
  console.log(
    data[0].recipes
      .filter((recipe) => {
        return recipe.name.includes("Chicken");
      })
      .map((recipe) => {
        return recipe.name;
      })
  );
}
loadAll();