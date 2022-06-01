//const inventory = require("./inventory.js");

// import{DBManager} from "./DBManager.js";
// import {buy,eat} from "./inventory.js"; 

const {buy, eat} = require("./inventory.js")
// const eat = require("./inventory.js")

// beforeEach(async ()=>{
//   window.sessionStorage.clear();
//   window.sessionStorage.setItem("name", "alex");
//   //Inicializamos al usuario alex con los siguientes parametros
//   await DBManager.BD.setCoins("alex",55);
//   await DBManager.BD.setBuy("alex",[]);
//   await DBManager.BD.setExp("alex",0);
//   await DBManager.BD.setEquip("alex", []);
// })

test("buy añade objeto", async () => {
    let obj = {id: "gato"};//identificamos el objeto que deseamos comprar de la base de datos
    // let moneyOld =await DBManager.BD.getCoins("alex");
    // await buy(obj); 
    expect(await buy(obj)).toBe(2)
    // expect(await DBManager.BD.getBuy("alex")).toContain("gato"); //Esperamos que buy() haya añadido el objeto al inventario de usuario
    // expect(await DBManager.BD.getCoins("alex")).toEquals(moneyOld-(await DBManager.BD.getItemPrice("gato"))); //Esperamos que buy() haya modificado el dinero de usuario(decrementandolo de acuerdo al precio del producto)
    
  })

  test("eat compra comida y alimenta a la mascota",async () => {
    // let moneyOld = await DBManager.BD.getCoins("alex");
    // let expOld = await DBManager.BD.getExp("alex");
    let food = {id: "sandia"};
    // await eat(food);
    // expect(await DBManager.BD.getCoins("alex")).toEquals(moneyOld-(await DBManager.BD.getItemPrice("sandia"))); //Esperamos que eat() haya modificado el dinero de usuario(decrementandolo de acuerdo al precio del producto)
    // expect(await DBManager.BD.getExp("alex")).toEquals(expOld + (await DBManager.BD.getItemExp("sandia"))); //Esperamos que eat() haya modificado la experiencia del usuario (incrementandola de acuerdo a la experiencia asociada al producto)
    expect(await eat(food)).toBe(2)
  })

  test("comprobamos que los metodos equip() equipen los objetos", async () => {
    let cosmeticH = {id: "gorro"};
    let cosmeticB = {id: "pajarita"};
    let cosmeticD = {id: "chancla"};
    let cosmeticF = {id: "gafas"};
    await DBManager.BD.setBuy("alex",["gorro","pajarita","chancla", "gafas"]); //Señalamos que estos objetos pertenecen al usuario
    await DBManager.BD.equipH("gorro");
    await DBManager.BD.equipB("pajarita");
    await DBManager.BD.equipD("chancla");
    await DBManager.BD.equipF("gafas");
    expect(await DBManager.BD.getEquipped("alex")).toContain("gorro"); //Esperamos que equipH() haya equipado el objeto
    expect(await DBManager.BD.getEquipped("alex")).toContain("pajarita"); //Esperamos que equipB() haya equipado el objeto
    expect(await DBManager.BD.getEquipped("alex")).toContain("chancla"); //Esperamos que equipD() haya equipado el objeto
    expect(await DBManager.BD.getEquipped("alex")).toContain("gafas"); //Esperamos que equipF() haya equipado el objeto
})

test("comprobamos que los metodos unequip() quiten los objetos anteriormente equipados a la mascota", async () => {
  let cosmeticH = {id: "gorro"};
  let cosmeticB = {id: "pajarita"};
  let cosmeticD = {id: "chancla"};
  let cosmeticF = {id: "gafas"};

  await DBManager.BD.setBuy("alex",["gorro","pajarita","chancla", "gafas"]); //Señalamos que estos objetos pertenecen al usuario
  await DBManager.BD.setEquip("alex",["gorro","pajarita","chancla", "gafas"]); //Señalamos que los objetos estan equipados a la mascota
  
  //Quitamos el equipamiento a la mascota
  await DBManager.BD.unequipH();
  await DBManager.BD.unequipB();
  await DBManager.BD.unequipD();
  await DBManager.BD.unequipF();

  expect(await DBManager.BD.getEquipped("alex")).not.toContain("gorro"); //Esperamos que unequipH() haya quitado los objetos de la cabeza
  expect(await DBManager.BD.getEquipped("alex")).not.toContain("pajarita"); //Esperamos que unequipB() haya quitado los objetos del cuerpo
  expect(await DBManager.BD.getEquipped("alex")).not.toContain("chancla"); //Esperamos que unequipD() haya quitado los objetos de los pies
  expect(await DBManager.BD.getEquipped("alex")).not.toContain("gafas"); //Esperamos que unequipF() haya quitado los objetos de la cara
})





