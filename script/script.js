// !Выпадающее меню с текстом
$('.hiring__prof > div').on('click', function () {
    $(this).children('.hiring__icon').toggleClass('hiring__icon-rotate');
    $(this).parent('.hiring__prof').toggleClass('change__color');
    $(this).next('.hiring__prof-text').slideToggle(300);
})


// !Выпадающее меню с текстом и фоном
$('.features__item-box').on('click', function () {
    $(this).toggleClass('change__color-title');
    $(this).parent('.features__box').toggleClass('features__box-border');
    $(this).next('.features__item-text').slideToggle(300);
})


// !Переход по ссылке HOME
$('#hiring-link').on('click', function (e) {
    e.preventDefault();
    $('html, body').animate({ scrollTop: $('#hiring').offset().top}, 1000)
})


// !Переход по ссылке STORIES
$('#engage_link').on('click', function (e) {
    e.preventDefault();
    $('html, body').animate({ scrollTop: $('#engage').offset().top}, 1000)
})


// !Подключение к Telegram
//https://api.telegram.org/bottoken/getUpdates

$('#button').on('click', function (e) {
    e.preventDefault();

    let name = $('#name').val().trim();
    let email = $('#email').val().trim();

    if (name == "") {
        $('#error__name').text('Enter your name');
        return false
    } else if(email == "") {
        $('#error__email').text('Enter your email');
        return false
    }

    $.ajax({
        url: 'ajax/telegram.php',
        type: 'POST',
        cache: false,
        data: { 'email': email, 'name': name },
        dataType: 'html',
        beforeSent: function () {
            $('#button').prop('disabled', true)
        },
        success: function () {
            $('modal__overlay').fadeIn();
            $('#name').val('');
            $('#email').val('');
            $('#error__name').text('');
            $('#error__email').text('');
            $('#button').prop('disabled', false)
        }
    })
})