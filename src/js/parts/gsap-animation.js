export class GsapAnimation {
    init() {
        this.ServiceCards();
        this.Tabs();
    }

    ServiceCards() {
        $(document).ready(function () {
            console.clear();
            gsap.registerPlugin(ScrollTrigger, ScrollToPlugin);

            $('.service-cards').each(function (sectionIndex) {
                const $section = $(this);
                const $cards = $section.find('.service-card');

                $cards.each(function (i) {
                    const panel = this;

                    ScrollTrigger.create({
                        trigger: panel,
                        start: "top top",
                        pin: true,
                        pinSpacing: false,
                        id: `section${sectionIndex}-card${i}`,
                        markers: false
                    });
                });
            });

            ScrollTrigger.refresh();
        });
    }

    Tabs() {
    
    }
}