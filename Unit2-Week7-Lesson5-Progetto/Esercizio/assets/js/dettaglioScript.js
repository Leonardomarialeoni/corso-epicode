const apiURL = "https://striveschool-api.herokuapp.com/api/product/";
const accessToken = "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2NWVhZjA5ODJkN2IxMTAwMTkwZTcwZDciLCJpYXQiOjE3MDk4OTU4MzIsImV4cCI6MTcxMTEwNTQzMn0.f1R869w-VK_A375khG72R2Or8Byy6gChMfEDTYt6ohk";
const dettaglioOggetto = document.getElementById('cards');
let id;


window.addEventListener('load', function () {
    const params = new URLSearchParams(location.search);
    id = params.get('id');
    caricaOggetti();
});

const caricaOggetti = async () => {
    try {
        const response = await fetch(apiURL + id, {
            method: "GET",
            headers: {
                "Authorization": accessToken
            }
        });
        let data = await response.json();
        oggetti = data;
        console.log(oggetti);
        print(oggetti);
    } catch (error) {
        console.log(error);
    }
};

function print() {
    for (let i = 0; i < oggetti.length; i++) {
        let div = document.createElement('div');
        div.classList.add('col');
        div.innerHTML = `
        <div class="col-6 text-center">
        <img src="${oggetti.imageUrl}" width="100%" />
    </div>
    <div class="col-6">
        <h6>${oggetti.brand}</h6>
        <h2>${oggetti.name}</h2>
        <span class="badge bg-dark text-warning">${oggetti.price}€</span>
        <p class="mt-4">${oggetti.description}</p>
    </div>`;
        dettaglioOggetto.appendChild(div);
    }
}