<<<<<<< HEAD
=======
import React from 'react';
>>>>>>> 56e36ec653aabb191b48872bc9e31a7ae7a586c4
import './Dashboard.css';
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