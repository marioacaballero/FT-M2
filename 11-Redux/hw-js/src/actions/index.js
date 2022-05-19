const { INCREMENTO, DECREMENTO, IMPAR, ASYNC } = require("../action-types");

// Nuestras actions (action creators) devolverán un paquete de actions que nuestro reducer recibirá.
// ¿Cómo es el paquete de acción? Tengan en cuenta que el creador de la acción no es en absoluto responsable
// de manejar ninguna de las lógicas actuales de actualización del store central de Redux.
// Eso se lo deja al reducer(s).

const incremento = function () {
  return { type: INCREMENTO };
};

const decremento = function () {
  return { type: DECREMENTO };
};

const impar = function () {
  return { type: IMPAR };
};

const async = function () {
  return { type: ASYNC };
};

module.exports = {
  incremento,
  decremento,
  impar,
  async,
};
