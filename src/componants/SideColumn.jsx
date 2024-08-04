import React from "react";
import LogoAd from "../assets/Screenshot 2024-08-04 at 1.45.11 AM.png";

function SideColumn() {
  return (
    <div className="my-4 flex flex-col gap-4">
      <img src={LogoAd} alt="ad" className="w-[400px] h-[280px]" />
      <div className="bg-[#F0E303] w-full text-center p-2 rounded-lg text-[20px] font-[500]">
        PNL Analysis
      </div>
      <div className="px-12">
        <div className="flex gap-4">
          <div className="bg-[#DFF0FF] p-2 w-full rounded-[100px] flex gap-4">
            <div className="p-2 w-[20px] h-[20px] bg-black rounded-full"></div>
            Total Value(ALZ)
          </div>
          <div className="bg-black text-white rounded-[100px] py-2 px-8">
            USD
          </div>
        </div>
        <div className="text-[50px] font-[800]  text-center">129,00.000</div>
        <div className="w-full flex justify-center">
          <div className="bg-[#DBDBDB] py-2 px-4 rounded-full">
            ~$898,090.0000
          </div>
        </div>
      </div>
      <div className="grid grid-cols-4 gap-4">
        <div className="text-[12px] bg-[#F0E303] h-[82px] w-[82px] rounded-full  relative">
          <div className="text-center absolute top-[40%] w-full">Deposit</div>
        </div>
        <div className="text-[12px]  bg-[#C5F1FF] h-[82px] w-[82px] rounded-full  relative">
          <div className="text-center absolute top-[40%] w-full">Ref</div>
        </div>
        <div className="text-[12px]  bg-[#FFD5C0] h-[82px] w-[82px] rounded-full  relative">
          <div className="text-center absolute top-[40%] w-full">Swap</div>
        </div>
        <div className="text-[12px]  bg-[#ECFAF0] h-[82px] w-[82px] rounded-full  relative">
          <div className="text-center absolute top-[40%] w-full">Wallet</div>
        </div>
      </div>
      <div className="grid grid-cols-3 text-center gap-4">
        <div className="rounded-lg bg-[#C5F1FF] p-2">
          <div>Today’s PNL</div>
          <div className="text-[#FF0000] text-[30px]">-0.34%</div>
          <div className="text-[#FF0000]">-$34.00</div>
          <div className="p-1 bg-black rounded-full text-white mt-2">
            7 days{" "}
          </div>
        </div>
        <div className="rounded-lg bg-[#FFD5C0] p-2">
          <div>7D PNL</div>
          <div className="text-[#FF0000] text-[30px]">-0.34%</div>
          <div className="text-[#FF0000]">-$34.00</div>
          <div className="p-1 bg-black rounded-full text-white mt-2">
            30 days{" "}
          </div>
        </div>{" "}
        <div className="rounded-lg bg-[#ECFAF0] p-2">
          <div>30DPNL</div>
          <div className="text-[#FF0000] text-[30px]">-0.34%</div>
          <div className="text-[#FF0000]">-$34.00</div>
          <div className="p-1 bg-black rounded-full text-white mt-2">
            Custom
          </div>
        </div>
      </div>
    </div>
  );
}

export default SideColumn;
