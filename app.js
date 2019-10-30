'use strict'

console.log('I\'m alive!');

var userName = prompt('What is your name?');
userName = userName.toLowerCase();

// with this I finally understand if else statements a little better than before //

if(userName === 'bob' || userName === 'vern') {
  console.log('I had gerbals with that name!');
} else if(userName === 'ron') {
  console.log('Your favorite color must be burgundy!');
} else if(userName === 'kory' || userName === 'cory' || userName === 'corey') {
  console.log('That\'s my name too!!');
} else {
  console.log('I hope you enjoy learning about me ' + userName + '.');
}

var pastCareer = prompt('Do you think that I used to work at fastfood restaurants?');
pastCareer = pastCareer.toLowerCase();

if(pastCareer === 'yes' || pastCareer === 'y') {
  console.log('That is correct! I have worked in 3 separate fastfood chains. One of which was McDonald\'s for 6 years!');
} else {
  console.log('WRONG, a good Chef has to start somewhere don\'t they?');
}

var siblingRivals = prompt('Do I have any sisters?');
siblingRivals = siblingRivals.toLowerCase();

if(siblingRivals === 'yes' || siblingRivals === 'y') {
  console.log('Incorrect... Although I do have 3 sister-in-laws... but no blood sisters.');
} else {
  console.log('Correct! I have 3 older brothers, all of which are married. So I technically have sisters...in-law.');
}

var collegeDegree = prompt('Have I earned a bachelors degree?');
collegeDegree = collegeDegree.toLowerCase();

if(collegeDegree === 'yes' || collegeDegree === 'y') {
  console.log('Nope! Thought about it but I only got an Associates Degree in Culinary Arts');
} else {
  console.log('Correct! I got my Associates in Culinary Arts but never went for my Bachelors degree.');
}