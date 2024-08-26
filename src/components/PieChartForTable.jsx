import React from 'react'
import Chart from "react-apexcharts";

const PieChartForTable = ({data}) => {

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
                text: "Feedback Status",
                align: "left",
                margin: 40,
                offsetY: 0,
                style: {
                  fontSize: "24px",
                },
              },
          labels: statusfiltered,
          legend: {
            position: "right",
            offsetY: 70,
          },
        },
    };
    
    const chartSeries = statusValues;
  return (
    <Chart options={chartOptions.options} series={chartSeries} type="pie" height={320} />
  )
}

export default PieChartForTable