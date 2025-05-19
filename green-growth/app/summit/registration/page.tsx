"use client";

import { useState, useEffect, Suspense } from "react";
import Image from "next/image";
import { useSearchParams } from "next/navigation";
import SummitNavbar from "@/app/components/SummitNavbar";
import { verifyEmail, registerFreeTicket } from "@/app/api/client";
import { API_CONFIG, THEME, CONTACT } from "@/app/config/environment";
import { karla } from "@/app/components/fonts";

// UI theme colors from environment config
const colors = THEME.colors;

// Loading component for Suspense
function RegistrationLoading() {
  return (
    <div className="flex justify-center items-center min-h-screen">
      <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-green-500"></div>
      <p className="ml-3 text-lg">Loading registration...</p>
    </div>
  );
}

function RegistrationContent() {
  const searchParams = useSearchParams();
  const emailParam = searchParams.get("email");
  const tenantIdParam = searchParams.get("tenant_id");
  
  // Email verification state
  const [isEmailVerified, setIsEmailVerified] = useState(false);
  const [isVerifyingEmail, setIsVerifyingEmail] = useState(false);
  const [verificationData, setVerificationData] = useState<any>(null);

  // Form state
  const [formData, setFormData] = useState({
    email: emailParam || "",
    firstName: "",
    lastName: "",
    city: "",
    gender: "",
    organization: "",
    organizationName: "",
    organizationOther: "",
    jobTitle: "",
    interests: "",
    interestsOther: "",
    photoConsent: false,
    emailTicket: true,
    tenantId: tenantIdParam || API_CONFIG.DEFAULT_TENANT_ID,
    venueId: API_CONFIG.DEFAULT_VENUE_ID,
    ticketTierId: API_CONFIG.DEFAULT_TICKET_TIER_ID,
  });

  // UI state
  const [showOrgOther, setShowOrgOther] = useState(false);
  const [showInterestsOther, setShowInterestsOther] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [formSubmitted, setFormSubmitted] = useState(false);
  const [resultData, setResultData] = useState<any>(null);
  const [error, setError] = useState<string | null>(null);

  // Check if email is valid against backend when component loads
  useEffect(() => {
    if (emailParam) {
      verifyEmailWithBackend(emailParam);
    }
  }, [emailParam]);

  // Verify email against backend
  const verifyEmailWithBackend = async (email: string) => {
    setIsVerifyingEmail(true);
    setError(null);
    
    try {
      const result = await verifyEmail(email, 'general', tenantIdParam || API_CONFIG.DEFAULT_TENANT_ID);
      
      // Handle the response based on API documentation
      if (result.status === 'success' && result.can_claim_ticket) {
        setIsEmailVerified(true);
        setVerificationData(result);
        
        // Update venue and ticket tier IDs if they're provided
        if (result.venue_id && result.ticket_tier_id) {
          setFormData(prev => ({
            ...prev,
            venueId: result.venue_id,
            ticketTierId: result.ticket_tier_id
          }));
        }
      } else {
        setIsEmailVerified(false);
        setError(result.message || "Email address is not eligible for registration.");
      }
    } catch (error: any) {
      console.error("Email verification error:", error);
      setIsEmailVerified(false);
      setError("Failed to verify your email. Please try again later.");
    } finally {
      setIsVerifyingEmail(false);
    }
  };

  // Update dependent fields when form values change
  useEffect(() => {
    setShowOrgOther(formData.organization === "Other");
    setShowInterestsOther(formData.interests === "Other");
  }, [formData.organization, formData.interests]);

  // Handle form input changes
  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    const { id, value, type } = e.target;
    
    if (type === "checkbox") {
      const checked = (e.target as HTMLInputElement).checked;
      setFormData((prev) => ({ ...prev, [id]: checked }));
    } else {
      setFormData((prev) => ({ ...prev, [id]: value }));
    }
  };

  // Form validation
  const validateForm = () => {
    if (!formData.email) {
      showError('Email is required');
      return false;
    }
    
    if (!isEmailVerified) {
      showError('The email address is not verified');
      return false;
    }
    
    if (!formData.firstName) {
      showError('First Name is required');
      return false;
    }
    
    if (!formData.lastName) {
      showError('Last Name is required');
      return false;
    }
    
    if (!formData.organizationName) {
      showError('Organization Name is required');
      return false;
    }
    
    if (!formData.jobTitle) {
      showError('Position/Job Title is required');
      return false;
    }
    
    return true;
  };

  const showError = (message: string) => {
    window.alert(message);
  };

  // Handle form submission
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!validateForm()) {
      return;
    }
    
    setIsSubmitting(true);
    setError(null);

    try {
      // Prepare the data for submission
      const requestData = {
        email: formData.email,
        customer: {
          name: `${formData.firstName} ${formData.lastName}`,
          email: formData.email,
        },
        venue_id: formData.venueId,
        ticket_tier_id: formData.ticketTierId,
        email_ticket: formData.emailTicket,
        email_template_id: API_CONFIG.EMAIL_TEMPLATE_IDS.GENERAL_REGISTRATION,
        organization_name: formData.organizationName,
        organization: formData.organization === "Other" ? formData.organizationOther : formData.organization,
        job_title: formData.jobTitle,
        photo_consent: formData.photoConsent,
        interests: formData.interests === "Other" ? formData.interestsOther : formData.interests,
        city: formData.city,
        gender: formData.gender,
      };

      // Use our API client to submit registration
      const result = await registerFreeTicket(requestData, formData.tenantId);
      setResultData(result);
      setFormSubmitted(true);
    } catch (error: any) {
      console.error("Registration error:", error);
      setError(
        error.detail || 
        error.message || 
        "An error occurred during registration"
      );
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="bg-white min-h-screen" style={{ fontFamily: "'Segoe UI', Tahoma, Geneva, Verdana, sans-serif" }}>
      {/* Header */}
      <SummitNavbar activeSummit="summit25" onToggle={() => {}} hideToggle={true} />
      
      {/* Form Section */}
      <div className="py-12 md:py-16 relative overflow-hidden" style={{ backgroundColor: colors.lightBg }}>
        <div className="container mx-auto px-4 relative z-10" style={{ maxWidth: '960px' }}>
          {/* Form Container */}
          <div className="bg-white rounded-xl shadow-lg p-6 md:p-8" style={{ boxShadow: '0 5px 20px rgba(0,0,0,0.1)' }}>
            <h1 className="text-2xl md:text-3xl font-bold mb-6 pb-3 border-b-2" style={{ color: colors.primaryGreen, borderColor: colors.primaryGreen }}>
              Green Growth Summit 2025 - Secure Your Spot!
            </h1>
            
            <p className="mb-4">Greetings,</p>
            
            <p className="mb-4">
              You're invited to the second edition of the <span className="underline"><a href="https://ggsummit.me/" target="_blank" style={{ color: 'inherit' }}>Green Growth Summit</a></span>, taking place on <strong>June 16, 2025</strong> at the <strong className="underline"><a href="https://sofitel.accor.com/en/hotels/C3J2.html" target="_blank" style={{ color: 'inherit' }}>Sofitel Cairo Downtown Nile</a></strong>.
            </p>
            
            <p className="mb-4">
              Convened by <a href="https://hivos.org/" target="_blank" style={{ color: 'inherit' }} className="underline">Hivos</a> under the theme "Unlocking Solutions and Innovative Finance," this year's summit will focus on accelerating the green transition in the MENA region. Connect with leading voices from across the green economy startups, investors, donors, and policymakers for a day of inspiration, networking, and action. <span className="underline">Kindly note that this invitation is non-transferable.</span>
            </p>
            
            <p className="mb-6">
              Kindly complete the form below to confirm your participation and receive your ticket.
            </p>

            {isVerifyingEmail && (
              <div className="flex justify-center items-center py-8">
                <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-green-500"></div>
                <p className="ml-3 text-lg">Verifying your invitation...</p>
              </div>
            )}

            {!isVerifyingEmail && !isEmailVerified && (
              <div className="bg-red-50 border-l-4 border-red-500 p-4 mb-6">
                <div className="flex">
                  <div className="flex-shrink-0">
                    <svg className="h-5 w-5 text-red-500" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM8.707 7.293a1 1 0 00-1.414 1.414L8.586 10l-1.293 1.293a1 1 0 101.414 1.414L10 11.414l1.293 1.293a1 1 0 001.414-1.414L11.414 10l1.293-1.293a1 1 0 00-1.414-1.414L10 8.586 8.707 7.293z" clipRule="evenodd" />
                    </svg>
                  </div>
                  <div className="ml-3">
                    <h3 className="text-sm font-medium text-red-800">Invalid Invitation</h3>
                    <div className="mt-2 text-sm text-red-700">
                      <p>{error || "The email in your invitation link is not recognized. Please ensure you're using the exact link sent to your email."}</p>
                      <p>If you believe this is an error, please contact us at <a href={`mailto:${CONTACT.generalEmail}`} className="underline">{CONTACT.generalEmail}</a></p>
                    </div>
                  </div>
                </div>
              </div>
            )}

            {!isVerifyingEmail && isEmailVerified && !formSubmitted && (
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid md:grid-cols-2 gap-4">
                  <div className="md:col-span-1">
                    <label htmlFor="email" className="block mb-1 font-medium">
                      Email Address *
                    </label>
                    <input
                      type="email"
                      id="email"
                      className="w-full px-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:border-transparent focus:ring-[#0A9B7F] bg-gray-100"
                      style={{ 
                        borderRadius: '6px',
                        padding: '12px 15px',
                        border: '1px solid #ddd'
                      }}
                      value={formData.email}
                      onChange={handleChange}
                      readOnly={true}
                      required
                    />
                    <small className="text-gray-500">Verified email from your invitation</small>
                  </div>
                </div>

                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <label htmlFor="firstName" className="block mb-1 font-medium">
                      First Name *
                    </label>
                    <input
                      type="text"
                      id="firstName"
                      className="w-full px-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:border-transparent focus:ring-[#0A9B7F]"
                      style={{ 
                        borderRadius: '6px',
                        padding: '12px 15px',
                        border: '1px solid #ddd' 
                      }}
                      value={formData.firstName}
                      onChange={handleChange}
                      required
                    />
                  </div>
                  <div>
                    <label htmlFor="lastName" className="block mb-1 font-medium">
                      Last Name *
                    </label>
                    <input
                      type="text"
                      id="lastName"
                      className="w-full px-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:border-transparent focus:ring-[#0A9B7F]"
                      style={{ 
                        borderRadius: '6px',
                        padding: '12px 15px',
                        border: '1px solid #ddd' 
                      }}
                      value={formData.lastName}
                      onChange={handleChange}
                      required
                    />
                  </div>
                </div>

                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <label htmlFor="gender" className="form-label block mb-1 font-medium">
                      Gender
                    </label>
                    <select
                      id="gender"
                      className="w-full px-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:border-transparent focus:ring-[#0A9B7F]"
                      style={{ 
                        borderRadius: '6px',
                        padding: '12px 15px',
                        border: '1px solid #ddd' 
                      }}
                      value={formData.gender}
                      onChange={handleChange}
                    >
                      <option value="">Select an option</option>
                      <option value="Male">Male</option>
                      <option value="Female">Female</option>
                    </select>
                  </div>
                  <div>
                    <label htmlFor="city" className="form-label block mb-1 font-medium">
                      City
                    </label>
                    <input
                      type="text"
                      id="city"
                      className="w-full px-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:border-transparent focus:ring-[#0A9B7F]"
                      style={{ 
                        borderRadius: '6px',
                        padding: '12px 15px',
                        border: '1px solid #ddd' 
                      }}
                      value={formData.city}
                      onChange={handleChange}
                    />
                  </div>
                </div>

                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <label htmlFor="jobTitle" className="block mb-1 font-medium">
                      Position/Job Title *
                    </label>
                    <input
                      type="text"
                      id="jobTitle"
                      className="w-full px-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:border-transparent focus:ring-[#0A9B7F]"
                      style={{ 
                        borderRadius: '6px',
                        padding: '12px 15px',
                        border: '1px solid #ddd' 
                      }}
                      value={formData.jobTitle}
                      onChange={handleChange}
                      required
                    />
                  </div>
                  <div>
                    <label htmlFor="organizationName" className="block mb-1 font-medium">
                      Organization Name *
                    </label>
                    <input
                      type="text"
                      id="organizationName"
                      className="w-full px-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:border-transparent focus:ring-[#0A9B7F]"
                      style={{ 
                        borderRadius: '6px',
                        padding: '12px 15px',
                        border: '1px solid #ddd' 
                      }}
                      value={formData.organizationName}
                      onChange={handleChange}
                      required
                    />
                  </div>
                </div>

                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <label htmlFor="organization" className="block mb-1 font-medium">
                      Organization Type
                    </label>
                    <select
                      id="organization"
                      className="w-full px-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:border-transparent focus:ring-[#0A9B7F]"
                      style={{ 
                        borderRadius: '6px',
                        padding: '12px 15px',
                        border: '1px solid #ddd' 
                      }}
                      value={formData.organization}
                      onChange={handleChange}
                    >
                      <option value="">Select an option</option>
                      <option value="Public Sector / Government">Public Sector / Government (e.g. ministries, public agencies)</option>
                      <option value="Financial Institution / Investor">Financial Institution / Investor (e.g. banks, VCs, DFIs, insurance firms)</option>
                      <option value="Private Sector">Private Sector (e.g. startups, SMEs, corporates, consultants)</option>
                      <option value="Civil Society / NGOs / Community Organizations">Civil Society / NGOs / Community Organizations</option>
                      <option value="International Organizations / Donors">International Organizations / Donors (e.g. UN agencies, bilateral/multilateral donors)</option>
                      <option value="Academic / Research Institutions">Academic / Research Institutions (e.g. universities, think tanks, labs)</option>
                      <option value="Media and Communications">Media and Communications</option>
                      <option value="Other">Other (please specify)</option>
                    </select>
                  </div>
                  {showOrgOther && (
                    <div>
                      <label htmlFor="organizationOther" className="block mb-1 font-medium">
                        Please specify
                      </label>
                      <input
                        type="text"
                        id="organizationOther"
                        className="w-full px-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:border-transparent focus:ring-[#0A9B7F]"
                        style={{ 
                          borderRadius: '6px',
                          padding: '12px 15px',
                          border: '1px solid #ddd' 
                        }}
                        value={formData.organizationOther}
                        onChange={handleChange}
                      />
                    </div>
                  )}
                </div>

                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <label htmlFor="interests" className="block mb-1 font-medium">
                      What are you most looking forward to at the Green Growth Summit?
                    </label>
                    <select
                      id="interests"
                      className="w-full px-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:border-transparent focus:ring-[#0A9B7F]"
                      style={{ 
                        borderRadius: '6px',
                        padding: '12px 15px',
                        border: '1px solid #ddd' 
                      }}
                      value={formData.interests}
                      onChange={handleChange}
                    >
                      <option value="">Select an option</option>
                      <option value="Connecting with potential partners or collaborators">Connecting with potential partners or collaborators</option>
                      <option value="Learning about green trends and innovations in the region">Learning about green trends and innovations in the region</option>
                      <option value="Exploring funding or investment opportunities">Exploring funding or investment opportunities</option>
                      <option value="Identifying potential startups for investment">Identifying potential startups for investment</option>
                      <option value="Gaining practical tools or knowledge for my work">Gaining practical tools or knowledge for my work</option>
                      <option value="Showcasing my organization's work or experience">Showcasing my organization's work or experience</option>
                      <option value="Understanding policy developments and government priorities">Understanding policy developments and government priorities</option>
                      <option value="Engaging in open dialogue with diverse ecosystem actors">Engaging in open dialogue with diverse ecosystem actors</option>
                      <option value="Other">Other (please specify)</option>
                    </select>
                  </div>
                  {showInterestsOther && (
                    <div>
                      <label htmlFor="interestsOther" className="block mb-1 font-medium">
                        Please specify
                      </label>
                      <input
                        type="text"
                        id="interestsOther"
                        className="w-full px-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:border-transparent focus:ring-[#0A9B7F]"
                        style={{ 
                          borderRadius: '6px',
                          padding: '12px 15px',
                          border: '1px solid #ddd' 
                        }}
                        value={formData.interestsOther}
                        onChange={handleChange}
                      />
                    </div>
                  )}
                </div>

                <div className="space-y-4">
                  <div className="flex items-start">
                    <input
                      type="checkbox"
                      id="photoConsent"
                      className="mt-1 h-4 w-4 border-gray-300 rounded focus:ring-2 focus:ring-[#0A9B7F]"
                      checked={formData.photoConsent}
                      onChange={handleChange}
                    />
                    <label htmlFor="photoConsent" className="ml-2 block text-sm">
                      I hereby consent to being photographed and recorded on video during the event. I understand that these visuals may be used for promotional purposes, including but not limited to social media, Hivos website, and other communication materials
                    </label>
                  </div>

                  <div className="flex items-start">
                    <input
                      type="checkbox"
                      id="emailTicket"
                      className="mt-1 h-4 w-4 border-gray-300 rounded focus:ring-2 focus:ring-[#0A9B7F]"
                      checked={formData.emailTicket}
                      onChange={handleChange}
                    />
                    <label htmlFor="emailTicket" className="ml-2 block text-sm">
                      Send ticket confirmation to my email
                    </label>
                  </div>
                </div>

                <div className="mt-2">
                  <p className="italic text-gray-600 mb-4">Fields marked with * are mandatory</p>
                </div>

                <div className="mt-6">
                  <button
                    type="submit"
                    className="px-6 py-3 text-white font-semibold rounded-md transition-colors duration-200 flex items-center hover:bg-[#088973]"
                    style={{ 
                      backgroundColor: colors.primaryGreen, 
                      borderColor: colors.primaryGreen,
                      padding: '12px 24px',
                      fontWeight: 600,
                      borderRadius: '6px'
                    }}
                    disabled={isSubmitting}
                  >
                    {isSubmitting && (
                      <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                        <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                        <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                      </svg>
                    )}
                    Complete Registration
                  </button>
                </div>

                <div className="mt-2">
                  <small className="text-gray-500 italic">
                    Please note that this information will be collected for the purpose of organizing the event and will be deleted afterward, in accordance with the EU General Data Protection Regulation (GDPR).
                  </small>
                </div>
              </form>
            )}

            {formSubmitted && (
              <div className="bg-white rounded-xl overflow-hidden">
                <div className="bg-[#0A9B7F] text-white p-4 font-semibold text-lg">
                  Registration Result
                </div>
                <div className="p-6">
                  {error ? (
                    <div className="bg-red-50 border-l-4 border-red-500 p-4 mb-6">
                      <div className="flex">
                        <div className="flex-shrink-0">
                          <svg className="h-5 w-5 text-red-500" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
                            <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM8.707 7.293a1 1 0 00-1.414 1.414L8.586 10l-1.293 1.293a1 1 0 101.414 1.414L10 11.414l1.293 1.293a1 1 0 001.414-1.414L11.414 10l1.293-1.293a1 1 0 00-1.414-1.414L10 8.586 8.707 7.293z" clipRule="evenodd" />
                          </svg>
                        </div>
                        <div className="ml-3">
                          <h3 className="text-sm font-medium text-red-800">Registration Error</h3>
                          <div className="mt-2 text-sm text-red-700">
                            <p>{error}</p>
                            <p>We're sorry — it looks like the email you entered doesn't match the one we used to send your invitation.</p>
                            <p>Please ensure you're using the same email address associated with your invitation. If you believe this is an error, feel free to contact us for support at <a href="mailto:ggsummit@hivos.org">ggsummit@hivos.org</a></p>
                            <p>Thank you for your understanding!</p>
                          </div>
                        </div>
                      </div>
                    </div>
                  ) : (
                    <>
                      <div className="bg-green-50 border-l-4 border-green-500 p-4 mb-6">
                        <div className="flex">
                          <div className="flex-shrink-0">
                            <svg className="h-5 w-5 text-green-500" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
                              <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                            </svg>
                          </div>
                          <div className="ml-3">
                            <h3 className="text-sm font-medium text-green-800">Thank you for registering!</h3>
                            <div className="mt-2 text-sm text-green-700">
                              <p>We're excited to have you join us for the Green Growth Summit 2025 on June 16 at the Sofitel Cairo Downtown Nile.</p>
                              <p>To learn more about the summit, please visit <a href="http://www.ggsummit.me" target="_blank" className="underline">www.ggsummit.me</a>. The full agenda and further details will be shared soon, stay tuned!</p>
                            </div>
                          </div>
                        </div>
                      </div>
                      
                      <div className="bg-gray-50 rounded-lg p-4 mb-6">
                        <h3 className="font-medium text-gray-900 mb-3">Registration Details</h3>
                        <div className="grid grid-cols-4 gap-2 text-sm">
                          <div className="col-span-1 font-medium">Confirmation ID:</div>
                          <div className="col-span-3">{resultData?.order_id}</div>
                          
                          <div className="col-span-1 font-medium">Registration Type:</div>
                          <div className="col-span-3">Free Ticket</div>
                          
                          <div className="col-span-1 font-medium">Status:</div>
                          <div className="col-span-3">
                            <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-green-100 text-green-800">
                              Confirmed
                            </span>
                          </div>
                        </div>
                      </div>
                      
                      {formData.emailTicket && (
                        <div className="bg-blue-50 border-l-4 border-blue-500 p-4 mb-6">
                          <div className="flex">
                            <div className="flex-shrink-0">
                              <svg className="h-5 w-5 text-blue-500" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
                                <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z" />
                                <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z" />
                              </svg>
                            </div>
                            <div className="ml-3">
                              <div className="text-sm text-blue-700">
                                <p>A confirmation email with your ticket has been sent to <strong>{formData.email}</strong></p>
                              </div>
                            </div>
                          </div>
                        </div>
                      )}
                    </>
                  )}
                </div>
              </div>
            )}
          </div>
        </div>
      </div>

      {/* Sponsors Section */}
      <div className="w-full bg-white py-8 md:py-10 border-t border-gray-100">
        <div className="max-w-screen-2xl mx-auto px-4 md:px-8">
          <div className="flex flex-col lg:flex-row items-start justify-between">
            {/* Sponsored By */}
            <div className="w-full lg:w-[38%] mb-10 lg:mb-0 lg:pr-6">
              <div className={`${karla.className} text-black font-medium text-base lg:text-lg mb-4 lg:mb-6 text-center lg:text-left`}> In Partnership With</div>
              <div className="flex items-center justify-center lg:justify-start gap-1 sm:gap-3 lg:gap-4 overflow-visible">
                <div className="h-6 sm:h-8 lg:h-9 flex-shrink-0">
                  <img src="/logos/Spark.png" alt="Spark" className="h-full object-contain" />
                </div>
                <div className="h-6 sm:h-8 lg:h-9 flex-shrink-0">
                  <img src="/logos/euNew.png" alt="European Union" className="h-full object-contain" />
                </div>
                <div className="h-6 sm:h-8 lg:h-9 flex-shrink-0">
                  <img src="/icons/GGF_LONG.jpg" alt="Green for Growth Fund" className="h-full object-contain" />
                </div>
                <div className="h-6 sm:h-8 lg:h-9 flex-shrink-0">
                  <img src="/icons/Green Academy.png" alt="Green Academy" className="h-full object-contain" />
                </div>
              </div>
            </div>

            {/* Supported By */}
            <div className="w-full lg:w-[31%] mb-10 lg:mb-0 lg:px-6">
              <div className={`${karla.className} text-black font-medium text-lg mb-6 text-center`}>With Support From</div>
              <div className="flex items-center justify-center gap-4 overflow-visible">
                <div className="h-8 sm:h-9 lg:h-12 flex-shrink-0">
                  <img src="/logos/CFFYE.png" alt="Challenge Fund" className="h-full object-contain" />
                </div>
                <div className="h-8 sm:h-9 lg:h-12 flex-shrink-0">
                  <img src="/logos/MFAN.png" alt="Ministry of Foreign Affairs of the Netherlands" className="h-full object-contain" />
                </div>
              </div>
            </div>

            {/* Implemented By */}
            <div className="w-full lg:w-[28%] lg:pl-4">
              <div className={`${karla.className} text-black font-medium text-lg mb-4 text-center`}>Implementation Partner</div>
              <div className="flex items-center justify-center">
                <div className="h-8 sm:h-9 lg:h-12 flex-shrink-0">
                  <img src="/logos/NewSilkRoad.png" alt="New Silk Road" className="h-full object-contain" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Footer */}
      <div className="py-8 text-center text-white" style={{ backgroundColor: colors.primaryGray }}>
        <div className="container mx-auto px-4">
          <p>&copy; 2025 Green Growth Summit. All rights reserved. Convened by <a href="https://hivos.org/" target="_blank" className="text-white underline">Hivos</a>, implemented by <a href="https://newsilkroads.com/" target="_blank" className="text-white underline">New Silk Roads</a>.</p>
        </div>
      </div>
    </div>
  );
}

export default function FreeRegistration() {
  return (
    <Suspense fallback={<RegistrationLoading />}>
      <RegistrationContent />
    </Suspense>
  );
} 