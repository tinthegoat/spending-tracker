import React, { useState } from "react";

function FiltersBox({ onTimeframeChange, onMonthChange, onAddCategory, extraCategories }) {
  const [newCategory, setNewCategory] = useState("");
  const [timeframe, setTimeframe] = useState("daily");
  const [selectedMonth, setSelectedMonth] = useState("");

  const handleAddCategory = () => {
    if (newCategory.trim()) {
      onAddCategory(newCategory.trim());
      setNewCategory("");
    }
  };

  return (
    <div className="box">
      <h3 className="title">Filters & Add Category</h3>

      {/* Timeframe selector */}
      <div>
        <label>
          <input
            type="radio"
            value="daily"
            checked={timeframe === "daily"}
            onChange={() => {
              setTimeframe("daily");
              onTimeframeChange("daily");
            }}
          />
          Daily
        </label>

        <label style={{ marginLeft: 15 }}>
          <input
            type="radio"
            value="weekly"
            checked={timeframe === "weekly"}
            onChange={() => {
              setTimeframe("weekly");
              onTimeframeChange("weekly");
            }}
          />
          Weekly
        </label>

        <label style={{ marginLeft: 15 }}>
          <input
            type="radio"
            value="monthly"
            checked={timeframe === "monthly"}
            onChange={() => {
              setTimeframe("monthly");
              onTimeframeChange("monthly");
            }}
          />
          Monthly
        </label>
      </div>

      {/* Month picker */}
      <div style={{ marginTop: 20 }}>
        <label className="label" htmlFor="monthPicker">Select Month:</label>
        <input
          id="monthPicker"
          type="month"
          value={selectedMonth}
          onChange={(e) => {
            setSelectedMonth(e.target.value);
            onMonthChange(e.target.value);
          }}
        />
      </div>

      {/* Add extra category */}
      <div style={{ marginTop: 30 }}>
        <label className="label" htmlFor="newCategoryInput">Add New Category:</label>
        <div>
          <input
            id="newCategoryInput"
            type="text"
            value={newCategory}
            onChange={(e) => setNewCategory(e.target.value)}
            placeholder="Category name"
            className="input"
          />
          <button onClick={handleAddCategory} className="btn-add">
            Add
          </button>
        </div>

        {extraCategories.length > 0 && (
          <ul className="category-list">
            {extraCategories.map((cat, idx) => (
              <li key={idx}>{cat}</li>
            ))}
          </ul>
        )}
      </div>
    </div>
  );
}

export default FiltersBox;
