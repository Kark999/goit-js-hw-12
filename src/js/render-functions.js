import iziToast from 'izitoast';
import 'izitoast/dist/css/iziToast.min.css';
import errorIcon from '../img/octagon.svg';
import closeIcon from '../img/close.svg';

export function imageTemplate(data) {
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
export function galleryTemplate(data) {
  return data.map(imageTemplate).join('');
}

export function showError(message) {
  iziToast.error({
    message,
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
export function checkBtnStatus(data, params, btnElem) {
  const maxPage = Math.ceil(data.totalHits / params.per_page);
  const isLastPage = maxPage === params.page;
  if (isLastPage) {
    btnElem.classList.add('hidden');
    showError("We're sorry, but you've reached the end of search results.");
  } else {
    btnElem.classList.remove('hidden');
  }
}
export function smoothScroll(elem) {
  const card = elem;
  const cardSize = card.getBoundingClientRect();
  scrollBy({
    behavior: 'smooth',
    top: cardSize.height * 2,
  });
}
