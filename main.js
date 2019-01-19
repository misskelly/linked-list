var cardsArea = document.querySelector('.cards-area');
var titleInput = document.getElementById('title');
var urlInput = document.getElementById('url');
var submit = document.querySelector('.submit');

submit.addEventListener('click', createNew);
cardsArea.addEventListener('click', whichButton)

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
          <button class="card-button unread" id="read-button">
            Read
          </button>
          <button class="card-button delete" id="delete-button">
            Delete
          </button>
        </div>
      </article>`);
}

function createNew(e) {
  e.preventDefault();
  let newCard = new Card(titleInput.value, urlInput.value);
  if (titleInput.value.length === 0 || urlInput.value.length === 0) {
    alert("Uh Oh, you forgot something!");
  } else {
    addCard(newCard);
  }
  titleInput.value = '';
  urlInput.value = '';
}

function whichButton(e) {
  // debugger
  var thisCard = e.target.parentElement.parentElement;
  if (e.target.classList.contains('delete' || 'read')) {
    deleteCard(thisCard);
  } else if (e.target.classList.contains('unread')) {
    e.target.classList.replace('unread', 'read');
  }
}

function deleteCard(card) {
  card.style.display = 'none';
}







