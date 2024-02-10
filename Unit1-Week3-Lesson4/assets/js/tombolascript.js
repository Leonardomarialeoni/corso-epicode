const numeri = [];
const numeriEstratti = [];

// funzione estrazione numero casuale da 1 a 90 
function estraiNumero() {
    numero = Math.floor(Math.random() * 90) + 1;
    if (numero = numeriEstratti[i]) {
        estraiNumero();
    };
    evidenziaCella(numero);
}

// creazione griglia con tutte le funzionalita 
const createNumber = (numbers) => {
    const tabelloneDiv = document.getElementById('tabellone');
    // Ciclando i numeri creo ed appendo i div corrispondenti ai numeri nel contenitore padre tabellone
    for (let i =0; i < 90; i++) {
        const tabelloneCellDiv = document.createElement('div');
        tabelloneCellDiv.classList.add('number');
        // Rendiamo il div del numero cliccabile
        tabelloneCellDiv.addEventListener('click', function () {
            estraiNumero(); 
            tabelloneCellDiv.classList.add('selected');
        });
        // Creo i div dei singoli giorni
        // 1. scrivo il numero del giorno
        const cellValue = document.createElement('h3');
        cellValue.innerText = i + 1;
        tabelloneCellDiv.appendChild(cellValue);
        // 2. appendo il div del singolo numero al tabellone
        tabelloneDiv.appendChild(tabelloneCellDiv);
        // Popolo l'array con lárray corrispondente al singolo numero
        numeriEstratti.push([]);
    }
    console.log(numeriEstratti);
}

createNumber();

