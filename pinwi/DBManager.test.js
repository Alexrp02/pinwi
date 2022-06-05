/**
 * @jest-environment node
 */
//Hemos creado un usuario llamado 'Prueba' para poder probar todos los métodos de la base de datos

import  DBManager  from './DBManager.js';
//const DBManager = require("./DBManager");
let db ;

beforeEach(async ()=>{
    db = new DBManager() ;
    db.init()
})


test('prueba pedir coins de usuario que no existe', async () => {
    expect(await db.getCoins("Usuario no existente")).toBe(-1)
})

test('Pedir monedas de el usuario Prueba', async () =>{
    expect(await db.getCoins("Prueba")).toBe(20)
})

test('Establecer monedas de un usuario no existente', async () => {
    expect(await db.setCoins("Usuario no existente")).toBe(-1)
})

test('Registrar un usuario con valores incorrectos en la base de datos', async () => {
    expect(await db.registerUser("", "12345", "Pinwi")).toBe(-1)
})

test('Logear un usuario no existente en la base de datos', async () => {
    expect(await db.loginUser("Usuario no existente", "12345")).toBe(-1)
})

test('Logear un usuario ya existente, con contraseña incorrecta', async () => {
    expect(await db.loginUser("alex", "contraseñaincorrecta")).toBe(0)
})

test('Recibir experiencia del usuario Prueba', async () => {
    expect(await db.getExp("Prueba")).toBe(8)
})

test('Recibir experiencia de un usuario no existente', async () => {
    expect(await db.getExp("Usuario no existente")).toBe(-1)
})

test('Establecer experiencia de un usuario no existente', async () => {
    expect(await db.setExp("Usuario no existente")).toBe(-1)
})

test('Obtener objetos equipados de un usuario no existente', async () => {
    expect(await db.getItemsEquipped("Usuario no existente")).toBe(-1) // No se usa
})

test('Obtener precio del objeto chancla', async () => {
    expect(await db.getItemPrice("chancla")).toBe("1")
})

test('Obtener objetos comprados del usuario Prueba', async () => {
    expect(await db.getBuy("Prueba")).toStrictEqual(["chancla","betis"])
})

test('Obtener objetos comprados de un usuario no existente', async () => {
    expect(await db.getBuy("Usuario no existente")).toBe(-1)
})

test('Establecer objetos comprados a un usuario no existente', async () => {
    expect(await db.setBuy("Usuario no existente", ["chancla", "cadena"])).toBe(-1)
})

test('Establecer objetos equipados a un usuario no existente', async () => {
    expect(await db.setEquip("Usuario no existente", {
        Body: "pajarita",
        Down: "b3",
        Face: "gafas",
        Head: "b1"
    })).toBe(-1)
})

test('Obtener objetos equipados de un usuario no existente', async () => {
    expect(await db.getEquipped("Usuario no existente")).toBe(-1)
})

test('Obtener objetos equipados del usuario Prueba', async () => {
    expect(await db.getEquipped("Prueba")).toStrictEqual({
        Body: "b2",
        Down: "b3",
        Face: "b4",
        Head: "b1"
    })
})

test('Obtener el nombre de la mascota del usuario Prueba', async () => {
    expect ( await db.getPetName("Prueba")).toBe("PruebaPet")
})

test('Obtener el nombre de la mascota de un usuario no existente', async () => {
    expect ( await db.getPetName("Usuario no existente")).toBe("")
})

test('Establecer el nombre de la mascota de un usuario no existente', async () => {
    expect ( await db.setPetName("Usuario no existente")).toBe(-1)
})

// test('Establecer la fecha de un usuario no existente', async () => {
//     expect ( await db.setFecha("Usuario no existente")).toBe(-1)
// })

test('Obtener la fecha de un usuario no existente', async () => {
    expect ( await db.getFecha("Usuario no existente")).toBe("")
})

test('Obtener la fecha del usuario Prueba', async () => {
    expect ( await db.getFecha("Prueba")).toBe("12/02/2002")
})