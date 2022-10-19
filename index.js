function guessNum(range) {
  range = 2;
  var stage = 1;
  var num = 0;
  var randInt;
  var point = 0;
  console.log("Welcome to number guessing game!")
  var name = prompt("Please Enter your name to start game");
  if (name.length === 0) {
    prompt("Please Enter your name to start game");
  }
  console.log(`You are now in stage ${stage}`)
  console.log(`Total Point: ${point}`)
  num = parseInt(prompt(`Guess a number between 1 and ${range}: `))
  while (num != -1) {
    randInt = Math.floor((Math.random() * range) + 1);
    if (isCorrect(randInt, num) === true) {
      console.log("Correct!");
      range++;
      stage++;
      point++;
      console.log(`You are now in stage ${stage}`)
      console.log(`Total Point: ${point}`)
      num = parseInt(prompt(`Guess a number between 1 and ${range}: `))
    }
    else if ((!isCorrect(randInt, num) || num == NULL) && num != -1) {
      console.log("Wrong, please try again! or press -1 to restart");
      num = parseInt(prompt(`Guess a number between 1 and ${range}`))
    }

  }
  if (num == -1) {
    console.clear();
    guessNum();
  }
}

function isCorrect(randInt, num) {
  if (randInt === num)
    return true;
  return false;
}
guessNum();