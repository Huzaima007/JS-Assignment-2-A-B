// ------------------------------------------------------------------START------------------------------------------------------------------

// -----------Chapter 6 to 9-----------

// Question 1

var numberTwo = 10;
var numb = ++numberTwo;
console.log("The Value is " + numb);

var numb = numberTwo++;
console.log("The value is: " + numb);
console.log("Now the value is: " + numberTwo);

numb = ++numberTwo;
console.log("The value is: " + numb);
console.log("Now the value is: " + numberTwo);

// Question 2

var a = 2,
  b = 1;
var result = --a - --b + ++b + b--;
console.log(result);

var output1 = 0;
var output2 = 0;
var output3 = 2;
var output4 = 3;

// Question 3

var name1 = prompt("Hello! What's your name?");
alert("Nice to meet you, " + name1 + "!");

// Question 4

var input = prompt("Enter a number (default is 5):");
var number = input !== "" ? input : "5";
var table = "";

if (1 <= 10) {
  table += number + " x 1 = " + number * 1 + "\n";
}
if (2 <= 10) {
  table += number + " x 2 = " + number * 2 + "\n";
}
if (3 <= 10) {
  table += number + " x 3 = " + number * 3 + "\n";
}
if (4 <= 10) {
  table += number + " x 4 = " + number * 4 + "\n";
}
if (5 <= 10) {
  table += number + " x 5 = " + number * 5 + "\n";
}
if (6 <= 10) {
  table += number + " x 6 = " + number * 6 + "\n";
}
if (7 <= 10) {
  table += number + " x 7 = " + number * 7 + "\n";
}
if (8 <= 10) {
  table += number + " x 8 = " + number * 8 + "\n";
}
if (9 <= 10) {
  table += number + " x 9 = " + number * 9 + "\n";
}
if (10 <= 10) {
  table += number + " x 10 = " + number * 10 + "\n";
}

alert(table);

// Question 5

var subject1 = prompt("Enter the name of the first subject:");
var subject2 = prompt("Enter the name of the second subject:");
var subject3 = prompt("Enter the name of the third subject:");

var totalMarksPerSubject = 100;

var obtainedMarks1 = prompt("Enter obtained marks for " + subject1 + ":");

var obtainedMarks2 = prompt("Enter obtained marks for " + subject2 + ":");
var obtainedMarks3 = prompt("Enter obtained marks for " + subject3 + ":");

var totalObtainedMarks =
  parseInt(obtainedMarks1) +
  parseInt(obtainedMarks2) +
  parseInt(obtainedMarks3);
var totalMarks = totalMarksPerSubject * 3;
var percentage = (totalObtainedMarks / totalMarks) * 100;

console.log("Subject\t\tObtained Marks");
console.log(subject1 + "\t\t" + obtainedMarks1);
console.log(subject2 + "\t\t" + obtainedMarks2);
console.log(subject3 + "\t\t" + obtainedMarks3);
console.log("Total Marks: " + totalMarks);
console.log("Total Obtained Marks: " + totalObtainedMarks);
console.log("Percentage: " + percentage + "%");

// -----------Chapter 9 to 11-----------

// Question 1

var city = prompt("Enter the city name: ");

if (city === "karachi") {
  console.log("Welcome to the city of lights");
} else {
  console.log("Welcome to " + city + " the city of lights");
}

// Question 2

var gender = prompt("Enter your gender (male/female): ");

if (gender === "male") {
  console.log("Good Morning Sir.");
} else if (gender === "female") {
  console.log("Good Morning Ma’am.");
} else {
  console.log("Good Morning!");
}

// Question 3

var signalColor = prompt(
  "Enter the color of the traffic signal (red/yellow/green): "
);

if (signalColor === "red") {
  console.log("Must Stop");
} else if (signalColor === "yellow") {
  console.log("Ready to move");
} else if (signalColor === "green") {
  console.log("Move now");
} else {
  console.log("Invalid color. Please enter red, yellow, or green.");
}

// Question 4

var remainingFuel = prompt(
  "Enter the remaining fuel in your car (in litres): "
);

