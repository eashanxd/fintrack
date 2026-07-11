import "./Settings.css";

function SettingsSection({ title, icon, children }) {
  return (
    <div className="settings-section">
      <div className="section-header">
        <span className="section-icon">{icon}</span>
        <h3 className="section-title">{title}</h3>
      </div>
      <div className="section-content">
        {children}
      </div>
    </div>
  );
}

export default SettingsSection;
