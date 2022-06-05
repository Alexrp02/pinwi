//const inventory = require("./inventory.js");

// import{DBManager} from "./DBManager.js";
// import {buy,eat} from "./inventory.js"; 

const { JS_EXT_TO_TREAT_AS_ESM } = require("ts-jest")
const {buy, eat, db, equipH, equipB, equipD, equipF, unequipH, unequipB, unequipF,unequipD} = require("./inventory")
let database = db

beforeAll(async ()=>{
  database.init()
  window.sessionStorage.setItem('user', 'Prueba')
  database.setCoins('Prueba', 999)
})

test("buy añade objeto", async () => {
    
  let moneyOld = await database.getCoins('Prueba')
    await buy({
      id:'gorro',
      className:'aaaaaaaN',
      classList: {
        arr: [],
        add: function(variable) 
        {
          this.arr.push(variable);
        },
        remove: function(variable)
        {
          this.arr.pop(variable);
        }
      }
    })
    let itemPrice = await database.getItemPrice('gorro')
    expect(await database.getBuy('Prueba')).toContain('gorro')
    expect(await database.getCoins('Prueba')).toBe(moneyOld-itemPrice)
    console.log("buy ejecutado correctamente")
    
  })

  test("eat compra comida y alimenta a la mascota",async () => {
    let moneyOld = await database.getCoins('Prueba');
    let expOld = await database.getExp('Prueba');
    await eat({
      id:'burger',
      className:'aaaaaaaN',
      classList: {
        arr: [],
        add: function(variable) 
        {
          this.arr.push(variable);
        },
        remove: function(variable)
        {
          this.arr.pop(variable);
        }
      }
    })
    let moneyNew = await database.getCoins('Prueba');
    let expNew = await database.getExp('Prueba');
    expect(moneyOld-moneyNew).toEqual(await database.getItemPrice('burger'));
    let varia = expNew-expOld;
    expect(varia).toEqual(await database.getItemExp('burger'));

    console.log("eat ejecutado correctamente");
  })
/*
  test("comprobamos que los metodos equip() equipen los objetos", async () => {
    
    await database.setBuy("Prueba",["gorro","pajarita","chancla", "gafas"]); //Señalamos que estos objetos pertenecen al usuario
    await equipH(
    {
      id:'gorro',
      className:'aaaaaaaa',
      classList: {
        arr: [],
        add: function(variable) 
        {
          this.arr.push(variable);
        },
        remove: function(variable)
        {
          this.arr.pop(variable);
        }
      }
    });
    await equipB({
      id:'pajarita',
      className:'aaaaaaaN',
      classList: {
        arr: [],
        add: function(variable) 
        {
          this.arr.push(variable);
        },
        remove: function(variable)
        {
          this.arr.pop(variable);
        }
      }
    });
    await equipD({
      id:'chancla',
      className:'aaaaaaaN',
      classList: {
        arr: [],
        add: function(variable) 
        {
          this.arr.push(variable);
        },
        remove: function(variable)
        {
          this.arr.pop(variable);
        }
      }
    });
    await equipF({
      id:'gafas',
      className:'aaaaaaaN',
      classList: {
        arr: [],
        add: function(variable) 
        {
          this.arr.push(variable);
        },
        remove: function(variable)
        {
          this.arr.pop(variable);
        }
      }
    });
    
    expect(await database.getEquipped('Prueba').Head).toBe('gorro'); //Esperamos que equipH() haya equipado el objeto
    expect(await database.getEquipped('Prueba')).toBe("pajarita"); //Esperamos que equipB() haya equipado el objeto
    expect(await database.getEquipped('Prueba')).toBe("chancla"); //Esperamos que equipD() haya equipado el objeto
    expect(await database.getEquipped('Prueba')).toBe("gafas"); //Esperamos que equipF() haya equipado el objeto
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
*/




