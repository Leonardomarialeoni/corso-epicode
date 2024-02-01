/* ESERCIZIO 1
 Scrivi una funzione di nome "area", che riceve due parametri (l1, l2) e calcola l'area del rettangolo associato.
*/

function area(l1, l2) {
    return l1 * l2;

}

console.log('***ESERCIZIO 1***')
console.log(area(3, 4))

/* ESERCIZIO 2
 Scrivi una funzione di nome "crazySum", che riceve due numeri interi come parametri.
 La funzione deve ritornare la somma dei due parametri, ma se il valore dei due parametri è il medesimo deve invece tornare
 la loro somma moltiplicata per tre.
*/

function crazySum(n1, n2) {
    if (n1 === n2) {
        return (n1 + n2) * 3;
    }
    else {
        return n1 + n2;
    }
}

console.log('***ESERCIZIO 2***')
console.log(crazySum(3, 4))

/* ESERCIZIO 3
 Scrivi una funzione di nome "crazyDiff" che calcola la differenza assoluta tra un numero fornito come parametro e 19.
 Deve inoltre tornare la differenza assoluta moltiplicata per tre qualora il numero fornito sia maggiore di 19.
*/

function crazyDiff(n3) {
    if ((n3 - 19) > 19) {
        return Math.abs(n3 - 19) * 3
    }
    else {
        return Math.abs(n3 - 19)
    }
}

console.log('***ESERCIZIO 3***')
console.log(crazyDiff(60))

/* ESERCIZIO 4
 Scrivi una funzione di nome "boundary" che accetta un numero intero n come parametro, e ritorna true se n è compreso tra 20 e 100 (incluso) oppure
 se n è uguale a 400.
*/

function boundary(n) {
    if (n >= 20 && n <= 100 || n === 400) {
        return true;
    }
    else {
        return false;
    }
}

console.log('***ESERCIZIO 4***')
console.log(boundary(45))

/* ESERCIZIO 5
 Scrivi una funzione di nome "epify" che accetta una stringa come parametro.
 La funzione deve aggiungere la parola "EPICODE" all'inizio della stringa fornita, ma se la stringa fornita comincia già con "EPICODE" allora deve
 ritornare la stringa originale senza alterarla.
*/

function epify(stringa) {
    if (stringa.startsWith('EPICODE')) {
        return stringa;
    }
    else {
        return 'EPICODE ' + stringa;
    }
}

console.log('***ESERCIZIO 5***')
console.log(epify('corso full stack'))

/* ESERCIZIO 6
 Scrivi una funzione di nome "check3and7" che accetta un numero positivo come parametro. La funzione deve controllare che il parametro sia un multiplo
 di 3 o di 7. (Suggerimento: usa l'operatore modulo)
*/

function check3and7(numero) {
    if (numero % 3 === 0) {
        return console.log('e` un multiplo di 3')
    }
    else if (numero % 7 ===0){
        return  console.log('e` un multiplo di 7')
    }
    else {
        return console.log('non e` un multiplo ne di 3 ne di 7')
    }
}

console.log('***ESERCIZIO 6***')
console.log(check3and7(43))

/* ESERCIZIO 7
 Scrivi una funzione di nome "reverseString", il cui scopo è invertire una stringa fornita come parametro (es. "EPICODE" --> "EDOCIPE")
*/

function reverseString(stringa) {
    let arrayStringa = stringa.split('');
    let arrayInvertito = arrayStringa.reverse();
    let stringaFinale = arrayInvertito.join('');
    return stringaFinale ;
}

console.log('***ESERCIZIO 7***')
console.log(reverseString('LEONARDO'))

/* ESERCIZIO 8
 Scrivi una funzione di nome "upperFirst", che riceve come parametro una stringa formata da diverse parole.
 La funzione deve rendere maiuscola la prima lettera di ogni parola contenuta nella stringa.
*/

/* SCRIVI QUI LA TUA RISPOSTA */

/* ESERCIZIO 9
 Scrivi una funzione di nome "cutString", che riceve come parametro una stringa. La funzione deve creare una nuova stringa senza il primo e l'ultimo carattere
 della stringa originale.
*/

/* SCRIVI QUI LA TUA RISPOSTA */

/* ESERCIZIO 10
 Scrivi una funzione di nome "giveMeRandom", che accetta come parametro un numero n e ritorna un'array contenente n numeri casuali inclusi tra 0 e 10.
*/

/* SCRIVI QUI LA TUA RISPOSTA */
