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

function CategoryComparisonChart({ data }) {
  const categories = [...new Set(data.map((item) => item.category))];

  const chartData = {
    labels: categories,
    datasets: [
      {
        label: "Date 1 Sales",
        data: categories.map((category) =>
          data
            .filter((item) => item.category === category)
            .reduce((sum, item) => sum + item.date1Sales, 0)
        ),
        backgroundColor: "rgba(75,192,192,0.6)",
      },
      {
        label: "Date 2 Sales",
        data: categories.map((category) =>
          data
            .filter((item) => item.category === category)
            .reduce((sum, item) => sum + item.date2Sales, 0)
        ),
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

export default CategoryComparisonChart;
