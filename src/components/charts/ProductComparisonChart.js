import React from "react";
import { Bar } from "react-chartjs-2";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend
);

function ProductComparisonChart({ data }) {
  const chartData = {
    labels: data.map((item) => item.productName),
    datasets: [
      {
        label: "Date 1 Sales",
        data: data.map((item) => item.date1Sales),
        backgroundColor: "rgba(75,192,192,0.6)",
      },
      {
        label: "Date 2 Sales",
        data: data.map((item) => item.date2Sales),
        backgroundColor: "rgba(255,99,132,0.6)",
      },
    ],
  };

  const options = {
    responsive: true,
    scales: {
      y: {
        beginAtZero: true,
      },
    },
  };

  return <Bar data={chartData} options={options} />;
}

export default ProductComparisonChart;
