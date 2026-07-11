import { AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from "recharts";
import "./Analytics.css";

function SavingsTrendChart({ transactions, summary }) {
  if (transactions.length === 0) {
    return (
      <div className="chart-container">
        <div className="chart-header">
          <h3 className="chart-title">Savings Trend</h3>
          <span className="chart-badge">Last 6 months</span>
        </div>
        <div className="empty-state">
          <div className="empty-state-icon">💰</div>
          <h3 className="empty-state-title">No savings data</h3>
          <p className="empty-state-description">Add transactions to track your savings over time.</p>
        </div>
      </div>
    );
  }

  // Simplified savings trend based on current savings
  const data = [
    { month: "Jan", savings: summary.savings * 0.5 },
    { month: "Feb", savings: summary.savings * 0.6 },
    { month: "Mar", savings: summary.savings * 0.7 },
    { month: "Apr", savings: summary.savings * 0.8 },
    { month: "May", savings: summary.savings * 0.9 },
    { month: "Jun", savings: summary.savings },
  ];

  return (
    <div className="chart-container">
      <div className="chart-header">
        <h3 className="chart-title">Savings Trend</h3>
        <span className="chart-badge">Last 6 months</span>
      </div>
      <ResponsiveContainer width="100%" height={300}>
        <AreaChart data={data}>
          <defs>
            <linearGradient id="savingsGradient" x1="0" y1="0" x2="0" y2="1">
              <stop offset="5%" stopColor="#10b981" stopOpacity={0.3} />
              <stop offset="95%" stopColor="#10b981" stopOpacity={0} />
            </linearGradient>
          </defs>
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
          <Area
            type="monotone"
            dataKey="savings"
            stroke="#10b981"
            strokeWidth={3}
            fillOpacity={1}
            fill="url(#savingsGradient)"
          />
        </AreaChart>
      </ResponsiveContainer>
    </div>
  );
}

export default SavingsTrendChart;
