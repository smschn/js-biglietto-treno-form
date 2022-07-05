// dichiarazione e assegnazione variabili
const percorsoKm = parseInt(prompt('Quanti km vuoi percorrere?'));
const etaPasseggero = parseInt(prompt('Quanti anni hai?'));
const prezzoKm = 0.21;
const scontoMinorenni = 0.8;
const scontoAnziani = 0.6;
let prezzoBiglietto = percorsoKm * prezzoKm;

if (etaPasseggero < 18) {
    prezzoBiglietto = prezzoBiglietto * scontoMinorenni;
    prezzoBiglietto = prezzoBiglietto.toFixed(2);
    alert('Il prezzo del biglietto è ' + prezzoBiglietto + ' € (applicato sconto minorenne)');
} else if (etaPasseggero > 65) {
    prezzoBiglietto = prezzoBiglietto * scontoAnziani;
    prezzoBiglietto = prezzoBiglietto.toFixed(2);
    alert('Il prezzo del biglietto è ' + prezzoBiglietto + ' € (applicato sconto over 65)');
} else {
    prezzoBiglietto.toFixed(2);
    alert('Il prezzo del biglietto è ' + prezzoBiglietto + ' € (nessuno sconto applicato)');
}

// debug
console.log('test')
console.log('prezzoBiglietto')