$(function () {
    $('html').removeClass('no-js').addClass('js');

    $('.navbar').navbar({
        collapse_icon_selector: '.toggle',
        push_content: true,
        animation_speed: 500
    });
});