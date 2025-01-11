// src/utils/api.ts
import axios from 'axios';

const api = axios.create({
  baseURL: import.meta.env.VITE_API_URL,
});

// Log the baseURL for debugging
console.log('API Base URL:', api.defaults.baseURL);

export default api;
