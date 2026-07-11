import "./Transactions.css";

function TransactionSummary() {
  const summary = [
    { label: "Total Transactions", value: "1,247", change: "+12%", trend: "up" },
    { label: "Total Income", value: "$45,230.00", change: "+8.5%", trend: "up" },
    { label: "Total Expenses", value: "$32,150.00", change: "-3.2%", trend: "down" },
    { label: "Net Balance", value: "$13,080.00", change: "+15.7%", trend: "up" },
  ];

  return (
    <div className="transaction-summary">
      {summary.map((item, index) => (
        <div key={index} className="summary-item">
          <p className="summary-label">{item.label}</p>
          <p className="summary-value">{item.value}</p>
          <div className={`summary-change summary-change-${item.trend}`}>
            {item.trend === "up" ? "↑" : "↓"} {item.change}
          </div>
        </div>
      ))}
    </div>
  );
}

export default TransactionSummary;
