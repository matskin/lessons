// Урок 2.15. Массивы и псевдомассивы (18:40)
// algorithm for sorting an array with numeric values
//Алгоритм правильной сортировки массива с числовыми значениями.

let arr = [1,15,4],
    i = arr.sort(compareNum); //Передаем функцию внутрь метода, не вызываем ее.

function compareNum(a,b) {
    return a-b;
}

console.log(arr); // [ 1, 4, 15 ]


// Урок 2.16 Объектно-ориентированное программирование (ООП)
// Прототипирование и наследование свойств

let soldier = {
    health: 400,
    armor: 200
};

let john = {
  health: 100
};

john.__proto__ = soldier;

console.log(john);
console.log(john.armor);

