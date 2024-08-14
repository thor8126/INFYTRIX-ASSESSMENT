import React, { useState, useEffect } from "react";
import ProductSalesChart from "./charts/ProductSalesChart";
import CategorySalesChart from "./charts/CategorySalesChart";
import SalesTable from "./tables/SalesTable";
import { fetchTodaySales } from "../api/salesApi";

function TodaySalesDashboard() {
  const [salesData, setSalesData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetchTodaySales()
      .then((data) => {
        setSalesData(data);
        setLoading(false);
      })
      .catch((err) => {
        setError(err.message);
        setLoading(false);
      });
  }, []);

  if (loading) return <div>Loading...</div>;
  if (error) return <div>Error: {error}</div>;

  return (
    <div>
      <h1>Today's Sales Dashboard</h1>
      <div className="chart-container">
        <h2 className="chart-title">Product Sales</h2>
        <ProductSalesChart data={salesData} />
      </div>
      <div className="chart-container">
        <h2 className="chart-title">Category Sales</h2>
        <CategorySalesChart data={salesData} />
      </div>
      <div className="table-container">
        <SalesTable data={salesData} />
      </div>
    </div>
  );
}

export default TodaySalesDashboard;
