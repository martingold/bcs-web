$.fn.navbar = function (options) {

    var opt = $.extend({
        collapse_icon_selector: '.icon',
        collapse_class: 'collapsed'
    }, options);

    return this.each(function () {
        var elem = $(this);
        elem.find(opt.collapse_icon_selector).click(function () {
            elem.toggleClass(opt.collapse_class);
        })
    });

};