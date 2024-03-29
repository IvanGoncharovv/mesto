import {Popup} from './Popup.js';

class PopupWithImage extends Popup {
  constructor(popup) {
    super(popup);
    this._image = this._popup.querySelector('.popup__image');
    this._title = this._popup.querySelector('.popup__image-title')
  }

  open({data}) {
    super.open();
    this._image.src = data.link;
    this._image.alt = data.name;
    this._title.textContent = data.name;
  } 
}

export {PopupWithImage}