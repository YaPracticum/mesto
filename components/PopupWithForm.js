import {Popup} from './Popup.js';

export class PopupWithForm extends Popup {
  constructor(popupSelector, submit ) {
    super(popupSelector);
    this._form = this._popupElement.querySelector('.popup__form');
    this._submit = submit;
    this._submitHandler = this._submitHandler.bind(this);
  }

  _submitHandler(evt) {
    evt.preventDefault();
    this._submit(this._getInputValues());
  }

  _getInputValues() {
    const inputList = Array.from(this._form.querySelectorAll('.popup__input'));
    const inputValues = {};
    inputList.forEach(input => {
      inputValues[input.name] = input.value;
    })
    return inputValues;
  }

  setEventListeners() {
    this._form.addEventListener('submit', this._submitHandler);
    super.setEventListeners();
  }

  close() {
    this._form.reset();
    this._form.removeEventListener('submit', this._submitHandler);
    super.close();
  }
}