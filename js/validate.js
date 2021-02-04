// Вынесем все необходимые элементы формы в константы
const formElement = document.querySelector('.popup__form');
const formInput = formElement.querySelector('.popup__input');
const formError = formElement.querySelector(`.${formInput.id}-error`);

const showInputError = (element, errorMessage) => {
  element.classList.add('popup__input_type_error');
  // Показываем сообщение об ошибке
  formError.textContent = errorMessage;
  formError.classList.add('popup__input-error_active');
};

const hideInputError = (element) => {
  element.classList.remove('popup__input_type_error');
  // Скрываем сообщение об ошибке
  formError.classList.remove('popup__input-error_active');
  formError.textContent = '';
};

// Функция, которая проверяет валидность поля
const isValid = () => {
  if (!formInput.validity.valid) {
    // Если поле не проходит валидацию, покажем ошибку
    showInputError(formInput, formInput.validationMessage);
  } else {
    // Если проходит, скроем
    hideInputError(formInput);
  }
};

formElement.addEventListener('submit', function (evt) {
  // Отменим стандартное поведение по сабмиту
  evt.preventDefault();
});

// Вызовем функцию isValid на каждый ввод символа
formInput.addEventListener('input', isValid);
