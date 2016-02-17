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
var currencyInputForm = document.getElementById('currency-input-form');
var chartContainer = document.getElementById('chart-container');
var currentCurrency = "USD";

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
            if (currentCurrencyButton) { currentCurrencyButton.classList.remove(x.getAttribute('id')); }
        }
    });
    target.classList.add('active');
    if (currentCurrencyButton) { currentCurrencyButton.classList.add(target.getAttribute('id')); }
    currentCurrency = target.getAttribute('id');
    return;
};

// if (currentCurrencyButton) {
//   currentCurrencyButton.addEventListener("click", function () {
//       chartContainer.classList.remove('invisible');
//       currencyInputForm.classList.add('invisible');
//   }, false);
// }

"use strict";
/*global $ */
/*global Highcharts */
/*global currentCurrency */
/*global alert*/
/*jslint browser: true*/
/*jslint plusplus: true */
$(function () {
    Highcharts.setOptions({
        lang: {
            downloadJPEG: "Скачать в формате JPEG",
            downloadPDF: "Скачать в формате PDF",
            downloadPNG: "Скачать в формате PNG",
            downloadSVG: "Скачать в формате SVG",
            resetZoom: 'Вернуться к нормальному масштабу',
            resetZoomTitle: 'Вернуться',
            months: ['Январь', 'Февраль', 'Март', 'Апрель', 'Май', 'Июнь',  'Июль', 'Август', 'Сентябрь', 'Октябрь', 'Ноябрь', 'Декабрь'],
            shortMonths: ['Янв.', 'Февр.', 'Март', 'Апр.', 'Май', 'Июнь',  'Июль', 'Авг.', 'Сент.', 'Окт.', 'Нояб.', 'Дек.'],
            weekdays: ['Пн.', 'Вт.', 'Ср.', 'Чт.', 'Пт.', 'Сбт.', 'Вскр.']
        }
    });


    var xhr = new XMLHttpRequest(),
        buttonCollection = document.getElementsByClassName('currency-button'),
        dataIndex,
        answer,
        forEach;
    if ( window.location.hostname === "localhost") {
      xhr.open('GET', window.location.protocol+'//'+window.location.host+'/public/current_currencies_data.json', false);
    }
    if ( window.location.hostname === "ilyarucavitcyn.github.io") {
      xhr.open('GET', window.location.protocol+'//'+window.location.host+'/vanga.by/public/current_currencies_data.json', false);
    }
    xhr.send();
    if (xhr.status !== 200) {
        alert(xhr.status + ': ' + xhr.statusText); // пример вывода: 404: Not Found
    } else {
        answer = JSON.parse(xhr.response);
    }
    forEach = [].forEach;
    forEach.call(buttonCollection, function (x) {
        if (x.classList.contains('active')) {
            var i;
            for (i = 0; i < answer.length; i++) {
                if (answer[i].id === x.getAttribute('id')) { dataIndex = answer[i]; }
            }
        }
    });


    $('#container').highcharts({
        chart: {
            backgroundColor: 'transparent',
            zoomType: "x"
        },

        title: {
            text: 'КУРС 1$ (по данным НБ РБ)',
            style: {
                "color": "rgba(255,255,255,0.5)",
                "font-family": "Roboto",
                "font-weight": "100"
            }
        },

        legend: {
            enabled: false
        },

        xAxis: {
            type: 'datetime',
            labels: {
                style: {
                    "color": "rgba(255,255,255,0.5)",
                    "font-family": "Roboto",
                    "font-weight": "100",
                    "font-size": "20px"
                },
                y: 30
            }
        },

        yAxis: {
            title: {
                text: "тыс.БР за 1" + currentCurrency,
                rotation: 0,
                y: 180,
                x: 60
            },
            labels: {
                style: {
                    "color": "rgba(255,255,255,0.5)",
                    "font-family": "Roboto",
                    "font-weight": "100",
                    "font-size": "20px"
                }
            },
            gridLineColor: "rgba(255,255,255,0.5)"
        },

        tooltip: {
            crosshairs: true,
            shared: true
        },

        series: [{
            name: 'Ваше значение',
            data: dataIndex.currentvals,
            zIndex: 1,
            marker: {
                fillColor: 'white',
                lineWidth: 2,
                lineColor: '#7cb5ec'
            }
        }, {
            name: 'Диапазон значений',
            data: dataIndex.spreadvals,
            type: 'arearange',
            lineWidth: 0,
            linkedTo: ':previous',
            color: 'white',
            fillOpacity: 0.3,
            zIndex: 0
        }]
    });

    $('#currency-choice-container').on('click', function (e) {
        var target = e.target,
            j,
            answerNew,
            xhrNew = new XMLHttpRequest();
        if ( window.location.hostname === "localhost") {
          xhrNew.open('GET', window.location.protocol+'//'+window.location.host+'/public/current_currencies_data.json', false);
        }
        if ( window.location.hostname === "ilyarucavitcyn.github.io") {
          xhrNew.open('GET', window.location.protocol+'//'+window.location.host+'/vanga.by/public/current_currencies_data.json', false);
        }
        xhrNew.send();
        if (xhrNew.status !== 200) {
            alert(xhrNew.status + ': ' + xhrNew.statusText);
        } else {
            answerNew = JSON.parse(xhrNew.response);
        }
        for (j = 0; j < answerNew.length; j++) {
            if (answer[j].id === target.getAttribute('id')) {
                $('#container').highcharts().series[0].setData(answerNew[j].currentvals);
                $('#container').highcharts().series[1].setData(answerNew[j].spreadvals);
            }
        }
    });
});

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
