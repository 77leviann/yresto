import RestaurantSource from '../../data/restaurant-source';
import { createRestaurantItemTemplate } from '../templates/template-creator';

const Restaurant = {
  async render() {
    return `
      <style>
      .content__heading {
        margin-bottom: 2vh;
      }
      </style>
      <div class="content">
      <h2 class="content__heading">Daftar Restoran Terbaik</h2>
        <div id="restaurants" class="restaurants">
        </div>
      </div>
      `;
  },

  async afterRender() {
    document.querySelector('#hero').style.display = 'grid';
    const restaurant = await RestaurantSource.restaurantList();
    const restaurantContainer = document.querySelector('#restaurants');
    restaurant.forEach((resto) => {
      restaurantContainer.innerHTML += createRestaurantItemTemplate(resto);
    });
  },
};

export default Restaurant;
