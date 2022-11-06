import { galleryItems } from './gallery-items.js';
import { SimpleLightbox } from './item.js';

const galleryEl = document.querySelector('.gallery');

const getImageCollection = () => {
  const container = galleryItems.map(SimpleLightbox);
  galleryEl.insertAdjacentHTML('afterbegin', container.join(''));
};
getImageCollection();

let lightbox = new SimpleLightbox('.gallery a', {
  captionsData: 'alt',
  captionDelay: 250,
});
