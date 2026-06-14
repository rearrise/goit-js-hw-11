import { getImagesByQuery } from './js/pixabay-api';
import { imageGallery } from './js/render-functions';
import iziToast from 'izitoast';
import 'izitoast/dist/css/iziToast.min.css';
import SimpleLightbox from 'simplelightbox';
import 'simplelightbox/dist/simple-lightbox.min.css';
const form = document.querySelector('.form');
const galleryEl = document.querySelector('.gallery');
const lightbox = new SimpleLightbox('.gallery a');
const loader = document.querySelector('.loader');
form.addEventListener('submit', event => {
  event.preventDefault();
  const query = event.currentTarget.elements['search-text'].value.trim();
  galleryEl.innerHTML = '';
  loader.classList.remove('hidden');
  getImagesByQuery(query)
    .then(response => {
      if (response.data.hits.length === 0) {
        iziToast.error({
          message:
            'Sorry, there are no images matching your search query. Please try again!',
          position: 'topRight',
        });
        return;
      }
      const markup = response.data.hits.map(imageGallery).join('');
      galleryEl.innerHTML = markup;
      lightbox.refresh();
    })
    .catch(error => {
      console.log(error);
    })
    .finally(() => {
      loader.classList.add('hidden');
    });
});
