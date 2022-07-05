// dichiarazione e assegnazione variabili
const prezzoKm = 0.21;

let name = document.getElementById('name');
let distance = document.getElementById('distance');
let fasciaEta = document.getElementById('age_list');
let button = document.getElementById('genera');

// cosa succede al click del bottone
button.addEventListener('click',
function() {
    // check inserimento dati
    if (name.value == "" || distance.value == "" || fasciaEta.value == "") {
        alert('Attenzione: devi selezionare tutti i parametri.')
    } else {

    }
})

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