if (remainingFuel < 1) {
  console.log("Please refill the fuel in your car.");
} else {
  console.log("You have enough fuel.");
}

// Question 5

// A
var a = 4;
if (++a === 5) {
  alert("given condition for variable a is true");
}

// B
var b = 82;
if (b++ === 83) {
  alert("given condition for variable b is true");
}

// C
var c = 12;
if (c++ === 13) {
  alert("condition 1 is true");
}
if (c === 13) {
  alert("condition 2 is true");
}
if (++c < 14) {
  alert("condition 3 is true");
}
if (c === 14) {
  alert("condition 4 is true");
}

// D
var materialCost = 20000;
var laborCost = 2000;
var totalCost = materialCost + laborCost;
if (totalCost === laborCost + materialCost) {
  alert("The cost equals");
}
// E
if (true) {
  alert("True");
}
if (false) {
  alert("False");
}
// F
if ("car" < "cat") {
  alert("car is smaller than cat");
}

// Question 6

marks1 = +prompt("Enter marks in Subject 1:");
marks2 = +prompt("Enter marks in Subject 2:");
marks3 = +prompt("Enter marks in Subject 3:");
totalMarks = +prompt("Enter total marks:");

obtainedMarks = marks1 + marks2 + marks3;
percentage = (obtainedMarks / totalMarks) * 100;

if (percentage >= 90) {
  grade = "A-One";
  remarks = "Excellent";
} else if (percentage >= 80) {
  grade = "A";
  remarks = "Good";
} else if (percentage >= 70) {
  grade = "B";
  remarks = "You need to improve";
} else {
  grade = "Fail";
  remarks = "Sorry";
}

console.log(
  "Total Marks: " +
    totalMarks +
    "\nMarks Obtained: " +
    obtainedMarks +
    "\nPercentage: " +
    percentage.toFixed(2) +
    "%\nGrade: " +
    grade +
    "\nRemarks: " +
    remarks
);

// Question 7

var secretNumber = "5";
var userGuess = prompt("Guess the secret number (between 1 and 10):");
if (userGuess === secretNumber) {
  console.log("Bingo! Correct answer");
} else if (userGuess === "4" || userGuess === "6") {
  console.log("Close enough to the correct answer");
} else {
  console.log("Sorry, the secret number was " + secretNumber);
}

// Question 8

var number = prompt("Enter a number:");

if (number % 3 === 0) {
  console.log("The number is divisible by 3.");
} else {
  console.log("The number is not divisible by 3.");
}

// Question 9

var number = prompt("Enter a number:");

if (number % 2 === 0) {
  console.log("The number is even.");
} else {
  console.log("The number is odd.");
}

// Question 10

var temperature = prompt("Enter the temperature:");

if (temperature > 40) {
  console.log("It is too hot outside.");
} else if (temperature > 30) {
  console.log("The Weather today is Normal.");
} else if (temperature > 20) {
  console.log("Today's Weather is cool.");
} else if (temperature > 10) {
  console.log("OMG! Today's weather is so Cool.");
} else {
  console.log("It's quite cold outside.");
}

// Question 11

var firstNumber = prompt("Enter the first number:");

var secondNumber = prompt("Enter the second number:");

var operation = prompt("Enter the operation (+, -, *, /, %):");

var result;

if (operation === "+") {
  result = firstNumber - 0 + secondNumber - 0;
} else if (operation === "-") {
  result = firstNumber - 0 - (secondNumber - 0);
} else if (operation === "*") {
  result = (firstNumber - 0) * (secondNumber - 0);
} else if (operation === "/") {
  result = (firstNumber - 0) / (secondNumber - 0);
} else if (operation === "%") {
  result = (firstNumber - 0) % (secondNumber - 0);
} else {
  console.log("Invalid operation!");
}
if (result !== undefined) {
  console.log("The result is: " + result);
}

// -----------Chapter 12 to 13-----------

// Question 1

