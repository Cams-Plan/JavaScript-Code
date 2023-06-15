//CALL BACK FUNCTION EXAMPLE #1
const higherOrderFunc = param => {
  param();
  return `I just invoked ${param.name} as a callback function!`
}
 
const anotherFunc = () => {
  return 'I\'m being invoked by the higher-order function!';
}
 
higherOrderFunc(anotherFunc);


//CALL BACK FUNCTION EXAMPLE #2
//Create inital function expression
const addTwo = num => {
  return num + 2;
}
//Create Higher Order function expression that checks the reliability of the addTwo function
const checkConsistentOutput = (func, val) => {
  //Produce an equation that replicates the 'addTwo' function
  let checkA = val + 2;
  //Call the addTwo function
  let checkB = func(val);
  //Validate the validity of AddTwo function by comparing the two checks and include an error message
  if (checkA === checkB) {
    return func(val);
  } else {
    return console.log('inconsistent results');
  };
};

console.log(checkConsistentOutput(addTwo, 7));
