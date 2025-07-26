import React from 'react';
import './Dashboard.css';
import TotalBox from './TotalBox';
import Chart from './Line_Chart';
function Dashboard() {

  return (
    <div>
<<<<<<< HEAD
      <div classname="dashboard-content">
        <div classname="container">         
                     
=======
      {/* Add charts and summary here */}
      <div className="dashboard-content">

        <div className="container">         
>>>>>>> origin
          <TotalBox />
          <Chart />
        </div>   
      </div>
    </div>
  );
}

export default Dashboard;