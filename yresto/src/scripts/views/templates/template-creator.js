import CONFIG from '../../globals/config';

const createRestaurantItemTemplate = (restaurants) => `
  <div class="restaurant-item">
    <div class="restaurant-item__header">
      <img class="restaurant-item__header__poster" alt="${restaurants.name}"
      src="${CONFIG.BASE_IMAGE_URL + restaurants.pictureId}">
      <div class="restaurant-item__header__rating">
        <p class="restaurant-item__header__rating__star">&#9733;<span class="restaurant-item__header__rating__score">${restaurants.rating}</span></p>
      </div>
    </div>
    <div class="restaurant-item__content">
      <h3 class="restaurant-item-content__name"><a href="/#/detail/${restaurants.id}">${restaurants.name}</a></h3>
      <p class="restaurant-item-content__description">${restaurants.description}</p>
      <p class="restaurant-item-content__city">&#128205; ${restaurants.city}</p>
    </div>
  </div>
`;

const createRestaurantDetailTemplate = (restaurant) => `
  <div class="restaurant">
    <table class="restaurant__table">
      <tr>
        <td><img class="resto__poster" src="${CONFIG.BASE_IMAGE_URL + restaurant.pictureId}" alt="${restaurant.name}" /></td>
      </tr>
      <tr>
        <td>
          <div class="restaurant__info">
            <table>
              <tr>
                <td><h4>Nama Resto :</h4></td>
                <td><p>${restaurant.name}</p></td>
              </tr>
              <tr>
                <td><h4>Kota :</h4></td>
                <td><p>${restaurant.city}</p></td>
              </tr>
              <tr>
                <td><h4>Alamat :</h4></td>
                <td><p>${restaurant.address} minutes</p></td>
              </tr>
              <tr>
                <td><h4>Rating :</h4></td>
                <td><p>${restaurant.rating} <span  class="restaurant-item__header__rating__star">&#9733</span></p></td>
              </tr>
              <tr>
                <td><h4>Menu Makanan :</h4></td>
                <td><p>${restaurant.menus.foods.map((food) => food.name).join(', ')}</p></td>
              </tr>
              <tr>
                <td><h4>Menu Minuman :</h4></td>
                <td><p>${restaurant.menus.drinks.map((drink) => drink.name).join(', ')}</p></td>
              </tr>
            </table>
          </div>
        </td>
      </tr>
      <tr>
        <td colspan="2">
          <div class="restaurant__overview">
            <h3>Overview</h3>
            <p>${restaurant.description}</p>
          </div>
          <br>
          <div class="review">
            <h3>Reviews</h3>
            <p>${restaurant.customerReviews
    .map(
      (review) => `
              <div class="review-head">
                <p class="reviewer-name">${review.name} •</p>
                <p class="review-date">${review.date}</p>
              </div>
              <p class="reviewer-review">${review.review}</p>
            `,
    )
    .join('<br>')}
            </p>
          </div>
        </td>
      </tr>
    </table>
  </div>
`;

const createLikeButtonTemplate = () => `
  <button aria-label="like this restaurant" id="likeButton" class="like">
     <i class="fa fa-heart-o" aria-hidden="true"></i>
  </button>
`;

const createLikedButtonTemplate = () => `
  <button aria-label="unlike this restaurant" id="likeButton" class="like">
    <i class="fa fa-heart" aria-hidden="true"></i>
  </button>
`;

export {
  createRestaurantItemTemplate, createRestaurantDetailTemplate, createLikeButtonTemplate, createLikedButtonTemplate,
};
