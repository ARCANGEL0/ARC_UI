$(document).ready(function () {
    var keypress = new Audio("assets/audio/keyenter.wav");




    $('#slide1').on('click', function () {
        keypress.play();

        $('.servthree').hide();
        $('.servtwo').hide();
        $('.servfive').hide();

        $('.servfour').hide();
        $('.servone').show();
        $('.servone').addClass('glitch--animate');
        setTimeout(function () {
            $('.servone').removeClass("glitch--animate");
        }, 800);

    });

    $('#slide2').on('click', function () {
        keypress.play();

        $('.servone').hide();
        $('.servthree').hide();
        $('.servfour').hide();
        $('.servfive').hide();

        $('.servtwo').show();
        $('.servtwo').addClass('glitch--animate');
        setTimeout(function () {
            $('.servtwo').removeClass("glitch--animate");
        }, 1200);
    });

    $('#slide3').on('click', function () {
        keypress.play();

        $('.servone').hide();
        $('.servtwo').hide();
        $('.servfour').hide();
        $('.servfive').hide();

        $('.servthree').show();
        $('.servthree').addClass('glitch--animate');
        setTimeout(function () {
            $('.servthree').removeClass("glitch--animate");
        }, 800);
    });

    $('#slide4').on('click', function () {
        keypress.play();

        $('.servone').hide();
        $('.servtwo').hide();
        $('.servthree').hide();
        $('.servfive').hide();

        $('.servfour').show();
        $('.servfour').addClass('glitch--animate');
        setTimeout(function () {
            $('.servfour').removeClass("glitch--animate");
        }, 800);
    });
    $('#slide5').on('click', function () {
        keypress.play();

        $('.servone').hide();
        $('.servtwo').hide();
        $('.servthree').hide();
        $('.servfour').hide();

        $('.servfive').show();
        $('.servfive').addClass('glitch--animate');

        setTimeout(function () {
            $('.servfive').removeClass("glitch--animate");
        }, 800);
    });



});


