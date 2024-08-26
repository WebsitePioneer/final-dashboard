import React from 'react'
import Chart from "react-apexcharts";
import { usePieBarChartData } from "../hooks/usePieBarChartData";

const BarChartForPie = () => {
    // Pie chart
    const { data, isLoading, pieerror } = usePieBarChartData();
    if (isLoading) return <div>Loading...</div>;
    if (pieerror) return <div>Error: {error.message}</div>;

  const labels = data.labels;
  const value = data.data;
  const sum = value.reduce((acc, curr) => acc + curr, 0);
  const pervalue = value.map(val => {
    return ((val / sum) * 100).toFixed(2);
  })

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