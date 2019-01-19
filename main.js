var  cardsArea = document.querySelector('.cards-area');
var titleInput = document.getElementById('title');
var urlInput = document.getElementById('url');
var submit = document.querySelector('.submit');

submit.addEventListener('click', createNew);

// function cardObj(card) {
//   let newCard = new Card(card.title, card.link)
// }

function addCard(card) {
  cardsArea.insertAdjacentHTML('afterbegin', 
    `<article class="card">
        <h2 class="card-title">
          ${card.title}
        </h2>
        <div class="card-link">
        <a href="">${card.link}</a>
        </div>
        <div>
          <button class="card-button" id="read-button">
            Read
          </button>
          <button class="card-button" id="delete-button">
            Delete
          </button>
        </div>
      </article>`);
}

function createNew(e) {
  e.preventDefault();
  let newCard = new Card(titleInput.value, urlInput.value);
  addCard(newCard);
  titleInput.value = '';
  urlInput.value = '';
}

