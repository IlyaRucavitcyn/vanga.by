'use strict';

/*jslint browser:true */

var burgerIcon = document.getElementById('burger-icon-cont');
var infoBar = document.getElementById('info-icon');

burgerIcon.onclick = function (e) {
    var target = e.target;
    while (target !== this) {
        if (target.tagName === 'A') {
            infoBar.classList.remove('hide');
            return false;
        }
        target = target.parentNode;
    }
};

infoBar.onclick = function () {
    this.classList.add('hide');
};
