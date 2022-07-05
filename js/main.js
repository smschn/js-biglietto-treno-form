// costante
const prezzoKm = 0.21;

// dati in input
let name = document.getElementById('name');
let distance = document.getElementById('distance');
let fasciaEta = document.getElementById('age_list');
let button = document.getElementById('genera');

// dati in output
let nomePasseggero = document.getElementById('nome-passeggero');
let offerType = document.getElementById('offerta');
let carrozza = document.getElementById('carrozza');
let codicePren = document.getElementById('codice_p');
let costoBiglietto = document.getElementById('costo');

// cliccando 'inserisci', si compila la sezione 'il tuo biglietto'
button.addEventListener('click',
function() {

    // check inserimento dati
    if (name.value == "" || distance.value == "" || fasciaEta.value == "") {
        alert('Attenzione: devi selezionare tutti i parametri.')
    } else {

        // rendere visibile il biglietto
        let bigliettoDom = document.getElementById('output');
        bigliettoDom.className = 'output_show';

        // far apparire il nome del passeggero
        nomePasseggero.innerHTML = name.value;

        // far apparire il tipo di offerta
        if (fasciaEta.value == "minorenne" || fasciaEta.value == "anziano" ) {
            offerType.innerHTML = 'Biglietto ridotto';
        } else {
            offerType.innerHTML = 'Biglietto standard';
        }

        // far apparire numero carrozza - tra 1 e 20
        carrozza.innerHTML = Math.floor(Math.random() * 20 + 1);

        // far apparire codice prenotazione - tra 1 e 1000
        codicePren.innerHTML = Math.floor(Math.random() * 1000 + 1);

        // far apparire il costo del biglietto
        let costoTot = prezzoKm * distance.value;
        let costoScontatoMinorenne;
        let costoScontatoAnziano;

        if (fasciaEta.value == "minorenne") {
            costoScontatoMinorenne = costoTot * 0.8;
            costoBiglietto.innerHTML = costoScontatoMinorenne.toFixed(2) + " €";
        } else if (fasciaEta.value == "anziano") {
            costoScontatoAnziano = costoTot * 0.6;
            costoBiglietto.innerHTML = costoScontatoAnziano.toFixed(2) + " €";
        } else if (fasciaEta.value == "maggiorenne") {
            costoBiglietto.innerHTML = costoTot.toFixed(2) + " €";
        }

    }
})

// cliccando 'annulla', i campi input si resettano e il biglietto scompare
let buttonAnnulla = document.getElementById('annulla');
buttonAnnulla.addEventListener('click',
function() {

   // window.location.reload(); ---> metodo facile: al click di 'annulla', la pagina si ricarica e i campi input si svuotano (non servirebbero le istruzioni seguenti)
   
   // il biglietto viene nascosto
   let bigliettoDom = document.getElementById('output');
   bigliettoDom.className = 'output_hide';

   // campi input si resettano
   distance.value = "";
   name.value = "";
   fasciaEta.value = "";
})