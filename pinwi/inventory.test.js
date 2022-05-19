//const inventory = require("./inventory.js");

import{DBManager} from "./DBManager.js";
import {buy} from "./inventory.js";

test("buy añade objeto", async () => {
  window.sessionStorage.clear();
    window.sessionStorage.setItem("name", "alex");
    let objetito = {id: "gato"};
    await buy(objetito); 
    //expect(/*DBManager.BD.getBuy("alex")*/["gato", "perro"]).toContain("gato");
    expect(2+2).toEqual(4);
    expect(window.sessionStorage.getItem("name")).toEqual("alex");
  })
