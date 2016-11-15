// Lista item
var list = [];
// Indice dell'item trovato
var now = 0;
// Massimo dello stesso item
var max = 30;

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
	var nom = document.getElementById("nom").value;
	var qty = document.getElementById("qty").value;

	//Controllo se esiste o devo crearne uno nuovo
	if(exist(nom)){
		list[now].num += qty;

		// Fa upload dell'item esistente
		if(list[now].num > max){
			alert("Maximum is " + max + ". Number changed");
			list[now].num = max;
		}
	}
	else {
		var item = {
			nome: nom,
			num: qty,
		};

		list.push(item);
		now = list.length - 1;
		alert("qty " + list[now].num);
	}

	// Inserisce l'item in tabella
	tabella();

	// Svuoto il form e lo nasconde
	document.getElementById("nom").value = "";
	document.getElementById("qty").value = "";
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
	// Prendo parametro
	var newMax = document.getElementById("max").value;
	max = newMax;
	
	alert("Maximum changed to: " + max + " for all items");

	for (var i=0; i<list.length; i++){
		if (list[i].num > max){
			list[i].num = max;
		}
	}

	// Mostra il massimo in pagina
	showMax();

	// Svuoto form e lo nascondo
	document.getElementById("max").value = "";
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
	//Tabella in index
	var table = document.getElementById("table");

	// Inizializza la row
	var initRow = document.createElement("tr");

	// Inizializza il primo td col valore
	var td1 = document.createElement("td");
	td1.appendChild(document.createTextNode(list[now].nome));

	// Inizializza il secondo td col valore
	var td2 = document.createElement("td");
	td2.appendChild(document.createTextNode(list[now].num));

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
		if (list[i].nome == name){
			res = true;
			now = i;
			break;
		}
	}

	return res;
}