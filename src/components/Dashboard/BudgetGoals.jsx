import "./Dashboard.css";

function BudgetGoals() {
  return (
    <div className="budget-goals">
      <div className="card-header">
        <h2 className="card-title">Budget Goals</h2>
        <button className="add-goal-btn">+ Add Goal</button>
      </div>
      <div className="empty-state">
        <div className="empty-state-icon">🎯</div>
        <h3 className="empty-state-title">No budget goals yet</h3>
        <p className="empty-state-description">Create your first savings goal to track your progress.</p>
      </div>
    </div>
  );
}

export default BudgetGoals;
