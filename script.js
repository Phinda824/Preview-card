let time1 = document.getElementById('time-1');
let time2 = document.getElementById('time-2');
let time3 = document.getElementById('time-3');
let time4 = document.getElementById('time-4');

let cover = document.getElementById('cover');
let ingredients = document.getElementById('ingredients');
let link = document.getElementById('ingre-link');


time2.addEventListener('click', () => {
    time2.classList.add('current');
    time1.classList.remove('current');
    time3.classList.remove('current');
    time4.classList.remove('current');
})
time1.addEventListener('click', () => {
    time1.classList.add('current');
    time2.classList.remove('current');
    time3.classList.remove('current');
    time4.classList.remove('current');
})
time3.addEventListener('click', () => {
    time3.classList.add('current');
    time2.classList.remove('current');
    time1.classList.remove('current');
    time4.classList.remove('current');
})
time4.addEventListener('click', () => {
    time4.classList.add('current');
    time2.classList.remove('current');
    time3.classList.remove('current');
    time1.classList.remove('current');
})



