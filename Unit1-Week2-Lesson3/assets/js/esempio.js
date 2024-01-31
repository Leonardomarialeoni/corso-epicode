const numeri = [1, 8, 65, 24, 12];

let somma = 0;
let stop = false;

for (let i = 0; i < numeri.length; i++) {
    if (!stop) {
        somma += numeri[i];
        document.getElementById('somma').innerText = 'la somma dei contenuti dell\' arry e`' +  somma;
        if (somma >= 50) {
            stop = true;
            document.getElementById('somma').innerHTML = somma
        }
    } else break
}