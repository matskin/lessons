let menuItem = document.querySelectorAll('.menu-item'),
    li = document.createElement('li'),
    text = document.createTextNode('Пятый пункт'),
    menu = document.querySelector('.menu'),
    title = document.querySelector('.title'),
    col = document.querySelectorAll('.column'),
    adv = document.querySelector('.adv');
    
menuItem[1].textContent = 'Второй пункт';
menuItem[2].textContent = 'Третий пункт';

li.classList.add('menu-item');
li.appendChild(text);
menu.appendChild(li);

document.body.style.backgroundImage = 'url(../img/apple_true.jpg)';

title.textContent = 'Мы продаем только подлинную технику Apple';

col[1].removeChild(adv);

// Спросить у пользователя отношение к технике apple и записать ответ в блок на странице с id "prompt"

