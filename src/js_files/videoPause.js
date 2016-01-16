'use strict';

/*jslint browser:true */

var vid = document.getElementById("bgvid"),
    pauseButton = document.getElementById("vidpause");
function vidFade() {
    vid.classList.add("stopfade");
}
pauseButton.addEventListener("click", function () {
    vid.classList.toggle("stopfade");
    if (vid.paused) {
        vid.play();
        return false;
    }
    vid.pause();
    return false;
});
