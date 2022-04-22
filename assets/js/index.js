




$(document).ready(function () {



    setTimeout(function () {

        $('.slider__inner').removeClass("glitch--animate");
    }, 2000);


    $('#inicio').on('click', function () {
keypress.play();


        $('#two').hide();
        $('#three').hide();

        $('#four').hide();
        $('#four').hide();

        $('#one').show();
        $('.inicio').addClass("glitch--animate");
        setTimeout(function () {

            $('.inicio').removeClass("glitch--animate");
        }, 1000);

    });


    $('#sobre').on('click', function () {
keypress.play();

        $('#one').hide();

        $('#two').show();
        $('#four').hide();
        $('#three').hide();

        $('.divsobre').addClass("glitch--animate");
        setTimeout(function () {

            $('.divsobre').removeClass("glitch--animate");
        }, 1000);

    });


    $('#servicos').on('click', function () {
keypress.play();

        $('#one').hide();

        $('#two').hide();
        $('#four').hide();
        $('#three').show();

        $('.divserviços').addClass("glitch--animate");
        setTimeout(function () {

            $('.divserviços').removeClass("glitch--animate");
        }, 1000);

    });

    $('#contato').on('click', function () {
keypress.play();

        $('#one').hide();

        $('#two').hide();
        $('#three').hide();

        $('#four').show();
        $('.contact').addClass("glitch--animate");
        setTimeout(function () {

            $('.contact').removeClass("glitch--animate");
        }, 800);

    });


if (window.matchMedia("(max-width:800px)").matches) {

$("#optionsToggle").on('click',function () { 
keypress.play();

        if ($(".definitions-container").hasClass("inactive")) {
            $(".definitions-container").toggleClass("inactive active")
            $(".definitions-container").show("blind")
            $('.definitions-container').animate({
                left: '260px'
            })          
            }
        else if ($('.definitions-container').hasClass('active')) {
            $('.definitions-container').toggleClass('active inactive');
            $('.definitions-container').animate({
                left: '306px'
            })
          

        }
            })


} else  {

    $("#optionsToggle").on('click',function () { 
keypress.play();

        if ($(".definitions-container").hasClass("inactive")) {
            $(".definitions-container").toggleClass("inactive active")
            $(".definitions-container").show("blind")
            $('.definitions-container').animate({
                right: '-170px'
            })          
            }
        else if ($('.definitions-container').hasClass('active')) {
            $('.definitions-container').toggleClass('active inactive');
            $('.definitions-container').animate({
                right: '-245px'
            })
          

        }
            })
}
    $('#close').on('click', function () {
keypress.play();

        if ($('#buttons').hasClass("inactive")) {
            $('#buttons').toggleClass('inactive active')
            $('#buttons').show("blind");
            $('#navbar').animate({
                height: '400px'
            })
        }
        else if ($('#buttons').hasClass('active')) {
            $('#buttons').toggleClass('active inactive');
            $('#buttons').hide("blind");
            $('#navbar').animate({
                height: '150px'
            })
            $('#close').animate({
                'margin-bottom': '5px'
            })

        }
    });




    // Color changer



    $('#greentheme').on('click', function () {
keypress.play();

        $('.header-presentation').addClass('glitch--animate');
        setTimeout(function () {
            $('.header-presentation').removeClass("glitch--animate");
        }, 800);

        $(':root').css('--gold88', '#02FF0087');
        $(':root').css('--gold', '#29FF00');
        $(':root').css('--goldDark', '#45ED25');
        $(':root').css('--hovercolor', '#FF0000');
        $(':root').css('--hovercolorbg', '#FF000040');
        $(':root').css('--inputfocus', 'rgba(23, 255, 42, .6431372549019608)');
        $(':root').css('--termcolor', '#040F00');



    });

    $('#bluetheme').on('click', function () {
        keypress.play();

        $('.header-presentation').addClass('glitch--animate');
        setTimeout(function () {
            $('.header-presentation').removeClass("glitch--animate");
        }, 800);


        $(':root').css('--gold88', 'rgba(0, 255, 213, 0.53)');
        $(':root').css('--gold', '#00ffd5');
        $(':root').css('--goldDark', '#25edc2');
        $(':root').css('--hovercolor', '#FF0000');
        $(':root').css('--hovercolorbg', 'rgba(255, 0, 4, .25098039215686274)');
        $(':root').css('--inputfocus', 'rgba(23, 255, 216, 0.644)');
        $(':root').css('--termcolor', '#000f0d');
    });


    $('#goldtheme').on('click', function () {
        keypress.play();


        $('.header-presentation').addClass('glitch--animate');
        setTimeout(function () {
            $('.header-presentation').removeClass("glitch--animate");
        }, 800);


        $(':root').css('--gold88', 'rgba(255, 215, 0, 0.53)');
        $(':root').css('--gold', '#ffd700');
        $(':root').css('--goldDark', '#eda725');
        $(':root').css('--hovercolor', '#ff0000');
        $(':root').css('--hovercolorbg', 'rgba(255, 0, 0, 0.25)');
        $(':root').css('--inputfocus', 'rrgba(255, 220, 23, 0.644)');
        $(':root').css('--termcolor', '#0f0900');
    });
});




