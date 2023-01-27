const color=document.getElementById("color");
const rainbow=document.getElementById("rainbow");
const eraser=document.getElementById("eraser");
const clear=document.getElementById("clear");
const info=document.getElementById("inf");
const slide=document.getElementById("slide");
const grid=document.querySelector(".grid");
slide.addEventListener("mousemove",changeInfo);
slide.onchange=()=>reSizeGrid(slide.value);

const DEFAULT_SIZE=8;
const DEFAULTMODE="color";
let currentMode;
let currentColor;
function reSizeGrid(size){
    grid.innerHTML="";
    grid.style.gridTemplateColumns=`repeat(${size},1fr)`;
    grid.style.gridTemplateRows=`repeat(${size},1fr)`;
    setupGrid(size);
}
function changeInfo(){
    info.textContent=`${slide.value} x ${slide.value}`;
}
function changeColor(e){
    e.target.style.backgroundColor="black";
}
function setupGrid(size){
    for(let i=0;i!=size**2;i++){
        const gridElement=document.createElement("div");
        gridElement.classList.add("grid-element");
        gridElement.addEventListener("mouseover",changeColor);
        grid.appendChild(gridElement);
    }
}
window.onload=()=>{
    reSizeGrid(DEFAULT_SIZE);
}