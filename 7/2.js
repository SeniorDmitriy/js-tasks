/**
 * Задача 2.
 *
 * Напишите функцию `collect`, которая будет принимать массив в качестве аргумента,
 * и возвращать число.
 * Массив, который передаётся в аргументе может быть одноуровневым или многоуровневым.
 * Число, которое возвращает функция должно быть суммой всех элементов
 * на всех уровнях всех вложенных массивов.
 *
 * Если при проходе всех уровней не было найдено ни одного числа,
 * то функция должна возвращать число 0.
 *
 * Условия:
 * - Обязательно использовать встроенный метод массива reduce.
 * 
 * Генерировать ошибки, если:
 * - При вызове функции не был передан один аргумент;
 * - В качестве первого аргумента был передан не массив;
 * - Если на каком-то уровне было найдено не число и не массив.
 */

// Решение

function collect(array) {
  if (arguments.length === 0) {
    throw new Error('must have at least 1 parameters');
  } else if (!Array.isArray(arguments[0])) {
    throw new Error('first argument must be an Array');
  }

  let findSubArray = array.some(el => {
    if (Array.isArray(el)) {
      return true
    } else if (!Array.isArray(el) && typeof el !== 'number') {
      throw new Error('not a number or an array was found');
    }
  });

  if (findSubArray) {
    array = array.flat();
    collect(array);
  }

  console.log(array);
  const newArray = array.reduce((previousValue, currentValue) => previousValue + currentValue, 0);
  console.log(newArray);
  return newArray;
}

const array1 = [[[1, 2], [1, 2]], [[2, 1], [1, 2]]];
console.log(collect(array1)); // 12

// const array2 = [[[[[1, 2]]]]];
// console.log(collect(array2)); // 3

// const array3 = [[[[[1, 2]]], 2], 1];
// console.log(collect(array3)); // 6

// const array4 = [[[[[]]]]];
// console.log(collect(array4)); // 0

// const array5 = [[[[[], 3]]]];
// console.log(collect(array5)); // 3

exports.collect = collect;
