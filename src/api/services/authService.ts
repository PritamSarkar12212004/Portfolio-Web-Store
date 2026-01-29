import axiosInstance from '../axiosInstance';

// Authentication API calls
export const authService = {
  login: async (credentials: any) => {
    const response = await axiosInstance.post('/auth/login', credentials);
    return response.data;
  },
  
  signup: async (userData: any) => {
    const response = await axiosInstance.post('/auth/signup', userData);
    return response.data;
  },

  logout: () => {
    localStorage.removeItem('token');
  }
};
