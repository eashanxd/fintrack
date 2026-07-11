const API_BASE_URL = 'http://localhost:5000/api';

/**
 * Register a new user
 * @param {Object} userData - User data (name, email, password)
 * @returns {Promise<Object>} Response data
 */
export const register = async (userData) => {
  try {
    const response = await fetch(`${API_BASE_URL}/auth/register`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(userData),
    });

    const data = await response.json();
    return data;
  } catch (error) {
    console.error('Register API error:', error);
    throw error;
  }
};

/**
 * Login user
 * @param {Object} credentials - User credentials (email, password)
 * @returns {Promise<Object>} Response data
 */
export const login = async (credentials) => {
  try {
    const response = await fetch(`${API_BASE_URL}/auth/login`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(credentials),
    });

    const data = await response.json();
    return data;
  } catch (error) {
    console.error('Login API error:', error);
    throw error;
  }
};

/**
 * Store user in localStorage
 * @param {Object} user - User object
 */
export const storeUser = (user) => {
  localStorage.setItem('currentUser', JSON.stringify(user));
};

/**
 * Get user from localStorage
 * @returns {Object|null} User object or null
 */
export const getUser = () => {
  const userStr = localStorage.getItem('currentUser');
  if (userStr) {
    try {
      return JSON.parse(userStr);
    } catch (error) {
      console.error('Error parsing user from localStorage:', error);
      return null;
    }
  }
  return null;
};

/**
 * Remove user from localStorage
 */
export const removeUser = () => {
  localStorage.removeItem('currentUser');
};

/**
 * Check if user is authenticated
 * @returns {boolean}
 */
export const isAuthenticated = () => {
  return getUser() !== null;
};
