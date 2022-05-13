// const notBought = document.getElementsByClassName("boxNB")
import { DBManager } from './DBManager.js';
// const bought = document.getElementsByClassName("boxB")

const gorro = document.getElementById("gorro")
const g = document.getElementById("gorro")
const naruto = document.getElementById("naruto")
const mario = document.getElementById("mario")
const cumple = document.getElementById("cumple")
const pajarita = document.getElementById("pajarita")
const cadena = document.getElementById("cadena")
const betis = document.getElementById("betis")
const traje = document.getElementById("traje")
const chancla = document.getElementById("chanclas")
const gato = document.getElementById("gato")
const amogus = document.getElementById("amogus")
const tortu = document.getElementById("tortu")
const sandia = document.getElementById("sandia")
const pescao = document.getElementById("pescao")
const burgir = document.getElementById("burgir")
const gafas = document.getElementById("gafas")

const b1 = document.getElementById("b1")
const b2 = document.getElementById("b2")
const b3 = document.getElementById("b3")
const b4 = document.getElementById("b4")

const items = document.getElementsByClassName("box")


var head = true
var body = true
var face = true
var d = true
var mon
var exp

var username = sessionStorage.getItem("username")
const db = new DBManager();
var equipped
var comprado

db.init();

window.onload = async function(){

    const comprados = await db.getComprados(username) 
    comprado = comprados
    console.log(comprados)

    comprados.forEach(element => {
        console.log(element)
        document.getElementById(element).classList.add("boxB")
        document.getElementById(element).classList.remove("boxNB")
    });

    const equipados = await db.getEquipados(username)
    console.log(equipados)

    equipped = equipados
    for (var Parte in equipados){
        document.getElementById(equipados[Parte]).classList.add("boxSel")
    }
    
    mon = await db.getCoins(username)
    exp = await db.getExp(username)

    money.innerHTML = mon + "€"
}

gorro.addEventListener("click", function () {
    buy(gorro);
});
gorro.addEventListener("click", function () {
    equipH(gorro);
});
naruto.addEventListener("click", function () {
    buy(naruto);
});
naruto.addEventListener("click", function () {
    equipH(naruto);
});
mario.addEventListener("click", function () {
    buy(mario);
});
mario.addEventListener("click", function () {
    equipH(mario);
});
cumple.addEventListener("click", function () {
    buy(cumple);
});
cumple.addEventListener("click", function () {
    equipH(cumple);
});
pajarita.addEventListener("click", function () {
    buy(pajarita);
});
pajarita.addEventListener("click", function () {
    equipB(pajarita);
});
cadena.addEventListener("click", function () {
    buy(cadena);
});
cadena.addEventListener("click", function () {
    equipB(cadena);
});
betis.addEventListener("click", function () {
    buy(betis);
});
betis.addEventListener("click", function () {
    equipB(betis);
});
traje.addEventListener("click", function () {
    buy(traje);
});
traje.addEventListener("click", function () {
    equipB(traje);
});
chancla.addEventListener("click", function () {
    buy(chancla);
});
chancla.addEventListener("click", function () {
    equipD(chancla);
});
gato.addEventListener("click", function () {
    buy(gato);
});
gato.addEventListener("click", function () {
    equipD(gato);
});
amogus.addEventListener("click", function () {
    buy(amogus);
});
amogus.addEventListener("click", function () {
    equipD(amogus);
});
tortu.addEventListener("click", function () {
    buy(tortu);
});
tortu.addEventListener("click", function () {
    equipD(tortu);
});
sandia.addEventListener("click", function () {
    eat(sandia);
});
pescao.addEventListener("click", function () {
    eat(pescao);
});
burgir.addEventListener("click", function () {
    eat(burgir);
});
gafas.addEventListener("click", function () {
    buy(gafas);
});
gafas.addEventListener("click", function () {
    equipF(gafas);
});
b1.addEventListener("click", function () {
    equipH(b1);
})
b2.addEventListener("click", function () {
    equipB(b2);
})
b3.addEventListener("click", function () {
    equipD(b3);
})
b4.addEventListener("click", function () {
    equipF(b4);
})

async function buy(obj){
    console.log("ola")
    //if tengo dinero lo compro
    obj.classList.add("boxB")
    obj.classList.remove("boxNB")
    if (!comprado.includes(obj.id)){comprado.push(obj.id)}
    console.log(comprado)
    db.setComprados(username, comprado)
}

async function equipH(obj){
    if(head==true){
        unequipH()
    }
    obj.classList.add("boxSel")
    head=true
    equipped.Cabeza = obj.id
    await db.setEquipar(username, equipped)
}

async function equipB(obj){
    if(body==true){
        unequipB()
    }
    obj.classList.add("boxSel")
    body=true
    equipped.Cuerpo = obj.id
    await db.setEquipar(username, equipped)
}

async function equipD(obj){
    if(d==true){
        unequipD()
    }
    obj.classList.add("boxSel")
    d=true
    equipped.Pies = obj.id
    await db.setEquipar(username, equipped)
}

async function equipF(obj){
    if(face==true){
        unequipF()
    }
    obj.classList.add("boxSel")
    face=true
}

function unequipH(){
    head=false
    g.classList.remove("boxSel")
    naruto.classList.remove("boxSel")
    mario.classList.remove("boxSel")
    cumple.classList.remove("boxSel")
    b1.classList.remove("boxSel")
}

function unequipB(){
    body=false
    pajarita.classList.remove("boxSel")
    cadena.classList.remove("boxSel")
    betis.classList.remove("boxSel")
    traje.classList.remove("boxSel")
    b2.classList.remove("boxSel")
}
function unequipD(){
    d=false
    chancla.classList.remove("boxSel")
    gato.classList.remove("boxSel")
    amogus.classList.remove("boxSel")
    tortu.classList.remove("boxSel")
    b3.classList.remove("boxSel")
}
function unequipF(){
    face=false
    gafas.classList.remove("boxSel")
    b4.classList.remove("boxSel")
}


async function eat(obj) {
    let objN = obj.id
    let precio = await db.getItemPrice(objN)
    let itemExp = await db.getItemExp(objN)

    if (mon >= precio && obj.className[7] == 'N') {
        obj.classList.add("boxB")
        obj.classList.remove("boxNB")
        mon = mon - precio
        exp += itemExp
        money.innerHTML = mon + "€"
        await db.setCoins(username, mon)
        await db.setExp(username, exp)
        setTimeout(() => { obj.classList.add("boxNB") }, 1000);
        setTimeout(() => { obj.classList.remove("boxB") }, 1000);

    }
}


