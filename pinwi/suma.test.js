const suma = require('./suma');
global.globalThis = global;
test('sumar 1 + 2 es igual a 3', () => {
  expect(suma(1, 2)).toBe(3);
})
