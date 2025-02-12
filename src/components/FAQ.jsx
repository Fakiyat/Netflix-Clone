import React, { useState } from "react";
import "./FAQ.css";

const FAQ = () => {
  const [open, setOpen] = useState(null);

  const toggleAnswer = (index) => {
    setOpen(open === index ? null : index); // Toggle the answer
  };

  const faqs = [
    {
      question: "What is Netflix?",
      answer:
        "Netflix is a streaming service that offers a wide variety of award-winning TV shows, movies, anime, documentaries, and more.",
    },
    {
      question: "How much does Netflix cost?",
      answer:
        "Netflix offers several pricing plans. Prices start from $8.99 per month.",
    },
    {
      question: "Can I watch Netflix on multiple devices?",
      answer:
        "Yes, Netflix allows streaming on multiple devices depending on your plan.",
    },
    {
      question: "How do I cancel my Netflix subscription?",
      answer:
        "You can cancel your subscription by going to your account settings on the Netflix website or app.",
    },
  ];

  return (
    <section className="faq">
      <h2>Frequently Asked Questions</h2>
      <div className="faq-container">
        {faqs.map((faq, index) => (
          <div key={index} className="faq-item">
            <button
              className="faq-question"
              onClick={() => toggleAnswer(index)}
            >
              {faq.question}
            </button>
            {open === index && <p className="faq-answer">{faq.answer}</p>}
          </div>
        ))}
      </div>
    </section>
  );
};

export default FAQ;
