
class FormValidator {
  constructor(validationParameters, formElement) {
    this._formElement = formElement;
    this._inputs = validationParameters.inputs;
    this._inputErrorMessages = validationParameters.inputErrorMessage;
    this._inputErrorMessageActive = validationParameters.inputErrorMessageActive;
    this._inputError = validationParameters.inputError;
    this._submitButton = validationParameters.submitButton;
    this._submitButtonInactive = validationParameters.submitButtonInactive;
  }

  // Показываем ошибки у невалидных импутов
  _showInputError(inputElement, index) {
    inputElement.classList.add(this._inputError);
    //inputElement.classList.add('popup__input_type_error');
    this._inputErrorMessages[index].textContent = inputElement.validationMessage;
    this._inputErrorMessages[index].classList.add(this._inputErrorMessageActive);
  }

  // Прячем ошибки у валидных импутов
  _hideInputError (inputElement, index) {
    inputElement.classList.remove(this._inputError);
    this._inputErrorMessages[index].textContent = "";
    this._inputErrorMessages[index].classList.remove(this._inputErrorMessageActive);
  }

  // Проверяем валидности импутов
  _checkInputValidity(inputElement, index) {
    if (!inputElement.validity.valid) {
      //console.log(input, index);
      this._showInputError(inputElement, index);
    } else {
      this._hideInputError(inputElement, index);
    }
  };

  // Устанавливаем активность/неактивность кнопки submit
  _toggleButtonState() {
    if (this._formElement.checkValidity()) {
      this._submitButton.classList.remove(this._submitButtonInactive);
    } else {
      this._submitButton.classList.add(this._submitButtonInactive);
    }
  }

  // Устанавливаем слушателей импутам
  _setEventListener() {
    this._inputs.forEach((inputElement, index) => {
      inputElement.addEventListener('input', () => {
            this._checkInputValidity(inputElement, index);
            this._toggleButtonState();
        });
    })
  }

  // Публичный метод включения валидацию
  enableValidation() {
    this._formElement.addEventListener('submit', (evt) => {
        evt.preventDefault();
    });
    this._setEventListener();
  }

}

export { FormValidator }