import 'regenerator-runtime'; 
import '../styles/main.css';

document.addEventListener('DOMContentLoaded', () => {
  const hamburgerMenu = document.querySelector('.hamburger-menu');
  const menu = document.querySelector('.menu');
  const menuItems = document.querySelectorAll('.menu li a');
  const restaurantItems = document.querySelectorAll('.restaurant-item');
  let focusedMenuItemIndex = -1;
  let focusedRestaurantItemIndex = -1;
  let isMenuOpen = false;

  const toggleMenu = () => {
    menu.classList.toggle('active');
    hamburgerMenu.classList.toggle('active');
    isMenuOpen = !isMenuOpen;

    if (isMenuOpen && menuItems.length > 0) {
      focusedMenuItemIndex = 0;
      menuItems[focusedMenuItemIndex].focus();
    }
  };

  const handleHamburgerClick = () => {
    toggleMenu();
  };

  const handleMenuItemClick = () => {
    if (isMenuOpen) {
      menu.classList.remove('active');
      hamburgerMenu.classList.remove('active'); 
      isMenuOpen = false;
    }
  };

  const handleMenuItemNavigation = (event) => {
    if (isMenuOpen) {
      event.preventDefault();
      if (event.key === 'ArrowUp' && focusedMenuItemIndex > 0) {
        menuItems[focusedMenuItemIndex - 1].focus();
        focusedMenuItemIndex -= 1;
      } else if (event.key === 'ArrowDown' && focusedMenuItemIndex < menuItems.length - 1) {
        menuItems[focusedMenuItemIndex + 1].focus();
        focusedMenuItemIndex += 1;
      } else if (event.key === 'Tab') {
        if (event.shiftKey) {
          if (focusedMenuItemIndex > 0) {
            menuItems[focusedMenuItemIndex - 1].focus();
            focusedMenuItemIndex -= 1;
          }
        } else {
          if (focusedMenuItemIndex < menuItems.length - 1) {
            menuItems[focusedMenuItemIndex + 1].focus();
            focusedMenuItemIndex += 1;
          }
        }
      }
    }
  };

  const handleRestaurantItemNavigation = (event) => {
    if (isMenuOpen) {
      event.preventDefault();
      if (event.key === 'ArrowUp' && focusedRestaurantItemIndex > 0) {
        restaurantItems[focusedRestaurantItemIndex - 1].focus();
        focusedRestaurantItemIndex -= 1;
      } else if (event.key === 'ArrowDown' && focusedRestaurantItemIndex < restaurantItems.length - 1) {
        restaurantItems[focusedRestaurantItemIndex + 1].focus();
        focusedRestaurantItemIndex += 1;
      }
    }
  };

  hamburgerMenu.addEventListener('click', handleHamburgerClick);

  hamburgerMenu.addEventListener('keydown', event => {
    if (event.key === 'Enter' || event.key === ' ') {
      handleHamburgerClick();
      event.preventDefault();
    }
  });

  menuItems.forEach((item, index) => {
    item.addEventListener('click', handleMenuItemClick);
    item.addEventListener('click', () => {
      handleMenuItemClick(); 
    });

    item.addEventListener('keydown', handleMenuItemNavigation);
  });

  restaurantItems.forEach((item, index) => {
    item.addEventListener('keydown', handleRestaurantItemNavigation);

    item.addEventListener('click', () => {
      focusedRestaurantItemIndex = index;
    });
  });

  document.addEventListener('keydown', (event) => {
    if (isMenuOpen && event.key === 'Escape') {
      toggleMenu();
    }
  });
  
  const descriptionContainers = document.querySelectorAll('.description-container');

  descriptionContainers.forEach(container => {
    container.addEventListener('click', event => {
      const clickedButton = event.target;
      const isReadMoreBtn = clickedButton.classList.contains('read-more-button');
  
      if (isReadMoreBtn) {
        toggleReadMoreText(clickedButton);
      }
    });

    container.addEventListener('keydown', event => {
      const clickedButton = event.target;
      const isReadMoreBtn = clickedButton.classList.contains('read-more-button');

      if (isReadMoreBtn && (event.key === 'Enter' || event.key === ' ')) {
        toggleReadMoreText(clickedButton);
        event.preventDefault();
      }
    });
  });

  function toggleReadMoreText(button) {
    const description = button.closest('.description');
    const readMoreText = description.querySelector('.read-more-text');
    readMoreText.classList.toggle('read-more-text--show');

    if (readMoreText.classList.contains('read-more-text--show')) {
      button.textContent = "Read Less...";
    } else {
      button.textContent = "Read More...";
    }
  }

});
