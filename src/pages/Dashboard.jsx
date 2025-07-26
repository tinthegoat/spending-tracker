
import React from 'react';
import './Dashboard.css';
import TotalBox from './TotalBox';
import Chart from './Line_Chart';
import ListItem from './List_item';
function Dashboard() {

  

  return (
    <div>
      {/* Add charts and summary here */}
      <div className="dashboard-content">

        <div className="container">         
          <TotalBox />
          <ListItem />
          <Chart />
        </div>   
      </div>
    </div>
  );
}

export default Dashboard;