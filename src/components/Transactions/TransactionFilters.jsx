import "./Transactions.css";

function TransactionFilters() {
  const categories = ["All Categories", "Food & Dining", "Transportation", "Shopping", "Entertainment", "Bills & Utilities", "Income", "Healthcare"];
  const dateRanges = ["All Time", "Today", "This Week", "This Month", "Last Month", "This Year", "Custom"];

  return (
    <div className="transaction-filters">
      <div className="filter-search">
        <svg className="search-icon" width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M8.25 14.25C11.5637 14.25 14.25 11.5637 14.25 8.25C14.25 4.93629 11.5637 2.25 8.25 2.25C4.93629 2.25 2.25 4.93629 2.25 8.25C2.25 11.5637 4.93629 14.25 8.25 14.25Z" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
          <path d="M12.75 12.75L15.75 15.75" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
        </svg>
        <input type="text" placeholder="Search transactions..." className="search-input" />
      </div>
      <div className="filter-group">
        <select className="filter-select">
          {categories.map((category) => (
            <option key={category} value={category}>{category}</option>
          ))}
        </select>
        <select className="filter-select">
          {dateRanges.map((range) => (
            <option key={range} value={range}>{range}</option>
          ))}
        </select>
      </div>
    </div>
  );
}

export default TransactionFilters;
