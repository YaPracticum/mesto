export class UserInfo {
  constructor({ profileName, profileRole, profileAvatar }) {
    this._profileName = profileName;
    this._profileRole = profileRole;
    this._profileAvatar = profileAvatar;
    this._name = document.querySelector(this._profileName);
    this._role = document.querySelector(this._profileRole);
    this._avatar = document.querySelector(this._profileAvatar);
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
    this._role.textContent = data.about;
    this._avatar.src = data.avatar;
    this._avatar.alt = data.name;
  }
}