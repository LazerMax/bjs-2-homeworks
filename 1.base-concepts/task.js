"use strict";

function solveEquation(a, b, c) {
  let arr = [];
    let D = Math.pow(b, 2) - 4 * a * c;

    if (D < 0) {
    } else if (D === 0) {
        arr[0] = -b / (2 * a);
    } else {
        arr[0] = (-b + Math.sqrt(D)) / (2 * a);
        arr[1] = (-b - Math.sqrt(D)) / (2 * a);
    }
  return arr; // array
}

function calculateTotalMortgage(percent, contribution, amount, date) {
  let totalAmount;

    if (!Number.isFinite(Number(percent))) {
        return ('Параметр "Процентная ставка" содержит неправильное значение "' + percent + '"');
    }
    if (!Number.isFinite(Number(contribution))) {
        return ('Параметр "Начальный взнос" содержит неправильное значение "' + contribution + '"');
    }
    if (!Number.isFinite(Number(amount))) {
        return ('Параметр "Общая стоимость" содержит неправильное значение "' + amount + '"');
    }

    let loanBody = amount - contribution;

   let p = percent / 1200;

    let dateToday = new Date();

    let months = (date.getFullYear() - dateToday.getFullYear()) * 12;
    months -= dateToday.getMonth();
    months += date.getMonth();

    let payment = loanBody * (p + (p / (Math.pow(1 + p, months) - 1)));

    totalAmount = Number((payment * months).toFixed(2));
    
    console.log(totalAmount);

  return totalAmount;
}
