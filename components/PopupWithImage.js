import {Popup} from './Popup.js';

export class PopupWithImage extends Popup {
  constructor(popupSelector) {
    super(popupSelector);
    this._popupImage = this._popupElement.querySelector('.popup__image');
    this._popupTitle = this._popupElement.querySelector('.popup__title-image');
  }

  open(data) {
    this._popupImage.src = data.imageLink;
    this._popupImage.alt = data.title;
    this._popupTitle.textContent = data.title;
    super.open();
  }
}