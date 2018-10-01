var url_string = window.location.href;
var url = new URL(url_string);

var cpf = url.searchParams.get("cpf");

var dados = readFile(cpf);

var nome = dados.nome;
var matricula = dados.matricula;

// console.log(nome, matricula, cpf);

function get_option(name){
	var select = document.getElementById(name);

	//Buscando a opção do select
	return select.options[select.selectedIndex].value;
}

function criar_reclamacao(tipo, bloco, texto){
	var tipo_selecionado = get_option(tipo);
	var bloco_selecionado = get_option(bloco);
	var reclamacao = document.getElementById(texto).value;

	var key = `${bloco_selecionado}/${tipo_selecionado}`;
	var conteudo = readFile(key) || [];

	var nova_reclamacao = {
		nome: nome,
		cpf: cpf,
		matricula: matricula,
		bloco: bloco_selecionado,
		tipo: tipo_selecionado,
		reclamacao: reclamacao
	};

	conteudo.push(nova_reclamacao);

	writeFile(key, conteudo);

	window.open(`reclamacao2.html`, "_self");
	// alert("Reclamação enviada!");
}
