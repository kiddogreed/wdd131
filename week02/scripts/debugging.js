let radiusOutput = document.getElementById('radius');
let areaOutput = document.querySelector('area');

let area = 0;
let PI = 3.14159;
let stringName = "";
let radius = 10;
area = PI * radius * radius;
radiusOutput = radius;
areaOutput = area;

radius = 20;
area = PI * radius * radius;
radiusOutput = radius;
areaOutput = area;

stringName = "john "
console.log(`Hello ${stringName}doe`);


document.getElementById("stringName").textContent = stringName;