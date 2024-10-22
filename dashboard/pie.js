var options = {
  series: [85, 10, 5],
  labels: ['Pengiriman Sukses', 'Pengiriman Tertunda', 'Pengiriman Bermasalah'],
  chart: {
    type: 'donut',
    width: 320  // Set fixed width for the chart
  },
  theme: {
    mode: 'dark', 
  },
  dataLabels: {
    enabled: false,
    position: 'middle'
  },
  responsive: [{
    breakpoint: 480,
    options: {
      chart: {
        width: 200  // Adjust width for smaller screens
      },
      legend: {
        position: 'bottom'
      }
    }
  }],
  plotOptions: {
    pie: {
      size: 150,
      customScale: 0.8
    }
  },
  legend: {
    position: 'bottom',
    horizontalAlign: 'left',
  }
};

var chart = new ApexCharts(document.querySelector("#pie"), options);
chart.render();
