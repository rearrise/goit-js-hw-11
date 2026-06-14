import SimpleLightbox from 'simplelightbox';
import 'simplelightbox/dist/simple-lightbox.min.css';

export const imageGallery = imageInfo => {
  return `
    <li class="gallery-item">
      <a class="gallery-link" href="${imageInfo.largeImageURL}">
        <img
          class="gallery-image"
          src="${imageInfo.webformatURL}"
          alt="${imageInfo.tags}"
        />
      </a>
        <div class="gallery-data">
            <ul class="img-list">
                <li class="img-data">
                    <p class="img-text">Likes</p><p class="img-text">${imageInfo.likes}</p>
                </li>
                <li class="img-data">
                    <p class="img-text">Views</p><p class="img-text">${imageInfo.views}</p>
                </li>
                <li class="img-data">
                    <p class="img-text">Comments</p><p class="img-text">${imageInfo.comments}</p>
                </li>
                <li class="img-data">
                    <p class="img-text">Downloads</p><p class="img-text">${imageInfo.downloads}</p>
                </li>
            </ul>
        </div>
     </li>
  `;
};
