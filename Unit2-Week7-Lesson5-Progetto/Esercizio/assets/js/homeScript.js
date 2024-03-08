const apiURL = "https://striveschool-api.herokuapp.com/api/product/";
let oggetti = [];
const accessToken = "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2NWVhZjA5ODJkN2IxMTAwMTkwZTcwZDciLCJpYXQiOjE3MDk4OTU4MzIsImV4cCI6MTcxMTEwNTQzMn0.f1R869w-VK_A375khG72R2Or8Byy6gChMfEDTYt6ohk";
const cards = document.getElementById('cards');


const caricaOggetti = async () => {
    try {
        const response = await fetch(apiURL, {
            method: "GET",
            headers: {
                "Authorization": accessToken
            }
        });
        const data = await response.json();
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
        <div class="card h-100">
            <img src="${oggetti[i].imageUrl}" class="img-fluid card-img-top" />
            <div class="card-body">
                <h5 class="card-title">${oggetti[i].name}</h5>
                <p>${oggetti[i].description} </p>
                <div>
                    <button class="btn btn-warning")><a href="backOffice.html" class="text-decoration-none text-dark">Modifica</a></button>
                    <button class="btn btn-info mt-2"><a href="dettaglio.html(${oggetti[i]._id})" class="text-decoration-none text-dark">Scopri di piu</a></button>
                </div>
            </div>
        </div>`;
		cards.appendChild(div);
	}
}

window.addEventListener('load', caricaOggetti());
