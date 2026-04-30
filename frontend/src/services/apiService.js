/**
 * API Service
 * Centralized API calls for the frontend
 */

import axios from 'axios';

const API_URL = process.env.REACT_APP_API_URL || 'http://localhost:5000/api';

// Create axios instance with default config
const apiClient = axios.create({
  baseURL: API_URL,
  headers: {
    'Content-Type': 'application/json'
  }
});

// Health Check
export const checkHealth = async () => {
  try {
    const response = await apiClient.get('/health');
    return response.data;
  } catch (error) {
    console.error('Health check failed:', error);
    throw error;
  }
};

// Submit Contact Form
export const submitContactForm = async (formData) => {
  try {
    const response = await apiClient.post('/contact', formData);
    return response.data;
  } catch (error) {
    console.error('Contact form submission failed:', error);
    throw error;
  }
};

// Get Contact Status
export const getContactStatus = async () => {
  try {
    const response = await apiClient.get('/contact/status');
    return response.data;
  } catch (error) {
    console.error('Failed to get contact status:', error);
    throw error;
  }
};

export default apiClient;
