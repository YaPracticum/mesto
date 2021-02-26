
class FormValidator {
  constructor(validationParameters, formElement) {
    this._formElement = formElement;
    this._inputSelectors = validationParameters.inputSelector;
    this._inputErrorMessages = validationParameters.inputErrorMessage;
    this._submitButtonSelector = validationParameters.submitButtonSelector;
  }

  // Показываем ошибки у невалидных импутов
  _showInputError(inputElement, index) {
    inputElement.classList.add('popup__input_type_error');
    this._inputErrorMessages[index].textContent = inputElement.validationMessage;
    this._inputErrorMessages[index].classList.add('popup__input-error_active');
  }

  // Прячем ошибки у валидных импутов
  _hideInputError (inputElement, index) {
    inputElement.classList.remove('popup__input_type_error');
    this._inputErrorMessages[index].textContent = "";
    this._inputErrorMessages[index].classList.remove('popup__input-error_active');
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
      this._submitButtonSelector.classList.remove('popup__submit-button_inactive');
    } else {
      this._submitButtonSelector.classList.add('popup__submit-button_inactive');
    }
  }

  // Устанавливаем слушателей импутам
  _setEventListener() {
    this._inputSelectors.forEach((inputElement, index) => {
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