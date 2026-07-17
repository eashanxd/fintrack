import "./Navbar.css";

function Navbar({ currentPage, onNavigate, onLogout }) {
  return (
    <nav className="navbar">
      <div className="navbar-container">
        {/* Logo */}
        <div className="navbar-logo">
          <div className="logo-icon">
            <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
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

        {/* Navigation Links */}
        <div className="navbar-nav">
          <button 
            onClick={() => onNavigate("dashboard")}
            className={`nav-link ${currentPage === "dashboard" ? "nav-link-active" : ""}`}
          >
            Dashboard
          </button>
          <button 
            onClick={() => onNavigate("transactions")}
            className={`nav-link ${currentPage === "transactions" ? "nav-link-active" : ""}`}
          >
            Transactions
          </button>
          <button 
            onClick={() => onNavigate("analytics")}
            className={`nav-link ${currentPage === "analytics" ? "nav-link-active" : ""}`}
          >
            Analytics
          </button>
          <button 
            onClick={() => onNavigate("settings")}
            className={`nav-link ${currentPage === "settings" ? "nav-link-active" : ""}`}
          >
            Settings
          </button>
        </div>

        {/* Search */}
        <div className="navbar-search">
          <svg className="search-icon" width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M7.33333 12.6667C10.2789 12.6667 12.6667 10.2789 12.6667 7.33333C12.6667 4.38781 10.2789 2 7.33333 2C4.38781 2 2 4.38781 2 7.33333C2 10.2789 4.38781 12.6667 7.33333 12.6667Z" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
            <path d="M11 11L14 14" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
          <input type="text" placeholder="Search transactions, cards..." className="search-input" />
        </div>

        {/* Actions */}
        <div className="navbar-actions">
          <button className="action-button action-button-icon" aria-label="Notifications">
            <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M10 2C6.68629 2 4 4.68629 4 8V11.5C4 11.7761 3.77614 12 3.5 12H3C2.44772 12 2 12.4477 2 13V14C2 14.5523 2.44772 15 3 15H17C17.5523 15 18 14.5523 18 14V13C18 12.4477 17.5523 12 17 12H16.5C16.2239 12 16 11.7761 16 11.5V8C16 4.68629 13.3137 2 10 2Z" fill="currentColor"/>
              <path d="M8 17C8 18.1046 8.89543 19 10 19C11.1046 19 12 18.1046 12 17" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
            </svg>
            <span className="notification-badge"></span>
          </button>
          <button className="action-button action-button-icon" aria-label="Help">
            <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
              <circle cx="10" cy="10" r="8" stroke="currentColor" strokeWidth="1.5"/>
              <path d="M10 7V10" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
              <path d="M10 13H10.01" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
            </svg>
          </button>
          <button className="action-button action-button-logout" onClick={onLogout} aria-label="Logout">
            <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M15 10H3M3 10L6 7M3 10L6 13" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
              <path d="M9 5C9 3.89543 9.89543 3 11 3H15C16.1046 3 17 3.89543 17 5V15C17 16.1046 16.1046 17 15 17H11C9.89543 17 9 16.1046 9 15" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
            Logout
          </button>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;