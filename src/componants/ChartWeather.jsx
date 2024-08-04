import React from "react";
import LineChart from "./Linechart";
function ChartWeather() {
  return (
    <div className="flex flex-col rounded-lg overflow-hidden border border-[#DBDBDB] w-full h-full bg-white gap-4">
      <div className="bg-[#FFFDD2] text-center w-[100%] p-4 font-bold">
        <h3>Assets Net Worth</h3>
      </div>
      <div className="h-full flex flex-col justify-between">

      <div className="pb-16">
        <div className="flex justify-between p-2">
          <div>
            <div className="py-2 px-4 cursor-pointer rounded-full bg-black text-white">
              +$123,90,90.98
            </div>
          </div>
          <div className="flex gap-2">
            <div className="py-2 px-6 cursor-pointer rounded-full bg-[#F7F07A] font-[700] hover:bg-black hover:text-white">
              1D
            </div>
            <div className="py-2 px-6 cursor-pointer rounded-full bg-[#F7F07A] font-[700] hover:bg-black hover:text-white">
              1W
            </div>
            <div className="py-2 px-6 cursor-pointer rounded-full bg-[#F7F07A] font-[700] hover:bg-black hover:text-white">
              1M
            </div>
            <div className="py-2 px-6 cursor-pointer rounded-full bg-[#F7F07A] font-[700] hover:bg-black hover:text-white">
              1Y
            </div>
          </div>
        </div>
        <div>
          {" "}
          <div className="pl-2 text-[12px]">Last Updated:02 hrs ago</div>
        </div>
      </div>
      <div className="w-full pb-8">
        <LineChart />
      </div>
      </div>
    </div>
  );
}

export default ChartWeather;
