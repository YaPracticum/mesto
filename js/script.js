let popupWindow = document.querySelector('.popup');
let formElement = document.querySelector('.popup__container');
let profileEditButton = document.querySelector('.profile__edit-button');
let popupCloseButton = document.querySelector('.popup__close-button');
let inputName = document.querySelector('.input_text_type_name');
let inputRole = document.querySelector('.input_text_type_role');
let profileName = document.querySelector('.profile__name');
let profileRole = document.querySelector('.profile__role');

function openPopup() {
  popupWindow.classList.add('popup_opened');
  inputName.value = profileName.textContent;
  inputRole.value = profileRole.textContent;
}

function closePopup() {
  popupWindow.classList.remove('popup_opened');
}

// Обработчик «отправки» формы, хотя пока
// она никуда отправляться не будет
function handleFormSubmit (evt) {
  evt.preventDefault(); // Эта строчка отменяет стандартную отправку формы.
                      // Так мы можем определить свою логику отправки.
                      // О том, как это делать, расскажем позже.

  // Находим поля формы в DOM
  // let nameInput = // Воспользуйтесь инструментом .querySelector()
  // let jobInput = // Воспользуйтесь инструментом .querySelector()

  // Получите значение полей из свойства value
  profileName.textContent = inputName.value;
  profileRole.textContent = inputRole.value;
  closePopup();

  // Выберите элементы, куда должны быть вставлены значения полей


  // Вставьте новые значения с помощью textContent

}

profileEditButton.addEventListener('click', openPopup);
popupCloseButton.addEventListener('click', closePopup);
formElement.addEventListener('submit', handleFormSubmit);