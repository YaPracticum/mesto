class Api {
  constructor(options) {
    this.baseUrl = options.baseUrl;
    this.headers = options.headers;
  }

  _checkResponse(res) {
    if (res.ok) {
        return res.json();
    }
    return Promise.reject(`Ошибка ${res.status}`);
  }

  getUserInfo() {
    return fetch(`${this.baseUrl}/users/me`, {
      headers: this.headers,
    })
    .then(this._checkResponse)
  }

  setUserInfo(user) {
    return fetch(`${this.baseUrl}/users/me`, {
      method: 'PATCH',
      headers: this.headers,
      body: JSON.stringify({
          name: user.name,
          about: user.about
      })
    })
    .then(this._checkResponse)
  }

  setUserAvatar(user) {
    return fetch(`${this.baseUrl}/users/me/avatar`, {
      method: 'PATCH',
      headers: this.headers,
      body: JSON.stringify({
        avatar: user.avatarLink
      })
    })
    .then(this._checkResponse)
  }

  getInitialCards() {
    return fetch(`${this.baseUrl}/cards`, {
      headers: this.headers,
    })
    .then(this._checkResponse)
  }

  createNewCard(card) {
    return fetch(`${this.baseUrl}/cards`, {
      method: 'POST',
      headers: this.headers,
      body: JSON.stringify({
        name: card.name,
        link: card.link,
      })
    })
    .then(this._checkResponse)
  }

  deleteCard(card) {
    return fetch(`${this.baseUrl}/cards/${card._id}`, {
      method: 'DELETE',
      headers: this.headers,
    })
    .then(this._checkResponse)
  }

  deleteLike(card) {
    return fetch(`${this.baseUrl}/cards/likes/${card._id}`, {
      method: 'DELETE',
      headers: this.headers,
    })
    .then(this._checkResponse)
  }

  addLike(card) {
    return fetch(`${this.baseUrl}/cards/likes/${card._id}`, {
      method: 'PUT',
      headers: this.headers,
    })
    .then(this._checkResponse)
  }
  
}

export { Api }