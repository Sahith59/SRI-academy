/**
 * Email service for form submission
 * 
 * This service handles sending form data to the specified email address.
 * In a production environment, this would connect to a real email service.
 * 
 * Note: This is a client-side implementation only. For production use,
 * you would need a server-side implementation or use a service like EmailJS.
 */

interface FormData {
  name: string;
  email: string;
  phone: string;
  course: string;
  message: string;
}

export const sendEmail = async (formData: FormData): Promise<boolean> => {
  // In a real implementation, you would send this data to your backend
  // or use a service like EmailJS to send emails directly from the frontend
  
  // For demonstration purposes, we'll just log the data and return a success response
  console.log('Form data to be sent:', formData);
  
  // Simulating an API call
  return new Promise((resolve) => {
    setTimeout(() => {
      // Email would be sent to: tsridhar73@gmail.com
      resolve(true);
    }, 1500);
  });
};

export const sendWhatsAppNotification = (formData: FormData, phoneNumbers: string[]): void => {
  // In a real implementation, you would integrate with WhatsApp Business API
  // For demonstration purposes, we'll just log the data
  
  console.log('WhatsApp notification to be sent to:', phoneNumbers);
  console.log('With data:', formData);
  
  // This would typically open WhatsApp with a pre-populated message
  // However, this requires server-side implementation for automated notifications
};