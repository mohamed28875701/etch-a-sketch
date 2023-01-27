const color=document.getElementById("color");
const rainbow=document.getElementById("rainbow");
const eraser=document.getElementById("eraser");
const clear=document.getElementById("clear");
const info=document.getElementById("inf");
const slide=document.getElementById("slide");
const grid=document.querySelector(".grid");
const colors=document.getElementById("colors");
slide.addEventListener("mousemove",changeInfo);
slide.onchange=()=>reSizeGrid(slide.value);
colors.addEventListener("input",setCurrentColor);
color.addEventListener("click",setCurrentMod);
rainbow.addEventListener("click",setCurrentMod);
eraser.addEventListener("click",setCurrentMod);
clear.addEventListener("click",()=> {
    grid.innerHTML="";
    setupGrid(slide.value);
});
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
console.log(currentColor);
function changeInfo(){
    info.textContent=`${slide.value} x ${slide.value}`;
}
function changeColor(e){
    if(currentMode==="color"){
        e.target.style.backgroundColor=currentColor;
    }
    if(currentMode==="rainbow"){
        let randomR=Math.floor(Math.random()*256);
        let randomG=Math.floor(Math.random()*256);
        let randomB=Math.floor(Math.random()*256);
        e.target.style.backgroundColor=`rgb(${randomR},${randomG},${randomB})`;
    }
    if(currentMode==="eraser"){
        e.target.style.backgroundColor="aliceblue";
    }
}
function setupGrid(size){
    for(let i=0;i!=size**2;i++){
        const gridElement=document.createElement("div");
        gridElement.classList.add("grid-element");
        gridElement.addEventListener("mouseover",changeColor);
        grid.appendChild(gridElement);
    }
}
function setCurrentMod(e){
    currentMode=e.target.id;
}
function setCurrentColor(e){
    currentColor=e.target.value;
}
window.onload=()=>{
    reSizeGrid(DEFAULT_SIZE);
}