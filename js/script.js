

// ===========================  Owl Carousel  ===========================
// $('.owl-carousel').owlCarousel({
//     loop:true,
//     nav:false,
//     dots:true,
//     autoplay:true,
//     autoplayTimeout:3000,
//     responsive:{
//         0:{
//             items:1,
//             margin:10
//         },
//         700:{
//             items:1,
//             margin:10
//         },
//         1000:{
//             items:1,
//             margin:20
//         }
//     }
// })

const myTimeout = setTimeout(
    $('#testi').owlCarousel({
        loop: true,
        margin: 10,
        nav: true,
        dots: false,
        autoplay: true,
        autoplayTimeout:3000,
        responsive: {
            0: {
                items: 1
            },
            600: {
                items: 2
            },
            991: {
                items: 2
            },
            1000: {
                items: 2
            }
        }
    }),

    $('#blog').owlCarousel({
        loop: true,
        margin: 10,
        nav: false,
        dots: false,
        autoplay:true,
        autoplayTimeout:4000,
        responsive: {
            0: {
                items: 1
            },
            575: {
                items: 2
            },       
            600: {
                items: 3
            },
            1000: {
                items: 4
            }
        }
    }),
function myStopFunction() {
    clearTimeout(myTimeout);
}
, 500);

// ===================== Header Sticky Start ==============================================


  /* sticky header */
  if ($(window).width() >= 992) {
    $(document).ready(function(){
         $(window).scroll(function () {
           if ($(this).scrollTop() > 100) {
               $('.hsticky').addClass('fixed fadeInDown animated');
           } else {
               $('.hsticky').removeClass('fixed fadeInDown animated');
           }
         });
   });
   };

// ===================== Header Sticky End ==============================================

// ===================== Back to Top Start ==============================================

$(document).ready(function(){ 
    $(window).scroll(function(){ 
        if ($(this).scrollTop() > 100) { 
            $('#back-top').fadeIn(); 
        } else { 
            $('#back-top').fadeOut(); 
        } 
    }); 
    $('#back-top').click(function(){ 
        $("html, body").animate({ scrollTop: 0 }, 600); 
        return false; 
    }); 
});

// ===================== Back to Top End ==============================================

// ===================== Responsive Menu Start ==============================================
    const closeBtn = document.querySelector('.closeBtn');
    const navbar = document.querySelector('.navbar');
    const resNav = document.querySelector('.resNav');
    const overlay = document.querySelector('.overlay');

    navbar.addEventListener('click', () =>{
        resNav.classList.toggle('navActive');
        overlay.classList.toggle('overlayActive');
    })
    closeBtn.addEventListener('click', () => {
        resNav.classList.toggle('navActive');
        overlay.classList.toggle('overlayActive');
    })
    overlay.addEventListener('click', () => {
        resNav.classList.toggle('navActive');
        overlay.classList.toggle('overlayActive');
    })
// ===================== Responsive Menu End ==============================================