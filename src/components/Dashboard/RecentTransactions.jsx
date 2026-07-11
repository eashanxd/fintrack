import "./Dashboard.css";

function RecentTransactions({ transactions }) {
  return (
    <div className="recent-transactions">
      <div className="card-header">
        <h2 className="card-title">Recent Transactions</h2>
        <button className="view-all-btn">View All</button>
      </div>
      <div className="transactions-list">
        {transactions.map((transaction) => (
          <div key={transaction.id} className="transaction-item">
            <div className="transaction-icon">{transaction.icon}</div>
            <div className="transaction-details">
              <p className="transaction-name">{transaction.name}</p>
              <p className="transaction-category">{transaction.category}</p>
            </div>
            <div className="transaction-meta">
              <p
                className={`transaction-amount ${
                  transaction.amount > 0 ? "positive" : "negative"
                }`}
              >
                {transaction.amount > 0 ? "+" : ""}
                ${Math.abs(transaction.amount).toFixed(2)}
              </p>
              <p className="transaction-date">{transaction.date}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default RecentTransactions;
