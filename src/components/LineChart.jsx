import React from "react";
import Chart from "react-apexcharts";
import { useLineChartData } from "../hooks/useLineChartData";

const LineChartForLine = ({dark}) => {
  const { data, isLoading, error } = useLineChartData();

  if (isLoading) return <div>Loading...</div>;
  if (error) return <div>Error: {error.message}</div>;

  const dates = data.series;
  const tasks = data.datasets[0].data;

  const chartOptions = {
    options: {
      chart: {
        type: "line",
        background: 'transparent', // Gradient background
        foreColor: `${dark ? "#ffffff" : "#000000"}`,
        toolbar: {
          show: true,
          tools: {
            download: true, // Show only the download (export) option
            selection: false,
            zoom: false,
            zoomin: false,
            zoomout: false,
            pan: false,
            reset: false,
          },
        },
      },
      dataLabels: {
        enabled: true,
        style: {
          fontSize: '10px',
          fontFamily: 'Helvetica, Arial, sans-serif',
          fontWeight: 'bold',
          colors: ['#FEB019'], // Set data label color
        },
        background: {
          enabled: true,
          foreColor: '#ffffff', // Text color inside the background
          padding: 8,
          borderRadius: 50,
          borderWidth: 0,
          opacity: 0.9,
        },
        dropShadow: {
          enabled: true,
          top: -8,
          left: -4,
          blur: 3,
          color: '#000',
          opacity: 0.55,
        },
      },
      forecastDataPoints: {
        count: 7,
      },
      stroke: {
        width: 6,
        curve: "smooth",
      },
      xaxis: {
        type: "datetime",
        categories: dates,
        tickAmount: 4,
        labels: {
          formatter: function (value, timestamp, opts) {
            return opts.dateFormatter(new Date(timestamp), "dd MMM");
          },
        },
      },
      title: {
        text: "Posts Per Week",
        align: "left",
        margin: 40,
        offsetY: 0,
        style: {
          fontSize: "25px",
          color: `${dark ? "#ffffff" : "#000000"}`,
        },
      },
      fill: {
        type: "gradient",
        gradient: {
          shade: "dark",
          gradientToColors: ["#b91c1c","#EC4899","#581c87"],
          shadeIntensity: 1,
          type: "horizontal",
          opacityFrom: 1,
          opacityTo: 1,
          stops: [0, 100, 100, 100],
        },
      },
    },
  };

  const chartSeries = [
    {
      name: "Posts",
      data: tasks,
    },
  ];

  return (
    <>
      <Chart options={chartOptions.options} series={chartSeries} type="line" height="300" />
    </>
  );
};

export default LineChartForLine;
