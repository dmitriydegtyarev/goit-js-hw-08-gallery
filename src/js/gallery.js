import images from './gallery-items.js';
import { refs } from './refs'

const { gallery, lightbox, lightboxImage, lightboxCloseBtn } = refs;
const arrImgLength = images.length - 1;
let currentIndex = null;

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

const clickImage = (event) => {
  event.preventDefault();

  const { dataset, alt, nodeName } = event.target;

  if (nodeName === 'IMG') {
    const { source, id } = dataset;
    openModal(source, alt, Number(id));
    console.log(id);
  }
};

const presKeyOnKeyboard = ({ code }) => {
  if (code === 'Escape') {
    closeModal();
  };

  if (code === 'ArrowRight') {
    clickNextImage();
  };
  
  if (code === 'ArrowLeft') {
    clickPreviusImage();
  };
}

const clickNextImage = () => {
  currentIndex = arrImgLength === currentIndex ? 0 : currentIndex + 1;
  const { original, description } = images[currentIndex];
  lightboxImage.src = original;
  lightboxImage.alt = description;
  console.log(currentIndex);
};

const clickPreviusImage = () => {
  currentIndex = currentIndex === 0 ? arrImgLength : currentIndex - 1;
  const { original, description } = images[currentIndex];
  lightboxImage.src = original;
  lightboxImage.alt = description;
  console.log(currentIndex);
};

const openModal = (src, alt, id) => {
  window.addEventListener('keydown', presKeyOnKeyboard);
  currentIndex = id;
  lightbox.classList.add('is-open');
  lightboxImage.src = src;
  lightboxImage.alt = alt;
  console.log('ADD EVENT LISTENER');
};

const closeModal = () => {
  window.removeEventListener('keydown', presKeyOnKeyboard);
  currentIndex = null;
  lightbox.classList.remove('is-open');
  lightboxImage.src = '';
  lightboxImage.alt = '';
  console.log('REMOVE EVENT LISTENER');
};

gallery.addEventListener('click', clickImage);
lightboxCloseBtn.addEventListener('click', closeModal);