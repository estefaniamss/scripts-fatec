function construirObservador() {
  var obj = {}
  obj.listaObservador = obj.listaObservador || [];
  obj.contador = obj.contador || 0;
  obj.addObservador = function(evento) {
    this.listaObservador.push(evento);
  }; 
  obj.executarEvento = function() {
    this.contador++;
    for (var i = 0; i < this.listaObservador.length; i++) {
      this.listaObservador[i]();
    }
  }
  return obj;
}

var observador = construirObservador();

var evento1 = function () {
  console.log("primeiro evento")
};
observador.addObservador(evento1);

observador.executarEvento( );
console.log(observador.contador);

var evento2 = function () {
  console.log("segundo evento")
};
observador.addObservador(evento2);

observador.executarEvento( );
console.log(observador.contador);