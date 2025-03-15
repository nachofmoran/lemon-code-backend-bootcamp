const elements = [0, 1, false, 2, "", 3];

const compact = (arg) => {
  let result = 0;
  if (Array.isArray(arg)) {
    result = arg.filter((element) => !!element);
  } else if (typeof arg === "object" && arg !== null) {
    const obj = { ...arg };
    for (element in obj) {
      if (!obj[element]) delete obj[element];
    }
    result = obj;
  } else {
    result = arg;
  }

  return result;
};

console.log(compact(123)); // 123
console.log(compact(null)); // null
console.log(compact([0, 1, false, 2, "", 3])); // [1, 2, 3]
console.log(compact({})); // {}
console.log(
  compact({
    price: 0,
    name: "cloud",
    altitude: NaN,
    taste: undefined,
    isAlive: false,
  })
); // {name: "cloud"}
