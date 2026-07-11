import "./Dashboard.css";
import SummaryCard from "./SummaryCard";
import SpendingOverview from "./SpendingOverview";
import RecentTransactions from "./RecentTransactions";
import BudgetGoals from "./BudgetGoals";

function Dashboard({ transactions, summary }) {
  const today = new Date().toLocaleDateString("en-US", {
    weekday: "long",
    year: "numeric",
    month: "long",
    day: "numeric",
  });

  return (
    <div className="dashboard">
      <div className="dashboard-container">
        {/* Welcome Section */}
        <div className="welcome-section">
          <div className="welcome-content">
            <h1 className="welcome-title">Welcome back, John</h1>
            <p className="welcome-date">{today}</p>
            <p className="welcome-summary">
              Your portfolio is up 12.4% this month. You've saved $2,340 toward your goals.
            </p>
          </div>
          <div className="welcome-actions">
            <button className="btn-secondary">View Reports</button>
          </div>
        </div>

        {/* Summary Cards */}
        <div className="summary-cards">
          <SummaryCard
            title="Total Balance"
            value={`$${summary.totalBalance.toLocaleString('en-US', { minimumFractionDigits: 2, maximumFractionDigits: 2 })}`}
            change="+12.4%"
            trend="up"
            icon="balance"
          />
          <SummaryCard
            title="Income"
            value={`$${summary.income.toLocaleString('en-US', { minimumFractionDigits: 2, maximumFractionDigits: 2 })}`}
            change="+8.2%"
            trend="up"
            icon="income"
          />
          <SummaryCard
            title="Expenses"
            value={`$${summary.expenses.toLocaleString('en-US', { minimumFractionDigits: 2, maximumFractionDigits: 2 })}`}
            change="-2.1%"
            trend="down"
            icon="expenses"
          />
          <SummaryCard
            title="Savings"
            value={`$${summary.savings.toLocaleString('en-US', { minimumFractionDigits: 2, maximumFractionDigits: 2 })}`}
            change="+15.3%"
            trend="up"
            icon="savings"
          />
        </div>

        {/* Main Content Grid */}
        <div className="dashboard-grid">
          {/* Spending Overview */}
          <div className="dashboard-card spending-card">
            <SpendingOverview />
          </div>

          {/* Recent Transactions */}
          <div className="dashboard-card transactions-card">
            <RecentTransactions transactions={transactions} />
          </div>

          {/* Budget Goals */}
          <div className="dashboard-card budget-card">
            <BudgetGoals />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Dashboard;
