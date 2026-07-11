import "./Analytics.css";

function TopSpendingCategories({ transactions }) {
  const expenseTransactions = transactions.filter(t => t.amount < 0);

  if (expenseTransactions.length === 0) {
    return (
      <div className="top-categories">
        <div className="section-header">
          <h3 className="section-title">Top Spending Categories</h3>
          <span className="section-badge">This month</span>
        </div>
        <div className="empty-state">
          <div className="empty-state-icon">�️</div>
          <h3 className="empty-state-title">No spending categories</h3>
          <p className="empty-state-description">Add expense transactions to see your top spending categories.</p>
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

  const iconMap = {
    "Food & Dining": "🍔",
    "Transportation": "🚗",
    "Shopping": "🛒",
    "Entertainment": "🎬",
    "Bills & Utilities": "💡",
    "Healthcare": "🏥",
    "Salary": "💰",
    "Freelance": "💼",
    "Investments": "📈",
    "Gifts": "🎁",
    "Refunds": "💸",
    "Education": "�",
    "Other": "📦",
  };

  const categories = Object.entries(categoryTotals)
    .map(([name, amount]) => ({
      name,
      amount,
      percentage: Math.round((amount / totalSpent) * 100),
      icon: iconMap[name] || "📦",
    }))
    .sort((a, b) => b.amount - a.amount)
    .slice(0, 5);

  return (
    <div className="top-categories">
      <div className="section-header">
        <h3 className="section-title">Top Spending Categories</h3>
        <span className="section-badge">This month</span>
      </div>
      <div className="categories-list">
        {categories.map((category, index) => (
          <div key={index} className="category-item">
            <div className="category-info">
              <span className="category-icon">{category.icon}</span>
              <div className="category-details">
                <span className="category-name">{category.name}</span>
                <span className="category-amount">${category.amount.toFixed(2)}</span>
              </div>
            </div>
            <div className="category-progress">
              <div className="progress-bar">
                <div
                  className="progress-fill"
                  style={{ width: `${category.percentage}%` }}
                ></div>
              </div>
              <span className="category-percentage">{category.percentage}%</span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default TopSpendingCategories;
