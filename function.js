$(function(){
	var operacao = "A"; //"A"=Adição; "E"=Edição
	var indice_selecionado = -1; //Índice do item selecionado na lista
	var tbClientes = localStorage.getItem("tbClientes");// Recupera os dados armazenados
	tbClientes = JSON.parse(tbClientes); // Converte string para objeto
	if(tbClientes == null) // Caso não haja conteúdo, iniciamos um vetor vazio
	tbClientes = [];
});