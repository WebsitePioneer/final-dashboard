import React from 'react'
import Chart from "react-apexcharts";

const DonutChartForPie = ({data}) => {  

  const labels = data.labels;
  const value = data.data;

  const chartOptions = {
    options: {
      chart: {
        type: "donut",
        width: "100%",
      },
      dataLabels: {
        enabled: false,
      },
      plotOptions: {
        pie: {
          customScale: 1,
          donut: {
            size: "60%",
          },
          offsetY: 10,
        },
        stroke: {
          colors: undefined,
        },
      },
      title: {
        text: "Tasks Status",
        align: "left",
        margin: 40,
        offsetY: 0,
        style: {
          fontSize: "24px",
        },
      },
      labels: labels,
      legend: {
        position: "right",
        offsetY: 70,
      },
    },
  };

  const chartSeries = value;

  return (
    <div>
      <div className='lg:block hidden'>
        <Chart  options={chartOptions.options} series={chartSeries} type="donut" height={300} />
      </div>

      <div className='max-lg:block hidden'>
        <Chart  options={chartOptions.options} series={chartSeries} type="donut" height={250} />
      </div>
    </div>
  )
}

export default DonutChartForPie