$('.playList li').on('click', function (event) {
    $('#defaultAnim').toggle('scale', function () {
        $('.playAnim').hide().load("lyrics.html #loaded").fadeIn('500');
    });
});


$('.playList li').on('click', function () {
    $('.footer').animate({bottom: "0px"}, 1000);
});



$('ul.playList li').hover(function() {
    $(this).find('.hideBoxHide').show('drop', {direction: 'up'}, 150);
},function(){
    $(this).find('.hideBoxHide').delay(500).hide('drop', {direction: 'up'}, 150);
});

//$('.playAnim').load('/BootSnippetTest/lyrics.html #loaded');
//$('#loaded').css({'opacity': 1});


//$('footer .amplitude-play-pause').on('click', function () {
//    $('#playIcon').toggleClass('fa-pause');
//});