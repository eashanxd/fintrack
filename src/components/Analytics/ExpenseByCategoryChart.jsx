import { PieChart, Pie, Cell, ResponsiveContainer, Tooltip, Legend } from "recharts";
import "./Analytics.css";

function ExpenseByCategoryChart({ transactions }) {
  const expenseTransactions = transactions.filter(t => t.amount < 0);

  // Calculate spending by category
  const categoryTotals = expenseTransactions.reduce((acc, t) => {
    acc[t.category] = (acc[t.category] || 0) + Math.abs(t.amount);
    return acc;
  }, {});

  const colors = ["#6366f1", "#8b5cf6", "#ec4899", "#f59e0b", "#10b981", "#3b82f6"];
  const data = Object.entries(categoryTotals).map(([name, value], index) => ({
    name,
    value,
    color: colors[index % colors.length],
  }));

  if (data.length === 0) {
    return (
      <div className="chart-container">
        <div className="chart-header">
          <h3 className="chart-title">Expense by Category</h3>
          <span className="chart-badge">This month</span>
        </div>
        <div className="empty-state">
          <div className="empty-state-icon">🥧</div>
          <h3 className="empty-state-title">No expense data</h3>
          <p className="empty-state-description">Add expense transactions to see category breakdown.</p>
        </div>
      </div>
    );
  }

  return (
    <div className="chart-container">
      <div className="chart-header">
        <h3 className="chart-title">Expense by Category</h3>
        <span className="chart-badge">This month</span>
      </div>
      <ResponsiveContainer width="100%" height={300}>
        <PieChart>
          <Pie
            data={data}
            cx="50%"
            cy="50%"
            innerRadius={60}
            outerRadius={100}
            paddingAngle={2}
            dataKey="value"
          >
            {data.map((entry, index) => (
              <Cell key={`cell-${index}`} fill={entry.color} />
            ))}
          </Pie>
          <Tooltip
            contentStyle={{
              backgroundColor: "rgba(22, 23, 29, 0.95)",
              border: "1px solid rgba(255,255,255,0.1)",
              borderRadius: "8px",
              color: "#fafafa",
            }}
          />
          <Legend />
        </PieChart>
      </ResponsiveContainer>
    </div>
  );
}

export default ExpenseByCategoryChart;
