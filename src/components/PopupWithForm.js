import { Popup } from './Popup.js';

export class PopupWithForm extends Popup {
  constructor(popupSelector, { submit }) {
    super(popupSelector);
    this._submit = submit;
    this._submitHandler = this._submitHandler.bind(this);
    this._popupForm = this._currentPopup.querySelector('.popup__form');
  }
  
  _getInputValues() {
    const inputList = Array.from(this._popupForm.querySelectorAll('.popup__input'));
    const inputValues = {};
    inputList.forEach(input => {
      inputValues[input.name] = input.value;
    })
    return inputValues;
  }

  setEventListeners() {
    this._popupForm.addEventListener('submit', this._submitHandler);
    super.setEventListeners();
  }

  _submitHandler(evt) {
    evt.preventDefault();
    this._submit(this._getInputValues());
  }

  close() {
    this._popupForm.reset();
    super.close();
  }
}