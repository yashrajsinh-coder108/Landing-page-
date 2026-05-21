import React from "react";

const WHATSAPP_NUMBER = "1234567890"; // TODO: Replace with your number
const WHATSAPP_TEXT = encodeURIComponent("Hi! I want a free consultation for growing my local business.");
const href = `https://wa.me/${WHATSAPP_NUMBER}?text=${WHATSAPP_TEXT}`;

export default function WhatsAppFloatButton() {
  return (
    <a
      href={href}
      target="_blank"
      rel="noreferrer"
      className="fixed right-4 bottom-24 z-50 flex h-14 w-14 items-center justify-center rounded-2xl bg-emerald-600 text-white shadow-lg hover:bg-emerald-700 focus:outline-none focus:ring-2 focus:ring-emerald-500"
      aria-label="Chat on WhatsApp"
      title="Chat on WhatsApp"
    >
      <svg viewBox="0 0 24 24" className="h-7 w-7" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path
          d="M20.5 11.9c0 4.7-3.8 8.5-8.5 8.5-1.5 0-2.9-.4-4.1-1l-3.4.9.9-3.3c-.7-1.3-1.1-2.7-1.1-4.1C4.3 7.2 8.1 3.4 12.8 3.4s7.7 3.8 7.7 8.5Z"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinejoin="round"
        />
        <path
          d="M9.2 8.9c.2-.5.8-.6 1.1-.1l.7 1c.2.3.1.7-.1 1l-.3.3c-.2.2-.2.5-.1.7.5 1 1.3 1.7 2.3 2.2.2.1.5.1.7-.1l.3-.3c.3-.2.7-.3 1-.1l1 .7c.5.3.4.9-.1 1.1-.9.4-2 .5-3-.1-1.5-.9-2.7-2.1-3.6-3.6-.6-1-.5-2.1-.1-3Z"
          fill="currentColor"
        />
      </svg>
    </a>
  );
}

