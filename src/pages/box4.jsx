// Box4.jsx
import React, { useEffect, useState } from "react";
import { PieChart, Pie, Cell, Tooltip, Legend, ResponsiveContainer } from "recharts";

const COLORS = [
  "#0088FE", "#00C49F", "#FFBB28", "#FF8042",
  "#A28EFF", "#FF69B4", "#32CD32", "#FF4500"
];

const Box4 = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    const storedData = JSON.parse(localStorage.getItem("journalData")) || [];

    // Group and sum by category
    const categoryMap = {};
    storedData.forEach((entry) => {
      if (!categoryMap[entry.category]) {
        categoryMap[entry.category] = 0;
      }
      categoryMap[entry.category] += parseFloat(entry.amount);
    });

    // Convert to array for chart
    const chartData = Object.entries(categoryMap).map(([category, amount]) => ({
      name: category,
      value: amount
    }));

    setData(chartData);
  }, []);

  return (
    <div className="box box4" style={{
      backgroundColor: "#f0f8ff",
      borderRadius: "20px",
      padding: "20px",
      boxShadow: "0 0 10px rgba(0, 0, 0, 0.1)",
      width: "100%",
      height: "100%"
    }}>
      <h3 style={{ marginBottom: "10px", color: "#1E90FF" }}>Spending by Category</h3>
      {data.length > 0 ? (
        <ResponsiveContainer width="100%" height={300}>
          <PieChart>
            <Pie
              data={data}
              cx="50%"
              cy="50%"
              outerRadius={100}
              dataKey="value"
              label={({ name, percent }) => `${name} ${(percent * 100).toFixed(0)}%`}
            >
              {data.map((_, index) => (
                <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
              ))}
            </Pie>
            <Tooltip formatter={(value) => [`$${value.toFixed(2)}`, "Spending"]} />
            <Legend />
          </PieChart>
        </ResponsiveContainer>
      ) : (
        <p style={{ color: "#888" }}>No data available yet.</p>
      )}
    </div>
  );
};

export default Box4;
