// Lista item
var list = [];
// Indice dell'item trovato
var now;
// Massimo dello stesso item
var max = 30;
//Tabella in index
var table = document.getElementById("table");


// MANCANO TUTTI I CONTROLLI

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
	if(exist(name)){
		list[now].number += qty;

		// Fa upload dell'item esistente
		if(list[now].number > max){
			alert("Maximum is " + max + ". Number changed");
			list[now].number = max;
		}
	}
	else {
		var item = {
			name: name,
			number: qty,
		};

		list.push(item);
	}

	// Inserisce l'item in tabella e nasconde il form
	tabella();
	document.getElementById("insert").style.display = "none";
}


/**
 * @brief Funzione che mostra il form per inserire un nuovo max
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

	for (var i=0; i<list.length; i++){
		if (list[i].number > max){
			list[i].number = max;
		}
	}

	// Mostra il massimo in pagina e nasconde il form
	showMax();
	document.getElementById("changemax").style.display = "none";
}

/**
 * @brief Funzione che mostra il massimo sopra la tabella
 */
function showMax () {
	document.getElementById("maximum").innerHTML = max;
}


/**
 * @brief Funzione che crea la tabella
 */
function tabella () {
	// Inizializza la row
	var initRow = document.createElement("tr");

	// Inizializza il primo td col valore
	var td1 = document.createElement("td");
	td1.appendChild(document.createTextNode(list[now].name));

	// Inizializza il secondo td col valore
	var td2 = document.createElement("td");
	thSecondCell.appendChild(document.createTextNode(list[now].number.toString()));

	// Appende i td alla row
	initRow.appendChild(td1);
	initRow.appendChild(td2);

	//Appende la row alla table
	table.appendChild(initRow);
}

/**
 * @brief Funzione di supporto che controlla l'esistenza di un item
 * @param name dell'item da cercare
 * @return true se l'item esiste, false altrimenti
 */
function exist (name) {
	var res = false;

	for (var i=0; i<list.length; i++){
		// Se trova un nome uguale modifica l'indice e ferma il ciclo
		if (list[i].name == name){
			res = true;
			now = list[i].name;
			break;
		}
	}

	return res;
}