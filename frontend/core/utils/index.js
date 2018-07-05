export function findItem(array, item) {
  return array.findIndex(element => element.name === item.name);
}
export function del(items, index) {
  return items.filter((item, id) => id !== index);
}
