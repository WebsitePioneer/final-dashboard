import React from "react";
import Chart from "react-apexcharts";
import { useState, useEffect } from "react";

const BarChartForLine = ({ data }) => {
  const [monthlyPosts, setMonthlyPosts] = useState({});

  // Defining month names in order from May to September
  const months = ["May", "June", "July", "August", "September"];

  // Created the keys array
  const keysArray = months;

  // Create the values array
  const valuesArray = months.map((month, index) => {
    // Generate the corresponding key for the data object
    const monthIndex = (index + 5).toString().padStart(2, "0"); // Convert index to month number
    const key = `2024-${monthIndex}`;
    return key in monthlyPosts ? monthlyPosts[key] : 0; // Use the value if key exists, otherwise 0
  });

  JSON.stringify(keysArray, null, 2)
  JSON.stringify(valuesArray, null, 2)

  useEffect(
    (monthlyPosts) => {
      // Group posts by month
      const groupedPosts = {};

      data.series.forEach((date, index) => {
        const month = date.substring(0, 7); // Extract the year and month (e.g., "2024-07")
        const posts = data.datasets[0].data[index]; // Get the post count for this date

        // Add the posts to the corresponding month
        if (groupedPosts[month]) {
          groupedPosts[month] += posts;
        } else {
          groupedPosts[month] = posts;
        }
      });

      setMonthlyPosts(groupedPosts);
    },
    [data]
  );

  const chartOptions = {
    options: {
      chart: {
        type: "bar",
        height: 300,
      },
      plotOptions: {
        bar: {
          borderRadius: 4,
          borderRadiusApplication: "end",
          horizontal: true,
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
            color: '#FF4560',
            shadeTo: 'light',
            shadeIntensity: 0.65
        },
      },
      xaxis: {
        categories: keysArray,
      },
      title: {
        text: "Number of Posts",
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
      data: valuesArray,
    },
  ];
  return (
    <>
      <Chart options={chartOptions.options} series={chartSeries} type="bar" height="300" />
    </>
  );
};

export default BarChartForLine;
