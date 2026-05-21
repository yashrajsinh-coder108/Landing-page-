import React from "react";
import LeadForm from "./LeadForm";

export default function FinalCTASection() {
  return (
    <section id="contact" className="bg-white">
      <div className="mx-auto max-w-6xl px-4 py-12 sm:py-16">
        <div className="grid gap-8 lg:grid-cols-2 lg:items-start">
          <div>
            <h2 className="text-2xl font-extrabold text-slate-950 sm:text-3xl">Ready To Generate Better Leads With Google Ads?</h2>

            <p className="mt-2 text-slate-700">
              Tell us about your business. We’ll review your current setup and send a clear lead-generation plan for websites, Google Ads, and Google Business optimization.
            </p>

            <div className="mt-6 rounded-3xl border border-slate-200 bg-gradient-to-b from-slate-50 to-white p-6 shadow-sm">
              <p className="text-sm font-extrabold text-slate-900">What you’ll get</p>
              <ul className="mt-4 grid gap-3">
                {[
                  "A lead-focused Google Ads plan",
                  "Conversion tracking setup for measurable ROI",
                  "Landing page optimization to improve lead quality",
                  "Keyword research + campaign structure recommendations",
                  "Clear next steps (no fluff)",
                ].map((x) => (

                  <li key={x} className="flex items-start gap-3 text-sm text-slate-700">
                    <span className="mt-1 inline-flex h-6 w-6 items-center justify-center rounded-lg bg-emerald-50 text-emerald-700">
                      <svg viewBox="0 0 24 24" className="h-4 w-4" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M20 7 9 18l-5-5" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                      </svg>
                    </span>
                    {x}
                  </li>
                ))}
              </ul>

              <div className="mt-5 flex flex-col gap-2 sm:flex-row sm:items-center">
                <a
                  href={`https://wa.me/7016651250?text=${encodeURIComponent(
                    "Hi! I want a free consultation for growing  business.")}`}
                  target="_blank"
                  rel="noreferrer"
                  onClick={(e) => {
                    // Keep smooth scroll behavior for the hint, but allow WhatsApp navigation.
                    const el = document.getElementById("waHint");
                    el?.scrollIntoView({ behavior: "smooth" });
                  }}
                  className="inline-flex w-full items-center justify-center rounded-xl bg-emerald-600 px-4 py-3 text-sm font-semibold text-white shadow-sm hover:bg-emerald-700 sm:w-auto"
                >
                  Prefer WhatsApp? Chat now
                </a>

                <p id="waHint" className="text-xs font-semibold text-slate-500 sm:pl-2">
                  We’ll respond quickly during business hours.
                </p>
              </div>
            </div>
          </div>

          <div className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm font-bold text-slate-900">Contact form</p>
                <p className="text-xs text-slate-600">Leads from local business owners</p>
              </div>
              <div className="rounded-2xl bg-indigo-50 px-3 py-2">
                <p className="text-xs font-extrabold text-indigo-700">Fast response</p>
              </div>
            </div>

            <div className="mt-4">
              <LeadForm />
            </div>

            <p className="mt-4 text-xs text-slate-500">
              By submitting, you agree to be contacted about your project. (Replace with your privacy policy.)
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

