//* Traccia
/*
Il programma dovrà chiedere all'utente il numero di chilometri che vuole percorrere e l'età del passeggero.
Sulla base di queste informazioni dovrà calcolare il prezzo totale del viaggio, secondo queste regole:
- il prezzo del biglietto è definito in base ai km (0.21 € al km)
- va applicato uno sconto del 20% per i minorenni
- va applicato uno sconto del 40% per gli over 65.
- L'output del prezzo finale va messo fuori in forma umana (con massimo due decimali, per indicare centesimi sul prezzo). Questo richiederà un minimo di ricerca.
Buon lavoro! */

//# Procedura

// ! Raccolta dati
//* Chiedere all'utente il numero di km da percorrere;
//* Chiedere l'età del passeggero;
//* Calcolare il prezzo totale del viaggio in base ai km(0.21 € al km);
//* sconto 20% minnorenni;
//* scpnto 40% over 65;
//*
// ! Elaborazione

// ! Output

let kmDaPercorrere = prompt ("Quanti km dista la destinazione da raggiungere?");
kmDaPercorrere = parseInt(kmDaPercorrere);
console.log(typeof kmDaPercorrere);