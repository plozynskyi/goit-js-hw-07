import { galleryItems } from './gallery-items.js';
import { itemBasicLightbox } from './item.js';

const gallery = document.querySelector('.gallery');

const getImageCollection = () => {
  const container = galleryItems.map(itemBasicLightbox);
  gallery.insertAdjacentHTML('beforeend', container.join(''));
};
getImageCollection();

gallery.addEventListener('click', onImageClick);

function onImageClick(e) {
  e.preventDefault();

  if (e.target.nodeName !== 'IMG') {
    return;
  }

  const instance = basicLightbox.create(`
  <img src="${e.target.dataset.source}">
`);

  instance.show();

  const handleClick = () => {
    console.log('clasdasdasdaaaaaaaaaaaaaaaaaaaaaaaaas removed from btn');
  };

  gallery.removeEventListener('click', handleClick);

  gallery.addEventListener('keydown', e => {
    if (e.code === 'Escape') {
      instance.close();
      gallery.removeEventListener('keydown', handleClick);
      console.log('click event listener was removed from btn');
    }
  });
}
