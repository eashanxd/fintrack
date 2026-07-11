import "./Dashboard.css";

function SummaryCard({ title, value, change, trend, icon }) {
  const getIcon = () => {
    switch (icon) {
      case "balance":
        return (
          <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M12 2C6.48 2 2 6.48 2 12C2 17.52 6.48 22 12 22C17.52 22 22 17.52 22 12C22 6.48 17.52 2 12 2ZM13 17H11V15H13V17ZM13 13H11V7H13V13Z" fill="currentColor"/>
          </svg>
        );
      case "income":
        return (
          <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M12 2L2 12H7V22H17V12H22L12 2Z" fill="currentColor"/>
          </svg>
        );
      case "expenses":
        return (
          <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M12 22L22 12H17V2H7V12H2L12 22Z" fill="currentColor"/>
          </svg>
        );
      case "savings":
        return (
          <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M16.5 3C14.76 3 13.09 3.81 12 5.09C10.91 3.81 9.24 3 7.5 3C4.42 3 2 5.42 2 8.5C2 12.28 5.4 15.36 10.55 20.04L12 21.35L13.45 20.03C18.6 15.36 22 12.28 22 8.5C22 5.42 19.58 3 16.5 3ZM12.1 18.55L12 18.65L11.9 18.55C7.14 14.24 4 11.39 4 8.5C4 6.5 5.5 5 7.5 5C9.04 5 10.54 5.99 11.07 7.36H12.93C13.46 5.99 14.96 5 16.5 5C18.5 5 20 6.5 20 8.5C20 11.39 16.86 14.24 12.1 18.55Z" fill="currentColor"/>
          </svg>
        );
      default:
        return null;
    }
  };

  return (
    <div className="summary-card">
      <div className="summary-card-icon">{getIcon()}</div>
      <div className="summary-card-content">
        <p className="summary-card-title">{title}</p>
        <p className="summary-card-value">{value}</p>
        {change && (
          <div className={`summary-card-change summary-card-change-${trend}`}>
            {trend === "up" ? "↑" : "↓"} {change}
          </div>
        )}
      </div>
    </div>
  );
}

export default SummaryCard;
