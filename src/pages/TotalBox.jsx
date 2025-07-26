import React, { useEffect, useState, useRef } from "react";
import { Button } from "@mui/material";
import { PieChart, Pie, Cell, Tooltip as ReTooltip, Legend } from "recharts";

function TotalBox({ onFilteredData }) {
  const [records, setRecords] = useState([]);
  const [categories, setCategories] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState("");
  const [selectedMonth, setSelectedMonth] = useState(""); // ✅ Month filter
  const [totalSpending, setTotalSpending] = useState(0);
  const [categorySpending, setCategorySpending] = useState(0);
  const [filteredData, setFilteredData] = useState([]);

  const searchRef = useRef();

  const COLORS = ["#56abf6ff", "#4cbca8ff", "#f8d17bff", "#fea376ff", "#cd7af6ff", "#f98080ff"];

  useEffect(() => {
    const stored = JSON.parse(localStorage.getItem("journalData")) || [];
    const sorted = [...stored].sort((a, b) => new Date(b.date) - new Date(a.date));
    setRecords(sorted);
    setFilteredData(sorted);

    const uniqueCats = [...new Set(stored.map((rec) => rec.category).filter(Boolean))];
    setCategories(uniqueCats);

    const total = stored.reduce((sum, rec) => sum + Number(rec.amount || 0), 0);
    setTotalSpending(total);
  }, []);

  useEffect(() => {
    let filtered = [...records];

    if (selectedCategory) {
      filtered = filtered.filter((rec) => rec.category === selectedCategory);
    }
    if (selectedMonth) {
      filtered = filtered.filter((rec) => rec.date.startsWith(selectedMonth));
    }

    setFilteredData(filtered);

    const totalCat = filtered.reduce((sum, rec) => sum + Number(rec.amount || 0), 0);
    setCategorySpending(totalCat);

    // ✅ Send filtered data to LineChart for monthly view
    if (onFilteredData) {
      onFilteredData(filtered);
    }
  }, [selectedCategory, selectedMonth, records]);

  const handleSearch = () => {
    const keyword = searchRef.current.value.toLowerCase();
    const filtered = records.filter(
      (item) =>
        item.description.toLowerCase().includes(keyword) ||
        item.category.toLowerCase().includes(keyword)
    );
    setFilteredData(filtered);
  };

  const sortByDateAsc = () => {
    const sorted = [...filteredData].sort(
      (a, b) => new Date(a.date) - new Date(b.date)
    );
    setFilteredData(sorted);
  };

  const sortByDateDesc = () => {
    const sorted = [...filteredData].sort(
      (a, b) => new Date(b.date) - new Date(a.date)
    );
    setFilteredData(sorted);
  };

  const handleDelete = (id) => {
    const updated = records.filter((item) => item.id !== id);
    setRecords(updated);
    setFilteredData(updated);
    localStorage.setItem("journalData", JSON.stringify(updated));

    const total = updated.reduce((sum, rec) => sum + Number(rec.amount || 0), 0);
    setTotalSpending(total);
  };

  // ✅ Extract unique months from data
  const uniqueMonths = [
    ...new Set(records.map((rec) => rec.date.slice(0, 7))) // YYYY-MM format
  ];

  // ✅ Pie chart data for selected month
  const pieData = categories.map((cat) => {
    const total = filteredData
      .filter((item) => item.category === cat)
      .reduce((sum, rec) => sum + Number(rec.amount), 0);
    return { name: cat, value: total };
  }).filter((item) => item.value > 0);

  return (
    <div className="box">
      <h3 className="title">Spending Summary (Filtered by Month & Category)</h3>

      {/* ✅ Month Dropdown */}
      <div className="dropdown-container" style={{ marginBottom: "10px" }}>
        <label htmlFor="monthDropdown" className="dropdown-label">
          Select Month:
        </label>
        <select
          id="monthDropdown"
          className="category-dropdown"
          value={selectedMonth}
          onChange={(e) => setSelectedMonth(e.target.value)}
        >
          <option value="">-- All Months --</option>
          {uniqueMonths.map((month, idx) => (
            <option key={idx} value={month}>
              {month}
            </option>
          ))}
        </select>
      </div>

      {/* ✅ Category Dropdown */}
      <div className="dropdown-container">
        <label htmlFor="categoryDropdown" className="dropdown-label">
          Select Category:
        </label>
        <select
          id="categoryDropdown"
          className="category-dropdown"
          value={selectedCategory}
          onChange={(e) => setSelectedCategory(e.target.value)}
        >
          <option value="">-- All Categories --</option>
          {categories.map((cat, idx) => (
            <option key={idx} value={cat}>
              {cat}
            </option>
          ))}
        </select>
      </div>

      <div className="summary-container">
        <p>
          <strong>Total Spending:</strong> ${totalSpending.toFixed(2)}
        </p>
        {(selectedCategory || selectedMonth) && (
          <p>
            <strong>Filtered Spending:</strong> ${categorySpending.toFixed(2)}
          </p>
        )}
      </div>

      {/* ✅ Search + Sort Controls */}
      <div style={{ marginTop: "15px", marginBottom: "10px" }}>
        <input type="text" placeholder="Search..." ref={searchRef} />
        <Button onClick={handleSearch} variant="contained" size="small" style={{ marginLeft: "10px" }}>
          Search
        </Button>
        &nbsp;&nbsp; Sort by Date:
        <Button onClick={sortByDateAsc}>🔼</Button>
        <Button onClick={sortByDateDesc}>🔽</Button>
      </div>

      {/* ✅ Data Table */}
      <table border="1" width="100%" style={{ borderCollapse: "collapse", marginTop: "10px" }}>
        <thead>
          <tr>
            <th>#</th>
            <th>Description</th>
            <th>Category</th>
            <th>Date</th>
            <th>Amount</th>
            <th>Action</th>
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
                <td>
                  <Button color="error" onClick={() => handleDelete(item.id)}>
                    Delete
                  </Button>
                </td>
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
}

export default TotalBox;
