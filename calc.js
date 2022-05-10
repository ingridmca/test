function add(a, b) {
  return a + b;
}

function sub(a, b) {
  return a - b;
}

console.log("executando calc.js");

module.exports = {
  adicionar: add,
  subtrair: sub,
};
