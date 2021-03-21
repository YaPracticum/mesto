class Api {
  constructor(options) {
    // тело конструктора
  }

  getInitialCards() {
    // ...
  }

  // другие методы работы с API
}

const api = new Api({
  baseUrl: 'https://mesto.nomoreparties.co/v1/cohort-21',
  headers: {
    authorization: 'ecbf5b4d-1113-4e35-a3c6-5109ec97ddb7',
    'Content-Type': 'application/json'
  }
});