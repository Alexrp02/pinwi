const Tienda = document.getElementById("tienda")
const Menu = document.getElementById("slidingmenu")
const Pinwi = document.getElementById("pinwi")
const Name = document.getElementById("name")
// const Name = document.getElementById("name")


const pinwiRect = Pinwi.getBoundingClientRect()
const nameRect = Name.getBoundingClientRect()

// var clicked = 0
// var pinwiclicked = 0
var exp = 0
var initWidth = Pinwi.clientWidth
// Name.addEventListener("animationiteration", ()=>{
//     if (!pinwiclicked) {
//         console.log("Iteration end!")
//         Name.style.removeProperty("animation")
//     }
// })

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

Pinwi.addEventListener("click", pinwiFunction) 

function pinwiFunction () {
    // console.log(pinwiclicked)
    let nameRect = Name.getBoundingClientRect()
    let pinwiRect = Pinwi.getBoundingClientRect()
    exp++
    let Exp = document.getElementById("exp")
    let currWidth = Pinwi.clientWidth
    console.log(currWidth)
    if(currWidth <= 600) {
        Pinwi.style.width = (initWidth + exp*10) + "px"
        if(pinwiRect.y <= nameRect.y+nameRect.height){
            console.log("Collision!")
            Name.style.top = (Name.offsetTop - 10) + "px"
        }
    }
    console.log(nameRect.top)

    Exp.innerHTML = exp + " EXP"

    // if(!pinwiclicked) {
    //     Name.style.animation = "sizing 1s ease-in-out 0s infinite alternate"
    //     pinwiclicked=1
    // }else{
    //     pinwiclicked=0
    // } 
        
    
    
}
