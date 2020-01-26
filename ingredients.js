const ingredients = ["eggs", "milk", "flour", "sugar", "baking soda", "baking powder", "chocolate chips", "bananas"];

// Write a while loop that prints out the contents of ingredients:

console.log("ingredients' list: //the while loop")

let i = 0;
while (i < ingredients.length) {
  console.log((i+1) +":"+ ingredients[i]);
  i++;
}

// Write a for loop that prints out the contents of ingredients:

console.log("ingredients' list: //the for loop")


for (let j = 0; j < ingredients.length; j++){
  console.log((j+1) +":"+ ingredients[j]);
}
// Write any loop (while or for) that prints out the contents of ingredients backwards:

console.log("ingredients' list: //the reverse")

for (let k = ingredients.length -1 ; k >= 0; k--){
  console.log((k+1) +":"+ ingredients[k]);
}