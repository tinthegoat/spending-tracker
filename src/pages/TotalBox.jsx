import React, { useEffect, useState } from "react";

function TotalBox() {
  const [records, setRecords] = useState([]);
  const [categories, setCategories] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState("");
  const [totalSpending, setTotalSpending] = useState(0);
  const [categorySpending, setCategorySpending] = useState(0);

  useEffect(() => {
    const stored = localStorage.getItem("journalData");
    const data = stored ? JSON.parse(stored) : [];
    setRecords(data);

    const uniqueCats = [...new Set(data.map((rec) => rec.category).filter(Boolean))];
    setCategories(uniqueCats);

    const total = data.reduce((sum, rec) => sum + Number(rec.amount || 0), 0);
    setTotalSpending(total);
  }, []);

  useEffect(() => {
    if (!selectedCategory) {
      setCategorySpending(0);
      return;
    }
    const totalCat = records
      .filter((rec) => rec.category === selectedCategory)
      .reduce((sum, rec) => sum + Number(rec.amount || 0), 0);
    setCategorySpending(totalCat);
  }, [selectedCategory, records]);

  return (
    <div className="box">
      <h3 className="title">Spending Summary (All Time) Base on Categories</h3>

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
          <option value="">All Categories</option>
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

        {selectedCategory && (
          <p>
            <strong>Total spent on {selectedCategory}:</strong> ${categorySpending.toFixed(2)}
          </p>
        )}
      </div>
    </div>
  );
}

export default TotalBox;
