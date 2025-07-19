import Ract, { useState } from 'react';
import './Dashboard.css';
import Box1 from './box1';
import Box3 from './box3';
function Dashboard() {
  
  return (
    <div>
      <h2>Spending Dashboard</h2>
      {/* Add charts and summary here */}
      <p>This is where the user sees spending analytics.</p>
      <div classname="dashboard-content">
        <div classname="container">
          
          
                     
          <Box1 />
          
          <div className="box box2">Total Spending Overview</div>
          <div className="box box3">Line Chart of Spending</div>
          <Box3 />
          <div className="box box4">Pie Chart of Spending by Category</div>
        </div>   
      </div>
    </div>
  );
}

export default Dashboard;
