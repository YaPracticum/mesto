
const popupEditProfile = document.querySelector('#popup_edit-profile');
const popupEditProfileCloseButton = document.querySelector('#popup_edit-profile_close-button');
const formEditProfileElement = document.querySelector('#popup_edit-profile');

const popupAddCard = document.querySelector('#popup_add-card');
const popupAddCardCloseButton = document.querySelector('#popup_add-card_close-button');
const formAddCardElement = document.querySelector('#popup_add-card');

const profileEditButton = document.querySelector('.profile__edit-button');
const profileAddButton = document.querySelector('.profile__add-button');

const inputName = document.querySelector('.popup__input_name');
const inputRole = document.querySelector('.popup__input_role');
const profileName = document.querySelector('.profile__name');
const profileRole = document.querySelector('.profile__role');
const inputTitle = document.querySelector('.popup__input_title');
const inputImageLink = document.querySelector('.popup__input_imageLink');

const popupWindowLargeImage = document.querySelector('#popup_large-image');
const popupImage = document.querySelector('.popup__image');
const popupTitle = document.querySelector('.popup__title-image');
const popupImageCloseButton = document.querySelector('#popup_large-image_close-button');

const cardsList = document.querySelector('.cards');
const trashButton = document.querySelector('.card__trash-button');
const cardTemplate = document.querySelector('#card-template').content;
let currentPopup;

function removeClosePopupListeners(currentPopup) {
  currentPopup.removeEventListener("mousedown", closePopupClick); 
  window.removeEventListener("keyup", closePopupEscape); 
} 
 
function addClosePopupListeners(currentPopup) { 
  currentPopup.addEventListener("mousedown", closePopupClick); 
  window.addEventListener("keyup", closePopupEscape); 
}

function openPopup(currentPopup) {
  currentPopup.classList.add('popup_opened');
  addClosePopupListeners(currentPopup);
  if (currentPopup !== popupWindowLargeImage) {
    const validationParameters = {
      formSelector: '.popup__form',
      inputSelector: '.popup__input',
      inputSelectorError: '.popup__input-error',
      submitButtonSelector: '.popup__submit-button',
      inactiveButtonClass: 'popup__submit-button_inactive',
      inputErrorClass: 'popup__input_type_error',
      errorClass: 'popup__input-error_active',
      inputErrorMessage: '.title__input_error',
    }
    enableValidation(validationParameters);
  }
}

function closePopup(currentPopup) {
  removeClosePopupListeners(currentPopup);
  currentPopup.classList.remove('popup_opened');
}

// Попап редактирования профиля
function openEditProfilePopup() {
  currentPopup = popupEditProfile;
  openPopup(currentPopup);
  inputName.value = profileName.textContent;
  inputRole.value = profileRole.textContent;
}

function closeEditProfilePopup() {
    closePopup(popupEditProfile);
}

// Обработчик «отправки» формы редактирования профиля
function handleEditProfileFormSubmit (evt) {
  evt.preventDefault(); 
  profileName.textContent = inputName.value;
  profileRole.textContent = inputRole.value;
  closePopup(popupEditProfile);
}

// Попап добавления карточки
function openAddCardPopup() {
  currentPopup = popupAddCard;
  openPopup(currentPopup);
  inputTitle.value = '';
  inputImageLink.value = '';
}

function closeAddCardPopup() {
  closePopup(popupAddCard);
}

//Попап увеличения картинки
function openPopupImage(evt) {
  const eventTarget = evt.target;
  currentPopup = popupWindowLargeImage;
  openPopup(currentPopup);
  popupImage.src = eventTarget.src;
  popupImage.alt = eventTarget.alt;
  const cardTitle = eventTarget.closest('.card');
  popupTitle.textContent = cardTitle.querySelector('.card__title').textContent;
};

function closePopupImage() {
  closePopup(popupWindowLargeImage);
}

// Создание карточки
function createCardElement(title, imageLink) {
  const cardElement = cardTemplate.cloneNode(true);
  const cardImage = cardElement.querySelector('.card__image');
  cardImage.src = imageLink;
  cardImage.alt = title;
  cardImage.addEventListener('click', openPopupImage);
  cardElement.querySelector('.card__title').textContent = title;
  cardElement.querySelector('.card__like-button').addEventListener('click', function (evt) {
    evt.target.classList.toggle('card__like-button_active');
  });
  cardElement.querySelector('.card__trash-button').addEventListener('click', function (evt) {
    evt.target.closest('.card').remove();
  });
  return cardElement;
}

function addCard(card, order){
  order === 'prepend' ? cardsList.prepend(card) : cardsList.append(card);
}

// Обработчик «отправки» формы добавления карточки
function handleAddCardFormSubmit (evt) {
  evt.preventDefault(); 
  const card = createCardElement(inputTitle.value, inputImageLink.value);
  addCard(card, 'prepend');
  closeAddCardPopup();
}

// Вывод заданного массива карточек на страницу
initialCards.forEach(function(elem) {
  const card = createCardElement(elem.title, elem.imageLink);
  addCard(card, 'append');
});

function closePopupEscape() {
  document.addEventListener('keyup', function (evt) {
    if ((evt.key === 'Escape')) {
      closePopup(currentPopup);
    };
  });
}

function closePopupClick(evt) { 
  if (evt.target === evt.currentTarget) { 
    closePopup(currentPopup); 
  } 
} 

profileEditButton.addEventListener('click', openEditProfilePopup);
popupEditProfileCloseButton.addEventListener('click', closeEditProfilePopup);
profileAddButton.addEventListener('click', openAddCardPopup);
popupAddCardCloseButton.addEventListener('click', closeAddCardPopup);
formEditProfileElement.addEventListener('submit', handleEditProfileFormSubmit);
formAddCardElement.addEventListener('submit', handleAddCardFormSubmit);
popupImageCloseButton.addEventListener('click', closePopupImage);