/**
 * Practice: Making methods
 *
 * - Create a method for each object property.
 * - The method receives a value to match the property to be changed.
 * - Create a simple function to replace the current property value with the received value.
 * - Test the method by sending new values and checking the properties in the console.
 */

const backpack = {
  name: "Everyday Backpack",
  volume: 30,
  color: "grey",
  pocketNum: 15,
  strapLength: {
    left: 26,
    right: 26,
  },
  toggleLid: function (lidStatus) {
    this.lidOpen = lidStatus;
  },
  newStrapLength: function (lengthLeft, lengthRight) {
    this.strapLength.left = lengthLeft;
    this.strapLength.right = lengthRight;
  },
  setNewName: function (name) {
    this.name = name;
  },
  setNewColor: function (color) {
    this.color = color;
  },
};

console.log("Before:", backpack.name);
backpack.setNewName("Allround Backpack");
console.log("After", backpack.name);

console.log("Before:", backpack.color);
backpack.setNewColor("Yellow");
console.log("After:", backpack.color);

console.log("Before:", backpack.strapLength);
backpack.newStrapLength(10, 10);
console.log("After:", backpack.strapLength);
