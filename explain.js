/*let x = "5";
if (x == 5) {
  console.log("Loose match");
} else if (x === 5) {
  console.log("Strict match");
} else {
  console.log("No match");
}
// The output of the code is Loose match
// This is because == is Loose equality and it allows type coercion.
//The string "5" will be converted will be converted to a number
//After the conversion 5 == 5 which is true hence the reult Loose match

let value = 0;
if (value) {
  console.log("Truthy");
} else {
  console.log("Falsy");
}

//The output of the code is falsy
//If statement runs if the condition is either true or false
//0 is always falsy in javascript
//The if block is skipped and the else block rns since its False

let age = 18;
let hasID = false;

if (age >= 18) {
  if (hasID) {
    console.log("Allowed entry");
  } else {
    console.log("No ID, no entry");
  }
} else {
  console.log("Too young");
}*/
//The output of this code is No ID, no entry
//The given age is 18 so the person meets the condition
//hasID has been set to false which means the person has no id
//since false is Falsy the if condition fails and does not run
//Else statement runs because the condition in the if statement is not met.


//SECTION 2
 //Odd or Even + Positive and Negative

/*let num = 17;

if (num % 2 === 0) {
  
  if (num > 0) {
    console.log("Even and positive");
  } else if (num < 0) {
    console.log("Even and negative");
  } else {
    console.log("Even and zero");
  }
} else {
  if (num > 0) {
    console.log("Odd and positive");
  } else if (num < 0) {
    console.log("Odd and negative");
  } else {
    console.log("Odd and zero"); 
  }
}*/

//TRAFFIC LIGHT
 let color= "black";

 switch (color){
    case"green":
        console.log("Go");
        break;
    case "yellow":
        console.log("Slow down");
        break;
    case "red":
        console.log("Stop")
        break;
    default:
        console.log("Invalid color")
 }
