import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronDown } from 'lucide-react';

const FAQItem = ({ item, isOpen, onToggle }) => {
  return (
    <div
      className="border-b"
      style={{ borderColor: 'var(--card-border)' }}
    >
      <button
        onClick={onToggle}
        className="w-full py-5 flex items-center justify-between text-left gap-4"
      >
        <h4
          className="text-sm sm:text-base font-semibold pr-4"
          style={{ color: 'var(--text-primary)' }}
        >
          {item.question}
        </h4>
        <motion.div
          animate={{ rotate: isOpen ? 180 : 0 }}
          transition={{ duration: 0.2 }}
          className="flex-shrink-0"
        >
          <ChevronDown
            size={20}
            style={{ color: 'var(--text-secondary)' }}
          />
        </motion.div>
      </button>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.2 }}
            className="overflow-hidden"
          >
            <p
              className="pb-5 text-sm sm:text-base"
              style={{ color: 'var(--text-secondary)' }}
            >
              {item.answer}
            </p>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default FAQItem;
