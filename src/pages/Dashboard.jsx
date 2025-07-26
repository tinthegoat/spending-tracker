
import React from 'react';
import './Dashboard.css';
import TotalBox from './TotalBox';
import Chart from './Line_Chart';
import PieChartComponent from './Pie_chart';
function Dashboard() {
  
  

  return (
    <div>
      {/* Add charts and summary here */}
      <div className="dashboard-content">

        <div className="container">         
          <TotalBox />
          <Chart />
          <PieChartComponent />
        </div>   
      </div>
    </div>
  );
}

export default Dashboard;