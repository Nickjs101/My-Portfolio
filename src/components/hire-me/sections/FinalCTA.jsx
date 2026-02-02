import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Mail, Calendar } from 'lucide-react';
import { ctaContent } from '../data/content';
import BookingForm from '../components/BookingForm';

const FinalCTA = ({ preSelectedService }) => {
  const [showCalendar, setShowCalendar] = useState(false);

  return (
    <section
      id="contact"
      className="py-20 px-4"
      style={{ backgroundColor: 'var(--bg-primary)' }}
    >
      <div className="container mx-auto max-w-4xl">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2
            className="text-3xl sm:text-4xl font-bold mb-4"
            style={{ color: 'var(--text-primary)' }}
          >
            {ctaContent.headline}
          </h2>
          <p
            className="text-lg max-w-2xl mx-auto"
            style={{ color: 'var(--text-secondary)' }}
          >
            {ctaContent.subheadline}
          </p>
        </motion.div>

        {/* Toggle Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="flex justify-center gap-4 mb-8"
        >
          <button
            onClick={() => setShowCalendar(false)}
            className={`flex items-center gap-2 px-6 py-3 rounded-lg font-medium transition-all ${
              !showCalendar ? 'ring-2' : ''
            }`}
            style={{
              backgroundColor: !showCalendar
                ? 'var(--accent-primary)'
                : 'var(--bg-secondary)',
              color: !showCalendar
                ? 'var(--bg-primary)'
                : 'var(--text-primary)',
              ringColor: 'var(--accent-primary)',
            }}
          >
            <Mail size={18} />
            Send Message
          </button>
          <button
            onClick={() => setShowCalendar(true)}
            className={`flex items-center gap-2 px-6 py-3 rounded-lg font-medium transition-all ${
              showCalendar ? 'ring-2' : ''
            }`}
            style={{
              backgroundColor: showCalendar
                ? 'var(--accent-primary)'
                : 'var(--bg-secondary)',
              color: showCalendar
                ? 'var(--bg-primary)'
                : 'var(--text-primary)',
              ringColor: 'var(--accent-primary)',
            }}
          >
            <Calendar size={18} />
            Book a Call
          </button>
        </motion.div>

        {/* Content Area */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="max-w-xl mx-auto"
        >
          {showCalendar ? (
            <div
              className="rounded-2xl p-8 text-center"
              style={{ backgroundColor: 'var(--card-bg)' }}
            >
              <Calendar
                size={48}
                className="mx-auto mb-4"
                style={{ color: 'var(--accent-primary)' }}
              />
              <h4
                className="text-xl font-bold mb-2"
                style={{ color: 'var(--text-primary)' }}
              >
                Schedule Your Discovery Call
              </h4>
              <p
                className="text-sm mb-6"
                style={{ color: 'var(--text-secondary)' }}
              >
                Pick a time that works for you. The call is free, no strings attached.
              </p>
              {/* Calendar embed placeholder - replace with Cal.com or Calendly */}
              <div
                className="rounded-lg p-8 text-center"
                style={{
                  backgroundColor: 'var(--bg-tertiary)',
                  border: '2px dashed var(--card-border)',
                }}
              >
                <p
                  className="text-sm"
                  style={{ color: 'var(--text-secondary)' }}
                >
                  Calendar booking widget coming soon.
                  <br />
                  For now, please use the contact form.
                </p>
              </div>
            </div>
          ) : (
            <div
              className="rounded-2xl p-6 sm:p-8"
              style={{ backgroundColor: 'var(--card-bg)' }}
            >
              <BookingForm preSelectedService={preSelectedService} />
            </div>
          )}
        </motion.div>

        {/* Trust Note */}
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3 }}
          className="text-center text-xs mt-8"
          style={{ color: 'var(--text-secondary)' }}
        >
          Your information is safe. I'll never spam you or share your details.
        </motion.p>
      </div>
    </section>
  );
};

export default FinalCTA;
