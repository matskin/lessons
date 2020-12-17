
// Второе задание

// let age = document.getElementById('age');
    
// function showUser(surname, name) {
//     alert("Пользователь " + surname + " " + name + ", его возраст " + this.value);
// }
    
// showUser.apply(age, ["Горький","Максим"]);
    
    
// ES6. let and const
let name = "Ivan",
    age = 30,
    mail = 'ex@gmail.com';

document.write(`Пользователю ${name} ${age} лет. Его почтовый адрес: ${mail}`);

function makeArray() {
    var items = [];

    for (let i = 0; i < 10; i++) {
        var item = function() {
            console.log(i);
        };
        items.push(item);
    }

    return items;
}

var arr = makeArray();

arr[1]();
arr[3]();
arr[7]();

let fun = () => {
        console.log(this);
};

fun();

let obj = {
    number: 5,
    sayNumber: function() {
        let say = () => {
            console.log(this);
        };
        say();
    }
};

obj.sayNumber();

let btn = document.querySelector('button');

btn.addEventListener('click', function() {
    let show = () => {
        console.log(this);
    };
    show();
});