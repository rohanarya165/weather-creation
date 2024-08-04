import React from 'react';
import { Line } from 'react-chartjs-2';
import { Chart, LineElement, CategoryScale, LinearScale, PointElement, Title, Tooltip, Legend, Filler } from 'chart.js';
import 'tailwindcss/tailwind.css';

Chart.register(LineElement, CategoryScale, LinearScale, PointElement, Title, Tooltip, Legend, Filler);

const data = {
  labels: ['01-02', '01-02', '01-02', '01-02', '01-02', '01-02', '01-02'],
  datasets: [
    {
      label: 'Net Worth',
      data: [200000, 220000, 210000, 230000, 200000, 210000, 200000],
      fill: true,
      backgroundColor: 'rgba(75,192,192,0.2)',
      borderColor: 'rgba(75,192,192,1)',
      tension: 0,
    },
  ],
};

const options = {
  scales: {
    y: {
      beginAtZero: false,
      grid: {
        borderDash: [5, 5], 
        color: 'rgba(0, 0, 0, 0.1)', 
      },
    },
    x: {
      grid: {
        borderDash: [5, 5], 
        color: 'rgba(0, 0, 0, 0.1)',
      },
    },
  },
  plugins: {
    legend: {
      display: false,
    },
  },
  elements: {
    point: {
      radius: 0,
    },
  },
};

const LineChart = () => {
  return (
    <div>
          <Line data={data} options={options}/>
        </div>

  );
};

export default LineChart;
