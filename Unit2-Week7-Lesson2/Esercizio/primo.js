var Persona = /** @class */ (function () {
    function Persona(_nome, _cognome) {
        this.nome = _nome;
        this.cognome = _cognome;
    }
    return Persona;
}());
var nuovo = new Persona('Paolino', 'Paperino');
console.log(nuovo);
var somma = function (num1, num2) {
    var risultato = num1 + num2;
    return risultato;
};
console.log(somma(8, 15));