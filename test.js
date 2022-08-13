const data = require("./data");

function filterItems(arr, query) {
  return arr.filter((el) =>
    el.region.toLowerCase().includes(query.toLowerCase())
  );
}

console.log(filterItems(data, "europe").length);
