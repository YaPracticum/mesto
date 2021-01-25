let popupEditProfile = document.querySelector('#popup_edit-profile');
let popupEditProfileCloseButton = document.querySelector('#popup_edit-profile_close-button');
let formEditProfileElement = document.querySelector('#popup_edit-profile');

let popupAddCard = document.querySelector('#popup_add-card');
let popupAddCardCloseButton = document.querySelector('#popup_add-card_close-button');
let formAddCardElement = document.querySelector('#popup_add-card');

let profileEditButton = document.querySelector('.profile__edit-button');
let profileAddButton = document.querySelector('.profile__add-button');

let inputName = document.querySelector('.popup__input_name');
let inputRole = document.querySelector('.popup__input_role');
let profileName = document.querySelector('.profile__name');
let profileRole = document.querySelector('.profile__role');
let inputTitle = document.querySelector('.popup__input_title');
let inputImageLink = document.querySelector('.popup__input_imageLink');

let popupWindowLargeImage = document.querySelector('#popup_large-image');
let popupImage = document.querySelector('.popup__image');
let popupTitle = document.querySelector('.popup__title-image');
let popupImageCloseButton = document.querySelector('#popup_large-image_close-button');

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
const cardsList = document.querySelector('.cards');
const trashButton = document.querySelector('.card__trash-button');

// Попап редактирования профиля
function openEditProfilePopup() {
  popupEditProfile.classList.add('popup_opened');
  inputName.value = profileName.textContent;
  inputRole.value = profileRole.textContent;
}

function closeEditProfilePopup() {
  popupEditProfile.classList.remove('popup_opened');
}

// Обработчик «отправки» формы редактирования профиля
function handleEditProfileFormSubmit (evt) {
  evt.preventDefault(); 

  profileName.textContent = inputName.value;
  profileRole.textContent = inputRole.value;
  closeEditProfilePopup();
}

// Попап добавления карточки
function openAddCardPopup() {
  popupAddCard.classList.add('popup_opened');
  inputTitle.value = '';
  inputImageLink.value = '';
}

function closeAddCardPopup() {
  popupAddCard.classList.remove('popup_opened');
}

//Попап увеличения картинки
function openPopupImage(evt) {
  const eventTarget = evt.target;
  popupWindowLargeImage.classList.add('popup_opened');
  popupImage.src = eventTarget.src;
  const cardTitle = eventTarget.closest('.card');
  popupTitle.textContent = cardTitle.querySelector('.card__title').textContent;
};

function closePopupImage() {
  popupWindowLargeImage.classList.remove('popup_opened');
}

// Создание карточки
function addCardElement(title, imageLink, order) {
  const cardTemplate = document.querySelector('#card-template').content;
  const cardElement = cardTemplate.cloneNode(true);

  cardElement.querySelector('.card__image').src = imageLink;
  cardElement.querySelector('.card__image').alt = title;
  cardElement.querySelector('.card__title').textContent = title;
  cardElement.querySelector('.card__image').addEventListener('click', openPopupImage);
  cardElement.querySelector('.card__like-button').addEventListener('click', function (evt) {
    evt.target.classList.toggle('card__like-button_active');
  });
  cardElement.querySelector('.card__trash-button').addEventListener('click', function (evt) {
    evt.target.closest('.card').remove();
  });

  order === 'preppend' ? cardsList.prepend(cardElement) : cardsList.append(cardElement);
}

// Обработчик «отправки» формы добавления карточки
function handleAddCardFormSubmit (evt) {
  evt.preventDefault(); 

  addCardElement(inputTitle.value, inputImageLink.value, 'preppend');
  closeAddCardPopup()
}

// Вывод заданного массива карточек на страницу
initialCards.forEach(function(elem) {
  addCardElement(elem.title, elem.imageLink);
});

profileEditButton.addEventListener('click', openEditProfilePopup);
popupEditProfileCloseButton.addEventListener('click', closeEditProfilePopup);
profileAddButton.addEventListener('click', openAddCardPopup);
popupAddCardCloseButton.addEventListener('click', closeAddCardPopup);
formEditProfileElement.addEventListener('submit', handleEditProfileFormSubmit);
formAddCardElement.addEventListener('submit', handleAddCardFormSubmit);
popupImageCloseButton.addEventListener('click', closePopupImage);