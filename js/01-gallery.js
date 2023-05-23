import { galleryItems } from './gallery-items.js';
//
// Change code below this line

const listEl = document.querySelector('.gallery');

// const makeGalleryMarkup = ({ preview, description }) => {
//   return `<li class="gallery__item"><a href="" class="gallery__link" onclick="event.preventDefault()"><img src="${preview}" alt="${description}" width="719" height="480" class="gallery__image"</a></li>`;
// };

// const makePageGallery = galleryItems.map(makeGalleryMarkup).join('');

// listEl.insertAdjacentHTML('beforeend', makePageGallery);

// listEl.addEventListener('click', event => {
//   for (let item of galleryItems) {
//     if (item.preview === event.target.src) {
//       const instance = basicLightbox.create(`
//   <div class="modal">
//       <img src="${item.original}" alt="${item.description}" width="1100" height="700">
//   </div>`);
//       instance.show();
//       document.addEventListener('keydown', event => {
//         if (event.code === 'Escape') {
//           instance.close();
//         }
//       });
//     }
//   }
// });

const makeGalleryMarkup = ({ preview, description, original }) => {
  return `<li class="gallery__item"><a href="" class="gallery__link" onclick="event.preventDefault()" href="${original}"><img src="${preview}" data-source="${original}" alt="${description}" width="719" height="480" class="gallery__image"</a></li>`;
};

const makePageGallery = galleryItems.map(makeGalleryMarkup).join('');
listEl.insertAdjacentHTML('beforeend', makePageGallery);

listEl.addEventListener('click', event => {
  const instance = basicLightbox.create(`
  <div class="modal">
      // <img src="${event.target.dataset.source}" alt="${event.target.alt}" width="1100" height="700">
  </div>`);
  instance.show();
  document.addEventListener('keydown', event => {
    if (event.code === 'Escape') {
      instance.close();
    }
  });
});
