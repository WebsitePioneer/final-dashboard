import React from 'react'
import Chart from "react-apexcharts";
import {useTableChartData} from "../hooks/useTableChartData"

const BarOneForTable = () => {
  const { data, isLoading, error } = useTableChartData();

  if (isLoading) return <div>Loading...</div>;
  if (error) return <div>Error: {error.message}</div>;

  const status = data.map((value,index) => {
    return value.status.title
  })

// status sorted by removeing duplicates
const statusfiltered = [...new Set(status)];

const statusInReview = status.map(stat => {
if(stat === "In Review") return stat
})

// Filter out undefined values and sort the array
const filteredInReview = statusInReview.filter(item => item !== undefined).sort().length; // Sort the remaining values

const statusInProgress = status.map(stat => {
if(stat === "In Progress") return stat
})

// Filter out undefined values and sort the array
const filteredInProgress = statusInProgress.filter(item => item !== undefined).sort().length; // Sort the remaining values

const statusValues = [filteredInProgress,filteredInReview]

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
            categories: statusfiltered,
          },
          title: {
            text: "Feedbacks Status",
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
          data: statusValues,
        },
      ];
  return (
    <Chart options={chartOptions.options} series={chartSeries} type="bar" height="300" />
  )
}

export default BarOneForTable