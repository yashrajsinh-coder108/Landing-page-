import React from "react";

const reasons = [
  { t: "More local visibility", d: "Show up on Google when people search for businesses like yours." },
  { t: "More customer calls", d: "Call-ready pages and Google signals that turn searches into direct contact." },
  { t: "Better trust", d: "Improved photos, services, categories, and professional presentation." },
  { t: "WhatsApp inquiries", d: "Click-to-chat CTAs so customers can reach you instantly." },
  { t: "Google Maps discovery", d: "Maps-focused optimization that helps locals find you nearby." },
  { t: "Mobile customer reach", d: "Fast, mobile-friendly experiences designed for on-the-go customers." },
];


export default function WhyPresenceSection() {

  return (
    <section className="mx-auto max-w-6xl px-4 py-12 sm:py-16">
      <div className="flex flex-col gap-3 sm:flex-row sm:items-end sm:justify-between">
        <div>
          <h2 className="text-2xl font-extrabold text-slate-950 sm:text-3xl">Why Businesses Need Online Presence</h2>
          <p className="mt-2 text-slate-700">More visibility on Google means more calls, WhatsApp messages, and customers discovering you nearby.</p>
        </div>


      </div>

      <div className="mt-8 grid gap-4 md:grid-cols-2 lg:grid-cols-3">
        {reasons.map((b) => (

          <div key={b.t} className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm">
            <div className="flex items-center gap-3">
              <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-indigo-50 text-indigo-700">
                <svg viewBox="0 0 24 24" className="h-5 w-5" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M12 2 3 7v10l9 5 9-5V7l-9-5Z" stroke="currentColor" strokeWidth="2" strokeLinejoin="round" />
                  <path d="M12 22V12" stroke="currentColor" strokeWidth="2" />
                  <path d="m3 7 9 5 9-5" stroke="currentColor" strokeWidth="2" strokeLinejoin="round" />
                </svg>
              </div>
              <div>
                <h3 className="text-base font-bold text-slate-900">{b.t}</h3>
                <p className="mt-1 text-sm text-slate-600">{b.d}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

