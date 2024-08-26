import React from "react";
import Chart from "react-apexcharts";

const LineChartForLine = ({data}) => {

  const dates = data.series;
  const tasks = data.datasets[0].data;

  const chartOptions = {
    options: {
      chart: {
        type: "line",
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
        text: "Tasks Per Week",
        align: "left",
        margin: 40,
        offsetY: 0,
        style: {
          fontSize: "25px",
          color: "#373D3F",
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
