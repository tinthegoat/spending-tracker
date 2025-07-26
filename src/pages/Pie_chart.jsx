// src/pages/Pie_Chart.jsx

import React, { useEffect, useState } from 'react';
import { PieChart, Pie, Cell, Tooltip, Legend, ResponsiveContainer } from 'recharts';

// Define an array of colors for the pie chart slices
const COLORS = ['#4c86b9ff', '#34a18dff', '#a28443ff', '#ac613cff', '#814b9eff', '#a74a58ff'];

// This component receives the master list of 'records' as a prop
function PieChartComponent({ records }) {
  // State to hold the data formatted for the pie chart
  const [pieData, setPieData] = useState([]);

  // This effect runs whenever the 'records' prop changes
  useEffect(() => {
    // We only process the data if records exist
    if (records && records.length > 0) {
      
      // 1. Define your main categories. Using lowercase to match your Journal.jsx values.
      const mainCategories = ['food', 'transport', 'entertainment', 'utilities'];

      // 2. Initialize an object to hold the spending totals for these categories plus "Other".
      const spendingByCategory = {
        Food: 0,
        Transport: 0,
        Entertainment: 0,
        Utilities: 0,
        Other: 0
      };

      // 3. Loop through each record to group the spending
      records.forEach(record => {
        const category = record.category ? record.category.toLowerCase() : 'other';
        const amount = Number(record.amount) || 0;

        if (mainCategories.includes(category)) {
          // Capitalize the first letter for the key in our new object
          const key = category.charAt(0).toUpperCase() + category.slice(1);
          spendingByCategory[key] += amount;
        } else {
          // If the category is not one of the main ones, add it to "Other"
          spendingByCategory.Other += amount;
        }
      });

      // 4. Convert the aggregated object into an array that Recharts can use,
      // but only include categories that have spending > 0.
      const formattedData = Object.keys(spendingByCategory)
        .map(categoryName => ({
          name: categoryName,
          value: spendingByCategory[categoryName],
        }))
        .filter(item => item.value > 0); // This removes empty slices from the chart

      // 5. Update the state with the formatted data
      setPieData(formattedData);
    }
  }, [records]); // This dependency array ensures the effect re-runs when records change

  return (
    <div className="box">
      <h3>Spending by Category (All Time)</h3>
      <div style={{ width: '100%', height: 300 }}>
        <ResponsiveContainer>
          <PieChart>
            <Pie
              data={pieData}
              cx="50%" // Center X
              cy="50%" // Center Y
              labelLine={false}
              outerRadius={80} // Size of the pie
              fill="#8884d8"
              dataKey="value" // The key in our data object that holds the value
              nameKey="name"  // The key that holds the name for the label
              label={({ name, percent }) => `${name} ${(percent * 100).toFixed(0)}%`} // Custom label
            >
              {/* This maps over our data to give each slice a unique color */}
              {pieData.map((entry, index) => (
                <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
              ))}
            </Pie>
            <Tooltip formatter={(value) => `$${value.toFixed(2)}`} />
            <Legend />
          </PieChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
}

export default PieChartComponent;
