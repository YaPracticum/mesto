(()=>{"use strict";function e(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}var t=function(){function t(e,n,r,o,i){var a=i.handleTrashCanClick,c=i.addLike,u=i.deleteLike;!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t),this._data=e,this._myUserId=n,this._ownerId=e.owner._id,this._addLike=c,this._deleteLike=u,this._cardSelector=document.querySelector(r).content.querySelector(".card").cloneNode(!0),this._trashButton=this._cardSelector.querySelector(".card__trash-button"),this._cardImage=this._cardSelector.querySelector(".card__image"),this._cardLikeButton=this._cardSelector.querySelector(".card__like-button"),this._cardLikeSelector=this._cardSelector.querySelector(".card__like-counter"),this._handleCardClick=o,this._handleTrashCanClick=a}var n,r;return n=t,(r=[{key:"generateCard",value:function(){return this._cardImage.src=this._data.link,this._cardImage.alt=this._data.name,this._cardSelector.querySelector(".card__title").textContent=this._data.name,this.likeCounter(this._data),this._setEventListeners(),this._checkUserId(),this._checkLikeStatus(),this._cardSelector}},{key:"likeCounter",value:function(e){this._cardLikeSelector.textContent=e.likes.length}},{key:"_setEventListeners",value:function(){var e=this;this._cardLikeButton.addEventListener("click",(function(){e._cardLikeButton.classList.contains("card__like-button_active")?(e._deleteLike(e._data),e._handleLikeClick()):(e._addLike(e._data),e._handleLikeClick())})),this._trashButton.addEventListener("click",(function(){e._handleTrashCanClick(e._data._id)})),this._cardImage.addEventListener("click",(function(){e._handleCardClick(e._data.name,e._data.link)}))}},{key:"_handleLikeClick",value:function(){this._cardLikeButton.classList.toggle("card__like-button_active")}},{key:"_checkLikeStatus",value:function(){var e=this;this._data.likes.forEach((function(t){t._id===e._myUserId&&e._cardLikeButton.classList.add("card__like-button_active")}))}},{key:"_checkUserId",value:function(){this._ownerId===this._myUserId&&this._trashButton.classList.add("card__trash-button_active")}},{key:"deleteCard",value:function(){this._cardSelector.remove()}}])&&e(n.prototype,r),t}();function n(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}var r=function(){function e(t,n){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),this._formElement=document.querySelector(n),this._inputs=this._formElement.querySelectorAll(t.inputs),this._inputErrorMessages=this._formElement.querySelectorAll(t.inputErrorMessage),this._inputErrorMessageActive=t.inputErrorMessageActive,this._inputError=t.inputError,this._submitButton=this._formElement.querySelector(t.submitButton),this._submitButtonInactive=t.submitButtonInactive}var t,r;return t=e,(r=[{key:"_showInputError",value:function(e,t){e.classList.add(this._inputError),this._inputErrorMessages[t].textContent=e.validationMessage,this._inputErrorMessages[t].classList.add(this._inputErrorMessageActive)}},{key:"_hideInputError",value:function(e,t){e.classList.remove(this._inputError),this._inputErrorMessages[t].textContent="",this._inputErrorMessages[t].classList.remove(this._inputErrorMessageActive)}},{key:"_checkInputValidity",value:function(e,t){e.validity.valid?this._hideInputError(e,t):this._showInputError(e,t)}},{key:"_toggleButtonState",value:function(){this._formElement.checkValidity()?this._submitButton.classList.remove(this._submitButtonInactive):this._submitButton.classList.add(this._submitButtonInactive)}},{key:"_setEventListener",value:function(){var e=this;this._inputs.forEach((function(t,n){t.addEventListener("input",(function(){e._checkInputValidity(t,n),e._toggleButtonState()}))}))}},{key:"enableValidation",value:function(){this._setEventListener()}},{key:"resetValidation",value:function(){var e=this;this._inputs.forEach((function(t,n){e._hideInputError(t,n)})),this._toggleButtonState()}}])&&n(t.prototype,r),e}();function o(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}var i=function(){function e(t,n){var r=t.renderer;!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),this._renderer=r,this._container=document.querySelector(n)}var t,n;return t=e,(n=[{key:"renderItems",value:function(e){var t=this;e.forEach((function(e){return t._renderer(e)}))}},{key:"addItem",value:function(e,t){"prepend"===t?this._container.prepend(e):this._container.append(e)}}])&&o(t.prototype,n),e}();function a(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}var c=function(){function e(t){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),this._popupSelector=t,this._currentPopup=document.querySelector(this._popupSelector),this._handleOverlayClose=this._handleOverlayClose.bind(this),this._handleEscClose=this._handleEscClose.bind(this)}var t,n;return t=e,(n=[{key:"open",value:function(){this._currentPopup.classList.add("popup_opened"),document.addEventListener("keydown",this._handleEscClose)}},{key:"close",value:function(){this._currentPopup.classList.remove("popup_opened"),document.removeEventListener("keydown",this._handleEscClose)}},{key:"_handleEscClose",value:function(e){"Escape"===e.key&&this.close()}},{key:"_handleOverlayClose",value:function(e){e.target===e.currentTarget&&this.close()}},{key:"setEventListeners",value:function(){var e=this;this._currentPopup.querySelector(".popup__close-button").addEventListener("click",(function(t){return e.close(t)})),this._currentPopup.addEventListener("mousedown",this._handleOverlayClose)}}])&&a(t.prototype,n),e}();function u(e){return(u="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function s(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function l(e,t,n){return(l="undefined"!=typeof Reflect&&Reflect.get?Reflect.get:function(e,t,n){var r=function(e,t){for(;!Object.prototype.hasOwnProperty.call(e,t)&&null!==(e=h(e)););return e}(e,t);if(r){var o=Object.getOwnPropertyDescriptor(r,t);return o.get?o.get.call(n):o.value}})(e,t,n||e)}function f(e,t){return(f=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}function p(e,t){return!t||"object"!==u(t)&&"function"!=typeof t?function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(e):t}function h(e){return(h=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}var d=function(e){!function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&f(e,t)}(a,e);var t,n,r,o,i=(r=a,o=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(e){return!1}}(),function(){var e,t=h(r);if(o){var n=h(this).constructor;e=Reflect.construct(t,arguments,n)}else e=t.apply(this,arguments);return p(this,e)});function a(e){var t;return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,a),(t=i.call(this,e))._popupImage=t._currentPopup.querySelector(".popup__image"),t._popupTitle=t._currentPopup.querySelector(".popup__title-image"),t}return t=a,(n=[{key:"open",value:function(e,t){this._popupImage.src=t,this._popupImage.alt=e,this._popupTitle.textContent=e,l(h(a.prototype),"open",this).call(this)}}])&&s(t.prototype,n),a}(c);function _(e){return(_="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function y(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function v(e,t,n){return(v="undefined"!=typeof Reflect&&Reflect.get?Reflect.get:function(e,t,n){var r=function(e,t){for(;!Object.prototype.hasOwnProperty.call(e,t)&&null!==(e=g(e)););return e}(e,t);if(r){var o=Object.getOwnPropertyDescriptor(r,t);return o.get?o.get.call(n):o.value}})(e,t,n||e)}function m(e,t){return(m=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}function b(e,t){return!t||"object"!==_(t)&&"function"!=typeof t?k(e):t}function k(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}function g(e){return(g=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}var E=function(e){!function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&m(e,t)}(a,e);var t,n,r,o,i=(r=a,o=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(e){return!1}}(),function(){var e,t=g(r);if(o){var n=g(this).constructor;e=Reflect.construct(t,arguments,n)}else e=t.apply(this,arguments);return b(this,e)});function a(e,t){var n,r=t.submit;return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,a),(n=i.call(this,e))._submit=r,n._submitHandler=n._submitHandler.bind(k(n)),n._popupForm=n._currentPopup.querySelector(".popup__form"),n}return t=a,(n=[{key:"_getInputValues",value:function(){var e=Array.from(this._popupForm.querySelectorAll(".popup__input")),t={};return e.forEach((function(e){t[e.name]=e.value})),t}},{key:"setEventListeners",value:function(){this._popupForm.addEventListener("submit",this._submitHandler),v(g(a.prototype),"setEventListeners",this).call(this)}},{key:"_submitHandler",value:function(e){e.preventDefault(),this._submit(this._getInputValues())}},{key:"close",value:function(){this._popupForm.reset(),v(g(a.prototype),"close",this).call(this)}}])&&y(t.prototype,n),a}(c);function w(e){return(w="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function S(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function L(e,t,n){return(L="undefined"!=typeof Reflect&&Reflect.get?Reflect.get:function(e,t,n){var r=function(e,t){for(;!Object.prototype.hasOwnProperty.call(e,t)&&null!==(e=P(e)););return e}(e,t);if(r){var o=Object.getOwnPropertyDescriptor(r,t);return o.get?o.get.call(n):o.value}})(e,t,n||e)}function C(e,t){return(C=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}function O(e,t){return!t||"object"!==w(t)&&"function"!=typeof t?I(e):t}function I(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}function P(e){return(P=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}var j=function(e){!function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&C(e,t)}(a,e);var t,n,r,o,i=(r=a,o=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(e){return!1}}(),function(){var e,t=P(r);if(o){var n=P(this).constructor;e=Reflect.construct(t,arguments,n)}else e=t.apply(this,arguments);return O(this,e)});function a(e,t){var n,r=t.submit;return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,a),(n=i.call(this,e))._submit=r,n._submitHandler=n._submitHandler.bind(I(n)),n._popupForm=n._currentPopup.querySelector(".popup__form"),n}return t=a,(n=[{key:"setEventListeners",value:function(){this._popupForm.addEventListener("submit",this._submitHandler),L(P(a.prototype),"setEventListeners",this).call(this)}},{key:"_submitHandler",value:function(e){e.preventDefault(),this._submit(this._data)}},{key:"open",value:function(e){this._data=e,L(P(a.prototype),"open",this).call(this)}}])&&S(t.prototype,n),a}(c);function R(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}var U=function(){function e(t){var n=t.profileName,r=t.profileRole,o=t.profileAvatar;!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),this._profileName=n,this._profileRole=r,this._profileAvatar=o,this._name=document.querySelector(this._profileName),this._role=document.querySelector(this._profileRole),this._avatar=document.querySelector(this._profileAvatar)}var t,n;return t=e,(n=[{key:"getUserInfo",value:function(){return{name:this._name.textContent,role:this._role.textContent}}},{key:"setUserAvatar",value:function(e){this._avatar.src=e.avatar}},{key:"setUserInfo",value:function(e){this._name.textContent=e.name,this._role.textContent=e.about,this._avatar.src=e.avatar,this._avatar.alt=e.name}}])&&R(t.prototype,n),e}();function q(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}var A,B,T=function(){function e(t){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),this.baseUrl=t.baseUrl,this.headers=t.headers}var t,n;return t=e,(n=[{key:"_checkResponse",value:function(e){return e.ok?e.json():Promise.reject("Ошибка ".concat(e.status))}},{key:"getUserInfo",value:function(){return fetch("".concat(this.baseUrl,"/users/me"),{headers:this.headers}).then(this._checkResponse)}},{key:"setUserInfo",value:function(e){return fetch("".concat(this.baseUrl,"/users/me"),{method:"PATCH",headers:this.headers,body:JSON.stringify({name:e.name,about:e.about})}).then(this._checkResponse)}},{key:"setUserAvatar",value:function(e){return fetch("".concat(this.baseUrl,"/users/me/avatar"),{method:"PATCH",headers:this.headers,body:JSON.stringify({avatar:e.avatarLink})}).then(this._checkResponse)}},{key:"getInitialCards",value:function(){return fetch("".concat(this.baseUrl,"/cards"),{headers:this.headers}).then(this._checkResponse)}},{key:"createNewCard",value:function(e){return fetch("".concat(this.baseUrl,"/cards"),{method:"POST",headers:this.headers,body:JSON.stringify({name:e.name,link:e.link})}).then(this._checkResponse)}},{key:"deleteCard",value:function(e){return fetch("".concat(this.baseUrl,"/cards/").concat(e._id),{method:"DELETE",headers:this.headers}).then(this._checkResponse)}},{key:"deleteLike",value:function(e){return fetch("".concat(this.baseUrl,"/cards/likes/").concat(e._id),{method:"DELETE",headers:this.headers}).then(this._checkResponse)}},{key:"addLike",value:function(e){return fetch("".concat(this.baseUrl,"/cards/likes/").concat(e._id),{method:"PUT",headers:this.headers}).then(this._checkResponse)}}])&&q(t.prototype,n),e}(),x=document.querySelector(".profile__edit-button"),M=document.querySelector(".profile__add-button"),V=document.querySelector(".profile__avatar"),H=document.querySelector(".popup__input_name"),N=document.querySelector(".popup__input_role"),F={inputs:".popup__input",inputErrorMessage:".popup__input-error",inputError:"popup__input_type_error",inputErrorMessageActive:"popup__input-error_active",submitButton:".popup__submit-button",submitButtonInactive:"popup__submit-button_inactive"};function D(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,r=new Array(t);n<t;n++)r[n]=e[n];return r}var J=new T({baseUrl:"https://mesto.nomoreparties.co/v1/cohort-21",headers:{authorization:"ecbf5b4d-1113-4e35-a3c6-5109ec97ddb7","Content-Type":"application/json"}});Promise.all([J.getInitialCards(),J.getUserInfo()]).then((function(e){var t,n,r=(n=2,function(e){if(Array.isArray(e))return e}(t=e)||function(e,t){if("undefined"!=typeof Symbol&&Symbol.iterator in Object(e)){var n=[],r=!0,o=!1,i=void 0;try{for(var a,c=e[Symbol.iterator]();!(r=(a=c.next()).done)&&(n.push(a.value),!t||n.length!==t);r=!0);}catch(e){o=!0,i=e}finally{try{r||null==c.return||c.return()}finally{if(o)throw i}}return n}}(t,n)||function(e,t){if(e){if("string"==typeof e)return D(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);return"Object"===n&&e.constructor&&(n=e.constructor.name),"Map"===n||"Set"===n?Array.from(e):"Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)?D(e,t):void 0}}(t,n)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()),o=r[0],i=r[1];B=i._id,z.setUserInfo(i),W.renderItems(o)})).catch((function(e){console.log("".concat(e))}));var z=new U({profileName:".profile__name",profileRole:".profile__role",profileAvatar:".profile__avatar-image"}),$=new d("#popup_large-image");function G(e,t){$.open(e,t)}function K(e){var t=document.querySelectorAll(".popup__submit-button");Array.from(t).forEach((function(t){t.textContent=e?"Сохранение...":t.value}))}$.setEventListeners();var Q=new j(".popup_confirmation",{submit:function(e){K(!0),J.deleteCard(e).then((function(e){A.deleteCard(e)})).catch((function(e){console.log(e)})).finally((function(){Q.close(),K(!1)}))}});Q.setEventListeners();var W=new i({renderer:function(e){var t=X(e).generateCard();W.addItem(t)}},".cards"),X=function(e){var n=new t(e,B,".card-template",G,{handleTrashCanClick:function(){A=n,Q.open(e)},addLike:function(e){J.addLike(e).then((function(e){n.likeCounter(e)})).catch((function(e){console.log(e)}))},deleteLike:function(e){J.deleteLike(e).then((function(e){n.likeCounter(e)})).catch((function(e){console.log(e)}))}});return n},Y=new E("#popup_add-card",{submit:function(e){K(!0),J.createNewCard(e).then((function(e){var t=X(e).generateCard();W.addItem(t,"prepend")})).catch((function(e){console.log(e)})).finally((function(){Y.close(),K(!1)}))}});Y.setEventListeners();var Z=new E("#popup_edit-profile",{submit:function(e){K(!0),J.setUserInfo(e).then((function(e){z.setUserInfo(e)})).catch((function(e){console.log(e)})).finally((function(){Z.close(),K(!1)}))}});Z.setEventListeners();var ee=new E("#popup_edit-avatar",{submit:function(e){K(!0),J.setUserAvatar(e).then((function(e){z.setUserAvatar(e)})).catch((function(e){console.log(e)})).finally((function(){ee.close(),K(!1)}))}});ee.setEventListeners(),x.addEventListener("click",(function(){var e=z.getUserInfo();H.value=e.name,N.value=e.role,Z.open(),ne.resetValidation()})),M.addEventListener("click",(function(){Y.open(),te.resetValidation()})),V.addEventListener("click",(function(){ee.open(),re.resetValidation()}));var te=new r(F,".addCardForm");te.enableValidation();var ne=new r(F,".profileForm");ne.enableValidation();var re=new r(F,".avatarForm");re.enableValidation()})();