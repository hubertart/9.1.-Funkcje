const Triangle1Area = getTriangleArea(10, 15);
const Triangle2Area = getTriangleArea(12, 17);
const Triangle3Area = getTriangleArea(14, 19);


function getTriangleArea(a, h) {


    if ((a > 0) && (h > 0)) {
        return a * h / 2;
    } else {
        return "Nieprawidłowe dane"
    }
}
console.log(Triangle1Area);
console.log(Triangle2Area);
console.log(Triangle3Area);









/*
function getTriangleArea(a, h) {


    if ((a > 0) && (h > 0)) {
        return a * h / 2;
    } else {
        return "Nieprawidłowe dane"
    }
}
console.log(getTriangleArea(5, 10))
*/









/*
var a = prompt("Enter value A:");
var h = prompt("Enter value H:");

var triangleArea = a * h / 2;

alert("Triangle field with base a: " + a + " and height h: " + h + " is equal to: " + triangleArea);
*/
