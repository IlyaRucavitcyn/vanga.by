'use strict';

/*jslint browser:true */

var vid = document.getElementById("bgvid"),
    pauseButton = document.getElementById("vidpause");
function vidFade() {
    vid.classList.add("stopfade");
}
pauseButton.addEventListener("click", function () {
    if (vid.paused) {
        vid.play();
        return;
    }
    vid.pause();
});
