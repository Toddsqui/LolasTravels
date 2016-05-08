var button = document.getElementById('navbar-icon');
var navbarSpan = document.querySelectorAll('#navbar-icon span');
var headerWrapper = document.querySelector('.header-wrapper');
var navbarIcon = document.querySelector('#navbar-icon');

button.addEventListener('click', function(event) {
  navTransform();
  wrapperSlide();
  event.stopPropagation;
  event.preventDefault;
});

window.addEventListener('scroll', function () {
var distance_from_top = document.body.scrollTop;

  if(distance_from_top > 0) {
  navbarIcon.style.top = distance_from_top  + 'px';
  }


});


// Functions to be called

function navTransform() {
  
  for(i=0;i < navbarSpan.length;i++) {
    if(navbarSpan[i].classList != 'active') {
         navbarSpan[i].classList.add('active');
      } else {
        navbarSpan[i].classList.remove('active');
      }
  }
}

function wrapperSlide() {
  headerWrapper.classList.toggle('open');
}