import "./index.css";

const input = document.querySelector("#numbers-input");
const addButton = document.querySelector("#add-button");
const resetButton = document.querySelector("#reset-button");
const sumButton = document.querySelector("#sum-button");
const minButton = document.querySelector("#min-button");
const maxButton = document.querySelector("#max-button");
const averageButton = document.querySelector("#average-button");
const lengthButton = document.querySelector("#length-button");

const result = document.querySelector("#result");

let array = [];
let analizer;

addButton.addEventListener("click", () => {
  array = input.value.split(",").map(num => parseFloat(num.trim()));
  console.log(array);
  if (array[0] === 0) {
    // console.log('Введите значение')
    result.textContent = "Введите значения элементов массива";
  }
  if (array.includes(NaN)) {
    // console.log("Все элементы массива должны быть числами")
    result.textContent = "Все элементы массива должны быть числами";
  }
  analizer = new Analyze(array);
  return array;
});

resetButton.addEventListener("click", (event) => {
  event.preventDefault();
  input.value = "";
  result.textContent = "";
});

sumButton.addEventListener("click", () => {
  result.textContent = analizer.sum;
  console.log(analizer.sum);
});

minButton.addEventListener("click", () => {
  result.textContent = analizer.min;
  console.log(analizer.min);
});

maxButton.addEventListener("click", () => {
  result.textContent = analizer.max;
  console.log(analizer.max);
});

averageButton.addEventListener("click", () => {
  result.textContent = analizer.average;
  console.log(analizer.average);
});

lengthButton.addEventListener("click", () => {
  result.textContent = analizer.length;
  console.log(analizer.length);
});

class Analyze {
  constructor(array) {
    this.array = array;
  }
  get sum() {
    return this.array.reduce((acc, item) => (acc += item), 0);
  }
  get length() {
    return this.array.length;
  }
  get average() {
    return (this.sum / this.length).toFixed(2);
  }
  get min() {
    return Math.min(...this.array);
  }
  get max() {
    return Math.max(...this.array);
  }
  checkArr() {
    if (this.array.length === 0) {
      return "even";
    }
    return this.sum % 2 === 0 ? "even" : "odd";
  }
}

// import { createCard, deleteCard, likeButtonJob } from "./components/card.js";
// import { openPopup, closePopup } from "./components/modal.js";
// import { enableValidation, clearValidation } from "./validation.js";
// import {
//   getProfileData,
//   openCard,
//   editProfile,
//   postNewCard,
//   editProfileFoto,
// } from "./api.js";

// const logoImage = new URL("./images/logo.svg", import.meta.url);
// const avatarImage = new URL("./images/avatar.jpg", import.meta.url);

// const placesList = document.querySelector(".places__list");
// const popupNewCard = document.querySelector(".popup_type_new-card");
// const popupTypeEdit = document.querySelector(".popup_type_edit");
// const popupImage = document.querySelector(".popup_type_image");
// const allPopups = document.querySelectorAll(".popup");
// const nameInput = document.querySelector(".profile__title");
// const jobInput = document.querySelector(".profile__description");
// const imageProfileFoto = document.querySelector(".profile__image");

// const params = {
//   formSelector: ".popup__form",
//   inputSelector: ".popup__input",
//   submitButtonSelector: ".popup__button",
//   inactiveButtonClass: "popup__button_disabled",
//   inputErrorClass: "popup__input_type_error",
//   errorClass: "popup__error_visible",
//   formSubmitInactive: "form__submit_inactive",
//   formInputTypeError: "form__input_type_error",
//   formInputErrorActive: "form__input-error_active",
// };

// let idMeProfile = "";
// let idAutorCard = "";
// let arrLikes = [];
// let elementId = "";
// let userName = "";
// let userDescription = "";

// Promise.all([getProfileData(), openCard()])
//   .then((values) => {
//     const [userData, cardsArray] = values;
//     // console.log("Оба промиса сработали")
//     // console.log(userData)
//     userName = userData.name;
//     userDescription = userData.about;
//     nameInput.textContent = userName;
//     jobInput.textContent = userDescription;
//     imageProfileFoto.src = userData.avatar;
//     idMeProfile = userData._id;
//     // console.log(cardsArray);
//     cardsArray.forEach((el) => {
//       const cardLike = el.likes.length;
//       idAutorCard = el.owner._id;
//       arrLikes = el.likes;
//       elementId = el._id;
//       placesList.append(
//         createCard(
//           el.name,
//           el.link,
//           cardLike,
//           deleteCard,
//           likeButtonJob,
//           popupOpenImageModal,
//           idMeProfile,
//           idAutorCard,
//           elementId,
//           arrLikes
//         )
//       );
//     });
//   })
//   .catch((err) => {
//     console.error("Ошибка. Запрос не выполнен: ", err);
//   });

