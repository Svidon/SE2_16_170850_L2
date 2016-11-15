<<<<<<< HEAD
=======
// Lista item
var list = [];
// Indice dell'item trovato
var now = 0;
// Massimo dello stesso item
var max = 30;
// Controllo per mostrare form
var showIns = true;
// Controllo per mostrare form
var showM = true;

// MANCANO TUTTI I CONTROLLI

/**
 * @brief Funzione che mostra/nasconde il form per inserire un nuovo item
 */
function showInsert () {
	if(showIns == true){
		document.getElementById("insert").style.display = "block";
		showIns = false;
	}
	else {
		document.getElementById("insert").style.display = "none";
		showIns = true;
	}
}

/**
 * @brief Funzione che inserisce nuovo item o aumenta la quantita
 * @param name dell'item da inserire/aumentare, qty numero da aggiungere
 */
function newItem () {
	// Prendo parametri
	var nom = document.getElementById("nom").value;
	var qty = document.getElementById("qty").value;

	// Controllo se è un numero
	if(isNaN(qty) == false){
		//Controllo se esiste o devo crearne uno nuovo
		if(exist(nom)){
			list[now].num += Number(qty);

			// Fa upload dell'item esistente
			if(list[now].num > max){
				alert("Maximum is " + max + ". Quantity changed");
				list[now].num = max;
			}
			if(list[now].num < 0){
				alert("Minimum is 0. Quantity changed");
				list[now].num = 0;
			}
		}
		else {
			// Crea nuovo item e fa il push nella lista, aggiorna now all'ultimo elemento inserito
			var item = {
				nome: nom,
				num: Number(qty),
			};

			list.push(item);
			now = list.length - 1;

			// Se la quantity inserita è troppo grande imposta a max
			if(list[now].num > max){
				alert("Maximum is " + max + ". Quantity changed");
				list[now].num = max;
			}

			// Se la quantity inserita è negativa imposta a 0
			if(list[now].num < 0){
				alert("Minimum is 0. Quantity changed");
				list[now].num = 0;
			}
		}

		// Aggiorna la tabella
		tabella();

		// Svuoto il form e lo nasconde
		document.getElementById("nom").value = "";
		document.getElementById("qty").value = "";
		document.getElementById("insert").style.display = "none";
		showIns = true;
	}
	else {
		alert(qty + " is not a number");
	}
}


/**
 * @brief Funzione che mostra il form per inserire un nuovo max
 */
function showNewMax () {
	if(showM == true){
		document.getElementById("changemax").style.display = "block";
		showM = false;
	}
	else {
		document.getElementById("changemax").style.display = "none";
		showM = true;
	}
}

/**
 * @brief Funzione che modifica il massimo di item dello stesso tipo (e controlla quelli esistenti)
 * @param new nuovo massimo
 */
function newMax () {
	// Prendo parametro
	var newMax = document.getElementById("max").value;

	// Controllo se è un numero
	if(isNaN(newMax) == false){
		// Controllo che sia maggiore di 0 (o non avrebbe senso)
		if(newMax > 0){
			max = Number(newMax);
				
			alert("Maximum changed to: " + max + " for all items");

			for (var i=0; i<list.length; i++){
				if (list[i].num > max){
					list[i].num = max;
				}
			}

			// Aggiorna la tabella
			tabella();

			// Mostra il massimo in pagina
			showMax();

			// Svuoto form e lo nascondo
			document.getElementById("max").value = "";
			document.getElementById("changemax").style.display = "none";
			showM = true;
		}
		else {
			alert(newMax + " is negative or 0");
		}
	}
	else {
		alert(newMax + " is not a number");
	}
}

/**
 * @brief Funzione che mostra il massimo sopra la tabella
 */
function showMax () {
	document.getElementById("maximum").innerHTML = max;
}


/**
 * @brief Funzione che crea la tabella (o sostituisce quella vecchia quando ci sono cambiamenti)
 */
function tabella () {

	// Div in index
	var div = document.getElementById("tab");

	div.innerHTML = "";

	// Crea la tabella
	var table = document.createElement("table");

	// Inizializza la row
	var initRow = document.createElement("tr");

	// Inizializza il primo th
	var td1 = document.createElement("th");
	td1.appendChild(document.createTextNode("Item"));

	// Inizializza il secondo th
	var td2 = document.createElement("th");
	td2.appendChild(document.createTextNode("Quantity"));

	// Appende i th alla row
	initRow.appendChild(td1);
	initRow.appendChild(td2);

	//Appende la row alla table
	table.appendChild(initRow);

	for(var i=0; i<list.length; i++){

		// Reinizializzo la riga
		initRow = document.createElement("tr");

		// Inizializza il primo td col valore
		td1 = document.createElement("td");
		td1.appendChild(document.createTextNode(list[i].nome));

		// Inizializza il secondo td col valore
		td2 = document.createElement("td");
		td2.appendChild(document.createTextNode(list[i].num));

		// Appende i td alla row
		initRow.appendChild(td1);
		initRow.appendChild(td2);

		//Appende la row alla table
		table.appendChild(initRow);
	}

	div.appendChild(table);
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
>>>>>>> testing
