import gsap from "gsap";
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

  ScrollContent() {
    gsap.registerPlugin(ScrollTrigger, ScrollToPlugin);
    const container = document.querySelector(".our-work");
    const list = document.querySelector(".carousel__nav");
    const listItems = gsap.utils.toArray(".carousel__nav__item", list);
    const slides = gsap.utils.toArray(".carousel__item");
    const tl = gsap.timeline();
    const myST = ScrollTrigger.create({
      animation: tl,
      id: "st",
      trigger: container,
      start: "top top",
      end: "+=" + container.clientHeight * (slides.length - 1),
      pin: container,
      scrub: true,
      snap: {
        snapTo: 1 / (slides.length - 1)
      },
      markers: false
    })

    gsap.set(slides, { xPercent: () => { return (window.innerWidth < 768 ? 125 : 0) }, yPercent: () => { return (window.innerWidth > 768 ? 125 : 0) }, scale: 0.5, opacity: 0 });
    listItems.forEach((item, i) => {
      item.addEventListener("click", e => {
        e.preventDefault();
        const percent = tl.labels[e.target.getAttribute("data-target")] / tl.totalDuration();
        const scrollPos = myST.start + (myST.end - myST.start) * percent;
        gsap.to(window, { duration: 2, scrollTo: scrollPos });
      });

      const previousItem = listItems[i - 1];
      if (previousItem) {
        tl
          .to(item, { background: "#ed3c3c", boxShadow: '0 0 16px #ed3c3c' }, 0.5 * (i - 1))
          .to(
            slides[i],
            {
              opacity: 1,
              yPercent: 0,
              xPercent: 0,
              scale: 1,
            },
            '<'
          )
          .to(previousItem, { backgroundColor: '#424b58', boxShadow: '0 0 16px transparent' }, '<')
          .to(
            slides[i - 1],
            {
              opacity: 0,
              yPercent: () => { return (window.innerWidth > 768 ? -125 : 0) },
              xPercent: () => { return (window.innerWidth < 768 ? -125 : 0) },
              scale: 0.5,
            },
            '<'
          ).add("our-work-" + (++i))
      } else {
        gsap.set(item, { background: "#ed3c3c", boxShadow: '0 0 16px #ed3c3c' });
        gsap.to(slides[i], { yPercent: 0, xPercent: 0, opacity: 1, scale: 1, duration: 0 }, 0);
        tl.add("our-work-" + (++i), "+=0")
      }
    });
  }
}
