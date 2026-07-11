import "./Auth.css";

function SocialLoginButtons() {
  const handleGoogleLogin = () => {
    console.log("Google login clicked");
  };

  const handleGitHubLogin = () => {
    console.log("GitHub login clicked");
  };

  return (
    <div className="social-login">
      <button type="button" className="social-btn social-btn-google" onClick={handleGoogleLogin}>
        <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M18.5 10.2C18.5 9.5 18.4 8.8 18.3 8.2H10V11.9H14.7C14.5 13 13.9 13.8 13 14.4V16.8H15.9C17.4 15.4 18.5 13.2 18.5 10.2Z" fill="#4285F4"/>
          <path d="M10 19C12.3 19 14.3 18.1 15.9 16.8L13 14.4C12.1 15 10.9 15.4 10 15.4C7.8 15.4 5.9 13.9 5.2 11.9H2.2V15.3C3.8 17.6 6.7 19 10 19Z" fill="#34A853"/>
          <path d="M5.2 11.9C5 11.3 4.9 10.7 4.9 10C4.9 9.3 5 8.7 5.2 8.1V4.7H2.2C1.5 6.1 1.1 7.5 1.1 9C1.1 10.5 1.5 11.9 2.2 13.3L5.2 11.9Z" fill="#FBBC05"/>
          <path d="M10 4.6C11 4.6 11.9 4.9 12.6 5.5L15.2 2.9C13.6 1.4 11.6 0.5 10 0.5C6.7 0.5 3.8 1.9 2.2 4.3L5.2 8.1C5.9 6.1 7.8 4.6 10 4.6Z" fill="#EA4335"/>
        </svg>
        <span>Continue with Google</span>
      </button>
      <button type="button" className="social-btn social-btn-github" onClick={handleGitHubLogin}>
        <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M10 0C4.477 0 0 4.477 0 10C0 14.42 2.865 18.167 6.839 19.389C7.339 19.477 7.507 19.172 7.507 18.906C7.507 18.666 7.498 18.018 7.494 17.089C4.715 17.708 4.119 15.642 4.119 15.642C3.658 14.466 3.009 14.156 3.009 14.156C2.102 13.521 3.081 13.533 3.081 13.533C4.093 13.608 4.619 14.59 4.619 14.59C5.517 16.125 6.977 15.667 7.529 15.412C7.617 14.681 7.873 14.175 8.156 13.928C5.94 13.679 3.608 12.836 3.608 9.115C3.608 8.063 3.983 7.2 4.572 6.525C4.484 6.275 4.149 5.277 4.651 3.928C4.651 3.928 5.467 3.658 7.484 4.919C8.244 4.699 9.052 4.589 9.86 4.584C10.668 4.589 11.476 4.699 12.236 4.919C14.253 3.658 15.069 3.928 15.069 3.928C15.571 5.277 15.236 6.275 15.148 6.525C15.737 7.2 16.112 8.063 16.112 9.115C16.112 12.846 13.775 13.675 11.549 13.919C11.906 14.228 12.227 14.836 12.227 15.758C12.227 17.089 12.214 18.169 12.214 18.906C12.214 19.175 12.381 19.483 12.889 19.389C16.862 18.165 19.727 14.418 19.727 10C19.727 4.477 15.25 0 10 0Z" fill="currentColor"/>
        </svg>
        <span>Continue with GitHub</span>
      </button>
    </div>
  );
}

export default SocialLoginButtons;
