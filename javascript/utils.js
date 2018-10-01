function get_option(name){
	var select = document.getElementById(name);

	//Buscando a opção do select
	return select.options[select.selectedIndex].value;
}