import images from './gallery-items.js';

const refs = {
  ul: document.querySelector('.js-gallery'),
  div: document.querySelector('.js-lightbox'),
  closeBtn: document.querySelector('.lightbox__button'),
};

const createElementGallery = () => {
  images.forEach(image =>
    refs.ul.insertAdjacentHTML('beforeend',
  `<li class="gallery__item">
    <a
       class="gallery__link"
        href=${image.original}
    >
      <img
        class="gallery__image"
        src=${image.preview}
        data-source=${image.original}
      alt=${image.description}
    />
  </a>
</li>`));  
};

createElementGallery ();