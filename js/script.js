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


function openPopup(open) {
  open.classList.add('popup_opened');
}

function closePopup(close) {
  close.classList.remove('popup_opened');
}

// Попап редактирования профиля
function openEditProfilePopup() {
  openPopup(popupEditProfile);
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
  openPopup(popupAddCard);
  inputTitle.value = '';
  inputImageLink.value = '';
}

function closeAddCardPopup() {
  closePopup(popupAddCard);
}

//Попап увеличения картинки
function openPopupImage(evt) {
  const eventTarget = evt.target;
  popupWindowLargeImage.classList.add('popup_opened');
  popupImage.src = eventTarget.src;
  popupImage.alt = eventTarget.alt;
  const cardTitle = eventTarget.closest('.card');
  popupTitle.textContent = cardTitle.querySelector('.card__title').textContent;
};

function closePopupImage() {
  closePopup(popupWindowLargeImage);
}

// Создание карточки
function addCardElement(title, imageLink) {
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

// Обработчик «отправки» формы добавления карточки
function handleAddCardFormSubmit (evt) {
  evt.preventDefault(); 
  const card = addCardElement(inputTitle.value, inputImageLink.value);
  cardsList.prepend(card);
  closeAddCardPopup();
}

// Вывод заданного массива карточек на страницу
initialCards.forEach(function(elem) {
  const card = addCardElement(elem.title, elem.imageLink);
  cardsList.append(card); 
});

profileEditButton.addEventListener('click', openEditProfilePopup);
popupEditProfileCloseButton.addEventListener('click', closeEditProfilePopup);
profileAddButton.addEventListener('click', openAddCardPopup);
popupAddCardCloseButton.addEventListener('click', closeAddCardPopup);
formEditProfileElement.addEventListener('submit', handleEditProfileFormSubmit);
formAddCardElement.addEventListener('submit', handleAddCardFormSubmit);
popupImageCloseButton.addEventListener('click', closePopupImage);