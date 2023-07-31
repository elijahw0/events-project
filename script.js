let aquaButton = document.getElementById("aqua");
let tealButton = document.getElementById("teal");
let pinkButton = document.getElementById("pink");
let purpleButton = document.getElementById("purple");
let colorlessButton = document.getElementById("colorless");
let colorSelected = document.getElementById("color-display");
let hide = document.getElementById("hide");
aquaButton.onclick = function(){
    colorSelected.style.backgroundColor = "aqua";
    colorSelected.innerHTML ="aqua";
}
tealButton.onclick = function (){
    colorSelected.style.backgroundColor = "teal";
    colorSelected.innerHTML = "teal";
}
pinkButton.onclick = function(){
    colorSelected.style.backgroundColor = "pink";
    colorSelected.innerHTML ="pink";
}
purpleButton.onclick = function (){
    colorSelected.style.backgroundColor = "purple";
    colorSelected.innerHTML = "purple";
}
colorlessButton.onclick = function (){
    colorSelected.style.backgroundColor = "white";
    colorSelected.innerHTML = "colorless";
}
hide.onclick = function(){
    if(colorSelected.style.opacity == 1){
    colorSelected.style.opacity = 0;
    hide.innerHTML= "show";
    
    }
    else {
        hide.innerHTML = "hide";
        colorSelected.style.opacity = 1;

    }
}
let random = document.getElementById("random");
random.onclick = function(){
    let r = Math.floor(Math.random() *5);
    if(r == 0){
        colorSelected.style.backgroundColor = "aqua";
    }
    else if (r == 1){
        colorSelected.style.backgroundColor = "teal";
    }
    else if (r == 2){
        colorSelected.style.backgroundColor = "pink";
    }
    else if (r == 3){
        colorSelected.style.backgroundColor = "purple";
    }
    else{
        colorSelected.style.backgroundColor = "white";
    }
}