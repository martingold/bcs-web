$.fn.navbar = function (options) {

    var opt = $.extend({
        collapse_icon_selector: '.icon',
        collapse_class: 'collapsed',
        push_content: false,
        animation_speed: 1000
    }, options);

    return this.each(function () {
        var elem = $(this);
        var menu = $(this).find('nav');
        var icon = $(this).find(opt.collapse_icon_selector);
        icon.click(function () {
            if (opt.push_content) {
                if(elem.hasClass(opt.collapse_class)){
                    icon.toggleClass('fa-bars');
                    icon.toggleClass('fa-close');
                    $('body').animate({
                        'margin-top': elem.outerHeight() + "px"
                    }, opt.animation_speed);
                    menu.animate({
                        'height': 0
                    }, opt.animation_speed, function () {
                        elem.removeClass(opt.collapse_class);
                    });
                }else{
                    icon.toggleClass('fa-bars');
                    icon.toggleClass('fa-close');
                    menu.css('height', 0);
                    elem.addClass(opt.collapse_class);
                    var h = menu.get(0).scrollHeight;
                    $('body').animate({
                        'margin-top': h + elem.outerHeight() + "px"
                    }, opt.animation_speed);
                    menu.animate({
                        'height': h + 'px'
                    }, opt.animation_speed);
                }
            }else{
                elem.toggleClass(opt.collapse_class);
            }
        })
    });

};