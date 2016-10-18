$.fn.hero = function (options) {

    var opt = $.extend({
        class_list: [],
        speed: 3000,
        delay: 3000
    }, options);

    if(opt.class_list.length == 0){
        console.error('Class list must not be empty.');
    }

    var index = 0;
    var timer;

    return this.each(function () {
        var elem = $(this);
        elem.find('.hero-image:nth(1)').show();

        setTimeout(nextImage, opt.delay, elem);
        elem.find('.hero-image:first-child()').show();
    });

    function nextImage(elem){
        elem.find('.'+opt.class_list[index]).removeClass('active')
        elem.find('.'+opt.class_list[getNext()]).removeClass('next');
        index++;
        if(index > opt.class_list.length - 1){
            index = 0;
        }
        elem.find('.'+opt.class_list[getPrev()]);
        elem.find('.'+opt.class_list[index]).addClass('active');
        elem.find('.'+opt.class_list[getNext()]).addClass('next');

        timer = setTimeout(nextImage, opt.speed, elem);
    }

    function getNext(){
        if(index + 1 >= opt.class_list.length){
            return 0;
        }else{
            return index+1;
        }
    }

    function getPrev(){
        if(index  <= 0){
            return opt.class_list.length - 1;
        }else{
            return index - 1;
        }
    }
};