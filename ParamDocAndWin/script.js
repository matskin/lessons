let box = document.querySelector('.box');
    btn = document.querySelector('button');

let width = box.clientWidth,
    height =box.clientHeight;

console.log(width);
console.log(height);
console.log(box.getBoundingClientRect());

console.log(document.documentElement.clientWidth);
console.log(document.documentElement.clientHeight);
console.log(document.documentElement.scrollTop);

btn.addEventListener('click', function() {
    box.style.height = box.scrollHeight + 'px';
});

scrollBy(0, 200);
scrollTo(0, 200);