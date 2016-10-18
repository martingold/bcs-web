$(function () {
    $('html').removeClass('no-js').addClass('js');

    $('.navbar').navbar({
        collapse_icon_selector: '.toggle',
        push_content: true,
        animation_speed: 500
    });

    $('.gallery').magnificPopup({
        delegate: 'a',
        type: 'image',
        tLoading: 'Loading image #%curr%...',
        mainClass: 'mfp-img-mobile',
        gallery: {
            enabled: true,
            navigateByImgClick: true,
            preload: [0,1] // Will preload 0 - before current, and 1 after the current image
        },
        image: {
            tError: '<a href="%url%">The image #%curr%</a> could not be loaded.'
        }
    });
    
    $('.hero').hero({
        class_list: ['hero-1', 'hero-2', 'hero-3', 'hero-4'],
        speed: 5000
    })
});