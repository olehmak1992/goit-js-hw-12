import SimpleLightbox from 'simplelightbox';
import 'simplelightbox/dist/simple-lightbox.min.css';

const gallery = document.querySelector('.gallery');
const loader = document.querySelector('.loader');
export const loadMoreBtn = document.querySelector('.load-more-btn');

const simpleGallery = new SimpleLightbox('.gallery a', {
  captionsData: 'alt',
  captionDelay: 250,
});

export function createGallery(images) {
  const imagesList = images
    .map(
      ({
        webformatURL,
        largeImageURL,
        tags,
        likes,
        views,
        comments,
        downloads,
      }) =>
        `<li class="gallery-item">
        <a class="gallery-link" href=${largeImageURL}>
            <img
                class="gallery-image"
                src=${webformatURL} 
                alt="${tags}"
            />
            <ul class="gallery-desc">
                <li>
                    <h2>Likes</h2><p>${likes}</p>
                </li>
                <li>
                    <h2>Views</h2><p>${views}</p>
                </li>
                <li>
                    <h2>Comments</h2><p>${comments}</p>
                </li>
                <li>
                    <h2>Downloads</h2><p>${downloads}</p>
                </li>
            </ul>
        </a>
    </li>`
    )
    .join('');

  gallery.insertAdjacentHTML('beforeend', imagesList);

  simpleGallery.refresh();
}

export function clearGallery() {
  gallery.innerHTML = '';
}

export function showLoader() {
  loader.classList.remove('hidden');
}

export function hideLoader() {
  loader.classList.add('hidden');
}

export function showLoadMoreButton() {
  loadMoreBtn.classList.remove('hidden');
}

export function hideLoadMoreButton() {
  loadMoreBtn.classList.add('hidden');
}
