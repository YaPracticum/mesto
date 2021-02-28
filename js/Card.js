// import { 
//   popupTitle, 
//   popupImage, 
//   openPopupImage
// } from './index.js';

class Card {
  constructor(title, imageLink, cardSelector, handleCardClick) {
    this._title = title;
    this._imageLink = imageLink;
    this._cardSelector = document.querySelector(cardSelector).content.querySelector('.card').cloneNode(true);
    this._cardImage = this._cardSelector.querySelector('.card__image');
    this._cardLike = this._cardSelector.querySelector('.card__like-button');
    this._handleCardClick = handleCardClick;
  }

  // Создаем карточку
  generateCard() {
    this._cardImage.src = this._imageLink;
    this._cardImage.alt = this._title;
    this._cardSelector.querySelector('.card__title').textContent = this._title;
    this._setEventListeners();
    return this._cardSelector;
  }

  // Устанавливаем слушателей
  _setEventListeners() {
    this._cardLike.addEventListener('click', () => {
      this._handleLikeClick();
    });

    this._cardSelector.querySelector('.card__trash-button').addEventListener('click', () => {
      this._handleTrashCanClick();
    });

    // this._cardImage.addEventListener('click', () => {
    //   this._handleImagePopup();
    // });
    this._cardImage.addEventListener('click', () => {
      this._handleCardClick(this._title, this._imageLink)
    });
  }

  // Показываем/убираем лайк
  _handleLikeClick() {
    this._cardLike.classList.toggle('card__like-button_active');
  }

  // Удаляем карточку по клику на "мусорке"
  _handleTrashCanClick() {
    this._cardSelector.closest('.card').remove();
  }

  // Показываем большую картинку
  // _handleImagePopup() {
  //   popupTitle.textContent = this._title;
  //   popupImage.src = this._imageLink;
  //   popupImage.alt = this._title;
  //   openPopupImage();
  // }

}

export { Card }