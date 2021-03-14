export class Popup {
  constructor(popupSelector) {
    this._popupSelector = popupSelector;
    this._currentPopup = document.querySelector(this._popupSelector);
    this._handleOverlayClose = this._handleOverlayClose.bind(this);
    this._handleEscClose = this._handleEscClose.bind(this);
  }

  open() {
    this._currentPopup.classList.add('popup_opened');
    document.addEventListener('keydown', this._handleEscClose);
  }

  close() {
    this._currentPopup.classList.remove('popup_opened');
    document.removeEventListener('keydown', this._handleEscClose);
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
  }
  
}