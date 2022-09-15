




$(document).ready(function () {





let language = 'ptbr';

    setTimeout(function () {

        $('.slider__inner').removeClass("glitch--animate");
    }, 2000);

    
    
$('#language').on('click', function () {

keypress.play();
    if(language=='ptbr') {
     language = 'enus'
        console.log(language)
    }
    else if (language=='enus') {
     language = 'ptbr'
       console.log(language)
    }

});

    

    $('#inicio').on('click', function () {
keypress.play();


        $('#two').hide();
        $('#three').hide();
  $('#gallery').hide();
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
  $('#gallery').hide();

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
  $('#gallery').hide();

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
  $('#gallery').hide();

        $('#two').hide();
        $('#three').hide();

        $('#four').show();
        $('.contact').addClass("glitch--animate");
        setTimeout(function () {

            $('.contact').removeClass("glitch--animate");
        }, 800);

    });


 $('#portfolio').on('click', function () {
keypress.play();

        $('#one').hide();
  $('#gallery').show();

        $('#two').hide();
        $('#three').hide();

        $('#four').hide();
        $('.divportfolio').addClass("glitch--animate");
        setTimeout(function () {

            $('.divportfolio').removeClass("glitch--animate");
        }, 800);

    });



//responsive
if ($(window).width() < 410 && $(window).width > 380) {
$('#buttons').toggleClass('active inactive');
            $('#buttons').hide("blind");
            $('#navbar').animate({
                height: '8vh'
            })
            $('#close').animate({
                'margin-top': '0px'
            })
 $('.definitions-container').animate({
                left: '83%'
            })  



    $('#close').on('click', function () {
keypress.play();

        if ($('#buttons').hasClass("inactive")) {
            $('#buttons').toggleClass('inactive active')
            $('#buttons').show("blind");
            $('#navbar').animate({
                height: '56vh'
            })
        }
        else if ($('#buttons').hasClass('active')) {
            $('#buttons').toggleClass('active inactive');
            $('#buttons').hide("blind");
            $('#navbar').animate({
                height: '8vh'
            })
            $('#close').animate({
                'margin-top': '0vh'
            })

        }
    });


$("#optionsToggle").on('click',function () { 
keypress.play();




        if ($(".definitions-container").hasClass("inactive")) {
            $(".definitions-container").toggleClass("inactive active")
            $(".definitions-container").show("blind")
            $('.definitions-container').animate({
                left: '83%'
            })          
            }
        else if ($('.definitions-container').hasClass('active')) {
            $('.definitions-container').toggleClass('active inactive');
            $('.definitions-container').animate({
                left: '47.5%'
            })
          

        }
            })


}

else if ($(window).width() < 380) {
$('#buttons').toggleClass('active inactive');
            $('#buttons').hide("blind");
            $('#navbar').animate({
                height: '12vh'
            })
            $('#close').animate({
                'margin-top': '0px'
            })
 $('.definitions-container').animate({
                left: '83%'
            })  



    $('#close').on('click', function () {
keypress.play();

        if ($('#buttons').hasClass("inactive")) {
            $('#buttons').toggleClass('inactive active')
            $('#buttons').show("blind");
            $('#navbar').animate({
                height: '68vh'
            })
        }
        else if ($('#buttons').hasClass('active')) {
            $('#buttons').toggleClass('active inactive');
            $('#buttons').hide("blind");
            $('#navbar').animate({
                height: '12vh'
            })
            $('#close').animate({
                'margin-top': '0vh'
            })

        }
    });


$("#optionsToggle").on('click',function () { 
keypress.play();




        if ($(".definitions-container").hasClass("inactive")) {
            $(".definitions-container").toggleClass("inactive active")
            $(".definitions-container").show("blind")
            $('.definitions-container').animate({
                left: '83%'
            })          
            }
        else if ($('.definitions-container').hasClass('active')) {
            $('.definitions-container').toggleClass('active inactive');
            $('.definitions-container').animate({
                left: '47.5%'
            })
          

        }
            })


}

else if ( $(window).width() > 410 && $(window).width() < 920 ) { 


// block 2

$('#buttons').toggleClass('active inactive');
            $('#buttons').hide("blind");
            $('#navbar').animate({
                height: '5vh'
            })
            $('#close').animate({
                'margin-top': '0px'
            })
 $('.definitions-container').animate({
                left: '85%',
                'margin-bottom':'10%'
            })  



    $('#close').on('click', function () {
keypress.play();

        if ($('#buttons').hasClass("inactive")) {
            $('#buttons').toggleClass('inactive active')
            $('#buttons').show("blind");
            $('#navbar').animate({
                height: '42vh'
            })
        }
        else if ($('#buttons').hasClass('active')) {
            $('#buttons').toggleClass('active inactive');
            $('#buttons').hide("blind");
            $('#navbar').animate({
                height: '5vh'
            })
            $('#close').animate({
                'margin-top': '0vh'
            })

        }
    });


$("#optionsToggle").on('click',function () { 
keypress.play();




        if ($(".definitions-container").hasClass("inactive")) {
            $(".definitions-container").toggleClass("inactive active")
            $(".definitions-container").show("blind")
            $('.definitions-container').animate({
                left: '85%',
                'margin-bottom':'10%'
            })          
            }
        else if ($('.definitions-container').hasClass('active')) {
            $('.definitions-container').toggleClass('active inactive');
            $('.definitions-container').animate({
                left: '54%',
                'margin-bottom':'14%'
            })
          

        }
            })



// block 2
}

 else  {

    $("#optionsToggle").on('click',function () { 
keypress.play();

        if ($(".definitions-container").hasClass("inactive")) {
            $(".definitions-container").toggleClass("inactive active")
            $(".definitions-container").show("blind")
            $('.definitions-container').animate({
                right: '-8.05vw'
            })          
            }
        else if ($('.definitions-container').hasClass('active')) {
            $('.definitions-container').toggleClass('active inactive');
            $('.definitions-container').animate({
                right: '-245px'
            })
          

        }
            })

    $('#close').on('click', function () {
keypress.play();

        if ($('#buttons').hasClass("inactive")) {
            $('#buttons').toggleClass('inactive active')
            $('#buttons').show("blind");
            $('#navbar').animate({
                height: '0vh'
            })
        }
        else if ($('#buttons').hasClass('active')) {
            $('#buttons').toggleClass('active inactive');
            $('#buttons').hide("blind");
            $('#navbar').animate({
                height: '10.2vh'
            })
            $('#close').animate({
                'margin-top': '0vh'
            })

        }
    });
}

$('#language').on('click', function () {

keypress.play();
    if(language=='ptbr') {
     language = 'enus'
        console.log(language)
    }
    else if (language=='enus') {
     language = 'ptbr'
       console.log(language)
    }

});

    // Color changer
  var color = 0;


    $('#color').on('click', function () {
keypress.play();    
        

      switch (color) {
  case 0:
      $(':root').css('--gold88', 'rgba(255, 215, 0, 0.53)');
        $(':root').css('--gold', '#ffd700');
        $(':root').css('--goldDark', '#eda725');
        $(':root').css('--hovercolor', '#ff0000');
        $(':root').css('--hovercolorbg', 'rgba(255, 0, 0, 0.25)');
        $(':root').css('--inputfocus', 'rrgba(255, 220, 23, 0.644)');
        $(':root').css('--termcolor', '#0f0900');
        color = 1;
    break;
  case 1:
    
              $(':root').css('--gold88', 'rgba(240, 240,240, 0.53)');
        $(':root').css('--gold', 'rgba(244, 244, 244, 0.75)');
        $(':root').css('--goldDark', 'rgba(200, 200, 200, 0.61)');
        $(':root').css('--hovercolor', '#FF0000');
        $(':root').css('--hovercolorbg', 'rgba(255, 0, 4, .25098039215686274)');
        $(':root').css('--inputfocus', 'rgba(255, 34, 0, 0.64)');
        $(':root').css('--termcolor', 'rgba(12, 12, 12, 0.65)');
        color = 2;
    break;
  case 2:
        $(':root').css('--gold88', 'rgba(255,0,0, 0.53)');
        $(':root').css('--gold', '#ff0400');
        $(':root').css('--goldDark', '#ed2525');
        $(':root').css('--hovercolor', '#ffc400');
        $(':root').css('--hovercolorbg', 'rgba(255,196,0,0.3)');
        $(':root').css('--inputfocus', 'rgba(23, 255, 216, 0.644)');
        $(':root').css('--termcolor', '#0f0000');
        color=3;
        break;
    case 3:
      $(':root').css('--gold88', '#02FF0087');
        $(':root').css('--gold', '#29FF00');
        $(':root').css('--goldDark', '#45ED25');
        $(':root').css('--hovercolor', '#FF0000');
        $(':root').css('--hovercolorbg', '#FF000040');
        $(':root').css('--inputfocus', 'rgba(23, 255, 42, .6431372549019608)');
        $(':root').css('--termcolor', '#040F00');

        color=4;
        break;
    case 4:
         $(':root').css('--gold88', 'rgba(0, 255, 213, 0.53)');
        $(':root').css('--gold', '#00ffd5');
        $(':root').css('--goldDark', '#25edc2');
        $(':root').css('--hovercolor', '#FF0000');
        $(':root').css('--hovercolorbg', 'rgba(255, 0, 4, .25098039215686274)');
        $(':root').css('--inputfocus', 'rgba(23, 255, 216, 0.644)');
        $(':root').css('--termcolor', '#000f0d');
        color=0;
        break;
}

      
    });

 
});




