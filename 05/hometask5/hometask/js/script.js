let menuItem = document.querySelectorAll('.menu-item'),
    title = document.querySelector('.title'),
    menu = document.querySelector('.menu'),
    text = document.createTextNode('Пятый пункт')
    col = document.querySelectorAll('.column'),
    adv = document.querySelector('.adv');

menuItem[1].textContent = 'Второй пункт';
menuItem[2].textContent = 'Третий пункт';

title.textContent = 'Мы продаем только подлинную технику Apple';

// menu = document.createElement('li');
// menu.className = 'menu-item';
// menu.appendChild(text);

// console.log(menu-item[5]);  // Есть непонимание, нужно разобраться

// document.col.removeChild(adv); // Нужно разобраться с DOM более досконально