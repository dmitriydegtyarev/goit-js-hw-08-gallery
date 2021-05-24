import images from './gallery-items.js';
import { refs } from './refs'

const { gallery, lightbox, lightboxImage, lightboxCloseBtn } = refs;

const createMarkupGalleryElement = ({ preview, original, description }, i) => `
  <li class="gallery__item">
      <a
          class="gallery__link"
          href=${original}
      >
          <img
              class="gallery__image"
              data-id="${i}"
              src="${preview}"
              data-source="${original}"
              alt="${description}"
          />
      </a>
  </li>
`;

const createMarkupGallery = (items) =>
  items.map(createMarkupGalleryElement).join('');

const renderGallery = (markup) => gallery.insertAdjacentHTML('beforeend', markup);

renderGallery(createMarkupGallery(images));