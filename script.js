$(document).ready(function(){
    $(window).scroll(function(){
        // sticky navbar on scroll script
        if(this.scrollY > 20){
            $('.navbar').addClass("sticky");
        }else{
            $('.navbar').removeClass("sticky");
        }
        
        // scroll-up button show/hide script
        if(this.scrollY > 500){
            $('.scroll-up-btn').addClass("show");
        }else{
            $('.scroll-up-btn').removeClass("show");
        }
    });

    // slide-up script
    $('.scroll-up-btn').click(function(){
        $('html').animate({scrollTop: 0});
        // removing smooth scroll on slide-up button click
        $('html').css("scrollBehavior", "auto");
    });

    $('.navbar .menu li a').click(function(){
        // applying again smooth scroll on menu items click
        $('html').css("scrollBehavior", "smooth");
    });

    // toggle menu/navbar script
    $('.menu-btn').click(function(){
        $('.navbar .menu').toggleClass("active");
        $('.menu-btn i').toggleClass("active");
    });

    // typing text animation script
    var typed = new Typed(".typing-en", {
        strings: ["Software Developer","Web Developer","Designer"],
        typeSpeed: 120,
        backSpeed: 60,
        loop: true
    });

    var typed = new Typed(".typing-vi", {
        strings: ["Nhà phát triển phần mềm", "Nhà phát triển web"],
        typeSpeed: 120,
        backSpeed: 60,
        loop: true
    });

    var typed = new Typed(".typing-2-en", {
        strings: ["Hello, I'm Đinh Vĩnh Thái"],
        typeSpeed: 40,
        backSpeed: 20,
        loop: true
    });
    
    var typed = new Typed(".typing-2-vi", {
        strings: ["Xin chào, tôi là Đinh Vĩnh Thái"],
        typeSpeed: 40,
        backSpeed: 20,
        loop: true
    });


    // owl carousel script
    $('.carousel').owlCarousel({
        margin: 20,
        loop: true,
        autoplay: true,
        autoplayTimeOut: 2000,
        autoplayHoverPause: true,
        responsive: {
            0:{
                items: 1,
                nav: false
            },
            600:{
                items: 2,
                nav: false
            },
            1000:{
                items: 3,
                nav: false
            }
        }
    });
    $('[lang]').hide(); // hide all lang attributes on start.
    $('[lang="en"]').show(); // show just Korean text (you can change it)
    $('#lang-switch').change(function () { // put onchange event when user select option from select
        var lang = $(this).val(); // decide which language to display using switch case. The rest is obvious (i think)
        switch (lang) {
            case 'en':
                $('[lang]').hide();
                $('[lang="en"]').show();
            break;
            case 'vi':
                $('[lang]').hide();
                $('[lang="vi"]').show();
            break;
            default:
                $('[lang]').hide();
                $('[lang="en"]').show();
            }
    });
});