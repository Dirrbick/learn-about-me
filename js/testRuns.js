'use strict'

var numericalGuess = prompt('How many 1st cousins do I have on one side of the family?');
console.log('You answered, ', numericalGuess);

// if (numericalGuess === '26') {
//   alert('Amazing! You got it! Good guess!');
// } else if( numericalGuess < '26') {
//   alert('Amazingly good guess...but...it is too low!');
// } else if(numericalGuess > '26') {
//   alert('Really good guess! It is too high!!');
// }

// I got the for statement to stop after running for times..

for (var i = 1; i < 5; i++) {
  if (numericalGuess === '26') {
    alert('You got it! Good Guess!');
  } else if (numericalGuess < '26') {
    alert('Too low!');
  } else if (numericalGuess > '26') {
    alert('Too high!');
  } 

  console.log('numericalGuess is: ', i);
}