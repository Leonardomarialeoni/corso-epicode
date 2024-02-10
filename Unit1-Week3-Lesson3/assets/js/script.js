const task = document.getElementById('task');
const btnAdd = document.getElementById('inserisci');
const lista = document.getElementById('lista');
let singleTask;
let tasks = [];

btnAdd.addEventListener('click', function (e) {
    e.preventDefault();
    if (task.value == '') {
        alert('Inserire un task!');
        return;
    }
    aggiungi();
    scriviLista();
    cancellaForm();
});

const aggiungi = () => {
    singleTask = task.value ;
    task.push(singleTask);
    console.log(tasks);
}

const scriviLista = () => {
    lista.innerHTML = '';
    tasks.forEach((element, index) => {
        lista.innerHTML += `<li>${element}&nbsp;<button type="button" onclick="elimina(${index});"> X </button>`
    });
    cancellaForm();
}

const cancellaForm = () => {
    task.value = '';
}

const elimina = (indice) => {
    task.splice(indice, 1);
    scriviLista();
}



/*function elemento() {
    const testo = document.getElementById('barra');
    const elenco = document.getElementById('lista');
    const lista = document.createElement('li');
    lista.innerHTML = testo.value ;
    elenco.appendChild(lista) ;
    testo.value = ' ' ;
}*/

