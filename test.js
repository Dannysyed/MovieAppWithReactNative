//Write a function called invertObject that takes an object and returns a new object with the keys and values inverted. For example, given {a: 1, b: 2, c: 3}, the function should return {1: 'a', 2: 'b', 3: 'c'}.

let obj = { 1: "a", 2: "b", 3: "c" };

let invertObject = (obj) => {
  let entries = Object.entries(obj);

  let invertedEntries = entries.map(([key, value]) => [value, key]);
  return Object.fromEntries(invertedEntries);
};
