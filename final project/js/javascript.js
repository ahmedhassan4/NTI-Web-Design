let DBtn = document.querySelector(".scroll-up");
let btn = document.querySelector(".scroll-btn");
let icn = document.querySelector("button i");


var navbar = document.getElementById("navbar");
var sticky = navbar.offsetTop;


window.onscroll = function(){

  if(window.scrollY >=200){
      DBtn.style.display = "block";
      }
      else{
          DBtn.style.display = "none";
      }
      if (window.pageYOffset >= sticky) {
          navbar.classList.add("sticky")
        } else {
          navbar.classList.remove("sticky");
        }

        if (window.scrollY >=800) {
          play()
        }
        if (window.scrollY >=700) {
          play2()
        }
}


DBtn.onclick = function () {
window.scrollTo({
    left: 0,
    top: 0,
    behavior: "smooth",
});
};



// progress 
  let progressBar = document.querySelector(".circular-progress");
  let valueContainer = document.querySelector(".value-con-circle");
  
  
  function play() {
      let progressValue = 0;
      let progressEndValue = 70;
      let speed = 10;
      let progress = setInterval(() => {
          progressValue++;
          valueContainer.textContent = `${progressValue}%`;
          progressBar.style.background = `conic-gradient(
              #4d5bf9 ${progressValue * 3.6}deg,
              transparent ${progressValue * 3.6}deg
          )`;
          if (progressValue == progressEndValue) {
            clearInterval(progress);
          }
        }, speed);
  }
  


  // first progress

  let firstprogressBar = document.querySelector(".first-circular-progress");
  let firstvalueContainer = document.querySelector(".first-value-con-circle");
  
  function play2() {
      let firstprogressValue = 0;
  let firstprogressEndValue = 65;
  let firstspeed = 10;
  
  let firstprogress = setInterval(() => {
    firstprogressValue++;
    firstvalueContainer.textContent = `${firstprogressValue}%`;
    firstprogressBar.style.background = `conic-gradient(
        #4d5bf9 ${firstprogressValue * 3.6}deg,
        transparent ${firstprogressValue * 3.6}deg
    )`;
    if (firstprogressValue == firstprogressEndValue) {
      clearInterval(firstprogress);
    }
  }, firstspeed);
  }
  

  // second progress

  let secprogressBar = document.querySelector(".second-circular-progress");
  let secvalueContainer = document.querySelector(".second-value-con-circle");
  
  let secprogressValue = 0;
  let secprogressEndValue = 92;
  let secspeed = 10;
  
  let secprogress = setInterval(() => {
    secprogressValue++;
    secvalueContainer.textContent = `${secprogressValue}%`;
    secprogressBar.style.background = `conic-gradient(
        #4d5bf9 ${secprogressValue * 3.6}deg,
        transparent ${secprogressValue * 3.6}deg
    )`;
    if (secprogressValue == secprogressEndValue) {
      clearInterval(secprogress);
    }
  }, secspeed);

  // third

  let thirdprogressBar = document.querySelector(".third-circular-progress");
  let thirdvalueContainer = document.querySelector(".third-value-con-circle");
  
  let thirdprogressValue = 0;
  let thirdprogressEndValue = 85;
  let thirdspeed = 10;
  
  let thirdprogress = setInterval(() => {
    thirdprogressValue++;
    thirdvalueContainer.textContent = `${thirdprogressValue}%`;
    thirdprogressBar.style.background = `conic-gradient(
        #4d5bf9 ${thirdprogressValue * 3.6}deg,
        transparent ${thirdprogressValue * 3.6}deg
    )`;
    if (thirdprogressValue == thirdprogressEndValue) {
      clearInterval(thirdprogress);
    }
  }, thirdspeed);


  let lis = document.querySelectorAll(".p-color .colors span");
  let exp = document.querySelector(".experiment");
  
  if (window.localStorage.getItem("color")) {
    exp.style.backgroundColor = window.localStorage.getItem("color");
    lis.forEach((li) => {
      li.classList.remove("active");
    });
    document.querySelector(`[data-color="${window.localStorage.getItem("color")}"]`).classList.add("active");
  }
  
  lis.forEach((li) => {
    li.addEventListener("click", (e) => {
      lis.forEach((li) => {
        li.classList.remove("active");
      });
      e.currentTarget.classList.add("active");
      window.localStorage.setItem("color", e.currentTarget.dataset.color);
      exp.style.backgroundColor = e.currentTarget.dataset.color;
    });
  });