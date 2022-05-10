const calc = require("./calc.js");
const SearchTree = require("./binaryTree.js");

console.log("executando main");

console.log(calc["adicionar"](1, 2));
console.log(calc.subtrair(1, 2));
console.log(new SearchTree(5).insert(3));
