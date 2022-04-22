const Tienda = document.getElementById("tienda")
const Menu = document.getElementById("slidingmenu")
const Pinwi = document.getElementById("pinwi")

var clicked = 0;
var pinwiclicked = 0

Tienda.addEventListener("click", () =>{
    console.log("tienda clicked!")
    if(clicked===0){
    Menu.classList.remove("hidden")
    clicked=1;
}else{
    Menu.classList.add("hidden")
    clicked=0
}
}, false)

Pinwi.addEventListener("click", makeTextDance) 

function makeTextDance () {
    console.log(pinwiclicked)
    let Name = document.getElementById("name")
    if(!pinwiclicked) {
        Name.style.animation = "sizing 1s ease-in-out 0s infinite alternate"
        pinwiclicked=1
    }else{
        Name.style.removeProperty("animation")
        pinwiclicked=0
    } 
        
    
    
}
