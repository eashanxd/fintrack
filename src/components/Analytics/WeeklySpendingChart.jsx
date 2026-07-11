import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from "recharts";
import "./Analytics.css";

function WeeklySpendingChart({ transactions }) {
  const expenseTransactions = transactions.filter(t => t.amount < 0);

  // Group by day of week (simplified for demo)
  const days = ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"];
  const data = days.map(day => ({
    day,
    spending: expenseTransactions.reduce((sum, t) => sum + Math.abs(t.amount), 0) / 7, // Evenly distribute for demo
  }));

  if (expenseTransactions.length === 0) {
    return (
      <div className="chart-container">
        <div className="chart-header">
          <h3 className="chart-title">Weekly Spending</h3>
          <span className="chart-badge">This week</span>
        </div>
        <div className="empty-state">
          <div className="empty-state-icon">📊</div>
          <h3 className="empty-state-title">No spending data</h3>
          <p className="empty-state-description">Add expense transactions to see weekly spending patterns.</p>
        </div>
      </div>
    );
  }

  return (
    <div className="chart-container">
      <div className="chart-header">
        <h3 className="chart-title">Weekly Spending</h3>
        <span className="chart-badge">This week</span>
      </div>
      <ResponsiveContainer width="100%" height={300}>
        <BarChart data={data}>
          <CartesianGrid strokeDasharray="3 3" stroke="rgba(255,255,255,0.05)" />
          <XAxis dataKey="day" stroke="#a1a1aa" />
          <YAxis stroke="#a1a1aa" />
          <Tooltip
            contentStyle={{
              backgroundColor: "rgba(22, 23, 29, 0.95)",
              border: "1px solid rgba(255,255,255,0.1)",
              borderRadius: "8px",
              color: "#fafafa",
            }}
          />
          <Bar dataKey="spending" fill="#8b5cf6" radius={[4, 4, 0, 0]} />
        </BarChart>
      </ResponsiveContainer>
    </div>
  );
}

export default WeeklySpendingChart;
