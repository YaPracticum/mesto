export class UserInfo {
  constructor({ userName, userRole }) {
    this._userName = userName;
    this._userRole = userRole;
    this._name = document.querySelector(this._userName);
    this._role = document.querySelector(this._userRole);
  }

  getUserInfo() {
    const userData = {
      name: this._name.textContent,
      role: this._role.textContent
    };
    return userData;
  }

  setUserInfo(userData) {
    this._name.textContent = userData.name;
    this._role.textContent = userData.role;
  }
}