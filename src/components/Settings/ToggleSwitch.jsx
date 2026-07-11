import "./Settings.css";

function ToggleSwitch({ checked, onChange }) {
  return (
    <button
      className={`toggle-switch ${checked ? "toggle-active" : ""}`}
      onClick={() => onChange(!checked)}
      aria-label="Toggle switch"
    >
      <span className="toggle-slider"></span>
    </button>
  );
}

export default ToggleSwitch;
