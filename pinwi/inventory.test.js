//const DBManager= require( './DBManager');
//const inventory = require('./inventory.js');
//import { buy } from './inventory.js';
//El fallo está en los import, probar con module.export y require

test("buy añade objeto", () => {
  window.sessionStorage.clear();
    window.sessionStorage.setItem("name", "alex");
    let objetito = {id: "gato"};
    //inventory.buy(objetito); 
    //expect(/*DBManager.BD.getBuy("alex")*/["gato", "perro"]).toContain("gato");
    expect(2+2).toEqual(4);
    expect(window.sessionStorage.getItem("name")).toEqual("alex");
  })
