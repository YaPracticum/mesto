import './index.css';

import { Card } from '../components/Card.js';
import { FormValidator } from '../components/FormValidator.js';
import { Section } from '../components/Section.js';
import { PopupWithImage } from '../components/PopupWithImage.js';
import { PopupWithForm } from '../components/PopupWithForm.js';
import { PopupWithConfirmation } from '../components/PopupWithConfirmation.js';
import { UserInfo } from '../components/UserInfo.js';
import { Api } from '../components/Api.js';

import {
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
  validationParameters,
  profileAvatar,
  popupConfirmation
  } from '../utils/constants.js';

const api = new Api ({
  baseUrl: 'https://mesto.nomoreparties.co/v1/cohort-21',
  headers: {
    authorization: 'ecbf5b4d-1113-4e35-a3c6-5109ec97ddb7',
    'Content-Type': 'application/json'
  }
});

Promise.all([api.getInitialCards(), api.getUserInfo()])
  .then(([cards, user]) => {
    userInfo.setUserInfo(user);
    cardsList.renderItems(cards);
  })
  .catch((err) => {
      console.log(`${err}`);
  });

const userInfo = new UserInfo({ profileName, profileRole, profileAvatar });

const popupLargeImage = new PopupWithImage(popupWindowLargeImage);

function handleCardClick(title, imagelink) {
  popupLargeImage.open(title, imagelink);
}

popupLargeImage.setEventListeners();




const popupWithConfirmation = new PopupWithConfirmation(popupConfirmation, {
  submit: (data) => {
    api.deleteCard(data)
    .then((res) => {
      // userInfo.setUserInfo(res);
      console.log(res);
    })
    .catch((err) => {
      console.log(err);
    })
    .finally(() => {
      popupWithConfirmation.close();
    })
  }
})

function handleTrashCanClick(data) {
  popupWithConfirmation.open(data);
}

popupWithConfirmation.setEventListeners();







const cardsList = new Section({
  renderer: (data) => {
    const card = createCard(data);
    const cardElement = card.generateCard();
    cardsList.addItem(cardElement);
    //card.likeCounter(data);
  }
}, cardsContainer);

const createCard = (data) => {
  const cardSelector = '.card-template';
  const card = new Card(data, cardSelector, handleCardClick, handleTrashCanClick);
  return card;
}

const popupWithAddCardForm = new PopupWithForm(popupAddCard, {
  submit: (data) => {
    api.createNewCard(data)
    .then((res) => {
      const card = createCard(res);
      const cardElement = card.generateCard();
      cardsList.addItem(cardElement, 'prepend');
    })
    .catch((err) => {
      console.log(err);
    })
    .finally(() => {
      popupWithAddCardForm.close();
    })
  }
})

popupWithAddCardForm.setEventListeners();

profileAddButton.addEventListener('click', () => {
  popupWithAddCardForm.open();
  addCardFormValidator.resetValidation();
})

const popupWithEditProfile = new PopupWithForm(popupEditProfile, {
  submit: (data) => {
    api.setUserInfo(data)
    .then((res) => {
      userInfo.setUserInfo(res);
    })
    .catch((err) => {
      console.log(err);
    })
    .finally(() => {
      popupWithEditProfile.close();
    })
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