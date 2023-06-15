//LOOP PRACTICE WITH CODECADEMY

let groceryList = ['orange juice', 'bananas', 'coffee beans', 'brown rice', 'pasta', 'coconut oil', 'plantains'];
//extra list for nested loop (made by me)
let freshProduce = ['bananas', 'plantains', 'orange juice']
//Standard for loop practice
for (i = 0; i < groceryList.length; i++) {
  console.log(groceryList[i])
};
//Nested for loop
for (i = 0; i < groceryList.length; i++) {
  console.log(groceryList[i])
  for (ii = 0; ii < freshProduce.length; ii++){
    if (freshProduce[ii] === groceryList[i]) {
      console.log('(Fresh fruit/Veg)');
      } 
  };
};
//While loop practice
i = 0
while (i < groceryList.length) {
  console.log(groceryList[i]);
  i++;
}
//Do...While loop practice
