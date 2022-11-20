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

$("#news-slider").owlCarousel({
  loop:true,
  margin:10,
  responsiveClass:true,
  responsive:{
      0:{
          items:1,
          nav:false,
          loop:true
      },
      600:{
          items:2,
          nav:true,
          loop:true
      },
      1000:{
          items:2,
          nav:true,
          loop:true
      }
  }
})
