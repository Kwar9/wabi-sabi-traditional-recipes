"use client";

import { useState } from "react";
import { ChevronDown } from "lucide-react";
import { faqs } from "@/lib/site-data";

export function FaqAccordion() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <div className="faq-list">
      {faqs.map((faq, index) => {
        const isOpen = openIndex === index;
        const panelId = `faq-panel-${index}`;
        return (
          <div className={`faq-item ${isOpen ? "faq-item-open" : ""}`} key={faq.question}>
            <h3>
              <button
                type="button"
                className="faq-trigger"
                aria-expanded={isOpen}
                aria-controls={panelId}
                onClick={() => setOpenIndex(isOpen ? null : index)}
              >
                <span>{faq.question}</span>
                <span className="faq-icon"><ChevronDown size={18} strokeWidth={1.7} /></span>
              </button>
            </h3>
            <div id={panelId} className="faq-panel" hidden={!isOpen}>
              <p>{faq.answer}</p>
            </div>
          </div>
        );
      })}
    </div>
  );
}
