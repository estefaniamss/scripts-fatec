function Animal(){

}
	
var animalPrototipo = {
	fazerBarulho: function() {
		throw 'Deve ser implementado';
	}
};

Animal.prototype = animalPrototipo;

function Cao(){

}

var caoPrototipo = new Animal();
caoPrototipo.fazerBarulho = function() {
	return 'auau'
};

caoPrototipo.prototype = Animal.prototype;
Cao.prototype = caoPrototipo;

function Gato(){

}

var gatoPrototipo = new Animal();
gatoPrototipo.fazerBarulho = function(){
	return 'miau'
}

gatoPrototipo.prototype = Animal.prototype;
Gato.prototype = gatoPrototipo;

function Manada(){
	this.animais = this.animais || [];
	this.addAnimais = function(animal){
		this.animais.push(animal);
	}
};

/*

function Manada2() {
	var obj = {
		animais: this.animais || [],
		addAnimais: function(animal){
			this.animais.push(animal);
		},
		fazerBarulho: function() {
		throw 'Deve ser implementado';
		}
	};
	return obj
}
 
 */

var manadaPrototipo = {
  imprimirBarulho: function () {
    throw 'Método imprimirBarulho precisa ser implementado';
  }
};

Manada.prototype = manadaPrototipo;

function ManadaVirgula(){
}

var manadaVirgulaPrototipo = new Manada();
manadaVirgulaPrototipo.imprimirBarulho = function(){
  var novoArray = [];
  for (var i = 0; i < this.animais.length; i++) {
  	novoArray.push(this.animais[i].fazerBarulho());
  };
  return novoArray.join();
};

manadaVirgulaPrototipo.prototype=Manada.prototype;
ManadaVirgula.prototype=manadaVirgulaPrototipo;

function ManadaSustenido(){

}

var manadaSustenidoPrototipo = new Manada();
manadaSustenidoPrototipo.imprimirBarulho = function(){
	var novoArray = [];
	for (var i = 0; i < this.animais.length; i++) {
		novoArray.push(this.animais[i].fazerBarulho());
	};
	return novoArray.join("#");
};	

manadaSustenidoPrototipo.prototype = Manada.prototype;
ManadaSustenido.prototype = manadaSustenidoPrototipo;
 

var manadaV = new ManadaVirgula();
var manadaS = new ManadaSustenido();
manadaV.addAnimais(cao);
manadaV.addAnimais(cao);
manadaV.addAnimais(gato);
manadaV.addAnimais(gato);
manadaS.addAnimais(cao);
manadaS.addAnimais(cao);
manadaS.addAnimais(gato);
manadaS.addAnimais(gato);
console.log(manadaV.imprimirBarulho());
console.log(manadaS.imprimirBarulho());

