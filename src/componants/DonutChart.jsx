import React from 'react';
import { Doughnut } from 'react-chartjs-2';
import {
  Chart as ChartJS,
  ArcElement,
  Tooltip,
  Legend,
} from 'chart.js';

ChartJS.register(ArcElement, Tooltip, Legend);

const DonutChart = () => {
  const data = {
    labels: [
      'Category 1',
      'Category 2',
      'Category 3',
      'Category 4',
      'Category 5',
      'Category 6',
      'Category 7',
      'Category 8',
      'Category 9',
    ],
    datasets: [
      {
        data: [3, 3, 3, 3, 3, 3, 3, 3, 2],
        backgroundColor: [
          '#ff6384',
          '#36a2eb',
          '#ffce56',
          '#4bc0c0',
          '#9966ff',
          '#ff9f40',
          '#36b2a7',
          '#75bddb',
          '#dcdcdc',
        ],
        borderColor: '#fff',
        borderWidth: 5,
        hoverBackgroundColor: [
          '#ff6384',
          '#36a2eb',
          '#ffce56',
          '#4bc0c0',
          '#9966ff',
          '#ff9f40',
          '#36b2a7',
          '#75bddb',
          '#dcdcdc',
        ],
      },
    ],
  };

  const options = {
    cutout: '70%',
    responsive: true,
    maintainAspectRatio: false,
    plugins: {
      legend: {
        display: false,
      },
      tooltip: {
        enabled: false,
      },
    },
  };


  const walletArr = [
    {
      name : "BNB wallet",
      usersCount : 153,
      color : "#f5b659",
    },
    {
      name : "OKX Wallet",
      usersCount : 12,
      color : "#f5b659"
    },
    {
      name : "Pollygon Wallet",
      usersCount : 32,
      color : "#67ccee",
    },
    {
      name : "Token Pocket",
      usersCount : 84,
      color : "#67ccee",
    },
    {
      name : "Trust Wallet",
      usersCount : 107,
      color : "#93d3d4",
    },
    {
      name : "1 Inch wallet",
      usersCount : 98,
      color : "#93d3d4",
    },
    {
      name : "Metamask",
      usersCount : 220,
      color : "#246176",
    },
    {
      name : "Coin Base",
      usersCount : 42,
      color : "#246176",
    },
  ]


  return (
    <div className="flex flex-col rounded-lg overflow-hidden border border-[#DBDBDB] w-[400px] bg-white items-center gap-4">
      <div className="bg-[#FFFDD2] text-center w-[100%] p-4 font-bold">
        <h3>Wallets</h3>
      </div>
      <div
        style={{
          width: "300px",
          height: "300px",
          borderRadius: "50%",
          border: "1px solid black",
          boxShadow: "2px 2px black",
        }}
      >
        <div style={{ position: "relative", width: "100%", height: "100%" }}>
          <Doughnut data={data} options={options} />
          <div
            style={{
              position: "absolute",
              top: "50%",
              left: "50%",
              transform: "translate(-50%, -50%)",
              height: "170px",
              width: "170px",
              boxShadow: "-2px -2px black",
              textAlign: "center",
              border: "1px solid black",
              padding: "50px",
              borderRadius: "50%",
            }}
          >
            <h6 className="bg-black text-white rounded-2xl p-1 font-bold">
              Wallet
            </h6>
            <p className="font-bold">26</p>
            <p>Total Wallets</p>
          </div>
        </div>
      </div>
      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(2,1fr)",
          gap: "25px 120px",
          textAlign: "end",
        }}
        className='my-4'
      >
        {walletArr.map((item) => (
          <div className="flex flex-col gap-2">
            <div
              style={{
                display: "flex",
                alignItems: "center",
                gap: "10px",
              }}
            >
              <div
                style={{
                  width: "10px",
                  height: "10px",
                  borderRadius: "50%",
                  background: item.color,
                }}
              ></div>
              <div>{item.name}</div>
            </div>
            <div className='text-left pl-4'>
            {item.usersCount} Users
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default DonutChart;
