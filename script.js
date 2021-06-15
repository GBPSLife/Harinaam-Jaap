
var flag = false;
let audiocount = 0;
let malacount = 0;
$('audio')[0].addEventListener('timeupdate', function () {
    console.log(3);
    if (this.currentTime == 0) {
        audiocount++;
    }
    if (audiocount == 108) {
        malacount++;
        audiocount = 0;
    }
    $('#malacount')[0].innerHTML = malacount + '<span>Mala Count</span>';
    $('#audiocount')[0].innerHTML = audiocount + '<span>Bead Count</span>';
});
function clicked() {
    if (!flag) {
        console.log(1);
        flag = true;
        $('#button')[0].innerHTML = "<i class='fas fa-pause'></i>"
        $('audio')[0].play();
    }
    else {
        console.log(2);
        flag = false;
        $('#button')[0].innerHTML = "<i class='fas fa-play'></i>"
        $('audio')[0].pause();
    }
}
function reset() {
    location.reload();
}
let bool = false;
function imagezoom() {
    if (!bool) {
        bool = true;
        $('#damodar').css('height', '500px');
        $('#damodar').css('z-index', '1');
    }
    else {
        bool = false;
        $('#damodar').css('height', '280px');
        $('#damodar').css('z-index', '0');
    }
}