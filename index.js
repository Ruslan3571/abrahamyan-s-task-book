// Ввод и вывод данных, оператор присваивания

// Begin1◦
// . Дана сторона квадрата a. Найти его периметр P = 4·a.

// let sideA = 0;

// function perimetr(sideA) {
//   return sideA * 4;
// }

// const perimetr = (sideA) => sideA * 4;

// console.log(perimetr(5));

// <-----------------------------------------NEW TASK----------------------------------------->

// Begin2◦
// . Дана сторона квадрата a. Найти его площадь S = a2

// let sideA = 0;
// const square = (sideA) => sideA ** 2;
// console.log("square: ", square(2));

// <-----------------------------------------NEW TASK----------------------------------------->
// Begin3◦
// . Даны стороны прямоугольника a и b. Найти его площадь S = a·b и периметр P = 2·(a + b).
// let sideA = 0;
// let sideB = 0;
// const square = (sideA, sideB) => sideA * sideB;
// console.log("square: ", square(5, 3));
// const perimetr = (sideA, sideB) => 2 * (sideA + sideB);
// console.log("perimetr: ", perimetr(2, 2));

// <-----------------------------------------NEW TASK----------------------------------------->
// Begin4◦
// . Дан диаметр окружности d. Найти ее длину L = π·d. В качестве значения π использовать 3.14.

// let diameter = 0;
// const numberP = 3.14;
// const lengthOfCircle = (diameter) => numberP * diameter;
// console.log("lengthOfCircle: ", lengthOfCircle(1));

// // <-----------------------------------------NEW TASK----------------------------------------->
// Begin5◦
// . Дана длина ребра куба a. Найти объем куба V = a3 и площадь его поверхности S = 6·a2.

// let sideA = 0;
// const volumeOfCube = (sideA) => sideA ** 3;
// console.log("squareOfCube: ", squareOfCube(2));
// const squareOfCube = (sideA) => 6 * sideA ** 2;
// console.log("volumeOfCube: ", volumeOfCube(3));

// // <-----------------------------------------NEW TASK----------------------------------------->
// Begin6◦
// . Даны длины ребер a, b, c прямоугольного параллелепипеда. Найти его объем V = a·b·c и площадь поверхности S = 2·(a·b + b·c + a·c).
// let sideA = 0;
// let sideB = 0;
// let sideC = 0;
// const volumeOfParallelepiped = (sideA, sideB, sideC) => sideA * sideB * sideC;
// console.log("volumeOfParallelepiped: ", volumeOfParallelepiped(2, 2, 3));
// const squareOfParallelepiped = (sideA, sideB, sideC) =>
//   2 * (sideA * sideB + sideB * sideC + sideA + sideC);
// console.log("squareOfParallelepiped: ", squareOfParallelepiped(2, 3, 5));

// // <-----------------------------------------NEW TASK----------------------------------------->
// Begin7◦
// . Найти длину окружности L и площадь круга S заданного радиуса R: L = 2·π·R, S = π·R2.  В качестве значения π использовать 3.14.

// const getLengthOfCircle = (radius) => 2 * 3.14 * radius;
// const getSquareOfCircle = (radius) => 3.14 * radius ** 2;
// console.log("getLengthOfCircle: ", getLengthOfCircle(2));
// console.log("getSquareOfCircle: ", getSquareOfCircle(3));

// // // <-----------------------------------------NEW TASK----------------------------------------->
// Begin8◦
// . Даны два числа a и b. Найти их среднее арифметическое: (a + b)/2

// const getAverage = (a, b) => (a + b) / 2;
// console.log("getAverage: ", getAverage(2, 6));

// // // <-----------------------------------------NEW TASK----------------------------------------->
// Begin9◦
// . Даны два неотрицательных числа a и b. Найти их среднее геометрическое, то есть квадратный корень из их произведения: √a·b.

// const getGeometricAverage = (a, b) => {
//   if (a > 0 && b > 0) {
//     return Math.sqrt(a * b);
//   } else {
//     console.log("Вказане від`ємне число");
//   }
// };
// getGeometricAverage(-2, 4);
// getGeometricAverage(2, 4);
// console.log("getGeometricAverage: ", getGeometricAverage(2, 4));

// const getGeometricAverage = (a, b) => {
//   return Math.sqrt(Math.abs(a * b));
// };
// console.log("getGeometricAverage: ", name(2, 3));

// // // <-----------------------------------------NEW TASK----------------------------------------->
// Begin10◦
// // . Даны два ненулевых числа. Найти сумму, разность, произведение и частное их квадратов.

// function getDifference(a, b) {
//   if (a > 0 && b > 0) {
//     return a ** 2 - b ** 2;
//   } else {
//     console.log("Вказане від`ємне число");
//   }
// }
// console.log("getDifference: ", getDifference(-32, 23));

// function getSum(a, b) {
//   if (a > 0 && b > 0) {
//     return a ** 2 + b ** 2;
//   } else {
//     console.log("Вказане від`ємне число");
//   }
// }
// console.log("getSum: ", getSum(5, 31));

// // // <-----------------------------------------NEW TASK----------------------------------------->
// Begin11◦
// . Даны два ненулевых числа. Найти сумму, разность, произведение и частное их модулей.
