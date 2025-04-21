import iziToast from 'izitoast';
import 'izitoast/dist/css/iziToast.min.css';

import { getImagesByQuery } from './js/pixabay-api';
import * as render from './js/render-functions';

export const form = document.querySelector('.form');
const input = document.querySelector('[name="search-text"]');

let page = 1;
let totalPages;
let query;

form.addEventListener('submit', submitForm);
render.loadMoreBtn.addEventListener('click', loadMore);

async function submitForm(event) {
  event.preventDefault();
  render.clearGallery();
  query = input.value.trim();
  page = 1;

  if (!query) {
    form.reset();
    return;
  }

  try {
    const response = await getImagesByQuery(query, page);
    totalPages = Math.ceil(response.totalHits / response.hits.length);

    if (response.hits.length === 0) {
      render.hideLoadMoreButton();
      render.hideLoader();
      form.reset();
      return iziToast.info({
        title: 'Error',
        message:
          'Sorry, there are no images matching your search query. Please try again!',
        position: 'topRight',
      });
    }

    render.createGallery(response.hits);
    render.hideLoader();

    if (page >= totalPages) {
      return iziToast.info({
        title: 'Caution',
        message: "We're sorry, but you've reached the end of search results.",
        position: 'topRight',
      });
    }

    render.showLoadMoreButton();
  } catch (error) {
    return console.log(error.message);
  }
  form.reset();
}

async function loadMore() {
  render.hideLoadMoreButton();
  render.showLoader();
  page += 1;

  try {
    const response = await getImagesByQuery(query, page);
    render.createGallery(response.hits);
    render.hideLoader();

    const item = document.querySelector('.gallery-item');
    const itemHeight = item.getBoundingClientRect().height;

    window.scrollBy({
      left: 0,
      top: itemHeight * 2,
      behavior: 'smooth',
    });

    if (page >= totalPages) {
      return iziToast.info({
        title: 'Caution',
        message: "We're sorry, but you've reached the end of search results.",
        position: 'topRight',
      });
    }
    render.showLoadMoreButton();
  } catch (error) {
    return console.log(error.message);
  }
}
