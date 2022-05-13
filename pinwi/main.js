import {DBManager} from './DBManager.js';


const Pinwi = document.getElementById("pinwi")
const Name = document.getElementById("name")
const Head = document.getElementById("head")
const body = document.getElementById("body")
const d = document.getElementById("d")
const face = document.getElementById("face")
const Ropa = document.getElementById("roro")
const money = document.getElementById("money")
const Lvl = document.getElementById("lvl")
const Exp = document.getElementById("exp")

const db = new DBManager();
db.init();


var lvl= 0   
var initWidth = Pinwi.clientWidth
var cont= 0
var user =sessionStorage.getItem("username")
var pet = sessionStorage.getItem("name")

var mon = await db.getCoins(user)
var exp = await db.getExp(user)

lvl=Math.trunc(exp/10)
exp=exp%10;

money.innerHTML= mon +"€"
Lvl.innerHTML = "LVL "+ lvl
Exp.innerHTML = exp + " EXP"
Name.innerHTML= pet

var username = sessionStorage.getItem("username")

const equipados = await db.getEquipados(username)
    console.log(equipados)

    for (var Parte in equipados){
        document.getElementById(Parte).src = "./ropa/" + equipados[Parte] + "F.png"
    }


switch (lvl){
    case 0: break
    case 1: Pinwi.src="./skin/huevoRotoF.png"; break;
    case 2: Pinwi.src = "./skin/pinwiBBF.png"; break;
    default: Pinwi.src = "./skin/pinwiAdulF.png"; break;
}

Pinwi.addEventListener("click", pinwiFunction) 
Head.addEventListener("click", pinwiFunction) 
body.addEventListener("click", pinwiFunction) 
d.addEventListener("click", pinwiFunction) 
face.addEventListener("click", pinwiFunction) 
Ropa.addEventListener("click", dinero) 


async function dinero(){
    mon++
    money.innerHTML=mon+"€"
    await db.setCoins(user, mon)
}




function pinwiFunction () {
    // console.log(pinwiclicked)
    let currWidth = Pinwi.clientWidth
    console.log(currWidth)

    Pinwi.style.width = (initWidth*1.05) + "px"
    Head.style.width = (initWidth*1.05) + "px"
    body.style.width = (initWidth*1.05) + "px"
    d.style.width = (initWidth*1.05) + "px"
    face.style.width = (initWidth*1.05) + "px"
    setTimeout(() => {  Pinwi.style.width = initWidth + "px"; }, 150);
    setTimeout(() => {  Head.style.width = initWidth + "px"; }, 150);
    setTimeout(() => {  body.style.width = initWidth + "px"; }, 150);
    setTimeout(() => {  d.style.width = initWidth + "px"; }, 150);
    setTimeout(() => {  face.style.width = initWidth + "px"; }, 150);

    console.log("BOING")
}
