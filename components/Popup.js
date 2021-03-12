export class Popup {
  constructor(popupSelector) {
    this._popupSelector = popupSelector;
    this._currentPopup = document.querySelector(this._popupSelector);
    this._handleClickClose = this._handleClickClose.bind(this);
    this._handleEscClose = this._handleEscClose.bind(this);
  }

  open() {
    this._currentPopup.classList.add('popup_opened');
  }

  close() {
    this._currentPopup.classList.remove('popup_opened');
  }

  _handleEscClose() {
    if (evt.key === 'Escape') {
      this.close();
    }
  }

  _handleClickClose() {
    if (evt.target.classList.contains('popup__close-button') || evt.target.classList.contains('popup_opened')) {
      this.close();
    }
  }

  setEventListeners() {
    this._currentPopup.addEventListener('mousedown', this._handleClickClose);
    document.addEventListener('keydown', this._handleEscClose);
  }

  _removeEventListeners() {
    this._currentPopup.removeEventListener('mousedown', this._handleClickClose);
    document.removeEventListener('keydown', this._handleEscClose);
  }

}