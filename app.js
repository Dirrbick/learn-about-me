'use strict'

console.log('I\'m alive!');

var userName = prompt('What is your name?');
userName = userName.toLowerCase();
// add this console.log to all questions //
console.log('What is your name?: ' + userName);

// I need to change answers around to be correct answer on is the if statement //

// with this I finally understand if else statements a little better than before //

if(userName === 'bob' || userName === 'vern') {
  // console.log('I had gerbals with that name!');
  alert('I had gerbals with that name!');
} else if(userName === 'ron') {
  // console.log('Your favorite color must be burgundy!');
  alert('Your favorite color must be Burgundy...');
} else if(userName === 'kory' || userName === 'cory' || userName === 'corey') {
  // console.log('That\'s my name too!!');
  alert('That\'s my name too!');
} else {
  // console.log('I hope you enjoy learning about me ' + userName + '.');
  alert('I hope you enjoy learning about me ' + userName + '.');
}

var pastCareer = prompt('Do you think that I used to work at fastfood restaurants?');
pastCareer = pastCareer.toLowerCase();
console.log('Did I work at fastfood restaurants?: ' + pastCareer);

if(pastCareer === 'yes' || pastCareer === 'y') {
  // console.log('That is correct! I have worked in 3 separate fastfood chains. One of which was McDonald\'s for 6 years!');
  alert('That is correct! I have worked in 3 separate fastfood chains. One of which was McDonald\'s for 6 years!');
} else {
  // console.log('WRONG, a good Chef has to start somewhere don\'t they?');
  alert('WRONG, a good Chef has to start somewhere don\'t they?');
}

var siblingRivals = prompt('Do I have any blood sisters?');
siblingRivals = siblingRivals.toLowerCase();
console.log('Do I have sisters: ' + siblingRivals);

if(siblingRivals === 'no' || siblingRivals === 'n') {
  // console.log('Correct! I have 3 older brothers, all of which are married. So I technically have sisters...in-law.');
  alert('Correct! I have 3 older brothers, all of which are married. So I technically have sisters...in-law.');
} else {
  // console.log('Incorrect... Although I do have 3 sister-in-laws... but no blood sisters.');
  alert('Incorrect... Although I do have 3 sister-in-laws... but no blood sisters.');
}

var collegeDegree = prompt('Have I earned a bachelors degree?');
collegeDegree = collegeDegree.toLowerCase();
console.log('Do I have a diploma?: ', collegeDegree);

if(collegeDegree === 'yes' || collegeDegree === 'y') {
  alert('Correct! I got my Associates in Culinary Arts but never went for my Bachelors degree.');
  // console.log('Correct! I got my Associates in Culinary Arts but never went for my Bachelors degree.');
} else {
  alert('Nope! Thought about it but I only got an Associates Degree in Culinary Arts');
  // console.log('Nope! Thought about it but I only got an Associates Degree in Culinary Arts');
}

var lifeOrigin = prompt('Am I originally from Washington State?');
lifeOrigin = lifeOrigin.toLowerCase();
console.log('Am I from Washington?: ', lifeOrigin);

if(lifeOrigin === 'no' || lifeOrigin === 'n') {
  // console.log('How did you know?? I was born in Wisconsin and lived most of my life in Minnesota.. yes I no longer have the Minnesota accent...');
  alert('How did you know?? I was born in Wisconsin and lived most of my life in Minnesota.. yes I no longer have the Minnesota accent...');
} else {
  alert('Far from... I was born in Wisconsin and lived most of my life in Minnesoata!');
  // console.log('Far from... I was born in Wisconsin and lived most of my life in Minnesoata!');
}

var marriedLife = prompt('Do you think that I am married?');
marriedLife = marriedLife.toLowerCase();
console.log('Am I married?: ', marriedLife);

if(marriedLife === 'yes' || marriedLife === 'y') {
  alert('Correct!! I have been happily married for just over 4 years! Just celebrated our anniversary in October.');
  // console.log('Correct!! I have been happily married for just over 4 years! Just celebrated our anniversary in October.');
} else {
  alert('Nope, I have been married to my best friend for over 4 years!');
  // console.log('Nope, I have been married to my best friend for over 4 years!');
}

