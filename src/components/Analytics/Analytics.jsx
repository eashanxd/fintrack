import "./Analytics.css";
import KPICards from "./KPICards";
import IncomeVsExpensesChart from "./IncomeVsExpensesChart";
import ExpenseByCategoryChart from "./ExpenseByCategoryChart";
import WeeklySpendingChart from "./WeeklySpendingChart";
import SavingsTrendChart from "./SavingsTrendChart";
import TopSpendingCategories from "./TopSpendingCategories";
import FinancialInsights from "./FinancialInsights";

function Analytics({ transactions, summary }) {
  const hasData = transactions.length > 0;
  return (
    <div className="analytics-page">
      <div className="analytics-container">
        {/* Page Header */}
        <div className="page-header">
          <div className="page-header-content">
            <h1 className="page-title">Analytics</h1>
            <p className="page-subtitle">
              Track your financial performance with detailed insights and trends
            </p>
          </div>
          <div className="page-header-filters">
            <select className="date-range-select">
              <option value="7d">Last 7 days</option>
              <option value="30d" selected>Last 30 days</option>
              <option value="90d">Last 90 days</option>
              <option value="1y">Last year</option>
              <option value="all">All time</option>
            </select>
            <select className="category-filter">
              <option value="all">All categories</option>
              <option value="income">Income only</option>
              <option value="expense">Expenses only</option>
            </select>
          </div>
        </div>

        {/* KPI Cards */}
        <KPICards summary={summary} transactions={transactions} />

        {/* Charts Grid */}
        {hasData ? (
          <div className="charts-grid">
            {/* Monthly Income vs Expenses */}
            <div className="chart-card chart-card-large">
              <IncomeVsExpensesChart transactions={transactions} />
            </div>

            {/* Expense by Category */}
            <div className="chart-card">
              <ExpenseByCategoryChart transactions={transactions} />
            </div>

            {/* Weekly Spending */}
            <div className="chart-card">
              <WeeklySpendingChart transactions={transactions} />
            </div>

            {/* Savings Trend */}
            <div className="chart-card">
              <SavingsTrendChart transactions={transactions} summary={summary} />
            </div>
          </div>
        ) : (
          <div className="charts-grid">
            <div className="chart-card chart-card-large">
              <div className="empty-state">
                <div className="empty-state-icon">📊</div>
                <h3 className="empty-state-title">No data to analyze</h3>
                <p className="empty-state-description">Add transactions to see your financial analytics and charts.</p>
              </div>
            </div>
          </div>
        )}

        {/* Bottom Section */}
        {hasData ? (
          <div className="analytics-bottom-section">
            {/* Top Spending Categories */}
            <div className="analytics-card">
              <TopSpendingCategories transactions={transactions} />
            </div>

            {/* Financial Insights */}
            <div className="analytics-card">
              <FinancialInsights transactions={transactions} />
            </div>
          </div>
        ) : null}
      </div>
    </div>
  );
}

export default Analytics;
