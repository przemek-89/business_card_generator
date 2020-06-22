!(function () {
  $(document).ready(function () {
    AOS.init({
      once: true,
    });

    //add year in copyright
    const copyYear = document.getElementById('copyYear');
    const date = new Date();
    const year = date.getFullYear();
    copyYear.innerText = year.toString();

    const burger = document.getElementById('hamburger');
    const menu = document.getElementById('header__menu');
    const links = document.querySelectorAll('.header__menu--item');

    //burger menu
    burger.addEventListener('click', () => {
      menu.classList.toggle('active');
      burger.classList.toggle('active');
    });
    links.forEach(function (link) {
      link.addEventListener('click', () => {
        menu.classList.remove('active');
      });
    });

    //sticky header
    window.onscroll = function () {
      myFunction();
    };

    const header = document.getElementById('header');
    const sticky = header.offsetTop;

    function myFunction() {
      if (window.pageYOffset > sticky) {
        header.classList.add('sticky');
      } else {
        header.classList.remove('sticky');
      }
    }
  });
  //this opytions of gallery
  const macy = Macy({
    container: '#container-macy',
    trueOrder: false,
    waitForImages: false,
    margin: {
      x: 24,
      y: 20,
    },
    columns: 3,
    breakAt: {
      940: 3,
      780: 2,
      400: 1,
    },
  });
})();
