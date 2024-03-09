const apiURL = "https://striveschool-api.herokuapp.com/api/product/";
const accessToken = "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2NWVhZjA5ODJkN2IxMTAwMTkwZTcwZDciLCJpYXQiOjE3MDk4OTU4MzIsImV4cCI6MTcxMTEwNTQzMn0.f1R869w-VK_A375khG72R2Or8Byy6gChMfEDTYt6ohk";
const salva = document.getElementById('salva');
const reset = document.getElementById('reset');

const aggiungiOggetti = async () => {
    const nome = document.getElementById('nome').value;
    const modello = document.getElementById('modello').value;
    const prezzo = document.getElementById('prezzo').value;
    const imgUrl = document.getElementById('imgUrl').value;
    const descrizione = document.getElementById('descrizione').value;
    const body = {
        name: nome,
        brand: modello,
        price: prezzo,
        imageUrl: imgUrl,
        description: descrizione
    }
    console.log(body);
    try {
        const response = await fetch(apiURL, {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
                "Authorization": `${accessToken}`
            },
            body: JSON.stringify(body)
        });
        const data = await response.json();
        oggetti = data;
        console.log(oggetti);
    } catch (error) {
        console.log(error);
    }
};


const modificaOggetti = async () => {
    const nome = document.getElementById('nome').value;
    const modello = document.getElementById('modello').value;
    const prezzo = document.getElementById('prezzo').value;
    const imgUrl = document.getElementById('imgUrl').value;
    const descrizione = document.getElementById('descrizione').value;
    const body = {
        name: nome,
        brand: modello,
        price: prezzo,
        imageUrl: imgUrl,
        description: descrizione
    }
    console.log(body);
    try {
        const response = await fetch(apiURL, {
            method: "PUT",
            headers: {
                "Content-Type": "application/json",
                "Authorization": `${accessToken}`
            },
            body: JSON.stringify(body)
        });
        const data = await response.json();
        oggetti = data;
        console.log(oggetti);
    } catch (error) {
        console.log(error);
    }
};