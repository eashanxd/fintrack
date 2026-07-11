import "./Analytics.css";

function FinancialInsights() {
  const insights = [
    {
      type: "positive",
      icon: "✨",
      title: "Spending on track",
      description: "Your monthly spending is 12% below budget. Great job maintaining control!",
    },
    {
      type: "warning",
      icon: "⚠️",
      title: "Dining expenses increased",
      description: "Food & Dining spending is up 18% compared to last month. Consider reviewing.",
    },
    {
      type: "info",
      icon: "💡",
      title: "Savings opportunity",
      description: "Switching to annual subscriptions could save you $120/year on entertainment.",
    },
    {
      type: "positive",
      icon: "🎯",
      title: "Goal progress",
      description: "You're 68% of the way to your vacation savings goal. Keep it up!",
    },
  ];

  return (
    <div className="financial-insights">
      <div className="section-header">
        <h3 className="section-title">Financial Insights</h3>
        <span className="section-badge">AI-powered</span>
      </div>
      <div className="insights-list">
        {insights.map((insight, index) => (
          <div key={index} className={`insight-item insight-${insight.type}`}>
            <span className="insight-icon">{insight.icon}</span>
            <div className="insight-content">
              <h4 className="insight-title">{insight.title}</h4>
              <p className="insight-description">{insight.description}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default FinancialInsights;
