// $(document).ready(function(){
//     $(".owl-carousel").owlCarousel({
//         loop:true,
//         nav:true,
//         dots:true,
//         responsive:{
//             0:{
//                 items:1
//             },
//             600:{
//                 items:3
//             },
//             1000:{
//                 items:4
//             }
//         }
//     });
//   });

$(document).ready(function () {
  $("#news-slider").owlCarousel({
    items: 3,
    itemsDesktop: [1199, 3],
    itemsDesktopSmall: [980, 2],
    itemsMobile: [600, 1],
    navigation: true,
    loop: true,
    nav: true,
    dots: true,
    navigationText: ["", ""],
    pagination: true,
    autoPlay: true,
  });
});
