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
  } from '../utils/constants.js';

let myCard;
let myUserId;

const api = new Api ({
  baseUrl: 'https://mesto.nomoreparties.co/v1/cohort-24',
  headers: {
    authorization: '97068222-e463-4c4e-8f6b-5881b2ebfd04',
    'Content-Type': 'application/json'
  }
});

Promise.all([api.getInitialCards(), api.getUserInfo()])
  .then(([cards, user]) => {
    myUserId = user._id;
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


function renderLoading(isLoading) {
  const elements = document.querySelectorAll('.popup__submit-button');
  Array.from(elements).forEach((element) => {
    if (isLoading) {
      element.textContent = 'Сохранение...';
    } else {
      element.textContent = element.value;
    }
  })
}

const popupWithConfirmation = new PopupWithConfirmation(popupConfirmation, {
  submit: (data) => {
    renderLoading(true);
    api.deleteCard(data)
    .then((res) => {
      myCard.deleteCard(res);
    })
    .catch((err) => {
      console.log(err);
    })
    .finally(() => {
      popupWithConfirmation.close();
      renderLoading(false);
    })
  }
})

popupWithConfirmation.setEventListeners();

const cardsList = new Section({
  renderer: (data) => {
    const card = createCard(data);
    const cardElement = card.generateCard();
    cardsList.addItem(cardElement);
  }
}, cardsContainer);

const createCard = (data) => {
  const cardSelector = '.card-template';
  const card = new Card(data, myUserId, cardSelector, handleCardClick, {
    handleTrashCanClick: () => {
      myCard = card;
      popupWithConfirmation.open(data);
    },
    addLike: (data) => {
      api.addLike(data)
        .then((data) => {
          card.likeCounter(data);
        })
        .catch((err) => {
          console.log(err);
        })
    },
    deleteLike: (data) => {
      api.deleteLike(data)
        .then((data) => {
          card.likeCounter(data);
        })
        .catch((err) => {
          console.log(err);
        })
    },
  });
  return card;
}

const popupWithAddCardForm = new PopupWithForm(popupAddCard, {
  submit: (data) => {
    renderLoading(true);
    api.createNewCard(data)
    .then((data) => {
      const card = createCard(data);
      const cardElement = card.generateCard();
      cardsList.addItem(cardElement, 'prepend');
    })
    .catch((err) => {
      console.log(err);
    })
    .finally(() => {
      popupWithAddCardForm.close();
      renderLoading(false);
    })
  }
})

popupWithAddCardForm.setEventListeners();

const popupWithEditProfile = new PopupWithForm(popupEditProfile, {
  submit: (data) => {
    renderLoading(true);
    api.setUserInfo(data)
    .then((data) => {
      userInfo.setUserInfo(data);
    })
    .catch((err) => {
      console.log(err);
    })
    .finally(() => {
      popupWithEditProfile.close();
      renderLoading(false);
    })
  }
})

popupWithEditProfile.setEventListeners();

const popupWithEditAvatarForm = new PopupWithForm(popupEditAvatar, {
  submit: (data) => {
    renderLoading(true);
    api.setUserAvatar(data)
    .then((data) => {
      userInfo.setUserAvatar(data);
    })
    .catch((err) => {
      console.log(err);
    })
    .finally(() => {
      popupWithEditAvatarForm.close();
      renderLoading(false);
    })
  }
})

popupWithEditAvatarForm.setEventListeners();


profileEditButton.addEventListener('click', () => {
  const profileData = userInfo.getUserInfo();
  inputName.value = profileData.name;
  inputRole.value = profileData.role;
  popupWithEditProfile.open();
  editProfileFormValidator.resetValidation();
})

profileAddButton.addEventListener('click', () => {
  popupWithAddCardForm.open();
  addCardFormValidator.resetValidation();
})

profileAvatarButton.addEventListener('click', () => {
  popupWithEditAvatarForm.open();
  popupWithEditAvatarFormValidator.resetValidation();
})

const addCardFormValidator = new FormValidator(validationParameters, '.addCardForm');
addCardFormValidator.enableValidation(); 

const editProfileFormValidator = new FormValidator(validationParameters, '.profileForm');
editProfileFormValidator.enableValidation(); 

const popupWithEditAvatarFormValidator = new FormValidator(validationParameters, '.avatarForm');
popupWithEditAvatarFormValidator.enableValidation(); 