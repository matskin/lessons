// touchstart
// touchmove
// touchend
// touchenter
// touchleave
// touchcancel

window.addEventListener('DOMContentLoaded', function() {
    let box = document.querySelector('.box');

    box.addEventListener('touchstart', function(e) {
        e.preventDefault();
        console.log('Red box: touchstart');
    });

    box.addEventListener('touchmove', function(e) {
        e.preventDefault();
        console.log('Red box: touchmove');
    });

    box.addEventListener('touchend', function(e) {
        e.preventDefault();
        console.log('Red box: touchend');
    });

});

// lesson 2.28 bonus :-)