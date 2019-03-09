// lightbox
$(document).on("click", '[data-toggle="lightbox"]', function(event) {
  event.preventDefault();
  $(this).ekkoLightbox();
});

// slick slider(about page)
$(".slider").slick({
  infinite: true,
  slideToShow: 1,
  slideToScroll: 1
});
