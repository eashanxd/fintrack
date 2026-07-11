import "./Analytics.css";

function KPICards({ summary }) {
  const kpiData = [
    {
      title: "Total Income",
      value: `$${summary.income.toLocaleString('en-US', { minimumFractionDigits: 2, maximumFractionDigits: 2 })}`,
      change: "+8.2%",
      trend: "up",
      icon: "📈",
      color: "green",
    },
    {
      title: "Total Expenses",
      value: `$${summary.expenses.toLocaleString('en-US', { minimumFractionDigits: 2, maximumFractionDigits: 2 })}`,
      change: "-2.1%",
      trend: "down",
      icon: "📉",
      color: "red",
    },
    {
      title: "Net Savings",
      value: `$${summary.savings.toLocaleString('en-US', { minimumFractionDigits: 2, maximumFractionDigits: 2 })}`,
      change: "+15.3%",
      trend: "up",
      icon: "💰",
      color: "blue",
    },
    {
      title: "Monthly Growth",
      value: "+12.4%",
      change: "+3.2%",
      trend: "up",
      icon: "🚀",
      color: "purple",
    },
  ];

  return (
    <div className="kpi-cards">
      {kpiData.map((kpi, index) => (
        <div key={index} className="kpi-card">
          <div className="kpi-header">
            <span className="kpi-icon">{kpi.icon}</span>
            <span className={`kpi-trend ${kpi.trend}`}>
              {kpi.trend === "up" ? "↑" : "↓"} {kpi.change}
            </span>
          </div>
          <div className="kpi-value">{kpi.value}</div>
          <div className="kpi-title">{kpi.title}</div>
        </div>
      ))}
    </div>
  );
}

export default KPICards;
