// # Задача 11

// С помощью цикла `for` и оператора `if` выведите на экран столбец элементов, которые больше 3-х, но меньше 10.

// Использовать встроенные методы массивов — нельзя.

const array = [2, 5, 9, 15, 0, 4];

for (let i = 0; i < array.length; i++) {
  const element = array[i];

  if (element > 3 && element < 10)
    console.log(element);
}