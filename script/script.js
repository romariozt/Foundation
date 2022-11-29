$('.hiring__prof > div').on('click', function () {
    $(this).children('.hiring__icon').toggleClass('hiring__icon-rotate');
    $(this).parent('.hiring__prof').toggleClass('change__color');
    $(this).next('.hiring__prof-text').slideToggle(300);
})


$('.features__item-box').on('click', function () {
    $(this).toggleClass('change__color-title');
    $(this).parent('.features__box').toggleClass('features__box-border');
    $(this).next('.features__item-text').slideToggle(300);
})


$('#hiring-link').on('click', function (e) {
    e.preventDefault();
    $('html, body').animate({ scrollTop: $('#hiring').offset().top}, 1000)
})