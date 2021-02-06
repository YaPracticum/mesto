const validationParameters = {
  formSelector: '.popup__form',
  inputSelector: '.popup__input',
  submitButtonSelector: '.popup__submit-button',
  inactiveButtonClass: 'popup__submit-button_inactive',
  inputErrorClass: 'popup__input_type_error',
  errorClass: 'popup__input-error_active',
  inputErrorMessage: '.title__input_error',
}

function showInputError(formElement, inputElement, errorMessage) {
  const errorElement = formElement.querySelector(`.${inputElement.id}-error`);
  errorElement.textContent = errorMessage;
  inputElement.classList.add(validationParameters.inputErrorClass);
  errorElement.classList.add(validationParameters.errorClass);
};


function hideInputError(formElement, inputElement) {
  const errorElement = formElement.querySelector(`.${inputElement.id}-error`);
  inputElement.classList.remove(validationParameters.inputErrorClass);
  errorElement.classList.remove(validationParameters.errorClass);
  errorElement.textContent = '';
};

function checkInputValidity(formElement, inputElement) {
  if (!inputElement.validity.valid) {
    showInputError(formElement, inputElement, inputElement.validationMessage);
  } else {
    hideInputError(formElement, inputElement);
  }
};

const setEventListeners = (formElement) => {
  const inputList = Array.from(formElement.querySelectorAll(validationParameters.inputSelector));
  const buttonElement = formElement.querySelector(validationParameters.submitButtonSelector);

  toggleButtonState(inputList, buttonElement);

  inputList.forEach((inputElement) => {
    inputElement.addEventListener('input', function () {
      checkInputValidity(formElement, inputElement);
      toggleButtonState(inputList, buttonElement);
    });
  });
};

function clearErrorMessages(validationParameters) {
  const allImputElements = (document.querySelectorAll(validationParameters.inputSelector));
  allImputElements.forEach(element => {
    element.classList.remove(validationParameters.inputErrorClass);
  })
  const allErrorMessages = document.querySelectorAll('.popup__input-error');
  allErrorMessages.forEach(element => {
    element.classList.remove(validationParameters.errorClass);
  })
  console.log(allErrorMessages);
}

function enableValidation() {
  const formList = Array.from(document.querySelectorAll(validationParameters.formSelector));
  formList.forEach((formElement) => {
    formElement.addEventListener('submit', (evt) => {
      evt.preventDefault();
    });
    clearErrorMessages(validationParameters); 
    setEventListeners(formElement);
  });
}


//enableValidation(validationParameters);


function hasInvalidInput(inputList) {
  return inputList.some((inputElement) => {
    return !inputElement.validity.valid;
  });
}

function toggleButtonState(inputList, buttonElement) {
  if (hasInvalidInput(inputList)) {
    buttonElement.classList.add(validationParameters.inactiveButtonClass);
  } else {
    buttonElement.classList.remove(validationParameters.inactiveButtonClass);
  }
}