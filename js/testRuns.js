'use strict'

// if (numericalGuess === '26') {
//   alert('Amazing! You got it! Good guess!');
// } else if( numericalGuess < '26') {
//   alert('Amazingly good guess...but...it is too low!');
// } else if(numericalGuess > '26') {
//   alert('Really good guess! It is too high!!');
// }

// I got the for statement to stop after running for times..


// for (var i = 1; i < 5; i++) {
//   var numericalGuess = prompt('How many 1st cousins do I have on one side of the family?');
//   if (numericalGuess === '26') {
//     alert('You got it! Good Guess!'); console.log('You answered Correct!: 26 cousins'); break;
//   } else if (numericalGuess < '26') {
//     alert('Too low!');
//   } else if (numericalGuess > '26') {
//     alert('Too high!');
//   }
//   console.log('you answered: ', numericalGuess);
// }

// still working on getting the array to work with a loop

for ( var i = 0; i < 6; i++) {
  var statesLived = ['wisconsin', 'minnesota', 'texas', 'california', 'montana'];
  var whichState = prompt('Which state did I live in before I moved to Washington?');
  if (whichState === statesLived) {
    alert('That\'s correct!'); break;
  } else {
    alert('Incorrect, try again.');
  }
}

console.log('Here are the possible answers you could have chosen from; ', statesLived[0,1,2,3,4,5]);
