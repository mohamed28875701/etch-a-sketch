const color=document.getElementById("color");
const rainbow=document.getElementById("rainbow");
const eraser=document.getElementById("eraser");
const clear=document.getElementById("clear");
const info=document.getElementById("inf");
const slide=document.getElementById("slide");
const grid=document.querySelector(".grid");
slide.addEventListener("mousemove",changeInfo);
slide.onchange=()=>reSizeGrid(slide.value);
const gridElements=document.querySelectorAll(".grid-lement");
gridElements.onclick=()=>changeColor();
function changeColor(){
    gridElements.forEach(el=>function(){
        el.style.backgroundColor="red";
    })
}
let DEFAULT_SIZE=8;
function reSizeGrid(size){
    grid.innerHTML="";
    grid.style.gridTemplateColumns=`repeat(${size},1fr)`;
    grid.style.gridTemplateRows=`repeat(${size},1fr)`;
    setupGrid(size);
}
function changeInfo(){
    info.textContent=`${slide.value} x ${slide.value}`;
}
function setupGrid(size){
    for(let i=0;i!=size**2;i++){
        const gridElement=document.createElement("div");
        gridElement.classList.add("grid-element");
        grid.appendChild(gridElement);
    }
}
window.onload=()=>{
    reSizeGrid(DEFAULT_SIZE);
}