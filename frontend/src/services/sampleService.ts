// src/services/sampleService.ts
import api from '../utils/api';

// Fetches sample data from the backend
export const getSampleData = async () => {
  const response = await api.get('/sample/hello'); // Corrected
  return response.data;
};

export const runPythonScript = async () => {
  const response = await api.get('/sample/run-python'); // Corrected
  return response.data;
};

