import React, { useRef, useState, useEffect } from "react";
import { Button } from "@mui/material";

const SpendingTable = ({ data, onDelete }) => {
  const searchRef = useRef();
  const [filteredData, setFilteredData] = useState(data);

  useEffect(() => {
    setFilteredData(data);
  }, [data]);

  const handleSearch = () => {
    const keyword = searchRef.current.value.toLowerCase();
    const filtered = data.filter(
      (item) =>
        item.description.toLowerCase().includes(keyword) ||
        item.category.toLowerCase().includes(keyword)
    );
    setFilteredData(filtered);
  };

  // Sort by date (ascending)
  const sortByDateAsc = () => {
    const sorted = [...filteredData].sort(
      (a, b) => new Date(a.date) - new Date(b.date)
    );
    setFilteredData(sorted);
  };

  // Sort by date (descending)
  const sortByDateDesc = () => {
    const sorted = [...filteredData].sort(
      (a, b) => new Date(b.date) - new Date(a.date)
    );
    setFilteredData(sorted);
  };

  return (
    <div style={{ marginTop: "20px" }}>
      <div style={{ marginBottom: "10px" }}>
        <input type="text" placeholder="Search by description or category..." ref={searchRef} />
        <Button
          onClick={handleSearch}
          variant="contained"
          size="small"
          style={{ marginLeft: "10px" }}
        >
          Search
        </Button>
        &nbsp;&nbsp; Sort by Date:
        <Button onClick={sortByDateAsc}>🔼</Button>
        <Button onClick={sortByDateDesc}>🔽</Button>
      </div>

      <table border="1" width="100%" style={{ borderCollapse: "collapse" }}>
        <thead>
          <tr>
            <th>#</th>
            <th>Description</th>
            <th>Category</th>
            <th>Date</th>
            <th>Amount</th>
            {onDelete && <th>Action</th>}
          </tr>
        </thead>
        <tbody>
          {filteredData.length > 0 ? (
            filteredData.map((item, index) => (
              <tr key={item.id}>
                <td>{index + 1}</td>
                <td>{item.description}</td>
                <td>{item.category}</td>
                <td>{item.date}</td>
                <td>${Number(item.amount).toFixed(2)}</td>
                {onDelete && (
                  <td>
                    <Button color="error" onClick={() => onDelete(item.id)}>
                      Delete
                    </Button>
                  </td>
                )}
              </tr>
            ))
          ) : (
            <tr>
              <td colSpan="6" style={{ textAlign: "center" }}>
                No records found
              </td>
            </tr>
          )}
        </tbody>
      </table>
    </div>
  );
};

export default SpendingTable;
