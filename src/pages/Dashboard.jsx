import React from 'react';
import './Dashboard.css';
import TotalBox from './TotalBox';
import Chart from './Line_Chart';
function Dashboard() {
  
  return (
    <div>
      <div classname="dashboard-content">
        <div classname="container">         
                     
          <TotalBox />
          <Chart />
                  
        </div>   
      </div>
    </div>
  );
}

export default Dashboard;
