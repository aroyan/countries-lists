export function filterByName(arr, query) {
  return arr.filter((el) =>
    el?.name.common.toLowerCase().includes(query.toLowerCase())
  );
}
