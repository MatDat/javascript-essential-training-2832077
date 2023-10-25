/**
 * Note: This file is intentionally empty.
 * You can use it to test your skills at traversing the DOM using JavaScript.
 */
// Vælg alle .backpack__name-elementer
const backpackNames = document.querySelectorAll(".backpack__name");
backpackNames[0].style.color = "green";
backpackNames[1].style.color = "red";

console.log(
  document
    .querySelectorAll(".backpack__features li:nth-child(odd)")
    .forEach((item) => (item.style.color = "blue"))
);

console.log(
  document
    .querySelectorAll(".backpack__features li:last-child")
    .forEach((item) => (item.style.backgroundColor = "yellow"))
);

console.log(
  document
    .querySelectorAll(".backpack__features li:first-child")
    .forEach((item) => (item.style.color = "pink"))
);

console.log(
  document.querySelectorAll(".lid-toggle").forEach((element) => {
    element.style.backgroundColor = "yellow";
  })
);

console.log(
  (document.querySelector(".lid-toggle").style.backgroundColor = "brown")
);
