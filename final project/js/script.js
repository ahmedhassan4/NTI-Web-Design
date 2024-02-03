




$(document).ready(function(){
    $(".owl-carousel").owlCarousel({
        items : 2 ,
        margin : 30 ,
        nav : true ,
        loop : true ,
        navText : [ '<i class="fa-solid fa-arrow-left-long fa-2x me-3 text-white broder-0 bg-primary border pt-1 pb-1 ps-4 pe-4 rounded-pill"></i>' , 
        '<i class="fa-solid fa-arrow-right-long fa-2x ms-3 text-white broder-0 bg-primary border pt-1 pb-1 ps-4 pe-4 rounded-pill"></i>' ],
        dots:false ,

        responsive : {
            0 : {
               items:1,
               autoplay: true

              
            },
            992 : {
            }
        }
    });
  });