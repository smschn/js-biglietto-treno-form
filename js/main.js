// dichiarazione e assegnazione variabili
const prezzoKm = 0.21;
const scontoMinorenni = 0.8;
const scontoAnziani = 0.6;

// recupero valori tramite button e li mostro tramite alert
const recuperoValoriDom = document.getElementById('input_data');
recuperoValoriDom.addEventListener('click',
function() {
    const nameDom = document.getElementById('name');
    const distanceDom = document.getElementById('distance');
    const ageDom = document.getElementById('age');
    alert('I valori inseriti sono: ' + nameDom.value + ', ' + distanceDom.value + ' e ' + ageDom.value);
})


/* 
let prezzoBiglietto = percorsoKm * prezzoKm;

// struttura con if per sapere quando applicare scontistica
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
 */