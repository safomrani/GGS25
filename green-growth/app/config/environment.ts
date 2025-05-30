/**
 * Environment configuration
 * 
 * This file provides centralized configuration for different environments.
 * Use this to switch between development, staging, and production settings.
 */

// External API configuration
export const API_CONFIG = {
  // Base URL for the external API
 BASE_URL: process.env.NEXT_PUBLIC_API_BASE_URL || "https://old-working-eventec-passapp-513d1b1b9423.herokuapp.com",
 //BASE_URL: process.env.NEXT_PUBLIC_API_BASE_URL || "http://localhost:8000",
  
  // Default tenant ID
  DEFAULT_TENANT_ID: process.env.NEXT_PUBLIC_TENANT_ID || "GGS25",
  
  // Default venue ID for ticket registration
  DEFAULT_VENUE_ID: process.env.NEXT_PUBLIC_VENUE_ID || "682a45147f1ef02c30d8d907",
  
  // Default ticket tier ID for registration
  DEFAULT_TICKET_TIER_ID: process.env.NEXT_PUBLIC_TICKET_TIER_ID || "682a45147f1ef02c30d8d908",
  
  // Email template IDs
  EMAIL_TEMPLATE_IDS: {
    GENERAL_REGISTRATION: process.env.NEXT_PUBLIC_GENERAL_EMAIL_TEMPLATE_ID || "682a3232f4455d30a5fb428d",
    SPEAKER_REGISTRATION: process.env.NEXT_PUBLIC_SPEAKER_EMAIL_TEMPLATE_ID || "682a3232f4455d30a5fb428d"
  },
  
  // Endpoints
  ENDPOINTS: {
    VERIFY_EMAIL: "/api/v1/verify-email-json",
    FREE_TICKET: "/api/v1/orders/free-ticket"
  }
};

// UI theme configuration
export const THEME = {
  colors: {
    primaryGreen: "#0A9B7F",
    secondaryGreen: "#088973",
    primaryRed: "#D13239",
    primaryGray: "#3B3B3B",
    lightBg: "#E9F9F5"
  }
};

// Contact information
export const CONTACT = {
  generalEmail: "ggsummit@hivos.org",
  speakerEmail: "ggsummit@hivos.org" 
}; 