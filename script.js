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
const kmDaPercorrere = parseInt(prompt("inserisci quanti km dista la destinazione da raggiungere in caratteri numerici"));
console.log(kmDaPercorrere);
if (isNaN(kmDaPercorrere)) {
    alert('inserire esclusivamente caratteri numerici')
}
//* Chiedere l'età del passeggero;
const etàPasseggero = parseInt(prompt("inserisci la tua età anagrafica in caratteri numerici"));
console.log(etàPasseggero);
if (isNaN(etàPasseggero)) {
    alert('inserire esclusivamente caratteri numerici')
}
//*

// ! Elaborazione
//* Calcolare il prezzo totale del viaggio in base ai km(0.21 € al km);
const CostoPerKm = 0.21;
let KmForPrice = (kmDaPercorrere * CostoPerKm);
console.log(KmForPrice);
//* sconto 20% minnorenni;
let FirstCalcT = (KmForPrice * 20 ) ;
let SecondCalcT = (FirstCalcT / 100);
let eighteenMinorDiscount =(KmForPrice - SecondCalcT);
console.log(eighteenMinorDiscount);


//* sconto 40% over 65;
let FirstCalc = (KmForPrice * 40 ) ;
let SecondCalc = (FirstCalc / 100);
let sixtyFiveOverDiscount =(KmForPrice - SecondCalc);
console.log(sixtyFiveOverDiscount);

// ! Output
