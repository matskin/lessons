let menuItem = document.querySelectorAll('.menu-item'),
    title = document.querySelector('.title'),
    col = document.querySelectorAll('.column'),
    adv = document.querySelector('.adv')
    // menu = document.querySelector('.menu'),
    // text = document.createTextNode('Пятый пункт');

menuItem[1].textContent = 'Второй пункт';
menuItem[2].textContent = 'Третий пункт';

title.textContent = 'Мы продаем только подлинную технику Apple';

col[1].removeChild(adv);

// console.log(menu);

// menuItem[5] = document.createElement('li');
// menu.className = 'menu-item';
// menu.appendChild(text);

// console.log(menu);

// Нужно понять как вставить нужную html разметку в нужное место? 
