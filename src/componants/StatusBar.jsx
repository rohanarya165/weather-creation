import React from 'react'

function StatusBar() {
  return (
    <div className="bg-white ">
      <div className="bg-[#DFF0FF] mr-4 py-2 px-8 flex justify-between">
        <div className="text-[#F0B90B] text-[16px] rounded-sm font-[700]">
          Binance
        </div>
        <div className="text-[16px]">
          <span className="font-bold">Price:</span> $1234
        </div>
        <div className="text-[16px]">
          <span className="font-bold">Price:</span> $1234
        </div>
        <div className="text-[16px]">
          <span className="font-bold">Price:</span> $1234
        </div>
        <div className="text-[16px]">
          <span className="font-bold">Price:</span> $1234
        </div>
        <div className="text-[16px]">
          <span className="font-bold text-[#23AF91]">Coinbase</span>
        </div>
      </div>
    </div>
  );
}

export default StatusBar