var character = prompt("Enter a character:");
if (character >= "0" && character <= "9") {
  console.log("The input is a number.");
} else if (character >= "A" && character <= "Z") {
  console.log("The input is an uppercase letter.");
} else if (character >= "a" && character <= "z") {
  console.log("The input is a lowercase letter.");
} else {
  console.log("The input is neither a number nor a letter.");
}

// Question 2

var num1 = prompt("Enter the first integer:");
var num2 = prompt("Enter the second integer:");
num1 = num1 - 0;
num2 = num2 - 0;
if (num1 > num2) {
  console.log("The larger number is: " + num1);
} else if (num2 > num1) {
  console.log("The larger number is: " + num2);
} else {
  console.log("Both numbers are equal.");
}

// Question 3

var number = prompt("Enter a number:");
number = number - 0;
if (number > 0) {
  console.log("The number is positive.");
} else if (number < 0) {
  console.log("The number is negative.");
} else {
  console.log("The number is zero.");
}

// Question 4

var character = prompt("Enter a single character:");

var isVowel =
  character === "a" ||
  character === "e" ||
  character === "i" ||
  character === "o" ||
  character === "u" ||
  character === "A" ||
  character === "E" ||
  character === "I" ||
  character === "O" ||
  character === "U";

console.log(isVowel);

// Question 5

var correctPassword = "mySecurePassword";
var userPassword = prompt("Enter your password:");
if (userPassword === "") {
  console.log("Please enter your password.");
} else if (userPassword === correctPassword) {
  console.log(
    "Correct! The password you entered matches the original password."
  );
} else {
  console.log("Incorrect password.");
}

// Question 6

var greeting;
var hour = 13;

if (hour < 18) {
  greeting = "Good day";
} else {
  greeting = "Good evening";
}

console.log(greeting);

// Question 7

var time = prompt("Enter time in 24-hour format (e.g., 1900 for 7 PM):");
time = Number(time);
if (time >= 0 && time < 1200) {
  console.log("Good Morning!");
} else if (time >= 1200 && time < 1700) {
  console.log("Good Afternoon!");
} else if (time >= 1700 && time < 2100) {
  console.log("Good Evening!");
} else if (time >= 2100 && time < 2400) {
  console.log("Good Night!");
} else {
  console.log(
    "Invalid time input. Please enter a time in 24-hour format (0000 - 2359)."
  );
}

// -----------Chapter 14 to 16-----------

// Question 1

var studentNames = [];

// Question 2

var cities = ["Kattar Karachi", "Pindi", "Islamabad", "Lahore"];

// Question 3

var numbers = [10, 20, 30, 40, 50];

// Question 4

var boolean = [true, false, true, false];

// Question 5

var mixedArray = [42, "hello", true, null, 3.14, "world"];

// Question 6

var educationQualifications = [
  "SSC",
  "HSC",
  "BCS",
  "BS",
  "BCOM",
  "MS",
  "M. Phil.",
  "PhD",
];
console.log(educationQualifications);

// Question 7

var studentNames = ["Michael", "John", "Tony"];
var studentScores = [320, 230, 480];
var totalMarks = 500;

console.log(
  "Score of " +
    studentNames[0] +
    " is " +
    studentScores[0] +
    ". Percentage: " +
    (studentScores[0] / totalMarks) * 100 +
    "%"
);
console.log(
  "Score of " +
    studentNames[1] +
    " is " +
    studentScores[1] +
    ". Percentage: " +
    (studentScores[1] / totalMarks) * 100 +
    "%"
);
console.log(
  "Score of " +
    studentNames[2] +
    " is " +
    studentScores[2] +
    ". Percentage: " +
    (studentScores[2] / totalMarks) * 100 +
    "%"
);

// Question 8

var colors = ["Red", "Green", "Blue", "Yellow"];

console.log("Current colors: " + colors.join(", "));

var colorToAddBeginning = prompt("Enter a color to add to the beginning:");
colors.unshift(colorToAddBeginning);
console.log("Updated colors: " + colors.join(", "));

var colorToAddEnd = prompt("Enter a color to add to the end:");
colors.push(colorToAddEnd);
console.log("Updated colors: " + colors.join(", "));

