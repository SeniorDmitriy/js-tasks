// # Задача 14

// Дано число `n=1000`. Делите его на 2 столько раз, пока результат деления не станет меньше 50. Какое число получится? Посчитайте количество итераций, необходимых для этого (итерация - это проход цикла), и запишите его в переменную `num`.

// Использовать встроенные методы массивов — нельзя.

const n = 1000;
let result = n;
let step = 0;

while(result > 50) {
  result /= 2;
  step++;
}

console.log(result);
console.log(step);