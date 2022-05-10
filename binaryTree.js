class BinarySearchTree {
  constructor(number) {
    this.data = number;
    this.left = null;
    this.right = null;
  }

  insert(newNumber) {
    if (newNumber <= this.data) {
      this.left = new BinarySearchTree(newNumber);
    } else {
      this.right = new BinarySearchTree(newNumber);
    }
    console.log(this.left, this.right, this.data);
  }

  each() {
    throw new Error("Remove this statement and implement this function");
  }
}
module.exports = BinarySearchTree;
