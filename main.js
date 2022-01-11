let stars = document.getElementById('stars');
let moon = document.getElementById('moon');
let mountains3 = document.getElementById('mountains3');
let mountains4 = document.getElementById('mountains4');
let river = document.getElementById('river');
let boat = document.getElementById('boat');
let mountains7 = document.getElementById('mountains7');
let elskaan = document.querySelector('.main .elskaan');

window.onscroll = function () {
    document.body.style.transition = '.4s'
    let value = scrollY;
    stars.style.left = value + 'px';
    moon.style.top = value * 3 + 'px';
    mountains3.style.top = value * 2 + 'px';
    mountains4.style.top = value * 1.5 + 'px';
    river.style.top = value  + 'px';
    boat.style.top = value  + 'px';
    boat.style.left = value * 3 + 'px';
    elskaan.style.fontSize = value + 'px';
    if(scrollY >= 67) {
        elskaan.style.fontSize = 67 + 'px';
        elskaan.style.position = 'fixed';
        if(scrollY >= 323) {
            elskaan.style.display = 'none';
        }else {
            elskaan.style.display = 'block';
        }
        if(scrollY >= 140) {
            document.querySelector('.main').style.background = 'linear-gradient(#376281,#10001f)';
        }else {
            document.querySelector('.main').style.background = 'linear-gradient(#200016,#10001f)';
        }
    }
};