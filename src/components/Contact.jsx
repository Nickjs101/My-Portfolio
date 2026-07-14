import React, { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Send, CheckCircle, AlertCircle } from 'lucide-react'

export default function Contact() {
  const [formData, setFormData] = useState({
    Name: '',
    Email: '',
    Message: ''
  });
  const [errors, setErrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState(null); // 'success' | 'error' | null

  const validateField = (name, value) => {
    switch (name) {
      case 'Name':
        if (!value.trim()) return 'Name is required';
        if (value.trim().length < 2) return 'Name must be at least 2 characters';
        return '';
      case 'Email':
        if (!value.trim()) return 'Email is required';
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailRegex.test(value)) return 'Please enter a valid email address';
        return '';
      case 'Message':
        if (!value.trim()) return 'Message is required';
        if (value.trim().length < 10) return 'Message must be at least 10 characters';
        return '';
      default:
        return '';
    }
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));

    // Clear error when user starts typing
    if (errors[name]) {
      setErrors(prev => ({ ...prev, [name]: '' }));
    }
  };

  const handleBlur = (e) => {
    const { name, value } = e.target;
    const error = validateField(name, value);
    setErrors(prev => ({ ...prev, [name]: error }));
  };

  const validateForm = () => {
    const newErrors = {};
    Object.keys(formData).forEach(key => {
      const error = validateField(key, formData[key]);
      if (error) newErrors[key] = error;
    });
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!validateForm()) return;

    setIsSubmitting(true);
    setSubmitStatus(null);

    try {
      const response = await fetch('https://getform.io/f/pagxqmdb', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        setSubmitStatus('success');
        setFormData({ Name: '', Email: '', Message: '' });
      } else {
        setSubmitStatus('error');
      }
    } catch (error) {
      setSubmitStatus('error');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section
      id='Contact'
      className='max-w-[1200px] mx-auto px-5 py-24 md:py-20'
      style={{ backgroundColor: 'var(--bg-secondary)' }}
    >
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
        className='text-center'
      >
        <h2
          className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4"
          style={{ color: 'var(--text-primary)' }}
        >
          Have a Project in Mind?
        </h2>
        <div
          className="h-1 w-20 mx-auto rounded-full"
          style={{ backgroundColor: 'var(--button-bg)' }}
        />
        <p
          className="mt-4 text-base sm:text-lg max-w-2xl mx-auto"
          style={{ color: 'var(--text-secondary)' }}
        >
          Tell me about the process you want to automate or the product you want to build.
          I usually reply within 24 hours.
        </p>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5, delay: 0.2 }}
        className='max-w-[800px] mx-auto'
      >
        <div
          className='mt-6 rounded-3xl'
          style={{
            backgroundColor: 'var(--card-bg)',
            border: '1px solid var(--card-border)'
          }}
        >
          <div className='p-6 md:p-10'>
            {/* Success/Error Messages */}
            <AnimatePresence mode="wait">
              {submitStatus === 'success' && (
                <motion.div
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -10 }}
                  className="mb-6 p-4 rounded-lg flex items-center gap-3"
                  style={{ backgroundColor: 'rgba(130, 204, 0, 0.1)', border: '1px solid var(--accent-primary)' }}
                >
                  <CheckCircle className="w-5 h-5" style={{ color: 'var(--accent-primary)' }} />
                  <span style={{ color: 'var(--accent-primary)' }}>
                    Thank you for your message! I'll get back to you soon.
                  </span>
                </motion.div>
              )}
              {submitStatus === 'error' && (
                <motion.div
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -10 }}
                  className="mb-6 p-4 rounded-lg flex items-center gap-3"
                  style={{ backgroundColor: 'rgba(239, 68, 68, 0.1)', border: '1px solid #ef4444' }}
                >
                  <AlertCircle className="w-5 h-5 text-red-500" />
                  <span className="text-red-500">
                    Something went wrong. Please try again or email me directly.
                  </span>
                </motion.div>
              )}
            </AnimatePresence>

            <form onSubmit={handleSubmit} noValidate>
              <div className='grid grid-cols-1 sm:grid-cols-2 gap-x-5 gap-y-4'>
                <div>
                  <label
                    htmlFor="Name"
                    className="block text-sm font-medium mb-1.5"
                    style={{ color: 'var(--text-primary)' }}
                  >
                    Your Name <span style={{ color: 'var(--accent-primary)' }}>*</span>
                  </label>
                  <input
                    type="text"
                    id="Name"
                    name="Name"
                    value={formData.Name}
                    onChange={handleChange}
                    onBlur={handleBlur}
                    placeholder='John Doe'
                    className={`w-full px-4 py-3 rounded-md transition-colors duration-200 focus:outline-none focus:ring-2 ${
                      errors.Name ? 'ring-2 ring-red-500' : ''
                    }`}
                    style={{
                      backgroundColor: 'var(--input-bg)',
                      borderColor: errors.Name ? '#ef4444' : 'var(--input-border)',
                      color: 'var(--text-primary)',
                    }}
                    aria-invalid={errors.Name ? 'true' : 'false'}
                    aria-describedby={errors.Name ? 'name-error' : undefined}
                  />
                  {errors.Name && (
                    <p id="name-error" className="mt-1.5 text-sm text-red-500" role="alert">
                      {errors.Name}
                    </p>
                  )}
                </div>

                <div>
                  <label
                    htmlFor="Email"
                    className="block text-sm font-medium mb-1.5"
                    style={{ color: 'var(--text-primary)' }}
                  >
                    Your Email <span style={{ color: 'var(--accent-primary)' }}>*</span>
                  </label>
                  <input
                    type="email"
                    id="Email"
                    name="Email"
                    value={formData.Email}
                    onChange={handleChange}
                    onBlur={handleBlur}
                    placeholder='john@example.com'
                    className={`w-full px-4 py-3 rounded-md transition-colors duration-200 focus:outline-none focus:ring-2 ${
                      errors.Email ? 'ring-2 ring-red-500' : ''
                    }`}
                    style={{
                      backgroundColor: 'var(--input-bg)',
                      borderColor: errors.Email ? '#ef4444' : 'var(--input-border)',
                      color: 'var(--text-primary)',
                    }}
                    aria-invalid={errors.Email ? 'true' : 'false'}
                    aria-describedby={errors.Email ? 'email-error' : undefined}
                  />
                  {errors.Email && (
                    <p id="email-error" className="mt-1.5 text-sm text-red-500" role="alert">
                      {errors.Email}
                    </p>
                  )}
                </div>

                <div className='sm:col-span-2'>
                  <label
                    htmlFor="Message"
                    className="block text-sm font-medium mb-1.5"
                    style={{ color: 'var(--text-primary)' }}
                  >
                    Your Message <span style={{ color: 'var(--accent-primary)' }}>*</span>
                  </label>
                  <textarea
                    id="Message"
                    name="Message"
                    value={formData.Message}
                    onChange={handleChange}
                    onBlur={handleBlur}
                    placeholder='Tell me about your project or just say hello...'
                    rows="4"
                    className={`w-full px-4 py-3 rounded-md resize-none transition-colors duration-200 focus:outline-none focus:ring-2 ${
                      errors.Message ? 'ring-2 ring-red-500' : ''
                    }`}
                    style={{
                      backgroundColor: 'var(--input-bg)',
                      borderColor: errors.Message ? '#ef4444' : 'var(--input-border)',
                      color: 'var(--text-primary)',
                    }}
                    aria-invalid={errors.Message ? 'true' : 'false'}
                    aria-describedby={errors.Message ? 'message-error' : undefined}
                  />
                  {errors.Message && (
                    <p id="message-error" className="mt-1.5 text-sm text-red-500" role="alert">
                      {errors.Message}
                    </p>
                  )}
                </div>

                <div className='sm:col-span-2'>
                  <motion.button
                    type="submit"
                    disabled={isSubmitting}
                    whileHover={!isSubmitting ? { scale: 1.02 } : {}}
                    whileTap={!isSubmitting ? { scale: 0.98 } : {}}
                    className='w-full p-4 mt-2 text-lg font-semibold rounded-md flex items-center justify-center gap-2 transition-colors duration-200 disabled:opacity-70'
                    style={{
                      backgroundColor: 'var(--button-bg)',
                      color: 'var(--text-primary)'
                    }}
                  >
                    {isSubmitting ? (
                      <>
                        <span
                          className="w-5 h-5 border-2 border-t-transparent rounded-full animate-spin"
                          style={{ borderColor: 'var(--text-primary)', borderTopColor: 'transparent' }}
                        />
                        Sending...
                      </>
                    ) : (
                      <>
                        <Send className="w-5 h-5" />
                        Send Message
                      </>
                    )}
                  </motion.button>
                </div>
              </div>
            </form>
          </div>
        </div>
      </motion.div>
    </section>
  );
}
