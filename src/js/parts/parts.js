// import gsap from "gsap";
export class Parts {
  init() {
    this.ImageSlider();
    // this.ScrollContent();
  }

  ImageSlider() {
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

  // ScrollContent() {
  //   gsap.registerPlugin(ScrollTrigger);

  //   // Animate each <li> in the scrollable menu
  //   gsap.utils.toArray(".tab-menu li").forEach((item) => {
  //     gsap.to(item, {
  //       scrollTrigger: {
  //         trigger: item,
  //         start: "top 90%", // when item enters view
  //         end: "bottom top",
  //         toggleActions: "play none none reverse",
  //         scrub: false,
  //         scroller: ".tab-menu"
  //       },
  //       opacity: 1,
  //       y: 0,
  //       duration: 0.5,
  //       ease: "power2.out"
  //     });
  //   });
  // }
}
