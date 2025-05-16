import React, { useState } from 'react';
import { 
  Phone, Mail, MapPin, Send, MessageSquare
} from 'lucide-react';
import { supabase } from '../lib/supabase';
import './Contact.css';

interface FormData {
  name: string;
  email: string;
  phone: string;
  course: string;
  message: string;
}

const Contact: React.FC = () => {
  const [formData, setFormData] = useState<FormData>({
    name: '',
    email: '',
    phone: '',
    course: 'NEET',
    message: '',
  });
  
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<{
    success: boolean;
    message: string;
  } | null>(null);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    try {
      const { error: dbError } = await supabase
        .from('enquiries')
        .insert([formData]);

      if (dbError) throw dbError;

      const response = await fetch(`${import.meta.env.VITE_SUPABASE_URL}/functions/v1/send-enquiry`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${import.meta.env.VITE_SUPABASE_ANON_KEY}`
        },
        body: JSON.stringify(formData)
      });

      if (!response.ok) {
        throw new Error('Failed to send email notification');
      }

      setFormData({
        name: '',
        email: '',
        phone: '',
        course: 'NEET',
        message: '',
      });
      
      setSubmitStatus({
        success: true,
        message: 'Your enquiry has been submitted successfully. We will contact you soon!',
      });
      
      setTimeout(() => {
        setSubmitStatus(null);
      }, 5000);
    } catch (error) {
      setSubmitStatus({
        success: false,
        message: 'There was an error submitting your enquiry. Please try again.',
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section id="contact" className="contact">
      <div className="container">
        <div className="section-title">
          <h2>Contact Us</h2>
          <div className="underline"></div>
        </div>
        
        <div className="contact-wrapper">
          <div className="contact-info">
            <h3>Get in Touch</h3>
            <p>
              Have questions about admissions or our programs? Reach out to us, and our team will get back to you as soon as possible.
            </p>
            
            <div className="info-item">
              <div className="icon">
                <Phone />
              </div>
              <div>
                <h4>Phone</h4>
                <p>
                  <a href="tel:+919948854533">+91 9948854533</a>
                </p>
                <p>
                  <a href="tel:+919951190513">+91 9951190513</a>
                </p>
              </div>
            </div>
            
            <div className="info-item">
              <div className="icon">
                <Mail />
              </div>
              <div>
                <h4>Email</h4>
                <p>
                  <a href="mailto:tsridhar73@gmail.com">tsridhar73@gmail.com</a>
                </p>
                <p>
                  <a href="mailto:sriacademy73@gmail.com">sriacademy73@gmail.com</a>
                </p>
              </div>
            </div>
            
            <div className="info-item">
              <div className="icon">
                <MapPin />
              </div>
              <div>
                <h4>Location</h4>
                <p>
                  Beside Chaithanya Junior College, Near Bustand, 
                  <br />
                  Ansari Colony, Nalgonda.
                </p>
              </div>
            </div>
            
            <div className="map-container">
              <iframe 
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3815.5307370144847!2d79.26442937507825!3d17.05431198293937!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bcb2f29ec24897b%3A0x172354fb9d4ae5e4!2sNalgonda%2C%20Telangana!5e0!3m2!1sen!2sin!4v1709912345678!5m2!1sen!2sin"
                width="100%" 
                height="250" 
                style={{ border: 0 }} 
                allowFullScreen 
                loading="lazy" 
                referrerPolicy="no-referrer-when-downgrade"
                title="Academy Location"
              ></iframe>
            </div>
          </div>
          
          <div className="contact-form-container">
            <div className="form-header">
              <h3>Submit an Enquiry</h3>
              <p>Fill out the form below, and we'll get back to you as soon as possible.</p>
            </div>
            
            {submitStatus && (
              <div className={`status-message ${submitStatus.success ? 'success' : 'error'}`}>
                {submitStatus.message}
              </div>
            )}
            
            <form onSubmit={handleSubmit} className="contact-form">
              <div className="form-group">
                <label htmlFor="name">Your Name <span className="required">*</span></label>
                <input 
                  type="text" 
                  id="name" 
                  name="name" 
                  value={formData.name}
                  onChange={handleChange}
                  required 
                  placeholder="Enter your full name"
                />
              </div>
              
              <div className="form-row">
                <div className="form-group">
                  <label htmlFor="email">Email <span className="required">*</span></label>
                  <input 
                    type="email" 
                    id="email" 
                    name="email" 
                    value={formData.email}
                    onChange={handleChange}
                    required 
                    placeholder="Enter your email"
                  />
                </div>
                
                <div className="form-group">
                  <label htmlFor="phone">Phone <span className="required">*</span></label>
                  <input 
                    type="tel" 
                    id="phone" 
                    name="phone" 
                    value={formData.phone}
                    onChange={handleChange}
                    required 
                    placeholder="Enter your phone number"
                  />
                </div>
              </div>
              
              <div className="form-group">
                <label htmlFor="course">Course Interested In <span className="required">*</span></label>
                <select 
                  id="course" 
                  name="course" 
                  value={formData.course}
                  onChange={handleChange}
                  required
                >
                  <option value="NEET">NEET</option>
                  <option value="NEET-LongTerm">Long Term (NEET)</option>
                  <option value="INTER-NEET">INTER + NEET</option>
                  <option value="EAPCET">EAPCET</option>
                </select>
              </div>
              
              <div className="form-group">
                <label htmlFor="message">Message</label>
                <textarea 
                  id="message" 
                  name="message" 
                  value={formData.message}
                  onChange={handleChange}
                  rows={4} 
                  placeholder="Your message or questions"
                ></textarea>
              </div>
              
              <button type="submit" className="submit-btn" disabled={isSubmitting}>
                {isSubmitting ? (
                  'Submitting...'
                ) : (
                  <>
                    <span>Submit Enquiry</span>
                    <Send size={16} />
                  </>
                )}
              </button>
            </form>
            
            <div className="whatsapp-button">
              <a href="https://wa.me/919948854533" target="_blank" rel="noopener noreferrer">
                <MessageSquare size={18} />
                <span>Chat on WhatsApp</span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;