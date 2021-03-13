export class Popup {
  constructor(popupSelector) {
    this._popupSelector = popupSelector;
    this._currentPopup = document.querySelector(this._popupSelector);
    this._handleOverlayClose = this._handleOverlayClose.bind(this);
    this._handleEscClose = this._handleEscClose.bind(this);
  }

  open() {
    this.setEventListeners();
    this._currentPopup.classList.add('popup_opened');
  }

  close() {
    this._removeEventListeners();
    this._currentPopup.classList.remove('popup_opened');
  }

  _handleEscClose(evt) {
    if (evt.key === 'Escape') {
      this.close();
    }
  }

  _handleOverlayClose(event) {
    if (event.target !== event.currentTarget) {
      return
    }
  this.close();
  }

  setEventListeners() {
    this._currentPopup.querySelector('.popup__close-button').addEventListener('click', (event) => this.close(event));
    this._currentPopup.addEventListener('mousedown', this._handleOverlayClose);
    document.addEventListener('keydown', this._handleEscClose);
  }

  _removeEventListeners() {
    this._currentPopup.querySelector('.popup__close-button').removeEventListener('click', (event) => this.close(event));
    this._currentPopup.removeEventListener('mousedown', this._handleOverlayClose);
    document.removeEventListener('keydown', this._handleEscClose);
  }

}