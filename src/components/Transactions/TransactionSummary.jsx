import "./Transactions.css";

function TransactionSummary({ transactions, summary }) {
  const summaryData = [
    { label: "Total Transactions", value: transactions.length.toString(), change: null, trend: null },
    { label: "Total Income", value: `$${summary.income.toLocaleString('en-US', { minimumFractionDigits: 2, maximumFractionDigits: 2 })}`, change: null, trend: null },
    { label: "Total Expenses", value: `$${summary.expenses.toLocaleString('en-US', { minimumFractionDigits: 2, maximumFractionDigits: 2 })}`, change: null, trend: null },
    { label: "Net Balance", value: `$${summary.totalBalance.toLocaleString('en-US', { minimumFractionDigits: 2, maximumFractionDigits: 2 })}`, change: null, trend: null },
  ];

  return (
    <div className="transaction-summary">
      {summaryData.map((item, index) => (
        <div key={index} className="summary-item">
          <p className="summary-label">{item.label}</p>
          <p className="summary-value">{item.value}</p>
          {item.change && (
            <div className={`summary-change summary-change-${item.trend}`}>
              {item.trend === "up" ? "↑" : "↓"} {item.change}
            </div>
          )}
        </div>
      ))}
    </div>
  );
}

export default TransactionSummary;
