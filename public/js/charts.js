function drawChart(object) {
    $('#container').highcharts(object);
};

var chartOptions = {
    chart: {
        type: 'spline'
    },
    title: {
        text: 'Input value'
    },
    xAxis: {
        type: "datetime",
        dateTimeLabelFormats: {
            millisecond: '%H:%M:%S.%L',
            second: '%H:%M:%S',
            minute: '%H:%M',
            hour: '%H:%M',
            day: '%e %b %Y',
            week: '%e %b %Y',
            month: '%b \'%y',
            year: '%Y'
        }
    },
    yAxis: {
        title: {
            text: 'Value'
        },
        labels: {
            format: '{value} Br'
        }
    }
};
