// Hide animation stage's placeholder image when song is started
// Un-hide animation

/*$(document).ready(function () {
    $('.playList').on('click', function () {
        $('#albumArt').hide('fade',1000).next('#songArt').delay(2500).hide('fade', 1500);
        $('.playList').off('click');
    });
});*/


/*********************************************************/
//              Footer show/hide functions               //
/*********************************************************/
var footerTimer;
// Move footer-top hotspot on first song click
$('.playList').one('click', function () {
    $('.footerTopMouseCatch').animate({bottom: "0px"}, 1000);
    $('#albumArt').hide('fade',1000).next('#songArt').delay(2500).hide('fade', 1500);
});
// Show footer on play event
$('.playList').on('click', function () {
    $('.footer').animate({bottom: "0px"}, 1000);

// Delay to auto-hide footer on inactivity
    footerTimer = setTimeout(function () {
        var $footer = $('.footer');
        var $footerTop = $('.footerTopMouseCatch');
        $footer.stop().animate({bottom: "-70px"}, 1000);
        $footerTop.stop().animate({bottom: "0"}, 10);
    }, 8000);
});

// Kill auto-hide when mouse is over footer / Reset auto-hide when mouse leaves footer
$('.footer').hover(function () {
    console.log('Mouse Enter');
    clearTimeout(footerTimer);
    }, function () {
        console.log('Mouse Leave');
        footerTimer = setTimeout(function () {
            var $footer = $('.footer');
            var $footerTop = $('.footerTopMouseCatch');
            $footer.stop().animate({bottom: "-70px"}, 1000);
            $footerTop.stop().animate({bottom: "0"}, 10);
        }, 6000);
});
// Hotspot-zone above footer to catch when mouse hovers at bottom of screen while footer is hidden
$('.footerTopMouseCatch').hover(function () {
    $('.footer').animate({bottom: "0px"}, 1000);
    $('.footerTopMouseCatch').animate({bottom: "0px"}, 10);
    }, function () {
        console.log('Mouse Leave');
        footerTimer = setTimeout(function () {
            var $footer = $('.footer');
            var $footerTop = $('.footerTopMouseCatch');
            $footer.stop().animate({bottom: "-70px"}, 1000);
            $footerTop.stop().animate({bottom: "0"}, 10);
        }, 6000);
});

// Stolen navbar-scroll function: Clicking on the footer div when other pages are focused Navigates back to Music Page
$(function () {
    $(window).scroll(function() {
        if ($(".navbar").offset().top > 50) {
            $(".navbar-fixed-top").addClass("top-nav-collapse");
        } else {
            $(".navbar-fixed-top").removeClass("top-nav-collapse");
        }
    });

    $('.footer').bind('click', function () {
        $('html, body').stop().animate({
            scrollTop: $('#music').offset().top
        }, 1500, 'easeInOutExpo');
    });

});

// Prevent click on download link from triggering play/pause
$('.playList li .hideBoxHide .download').on('click', function () {
    event.stopPropagation();
    $(this).css({'opacity': 0.2});
});

// Generate song download link
$('.download a').attr( "href", function() {
    return "http://invisibleglue.com/audio/" + this.title + ".mp3";
});




// Wiggles Landing Page down arrow button on page load (Call to action)
/*$(document).ready(function() {
    var wiggleArrow = setInterval(function () {
        $('#landingDownArrow').toggleClass('hvr-icon-hang');
    }, 4000);

    function stopWiggleArrow() {
        clearInterval(wiggleArrow);
    };
    // Kill wiggle loop when play button clicked
    $('#landingDownArrow').click(function () {
        stopWiggleArrow();
    });
});*/

// Wiggles first song in playList (let user know to click)
$(document).ready(function() {
    //console.log(Amplitude.getSongByIndex({'0': 'name'}));

    var wiggleSong = setInterval(function () {
        $('#wiggleSongID').toggleClass('hvr-icon-wobble-horizontal');
    }, 2000);

    function stopWiggleSong() {
        clearInterval(wiggleSong);
    };
    // Kill wiggle loop when play button clicked
    $('#wiggleSongID').click(function () {
        stopWiggleSong();
    });
    $('#fb-comments').animate({'opacity': '0'});
    //$('#amplitude-visualization').hide();
    //$('#songArt').hide();
});

$('#commentIcon').on('click', function () {
    $('#amplitude-visualization').hide('fade', 750);
    $('#songArt').hide('fade', 750);
    $('#fb-comments').animate({'opacity': '1'});
});
$('#visualIcon').on('click', function () {
    //$('#fb-comments').animate({'opacity': '0'}, 750);
    $('#songArt').hide('fade', 750);
    //$('#amplitude-visualization').show('fade',2000);
});
$('#imageIcon').on('click', function () {
    $('#amplitude-visualization').hide('fade', 750);
    $('#fb-comments').animate({'opacity': '0'}, 750);
    $('#songArt').show('fade', 2000);

});


// Custom scrollbar for Animation Stage - mainly for when Facebook Comments are visible
$(function(){
    $('.slimScrollTestDiv').slimScroll({
        height: 'auto',
        width: 'auto',
        //alwaysVisible: true,
        railVisible: true,
        railColor: '#000000',
        railOpacity: '0.2'
    });
});

// Facebook Share Button Function: Loads meta tags (specific for each song) into the head of index.html
$('.playList #fb-muddy').on("click", function() {
    $('head').load('songData.html');

    FB.ui(
        {
            method: 'share',
            href: 'http://duhduh1973.github.io/',
            action_type: 'og.likes',
        },
        // callback
        function(response) {
            if (response && !response.error_code) {
                alert('Posting completed.');
            } else {
                alert('Error while posting.');
            }
        }
    );
});


        var i = 1;
    var switchImage;
    var seqCount;
    var seqTotal;

    $('#landingPageContainer').hide();

    loadImage = setInterval(function () {
        if (i <= 548) {

            var imgTag = $('<img>', {
                id: 'stacked' +(i),
                src: 'images/ImageSequence/' + (i) + '.jpg',
                alt: 'Image Sequence',
                class: 'stackedShow'
            });
            imgTag.appendTo('#landingPageContainer');

            $('.console h5').text('Image' + (i) + 'loaded...');
            i++;
        } else {
            $('.console h5').text('Images done loading...');
            clearInterval(loadImage);

            $('#preLoaderBox').hide('fade', 1000, function() {
                $('#landingPageContainer').show();
                $('.stackedShow').hide();
                playImageSequence();
            });
        }
    },1);


// Image sequence timer as a function
function playImageSequence(){

    var seqCount = 1;
    var seqTotal = 548;
    switchImage = setInterval(function() {
        if (seqCount <= seqTotal) {
            $('#stacked' + (seqCount)).hide();
            $('#stacked' + (++seqCount)).show();
            $('.console h5').text('Showing Image Number: ' +(seqCount));
            //seqCount++;
        } else {
            //$('#stacked10').hide();
            seqCount = 1;
            //clearInterval(switchImage);
        }
    }, 30);
}


$(document).ready(function(){
    $('#preLoaderBox').addClass('preLoaderBox');
    //$('#home').css('background', 'transparent url(images/ImageSequence/200.jpg) center center no-repeat fixed');
});





