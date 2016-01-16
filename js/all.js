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

'use strict';

/*jslint browser:true */

var currencyChoiceContainer = document.getElementById('currency-choice-container');
var currentCurrencyButton = document.getElementById('current-currency');

currencyChoiceContainer.onclick = function (e) {
    var target = e.target,
        //All currency button collection forming
        buttonCollection = this.getElementsByClassName('currency-button'),
        //forEach method definition for buttonCollection
        forEach = [].forEach;
    //Checking whether we pushed a button or a free space in 'currency-choice-container'
    if (!target.classList.contains('currency-button')) {
        return;
    }
    //Checking whether we pushed the current currency-button
    if (target.classList.contains('active')) {
        return;
    }

    forEach.call(buttonCollection, function (x) {
        if (x.classList.contains('active')) {
            x.classList.remove('active');
            currentCurrencyButton.classList.remove(x.getAttribute('id'));
        }
    });
    target.classList.add('active');
    currentCurrencyButton.classList.add(target.getAttribute('id'));
    return;
};

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
