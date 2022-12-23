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
//     return "Вказане від`ємне число";
//   }
// }
// console.log("getDifference: ", getDifference(-32, 23));

// function getSum(a, b) {
//   if (a > 0 && b > 0) {
//     return a ** 2 + b ** 2;
//   } else {
//     return "Вказане від`ємне число";
//   }
// }
// console.log("getSum: ", getSum(5, 31));

// // // <-----------------------------------------NEW TASK----------------------------------------->
// Begin11◦
// . Даны два ненулевых числа. Найти сумму, разность, произведение и частное их модулей.

// // // <-----------------------------------------NEW TASK----------------------------------------->
// Begin12◦
// . Даны катеты прямоугольного треугольника a и b. Найти его гипотенузу c и периметр P:c =√a2 + b2, P = a + b + c.

// function getHypotenuse(a, b) {
//   return Math.sqrt(a ** 2 + b ** 2);
// }
// console.log("getHypotenuse: ", getHypotenuse(2, 3));

// const getPerimetr = (a, b, getHypotenuse) => a + b + getHypotenuse;
// console.log("getPerimetr: ", getPerimetr(3, 2, 5));

// // // <-----------------------------------------NEW TASK----------------------------------------->
// Begin13◦
// . Даны два круга с общим центром и радиусами R1 и R2 (R1 > R2).
// Найти площади этих кругов S1 и S2, а также площадь S3 кольца, внешний
// радиус которого равен R1, а внутренний радиус равен R2:S1 = π·(R1)2, S2 = π·(R2)2, S3 = S1 − S2.

// const p = 3.14;

// function getSquare(radius1, radius2) {
//   if (radius1 > radius2) {
//     const getSquareS1 = p * radius1 ** 2;
//     const getSquareS2 = p * radius2 ** 2;
//     const getSquareS3 = getSquareS1 - getSquareS2;
//     return { getSquareS1, getSquareS2, getSquareS3 };
//   } else {
//     console.log("Radius1 > Radius2");
//   }
// }
// console.log("getSquare: ", getSquare(5, 3));

// // // <-----------------------------------------NEW TASK----------------------------------------->
// Begin14◦
// . Дана длина L окружности. Найти ее радиус R и площадь S круга,
// ограниченного этой окружностью, учитывая, что L = 2·π·R, S = π·R2. Вкачестве значения π использовать 3.14.
// let length = 0;
// const p = 3.14;

// const getRadius = (radius) => 2 * p * radius;
// console.log("getRadius: ", getRadius(2));
// const getSquare = (radius) => p * radius ** 2;
// console.log("getSquare: ", getSquare(3));

// // // <-----------------------------------------NEW TASK----------------------------------------->
// Begin15◦
// . Дана площадь S круга. Найти его диаметр D и длину L окружности,
// ограничивающей этот круг, учитывая, что L = 2·π·R, S = π·R2. В качествезначения π использовать 3.14.
// const p = 3.14;
// let square;

// function getRadius(square) {
//   return Math.sqrt(square / p);
// }

// function getDiametr(sq) {
//   return getRadius(sq) * 2;
// }

// function getLength(getRadius) {
//   return 2 * p * getRadius;
// }
// console.log(getRadius(2));
// console.log(getDiametr(2));
// console.log(getLength(2));

// // // <-----------------------------------------NEW TASK----------------------------------------->
// Begin16◦
// . Найти расстояние между двумя точками с заданными координатами x1 и x2 на числовой оси: |x2 − x1|

// const getDistance = (x1, x2) => Math.abs(x2 - x1);

// // // <-----------------------------------------NEW TASK----------------------------------------->
// Begin17◦
// . Даны три точки A, B, C на числовой оси. Найти длины отрезков AC и BC и их сумму.

const lengthsOfSegment =(a,b,c) => Math.abs(x2 - x1)

const getSum