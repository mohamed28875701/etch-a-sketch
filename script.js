const color=document.getElementById("color");
const rainbow=document.getElementById("rainbow");
const eraser=document.getElementById("eraser");
const clear=document.getElementById("clear");
const info=document.getElementById("inf");
const slide=document.getElementById("slide");
slide.addEventListener("mousemove",changeInfo);


function changeInfo(){
    info.textContent=`${slide.value} x ${slide.value}`;
}