import React from "react";

const LineChartCards = ({ data }) => {
  const total = data.datasets[0].data;
  const sum = total.reduce((acc, curr) => acc + curr, 0);

  const timeIntervelInDays = data.series.length;
  return (
    <>
      <div className="flex flex-col gap-4 ">
        <div className="bg-[#7144ee] drop-shadow-lg hover:drop-shadow-xl transition-all duration-300 px-[30px]  lg:h-[170px] h-[170px] flex items-center justify-center rounded-[20px]">
          <div className="flex flex-col items-center justify-center">
            <h2 className="text-white font-lbold lg:text-cardvalue text-[42px] ">
              {timeIntervelInDays}
            </h2>
            <p className="text-[rgba(0,0,0,.9)] font-mbold lg:text-carddesc md:text-[22px] text-[20px] ">
              Total Intervel In days
            </p>
          </div>
        </div> 

        <div className="bg-[#FEB019] drop-shadow-lg hover:drop-shadow-xl transition-all duration-300 px-[30px]  lg:h-[170px] h-[170px] flex items-center justify-center rounded-[20px]">
          <div className="flex flex-col items-center justify-center">
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
