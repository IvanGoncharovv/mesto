import {openPopup} from "./index.js";
const popupImage = document.querySelector('.popup_type_image');
const fullSizeImage = document.querySelector('.popup__image');

class Card {
  constructor(data, selector){
    this._name = data.name;
    this._link = data.link;
    this._selector = selector;
  }

  _getTemplate() {
    const cardTemplate = document
      .querySelector(this._selector)
      .content
      .querySelector('.card')
      .cloneNode(true);
    return cardTemplate;
  }
  generateCard() {
    this._element = this._getTemplate();
    this._setEventListeners()
    const cardImage = this._element.querySelector('.card__image')
    cardImage.src = this._link;
    cardImage.alt = this._name;
    this._element.querySelector('.card__title').textContent = this._name;
    return this._element;
  }

  _setEventListeners() {
    this._element.querySelector('.card__btn-like').addEventListener('click', () => {
      this._toggleLikeStatus();
    });
    this._element.querySelector('.card__btn-delete').addEventListener('click', () => {
      this._deleteCard();
    });
    this._element.querySelector('.card__image').addEventListener('click', () => {
      this._handleOpenPopup();
    });
  }

  _deleteCard(){
    this._element.remove();
  }

  _toggleLikeStatus() {
    const like = this._element.querySelector('.card__btn-like');
    like.classList.toggle('card__btn-like_active')
  }

  _handleOpenPopup(){
    fullSizeImage.src = this._link;
    fullSizeImage.alt = this._name;
    document.querySelector('.popup__image-title').textContent = this._name;
    openPopup(popupImage)
    }
 }

export {Card};

