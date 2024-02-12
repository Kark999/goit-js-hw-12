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
