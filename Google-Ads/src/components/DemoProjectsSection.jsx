import React from "react";

const projects = [
  {
    type: "Restaurant Website + Google Ads",
    goal: "Generate more calls and booking inquiries from local searches",
    services: [
      "Mobile-first restaurant website design",
      "Google Ads campaign setup (calls + lead form)",
      "Google Business Profile optimization",
      "Conversion tracking for calls & form submits",
    ],
    results: [
      "More qualified call requests",
      "Higher-quality inquiries from intent-based keywords",
      "Improved Maps discovery and trust signals",
    ],
  },
  {
    type: "Hotel Lead Generation Website",
    goal: "Increase direct booking inquiries from nearby guests",
    services: [
      "Conversion-focused booking inquiry website",
      "Local SEO setup for property searches",
      "Google Ads lead capture campaigns",
      "WhatsApp integration for instant contact",
    ],
    results: [
      "More inquiry volume from local intent searches",
      "Better lead quality and faster response time",
      "Measurable ROI through tracking & optimization",
    ],
  },
  {
    type: "Local Shop Google Business Optimization",
    goal: "Improve visibility in Google Search & Google Maps",
    services: [
      "Google Business Profile optimization (categories, photos, services)",
      "Google Maps visibility improvements",
      "Conversion-ready website updates",
      "Call + WhatsApp CTA placement for easy contact",
    ],
    results: [
      "More nearby discovery and profile views",
      "More customer trust and instant contact",
      "Higher conversion rate from mobile visits",
    ],
  },
];

export default function DemoProjectsSection() {
  return (
    <section id="demo" className="mx-auto max-w-6xl px-4 py-12 sm:py-16">
      <div>
        <h2 className="text-2xl font-extrabold text-slate-950 sm:text-3xl">Demo projects (local businesses)</h2>
        <p className="mt-2 text-slate-700">Examples of how we combine websites, ads, and Google optimization to drive real leads.</p>
      </div>

      <div className="mt-8 grid gap-4 lg:grid-cols-3">
        {projects.map((p) => (
          <div key={p.type} className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm">
            <div className="flex items-center justify-between gap-3">
              <div>
                <h3 className="text-lg font-extrabold text-slate-950">{p.type}</h3>
                <p className="mt-1 text-sm font-semibold text-indigo-700">Goal: {p.goal}</p>
              </div>
              <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-gradient-to-br from-indigo-600 to-violet-600 text-white">
                <svg viewBox="0 0 24 24" className="h-6 w-6" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M12 2 2 7l10 5 10-5-10-5Z" stroke="currentColor" strokeWidth="2" strokeLinejoin="round" />
                  <path d="M2 17l10 5 10-5" stroke="currentColor" strokeWidth="2" strokeLinejoin="round" />
                  <path d="M2 12l10 5 10-5" stroke="currentColor" strokeWidth="2" strokeLinejoin="round" />
                </svg>
              </div>
            </div>

            <div className="mt-4">
              <p className="text-sm font-bold text-slate-900">Services provided</p>
              <ul className="mt-2 grid gap-2 text-sm text-slate-700">
                {p.services.map((s) => (
                  <li key={s} className="flex items-start gap-3">
                    <span className="mt-1 inline-flex h-5 w-5 items-center justify-center rounded-lg bg-indigo-50 text-indigo-700">
                      <svg viewBox="0 0 24 24" className="h-3.5 w-3.5" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path
                          d="M20 7 9 18l-5-5"
                          stroke="currentColor"
                          strokeWidth="2"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                      </svg>
                    </span>
                    {s}
                  </li>
                ))}
              </ul>
            </div>

            <div className="mt-5 rounded-2xl border border-slate-200 bg-slate-50 p-4">
              <p className="text-sm font-bold text-slate-900">Expected business results</p>
              <ul className="mt-2 grid gap-2 text-sm text-slate-700">
                {p.results.map((r) => (
                  <li key={r} className="flex items-start gap-3">
                    <span className="mt-1 inline-flex h-5 w-5 items-center justify-center rounded-lg bg-emerald-50 text-emerald-700">
                      <svg viewBox="0 0 24 24" className="h-3.5 w-3.5" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path
                          d="M20 7 9 18l-5-5"
                          stroke="currentColor"
                          strokeWidth="2"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                      </svg>
                    </span>
                    {r}
                  </li>
                ))}
              </ul>
            </div>

            <a
              href="#contact"
              className="mt-6 inline-flex w-full items-center justify-center rounded-xl bg-slate-900 px-4 py-3 text-sm font-semibold text-white hover:bg-slate-800"
            >
              Get a similar plan
            </a>
          </div>
        ))}
      </div>
    </section>
  );
}

