import { Popup } from './Popup.js';

export class PopupWithImage extends Popup {
  constructor(popupSelector) {
    super(popupSelector);
    this._popupImage = this._currentPopup.querySelector('.popup__image');
    this._popupTitle = this._currentPopup.querySelector('.popup__title-image');
  }

  open(title, imageLink) {
    this._popupImage.src = imageLink;
    this._popupImage.alt = title;
    this._popupTitle.textContent = title;
    super.open();
  }
}