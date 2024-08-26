import React, { useState } from "react";

const PieChartCards = ({ data }) => {
  
  const total = data.data;
  const sum = total.reduce((acc, curr) => acc + curr, 0);
  const totalTypeOfStatus = data.labels.length;

  return (
    <>
      <div className="grid grid-cols-1 gap-4 ">
        <div className="bg-[#3669cf] drop-shadow-lg hover:drop-shadow-xl transition-all duration-300 px-[30px]  rounded-[20px] flex items-center justify-center lg:h-[170px] h-[130px]">
            <div className="flex flex-col items-center justify-center">
                <h2 className="text-white font-lbold lg:text-cardvalue text-[42px]">{sum}</h2>
                <p className="text-[rgba(0,0,0,.9)] font-mbold lg:text-carddesc md:text-[22px] text-[20px] ">Total Tasks</p>
            </div>
        </div>

        <div className="bg-[#FF4560] drop-shadow-lg hover:drop-shadow-xl transition-all duration-300 px-[30px] lg:h-[170px] h-[130px] flex items-center justify-center rounded-[20px]">
            <div className="flex flex-col items-center justify-center">
                <h2 className="text-white font-lbold lg:text-cardvalue text-[42px]">{totalTypeOfStatus}</h2>
                <p className="text-[rgba(0,0,0,.9)] font-mbold lg:text-carddesc md:text-[22px] text-[20px] ">Type of Status</p>
            </div>
        </div>
      </div>
    </>
  );
};

export default PieChartCards;