colors.unshift("Purple", "Orange");
console.log("Updated colors: " + colors.join(", "));

colors.shift();
console.log("Updated colors: " + colors.join(", "));

colors.pop();
console.log("Updated colors: " + colors.join(", "));

var indexToAdd = prompt("At which index do you want to add a color?");
var colorToAdd = prompt("Enter the color name to add:");
colors.splice(indexToAdd, 0, colorToAdd);
console.log("Updated colors: " + colors.join(", "));

var indexToDelete = prompt("At which index do you want to delete colors?");
var numberToDelete = prompt("How many colors do you want to delete?");
colors.splice(indexToDelete, numberToDelete);
console.log("Updated colors: " + colors.join(", "));

// Question 9

var studentScores = [320, 230, 480, 120];

var sortedScores = [];

if (
  studentScores[0] <= studentScores[1] &&
  studentScores[0] <= studentScores[2] &&
  studentScores[0] <= studentScores[3]
) {
  sortedScores.push(studentScores[0]);
} else if (
  studentScores[1] <= studentScores[0] &&
  studentScores[1] <= studentScores[2] &&
  studentScores[1] <= studentScores[3]
) {
  sortedScores.push(studentScores[1]);
} else if (
  studentScores[2] <= studentScores[0] &&
  studentScores[2] <= studentScores[1] &&
  studentScores[2] <= studentScores[3]
) {
  sortedScores.push(studentScores[2]);
} else {
  sortedScores.push(studentScores[3]);
}

if (studentScores[0] !== sortedScores[0]) {
  if (
    studentScores[0] <= studentScores[1] &&
    studentScores[0] <= studentScores[2] &&
    studentScores[0] <= studentScores[3]
  ) {
    sortedScores.push(studentScores[0]);
  } else if (
    studentScores[1] <= studentScores[0] &&
    studentScores[1] <= studentScores[2] &&
    studentScores[1] <= studentScores[3]
  ) {
    sortedScores.push(studentScores[1]);
  } else if (
    studentScores[2] <= studentScores[0] &&
    studentScores[2] <= studentScores[1] &&
    studentScores[2] <= studentScores[3]
  ) {
    sortedScores.push(studentScores[2]);
  } else {
    sortedScores.push(studentScores[3]);
  }
}

console.log("Ordered score of students:");
console.log(sortedScores[0]);
console.log(sortedScores[1]);
console.log(sortedScores[2]);
console.log(sortedScores[3]);

// Question 10

var cities = ["Karachi", "Lahore", "Quetta", "Pindi", "Punjab"];

var selectedCities = [];

selectedCities[0] = cities[0];
selectedCities[1] = cities[1];
selectedCities[2] = cities[2];

console.log(
  "Selected cities: " +
    selectedCities[0] +
    ", " +
    selectedCities[1] +
    ", " +
    selectedCities[2]
);

// Question 11

var arr = ["This ", "is ", "my ", "cat"];
var singleString = arr[0] + arr[1] + arr[2] + arr[3];
console.log(singleString);

// Question 12

var fifo = [];

fifo.push("Value 1");
fifo.push("Value 2");
fifo.push("Value 3");

console.log("Current FIFO is: " + fifo);

var firstValue = fifo.shift();
console.log("Removed: " + firstValue);
console.log("Updated FIFO is: " + fifo);

firstValue = fifo.shift();
console.log("Removed: " + firstValue);
console.log("Updated FIFO is: " + fifo);

// Question 13

var lifo = [];

lifo.push("Value 1");
lifo.push("Value 2");
lifo.push("Value 3");

console.log("Current LIFO is: " + lifo);

var firstValue = lifo.pop();
console.log("Removed: " + firstValue);
console.log("Updated LIFO is: " + lifo);

firstValue = lifo.pop();
console.log("Removed: " + firstValue);
console.log("Updated LIFO is: " + lifo);

// Question 14

var manufacturers = ["Apple", "Samsung", "Motorola", "Nokia", "Sony", "Haier"];

var dropdown = "<select>";

