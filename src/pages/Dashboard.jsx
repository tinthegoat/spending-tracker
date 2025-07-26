import React, { useState } from 'react';
import TotalBox from './TotalBox';
import Chart from './Chart';
import './Dashboard.css'; // Assuming you have a CSS file for styling

function Dashboard() {
  const [filteredData, setFilteredData] = useState([]);
  const [selectedMonth, setSelectedMonth] = useState("");

  return (
    <div className="dashboard-container">
      <TotalBox
        onFilteredData={(data, month) => {
          setFilteredData(data);
          setSelectedMonth(month);
        }}
      />
    </div>
  );
}

export default Dashboard;
