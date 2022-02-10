$(".product__annotation").on("click", function () {
  $(this).children(".annotation__text").slideToggle(300);
  $(this).find(".annotation__arrow").toggleClass("annotation__arrow--down");
  $(this).children(".annotation__button").toggleClass("annotation__button--active");
});