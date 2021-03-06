/*$(document).ready(function () {
  var $formWell = $('#form-well');
  var $formGroups = $('div.form-group');
  var $helpBlocks = $('span.help-block');
  var $nomeInput = $('#nome-input');
  var $tabelaCategoria = $('#tabela-categoria')

  $formWell.hide();
  $('.fa fa-plus').click(function () {
    $formWell.slideToggle();
  });

  function limparErros() {
    $formGroups.removeClass('has-error');
    $helpBlocks.text('');
  }

  function adicionarCategoria(categoria) {
    var linha = '<tr>';
    linha += '<td>' + categoria.id + '</td>';
    linha += '<td>' + categoria.creation + '</td>';
    linha += '<td>' + categoria.nome + '</td>';
    linha += '<td>';
    linha += '<button class="btn btn-danger btn-sm"><i class="glyphicon glyphicon-trash"></i></button>';
    linha += '</td ></tr>';

    $tabelaCategoria.append(linha);

  }

  function listarCategorias(categorias){
    $.each(categorias, function(i, cat){
      adicionarCategoria(cat);
    })
  }

  var categoriasFake=[{"id": 5910974510923776, "nome": "Notebook 2", "creation": "09/08/2015 16:44:20"}, {"id": 6473924464345088, "nome": "Celular", "creation": "09/08/2015 17:29:42"}, {"id": 5275456790069248, "nome": "Celular", "creation": "09/09/2015 09:12:05"}];
  listarCategorias(categoriasFake);

  function mostrarErros(erros) {
    var helpBlockPrefixo = '#help-block-';
    var formGroupPrefixo = '#form-group-';
    $.each(erros,function(i,propriedade){
      $(helpBlockPrefixo + propriedade).text(erros[propriedade]);
      $(formGroupPrefixo + propriedade).addClass('has-error');
    });
  }

  $('#form-categoria').submit(function (evento) {
    evento.preventDefault();
    limparErros();
    var nome = $nomeInput.val();
    if (nome === '') {
      mostrarErros({'nome': 'Campo Obrigatório'})
    } else {
      adicionarCategoria({"id": 5910974510923776,
        "nome": nome,
        "creation": "09/08/2015 16:44:20"});
      $nomeInput.val('');
    }
  
  });

});*/

$(document).ready(function () {
var $formGroups = $('div.form-group');
var $helpBlocks = $('span.help-block');
var $nomeInput = $('#nome-input');
var $tabelaCategoria = $('#tabela-categoria');
var $comprador = $('#comprador');
var $formWell = $('#form-well');



function limparErros() {
  $formGroups.removeClass('has-error');
  $helpBlocks.text('');
}

function mostrarErros(erros) {
  console.log('dentro mostrarErros')
  var helpBlockPrefixo = '#help-block-';
  var formGroupPrefixo = '#form-group-';
    $.each(erros,function(propriedade, valorDaPropriedade){
      $(helpBlockPrefixo + propriedade).text(valorDaPropriedade);
      $(formGroupPrefixo + propriedade).addClass('has-error');
    });
}

function adicionarCategoria(categoria) {
    var linha = '<tr>';
    linha += '<td>' + categoria.id + '</td>';
    linha += '<td>' + categoria.creation + '</td>';
    linha += '<td>' + categoria.nome + '</td>';
    linha += '<td>';
    linha += '<button class="fa fa-times" style="float: left"></button>';
    linha += '</td ></tr>';

    var $linhaObjeto = $(linha);
    var $botao = $linhaObjeto.find('button.fa').click(function () {
      console.log(categoria.id);
      $linhaObjeto.remove();
    });

    $tabelaCategoria.append($linhaObjeto);

  }

 function listarCategorias(categorias){
    $.each(categorias, function(i, cat){
      adicionarCategoria(cat);
    })
  }

var categoriasFake=[{"id": 5910974510923776, "nome": "Big Burger", "creation": "09/08/2015 16:44:20"}, {"id": 6473924464345088, "nome": "Dog The Burger", "creation": "09/08/2015 17:29:42"}, {"id": 5275456790069248, "nome": "Prime Burger", "creation": "09/09/2015 09:12:05"}];
  listarCategorias(categoriasFake);


          $('a.add').on('click', function(){
              var $this = $(this);//o proprio parágrafo
              var la=( $this.find('h4').text() );
              console.log(la);
                  if (la === 'Masculino') {
                      alert("Desculpe, esse produto está indisponível.");
                  } else {
                    adicionarCategoria({"id": 5910974510923776,
                        "nome": la,
                        "creation": "09/08/2015 16:44:20"});
                  }
          });


  $('#form-categoria').submit(function (evento) {
    evento.preventDefault();
    limparErros();
    var nome = $nomeInput.val();
    console.log('dentro do form')
          if (nome === ''){
            console.log('vazio')
            mostrarErros({'nome': 'Campo Obrigatório'})
          } else {
            $comprador.html(nome);
            $formWell.slideToggle(); 
          } 
        $nomeInput.val('');  
  });

});