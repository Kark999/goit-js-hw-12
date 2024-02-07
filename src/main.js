import iziToast from 'izitoast';
import 'izitoast/dist/css/iziToast.min.css';
import SimpleLightbox from 'simplelightbox';
import 'simplelightbox/dist/simple-lightbox.min.css';
import errorIcon from '../src/img/octagon.svg';
import closeIcon from '../src/img/close.svg';

const refs = {
  form: document.querySelector('.form'),
  gallery: document.querySelector('.gallery'),
  loader: document.querySelector('.loader'),
};
let gallery = new SimpleLightbox('.gallery a');

refs.form.addEventListener('submit', onFormSubmit);

function onFormSubmit(e) {
  e.preventDefault();
  const search = e.target.elements.search.value.trim();
  refs.loader.classList.remove('hidden');
  refs.gallery.innerHTML = '';
  getImagesByType(search)
    .then(data => {
      if (data.totalHits === 0) {
        return showError(message);
      }
      const markup = galleryTemplate(data.hits);
      refs.gallery.innerHTML = markup;
      gallery.refresh();
    })
    .catch(error => {
      showError(error);
    })
    .finally(() => {
      refs.loader.classList.add('hidden');
    });

  refs.form.reset();
}

function getImagesByType(query) {
  const BASE_URL = 'https://pixabay.com/api/';
  const API_KEY = '42141224-180b0a56c10fd436e302d680a';
  const PARAMS = new URLSearchParams({
    key: API_KEY,
    q: query,
    image_type: 'photo',
    orientation: 'horizontal',
    safesearch: true,
  });

  const url = `${BASE_URL}?${PARAMS}`;

  return fetch(url)
    .then(res => res.json())
    .catch(error => {
      showError(error);
    });
}

function imageTemplate(data) {
  return `<li class="gallery-card">
        <a href="${data.largeImageURL}"
          ><img
            class="gallery-image"
            src="${data.webformatURL}"
            alt="${data.tags}"
            title=""
          />
        </a>
        <div class="gallery-card-items">
          <p class="gallery-card-info">
            Likes
            <span class="gallery-card-data">${data.likes}</span>
          </p>

          <p class="gallery-card-info">
            Views
            <span class="gallery-card-data">${data.views}</span>
          </p>

          <p class="gallery-card-info">
            Comments
            <span class="gallery-card-data">${data.comments}</span>
          </p>

          <p class="gallery-card-info">
            Downloads
            <span class="gallery-card-data">${data.downloads}</span>
          </p>
        </div>
      </li>`;
}
function galleryTemplate(data) {
  return data.map(imageTemplate).join('');
}

function showError(message) {
  iziToast.error({
    message:
      'Sorry, there are no images matching <br/> your search query. Please try again!',
    position: 'topRight',
    messageColor: '#ffffff',
    messageSize: '16px',
    backgroundColor: '#ef4040',
    iconColor: '#ffffff',
    iconUrl: errorIcon,
    timeout: 5000,
    close: false,
    closeOnEscape: true,
    buttons: [
      [
        `<button type="button" style="background-color: transparent" ><img src=${closeIcon}></button>`,
        function (instance, toast) {
          instance.hide({ transitionOut: 'fadeOut' }, toast);
        },
      ],
    ],
  });
}
