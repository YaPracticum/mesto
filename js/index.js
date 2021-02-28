import { Card } from './Card.js';
import { FormValidator } from './FormValidator.js';
import { initialCards } from './initial-cards.js';

const popupEditProfile = document.querySelector('#popup_edit-profile');
//const popupEditProfileCloseButton = document.querySelector('#popup_edit-profile_close-button');
const formEditProfileElement = document.querySelector('#popup_edit-profile');

const popupAddCard = document.querySelector('#popup_add-card');
//const popupAddCardCloseButton = document.querySelector('#popup_add-card_close-button');
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
//const popupImageCloseButton = document.querySelector('#popup_large-image_close-button');
const popups = document.querySelectorAll('.popup');

let currentPopup;


function handleCardClick(title, imagelink) {
  popupImage.src = imagelink;
  popupTitle.textContent = title;
  openPopup(popupWindowLargeImage);
}


// // Устанавливаем слушателей открытия попапов по Escape и клику на overlay
// function addClosePopupListeners(currentPopup) { 
//   currentPopup.addEventListener("mousedown", closePopupClick); 
//   window.addEventListener("keyup", closePopupEscape); 
// }

// // Убираем слушателей открытия попапов по Escape и клику на overlay
// function removeClosePopupListeners(currentPopup) {
//   currentPopup.removeEventListener("mousedown", closePopupClick); 
//   window.removeEventListener("keyup", closePopupEscape); 
// }

// Открытие попапов
function openPopup(currentPopup) {
  //addClosePopupListeners(currentPopup);
  currentPopup.classList.add('popup_opened');
  //clearErrorMessages();
}

// Закрытие попапов
function closePopup(currentPopup) {
  //removeClosePopupListeners(currentPopup);
  currentPopup.classList.remove('popup_opened');
}

// Чистим ошибки импутов формы
// function clearErrorMessages() {
//   const allImputElements = (document.querySelectorAll('.popup__input'));
//   allImputElements.forEach(element => {
//     element.classList.remove('popup__input_type_error');
//     element.nextElementSibling.classList.remove('popup__input-error_active');
//   });
// }

// Попап редактирования профиля
function openEditProfilePopup() {
  currentPopup = popupEditProfile;
  currentPopup
    .querySelector('.popup__submit-button')
    .classList.remove('popup__submit-button_inactive');
  openPopup(currentPopup);
  inputName.value = profileName.textContent;
  inputRole.value = profileRole.textContent;
  //resetValidation()
}

// function closeEditProfilePopup() {
//     closePopup(popupEditProfile);
// }

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
}

// function closeAddCardPopup() {
//   closePopup(popupAddCard);
// }

// //Попап увеличения картинки
// export function openPopupImage() {
//   currentPopup = popupWindowLargeImage;
//   openPopup(currentPopup);
// };

// function closePopupImage() {
//   closePopup(popupWindowLargeImage);
// }

// Экземпляр класса FormValidator для добавления карточек
function addCardFormValidator() {
  const settingsAddCardFormValidation = {
    formElement: '.addCardForm',
    inputs: '.popup__input',
    inputErrorMessage: '.popup__input-error',
    inputError: 'popup__input_type_error',
    inputErrorMessageActive: 'popup__input-error_active',
    submitButton: '.popup__submit-button',
    submitButtonInactive: 'popup__submit-button_inactive'
  }
  const addCardFormValidator = new FormValidator(settingsAddCardFormValidation, settingsAddCardFormValidation.formElement);
  const addCardFormValidation = addCardFormValidator.enableValidation();
  return addCardFormValidation;
}

addCardFormValidator();

// Экземпляр класса FormValidator для редактирование профиля
function editProfileFormValidator() {
  const settingseditProfileFormValidation = {
    formElement: '.profileForm',
    inputs: '.popup__input',
    inputErrorMessage: '.popup__input-error',
    inputError: 'popup__input_type_error',
    inputErrorMessageActive: 'popup__input-error_active',
    submitButton: '.popup__submit-button',
    submitButtonInactive: 'popup__submit-button_inactive'   
  }
  const editProfileFormValidator = new FormValidator(settingseditProfileFormValidation, settingseditProfileFormValidation.formElement);
  const editProfileFormValidation = editProfileFormValidator.enableValidation();
  return editProfileFormValidation;
}

editProfileFormValidator();

function createCard(title, imageLink) {
  const cardSelector = '.card-template';
  const card = new Card(title, imageLink, cardSelector, handleCardClick);
  const cardElement = card.generateCard();
  return cardElement;
}

initialCards.forEach(element => {
  const card = createCard(element.title, element.imageLink);
  cardsContainer.append(card);
})

// // Вывод заданного массива карточек на страницу
// initialCards.forEach((item) => {
//   const cardSelector = '.card-template';
//   const card = new Card(item.title, item.imageLink, cardSelector, handleCardClick);
//   const cardElement = card.generateCard();
//   cardsContainer.append(cardElement);
// });

// Обработчик «отправки» формы добавления карточки
function handleAddCardFormSubmit (evt) {
  evt.preventDefault(); 

  const card = createCard(inputTitle.value, inputImageLink.value);
  cardsContainer.prepend(card);
  closePopup(popupAddCard);
}

//Закрытие попапов по Escape
// function closePopupEscape() {
//   document.addEventListener('keyup', function (evt) {
//     if ((evt.key === 'Escape')) {
//       closePopup(currentPopup);
//     }
//   })
// }

// Закрытие попапов по клику на overlay
// function closePopupClick(evt) { 
//   if (evt.target === evt.currentTarget) { 
//     closePopup(currentPopup);
//   } 
// }

popups.forEach((popup) => {
  popup.addEventListener('mousedown', (evt) => {
    if (evt.target.classList.contains('popup_opened')) {
        closePopup(popup)
    }
    if (evt.target.classList.contains('popup__close-button')) {
      closePopup(popup)
    }
  })
  document.addEventListener('keyup', (evt) => {
    const openedPopup = document.querySelector('.popup_opened');
    if (openedPopup && evt.key === 'Escape') {
      closePopup(popup)
    }
  })
})

profileEditButton.addEventListener('click', openEditProfilePopup);
// popupEditProfileCloseButton.addEventListener('click', closeEditProfilePopup);
profileAddButton.addEventListener('click', openAddCardPopup);
// popupAddCardCloseButton.addEventListener('click', closeAddCardPopup);
formEditProfileElement.addEventListener('submit', handleEditProfileFormSubmit);
formAddCardElement.addEventListener('submit', handleAddCardFormSubmit);
// popupImageCloseButton.addEventListener('click', closePopupImage);