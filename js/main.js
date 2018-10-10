//for preloader
$(document).ready(function () {
    $('.preloader').delay(4000).fadeOut();
});

var particles = Particles.init({
    selector: '.background',
    color: '#DA0463',
    maxParticles: 3000,
    color: ['red', 'green', 'yellow', 'blue','violet','orange'],
    speed: 0.7
});
var audio;

//Initializer - Play First Song
initAudio($('#playlist li:first-child'));

function initAudio(element) {
    var song = element.attr('song');
    var title = element.text();
    var cover = element.attr('cover');
    var artist = element.attr('artist');

    //Create a New Audio Object

    audio = new Audio("media/song/" + song + ".mp3");

	/*if(!audio.currentTime){
		$('#duration').html('0.00');
    }
    */
    $('#audio-player .title').text(title);
    $('#audio-player .artist').text(artist);

    //Insert Cover Image
    $('img.cover').attr('src', 'images/cover/' + cover);

    $('#playlist li').removeClass('active');
    element.addClass('active');
}


//for play option

$('#play').click(function () {
    audio.play();
    if ($(this).attr('src') == "images/icons/play.png") {
        $(this).attr('src', 'images/icons/pause.png');
    }
    else {
        audio.pause();
        $(this).attr('src', 'images/icons/play.png');
    }
});

//for next song

$('#next').click(function () {
    audio.pause();
    if ($('#play').attr('src') == "images/icons/play.png") {
        $('#play').attr('src', 'images/icons/pause.png');
    }
    var next = $('#playlist li.active').next();
    if (next.length == 0) {
        next = $('#playlist li:first-child');
    }
    initAudio(next);
    audio.play();
});

//for previous song

$('#previous').click(function () {
    audio.pause();
    if ($('#play').attr('src') == "images/icons/play.png") {
        $('#play').attr('src', 'images/icons/pause.png');
    }
    var prev = $('#playlist li.active').prev();
    if (prev.length == 0) {
        prev = $('#playlist li:last-child');
    }
    initAudio(prev);
    audio.play();
});