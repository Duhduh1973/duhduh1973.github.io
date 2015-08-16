// Hide the preLoader container
$('#preLoaderBox').hide();
$('section, nav').hide();
$('.progressBar').hide();




/*// FAST FOR DEBUGGING
$('.landing').show('fade', 200, function() {
    $('#trekFg').toggleClass('trekLogoTitleSm trekLogoTitleBg', 200, 'easeInExpo', function () {
        $('#trekBg').delay(150).toggleClass('trekLogoBgSm trekLogoBgBg', 100, 'easeInExpo', function () {
            $('#trekFg').delay(110).fadeOut('fast');
            $('#trekFg2').delay(110).show('fade', 210).delay(0).hide('fade', 'slow');
            $('#trekFg').delay(110).effect('slide',{
                direction: 'left',
                mode: 'show',
                easing: 'easeInExpo',
                duration: 215
            }, function() {
                deferredIntro.resolve();
            });
        });
    });
});*/



/*
 // Deferred/Promise - waits until entire animation is done before starting the Pulse and Shrink animations
 var deferredIntro = $.Deferred();
 var deferredShowPage = $.Deferred();
 var deferredPreLoader = $.Deferred();
 var deferredImageSequence = $.Deferred();

 deferredIntro.done(function() {
 console.log('Intro Animation Resolved');
 $('#trekBg, #trekFg').addClass('trekLogoScale', 20).addClass('hvr-pulse-shrink', function() {
 $('#preLoaderBox').show('fade', 1000, function() {
 $('#home').css({'background': 'url(images/ImageSequence/1.jpg)', 'background-size': 'cover'});
 $('section, nav').show('fade', 1000, function() {
 deferredShowPage.resolve();
 });
 });
 });
 });*/
/*// Intro animation
$('.landing').show('fade', 2000, function() {
    $('#trekBg').toggleClass('trekLogoBgSm trekLogoBgBg', 1000, 'easeInExpo', function () {
        $('#trekFg2').delay(1000).show('fade', 1000, function () {
            $('#trekFg2').delay(2000).fadeOut('fast');
            $('#trekFg3').show('fade', 1000).delay(2000).fadeOut('fast');
            $('#trekFg').delay(3000).toggleClass('trekLogoTitleSm trekLogoTitleBg', 1500, 'easeInExpo').delay(1000).hide('fade', 'slow');
            $('#trekFg').delay(1000).effect('slide',{
                direction: 'left',
                mode: 'show',
                easing: 'easeInExpo',
                duration: 1500
            }, function() {
                deferredIntro.resolve();
            });
        });
    });
});*/
// With Seal Image Added
$('.landing').show('fade', 2000, function() {
   $('#sealBg').toggleClass('sealBgSm sealBgBg', 1000, 'easeInExpo', function() {
       $('#sealBg2').delay(2000).show('fade', 1000);
       $('#trekFg2').delay(2750).show('fade', 1000).delay(2000).hide('fade', 500, function() {
           $('#sealBg').hide();
           $('#sealBg2').toggleClass('sealBgSm sealBgBg2', 1000, 'easeInExpo');
           $('#trekFg3').show('fade', 500).delay(300).hide('fade', 1000, function() {
               $('#trekFg').toggleClass('trekLogoTitleSm trekLogoTitleBg', 1500, 'easeInExpo', function() {
                   $('#trekBg').delay(1000).toggleClass('trekLogoBgSm trekLogoBgBg', 1000, 'easeInExpo', function() {
                       deferredIntro.resolve();
                   });
               });
           });
       });
   });
});

 // Deferred/Promise - waits until entire animation is done before starting the Pulse and Shrink animations
 var deferredIntro = $.Deferred();
 var deferredSkipIntro = $.Deferred();
 var deferredShowPage = $.Deferred();
 var deferredPreLoader = $.Deferred();
 var deferredImageSequence = $.Deferred();


$('.finishBtn').on('click', function() {
    $('.curtains img').not('#trekBg, #trekFg').finish().hide('fade', 500, function() {
        deferredSkipIntro.resolve();
    });
    console.log('Skip Intro button clicked');
    $('.finishContainer').hide('fade', 1000);
});



deferredIntro.done(function() {
     console.log('Intro Animation Resolved');
     $('#trekBg, #trekFg').addClass('hvr-pulse-shrink').delay(3000).addClass('trekLogoScale', 1000, function() {
         $('.finishContainer').hide('fade', 1000);
         $('#preLoaderBox').show('fade', 1000, function() {
             $('nav, section').show('fade', 750);

             // Random logo image on page load/refresh
             var logoSrc = 'images/igLogo';
             var logoImg = 3;
             var logoMath = logoSrc + [Math.floor(Math.random() * logoImg + 1)];
             $('.navbar-brand img').attr('src',  logoMath + '.png');
             $('.navRight').delay(500).animate({left: '1150px'}, 750, function() {
                 $('.navbar-brand').animate({'margin-left': '0px'});
                     deferredShowPage.resolve();
             });
             console.log('Logo #'+ logoMath +'.png has been loaded');
         });
     });
 });

