/**
 * Practice: Making classes and objects
 *
 * - Find a type of object you have more than one of in your house (eg. clothing, writing tools, etc).
 * - Create a class describing this object type - its properties and methods.
 * - Create several objects using the class.
 * - Test the objecs by calling their properties and using their methods in the console.
 */

class Jacket {
  constructor(name, color, numberOfPockets, zippedUp) {
    (this.name = name),
      (this.color = color),
      (this.numberOfPockets = numberOfPockets),
      (this.zippedUp = zippedUp);
  }
  toggleZip(zipStatus) {
    this.zippedUp = zipStatus;
  }
}

const allWearJacket = new Jacket("All Wear", "Forest Green", 6, true);
console.log(allWearJacket.name, allWearJacket);

const rainJacket = new Jacket("Rain Coat", "IT Yellow", 4, false);
rainJacket.toggleZip(true);
console.log(rainJacket.name, rainJacket);
