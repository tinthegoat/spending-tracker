import React, { useEffect, useState } from 'react';
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer
} from 'recharts';

const Chart = ({ filteredData, selectedMonth }) => {
  const [dailyData, setDailyData] = useState([]);
  const [totalSpending, setTotalSpending] = useState(0);

  useEffect(() => {
    if (!filteredData || filteredData.length === 0) {
      setDailyData([]);
      setTotalSpending(0);
      return;
    }

    const total = filteredData.reduce((sum, entry) => sum + Number(entry.amount), 0);
    setTotalSpending(total);

    const dailySpending = Array(31).fill(0);
    filteredData.forEach(entry => {
      const day = new Date(entry.date).getDate();
      dailySpending[day - 1] += Number(entry.amount);
    });

    const chartData = dailySpending.map((amount, idx) => ({
      day: (idx + 1).toString(),
      amount,
    }));

    setDailyData(chartData);
  }, [filteredData]);

  return (
    <div className="line-chart">
      <div className="line-chart-container" style={{ width: '100%', height: 300 }}>
        <ResponsiveContainer width="100%" height="100%">
          <LineChart data={dailyData} margin={{ top: 20, right: 30, left: 20, bottom: 5 }}>
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="day" label={{ value: 'Day', position: 'insideBottomRight', offset: -5 }} />
            <YAxis label={{ value: 'Amount (Baht)', angle: -90, position: 'insideLeft' }} />
            <Tooltip />
            <Line type="monotone" dataKey="amount" stroke="#0077cc" strokeWidth={2} dot={{ r: 3 }} />
          </LineChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
};

export default Chart;
