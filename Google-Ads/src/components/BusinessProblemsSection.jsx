import React from "react";

const problems = [
  "Business not appearing on Google",
  "Low customer inquiries",
  "No online presence",
  "Poor mobile website",
  "Wasted ad spend",
  "Low Google Maps visibility",
  "Weak customer trust",
  "No lead generation system",
];

export default function BusinessProblemsSection() {

  return (
    <section className="bg-white">
      <div className="mx-auto max-w-6xl px-4 py-12 sm:py-16">
        <div className="grid gap-10 lg:grid-cols-2 lg:items-start">
          <div>
            <h2 className="text-2xl font-extrabold text-slate-950 sm:text-3xl">If you’re facing these issues, growth is blocked</h2>
            <p className="mt-3 text-slate-700">Most local businesses don’t lose customers because they’re bad — they lose them because they’re not discoverable or not converting.</p>

            <div className="mt-7 rounded-3xl border border-slate-200 bg-gradient-to-b from-slate-50 to-white p-6 shadow-sm">
              <h3 className="text-sm font-bold text-slate-900">Common problems</h3>
              <ul className="mt-4 grid gap-3 sm:grid-cols-2">
                {problems.map((p) => (
                  <li key={p} className="flex items-start gap-3 text-sm text-slate-700">
                    <span className="mt-1 inline-flex h-6 w-6 items-center justify-center rounded-lg bg-emerald-50 text-emerald-700">
                      <svg viewBox="0 0 24 24" className="h-4 w-4" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M20 7 9 18l-5-5" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                      </svg>
                    </span>
                    <span>{p}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          <div>
            <div className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm">
              <h3 className="text-xl font-extrabold text-slate-950">Our services solve it with a single system</h3>
              <p className="mt-2 text-slate-700">
                We connect your website, Google Business Profile, and Google Ads so prospects can find you, trust you, and contact you.
              </p>

              <div className="mt-6 grid gap-4">
                {[
                  { t: "More Google discovery", d: "Fix categories, photos, services, and Maps visibility." },
                  { t: "More calls & WhatsApp inquiries", d: "Conversion buttons, lead forms, and click-to-chat flows." },
                  { t: "Ads that produce leads", d: "Tracking + optimized targeting so spend becomes growth." },
                  { t: "Trust & clarity", d: "Professional layout that answers questions before prospects leave." },
                ].map((item) => (
                  <div key={item.t} className="rounded-2xl bg-slate-50 border border-slate-200 p-4">
                    <p className="text-sm font-bold text-slate-900">{item.t}</p>
                    <p className="mt-1 text-sm text-slate-600">{item.d}</p>
                  </div>
                ))}
              </div>

              <a href="#contact" className="mt-6 inline-flex w-full items-center justify-center rounded-xl bg-slate-900 px-5 py-3 text-sm font-semibold text-white shadow-sm hover:bg-slate-800">
                Get your free consultation
              </a>
              <p className="mt-3 text-center text-xs text-slate-500">No obligation. We’ll share clear next steps.</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

