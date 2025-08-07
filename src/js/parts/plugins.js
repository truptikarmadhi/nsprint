import "slick-carousel";

export class Plugins {
  init() {
    this.PagesSliders();
    this.NewsSlider();
  }

  PagesSliders() {
    //  ===== product slider =====
    $(".product-slider").slick({
      dots: false,
      infinite: false,
      arrows: false,
      speed: 300,
      slidesToShow: 3,
      slidesToScroll: 1,
      autoplay: false,
      autoplaySpeed: 2000,
      lazyLoad: "ondemand",
    });

    //  ===== announcement-slider =====
    $(".announcement-slider").slick({
      dots: false,
      infinite: true,
      arrows: false,
      slidesToShow: 1,
      slidesToScroll: 1,
      autoplay: true,
      autoplaySpeed: 0, // No delay between transitions
      speed: 4000, // Smooth speed (in ms)
      cssEase: "linear", // Linear easing for smooth scroll
      lazyLoad: "ondemand",
      centerMode: true,
      pauseOnHover: false, // Optional (keeps moving even when hovered)
      variableWidth: true
    });
  }
  NewsSlider() {
    $(".news-slider").slick({
      dots: false,
      infinite: false,
      arrows: false,
      speed: 300,
      slidesToShow: 4,
      slidesToScroll: 1,
      autoplay: false,
    });
  }
}