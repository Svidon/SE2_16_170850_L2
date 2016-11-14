//Lista item
var list = [];
//Indice dell'item trovato
var now;
//Massimo dello stesso item
var max = 30;

/**
 * @brief Funzione che inserisce nuovo item o aumenta la quantita
 * @param name dell'item da inserire/aumentare, qty numero da aggiungere
 */
function newItem (name, qty) {
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
}

/**
 * @brief Funzione che modifica il massimo di item dello stesso tipo
 * @param new nuovo massimo
 */
function newMax (new) {
	max = newMax;
	alert("Maximum changed to: " + max);
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