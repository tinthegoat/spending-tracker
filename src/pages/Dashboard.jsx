import React, { useState } from 'react';
import './Dashboard.css';
import Box1 from './box1';
import Box3 from './box3';
import Box4 from './box4';
function Dashboard() {
  
  return (
    <div>
      {/* Add charts and summary here */}
      <div classname="dashboard-content">
        <div classname="container">         
                     
          <Box1 />
          <div className="box box2">Total Spending Overview</div>
          {/* Line Chart of Spending */}
          <Box3 />
          {/* Pie Chart of Spending by Category */}
          <Box4 />  
                  
        </div>   
      </div>
    </div>
  );
}

export default Dashboard;
