let drink =0;

function shoot(arrow) {
    console.log('Вы сделали выстрел...');

    let promise = new Promise(function(resolve, reject) {
        setTimeout(function() {
            Math.random() > .5 ? resolve({}) : reject('Вы промахнулись');
        }, 3000);
    });
    
    return promise;

};

function win() {
    console.log('Вы победили!');
    (drink == 1) ? buyBeer() : giveMoney();
}

function buyBeer() {
    console.log('Вам купили пиво!');
}

function giveMoney() {
    console.log('Вам заплатили!');
}

function loose() {
    console.log('Вы проиграли!');
}

shoot({})
        .then(mark => console.log('Вы попали в цель!'))
        .then(win)
        .catch(loose)


// Promise Constructor
const promise1 = new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve('foo');
    }, 300);
  });
  ​
  promise1.then((value) => {
    console.log(value);
    // expected output: "foo"
  
  });
  
  ​console.log(promise1);
  // expected output: [object Promise]
  ​

// Простой пример
let myFirstPromise = new Promise((resolve, reject) => {
    // Мы вызываем resolve(...), когда асинхронная операция завершилась успешно, и reject(...), когда она не удалась.
    // В этом примере мы используем setTimeout(...), чтобы симулировать асинхронный код.
    // В реальности вы, скорее всего, будете использовать XHR, HTML5 API или что-то подобное.
    setTimeout(function(){
      resolve("Success!"); // Ура! Всё прошло хорошо!
    }, 250);
  });
  
  myFirstPromise.then((successMessage) => {
    // successMessage - это что угодно, что мы передали в функцию resolve(...) выше.
    // Это необязательно строка, но если это всего лишь сообщение об успешном завершении, это наверняка будет она.
    console.log("Ура! " + successMessage);
  });


// Продвинутый пример
<button id="btn">Создать Promise!</button>
<div id="log"></div>

