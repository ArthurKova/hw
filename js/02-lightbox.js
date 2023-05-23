import { galleryItems } from './gallery-items.js';
// Change code below this line

// console.log(galleryItems);
const listEl = document.querySelector('.gallery');

const makeGalleryMarkUp = ({ preview, description, original }) => {
  return `<li class="gallery__item">
    <a class="gallery__link" href="${original}" onclick="event.preventDefault()">
      <img
        class="gallery__image"
        src="${preview}"
        alt="${description}"
        data-img="${description}"
      />
    </a>
  </li>`;
};

const makePageGallery = galleryItems.map(makeGalleryMarkUp).join('');
listEl.insertAdjacentHTML('beforeend', makePageGallery);

let gallery = new SimpleLightbox('.gallery a', {
  captionPosition: 'bottom',
  captionDelay: 250,
  captions: true,
  captionSelector: 'img',
  captionType: 'data',
  sourceAttr: 'href',
  captionsData: 'img',
});

// gallery.on('show.simplelightbox', function (e) {
//   console.log(e.currentTarget.children[0].alt);
// });
