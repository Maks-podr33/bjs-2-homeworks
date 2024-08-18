"use strict";
function solveEquation(a, b, c) {
  let arr = [];
  let equation = b ** 2 - 4 * a * c;
  if (equation == 0) {
    arr.push(-b / (2 * a));
  } else {
    arr.push(parseFloat(((-b + Math.sqrt(equation)) / (2 * a)).toFixed(2)));
    arr.push(parseFloat(((-b - Math.sqrt(equation)) / (2 * a)).toFixed(2)));
  }
  return arr;
}

function calculateTotalMortgage(percent, contribution, amount, countMonths) {
  let percentMonth = percent / 100 / 12;
  let creditBody = amount - contribution;
  let monthlyPayment = creditBody * (percentMonth + (percentMonth / (((1 + percentMonth) ** countMonths) - 1)));
  return parseFloat((monthlyPayment * countMonths).toFixed(2));
} 