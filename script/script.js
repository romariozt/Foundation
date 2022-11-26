$('.hiring__prof > div').on('click', function () {
    $(this).children('.hiring__icon').toggleClass('hiring__icon-rotate');
    $(this).parent('.hiring__prof').toggleClass('change__color');
    $(this).next('.hiring__prof-text').slideToggle(300);
})