deferredSkipIntro.done(function() {
    var logoSrc = 'images/igLogo';
    var logoMath = Math.floor((Math.random() * 3) +1);
     console.log('Intro Animation SKIPPED');
     $('#trekBg, #trekFg').addClass('hvr-pulse-shrink').addClass('trekLogoScaleSkip', 500, function() {
         $('#preLoaderBox').show('fade', 1000, function() {
             $('nav, section').show('fade', 750);

             // Random logo image on page load/refresh
             $('.navbar-brand img').attr('src', logoSrc + logoMath + '.png');
             $('.navRight').animate({left: '1150px'}, 250, function() {
                 $('.navbar-brand').animate({'margin-left': '0px'});
                 deferredShowPage.resolve();
             });
         });
     });
    console.log('Logo '+ logoSrc + logoMath +'.png has been loaded');
 });


deferredShowPage.done(function() {
    console.log('Show-Page Animation Resolved');
    loadedAmount(0);
});
deferredPreLoader.done(function() {
    console.log('Image Loader Resolved');
    imageLoader();
    $('.stackedShow').hide();
});

deferredImageSequence.done(function() {
    setTimeout(function() {
        $('.loading h2').hide('fade', 1000, function() {
                $('.progressBar').animate({width: "0px"}, 500, 'easeInQuart').hide(function() {
                    $('#preLoaderBox').hide('fade', 1000, function () {
                        $('h6').show('fade', 500);
                    $('h6 span:eq(0)').show('fade', 400).toggleClass('textBlur textNoBlur', 300).delay(1000).toggleClass('textBlur textNoBlur', 300).hide('fade', 700, function() {
                        $('h6 span:eq(1)').show('fade', 700).toggleClass('textBlur textNoBlur', 300).delay(1000).toggleClass('textBlur textNoBlur', 300).hide('fade', 700, function() {
                            $('h6 span:eq(2)').show('fade', 700).toggleClass('textBlur textNoBlur', 300).delay(1000).toggleClass('textBlur textNoBlur', 300).hide('fade', 700, function() {
                                $('h6 span:eq(3)').show('fade', 700).toggleClass('textBlur textNoBlur', 300, function() {
                                    function beginPulse(){
                                        $('h6 span').transition({ scale: 1.2 }, 700).transition({ scale: 1 }, 700, beginPulse);
                                    }
                                    beginPulse();
                                });
                            });
                        });
                    });
                    bgImageSequence();
                });
            });
        });
    }, 2000);
});


// Initiate jQueryUI progress bar with change-event callback
var progressVal;
function loadedAmount (val) {
    setTimeout(function() {
        $( ".progressBar" ).progressbar({
            // Listen to jQueryUI progress bar change-event callback
            change: function( event, ui ) {
                progressVal = $( ".progressBar" ).progressbar('value');
                // Update progress as number as percentage - display as text
                $('#preLoaderBox h2').html(progressVal.toFixed(0)+ '&#37;');
            },
            complete: function( event, ui ) {},
            'value': val
        }).show('fade', 250);
    }, 1000);
    deferredPreLoader.resolve();
}

// Load images into hidden div to be cached before sequencer runs
function imageLoader() {

    var i = 1;
    var switchImage;
    $('#imagePlaceholder').hide();

    loadImage = setInterval(function () {

        if (i <= 548) {

            var img = new Image();
            var addImage = document.getElementById('imagePlaceholder');
            imagePlaceholder.appendChild(img);
            img.onload = function() {
                setTimeout(function() {
                  console.log('Image loaded with width of '+ img.width + 'px and height of '+ img.height +'px');
                }, 0);
            };
            img.onerror = function() {
                setTimeout(function() {
                  console.log('Image #'+ (i) +' located at '+ img.src +' encountered an error');
                }, 0);
            };
            img.src = 'images/ImageSequence/'+ (i) + '.jpg';
            console.log('Image '+ (i) +'.jpg loaded');
            $('.console h5').text('Caching Image: #' + (i));

            // jQueryUI progress bar value updater
            loadedAmount((i / 548) * 100);
            i++;
        } else {
            $('.console h5').text('Images done loading...');
            clearInterval(loadImage);
            deferredImageSequence.resolve();
        }
    }, 1);
}

// Image Sequence for the CSS Background property
function bgImageSequence() {
    var currImage = 1;
    setInterval(function () {
        if (currImage < 548) {
            $('.console h5').text('The current value of i is: ' + (currImage));
            $('#home').css({'background': '#000 url(images/ImageSequence/' + (currImage) + '.jpg) center center no-repeat', 'background-size': 'cover'});
            currImage++;
        } else {
            currImage = 1;
        }
    }, 30);
}


/*
var startTime = Date.now();
var fps = 30;
var lastDrawnIndex = null;
var totalFrames = 916;

function drawVideo() {
    var currTime = Date.now();
    var currFrameIndex = Math.round((currTime - startTime) / (1000/fps)) % totalFrames;

    // Since requestAnimationFrame usually fires at 60 fps,
    // we only need to draw the image if the frame to draw
    // actually has changed from last call to requestAnimationFrame
    if (currFrameIndex !== lastDrawnIndex) {
        ctx.drawImage(imagesL[videoItts],0,0,1024,636);
        lastDrawnIndex = currFrameIndex;
    }
    requestAnimationFrame(drawVideo);
}

requestAnimationFrame(drawVideo);*/

$( "div" ).click(function() {
    var zIndex = $( this ).css( "zIndex" );
    $( ".console h5" ).append( "That div is <span style='z-index:" +
        zIndex + ";'>" + zIndex + "</span>." );
});