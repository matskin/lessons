// Используя только файл скрипта (html руками не трогать) выполнить такие действия:
// - Восстановить порядок в меню, добавить пятый пункт
// - Заменить картинку заднего фона на другую из папки img
// - Поменять заголовок, добавить слово "подлинную" ( Получится - "Мы продаем только подлинную технику Apple")
// - Удалить рекламу со страницы 
// - Спросить у пользователя отношение к технике apple и записать ответ в блок на странице с id "prompt"

let menuItem = document.querySelectorAll('.menu-item'),
    li = document.createElement('li'),
    text = document.createTextNode('Пятый пункт'),
    menu = document.querySelector('.menu'),
    title = document.querySelector('.title'),
    col = document.querySelectorAll('.column'),
    adv = document.querySelector('.adv'),
    blockPrompt = document.querySelector('.prompt');
    
menuItem[1].textContent = 'Второй пункт';
menuItem[2].textContent = 'Третий пункт';

li.classList.add('menu-item');
li.appendChild(text);
menu.appendChild(li);

document.body.style.backgroundImage = 'url(../img/apple_true.jpg)';

title.textContent = 'Мы продаем только подлинную технику Apple';

col[1].removeChild(adv);

let answer = prompt('Как вы относитесь к технике Apple?', 'Ваш ответ');

blockPrompt.textContent = answer;

// Все задания выполнены!

