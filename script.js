
Highcharts.chart("container", {

    title: {
        text: "U.S. Cheese Production Jan. 1990 to Jan. 2017"
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
      categories: [1990, 1991, 1992, 1993, 1994, 1995, 1996, 1997, 1998, 1999, 2001, 2002, 2003, 2004, 2005, 2006, 2007, 2008, 2009, 2010, 2011, 2012, 2013, 2014, 2015, 2016, 2017],
        title: {
            text: "Years"
        }
    },

    plotOptions: {
        series: {
            pointStart: 1990
        }
    },

    series: [{
        name: "Production",
        data: [492980000, 501954000, 520389000, 517261000, 538029000, 561722000, 589951000, 598166000, 617245000, 636971000, 693003000, 693797000, 713939000, 709599000, 738086000, 754667000, 782370000, 828272000, 819441000, 823902000, 842519000, 883505000, 911773000, 931691000, 962429000, 994542000, 1003278000, 1044983000]
    }]
  })

  Highcharts.chart("containertwo", {

      title: {
          text: "U.S. Exports Exports by Volume in Metric Tons"
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
          data: [28397, 74913, 78475, 66905, 75005, 68464, 82246]
      }]
    })
