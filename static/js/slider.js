var imgs = document.querySelectorAll('.slider img');
var dots = document.querySelectorAll('.dot');
var currentImg = 3; // index of the first image
var nextImg = 1;
const interval = 5000; // duration(speed) of the slide

function changeSlide(n) {
  //for (var i = 0; i < imgs.length; i++) { // reset
  imgs[currentImg].style.opacity = 0;
  dots[currentImg].className = 'dot';
  //}	
  currentImg = n;

  imgs[currentImg].style.opacity = 1;
  dots[currentImg].className = 'dot active-img';
}
function AutoNext() {
  
  //console.log("Auto image swith")
  if(currentImg < imgs.length-1){
    var nextImg = currentImg+1
  }else{
    var nextImg= 0
  }
  changeSlide(nextImg)
  setTimeout(AutoNext, interval)
}
AutoNext()