import React, { useMemo, useState } from "react";

const faqs = [
  {
    q: "How long does website development take?",
    a: "Most conversion-first landing pages take about 2–4 weeks depending on the number of pages and how quickly we receive your business info, photos, and content.",
  },
  {
    q: "Do you run Google Ads?",
    a: "Yes. We set up Google Search Ads for local intent keywords and structure the campaigns to generate calls and form leads.",
  },
  {
    q: "Do you optimize Google Business Profile?",
    a: "Yes. We improve categories, services, photos, and Maps signals so your business shows up more often in local discovery.",
  },
  {
    q: "Can customers contact through WhatsApp?",
    a: "Yes. We add WhatsApp integration so customers can click-to-chat instantly from mobile.",
  },
  {
    q: "Is the website mobile-friendly?",
    a: "Absolutely. Every page is mobile-first and designed for fast loading and easy tap-to-call / tap-to-WhatsApp contact.",
  },
  {
    q: "Do you provide support after launch?",
    a: "Yes. We provide ongoing optimization and support, including performance tracking and conversion improvements.",
  },
];

function FAQItem({ q, a, open, onToggle }) {
  return (
    <div className="rounded-2xl border border-slate-200 bg-white">
      <button
        type="button"
        onClick={onToggle}
        className="flex w-full items-center justify-between gap-3 px-5 py-4 text-left"
        aria-expanded={open}
      >
        <span className="text-sm font-bold text-slate-900">{q}</span>
        <span className="flex h-9 w-9 items-center justify-center rounded-xl bg-slate-50 text-slate-700">
          <svg
            viewBox="0 0 24 24"
            className={`h-5 w-5 transition ${open ? "rotate-45" : "rotate-0"}`}
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path d="M12 5v14" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
            <path d="M5 12h14" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
          </svg>
        </span>
      </button>
      {open && <div className="px-5 pb-4 text-sm leading-relaxed text-slate-650">{a}</div>}
    </div>
  );
}

export default function FAQSection() {
  const [openIndex, setOpenIndex] = useState(0);
  const items = useMemo(() => faqs, []);

  return (
    <section id="faq" className="mx-auto max-w-6xl px-4 py-12 sm:py-16">
      <div>
        <h2 className="text-2xl font-extrabold text-slate-950 sm:text-3xl">Frequently Asked Questions</h2>
        <p className="mt-2 text-slate-700">Quick answers for local business owners.</p>
      </div>

      <div className="mt-8 grid gap-3">
        {items.map((f, idx) => (
          <FAQItem
            key={f.q}
            q={f.q}
            a={f.a}
            open={openIndex === idx}
            onToggle={() => setOpenIndex((prev) => (prev === idx ? -1 : idx))}
          />
        ))}
      </div>
    </section>
  );
}

