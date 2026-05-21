import React from "react";

const steps = [
  { n: "01", t: "Business Research", d: "Review your market, competitors, and the exact lead goals (calls, WhatsApp, forms)." },
  { n: "02", t: "Website Design", d: "Build or improve conversion-first pages designed to turn mobile traffic into leads." },
  { n: "03", t: "Google Business Setup", d: "Optimize your Google Business Profile and Maps signals so locals can find you." },
  { n: "04", t: "Google Ads Campaign Setup", d: "Launch Google Search Ads that match local intent and drive ready-to-contact inquiries." },
  { n: "05", t: "Lead Generation Optimization", d: "Improve lead quality with landing/CTA/WhatsApp flow adjustments." },
  { n: "06", t: "Performance Tracking", d: "Track calls + form submissions and optimize for measurable ROI." },
];



export default function ProcessSection() {
  return (
    <section id="process" className="bg-gradient-to-b from-slate-50 to-white">
      <div className="mx-auto max-w-6xl px-4 py-12 sm:py-16">
        <div>
          <h2 className="text-2xl font-extrabold text-slate-950 sm:text-3xl">A clear process that turns attention into leads</h2>
          <p className="mt-2 text-slate-700">Business research → keyword research → campaign setup → landing page optimization → conversion tracking → optimization & reporting.</p>
        </div>

        <div className="mt-8 grid gap-4 md:grid-cols-2">

          {steps.map((s) => (
            <div key={s.n} className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm">
              <div className="flex items-start justify-between gap-3">
                <div>
                  <p className="text-sm font-extrabold text-indigo-700">Step {s.n}</p>
                  <h3 className="mt-1 text-base font-bold text-slate-950">{s.t}</h3>
                </div>
                <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-indigo-50 text-indigo-700">
                  <svg viewBox="0 0 24 24" className="h-5 w-5" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M20 7 10 17l-5-5" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                </div>
              </div>
              <p className="mt-3 text-sm leading-relaxed text-slate-600">{s.d}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

