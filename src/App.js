import React from "react";
import { BrowserRouter as Router, Route, Routes, Link } from "react-router-dom";
import TodaySalesDashboard from "./components/TodaySalesDashboard";
import CompareSalesDashboard from "./components/CompareSalesDashboard";

function App() {
  return (
    <Router>
      <div className="dashboard-container">
        <nav>
          <ul>
            <li>
              <Link to="/">Today's Sales</Link>
            </li>
            <li>
              <Link to="/compare">Compare Sales</Link>
            </li>
          </ul>
        </nav>

        <Routes>
          <Route path="/" exact element={<TodaySalesDashboard />} />
          <Route path="/compare" element={<CompareSalesDashboard />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
