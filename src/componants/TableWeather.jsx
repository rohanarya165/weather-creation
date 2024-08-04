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
        <div className="grid grid-cols-5 gap-2 p-2">
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
        <div className="flex flex-col gap-1">
          <div className="font-[700] m-2 rounded-md p-2 grid grid-cols-5 bg-[#DBDBDB]">
            <div className="p-2">User Name 1</div>
            <div className="p-2">7845812458</div>
            <div className="p-2 text-center">1</div>
            <div className="p-2 text-center">29/07/2023</div>
            <div className="p-2 text-center rounded-full bg-[#32A071] text-white">
              Active
            </div>
          </div>
          <div className="font-[700] m-2 rounded-md p-2 grid grid-cols-5 bg-[#DBDBDB]">
            <div className="p-2">User Name 2</div>
            <div className="p-2">7845812458</div>
            <div className="p-2 text-center">5</div>
            <div className="p-2 text-center">29/07/2023</div>
            <div className="p-2 text-center rounded-full bg-[#32A071] text-white">
              Active
            </div>
          </div>
          <div className="font-[700] m-2 rounded-md p-2 grid grid-cols-5 bg-[#DBDBDB]">
            <div className="p-2">User Name 3</div>
            <div className="p-2">7845812458</div>
            <div className="p-2 text-center">4</div>
            <div className="p-2 text-center">29/07/2023</div>
            <div className="p-2 text-center rounded-full bg-[#F6465D] text-white">
              Inactive
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default TableWeather