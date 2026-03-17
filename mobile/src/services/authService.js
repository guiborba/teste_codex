const API_URL = 'http://localhost:3000/api';

let accessToken = null;
let refreshToken = null;

export const mobileAuthService = {
  async login(email, password) {
    const response = await fetch(`${API_URL}/auth/login`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ email, password }),
    });
    const data = await response.json();
    accessToken = data.accessToken;
    refreshToken = data.refreshToken;
    return data;
  },

  async refresh() {
    if (!refreshToken) return null;
    const response = await fetch(`${API_URL}/auth/refresh`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ refreshToken }),
    });
    const data = await response.json();
    accessToken = data.accessToken;
    refreshToken = data.refreshToken;
    return accessToken;
  },

  getAccessToken() {
    return accessToken;
  },
};
