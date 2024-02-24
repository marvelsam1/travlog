document.addEventListener('DOMContentLoaded', function () {
    var menuIcon = document.getElementById('menu-icon');
    var menu = document.getElementById('menu');
  
    menuIcon.addEventListener('click', function () {
      menu.classList.toggle('hidden');
    });
  });
  