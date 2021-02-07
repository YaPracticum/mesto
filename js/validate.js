const validationParameters = {
  formSelector: '.popup__form',
  inputSelector: '.popup__input',
  inputSelectorError: '.popup__input-error',
  submitButtonSelector: '.popup__submit-button',
  inactiveButtonClass: 'popup__submit-button_inactive',
  inputErrorClass: 'popup__input_type_error',
  errorClass: 'popup__input-error_active',
  inputErrorMessage: '.title__input_error',
}

function showInputError(formElement, inputElement, errorMessage, validationParameters) {
  const errorElement = formElement.querySelector(`.${inputElement.id}-error`);
  errorElement.textContent = errorMessage;
  inputElement.classList.add(validationParameters.inputErrorClass);
  errorElement.classList.add(validationParameters.errorClass);
};

function hideInputError(formElement, inputElement, validationParameters) {
  const errorElement = formElement.querySelector(`.${inputElement.id}-error`);
  inputElement.classList.remove(validationParameters.inputErrorClass);
  errorElement.classList.remove(validationParameters.errorClass);
  errorElement.textContent = '';
};

function checkInputValidity(formElement, inputElement, validationParameters) {
  if (!inputElement.validity.valid) {
    showInputError(formElement, inputElement, inputElement.validationMessage, validationParameters);
  } else {
    hideInputError(formElement, inputElement, validationParameters);
  }
};

const setEventListeners = (formElement, validationParameters) => {
  const inputList = Array.from(formElement.querySelectorAll(validationParameters.inputSelector));
  const buttonElement = formElement.querySelector(validationParameters.submitButtonSelector);
  toggleButtonState(inputList, buttonElement, validationParameters);
  inputList.forEach((inputElement) => {
    inputElement.addEventListener('input', function () {
      checkInputValidity(formElement, inputElement, validationParameters);
      toggleButtonState(inputList, buttonElement, validationParameters);
    });
  });
};

function clearErrorMessages(validationParameters) {
  const allImputElements = (document.querySelectorAll(validationParameters.inputSelector));
  allImputElements.forEach(element => {
    element.classList.remove(validationParameters.inputErrorClass);
    element.nextElementSibling.classList.remove(validationParameters.errorClass);
  });
}

function enableValidation(validationParameters) {
  const formList = Array.from(document.querySelectorAll(validationParameters.formSelector));
  formList.forEach((formElement) => {
    formElement.addEventListener('submit', (evt) => {
      evt.preventDefault();
    });
    clearErrorMessages(validationParameters); 
    setEventListeners(formElement, validationParameters);
  });
}

function hasInvalidInput(inputList) {
  return inputList.some((inputElement) => {
    return !inputElement.validity.valid;
  });
}

function toggleButtonState(inputList, buttonElement, validationParameters) {
  if (hasInvalidInput(inputList)) {
    buttonElement.classList.add(validationParameters.inactiveButtonClass);
  } else {
    buttonElement.classList.remove(validationParameters.inactiveButtonClass);
  }
}

enableValidation(validationParameters);