function menuShow() {
    let menuMobile = document.querySelector('.mobile-menu');
    if (menuMobile.classList.contains('open')) {
        menuMobile.classList.remove('open');
        document.querySelector('.icon').src = "img/menu_white_36dp.svg";
    } else {
        menuMobile.classList.add('open');
        document.querySelector('.icon').src = "img/close_white_36dp.svg";
    }
}
//Funcionalidade da animação //
window.onload = function(){
    Particles.init({
      selector: '.background',
      maxParticles: 150,
      connectParticles: 'true',
      speed:2,
      minDistance: 140,
      sizeVariations: 4,
      color: '#ffffff'
    });
  }