// Lista item
var list = [];
// Indice dell'item trovato
var now;
// Massimo dello stesso item
var max = 30;


/**
 * @brief Funzione che mostra il form per inserire un nuovo item
 */
function showInsert () {
	document.getElementById("insert").style.display = "block";
}

/**
 * @brief Funzione che inserisce nuovo item o aumenta la quantita
 * @param name dell'item da inserire/aumentare, qty numero da aggiungere
 */
function newItem () {
	// Prendo parametri
	var nome = document.getElementById("name").value;
	var num = document.getElementById("qty").value;

	//Controllo se esiste o devo crearne uno nuovo
	if(exists(name)){
		list[now].number += qty;

		if(list[now].number > max){
			alert("Maximum is " + max + ". Number changed");
			list[now].number = max;
		}
	}
	else {
		var item = {
			name: name;
			number: qty;
		}

		list.push(item);
	}

	document.getElementById("insert").style.display = "none";
}

/**
 * @brief Funzione che mostra il form per inserire un nuovo item
 */
function showNewMax () {
	document.getElementById("changemax").style.display = "block";
}

/**
 * @brief Funzione che modifica il massimo di item dello stesso tipo (e controlla quelli esistenti)
 * @param new nuovo massimo
 */
function newMax () {
	var newMax = document.getElementById("max").value;
	max = newMax;
	alert("Maximum changed to: " + max + " for all items");

	for (var i=0; i<list.length){
		if (list[i].number > max){
			list[i].number = max;
		}
	}

	document.getElementById("changemax").style.display = "none";
}

/**
 * @brief Funzione di supporto che controlla l'esistenza di un item
 * @param name dell'item da cercare
 * @return true se l'item esiste, false altrimenti
 */
function exist (name) {
	var res = false;

	for (var i=0; i<list.length){
		if (list[i].name == name){
			res = true;
			now = list[i].name;
			break;
		}
	}

	return res;
}