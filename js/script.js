let popupEditProfile = document.querySelector('#popup_edit-profile');
let popupAddCard = document.querySelector('#popup_add-card');
let popupEditProfileCloseButton = document.querySelector('#popup_edit-profile_close-button');
let popupAddCardCloseButton = document.querySelector('#popup_add-card_close-button');
let profileEditButton = document.querySelector('.profile__edit-button');
let profileAddButton = document.querySelector('.profile__add-button');
let formEditProfileElement = document.querySelector('#popup_edit-profile');
let formAddCardElement = document.querySelector('#popup_add-card');
let inputName = document.querySelector('.popup__input_name');
let inputRole = document.querySelector('.popup__input_role');
let profileName = document.querySelector('.profile__name');
let profileRole = document.querySelector('.profile__role');

let inputTitle = document.querySelector('.popup__input_title');
let inputImageLink = document.querySelector('.popup__input_imageLink');
let cardTitle = document.querySelector('.card__title');
let cardImageLink = document.querySelector('.card__image');

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
const cardsList = document.querySelector('.cards');


// Попап редактирования профиля
function openEditProfilePopup() {
  popupEditProfile.classList.add('popup_opened');
  inputName.value = profileName.textContent;
  inputRole.value = profileRole.textContent;
}

function closeEditProfilePopup() {
  popupEditProfile.classList.remove('popup_opened');
}

// Попап добавления карточки
function openAddCardPopup() {
  popupAddCard.classList.add('popup_opened');
}

function closeAddCardPopup() {
  popupAddCard.classList.remove('popup_opened');
}

// Обработчик «отправки» формы редактирования профиля
function handleEditProfileFormSubmit (evt) {
  evt.preventDefault(); 

  profileName.textContent = inputName.value;
  profileRole.textContent = inputRole.value;
  closeEditProfilePopup();
}

// Обработчик «отправки» формы добавления карточки
function handleAddCardFormSubmit (evt) {
  evt.preventDefault(); 

  addCardElement(inputTitle.value, inputImageLink.value);
  closeAddCardPopup()
}

// Создание карточки
function addCardElement(title, imageLink) {
  const cardTemplate = document.querySelector('#card-template').content;
  const cardElement = cardTemplate.cloneNode(true);

  cardElement.querySelector('.card__image').src = imageLink;
  cardElement.querySelector('.card__image').alt = title;
  cardElement.querySelector('.card__title').textContent = title;
  cardsList.prepend(cardElement);
}

// Вывод заданного массива карточек на страницу
initialCards.forEach(function(elem) {
  addCardElement(elem.title, elem.imageLink);
});

profileEditButton.addEventListener('click', openEditProfilePopup);
popupEditProfileCloseButton.addEventListener('click', closeEditProfilePopup);
profileAddButton.addEventListener('click', openAddCardPopup);
popupAddCardCloseButton.addEventListener('click', closeAddCardPopup);
formEditProfileElement.addEventListener('submit', handleEditProfileFormSubmit);
formAddCardElement.addEventListener('submit', handleAddCardFormSubmit);
