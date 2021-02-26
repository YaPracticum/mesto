import { Card } from './Card.js';
import { FormValidator } from './FormValidator.js';
import { initialCards } from './initial-cards.js';

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

export const popupWindowLargeImage = document.querySelector('#popup_large-image');
export const popupImage = document.querySelector('.popup__image');
export const popupTitle = document.querySelector('.popup__title-image');
export const popupImageCloseButton = document.querySelector('#popup_large-image_close-button');

let currentPopup;
  
// Устанавливаем слушателей открытия попапов по Escape и клику на overlay
function addClosePopupListeners(currentPopup) { 
  currentPopup.addEventListener("mousedown", closePopupClick); 
  window.addEventListener("keyup", closePopupEscape); 
}

// Убираем слушателей открытия попапов по Escape и клику на overlay
function removeClosePopupListeners(currentPopup) {
  currentPopup.removeEventListener("mousedown", closePopupClick); 
  window.removeEventListener("keyup", closePopupEscape); 
}

// Открытие попапов
function openPopup(currentPopup) {
  addClosePopupListeners(currentPopup);
  currentPopup.classList.add('popup_opened');
  clearErrorMessages();
}

// Закрытие попапов
function closePopup(currentPopup) {
  removeClosePopupListeners(currentPopup);
  currentPopup.classList.remove('popup_opened');
}

// Чистим ошибки импутов формы
function clearErrorMessages() {
  const allImputElements = (document.querySelectorAll('.popup__input'));
  allImputElements.forEach(element => {
    element.classList.remove('popup__input_type_error');
    element.nextElementSibling.classList.remove('popup__input-error_active');
  });
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
  //clearErrorMessages(validationParameters);
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
  currentPopup
    .querySelector('.popup__submit-button')
    .classList.add('popup__submit-button_inactive');
  openPopup(currentPopup);
  document.getElementById('cardForm').reset();
}

function closeAddCardPopup() {
  closePopup(popupAddCard);
}

//Попап увеличения картинки
export function openPopupImage() {
  currentPopup = popupWindowLargeImage;
  openPopup(currentPopup);
};

function closePopupImage() {
  closePopup(popupWindowLargeImage);
}

// Экземпляр класса FormValidator для добавления карточек
function addCardFormValidator() {
  const settingsAddCardFormValidation = {
    formElement: document.querySelector('.addCardForm'),
    inputSelector: document.querySelectorAll('.addCardForm .popup__input'),
    inputErrorMessage: document.querySelectorAll('.addCardForm .popup__input-error'),
    submitButtonSelector: document.querySelector('.addCardForm .popup__submit-button')
  }
  const addCardFormValidator = new FormValidator(settingsAddCardFormValidation, settingsAddCardFormValidation.formElement);
  const addCardFormValidation = addCardFormValidator.enableValidation();
  return addCardFormValidation;
}

// Экземпляр класса FormValidator для редактирование профиля
function editProfileFormValidator() {
  const settingseditProfileFormValidation = {
    formElement: document.querySelector('.profileForm'),
    inputSelector: document.querySelectorAll('.profileForm .popup__input'),
    inputErrorMessage: document.querySelectorAll('.profileForm .popup__input-error'),
    submitButtonSelector: document.querySelector('.profileForm .popup__submit-button')
  }
  const editProfileFormValidator = new FormValidator(settingseditProfileFormValidation, settingseditProfileFormValidation.formElement);
  const editProfileFormValidation = editProfileFormValidator.enableValidation();
  return editProfileFormValidation;
}

addCardFormValidator();
editProfileFormValidator();

// Вывод заданного массива карточек на страницу
initialCards.forEach((item) => {
  const card = new Card(item.title, item.imageLink);
  const cardElement = card.generateCard();
  document.querySelector('.cards').append(cardElement);
});

// Обработчик «отправки» формы добавления карточки
function handleAddCardFormSubmit (evt) {
  evt.preventDefault(); 

  const card = new Card(inputTitle.value, inputImageLink.value);
  const cardElement = card.generateCard();
  document.querySelector('.cards').prepend(cardElement);
  closeAddCardPopup();
}

// Закрытие попапов по Escape
function closePopupEscape() {
  document.addEventListener('keyup', function (evt) {
    if ((evt.key === 'Escape')) {
      closePopup(currentPopup);
    };
  });
}

// Закрытие попапов по клику на overlay
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