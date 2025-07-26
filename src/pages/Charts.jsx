import React from 'react';
import Chart from './Chart';
import PieChartComponent from './Pie_chart';
import './Dashboard.css'; // We'll share the same stylesheet

function Charts({ lineChartData, pieChartData, selectedMonth }) {
  return (
    // This container will hold our two chart panels
    <div className="charts-container">
      {/* Panel for the Line Chart */}
      <div className="dashboard-panel">
        <h3>Monthly Spending Trend</h3>
        <Chart filteredData={lineChartData} selectedMonth={selectedMonth} />
      </div>

      {/* Panel for the Pie Chart */}
      <div className="dashboard-panel">
        <PieChartComponent records={pieChartData} />
      </div>
    </div>
  );
}

export default Charts;