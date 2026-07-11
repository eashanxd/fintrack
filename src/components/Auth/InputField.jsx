import "./Auth.css";

function InputField({ label, type, placeholder, value, onChange, required }) {
  return (
    <div className="input-group">
      <label className="input-label">{label}</label>
      <input
        type={type}
        placeholder={placeholder}
        value={value}
        onChange={onChange}
        required={required}
        className="input-field"
      />
    </div>
  );
}

export default InputField;
