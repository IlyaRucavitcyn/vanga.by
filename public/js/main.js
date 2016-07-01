var createButton = document.getElementById('currency-create'),
    getAllButton = document.getElementById('get-all-data'),
    $createCurrency = $('#inputForm.currency-type'),
    $createRate = $('#inputForm.currency-rate'),
    $createEmail = $('#inputForm.user-email');

createButton.addEventListener('click', function(e) {
    e.preventDefault();
    var data = JSON.stringify({
        currency: $createCurrency.val(),
        rate: $createRate.val(),
        email: $createEmail.val(),
        date: new Date()
    });
    var xhr = new XMLHttpRequest();
    xhr.open('POST', 'send/', true);
    xhr.setRequestHeader("Content-type", "application/json");
    xhr.send(data);
});

getAllButton.addEventListener('click', function(e) {
    var templateData = [{
            name: "usd",
            data: []
        }, {
            name: "euro",
            data: []
        }, {
            name: "rub",
            data: []
        }],
        requestResult;

    e.preventDefault();
    $.ajax({
        type: "GET",
        url: "build/",
        contentType: "application/json",
        success: function(result) {
            // Incoming data modifying for highcharts
            requestResult = JSON.parse(result);
            requestResult.forEach(function(item) {
                templateData.forEach(function(tItem) {
                    if (item.currency === tItem.name) {
                        tItem.data.push([Date.parse(item.date), +item.rate]);
                    }
                });
            });
            templateData.forEach(function(item){
              item.data.sort(function(a,b){return a[0]-b[0]});
            })
            chartOptions.series = templateData;
            drawChart(chartOptions);
            $('#container').removeClass('opacity-hidden');
        }
    });

})
