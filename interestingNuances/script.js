// Урок 2.15. Массивы и псевдомассивы (18:40)
// algorithm for sorting an array with numeric values
//Алгоритм правильной сортировки массива с числовыми значениями.

let arr = [1,15,4],
    i = arr.sort(compareNum); //Передаем функцию внутрь метода, не вызываем ее.

function compareNum(a,b) {
    return a-b;
}

console.log(arr); // [ 1, 4, 15 ]
