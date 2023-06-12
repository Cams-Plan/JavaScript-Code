//Create a username for the game
let userName = 'Camille'.toUpperCase();
//Use a ternery expression to decide the greeting message based on presented userName.
userName ? console.log(`Hello, ${userName}!`) : console.log('Hello!');
//Create a question the user will ask the Magic Eight Ball.
let userQuestion = 'When will I be a millionaire?'
//print different question expressions based on presented userName.
userName ? console.log(`${userName} asked, \"${userQuestion}\"`) : console.log(`Someone asked, ${userQuestion}`);
// Create a variable that selects a random number from 0-7
let randomNumber = (Math.floor(Math.random() * 8));
//Create Eight Ball variable
let eightBall = '';
//Assign the randomNumber to the eightBall variable
eightBall = randomNumber
//print the Magic Eight Ball's answers based on the random number selected.
switch(eightBall) {
  case 8 : console.log('The Magic Eight Ball says: \"It is certain\"');
  break;
  case 7 : console.log('The Magic Eight Ball says: \"It is decidedly so\"');
  break;
  case 6 : console.log('The Magic Eight Ball says: \"Reply hazy, try again\"');
  break;
  case 5 : console.log('The Magic Eight Ball says: \"Cannot predict now\"');
  break;
  case 4 : console.log('The Magic Eight Ball says: \"Do not count on it\"');
  break;
  case 3 : console.log('The Magic Eight Ball says: \"My sources say no\"');
  break;
  case 2 : console.log('The Magic Eight Ball says: \"Outlook not so good\"');
  break;
  case 1 : console.log('The Magic Eight Ball \"Signs point to yes\"');
  break;
  default : console.log('The Magic Eight Ball says: \"You\'re out of luck\"');
  break;
  }
