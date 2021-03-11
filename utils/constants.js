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

const popupEditProfile = document.querySelector('#popup_edit-profile');
const formEditProfileElement = document.querySelector('#popup_edit-profile');

const popupAddCard = document.querySelector('#popup_add-card');
const formAddCardElement = document.querySelector('#popup_add-card');
const addCardForm = document.getElementById('cardForm');
const cardsContainer = '.cards';

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

export {
  initialCards,
  popupEditProfile,
  formEditProfileElement,
  popupAddCard,
  formAddCardElement,
  addCardForm,
  cardsContainer,
  profileEditButton,
  profileAddButton,
  inputName,
  inputRole,
  profileName,
  profileRole,
  inputTitle,
  inputImageLink,
  popupWindowLargeImage,
  popupImage,
  popupTitle,
  popups,
  validationParameters
  };