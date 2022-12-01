// ?МОДАЛЬНЕ ВІКНО

$('.modal__overlay').on('click', function () {
    if ($(e.target).closest('.modal').length == 0) {
        $(this).fadeOut();
    }
});

$('.close').on('click', function(){
    $(this).parents('.modal__overlay').fadeOut()
})

$('#open__modal').on('click', function(){
    $('.modal__overlay').fadeIn()
})
