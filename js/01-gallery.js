import { galleryItems } from './gallery-items.js';
import { item } from './item.js';

const gallery = document.querySelector('.gallery');

const getImageCollection = () => {
  const container = galleryItems.map(item);
  gallery.insertAdjacentHTML('beforeend', container.join(''));
};

getImageCollection();

const originalImageLink = document.querySelector('.gallery__link');

const openOriginalImage = event => {
  event.preventDefault();
  if (event.target.nodeName !== 'IMG') {
    return;
  }
  console.log(event.target.dataset.source);
};

gallery.addEventListener('click', openOriginalImage);
