import React from "react";
import { Pie } from "react-chartjs-2";
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from "chart.js";

ChartJS.register(ArcElement, Tooltip, Legend);

function CategorySalesChart({ data }) {
  // Group sales by category
  const categorySales = data.reduce((acc, item) => {
    acc[item.category] = (acc[item.category] || 0) + item.salesAmount;
    return acc;
  }, {});

  const chartData = {
    labels: Object.keys(categorySales),
    datasets: [
      {
        data: Object.values(categorySales),
        backgroundColor: [
          "rgba(255, 99, 132, 0.6)",
          "rgba(54, 162, 235, 0.6)",
          "rgba(255, 206, 86, 0.6)",
          "rgba(75, 192, 192, 0.6)",
          "rgba(153, 102, 255, 0.6)",
        ],
        borderColor: [
          "rgba(255, 99, 132, 1)",
          "rgba(54, 162, 235, 1)",
          "rgba(255, 206, 86, 1)",
          "rgba(75, 192, 192, 1)",
          "rgba(153, 102, 255, 1)",
        ],
        borderWidth: 1,
      },
    ],
  };

  const options = {
    responsive: true,
    plugins: {
      legend: {
        position: "top",
      },
      title: {
        display: true,
        text: "Sales by Category",
      },
    },
  };

  return <Pie data={chartData} options={options} />;
}

export default CategorySalesChart;
