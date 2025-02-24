import React, { useState } from 'react';
import '../App.css';

const Contact = () => {
  const [formData, setFormData] = useState({
    firstName: '',
    email: '',
    enquiryType: '',
    message: '',
  });
  const [errors, setErrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState(null); // 'success' or 'error'

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
    setErrors({ ...errors, [name]: '' }); // Clear error when user types
  };

  const validateForm = () => {
    const newErrors = {};
    if (!formData.firstName.trim()) newErrors.firstName = 'First name is required';
    if (!formData.email.trim()) newErrors.email = 'Email is required';
    else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) newErrors.email = 'Invalid email address';
    if (!formData.enquiryType) newErrors.enquiryType = 'Enquiry type is required';
    if (!formData.message.trim()) newErrors.message = 'Message is required';
    else if (formData.message.length < 25) newErrors.message = 'Message must be at least 25 characters';
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0; // Return true if no errors
  };

  const handleSubmit = (e) => {
    e.preventDefault(); // Prevent default form behavior
    if (!validateForm()) return; // Stop if validation fails

    setIsSubmitting(true);
    setSubmitStatus(null); // Reset status

    // Simulate API call
    setTimeout(() => {
      setIsSubmitting(false);
      const isSuccess = Math.random() > 0.5; // 50% chance of success
      if (isSuccess) {
        setSubmitStatus('success');
        setFormData({ firstName: '', email: '', enquiryType: '', message: '' }); // Reset form
      } else {
        setSubmitStatus('error');
      }
    }, 2000); // Simulate 2-second delay
  };

  return (
    <section id="contact" className="contact">
      <h2>Contact Me</h2>
      {submitStatus === 'success' && (
        <div className="alert success">
          <h3>All good!</h3>
          <p>Thanks for your submission, {formData.firstName}! We will get back to you shortly.</p>
        </div>
      )}
      {submitStatus === 'error' && (
        <div className="alert error">
          <h3>Oops!</h3>
          <p>Something went wrong. Please try again later.</p>
        </div>
      )}
      <form onSubmit={handleSubmit}>
        <label htmlFor="firstName">First Name:</label>
        <input
          type="text"
          id="firstName"
          name="firstName"
          value={formData.firstName}
          onChange={handleChange}
          className={errors.firstName ? 'error' : ''}
        />
        {errors.firstName && <span className="error-message">{errors.firstName}</span>}

        <label htmlFor="email">Email:</label>
        <input
          type="email"
          id="email"
          name="email"
          value={formData.email}
          onChange={handleChange}
          className={errors.email ? 'error' : ''}
        />
        {errors.email && <span className="error-message">{errors.email}</span>}

        <label htmlFor="enquiryType">Enquiry Type:</label>
        <select
          id="enquiryType"
          name="enquiryType"
          value={formData.enquiryType}
          onChange={handleChange}
          className={errors.enquiryType ? 'error' : ''}
        >
          <option value="">Select an option</option>
          <option value="general">General</option>
          <option value="work">Work</option>
          <option value="collaboration">Collaboration</option>
        </select>
        {errors.enquiryType && <span className="error-message">{errors.enquiryType}</span>}

        <label htmlFor="message">Message:</label>
        <textarea
          id="message"
          name="message"
          value={formData.message}
          onChange={handleChange}
          className={errors.message ? 'error' : ''}
        />
        {errors.message && <span className="error-message">{errors.message}</span>}

        <button type="submit" disabled={isSubmitting}>
          {isSubmitting ? 'Submitting...' : 'Submit'}
        </button>
      </form>
    </section>
  );
};

export default Contact;