import "./Dashboard.css";

function BudgetGoals() {
  const goals = [
    { name: "Emergency Fund", target: 10000, current: 7500, color: "#6366f1" },
    { name: "Vacation", target: 5000, current: 3200, color: "#8b5cf6" },
    { name: "New Car", target: 25000, current: 8500, color: "#a855f7" },
    { name: "Home Down Payment", target: 50000, current: 18500, color: "#d946ef" },
  ];

  return (
    <div className="budget-goals">
      <div className="card-header">
        <h2 className="card-title">Budget Goals</h2>
        <button className="add-goal-btn">+ Add Goal</button>
      </div>
      <div className="goals-list">
        {goals.map((goal, index) => {
          const percentage = Math.round((goal.current / goal.target) * 100);
          return (
            <div key={index} className="goal-item">
              <div className="goal-header">
                <p className="goal-name">{goal.name}</p>
                <p className="goal-progress">
                  ${goal.current.toLocaleString()} / ${goal.target.toLocaleString()}
                </p>
              </div>
              <div className="goal-bar-container">
                <div
                  className="goal-bar"
                  style={{
                    width: `${percentage}%`,
                    backgroundColor: goal.color,
                  }}
                />
              </div>
              <p className="goal-percentage">{percentage}% complete</p>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default BudgetGoals;
