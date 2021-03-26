class Card {
  constructor(data, myUserId, cardSelector, handleCardClick, { handleTrashCanClick }) {
    this._data = data;
    this._myUserId = myUserId;
    this._ownerId = data.owner._id;
    this._cardSelector = document.querySelector(cardSelector).content.querySelector('.card').cloneNode(true);
    this._trashButton = this._cardSelector.querySelector('.card__trash-button');
    this._cardImage = this._cardSelector.querySelector('.card__image');
    this._cardLikeButton = this._cardSelector.querySelector('.card__like-button');
    this._cardLikeSelector = this._cardSelector.querySelector('.card__like-counter');
    this._handleCardClick = handleCardClick;
    this._handleTrashCanClick = handleTrashCanClick;
  }

  generateCard() {
    this._cardImage.src = this._data.link;
    this._cardImage.alt = this._data.name;
    this._cardSelector.querySelector('.card__title').textContent = this._data.name;
    this._cardLikeSelector.textContent = this._data.likes.length;
    this._setEventListeners();
    this._checkUserId();
    return this._cardSelector;
  }

  _setEventListeners() {
    this._cardLikeButton.addEventListener('click', () => {
      this._handleLikeClick();
    });

    this._cardSelector.querySelector('.card__trash-button').addEventListener('click', () => {
      this._handleTrashCanClick(this._data._id);
    });

    this._cardImage.addEventListener('click', () => {
      this._handleCardClick(this._data.name, this._data.link)
    });
  }

  _handleLikeClick() {
    this._cardLikeButton.classList.toggle('card__like-button_active');
  }

  _checkUserId() {
    if (this._ownerId === this._myUserId) {
      this._trashButton.classList.add('card__trash-button_active');
    }
  }

  deleteCard() {
    this._cardSelector.remove();
    // this._cardSelector = null;
  }

}

export { Card }