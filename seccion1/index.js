function plantilla(cadenas, ...claves) {
    return (function(...valores) {
      let diccio = valores[valores.length - 1] || {};
      let resultado = [cadenas[0]];
      claves.forEach(function(clave, i) {
        let valor = Number.isInteger(clave) ? valores[clave] : diccio[clave];
        resultado.push(valor, cadenas[i + 1]);
      });
      return resultado.join('');
    });
  }

let myfunction = plantilla`Hola soy ${0} bienvenido al reino ${1}`
console.log(myfunction('Brayan','Cuantico'));