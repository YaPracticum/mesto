import { Card } from './Card.js';
import { FormValidator } from './FormValidator.js';
import { initialCards } from './initial-cards.js';

const popupEditProfile = document.querySelector('#popup_edit-profile');
const formEditProfileElement = document.querySelector('#popup_edit-profile');

const popupAddCard = document.querySelector('#popup_add-card');
const formAddCardElement = document.querySelector('#popup_add-card');
const addCardForm = document.getElementById('cardForm');
const cardsContainer = document.querySelector('.cards');

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
const popups = document.querySelectorAll('.popup');

const validationParameters = {
  inputs: '.popup__input',
  inputErrorMessage: '.popup__input-error',
  inputError: 'popup__input_type_error',
  inputErrorMessageActive: 'popup__input-error_active',
  submitButton: '.popup__submit-button',
  submitButtonInactive: 'popup__submit-button_inactive'
}

let currentPopup;

// Открытие попапов
function openPopup(currentPopup) {
  currentPopup.classList.add('popup_opened');
  document.addEventListener('keydown', closeByEscape);
}

// Закрытие попапов
function closePopup(currentPopup) {
  currentPopup.classList.remove('popup_opened');
  document.removeEventListener('keydown', closeByEscape);
}

// Попап большой картинки
function handleCardClick(title, imagelink) {
  popupImage.src = imagelink;
  popupTitle.textContent = title;
  openPopup(popupWindowLargeImage);
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
  currentPopup
    .querySelector('.popup__submit-button')
    .classList.add('popup__submit-button_inactive');
  openPopup(currentPopup);
  addCardForm.reset();
  addCardFormValidator.resetValidation();
}

// Попап редактирования профиля
function openEditProfilePopup() {
  currentPopup = popupEditProfile;
  currentPopup
    .querySelector('.popup__submit-button')
    .classList.remove('popup__submit-button_inactive');
  openPopup(currentPopup);
  inputName.value = profileName.textContent;
  inputRole.value = profileRole.textContent;
  editProfileFormValidator.resetValidation();
}

// Экземпляр класса FormValidator для добавления карточек
const addCardFormValidator = new FormValidator(validationParameters, '.addCardForm');
addCardFormValidator.enableValidation(); 

// Экземпляр класса FormValidator для редактирование профиля
const editProfileFormValidator = new FormValidator(validationParameters, '.profileForm');
editProfileFormValidator.enableValidation(); 

// Создание карточки
function createCard(title, imageLink) {
  const cardSelector = '.card-template';
  const card = new Card(title, imageLink, cardSelector, handleCardClick);
  const cardElement = card.generateCard();
  return cardElement;
}

// Вывод заданного массива карточек на страницу
initialCards.forEach(element => {
  const card = createCard(element.title, element.imageLink);
  cardsContainer.append(card);
})

// Обработчик «отправки» формы добавления карточки
function handleAddCardFormSubmit (evt) {
  evt.preventDefault(); 

  const card = createCard(inputTitle.value, inputImageLink.value);
  cardsContainer.prepend(card);
  closePopup(popupAddCard);
}

// Закрытие попапов по Escape
function closeByEscape(evt) {
  if (evt.key === 'Escape') {
    const openedPopup = document.querySelector('.popup_opened');
    closePopup(openedPopup);
  }
}

// Закрытие попапов по клику на overlay
popups.forEach((popup) => {
  popup.addEventListener('mousedown', (evt) => {
    if (evt.target.classList.contains('popup_opened')) {
        closePopup(popup)
    }
    if (evt.target.classList.contains('popup__close-button')) {
      closePopup(popup)
    }
  })
})

profileEditButton.addEventListener('click', openEditProfilePopup);
profileAddButton.addEventListener('click', openAddCardPopup);
formEditProfileElement.addEventListener('submit', handleEditProfileFormSubmit);
formAddCardElement.addEventListener('submit', handleAddCardFormSubmit);