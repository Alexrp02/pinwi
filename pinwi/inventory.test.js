import { DBManager } from './DBManager.js';
//import { buy } from './inventory.js';
//El fallo está en los import, probar con module.export y require

test("buy añade objeto", () => {
    window.sessionStorage.setItem("name", "alex");
    let objetito = {id: "gato"};
    //buy(objetito); 
    expect(DBManager.BD.getBuy("alex")).toContain("gato");
  })
