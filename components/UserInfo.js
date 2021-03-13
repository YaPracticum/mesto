export class UserInfo {
  constructor({ profileName, profileRole }) {
    this._profileName = profileName;
    this._profileRole = profileRole;
    this._name = document.querySelector(this._profileName);
    this._role = document.querySelector(this._profileRole);
  }

  getUserInfo() {
    const profileData = {
      name: this._name.textContent,
      role: this._role.textContent,
    };
    return profileData;
  }

  setUserInfo(data) {
    this._name.textContent = data.name;
    this._role.textContent = data.role;
  }
}