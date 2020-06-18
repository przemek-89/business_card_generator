!(function() {
  $(document).ready(function() {
    AOS.init({
      once: true,
    });

    //add year in copyright
    const copyYear = document.getElementById('copyYear');
    const date = new Date();
    const year = date.getFullYear();
    copyYear.innerText = year.toString();

    const burger = document.getElementById('burger');
    const menu =document.getElementById('menu');
    const links = document.querySelectorAll(".link");

    burger.addEventListener('click', () => {
      menu.classList.toggle('active')
    });
    links.forEach(function(link) {
      link.addEventListener('click', () => {
          menu.classList.remove('active')
      })
    });
  });
})();
