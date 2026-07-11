import { useState, useEffect } from "react";
import "./Settings.css";
import SettingsSection from "./SettingsSection";
import ToggleSwitch from "./ToggleSwitch";

function Settings() {
  const [settings, setSettings] = useState({
    // Profile
    name: "John Doe",
    email: "john.doe@example.com",
    currency: "USD",
    language: "English",
    timeZone: "UTC-5",
    
    // Appearance
    darkMode: true,
    
    // Notifications
    emailNotifications: true,
    pushNotifications: false,
    budgetAlerts: true,
    
    // Preferences
    autoCategorize: true,
    showBalance: true,
    compactView: false,
  });

  const [hasChanges, setHasChanges] = useState(false);

  // Load settings from Local Storage on mount
  useEffect(() => {
    const savedSettings = localStorage.getItem("fintrack-settings");
    if (savedSettings) {
      setSettings(JSON.parse(savedSettings));
    }
  }, []);

  // Save settings to Local Storage whenever they change
  useEffect(() => {
    localStorage.setItem("fintrack-settings", JSON.stringify(settings));
    setHasChanges(true);
  }, [settings]);

  const handleSettingChange = (key, value) => {
    setSettings((prev) => ({
      ...prev,
      [key]: value,
    }));
  };

  const handleSaveChanges = () => {
    localStorage.setItem("fintrack-settings", JSON.stringify(settings));
    setHasChanges(false);
    alert("Settings saved successfully!");
  };

  const handleResetToDefault = () => {
    const defaultSettings = {
      name: "John Doe",
      email: "john.doe@example.com",
      currency: "USD",
      language: "English",
      timeZone: "UTC-5",
      darkMode: true,
      emailNotifications: true,
      pushNotifications: false,
      budgetAlerts: true,
      autoCategorize: true,
      showBalance: true,
      compactView: false,
    };
    setSettings(defaultSettings);
    setHasChanges(false);
  };

  const handleChangePassword = () => {
    alert("Change password modal would open here");
  };

  const handleDeleteAccount = () => {
    if (confirm("Are you sure you want to delete your account? This action cannot be undone.")) {
      alert("Account deletion would be processed here");
    }
  };

  return (
    <div className="settings-page">
      <div className="settings-container">
        {/* Page Header */}
        <div className="page-header">
          <div className="page-header-content">
            <h1 className="page-title">Settings</h1>
            <p className="page-subtitle">
              Manage your account preferences and application settings
            </p>
          </div>
          <div className="page-header-actions">
            <button className="btn-secondary" onClick={handleResetToDefault}>
              Reset to Default
            </button>
            <button className="btn-primary" onClick={handleSaveChanges} disabled={!hasChanges}>
              Save Changes
            </button>
          </div>
        </div>

        {/* Settings Sections */}
        <div className="settings-grid">
          {/* Profile Section */}
          <SettingsSection title="Profile" icon="👤">
            <div className="settings-form">
              <div className="form-group">
                <label className="form-label">Profile Picture</label>
                <div className="profile-picture-section">
                  <div className="profile-avatar">
                    <span>JD</span>
                  </div>
                  <button className="btn-upload">Upload New</button>
                </div>
              </div>
              <div className="form-group">
                <label className="form-label">Full Name</label>
                <input
                  type="text"
                  value={settings.name}
                  onChange={(e) => handleSettingChange("name", e.target.value)}
                  className="form-input"
                />
              </div>
              <div className="form-group">
                <label className="form-label">Email Address</label>
                <input
                  type="email"
                  value={settings.email}
                  onChange={(e) => handleSettingChange("email", e.target.value)}
                  className="form-input"
                />
              </div>
            </div>
          </SettingsSection>

          {/* Appearance Section */}
          <SettingsSection title="Appearance" icon="🎨">
            <div className="settings-form">
              <div className="setting-item">
                <div className="setting-info">
                  <span className="setting-label">Dark Mode</span>
                  <span className="setting-description">Use dark theme across the application</span>
                </div>
                <ToggleSwitch
                  checked={settings.darkMode}
                  onChange={(checked) => handleSettingChange("darkMode", checked)}
                />
              </div>
            </div>
          </SettingsSection>

          {/* Notifications Section */}
          <SettingsSection title="Notifications" icon="🔔">
            <div className="settings-form">
              <div className="setting-item">
                <div className="setting-info">
                  <span className="setting-label">Email Notifications</span>
                  <span className="setting-description">Receive transaction alerts via email</span>
                </div>
                <ToggleSwitch
                  checked={settings.emailNotifications}
                  onChange={(checked) => handleSettingChange("emailNotifications", checked)}
                />
              </div>
              <div className="setting-item">
                <div className="setting-info">
                  <span className="setting-label">Push Notifications</span>
                  <span className="setting-description">Enable browser push notifications</span>
                </div>
                <ToggleSwitch
                  checked={settings.pushNotifications}
                  onChange={(checked) => handleSettingChange("pushNotifications", checked)}
                />
              </div>
              <div className="setting-item">
                <div className="setting-info">
                  <span className="setting-label">Budget Alerts</span>
                  <span className="setting-description">Alert when approaching budget limits</span>
                </div>
                <ToggleSwitch
                  checked={settings.budgetAlerts}
                  onChange={(checked) => handleSettingChange("budgetAlerts", checked)}
                />
              </div>
            </div>
          </SettingsSection>

          {/* Preferences Section */}
          <SettingsSection title="Preferences" icon="⚙️">
            <div className="settings-form">
              <div className="form-group">
                <label className="form-label">Currency</label>
                <select
                  value={settings.currency}
                  onChange={(e) => handleSettingChange("currency", e.target.value)}
                  className="form-select"
                >
                  <option value="USD">USD - US Dollar</option>
                  <option value="EUR">EUR - Euro</option>
                  <option value="GBP">GBP - British Pound</option>
                  <option value="JPY">JPY - Japanese Yen</option>
                  <option value="CAD">CAD - Canadian Dollar</option>
                  <option value="AUD">AUD - Australian Dollar</option>
                </select>
              </div>
              <div className="form-group">
                <label className="form-label">Language</label>
                <select
                  value={settings.language}
                  onChange={(e) => handleSettingChange("language", e.target.value)}
                  className="form-select"
                >
                  <option value="English">English</option>
                  <option value="Spanish">Spanish</option>
                  <option value="French">French</option>
                  <option value="German">German</option>
                  <option value="Japanese">Japanese</option>
                </select>
              </div>
              <div className="form-group">
                <label className="form-label">Time Zone</label>
                <select
                  value={settings.timeZone}
                  onChange={(e) => handleSettingChange("timeZone", e.target.value)}
                  className="form-select"
                >
                  <option value="UTC-8">UTC-8 (Pacific Time)</option>
                  <option value="UTC-5">UTC-5 (Eastern Time)</option>
                  <option value="UTC+0">UTC+0 (GMT)</option>
                  <option value="UTC+1">UTC+1 (Central European)</option>
                  <option value="UTC+8">UTC+8 (Singapore)</option>
                </select>
              </div>
              <div className="setting-item">
                <div className="setting-info">
                  <span className="setting-label">Auto-categorize Transactions</span>
                  <span className="setting-description">Automatically categorize new transactions</span>
                </div>
                <ToggleSwitch
                  checked={settings.autoCategorize}
                  onChange={(checked) => handleSettingChange("autoCategorize", checked)}
                />
              </div>
              <div className="setting-item">
                <div className="setting-info">
                  <span className="setting-label">Show Balance</span>
                  <span className="setting-description">Display account balance on dashboard</span>
                </div>
                <ToggleSwitch
                  checked={settings.showBalance}
                  onChange={(checked) => handleSettingChange("showBalance", checked)}
                />
              </div>
              <div className="setting-item">
                <div className="setting-info">
                  <span className="setting-label">Compact View</span>
                  <span className="setting-description">Use compact layout for transactions</span>
                </div>
                <ToggleSwitch
                  checked={settings.compactView}
                  onChange={(checked) => handleSettingChange("compactView", checked)}
                />
              </div>
            </div>
          </SettingsSection>

          {/* Security Section */}
          <SettingsSection title="Security" icon="🔒">
            <div className="settings-form">
              <div className="form-group">
                <label className="form-label">Password</label>
                <div className="password-field">
                  <input type="password" value="••••••••" disabled className="form-input" />
                  <button className="btn-change-password" onClick={handleChangePassword}>
                    Change Password
                  </button>
                </div>
              </div>
              <div className="security-actions">
                <button className="btn-danger-outline" onClick={handleDeleteAccount}>
                  Delete Account
                </button>
              </div>
            </div>
          </SettingsSection>

          {/* About Section */}
          <SettingsSection title="About" icon="ℹ️">
            <div className="settings-form">
              <div className="about-info">
                <div className="about-item">
                  <span className="about-label">Version</span>
                  <span className="about-value">1.0.0</span>
                </div>
                <div className="about-item">
                  <span className="about-label">Build</span>
                  <span className="about-value">2024.07.11</span>
                </div>
                <div className="about-item">
                  <span className="about-label">License</span>
                  <span className="about-value">MIT License</span>
                </div>
              </div>
              <div className="about-links">
                <a href="#" className="about-link">Privacy Policy</a>
                <a href="#" className="about-link">Terms of Service</a>
                <a href="#" className="about-link">Support</a>
              </div>
            </div>
          </SettingsSection>
        </div>
      </div>
    </div>
  );
}

export default Settings;
