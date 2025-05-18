import axios from 'axios';
import { API_CONFIG } from '@/app/config/environment';

/**
 * Create a configured axios instance with base URL and default headers
 */
const apiClient = axios.create({
  baseURL: API_CONFIG.BASE_URL,
  headers: {
    'Content-Type': 'application/json',
  }
});

/**
 * Verify if an email is eligible for registration
 * 
 * @param email - The email to verify
 * @param guestType - The type of guest (general or speaker)
 * @param tenantId - The tenant ID
 * @returns Promise resolving to verification result
 */
export const verifyEmail = async (
  email: string, 
  guestType: string = 'general', 
  tenantId: string = API_CONFIG.DEFAULT_TENANT_ID
) => {
  try {
    const response = await apiClient.get(API_CONFIG.ENDPOINTS.VERIFY_EMAIL, {
      params: { email, guest_type: guestType },
      headers: { 'tenant-id': tenantId }
    });
    return response.data;
  } catch (error: any) {
    console.error('Email verification error:', error);
    if (error.response?.data) {
      return error.response.data; // Return the error details from the API
    }
    // Return a generic error if we don't have specific error data
    return { 
      status: 'error',
      error_type: 'system_error',
      message: 'Unable to verify email at this time',
      email: email
    };
  }
};

/**
 * Submit a free ticket registration
 * 
 * @param registrationData - The registration form data
 * @param tenantId - The tenant ID
 * @returns Promise resolving to the registration result
 */
export const registerFreeTicket = async (
  registrationData: any, 
  tenantId: string = API_CONFIG.DEFAULT_TENANT_ID
) => {
  try {
    const response = await apiClient.post(API_CONFIG.ENDPOINTS.FREE_TICKET, registrationData, {
      headers: { 'tenant-id': tenantId }
    });
    return response.data;
  } catch (error: any) {
    console.error('Registration error:', error);
    if (error.response?.data) {
      throw error.response.data;
    }
    throw new Error('An error occurred during registration');
  }
};

export default apiClient; 