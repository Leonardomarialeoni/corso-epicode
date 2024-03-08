class User {
    constructor(_firstName, _lastName, _age, _location) {
        this.firstName = _firstName;
        this.lastName = _lastName;
        this.age = _age;
        this.location = _location;
    }

    confronto(personaX) {
        if (this.age > personaX.age) {
            return `${this.firstName} e' piu grande di ${personaX.firstName}`
        } else if (this.age === personaX.age) {
            return `${this.firstName} ha la stessa eta di ${personaX.firstName}`
        } else {
            return `${this.firstName} e' piu giovane di ${personaX.firstName}`
        }
    }
}


const persona1 = new User('Aldo', 'Baglio', 24, 'Messina');
const persona2 = new User('Giovanni', 'Storti', 35, 'Milano');

console.log('***Esercizio 1***')
console.log(persona1.confronto(persona2))


class Pet {
    constructor(_petName, _ownerName, _species, _breed) {
        this.petName = _petName;
        this.ownerName = _ownerName;
        this.species = _species;
        this.breed = _breed;
    }

    padrone(animale) {
        if (this.ownerName === animale.ownerName) {
            return true
        }
        else {
            return false
        }
    }
}

/*const pet1 = new Pet('Charlie', 'Aldo', 'Cane', 'Labrador');
const pet2 = new Pet('Nerone', 'Giovanni', 'Gatto', 'Soriano');
const pet3 = new Pet('Ralph', 'Aldo', 'Gallina', 'Moroseta');
const pet4 = new Pet('Pallino', 'Carla', 'Gatto', 'Siamese');
const pet5 = new Pet('Screzio', 'Giulia', 'Cane', 'Boxer');

console.log('***Esercizio 2***')
console.log(pet1.padrone(pet3))
console.log(pet1.padrone(pet2))
console.log(pet2.padrone(pet4))*/



const btnAggiungi = document.getElementById('submit');
const animaliCompagnia = [];


btnAggiungi.addEventListener('click', e => {
    e.preventDefault();

    let petName = document.getElementById('petName').innerText;
    let padrone = document.getElementById('ownerName').innerText;
    let species = document.getElementById('petSpecies').innerText;
    let breed = document.getElementById('petBreed').innerText;

    let pet = new Pet(petName, padrone, species, breed)
    animaliCompagnia.push(pet);

    stampaPet();
});



const stampaPet = () => {
    let elenco = document.getElementById('elenco');
    elenco.innerHTML = '';

};

