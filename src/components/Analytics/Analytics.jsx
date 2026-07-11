import "./Analytics.css";
import KPICards from "./KPICards";
import IncomeVsExpensesChart from "./IncomeVsExpensesChart";
import ExpenseByCategoryChart from "./ExpenseByCategoryChart";
import WeeklySpendingChart from "./WeeklySpendingChart";
import SavingsTrendChart from "./SavingsTrendChart";
import TopSpendingCategories from "./TopSpendingCategories";
import FinancialInsights from "./FinancialInsights";

function Analytics({ transactions, summary }) {
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
        <KPICards summary={summary} />

        {/* Charts Grid */}
        <div className="charts-grid">
          {/* Monthly Income vs Expenses */}
          <div className="chart-card chart-card-large">
            <IncomeVsExpensesChart />
          </div>

          {/* Expense by Category */}
          <div className="chart-card">
            <ExpenseByCategoryChart />
          </div>

          {/* Weekly Spending */}
          <div className="chart-card">
            <WeeklySpendingChart />
          </div>

          {/* Savings Trend */}
          <div className="chart-card">
            <SavingsTrendChart />
          </div>
        </div>

        {/* Bottom Section */}
        <div className="analytics-bottom-section">
          {/* Top Spending Categories */}
          <div className="analytics-card">
            <TopSpendingCategories />
          </div>

          {/* Financial Insights */}
          <div className="analytics-card">
            <FinancialInsights />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Analytics;
