$("document").ready(function() {

    $(".close-btn").click(function() {
        $(".slide-menu").addClass("hide-menu");
        $(".toggle-btn").addClass("opc-1").css("z-index", 100000);
        $(".close-btn").css("z-index", 1000);
    });

    $(".toggle-btn").click(function() {
        $(".slide-menu").removeClass("hide-menu");
        $(".close-btn").removeClass("opc-1").css("z-index", 100000);
    });
    $(".toggle-btn").css("z-index", 1000);


    //smooth_scroll
    $('a[href*="#"]:not([href="#"])').click(function() {
        if (location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') && location.hostname == this.hostname) {
            var target = $(this.hash);
            target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
            if (target.length) {
                $('html, body').animate({
                    scrollTop: target.offset().top
                }, 1000);
                return false;
            }
        }
    });

    //quotation_slides
    $(".quotes").responsiveSlides({
        auto: true,
        speed: 7000
    });

    $(".projects").responsiveSlides({
        auto: true,
        pager: false,
        speed:2000,
        nav: true,
        namespace: "callbacks"
    });

});
