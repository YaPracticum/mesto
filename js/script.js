const initialCards = [
  {
    title: 'Архыз',
    imageLink: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/arkhyz.jpg'
  },
  {
    title: 'Челябинская область',
    imageLink: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/chelyabinsk-oblast.jpg'
  },
  {
    title: 'Иваново',
    imageLink: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/ivanovo.jpg'
  },
  {
    title: 'Камчатка',
    imageLink: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/kamchatka.jpg'
  },
  {
    title: 'Холмогорский район',
    imageLink: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/kholmogorsky-rayon.jpg'
  },
  {
    title: 'Байкал',
    imageLink: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/baikal.jpg'
  }
];

let popupWindow = document.querySelector('.popup');
let formElement = document.querySelector('.popup__container');
let profileEditButton = document.querySelector('.profile__edit-button');
let popupCloseButton = document.querySelector('.popup__close-button');
let inputName = document.querySelector('.popup__input_name');
let inputRole = document.querySelector('.popup__input_role');
let profileName = document.querySelector('.profile__name');
let profileRole = document.querySelector('.profile__role');
const cardsList = document.querySelector('.cards');

function openPopup() {
  popupWindow.classList.add('popup_opened');
  inputName.value = profileName.textContent;
  inputRole.value = profileRole.textContent;
}

function closePopup() {
  popupWindow.classList.remove('popup_opened');
}

// Обработчик «отправки» формы, хотя пока
// она никуда отправляться не будет
function handleFormSubmit (evt) {
  evt.preventDefault(); 

  profileName.textContent = inputName.value;
  profileRole.textContent = inputRole.value;
  closePopup()

}

// Функция построения элемента карточки
function addCard (title, imageLink) {
  const cardTemplate = document.querySelector('#card-template').content;
  const cardElement = cardTemplate.cloneNode(true);
  cardElement.querySelector('.card__image').src = imageLink;
  cardElement.querySelector('.card__image').alt = title;
  cardElement.querySelector('.card__title').textContent = title;
  cardsList.append(cardElement);
}

// Функция вывода карточек на страницу
function displayCards(cards) {
  cards.forEach(item => {
    addCard (item.title, item.imageLink);
  });
}

profileEditButton.addEventListener('click', openPopup);
popupCloseButton.addEventListener('click', closePopup);
formElement.addEventListener('submit', handleFormSubmit);

displayCards(initialCards);

