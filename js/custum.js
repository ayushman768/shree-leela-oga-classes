var nav = document.getElementById("MyNav");
var sticky = nav.offsetTop;

function myFunction() {

    if (window.pageYOffset > sticky) {
        nav.classList.add('sticky');
    } else {
        nav.classList.remove('sticky');
    }
}

function navbtn() {

    var navigation = document.querySelector('.shree-leela-yoga-navigation');
    if (navigation.style.display === "none") {
        navigation.style.display = "block";
    } else {
        navigation.style.display = "none";
    }
}