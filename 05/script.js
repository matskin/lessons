let box = document.getElementById('box'),
    btn = document.getElementsByTagName('button'),
    circle = document.getElementsByClassName('circle'),
    heart = document.querySelectorAll('.heart'),
    oneHeart = document.querySelector('.heart');

    box.style.backgroundColor = 'blue';
    btn[1].style.borderRadius = '100%';

    circle[0].style.backgroundColor = 'red';
    circle[1].style.backgroundColor = 'yellow';
    circle[2].style.backgroundColor = 'green';

    // for (let i = 0; i < heart.length; i++) {
    //     heart[i].style.backgroundColor = 'blue';
    // }

    // heart.forEach(function(item) {
    //     item.style.backgroundColor = 'green';
    // });

    let div = document.createElement('div'),
        text = document.createTextNode('Тут был Ваня');

    div.classList.add('black');

    document.body.appendChild(div);
