var teste = [];

function get_reclamation(bloco, tipo){
	var tipo_selecionado = get_option(tipo);
	var bloco_selecionado = get_option(bloco);

	var key = `${bloco_selecionado}/${tipo_selecionado}`;
	var conteudo = readFile(key) || [];

	teste = conteudo;
/*
	for (i = 0, len = cars.length, text = ""; i < len; i++) { 
    	text += cars[i] + "<br>";
	}
*/
	
	var resultado = '<table>' +
					  '<tr>' + 
					    '<th>Nome</th>' +
					    '<th>Matricula</th> ' +
					    '<th>CPF</th>' +
					    '<th>Reclamação</th>' +
					  '</tr>';

	conteudo.forEach(function (item){
		resultado += '<tr>' + 
    					`<td>${item.nome}</td>` +
    					`<td>${item.matricula}</td>` +
    					`<td>${item.cpf}</td>` +
    					`<td>${item.reclamacao}</td>` +
  					'</tr>';
	});
	resultado += '</table>';
	
	document.getElementById("result").innerHTML = resultado;
}