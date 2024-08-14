import React, { useState, useEffect } from "react";
import ProductComparisonChart from "./charts/ProductComparisonChart";
import CategoryComparisonChart from "./charts/CategoryComparisonChart";
import ComparisonTable from "./tables/ComparisonTable";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { fetchSalesComparison } from "../api/salesApi";

function CompareSalesDashboard() {
  const [date1, setDate1] = useState(new Date());
  const [date2, setDate2] = useState(new Date());
  const [comparisonData, setComparisonData] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    setLoading(true);
    fetchSalesComparison(date1, date2)
      .then((data) => {
        setComparisonData(data);
        setLoading(false);
      })
      .catch((err) => {
        setError(err.message);
        setLoading(false);
      });
  }, [date1, date2]);

  if (loading) return <div>Loading...</div>;
  if (error) return <div>Error: {error}</div>;

  return (
    <div>
      <h1>Sales Comparison Dashboard</h1>
      <div className="date-picker-container">
        <DatePicker selected={date1} onChange={(date) => setDate1(date)} />
        <DatePicker selected={date2} onChange={(date) => setDate2(date)} />
      </div>
      <div className="chart-container">
        <h2 className="chart-title">Product Comparison</h2>
        <ProductComparisonChart data={comparisonData} />
      </div>
      <div className="chart-container">
        <h2 className="chart-title">Category Comparison</h2>
        <CategoryComparisonChart data={comparisonData} />
      </div>
      <div className="table-container">
        <ComparisonTable data={comparisonData} />
      </div>
    </div>
  );
}

export default CompareSalesDashboard;
