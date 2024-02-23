const date = new Date();
const year = date.getFullYear();

document.getElementById("year").innerHTML = year

var ul = document.querySelector('nav ul');
var menuBtn = document.querySelector('.menu-btn i');
var menuIcon = document.getElementById('menuIcon');

function menuShow() {
    if (ul.classList.contains('open')) {
        ul.classList.remove('open');
    } else {
        ul.classList.add('open');
    }

    menuIcon.classList.toggle('active');

}