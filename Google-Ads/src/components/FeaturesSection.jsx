import React from "react";

const skills = [
  "Mobile Responsive",
  "Fast Loading",
  "SEO Optimized",
  "WhatsApp Integration",
  "Google Maps Integration",
  "Conversion Focused",
  "Professional Design",
  "Easy Customer Contact",
];

export default function FeaturesSection() {
  return (
    <section className="bg-white">
      <div className="mx-auto max-w-6xl px-4 py-12 sm:py-16">
        <div>
          <h2 className="text-2xl font-extrabold text-slate-950 sm:text-3xl">Features that turn traffic into local leads</h2>
          <p className="mt-2 text-slate-700">Modern, fast, and conversion-focused setup for calls, WhatsApp messages, and better visibility.</p>
        </div>

        <div className="mt-8 grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
          {skills.map((f) => (
            <div key={f} className="rounded-2xl border border-slate-200 bg-white p-4 shadow-sm">
              <div className="flex items-center gap-3">
                <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-indigo-50 text-indigo-700">
                  <svg viewBox="0 0 24 24" className="h-5 w-5" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M20 7 10 17l-5-5" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                </div>
                <p className="text-sm font-bold text-slate-900">{f}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

