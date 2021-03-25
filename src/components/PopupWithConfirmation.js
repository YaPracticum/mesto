import { Popup } from './Popup.js';

export class PopupWithConfirmation extends Popup {
  constructor(popupSelector, { submit }) {
    super(popupSelector);
    this._submit = submit;
    this._submitHandler = this._submitHandler.bind(this);
    this._popupForm = this._currentPopup.querySelector('.popup__form');
  }
  
  setEventListeners() {
    this._popupForm.addEventListener('submit', this._submitHandler);
    super.setEventListeners();
  }

  _submitHandler(evt) {
    evt.preventDefault();
    this._submit(this._data);
  }

  open(data) {
    this._data = data;
    super.open();
  }
}