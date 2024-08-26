import React from 'react'
import Chart from "react-apexcharts";

const BarChartForPie = ({data}) => {

  const labels = data.labels;
  const value = data.data;
  const sum = value.reduce((acc, curr) => acc + curr, 0);
  const pervalue = value.map(val => {
    return ((val / sum) * 100).toFixed(2);
  })
  //   options: {
  //     chart: {
  //       type: "bar",
  //       height: 300,
  //     },
  //     plotOptions: {
  //       bar: {
  //         borderRadius: 4,
  //         borderRadiusApplication: "end",
  //         horizontal: false,
  //       },
  //     },
  //     dataLabels: {
  //       enabled: false,
  //     },
  //     theme: {
  //       mode: 'light', 
  //       palette: 'palette3', 
  //       monochrome: {
  //           enabled: true,
  //           color: '#FEB019',
  //           shadeTo: 'light',
  //           shadeIntensity: 0.65
  //       },
  //     },
  //     xaxis: {
  //       categories: labels,
  //     },
  //     title: {
  //       text: "Tasks Status in %",
  //       align: "left",
  //       margin: 40,
  //       offsetY: 0,
  //       style: {
  //         fontSize: "25px",
  //       },
  //     },
  //   },
  // };

  // const chartSeries = [
  //   {
  //     data: pervalue,
  //   },
  // ];

  const chartOptions = {
    options: {
      chart: {
        type: "bar",
      },
      plotOptions: {
        bar: {
          borderRadius: 4,
          borderRadiusApplication: "end",
          horizontal: false,
          barHeight: '70%'
        },
      },
      dataLabels: {
        enabled: false,
      },
      theme: {
              mode: 'light', 
              palette: 'palette3', 
              monochrome: {
                  enabled: true,
                  color: '#FEB019',
                  shadeTo: 'light',
                  shadeIntensity: 0.65
              },
            },
      xaxis: {
        categories: labels,
      },
      title: {
        text: "Tasks Status in %",
        align: "left",
        margin: 40,
        offsetY: 0,
        style: {
          fontSize: "25px",
        },
      },
    },
  };

  const chartSeries = [
    {
      data: pervalue,
    },
  ];

  return (
    <div>
        <Chart options={chartOptions.options} series={chartSeries} type="bar"  height={300}/>
    </div>
  )
}

export default BarChartForPie