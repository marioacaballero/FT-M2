var traverseDomAndCollectElements = function(matchFunc, startEl) {
  var resultSet = [];

  if (typeof startEl === "undefined") {
    startEl = document.body;
  }

  // recorre el árbol del DOM y recolecta elementos que matchien en resultSet
  // usa matchFunc para identificar elementos que matchien

  // TU CÓDIGO AQUÍ
  if(matchFunc(startEl)) resultSet.push(startEl);

  for(let i=0; i<startEl.children.length; i++){
    let child = startEl.children[i];
    let found = traverseDomAndCollectElements(matchFunc, child)
    resultSet = [...resultSet, ...found];
  }

  //con el for genero el caso de corte de la recursión, puede ser que no entra porque no tiene elementos hijos, o porque se termina de recorrer todos los hijos. Cualquiera de las 2 opciones corta.

  return resultSet;
};

// Detecta y devuelve el tipo de selector
// devuelve uno de estos tipos: id, class, tag.class, tag


var selectorTypeMatcher = function(selector) {
  // tu código aquí
  
  if(selector[0] === '#'){
    return 'id';
  } else if(selector[0] === '.'){
      return 'class';
    } else {
      for(let i=1; i<selector.length; i++){
        if(selector[i] === '.'){
          return 'tag.class';
        }
      }
        
      return 'tag';
      }

};

// NOTA SOBRE LA FUNCIÓN MATCH
// recuerda, la función matchFunction devuelta toma un elemento como un
// parametro y devuelve true/false dependiendo si el elemento
// matchea el selector.

var matchFunctionMaker = function(selector) {
  var selectorType = selectorTypeMatcher(selector);
  var matchFunction;

  if (selectorType === "id") { 
    matchFunction = (element) => '#' + element.id === selector;
  } else if (selectorType === "class") {
    matchFunction = (element) => {
      let classes = element.classList;
      for(let i=0; i<classes.length; i++){
        if("." + classes[i] === selector){
          return true;
        }
      }
      return false;
    }
  } else if (selectorType === "tag.class") {
    matchFunction = (element) => {
      let [t, c] = selector.split('.');
      return matchFunctionMaker(t)(element) && matchFunctionMaker('.' + c)(element); //porque la matchFunctionMaker(t) me devuelve una función, entonces puedo invocarla con (element). Para el caso de la clase debo agregarle el punto ya que con el split se lo saqué.
    }
  } else if (selectorType === "tag") {
    matchFunction = (element) => element.tagName.toLowerCase() === selector; //si uso localName directamente lo da en minuscula y no necesito el toLowerCase
  }
  return matchFunction;
};

var $ = function(selector) {
  var elements;
  var selectorMatchFunc = matchFunctionMaker(selector);
  elements = traverseDomAndCollectElements(selectorMatchFunc);
  return elements;
};
