import React from 'react'

function TableWeather() {
  return (
    <div>
      <div className="flex flex-col mt-4 rounded-lg overflow-hidden border border-[#DBDBDB] w-full bg-white">
        <div className="bg-[#FFFDD2] w-full p-1 font-bold flex justify-between">
          <h3 className="p-2">Registered Users</h3>
          <div className="py-2 px-8 cursor-pointer rounded-full bg-black text-white">
            Create Account +
          </div>
        </div>
        <div className="flex gap-2 p-2">
          <div className="py-2 px-6 cursor-pointer text-center rounded-full w-full bg-[#F7F07A] font-[700] hover:bg-black hover:text-white">
            Name
          </div>
          <div className="py-2 px-6 cursor-pointer text-center rounded-full w-full bg-[#F7F07A] font-[700] hover:bg-black hover:text-white">
            Mobile
          </div>
          <div className="py-2 px-6 cursor-pointer text-center rounded-full w-full bg-[#F7F07A] font-[700] hover:bg-black hover:text-white">
            Wallet
          </div>
          <div className="py-2 px-6 cursor-pointer text-center rounded-full w-full bg-[#F7F07A] font-[700] hover:bg-black hover:text-white">
            Date/Time
          </div>
          <div className="py-2 px-6 cursor-pointer text-center rounded-full w-full bg-[#F7F07A] font-[700] hover:bg-black hover:text-white">
            Status
          </div>
        </div>
      </div>
    </div>
  );
}

export default TableWeather