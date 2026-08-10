"use client";

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Plus, Minus } from 'lucide-react';

interface FAQItem {
  question: string;
  answer: string;
}

interface FAQAccordionProps {
  items: FAQItem[];
  className?: string;
}

export const FAQAccordion = ({ items, className = '' }: FAQAccordionProps) => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggle = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className={`flex flex-col divide-y divide-[#EAE7E0] ${className}`} role="list">
      {items.map((item, index) => (
        <div key={index} role="listitem">
          <button
            onClick={() => toggle(index)}
            className="w-full flex items-center justify-between gap-6 py-6 text-left group"
            aria-expanded={openIndex === index}
            aria-controls={`faq-answer-${index}`}
            id={`faq-question-${index}`}
          >
            <span className="font-sans text-sm font-medium text-[#1E1B18] leading-snug group-hover:text-[#6B1E2E] transition-colors pr-4">
              {item.question}
            </span>
            <span className="flex-shrink-0 w-7 h-7 rounded-full border border-[#6B1E2E] flex items-center justify-center text-[#6B1E2E] transition-all group-hover:bg-[#6B1E2E] group-hover:text-[#FAFAF8]">
              {openIndex === index
                ? <Minus className="w-3 h-3" aria-hidden="true" />
                : <Plus className="w-3 h-3" aria-hidden="true" />
              }
            </span>
          </button>

          <AnimatePresence>
            {openIndex === index && (
              <motion.div
                id={`faq-answer-${index}`}
                role="region"
                aria-labelledby={`faq-question-${index}`}
                initial={{ height: 0, opacity: 0 }}
                animate={{ height: 'auto', opacity: 1 }}
                exit={{ height: 0, opacity: 0 }}
                transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
                className="overflow-hidden"
              >
                <p className="text-sm text-[#9A9188] leading-relaxed pb-6">
                  {item.answer}
                </p>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      ))}
    </div>
  );
};
