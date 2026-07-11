import "./Dashboard.css";

function SpendingOverview() {
  const data = [
    { category: "Food & Dining", amount: 890, percentage: 35, color: "#6366f1" },
    { category: "Transportation", amount: 450, percentage: 18, color: "#8b5cf6" },
    { category: "Shopping", amount: 620, percentage: 25, color: "#a855f7" },
    { category: "Entertainment", amount: 340, percentage: 13, color: "#d946ef" },
    { category: "Bills & Utilities", amount: 220, percentage: 9, color: "#ec4899" },
  ];

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
                <span className="legend-value">${item.amount}</span>
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
          <p className="total-amount">$2,520.00</p>
          <p className="total-change">+5.2% from last month</p>
        </div>
      </div>
    </div>
  );
}

export default SpendingOverview;
