// var bloco_selecionado = window.localStorage.getItem();
// var tipo_selecionado = window.localStorage.getItem();

// var key = `${bloco_selecionado}/${tipo_selecionado}`;
// var conteudo = readFile(key) || [];

// var entrada = window.localStorage.getItem(key);
// var content = JSON.parse(entrada)

// var entrada = window.localStorage.getItem(key);
// var content = JSON.parse(entrada);

var keys = Object.keys(localStorage);
var values = [];
var j = 1;

values.push(localStorage.getItem(keys[j]));

var dados;
dados = Object.values(values);

console.log(dados);

console.log(values);