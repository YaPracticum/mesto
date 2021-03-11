import { Card } from '../js/Card.js';
import { FormValidator } from '../js/FormValidator.js';
import {Section} from '../components/Section.js';

// import { initialCards } from '../../js/initial-cards.js';

import {
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
  } from '../utils/constants.js';

let currentPopup;


// // Создание карточки
// function createCard(title, imageLink) {
//   const cardSelector = '.card-template';
//   const card = new Card(title, imageLink, cardSelector, handleCardClick);
//   const cardElement = card.generateCard();
//   return cardElement;
// }

// // Вывод заданного массива карточек на страницу
// initialCards.forEach(element => {
//   const card = createCard(element.title, element.imageLink);
//   cardsContainer.append(card);
// })


const createCard = (title, imageLink) => {
  const cardSelector = '.card-template';
  const card = new Card(title, imageLink, cardSelector, handleCardClick);
  return card;
}

const cardsList = new Section({
  items: initialCards,
  renderer: (element) => {
    const card = createCard(element.title, element.imageLink);
    const cardElement = card.generateCard();
    cardsList.addItem(cardElement);
  }
}, cardsContainer);

cardsList.renderItems();

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

// Обработчик «отправки» формы добавления карточки
function handleAddCardFormSubmit (evt) {
  evt.preventDefault(); 

  const card = createCard(inputTitle.value, inputImageLink.value);
  const cardElement = card.generateCard();
  cardsList.addItem(cardElement, 'prepend');
  // cardsContainer.prepend(card);
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