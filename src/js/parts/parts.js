export class Parts{
    init() {
        this.ImageSlider();
    }

    ImageSlider(){
    $('.slider').slick({
      infinite: true,
      speed: 4000,               // Duration of one full scroll (in ms)
      autoplay: true,
      autoplaySpeed: 0,          // Delay between scrolls (0 for continuous)
      cssEase: 'linear',
      arrows: false,
      slidesToShow: 2,
      slidesToScroll: 1,
      dots: false,
      pauseOnHover: false,
      pauseOnFocus: false,
      responsive: [
        {
          breakpoint: 1024,
          settings: {
            slidesToShow: 1,
          }
        }
      ]
    });
  }
}
