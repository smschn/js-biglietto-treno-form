// dichiarazione e assegnazione variabili
const prezzoKm = 0.21;

let name = document.getElementById('name');
let distance = document.getElementById('distance');
let fasciaEta = document.getElementById('age_list');
let button = document.getElementById('genera');

let nomePasseggero = document.getElementById('nome-passeggero');
let offerType = document.getElementById('offerta');
let carrozza = document.getElementById('carrozza');
let codicePren = document.getElementById('codice_p');
let costoBiglietto = document.getElementById('costo');

// cosa succede al click del bottone
button.addEventListener('click',
function() {

    // check inserimento dati
    if (name.value == "" || distance.value == "" || fasciaEta.value == "") {
        alert('Attenzione: devi selezionare tutti i parametri.')
    } else {

        // far apparire nome passeggero
        nomePasseggero.innerHTML = name.value;

        // far apparire tipo offerta
        if (fasciaEta.value = 'minorenne') {
            offerType.innerHTML = 'Biglietto ridotto';
        } else if (fasciaEta.value = 'anziano') {
            offerType.innerHTML = 'Biglietto ridotto';
        } else {
            offerType.innerHTML = 'Biglietto standard';
        }

        // far apparire numero carrozza - tra 1 e 10
        carrozza.innerHTML = Math.floor(Math.random() * 10 + 1);

        // far apparire codice prenotazione - tra 1 e 1000
        codicePren.innerHTML = Math.floor(Math.random() * 1000 + 1);

        // far apparire costo biglietto


// debug

/*
const prezzoKm = 0.21;

let name = document.getElementById('name');
let distance = document.getElementById('number');
let nomePasseggero = document.getElementById('nome-passeggero');
let fasciaEta = document.getElementById('fascia-eta');
let tipoOfferta = document.getElementById('offerta');
let carrozza = document.getElementById('carrozza');
let cp = document.getElementById('codice-cp');
let costoTotale = document.getElementById('costo');
let annulla = document.getElementById('annulla');
let button = document.getElementById('genera');

*/