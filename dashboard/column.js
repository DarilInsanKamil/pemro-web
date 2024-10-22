
var options = {
    series: [
        {
            name: 'Total Pengiriman Bulanan',
            data: [420, 450, 470, 500, 480, 520, 550, 580, 600, 620, 590, 610] // Total pengiriman
        },
        {
            name: 'Pengiriman Sukses',
            data: [400, 430, 450, 480, 460, 500, 530, 560, 580, 600, 570, 590] // Pengiriman sukses
        }
    ],
    chart: {
        type: 'bar',
        height: 250
    },
    plotOptions: {
        bar: {
            horizontal: false,
            columnWidth: '60%',
            endingShape: 'rounded'
        },
    },
    theme: {
        mode: 'dark', 
      },
    dataLabels: {
        enabled: false
    },
    stroke: {
        show: true,
        width: 2,
        colors: ['transparent']
    },
    xaxis: {
        categories: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec']
    },
    // yaxis: {
    //     title: {
    //         text: '$ (thousands)'
    //     }
    // },
    legend: {
        show: true,
        horizontalAlign: 'left',
        markers: {
            shape: 'circle'
        }
    },

    fill: {
        opacity: 1
    },
    tooltip: {
        y: {
            formatter: function (val) {
                return "$ " + val + " thousands"
            }
        }
    }
};

var chart = new ApexCharts(document.querySelector("#column"), options);
chart.render();