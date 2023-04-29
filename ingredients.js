const ingredients = ["eggs", "milk", "flour", "sugar", "baking soda", "baking powder", "chocolate chips", "bananas"];

// Write a while loop that prints out the contents of ingredients:
let i = 0;
while(i < ingredients.length) {
  console.log(ingredients[i]);
    i++;
}

// Write a for loop that prints out the contents of ingredients:
for(let i2 = 0; i2 < ingredients.length; i2++) {
  console.log(ingredients[i2]);
}

// Write any loop (while or for) that prints out the contents of ingredients backwards:
for(let i3 = ingredients.length - 1; i3 >= 0; i3--) {
  console.log( ingredients[i3]);
}