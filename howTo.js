//Counting backwards with FOR LOOPS
for (let counter = 3; counter >= 0; counter--){
  console.log(counter);
}

// NESTED LOOPS
let bobsFollowers = ['A', 'B', 'C', 'D'];
let tinasFollowers = ['E', 'C', 'A'];
let mutualFollowers = [];
for (let i = 0; i < bobsFollowers.length; i++) { 
  for (let ii = 0; ii < tinasFollowers.length; ii++) {
    if (bobsFollowers[i] === tinasFollowers[ii]) {
    mutualFollowers.push(tinasFollowers[ii])
    console.log(mutualFollowers)
    }
  }
}