if (manufacturers[0]) {
  dropdown +=
    '<option value="' +
    manufacturers[0] +
    '">' +
    manufacturers[0] +
    "</option>";
}

if (manufacturers[1]) {
  dropdown +=
    '<option value="' +
    manufacturers[1] +
    '">' +
    manufacturers[1] +
    "</option>";
}

if (manufacturers[2]) {
  dropdown +=
    '<option value="' +
    manufacturers[2] +
    '">' +
    manufacturers[2] +
    "</option>";
}

if (manufacturers[3]) {
  dropdown +=
    '<option value="' +
    manufacturers[3] +
    '">' +
    manufacturers[3] +
    "</option>";
}

if (manufacturers[4]) {
  dropdown +=
    '<option value="' +
    manufacturers[4] +
    '">' +
    manufacturers[4] +
    "</option>";
}

if (manufacturers[5]) {
  dropdown +=
    '<option value="' +
    manufacturers[5] +
    '">' +
    manufacturers[5] +
    "</option>";
}

dropdown += "</select>";

console.log(dropdown);

// -----------Chapter 17 to 20-----------

// Question 1

var array = [[]];

// Question 2

var matrix = [
  [0, 1, 2, 3],
  [1, 0, 1, 2],
  [2, 1, 0, 1],
];

// Question 3

var output = "";
for (var i = 1; i <= 10; i++) {
  output += i + " ";
}
console.log(output);

// Question 4

var tableNum = parseInt(prompt("Enter Table Number:"));
var tableLength = parseInt(prompt("Enter Table Length:"));

var out = "";

for (var i = 1; i <= tableLength; i++) {
  out += tableNum + " x " + i + " = " + tableNum * i + "\n";
}

console.log(out);

// Question 5

var fruits = ["apple", "banana", "mango", "orange", "strawberry"];

for (var i = 0; i < fruits.length; i++) {
  console.log(fruits[i]);
}

// Question 6

// a. Counting
var counting = "";
for (var i = 1; i <= 15; i++) {
  counting += i + (i < 15 ? ", " : "");
}
console.log("Counting: " + counting);

// b. Reverse counting
var reverseCounting = "";
for (var j = 10; j >= 1; j--) {
  reverseCounting += j + (j > 1 ? ", " : "");
}
console.log("Reverse counting: " + reverseCounting);

// c. Even
var even = "";
for (var k = 0; k <= 20; k += 2) {
  even += k + (k < 20 ? ", " : "");
}
console.log("Even: " + even);

// d. Odd
var odd = "";
for (var l = 1; l < 20; l += 2) {
  odd += l + (l < 19 ? ", " : "");
}
console.log("Odd: " + odd);

// e. Series: 2k
var series = "";
for (var m = 1; m <= 10; m++) {
  series += 2 * m + "k" + (m < 10 ? ", " : "");
}
console.log("Series: " + series);

// Question 7

var A = ["cake", "apple pie", "cookie", "chips", "patties"];
var userInput = prompt(
  "Welcome to ABC Bakery. What do you want to order, Sir/Mam?"
);
var found = false;
for (var i = 0; i < A.length; i++) {
  if (A[i] === userInput) {
    found = true;
  }
}

if (found) {
  alert("Yes, we have " + userInput + " in our menu!");
} else {
  alert("Sorry, we don't have " + userInput + " in our menu.");
}

// Question 8

var A = [24, 53, 78, 91, 12];
var largest = A[0];
for (var i = 1; i < A.length; i++) {
  if (A[i] > largest) {
    largest = A[i];
  }
}
console.log("The largest number in the array is: " + largest);

// Question 9

var A = [24, 53, 78, 91, 12];
var smallest = A[0];
for (var i = 1; i < A.length; i++) {
  if (A[i] < smallest) {
    smallest = A[i];
  }
}

console.log("The smallest number in the array is: " + smallest);

// Question 10

for (var i = 1; i <= 100; i++) {
  if (i % 5 === 0) {
    console.log(i);
  }
}
// ------------------------------------------------------------------END------------------------------------------------------------------
