async function fetchBooks() {
  try {
    const response = await fetch('https://striveschool-api.herokuapp.com/books');
    const books = await response.json();
    return books;
  } catch (error) {
    console.error('Error fetching books:', error);
    return [];
  }
}

function createBookCard(book) {
  const card = document.createElement('div');
  card.classList.add('col-md-3', 'mb-4');

  const cardBody = document.createElement('div');
  cardBody.classList.add('card-body');

  const title = document.createElement('h5');
  title.classList.add('card-title');
  title.textContent = book.title;

  const category = document.createElement('p');
  category.classList.add('card-text');
  category.textContent = 'Category: ' + book.category;

  const price = document.createElement('p');
  price.classList.add('card-text');
  price.textContent = 'Price: $' + book.price;

  const button = document.createElement('button');
  button.classList.add('btn', 'btn-danger');
  button.textContent = 'Scarta';
  button.addEventListener('click', function() {
    removeCard(card);
  });

  cardBody.appendChild(title);
  cardBody.appendChild(category);
  cardBody.appendChild(price);
  cardBody.appendChild(button);

  const img = document.createElement('img');
  img.classList.add('card-img-top');
  img.setAttribute('src', book.img);
  img.setAttribute('alt', 'Book Cover');

  card.appendChild(img);
  card.appendChild(cardBody);

  return card;
}



async function renderBooks() {
  const booksContainer = document.getElementById('booksContainer');
  const books = await fetchBooks();

  books.forEach(book => {
    const bookCard = createBookCard(book);
    booksContainer.appendChild(bookCard);
  });
}

function removeCard(button) {
  const card = button.closest('.col-md-3');
  card.remove();
}

document.addEventListener('DOMContentLoaded', renderBooks);
