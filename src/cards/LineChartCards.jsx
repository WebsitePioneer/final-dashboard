import React from "react";
import AOS from 'aos';
import 'aos/dist/aos.css';
import { useEffect } from 'react'
import { useLineChartData } from "../hooks/useLineChartData";

const LineChartCards = () => {
  const { data, isLoading, error } = useLineChartData();

  if (isLoading) return <div>Loading...</div>;
  if (error) return <div>Error: {error.message}</div>;

  const total = data.datasets[0].data;
  const sum = total.reduce((acc, curr) => acc + curr, 0);

  const timeIntervelInDays = data.series.length;

  return (
    <>
      <div data-aos="fade-up" className="flex flex-col gap-4 ">
        <div data-aos="fade-up" className="bg-gradient-to-r from-[#207064] to-[#139eab] drop-shadow-lg hover:drop-shadow-xl transition-all duration-300 px-[30px]  lg:h-[170px] h-[170px] flex items-center justify-center rounded-[20px]">
          <div data-aos="fade-up" className="flex flex-col items-center justify-center">
            <h2  className="text-white font-lbold lg:text-cardvalue text-[42px] ">
              {timeIntervelInDays}
            </h2>
            <p className="text-[rgba(0,0,0,.9)] font-mbold text-center lg:text-carddesc md:text-[22px] text-[20px] ">
              Total Intervel In days
            </p>
          </div>
        </div> 

        <div data-aos="fade-up" className="bg-gradient-to-r from-[#d39726] to-[#f7f748] drop-shadow-lg hover:drop-shadow-xl transition-all duration-300 px-[30px]  lg:h-[170px] h-[170px] flex items-center justify-center rounded-[20px]">
          <div data-aos="fade-up" className="flex flex-col items-center justify-center">
            <h2 className="text-white font-lbold lg:text-cardvalue text-[42px] ">{sum}</h2>
            <p className="text-[rgba(0,0,0,.9)] font-mbold lg:text-carddesc md:text-[22px] text-[20px] ">
              Total Tasks
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default LineChartCards;
