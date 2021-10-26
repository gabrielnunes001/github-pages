var $paragraph = document.querySelector('p');

$paragraph.textContent = "Test inserido via javascript";

var temp1 = document.getElementById("bar-top");

var body = document.getElementsByTagName("body");
var container = document.getElementsByClassName("container");
var bgimg = document.getElementsByClassName("bg-img");
// "-1em"
var testo = document.getElementById("testo");
var prevScrollpos = window.pageYOffset;
window.onscroll = function() {
var currentScrollPos = window.pageYOffset;
//   if (prevScrollpos > currentScrollPos) {
//     document.getElementById("navbar").style.top = "0";
//   } else {
//     document.getElementById("navbar").style.top = "-50px";
//   }
    if (window.pageYOffset <= 299) {
        bgimg[0].style.background = "rgba(51, 51, 51, " + (currentScrollPos/80)/3.725 + ")";
        bgimg[0].style.height = 22 - (currentScrollPos/16) + "em";
        container[0].style.margin = 2-(currentScrollPos/155) + "em";
        // container[0].style.width = 19 + (currentScrollPos/3) + "em";
        body[0].style.backgroundPositionY = (currentScrollPos/80)*-1 + "em";
        testo.innerHTML = currentScrollPos + " : " + body[0].style.backgroundPositionY;
        container[0].children[0].style.borderRadius = ".4em";
    } else {
        container[0].style.margin = "0em";
        // container[0].style.width = "100%";
        container[0].children[0].style.borderRadius = 0;
        bgimg[0].style.background = "rgba(51, 51, 51, 1)";
        bgimg[0].style.height = "3em";
    }
  prevScrollpos = currentScrollPos;
}