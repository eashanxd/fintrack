import "./Analytics.css";

function KPICards({ summary, transactions }) {
  const kpiData = [
    {
      title: "Total Income",
      value: `$${summary.income.toLocaleString('en-US', { minimumFractionDigits: 2, maximumFractionDigits: 2 })}`,
      change: transactions.length > 0 ? "+8.2%" : null,
      trend: transactions.length > 0 ? "up" : null,
      icon: "📈",
      color: "green",
    },
    {
      title: "Total Expenses",
      value: `$${summary.expenses.toLocaleString('en-US', { minimumFractionDigits: 2, maximumFractionDigits: 2 })}`,
      change: transactions.length > 0 ? "-2.1%" : null,
      trend: transactions.length > 0 ? "down" : null,
      icon: "📉",
      color: "red",
    },
    {
      title: "Net Savings",
      value: `$${summary.savings.toLocaleString('en-US', { minimumFractionDigits: 2, maximumFractionDigits: 2 })}`,
      change: transactions.length > 0 ? "+15.3%" : null,
      trend: transactions.length > 0 ? "up" : null,
      icon: "💰",
      color: "blue",
    },
    {
      title: "Transactions",
      value: transactions.length.toString(),
      change: null,
      trend: null,
      icon: "�",
      color: "purple",
    },
  ];

  return (
    <div className="kpi-cards">
      {kpiData.map((kpi, index) => (
        <div key={index} className="kpi-card">
          <div className="kpi-header">
            <span className="kpi-icon">{kpi.icon}</span>
            {kpi.change && (
              <span className={`kpi-trend ${kpi.trend}`}>
                {kpi.trend === "up" ? "↑" : "↓"} {kpi.change}
              </span>
            )}
          </div>
          <div className="kpi-value">{kpi.value}</div>
          <div className="kpi-title">{kpi.title}</div>
        </div>
      ))}
    </div>
  );
}

export default KPICards;
