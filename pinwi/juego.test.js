const { JS_EXT_TO_TREAT_AS_ESM } = require("ts-jest")
const {escogerPreguntaAleatoria, db, escogerPregunta, desordenarRespuestas, readText, style, select_id, reiniciar, oprimir_btn} = require("./juego")


/*
test('Escoger una pregunta con un indice no existente', async () => {

    expect(await juego.escogerPregunta(8).toThrow());
})

test('Oprimir un boton no existente', async () => {
    expect(await oprimir_btn(8).toBe(-1))
})
*/

test('Seleccionar una id no existente', async () => {
  
    expect(await select_id("abduscan")).toBeNull
})


/*
test('Seleccionar un style no existente', async () => {
    expect(await style("abduscan").toBe(-1))
})
*/


/*test('Leer una ruta para escoger las preguntas no existente', async () => {
    expect(await readText('./preguntas.json').toBeNull())
})*/
