import './index.css';

import { Card } from '../components/Card.js';
import { FormValidator } from '../components/FormValidator.js';
import { Section } from '../components/Section.js';
import { PopupWithImage } from '../components/PopupWithImage.js';
import { PopupWithForm } from '../components/PopupWithForm.js';
import { UserInfo } from '../components/UserInfo.js';

import {
  initialCards,
  popupEditProfile,
  popupAddCard,
  cardsContainer,
  profileEditButton,
  profileAddButton,
  inputName,
  inputRole,
  profileName,
  profileRole,
  popupWindowLargeImage,
  validationParameters
  } from '../utils/constants.js';

const createCard = (title, imageLink) => {
  const cardSelector = '.card-template';
  const card = new Card(title, imageLink, cardSelector, handleCardClick);
  return card;
}

const popupLargeImage = new PopupWithImage(popupWindowLargeImage);

function handleCardClick(title, imagelink) {
  popupLargeImage.open(title, imagelink);
}

popupLargeImage.setEventListeners();

const cardsList = new Section({
  items: initialCards,
  renderer: (element) => {
    const card = createCard(element.title, element.imageLink);
    const cardElement = card.generateCard();
    cardsList.addItem(cardElement);
  }
}, cardsContainer);

cardsList.renderItems();

const popupWithAddCardForm = new PopupWithForm(popupAddCard, {
  submit: (element) => {
    const card = createCard(element.title, element.imageLink);
    const cardElement = card.generateCard();
    cardsList.addItem(cardElement, 'prepend');
    popupWithAddCardForm.close();
  }
})

popupWithAddCardForm.setEventListeners();

profileAddButton.addEventListener('click', () => {
  popupWithAddCardForm.open();
  addCardFormValidator.resetValidation();
})

const userInfo = new UserInfo({ profileName,  profileRole });

const popupWithEditProfile = new PopupWithForm(popupEditProfile, {
  submit: (data) => {
    userInfo.setUserInfo(data);
    popupWithEditProfile.close()
  }
})

popupWithEditProfile.setEventListeners();

profileEditButton.addEventListener('click', () => {
  const profileData = userInfo.getUserInfo();
  inputName.value = profileData.name;
  inputRole.value = profileData.role;
  popupWithEditProfile.open();
  editProfileFormValidator.resetValidation();
})

const addCardFormValidator = new FormValidator(validationParameters, '.addCardForm');
addCardFormValidator.enableValidation(); 

const editProfileFormValidator = new FormValidator(validationParameters, '.profileForm');
editProfileFormValidator.enableValidation(); 