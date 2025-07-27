import React, { useState, useEffect } from 'react';
import TotalBox from './TotalBox';
<<<<<<< HEAD
import Charts from './Charts'; // Import our new component
import './Dashboard.css';
=======
import Chart from './Chart';
import './Dashboard.css'; // Assuming you have a CSS file for styling
>>>>>>> c084903270603d3e8ad8b520e3ba8cc8f7d5835f

function Dashboard() {
  const [filteredData, setFilteredData] = useState([]);
  const [allRecords, setAllRecords] = useState([]);
  const [selectedMonth, setSelectedMonth] = useState("");

  // This effect runs once to load all data from local storage
  useEffect(() => {
    const stored = JSON.parse(localStorage.getItem('journalData')) || [];
    setAllRecords(stored);
    setFilteredData(stored); // Initially, the filtered data is all data
  }, []);

  return (
    <div className="dashboard-layout">
      {/* This is our LEFT column */}
      <TotalBox
        records={allRecords}
        setRecords={setAllRecords} // Pass this down to handle deletions
        onFilteredData={(data, month) => {
          setFilteredData(data);
          setSelectedMonth(month);
        }}
      />
<<<<<<< HEAD

      {/* This is our RIGHT column */}
      <Charts
        lineChartData={filteredData} // The line chart uses filtered data
        pieChartData={allRecords}   // The pie chart uses all data
        selectedMonth={selectedMonth}
      />
=======
>>>>>>> c084903270603d3e8ad8b520e3ba8cc8f7d5835f
    </div>
  );
}

export default Dashboard;