

// department carousel 
if(document.querySelector('.testimonial_carousel') !== null){
    $('.testimonial_carousel').slick({
      margin:10,
      dots: true,
      infinite: true,
      // autoplay:true,
      autoPlayTimeout:2000,
      slidesToShow: 3,
      slidesToScroll: 2,
      arrows: false,
      responsive: [
          {
            breakpoint: 1024,
            settings: {
              slidesToShow: 1,
              slidesToScroll: 1,
              infinite: true,
              dots: true
            }
          },
          {
            breakpoint: 900,
            settings: {
              slidesToShow: 2,
              slidesToScroll: 1
            }
          },
          {
            breakpoint: 480,
            settings: {
              slidesToShow: 1,
              slidesToScroll: 1
            }
          }
        ]
    });
  }
  
if(document.querySelector('.related_carousel') !== null){
    $('.related_carousel').slick({
      margin:10,
      dots: true,
      infinite: true,
      // autoplay:true,
      autoPlayTimeout:2000,
      slidesToShow: 3,
      slidesToScroll: 2,
      arrows: false,
      responsive: [
          {
            breakpoint: 1024,
            settings: {
              slidesToShow: 1,
              slidesToScroll: 1,
              infinite: true,
              dots: true
            }
          },
          {
            breakpoint: 900,
            settings: {
              slidesToShow: 2,
              slidesToScroll: 1
            }
          },
          {
            breakpoint: 480,
            settings: {
              slidesToShow: 1,
              slidesToScroll: 1
            }
          }
        ]
    });
  }
  