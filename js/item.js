export const itemBasicLightbox = ({ original, description, preview }) =>
  `
  <div class="gallery__item">
  <a class="gallery__link" href="">
    <img
      class="gallery__image"
      src="${preview}"
      data-source="${original}"
      alt="${description}"
    />
  </a>
</div>
  `;

export const SimpleLightbox = ({ original, description, preview }) =>
  `
<li class="gallery__item>
<a class="gallery__link" href="${original}">
  <img class="gallery__image" src="${preview}" alt="${description}" />
</a>
</li>
  `;
