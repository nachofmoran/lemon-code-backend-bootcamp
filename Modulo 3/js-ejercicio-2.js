const elements = ["lorem", "ipsum", "dolor", "sit", "amet"];
const index = 2;
const newValue = "furor";

const replaceAt = (arr, index, newElement) => {
  return [...arr.slice(0, index), newElement, ...arr.slice(index + 1)];
};

const result = replaceAt(elements, index, newValue);

console.log(result === elements); // false
console.log(result); // ['lorem', 'ipsum', 'furor', 'sit', 'amet'];
console.log(elements);
