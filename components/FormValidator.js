export class FormValidator {
  constructor(validationParameters, formElement) {
    this._formElement = document.querySelector(formElement);
    this._inputs = document.querySelectorAll(formElement + " " + validationParameters.inputs);
    this._inputErrorMessages = document.querySelectorAll(formElement + " " + validationParameters.inputErrorMessage);
    this._inputErrorMessageActive = validationParameters.inputErrorMessageActive;
    this._inputError = validationParameters.inputError;
    this._submitButton = document.querySelector(formElement + " " + validationParameters.submitButton);
    this._submitButtonInactive = validationParameters.submitButtonInactive;
  }

  _showInputError(inputElement, index) {
    inputElement.classList.add(this._inputError);
    //inputElement.classList.add('popup__input_type_error');
    this._inputErrorMessages[index].textContent = inputElement.validationMessage;
    this._inputErrorMessages[index].classList.add(this._inputErrorMessageActive);
  }

  _hideInputError (inputElement, index) {
    inputElement.classList.remove(this._inputError);
    this._inputErrorMessages[index].textContent = "";
    this._inputErrorMessages[index].classList.remove(this._inputErrorMessageActive);
  }

  _checkInputValidity(inputElement, index) {
    if (!inputElement.validity.valid) {
      this._showInputError(inputElement, index);
    } else {
      this._hideInputError(inputElement, index);
    }
  };

  _toggleButtonState() {
    if (this._formElement.checkValidity()) {
      this._submitButton.classList.remove(this._submitButtonInactive);
    } else {
      this._submitButton.classList.add(this._submitButtonInactive);
    }
  }

  _setEventListener() {
    this._inputs.forEach((inputElement, index) => {
      inputElement.addEventListener('input', () => {
            this._checkInputValidity(inputElement, index);
            this._toggleButtonState();
        });
    })
  }

  enableValidation() {
    this._setEventListener();
  }

  resetValidation() {
    this._inputs.forEach((inputElement, index) => {
      this._hideInputError(inputElement, index)
    });
    this._toggleButtonState();
  }

}