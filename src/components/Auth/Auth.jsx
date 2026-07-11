import { useState } from "react";
import "./Auth.css";
import LoginForm from "./LoginForm";
import RegisterForm from "./RegisterForm";

function Auth() {
  const [isLogin, setIsLogin] = useState(true);

  const toggleMode = () => {
    setIsLogin(!isLogin);
  };

  return (
    <div className="auth-page">
      <div className="auth-background">
        <div className="auth-gradient"></div>
        <div className="auth-pattern"></div>
      </div>
      
      <div className="auth-container">
        <div className="auth-card">
          {/* Logo */}
          <div className="auth-logo">
            <div className="logo-icon">
              <svg width="48" height="48" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
                <rect width="32" height="32" rx="8" fill="url(#logo-gradient)"/>
                <path d="M8 16L14 10L20 16L14 22L8 16Z" fill="white" fillOpacity="0.9"/>
                <path d="M14 16L20 10L26 16L20 22L14 16Z" fill="white" fillOpacity="0.6"/>
                <defs>
                  <linearGradient id="logo-gradient" x1="0" y1="0" x2="32" y2="32" gradientUnits="userSpaceOnUse">
                    <stop stopColor="#6366f1"/>
                    <stop offset="1" stopColor="#8b5cf6"/>
                  </linearGradient>
                </defs>
              </svg>
            </div>
            <span className="logo-text">FinTrack</span>
          </div>

          {/* Welcome Message */}
          <div className="auth-header">
            <h1 className="auth-title">
              {isLogin ? "Welcome back" : "Create account"}
            </h1>
            <p className="auth-subtitle">
              {isLogin 
                ? "Enter your credentials to access your account"
                : "Start managing your finances today"}
            </p>
          </div>

          {/* Form */}
          <div className="auth-form-container">
            {isLogin ? (
              <LoginForm onToggleMode={toggleMode} />
            ) : (
              <RegisterForm onToggleMode={toggleMode} />
            )}
          </div>
        </div>

        {/* Side Panel for Desktop */}
        <div className="auth-side-panel">
          <div className="side-panel-content">
            <h2 className="side-panel-title">Take control of your finances</h2>
            <p className="side-panel-description">
              Track expenses, monitor income, and achieve your financial goals with our premium analytics dashboard.
            </p>
            <div className="side-panel-features">
              <div className="feature-item">
                <span className="feature-icon">📊</span>
                <span className="feature-text">Real-time analytics</span>
              </div>
              <div className="feature-item">
                <span className="feature-icon">💳</span>
                <span className="feature-text">Multi-card support</span>
              </div>
              <div className="feature-item">
                <span className="feature-icon">🔒</span>
                <span className="feature-text">Bank-level security</span>
              </div>
              <div className="feature-item">
                <span className="feature-icon">📱</span>
                <span className="feature-text">Cross-platform sync</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Auth;
