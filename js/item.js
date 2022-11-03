export const item = ({ original, description, preview }) =>
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
//   ${original}
