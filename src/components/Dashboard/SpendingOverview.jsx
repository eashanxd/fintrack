import "./Dashboard.css";

function SpendingOverview({ transactions }) {
  const expenseTransactions = transactions.filter(t => t.amount < 0);

  if (expenseTransactions.length === 0) {
    return (
      <div className="spending-overview">
        <div className="card-header">
          <h2 className="card-title">Spending Overview</h2>
          <select className="time-filter">
            <option>This Month</option>
            <option>Last Month</option>
            <option>Last 3 Months</option>
          </select>
        </div>
        <div className="empty-state">
          <div className="empty-state-icon">📊</div>
          <h3 className="empty-state-title">No spending data yet</h3>
          <p className="empty-state-description">Add your first expense transaction to see your spending breakdown.</p>
        </div>
      </div>
    );
  }

  // Calculate spending by category
  const categoryTotals = expenseTransactions.reduce((acc, t) => {
    acc[t.category] = (acc[t.category] || 0) + Math.abs(t.amount);
    return acc;
  }, {});

  const totalSpent = Object.values(categoryTotals).reduce((sum, amount) => sum + amount, 0);

  const colors = ["#6366f1", "#8b5cf6", "#a855f7", "#d946ef", "#ec4899"];
  const data = Object.entries(categoryTotals).map(([category, amount], index) => ({
    category,
    amount,
    percentage: Math.round((amount / totalSpent) * 100),
    color: colors[index % colors.length],
  }));

  return (
    <div className="spending-overview">
      <div className="card-header">
        <h2 className="card-title">Spending Overview</h2>
        <select className="time-filter">
          <option>This Month</option>
          <option>Last Month</option>
          <option>Last 3 Months</option>
        </select>
      </div>
      <div className="spending-content">
        <div className="spending-chart">
          <div className="chart-legend">
            {data.map((item, index) => (
              <div key={index} className="legend-item">
                <div
                  className="legend-color"
                  style={{ backgroundColor: item.color }}
                />
                <span className="legend-label">{item.category}</span>
                <span className="legend-value">${item.amount.toFixed(2)}</span>
              </div>
            ))}
          </div>
          <div className="bar-chart">
            {data.map((item, index) => (
              <div key={index} className="bar-container">
                <div
                  className="bar"
                  style={{
                    width: `${item.percentage}%`,
                    backgroundColor: item.color,
                  }}
                />
                <span className="bar-label">{item.percentage}%</span>
              </div>
            ))}
          </div>
        </div>
        <div className="spending-total">
          <p className="total-label">Total Spent</p>
          <p className="total-amount">${totalSpent.toFixed(2)}</p>
        </div>
      </div>
    </div>
  );
}

export default SpendingOverview;
