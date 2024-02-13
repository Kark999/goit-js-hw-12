import SimpleLightbox from 'simplelightbox';
import 'simplelightbox/dist/simple-lightbox.min.css';
import { getImagesByType } from './js/pixabay-api';
import * as render from './js/render-functions';

const refs = {
  form: document.querySelector('.form'),
  gallery: document.querySelector('.gallery'),
  loader: document.querySelector('.loader'),
  searchMore: document.querySelector('.search-more'),
};
const params = {
  key: '42141224-180b0a56c10fd436e302d680a',
  q: '',
  image_type: 'photo',
  orientation: 'horizontal',
  safesearch: true,
  page: '',
  per_page: 15,
};

let gallery = new SimpleLightbox('.gallery a');

refs.form.addEventListener('submit', onFormSubmit);
refs.searchMore.addEventListener('click', onGetImageByPage);

async function onGetImageByPage(e) {
  params.page += 1;

  refs.loader.classList.remove('hidden');
  try {
    const data = await getImagesByType(params);
    if (data.totalHits === 0) {
      return render.showError(message); // check and change
    }
    const markup = render.galleryTemplate(data.hits);
    refs.gallery.insertAdjacentHTML('beforeend', markup);
    gallery.refresh();
    render.checkBtnStatus(data, params, refs.searchMore);
  } catch (error) {
    render.showError(error); // check and change
  }
  refs.loader.classList.add('hidden');
  render.smoothScroll(refs.gallery.firstElementChild);
}

async function onFormSubmit(e) {
  e.preventDefault();
  params.q = e.target.elements.search.value;
  params.page = 1;
  refs.gallery.innerHTML = '';
  refs.searchMore.classList.add('hidden');
  console.log(params.q.trim());
  if (!params.q.trim()) {
    render.showError('digital world is mess'); // check and change
  } else {
    refs.loader.classList.remove('hidden');
    try {
      const data = await getImagesByType(params);
      console.log(data.totalHits);
      if (data.totalHits === 0) {
        refs.loader.classList.add('hidden');
        render.showError(
          'Sorry, there are no images matching <br/> your search query. Please try again!'
        );
        return;
      }
      const markup = render.galleryTemplate(data.hits);
      refs.gallery.innerHTML = markup;
      gallery.refresh();
      render.checkBtnStatus(data, params, refs.searchMore);
      // const checkBtnStatusBound = render.checkBtnStatus.bind(refs);
      // checkBtnStatusBound(data, params);
    } catch (error) {
      render.showError(error); // check and change
      console.log(error);
    }
    refs.loader.classList.add('hidden');
  }
  refs.form.reset();
}
