const { INCREMENTO, DECREMENTO, IMPAR, ASYNC } = require("../action-types");

const initialState = {
  contador: 0,
};

// Nuestro reducer que maneja nuestros dos casos de acción incremento y decremento.
// Recibe el estado de nuestro store, junto con una action creada por nuestro action creator.
// ¿Qué tiene que hacer el reducer con el contador de cada caso?

function contador(state = initialState, action) {
  if (action.type === INCREMENTO) {
    return {
      ...state,
      contador: state.contador + 1,
    };
  } else if (action.type === DECREMENTO) {
    return {
      ...state,
      contador: state.contador - 1,
    };
  } else if (action.type === IMPAR) {
    if (state.contador % 2 == 0) {
      return {
        ...state,
        contador: state.contador + 1,
      };
    } else {
      return {
        ...state,
        contador: state.contador + 2,
      };
    }
  } else if (action.type === ASYNC) {
      return setTimeout(state.contador + 1, "5000")
  } else {
    return state;
  }
}

module.exports = contador;
