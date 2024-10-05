'use client';
// ContactButton.js
import React from "react";

const ContactButton = () => {
  return (
    <button
      style={{
        padding: "0.75rem 1.5rem",
        backgroundColor: "#3b82f6",
        color: "white",
        fontWeight: "600",
        borderRadius: "0.5rem",
        transition: "background-color 0.3s ease",
      }}
      onMouseEnter={(e) => (e.currentTarget.style.backgroundColor = "#2563eb")}
      onMouseLeave={(e) => (e.currentTarget.style.backgroundColor = "#3b82f6")}
    >
      Contact Us
    </button>
  );
};

export default ContactButton;
