var options = {
    series: [
        {
            name: 'Biaya Pengiriman',
            data: [50, 52, 48, 60, 62, 58, 65, 70, 72, 75, 80, 85] // Dalam juta rupiah
        },
        {
            name: 'Biaya Perawatan Kendaraan',
            data: [5, 6, 5, 7, 8, 6, 9, 10, 11, 12, 13, 14] // Dalam juta rupiah
        }

    ],
    chart: {
        height: 250,
        type: 'line',
        zoom: {
            enabled: false
        }
    },
    dataLabels: {
        enabled: false
    },
    theme: {
        mode: 'dark', 
      },
    stroke: {
        curve: 'straight'
    },
    title: {
        text: 'Product Trends by Month',
        align: 'left'
    },
    grid: {
        row: {
            colors: ['#f3f3f3', 'transparent'], // takes an array which will be repeated on columns
            opacity: 0.5
        },
    },
    xaxis: {
        categories: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Okt', 'Nov', 'Des'],
    }
};

var chart = new ApexCharts(document.querySelector("#line"), options);
chart.render();

