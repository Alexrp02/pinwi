/*import DBManager from './DBManager.js';
DBManager = require('DBManager');*/
import juego from './juego.js';
juego = require('juego');

test('Escoger una pregunta con un indice no existente', async () => {
    expect(await juego.escogerPregunta(8).toBe(-1))
})

test('Oprimir un boton no existente', async () => {
    expect(await juego.oprimir_btn(8).toBe(-1))
})

test('Seleccionar una id no existente', async () => {
    expect(await juego.select_id("pp").toBe(-1))
})

test('Seleccionar un style no existente', async () => {
    expect(await juego.style("abduscan").toBe(-1))
})

test('Leer una ruta para escoger las preguntas no existente', async () => {
    expect(await juego.readText('./preguntas.json').toBeNull())
})
