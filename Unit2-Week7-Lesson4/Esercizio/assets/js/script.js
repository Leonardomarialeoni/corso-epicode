const dataURL = 'https://api.pexels.com/v1/search?query=';
const API_KEY = 'TXAl4tsq0AH939vI13rKvpyMo7xSgfkSwtTUiEnLKjjvEI0zqABAVoL5';
let query = 'people';
const cards = document.getElementById('cards');
const btnSearch = document.getElementById('button-addon2');
const input = document.getElementById('search');

window.addEventListener('load', init);

function init() {
	loadImages(query);
}

const loadImages = async query => {
	try {
		let response = await fetch(dataURL + query, {
			headers: {
				Authorization: API_KEY,
			},
		});
		let data = await response.json();
		printData(data, query);
	} catch (error) {
		console.log(error);
	}
};

const printData = data => {
	cards.innerHTML = '';
	data.photos.forEach(item => {
		let div = document.createElement('div');
		div.classList.add('col-md-4');
        div.id = `${item.id}`;
		div.innerHTML = `
            <div class="card mb-4">
                <img src="${item.src.original}" style="width: 100%" />
                <div class="card-title">
                    <h5>Lorem Ipsum</h5>
                </div>
                <div class="card-body">
                    <p class="card-text">
                        ${item.alt}
                    </p>
                </div>
                <div class="card-footer">
                    <button type="button" class="btn btn-primary" data-bs-toggle="modal" data-bs-target="#id-${item.id}">
                        Immagine
                    </button>
                    <button type="button" class="btn btn-danger" onclick="nascondi(${item.id});">Nascondi</button>
                    <div
			            class="modal fade"
			            id="id-${item.id}"
			            tabindex="-1"
			            aria-labelledby="exampleModalLabel"
			            aria-hidden="true">
			            <div class="modal-dialog">
				            <div class="modal-content">
					            <div class="modal-header">
						            <h1 class="modal-title fs-5" id="exampleModalLabel">
							
						            </h1>
						            <button
							            type="button"
							            class="btn-close"
							            data-bs-dismiss="modal"
							            aria-label="Close"></button>
					                </div>
					                <div class="modal-body" id="cardImage">
                                        <img src="${item.src.original}" style="width: 100%" />
					                </div>
					                <div class="modal-footer">
						                <button
							                type="button"
							                class="btn btn-secondary"
							                data-bs-dismiss="modal">
							                Close
						                </button>
					                </div>
				                </div>
			                </div>
		                </div>
                    </div>
                </div>
            `;
		cards.appendChild(div);
	});
};

btnSearch.addEventListener('click', function (e) {
	e.preventDefault();
	query = input.value;
	loadImages(query);
});

function nascondi(cardId) {
    let card = document.getElementById(cardId);
    card.style.display = 'none';
}