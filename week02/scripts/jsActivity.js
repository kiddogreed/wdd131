// Activity Instructions
// Given the following variable declarations:
const DAYS = 6;
const LIMIT = 30;
let studentReport = [11, 42, 33, 64, 29, 37, 44];

console.log("test");

// Write the following programming snippets in your browser console:
// Write a for loop that will iterate through the studentReport array and print to the console the current array value if it is below 30.

for (let i = 0; i < studentReport.length; i++) {
  if (studentReport[i] < LIMIT) {
    console.log(studentReport[i]);
  }
}

// Repeat the previous programming snippet by using a while loop.
let i = 0;
while (i < studentReport.length) {
  if (studentReport[i] < LIMIT) {
    console.log(studentReport[i]);
  }
  i++;
}
// Repeat the previous programming snippet by using a forEach loop.
studentReport.forEach(function(score) {
  if (score < LIMIT) {
    console.log(score);
  }
});

// Repeat the previous programming snippet by using a for...in loop.
for (let index in studentReport) {
  if (studentReport[index] < LIMIT) {
    console.log(studentReport[index]);
  }
}

// Use any type of loop to dynamically produce the day names (Monday, Tuesday, Wednesday, etc.) for the next DAYS days starting today.
const dayNames = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
const today = new Date();
const currentDayIndex = today.getDay();
for (let i = 0; i < DAYS; i++) {
  const dayIndex = (currentDayIndex + i) % 7;
  console.log(dayNames[dayIndex]);
} 
