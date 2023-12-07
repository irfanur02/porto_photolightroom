var imageComparison = document.querySelector('.image-comparison');
const containerImages = document.querySelector('.images');

containerImages.addEventListener('input', function (e) {
  if (e.target.className = 'slider') {
    e.target.parentElement.parentElement.querySelector('.image-comparison').style.setProperty('--position', `${e.target.value}%`);
  }
})

$('.image-before').on('mousedown mouseup', function mouseState(e) {
  if (e.type == "mousedown") {
    $(this).children('.image-after').addClass('hide-image-after');
    $(this).children('.label-comparison').removeClass('hide-label-image');
  } 
  if (e.type == "mouseup") {
    $(this).children('.image-after').removeClass('hide-image-after');
    $(this).children('.label-comparison').addClass('hide-label-image');
  }
})

$('.btn-menu input:checkbox').change(function(){
  if($(this).is(':checked')){
    $('.content-menu').css('display', 'block');
  } else {
    $('.content-menu').css('display', 'none');
  }
});

$('.btn-next').on('click', function (e) {
  var nextImage = $(this).attr('href');
})

// let lastKnownScrollPosition = 0;
// let ticking = false;

// function doSomething(scrollPos) {
//   // Do something with the scroll position
//   console.log(scrollPos);
// }

// document.addEventListener("scroll", (event) => {
//   lastKnownScrollPosition = window.scrollY;

//   if (!ticking) {
//     window.requestAnimationFrame(() => {
//       doSomething(lastKnownScrollPosition);
//       ticking = false;
//     });

//     ticking = true;
//   }
// });

// $(window).scroll(function(e) {
//   // parallax();
//   var scroll = $(window).scrollTop();
//   // var screenHeight = $(window).height();
//   console.log(scroll);
//   // console.log(screenHeight);
// })