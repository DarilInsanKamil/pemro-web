
var options = {
    series: [
        {
            name: '2022',
            data: [4017, 6135, 7091, 5841, 5036, 4547, 3467, 3970, 6313,3595, 9207, 5945] // Total pengiriman
        },
        {
            name: '2023',
            data: [2416, 4136, 7939, 8004, 9505, 5026, 6108, 6343, 9404, 9280, 9287 , 8589] // Pengiriman sukses
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
        mode: 'light', 
      },
    dataLabels: {
        enabled: true
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