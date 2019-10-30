'use strict'

console.log("I'm alive!");

var userName = prompt("What is your name?");
userName = userName.toLowerCase();

// with this I finally understand if else statements a little better than before //

if(userName === "bob" || userName === "vern") {
  console.log("I had gerbals with that name!");
} else if(userName === "ron") {
  console.log("Your favorite color must be burgundy!")
} else if(userName === "kory" || userName === "cory" || userName === "corey") {
  console.log("That's my name too!!")
} else {
  console.log("I hope you enjoy learning about me " + userName + ".");
}

