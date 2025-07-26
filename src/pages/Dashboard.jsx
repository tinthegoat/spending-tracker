import React, { useState } from 'react';
import TotalBox from './TotalBox';
import Chart from './Line_Chart';
function Dashboard() {

  return (
    <div>
      {/* Add charts and summary here */}
      <div className="dashboard-content">

        <div className="container">         
          <TotalBox />
          <Chart />
        </div>   
      </div>
    </div>
  );
}

export default Dashboard;
