(function () { $('#containerfour').highcharts ({
        chart: {
            renderTo: 'containerfour'},
    title: {
        text: "U.S. Milk Production 2010 to 2017"
    },

    subtitle: {
        text: "This data was sourced from the U.S.D.A. Department of Agriculture"
    },

    yAxis: {
        title: {
            text: "Millions of Pounds"
        }
    },

    xAxis: {
      categories: [2010, 2011, 2012, 2013, 2014, 2015, 2016, 2017],
        title: {
            text: "Years"
        }
    },

    plotOptions: {
        series: {
            pointStart: 2010
        }
    },

    series: [{
        name: "Production",
        data: [16013000000, 16396000000, 17048000000, 17114000000, 17278000000, 17690000000, 17693000000, 18145000000]
    }]
    })
  })
