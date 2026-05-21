import React from "react";

const services = [
  { title: "Professional Business Website", desc: "Mobile-first website pages designed to turn visitors into calls and form leads." },
  { title: "Google Ads Campaign Setup", desc: "High-intent Google Search campaigns built for local lead generation." },
  { title: "Google Business Profile Optimization", desc: "Improve categories, services, photos, and local signals so you appear more often." },
  { title: "Local SEO Setup", desc: "Local keyword and page structure to strengthen organic discovery." },
  { title: "WhatsApp Integration", desc: "Click-to-chat flows and WhatsApp-ready conversion buttons." },
  { title: "Lead Generation Setup", desc: "Conversion-first landing structure, forms, and CTA alignment." },
  { title: "Mobile Responsive Design", desc: "Fast, clean mobile UX built for on-the-go customers." },
  { title: "Google Maps Visibility", desc: "Maps-focused improvements to increase nearby customer discovery." },
  { title: "Conversion Tracking Setup", desc: "Track calls + form submissions so you can measure and improve ROI." },
];



export default function ServicesSection() {
  return (
    <section id="services" className="mx-auto max-w-6xl px-4 py-12 sm:py-16">
      <div className="flex flex-col gap-3 sm:flex-row sm:items-end sm:justify-between">
        <div>
          <h2 className="text-2xl font-extrabold text-slate-950 sm:text-3xl">Services built to generate local leads</h2>
          <p className="mt-2 text-slate-700">Website + ads + Google visibility, combined into one conversion system.</p>
        </div>
        <a href="#contact" className="text-sm font-semibold text-indigo-700 hover:text-indigo-800">
          Get a free growth review →
        </a>
      </div>

      <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {services.map((s) => (
          <div
            key={s.title}
            className="group rounded-2xl border border-slate-200 bg-white p-5 shadow-sm hover:shadow-md transition"
          >
            <div className="flex items-start gap-3">
              <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-indigo-50 text-indigo-700">
                <svg viewBox="0 0 24 24" className="h-5 w-5" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M20 7 9 18l-5-5" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </div>
              <div>
                <h3 className="text-base font-bold text-slate-900">{s.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-slate-600">{s.desc}</p>
              </div>
            </div>

            <div className="mt-4 flex items-center justify-between text-xs font-semibold text-slate-600">
              <span className="text-slate-500 group-hover:text-indigo-700">Conversion-ready</span>
              <span className="text-indigo-700">→</span>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

