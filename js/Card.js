import { 
  popupTitle, 
  popupImage, 
  openPopupImage
} from './index.js';

class Card {
  constructor(title, imageLink, template) {
    this._title = title;
    this._imageLink = imageLink;
    this._cardTemplate = document.querySelector(template).content.querySelector('.card').cloneNode(true);
    this._cardImage = this._cardTemplate.querySelector('.card__image');
    this._cardLike = this._cardTemplate.querySelector('.card__like-button');
  }

  // Создаем карточку
  generateCard() {
    this._cardImage.src = this._imageLink;
    this._cardImage.alt = this._title;
    this._cardTemplate.querySelector('.card__title').textContent = this._title;
    this._setEventListeners();
    return this._cardTemplate;
  }

  // Устанавливаем слушателей
  _setEventListeners() {
    this._cardLike.addEventListener('click', () => {
      this._handleLikeClick();
    });

    this._cardTemplate.querySelector('.card__trash-button').addEventListener('click', () => {
      this._handleTrashCanClick();
    });

    this._cardImage.addEventListener('click', () => {
      this._handleImagePopup();
    });
  }

  // Показываем/убираем лайк
  _handleLikeClick() {
    this._cardLike.classList.toggle('card__like-button_active');
  }

  // Удаляем карточку по клику на "мусорке"
  _handleTrashCanClick() {
    this._cardTemplate.closest('.card').remove();
  }

  // Показываем большую картинку
  _handleImagePopup() {
    popupTitle.textContent = this._title;
    popupImage.src = this._imageLink;
    popupImage.alt = this._title;
    openPopupImage();
  }

}

export { Card }