import { 
  popupTitle, 
  popupImage, 
  openPopupImage
} from './index.js';

class Card {
  constructor(title, imageLink) {
    this._title = title;
    this._imageLink = imageLink;
  }

  // Забираем размеку из HTML и клонируем элемент
  _getTemplate() {
      const cardElement = document
      .querySelector('.card-template')
      .content
      .querySelector('.card')
      .cloneNode(true);
      return cardElement;
  }

  // Создаем карточку
  generateCard() {
    this._element = this._getTemplate();
    this._setEventListeners();
    this._element.querySelector('.card__image').src = this._imageLink;
    this._element.querySelector('.card__title').textContent = this._title;
    this._element.querySelector('.card__image').alt = this._title;
    return this._element;
  }

  // Устанавливаем слушателей
  _setEventListeners() {
    this._element.querySelector('.card__like-button').addEventListener('click', () => {
      this._handleLikeClick();
    });

    this._element.querySelector('.card__trash-button').addEventListener('click', () => {
      this._handleTrashCanClick();
    });

    this._element.querySelector('.card__image').addEventListener('click', () => {
      this._handleImagePopup();
    });
  }

  // Показываем/убираем лайк
  _handleLikeClick() {
    this._element.querySelector('.card__like-button').classList.toggle('card__like-button_active');
  }

  // Удаляем карточку по клику на "мусорке"
  _handleTrashCanClick() {
    this._element.closest('.card').remove();
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