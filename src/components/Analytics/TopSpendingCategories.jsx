import "./Analytics.css";

function TopSpendingCategories() {
  const categories = [
    { name: "Food & Dining", amount: 850, percentage: 28, icon: "🍔" },
    { name: "Shopping", amount: 680, percentage: 22, icon: "🛒" },
    { name: "Transportation", amount: 420, percentage: 14, icon: "🚗" },
    { name: "Bills & Utilities", amount: 540, percentage: 18, icon: "💡" },
    { name: "Entertainment", amount: 320, percentage: 10, icon: "🎬" },
  ];

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
                <span className="category-amount">${category.amount}</span>
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
