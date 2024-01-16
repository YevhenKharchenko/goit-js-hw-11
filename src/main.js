import iziToast from 'izitoast';
import 'izitoast/dist/css/iziToast.min.css';
import simpleLightbox from 'simplelightbox';
import 'simplelightbox/dist/simple-lightbox.min.css';

const form = document.querySelector('.form');
const formInput = document.querySelector('.form-input');
const gallery = document.querySelector('.gallery');
const loaderAnimation = document.createElement('div');
loaderAnimation.classList.add('loader');

form.addEventListener('submit', onFormSubmit);

function onFormSubmit(e) {
  e.preventDefault();
  gallery.innerHTML = '';
  form.after(loaderAnimation);

  const inputQuery = formInput.value;
  const userKey = '41829663-a3becd9e4f80ae5dbcbf223ac';

  fetch(
    `https://pixabay.com/api/?key=${userKey}&q=${inputQuery}&image_type=photo&orientation=horizontal&safesearch=true&per_page=30`
  )
    .then(response => {
      if (!response.ok) {
        throw new Error(response.status);
      } else {
        return response.json();
      }
    })
    .then(({ hits }) => {
      if (!hits.length) {
        iziToast.show({
          message:
            'Sorry, there are no images matching your search query. Please, try again!',
          position: 'topRight',
          color: '#EF4040',
          messageColor: '#FAFAFB',
          iconUrl: './img/bi_x-octagon.svg',
        });
      }

      const markup = hits
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
              <a class="item-link" href="${largeImageURL}">
                <img
                  src="${webformatURL}"
                  alt="${tags}"
                  width="360"
                  height="200"
                />
              </a>
              <ul class="mini-list">
                <li class="mini-header">
                  <h3>Likes</h3>
                  <p>${likes}</p>
                </li>
                <li class="mini-header">
                  <h3>Views</h3>
                  <p>${views}</p>
                </li>
                <li class="mini-header">
                  <h3>Comments</h3>
                  <p>${comments}</p>
                </li>
                <li class="mini-header">
                  <h3>Downloads</h3>
                  <p>${downloads}</p>
                </li>
              </ul>
            </li>`
        )
        .join('');

      loaderAnimation.remove();
      formInput.value = '';
      gallery.insertAdjacentHTML('beforeend', markup);

      const instanceOfLightbox = new simpleLightbox('li a', {
        captionsData: 'alt',
        captionClass: 'img-caption',
        captionDelay: 250,
      });

      instanceOfLightbox.refresh();
    })
    .catch(error => console.log(error));
}
