const MN = require("./main.js");
import { TestEnvironment } from "jest-environment-jsdom";
import{DBManager} from "./DBManager.js";

let db;
beforeEach(async ()=>{
    db = new DBManager() ;
    db.init()
    window.sessionStorage.clear();
    window.sessionStorage.setItem("name", "patata");
     //Inicializamos al usuario patata con los siguientes parametros
     await DBManager.BD.setCoins("patata",40);
     await DBManager.BD.setBuy("patata",[]);
     await DBManager.BD.setExp("patata",30);
     await DBManager.BD.setEquip("patata", ["gorro"]);
/*
     const Pinwi = document.getElementById("pinwi")
const Name = document.getElementById("name") AWAIT CONSEGUIDO
const head = document.getElementById("Head") 
const body = document.getElementById("Body")
const down = document.getElementById("Down")
const face = document.getElementById("Face")
const extra = document.getElementById("extra")
const money = document.getElementById("money")
const Lvl = document.getElementById("lvl")
const Exp = document.getElementById("exp") AWAIT CONSEGUIDO
*/
})

//import functions from main
import {dinero, pinwiFunction} from "./main.js";

test('prueba lvl y exp', async () => {
    expect(await DBManager.BD.getExp("patata")).toEquals(30);
    let lvl = Math.trunc(exp / 10)
    expect(lvl.toEquals(3))
    exp = exp % 10
    expect(exp.toEquals(0))
})

test('poner png correcto segun nivel ', async () =>{
    expect(await DBManager.BD.getExp("patata")).toEquals(30)
    let lvl = Math.trunc(exp / 10)
    expect(lvl.toEquals(3))
    expect(Pinwi.src.toEquals("./skin/pinwiBBF.png"))
})

test('prueba mostrar ropa equipada', async () => {
   expect(eqquiped[Parte].src.toEquals("./ropa/gorroF.png"))
})


test('dinero aumenta uno y lo actualiza', async () => {
   dinero()
   expect(await DBManager.BD.getCoins("patata").toEquals(41))
})

test('prueba funcion pinwi', async () => {
   pinwiFunction()
   expect(console.log.toEquals("BOING"))
})

	
