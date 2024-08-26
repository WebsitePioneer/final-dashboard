import React from 'react'
import Chart from "react-apexcharts";

const BarOneForTable = ({data}) => {

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
            categories: datesFilter,
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
          data: tasksFiltered,
        },
      ];
  return (
    <Chart options={chartOptions.options} series={chartSeries} type="bar" height="300" />
  )
}

export default BarOneForTable