// // открытие попапа редактора профиля
// const editProfileButton = document.querySelector(".profile__edit-button");
// editProfileButton.addEventListener("click", () => {
//   clearValidation(popupTypeEdit, params);
//   const nameInputFormPopup = popupTypeEdit.querySelector("#name-input");
//   const descriptionInputFormPopup =
//     popupTypeEdit.querySelector("#description-input");
//   nameInputFormPopup.value = userName;
//   descriptionInputFormPopup.value = userDescription;
//   openPopup(popupTypeEdit);
// });

// // открытие попапа добавления новой карточки
// const addNewCardButton = document.querySelector(".profile__add-button");
// addNewCardButton.addEventListener("click", () => {
//   clearValidation(popupNewCard, params);
//   openPopup(popupNewCard);
// });

// // функция открытия попапа при нажатии на картинку
// function popupOpenImageModal(url, alt) {
//   openPopup(popupImage);
//   popupImage.querySelector("img").src = url;
//   popupImage.querySelector(".popup__caption").textContent = alt;
//   popupImage.querySelector("img").alt = alt;
// }

// // закрытие попапа нажатием на крестик
// for (let i = 0; i < allPopups.length; i++) {
//   const popupCloseButton = allPopups[i].querySelector(".popup__close");
//   popupCloseButton.addEventListener("click", () => closePopup(allPopups[i]));
// }

// // изменение данных в форме карточки профиля
// const formElementProfile = popupTypeEdit.querySelector(".popup__form");

// function handleFormProfileSubmit(event) {
//   event.preventDefault();
//   loadingNewData(true, formElementProfile);
//   editProfile(
//     formElementProfile.name.value,
//     formElementProfile.description.value
//   )
//     .then((res) => {
//       userName = res.name;
//       userDescription = res.about;
//       nameInput.textContent = userName;
//       jobInput.textContent = userDescription;
//       closePopup(popupTypeEdit);
//     })
//     .catch((err) => {
//       console.error("Ошибка. Запрос не выполнен: ", err);
//     })
//     .finally(() => {
//       loadingNewData(false, formElementProfile);
//     });
// }
// formElementProfile.addEventListener("submit", handleFormProfileSubmit);

// // изменение аватара профиля
// const imageProfileFotoPopup = document.querySelector(".popup_type_new-avatar");

// imageProfileFoto.addEventListener("click", () => {
//   clearValidation(imageProfileFotoPopup, params);
//   openPopup(imageProfileFotoPopup);
// });

// const imageProfileForm = imageProfileFotoPopup.querySelector(
//   params.formSelector
// );

// const imageNewProfileFoto = imageProfileForm.link;

// imageProfileForm.addEventListener("submit", (event) => {
//   event.preventDefault();
//   loadingNewData(true, imageProfileForm);
//   editProfileFoto(imageNewProfileFoto.value)
//     .then((data) => {
//       imageProfileFoto.src = data.avatar;
//       closePopup(imageProfileFotoPopup);
//       imageProfileForm.reset();
//     })
//     .catch((err) => {
//       console.error("Возникла проблема с PATCH-запросом:", err.message);
//     })
//     .finally(() => {
//       loadingNewData(false, imageProfileForm);
//     });
// });

// // добавление новой карточки
// const formElementNewCard = popupNewCard.querySelector(".popup__form");

// formElementNewCard.addEventListener("submit", (event) => {
//   event.preventDefault();
//   loadingNewData(true, popupNewCard);
//   const nameInputNewPlace = formElementNewCard.querySelector(
//     ".popup__input_type_card-name"
//   );

//   const linkInputNewPlace = formElementNewCard.querySelector(
//     ".popup__input_type_url"
//   );

//   postNewCard(nameInputNewPlace.value, linkInputNewPlace.value)
//     .then((res) => {
//       // console.log(res)
//       const cardLike = res.likes.length;
//       idAutorCard = res.owner._id;
//       elementId = res._id;
//       arrLikes = res.likes;
//       placesList.prepend(
//         createCard(
//           nameInputNewPlace.value,
//           linkInputNewPlace.value,
//           cardLike,
//           deleteCard,
//           likeButtonJob,
//           popupOpenImageModal,
//           idMeProfile,
//           idAutorCard,
//           elementId,
//           arrLikes
//         )
//       );
//       closePopup(popupNewCard);
//     })
//     .catch((err) => {
//       console.error("Ошибка. Запрос не выполнен: ", err);
//     })
//     .finally(() => {
//       loadingNewData(false, popupNewCard);
//     });
// });

// // функция отображения процесса загрузки
// function loadingNewData(isLoading, popupForm) {
//   const popupButton = popupForm.querySelector(params.submitButtonSelector);
//   if (isLoading) {
//     popupButton.textContent = "Сохранение...";
//   } else {
//     popupButton.textContent = "Сохранить";
//   }
// }

// enableValidation(params);
