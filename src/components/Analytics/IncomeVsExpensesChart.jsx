import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from "recharts";
import "./Analytics.css";

function IncomeVsExpensesChart({ transactions }) {
  // Group transactions by month (simplified for demo)
  const monthlyData = transactions.reduce((acc, t) => {
    const date = new Date();
    const monthKey = date.toLocaleString('default', { month: 'short' });
    
    if (!acc[monthKey]) {
      acc[monthKey] = { month: monthKey, income: 0, expenses: 0 };
    }
    
    if (t.amount > 0) {
      acc[monthKey].income += t.amount;
    } else {
      acc[monthKey].expenses += Math.abs(t.amount);
    }
    
    return acc;
  }, {});

  const data = Object.values(monthlyData);

  if (data.length === 0) {
    return (
      <div className="chart-container">
        <div className="chart-header">
          <h3 className="chart-title">Monthly Income vs Expenses</h3>
          <span className="chart-badge">Last 6 months</span>
        </div>
        <div className="empty-state">
          <div className="empty-state-icon">📈</div>
          <h3 className="empty-state-title">No data available</h3>
          <p className="empty-state-description">Add transactions to see income vs expenses trends.</p>
        </div>
      </div>
    );
  }

  return (
    <div className="chart-container">
      <div className="chart-header">
        <h3 className="chart-title">Monthly Income vs Expenses</h3>
        <span className="chart-badge">Last 6 months</span>
      </div>
      <ResponsiveContainer width="100%" height={300}>
        <LineChart data={data}>
          <CartesianGrid strokeDasharray="3 3" stroke="rgba(255,255,255,0.05)" />
          <XAxis dataKey="month" stroke="#a1a1aa" />
          <YAxis stroke="#a1a1aa" />
          <Tooltip
            contentStyle={{
              backgroundColor: "rgba(22, 23, 29, 0.95)",
              border: "1px solid rgba(255,255,255,0.1)",
              borderRadius: "8px",
              color: "#fafafa",
            }}
          />
          <Legend />
          <Line
            type="monotone"
            dataKey="income"
            stroke="#6366f1"
            strokeWidth={3}
            dot={{ fill: "#6366f1", strokeWidth: 2, r: 4 }}
            activeDot={{ r: 6 }}
            name="Income"
          />
          <Line
            type="monotone"
            dataKey="expenses"
            stroke="#ef4444"
            strokeWidth={3}
            dot={{ fill: "#ef4444", strokeWidth: 2, r: 4 }}
            activeDot={{ r: 6 }}
            name="Expenses"
          />
        </LineChart>
      </ResponsiveContainer>
    </div>
  );
}

export default IncomeVsExpensesChart;
