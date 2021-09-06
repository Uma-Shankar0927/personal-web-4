const header = document.getElementById('header');
const toggle = document.getElementById('toggle');
const navbar = document.getElementById('navbar');

document.onclick = function (e) {
    if (e.target.id !== 'header' && e.target.id !== 'toggle' && e.target.id !== 'navbar') {
        toggle.classList.remove('active');
        navbar.classList.remove('active');
    }
}
toggle.onclick = function () {
    toggle.classList.toggle('active');
    navbar.classList.toggle('active');
}

// ---------scrolltop---------
// window.scroll({
//     top:0,
//     left:0,
//     behavior: 'smooth'
// });
// window.scroll({
//     top:0,
//     left:0,
//     behavior:'smooth'
// });

let btncl = document.getElementById('btnjs');
        btncl.addEventListener('click', function run(){
        confirm("Do you want to download the source code pdf?");
        });
