import React, { useState } from 'react';
import TotalBox from './TotalBox';
import Chart from './Chart';

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
      <Chart filteredData={filteredData} selectedMonth={selectedMonth} />
    </div>
  );
}

export default Dashboard;
