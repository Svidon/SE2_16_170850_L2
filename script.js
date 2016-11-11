//Lista delle persone
var list = [];
//Utente attivo al momento
var active;

/**
 * @brief Funzione di inizializzazione
 * @param name dell'utente
 * @return true se presente, false se nuovo
 */
function iAm (name) {
	//Controlla se l'utente esiste
	if (exist(name) == true){
		return true;
	}
	//Genera un nuovo utente se non presente
	else{
		var person = {
			name: name;
			hours: 0.0;
			//Funzione dell'oggetto che restituisce il punteggio
			getPoints: function () {
				alert(parseInt(hours, 10));
				return parseInt(hours, 10);
			}
		}
		list.push(person);
	}

	return false;
}

/**
 * @brief Funzione che assegna ore a una persona
 * @param hours le ore da inserire
 * @return Il totale delle ore accumulate o "Errore" se e' sbagliato il parametro
 */
function give (hours) {
	//Controlla che l'imput sia corretto, altrimenti errore (if nested per valori particolari dei casi limite)
	//Controllo che sia un numero
	if((typeof hours) == 'number'){
		//Controllo che non sia Nan
		if (!isNaN(hours)){
			//Controllo se e' negativo
			if (hours < 0){
				alert("Errore, parametro errato");
				return "Errore, parametro errato";
			}
			//Parametro corretto, aggiorno
			else{
				active.hours += hours;
				alert("Tot " + active.hours);
				return active.hours;
			}
		}

		alert("Errore, parametro errato");
		return "Errore, parametro errato";
	}

	alert("Errore, parametro errato");
	return "Errore, parametro errato";
}

/**
 * @brief Funzione di supporto che controlla l'esistenza di un utente
 * @param name dell'utente da cercare
 * @return true se l'utente esiste, false altrimenti
 */
function exist (name) {
	var res = false;

	for (var i=0; i<list.length){
		if (list[i].name == name){
			res = true;
			active = list[i].name;
			break;
		}
	}

	return res;
}