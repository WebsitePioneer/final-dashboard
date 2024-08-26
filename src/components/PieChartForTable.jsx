import React from 'react'
import Chart from "react-apexcharts";
import {useTableChartData} from "../hooks/useTableChartData"

const PieChartForTable = () => {
  const { data, isLoading, error } = useTableChartData();

  if (isLoading) return <div>Loading...</div>;
  if (error) return <div>Error: {error.message}</div>;

    // Time Intervel in Dates
    const dates = data.map((date,index) => {
      return date.updated_at.humanized_date
  })
  const datesFilter = dates.filter((item, index) => dates.indexOf(item) === index);
  console.log(datesFilter)

  // ********************
  // Number Task in Date one August 16, 2024
  const dateone = dates.map(stat => {
      if(stat === "August 16, 2024") return stat
  })
  // Filter out undefined values and sort the array
  const dateonefiltered = dateone.filter(item => item !== undefined).sort().length;

  // Number Task in Date one August 19, 2024
  const datetwo = dates.map(stat => {
      if(stat === "August 19, 2024") return stat
  })
  // Filter out undefined values and sort the array
  const datetwofiltered = datetwo.filter(item => item !== undefined).sort().length;

  // Number Task in Date one August 20, 2024
  const datethree = dates.map(stat => {
      if(stat === "August 20, 2024") return stat
  })
  // Filter out undefined values and sort the array
  const datethreefiltered = datethree.filter(item => item !== undefined).sort().length;

  // Number Task in Date one August 23, 2024
  const datefour = dates.map(stat => {
      if(stat === "August 23, 2024") return stat
  })
  // Filter out undefined values and sort the array
  const datefourfiltered = datefour.filter(item => item !== undefined).sort().length;

  // ********************

  const tasksFiltered = [datefourfiltered,datethreefiltered,datetwofiltered,dateonefiltered]
  console.log(tasksFiltered)



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
                  customScale: 1.1,
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
                text: "Feedbacks By Date",
                align: "left",
                margin: 40,
                offsetY: 0,
                style: {
                  fontSize: "24px",
                },
              },
          labels: datesFilter,
          legend: {
            position: "right",
            offsetY: 70,
          },
        },
    };
    
    const chartSeries = tasksFiltered;
  return (
    <Chart options={chartOptions.options} series={chartSeries} type="pie" height={320} />
  )
}

export default PieChartForTable