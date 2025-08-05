export class Filter {
  init() {
    this.ProjectFilter();
  }
  ProjectFilter() {
    $(".filter-button").click(function () {
      var value = $(this).attr("data-filter");
      if (value == "all") {
        $(".filter").show("500");
      } else {
        $(".filter")
          .not("." + value)
          .hide("1000");
        $(".filter")
          .filter("." + value)
          .show("1000");
      }
    });

    $(".filter-button").click(function () {
      $(this).addClass("active").siblings().removeClass("active");
    });

    //       $(".filter-button").click(function () {
    //   var value = $(this).attr("data-filter");

    //   if (value == "all") {
    //     $(".filter").fadeIn(500); // Smooth fade in for all elements
    //   } else {
    //     $(".filter")
    //       .not("." + value)
    //       .fadeOut(500); // Fade out non-matching elements
    //     $(".filter")
    //       .filter("." + value)
    //       .fadeIn(500); // Fade in matching elements
    //   }
    // });

    // $(".filter-button").click(function () {
    //   $(this).addClass("active").siblings().removeClass("active");
    // });
  }
}
