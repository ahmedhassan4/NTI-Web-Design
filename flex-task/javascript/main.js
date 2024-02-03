
// scroll up
let DBtn = document.querySelector(".scroll-up");
let btn = document.querySelector(".scroll-btn");
let icn = document.querySelector("button i");

let hb = document.querySelector("header");
let border = document.querySelector(".container .nav-bar");
let logo = document.querySelector(".container .nav-bar h1");


window.onscroll = function(){
    if(window.scrollY >=200){
        DBtn.style.display = "block";
        if(window.scrollY >=300){
            hb.style.backgroundColor = "#161616";
            border.style.borderBottom ="none";
            logo.style.margin = "10px 0";
        }
        else{
            hb.style.backgroundColor = "transparent";
            logo.style.margin = "0.67em 0";
        }
        if(window.scrollY >= 1180){
            btn.style.backgroundColor = "white";
            icn.style.color = "black";
        }
        else{
            btn.style.backgroundColor = "hsl(0deg 0% 9% / 68%)";
        }
    }
    else{
        DBtn.style.display = "none";
    }
}

DBtn.onclick = function () {
window.scrollTo({
    left: 0,
    top: 0,
    behavior: "smooth",
});
};





