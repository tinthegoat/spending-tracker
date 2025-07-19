import './Dashboard.css';

function Dashboard() {
  return (
    <div>
      <h2>Spending Dashboard</h2>
      {/* Add charts and summary here */}
      <p>This is where the user sees spending analytics.</p>
      <div className="dashboard-content">
        <div classname="container">
          <div className="box box1">Box1</div>
          <div className="box box2">Box2</div>
          <div className="box box3">Box3</div>
          <div className="box box4">Box4</div>
        </div>   
      </div>
    </div>
  );
}

export default Dashboard;
