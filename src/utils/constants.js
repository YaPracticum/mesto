const popupEditProfile = '#popup_edit-profile';

const popupAddCard = '#popup_add-card';
const cardsContainer = '.cards';

const profileEditButton = document.querySelector('.profile__edit-button');
const profileAddButton = document.querySelector('.profile__add-button');
const profileAvatarButton = document.querySelector('.profile__avatar');

const inputName = document.querySelector('.popup__input_name');
const inputRole = document.querySelector('.popup__input_role');

const profileName = '.profile__name';
const profileRole = '.profile__role';
const profileAvatar = '.profile__avatar-image';

const popupWindowLargeImage = '#popup_large-image';
const popupConfirmation = '.popup_confirmation';
const popupEditAvatar = '#popup_edit-avatar';

const validationParameters = {
  inputs: '.popup__input',
  inputErrorMessage: '.popup__input-error',
  inputError: 'popup__input_type_error',
  inputErrorMessageActive: 'popup__input-error_active',
  submitButton: '.popup__submit-button',
  submitButtonInactive: 'popup__submit-button_inactive'
}

export {
  popupEditProfile,
  popupAddCard,
  cardsContainer,
  profileEditButton,
  profileAddButton,
  profileAvatarButton,
  inputName,
  inputRole,
  profileName,
  profileRole,
  popupWindowLargeImage,
  validationParameters,
  profileAvatar,
  popupConfirmation,
  popupEditAvatar
  };