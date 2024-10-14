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
let kmDaPercorrere = prompt ("inserisci quanti km dista la destinazione da raggiungere in caratteri numerici");
kmDaPercorrere = parseInt(kmDaPercorrere);
console.log(kmDaPercorrere);
if (isNaN(kmDaPercorrere)) {
    alert('inserire esclusivamente caratteri numerici')
}
//* Chiedere l'età del passeggero;
let etàPasseggero = prompt ("inserisci la tua età anagrafica in caratteri numerici");
etàPasseggero = parseInt(etàPasseggero);
console.log(etàPasseggero);
if (isNaN(etàPasseggero)) {
    alert('inserire esclusivamente caratteri numerici')
}
//*

// ! Elaborazione
//* Calcolare il prezzo totale del viaggio in base ai km(0.21 € al km);
//* sconto 20% minnorenni;
//* sconto 40% over 65;
// ! Output
