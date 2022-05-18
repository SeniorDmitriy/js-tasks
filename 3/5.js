/**
 * Задача 5.
 *
 * Дан массив с числами `[1, 2, -4, 3, -9, -1, 7]`.
 * Создайте из него новый массив, где останутся только положительные числа `[1, 2, 3, 7]`.
 * Создайте для этого вспомогательную функцию `isPositive(-3)`,
 * которая параметром будет принимать число и возвращать true,
 * если число положительное, и false — если отрицательное.
 *
 * Условия:
 * - Входной параметр должен обладать типом number;
 * - Для добавление нового элемента в конец массива используйте метод push.
 */

const array = [1, 2, -4, 3, -9, -1, 7];
const posArray = [];

for (const iterator of array) {
  if (iterator > 0) {
    posArray.push(iterator);
  }
}

let isPositive = function (params) {
  if (typeof params !== 'number') {
    throw new Error('parameter type is not a Number');
  }

  if (params > 0) {
    return true;
  } else {
    return false;
  }
}

// Решение

/* не удалять */
console.log(isPositive(-3));  // false
console.log(isPositive(3)); // true
isPositive('s'); // Error: parameter type is not a Number

exports.isPositive = isPositive;
/* не удалять */
