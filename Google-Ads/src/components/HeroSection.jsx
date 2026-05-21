import React from "react";

export default function HeroSection() {
  return (
    <section className="relative overflow-hidden">
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_30%_0%,rgba(99,102,241,0.12),transparent_55%),radial-gradient(circle_at_80%_20%,rgba(124,58,237,0.12),transparent_50%),radial-gradient(circle_at_20%_70%,rgba(14,165,233,0.08),transparent_50%)]" />
      <div className="mx-auto max-w-6xl px-4 pb-10 pt-10 sm:pb-14 sm:pt-14">
        <div className="grid items-center gap-10 lg:grid-cols-2">
          <div>
            <div className="inline-flex items-center gap-2 rounded-full border border-slate-200 bg-white/70 px-3 py-1 text-xs font-semibold text-slate-700 shadow-sm">
              <span className="inline-flex h-2 w-2 rounded-full bg-emerald-500" />
              Local leads in weeks — not months
            </div>

            <h1 className="mt-4 text-3xl font-extrabold leading-tight text-slate-950 sm:text-4xl lg:text-5xl">
              Grow Your  Business With Website + Google Ads + Google Business Optimization
            </h1>

            <p className="mt-4 text-base leading-relaxed text-slate-700 sm:text-lg">
              Helping local businesses generate more calls, leads, and customers through professional online presence and Google visibility.
            </p>

            <div className="mt-7 flex flex-col gap-3 sm:flex-row sm:items-center">
              <a
                href="#contact"
                className="inline-flex items-center justify-center rounded-xl bg-slate-900 px-5 py-3 text-sm font-semibold text-white shadow-sm hover:bg-slate-800"
              >
                Get More Local Leads
              </a>
              <a
                href="#demo"
                className="inline-flex items-center justify-center rounded-xl border border-slate-200 bg-white px-5 py-3 text-sm font-semibold text-slate-900 hover:bg-slate-50"
              >
                See Example Results
              </a>
            </div>

            {/* Hero proof (single metric) */}
            <div className="mt-6 rounded-2xl border border-slate-200 bg-white/70 px-4 py-4">
              <div className="flex items-center justify-between gap-3">
                <div>
                  <p className="text-xs font-bold text-slate-600">Typical outcome</p>
                  <p className="mt-1 text-sm font-extrabold text-slate-950">More calls + WhatsApp leads in 30 days</p>
                </div>
                <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-emerald-50 text-emerald-700">
                  <svg viewBox="0 0 24 24" className="h-5 w-5" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M12 2l3 7 7 3-7 3-3 7-3-7-7-3 7-3 3-7Z" stroke="currentColor" strokeWidth="2" strokeLinejoin="round" />
                  </svg>
                </div>
              </div>
              <p className="mt-2 text-xs text-slate-600">We optimize Google visibility + conversion landing pages for local intent.</p>
            </div>
          </div>


          <div className="relative">
            <div className="rounded-3xl border border-slate-200 bg-white/70 p-5 shadow-sm backdrop-blur">
              <div className="flex items-center justify-between">
                <p className="text-sm font-semibold text-slate-900">Your next 30 days plan</p>
                <span className="rounded-full bg-indigo-50 px-3 py-1 text-xs font-semibold text-indigo-700">
                  Lead-focused
                </span>
              </div>

              <div className="mt-4 grid gap-3">
                {[
                  {
                    title: "Fix Google visibility",
                    desc: "Optimize Google Business Profile + Maps signals",
                    icon: "map",
                  },
                  {
                    title: "Launch conversion pages",
                    desc: "Mobile-first websites that turn visits into calls",
                    icon: "web",
                  },
                  {
                    title: "Capture demand with Ads",
                    desc: "Google Ads setup + tracking to reduce wasted spend",
                    icon: "ads",
                  },
                ].map((item) => (
                  <div
                    key={item.title}
                    className="flex items-start gap-3 rounded-2xl border border-slate-200 bg-white px-4 py-4"
                  >
                    <div className="mt-0.5 flex h-10 w-10 items-center justify-center rounded-xl bg-gradient-to-br from-indigo-600 to-violet-600 text-white">
                      {item.icon === "map" ? (
                        <svg viewBox="0 0 24 24" className="h-5 w-5" fill="none" xmlns="http://www.w3.org/2000/svg">
                          <path
                            d="M9 18l-6 3V6l6-3 6 3 6-3v15l-6 3-6-3Z"
                            stroke="currentColor"
                            strokeWidth="2"
                            strokeLinejoin="round"
                          />
                          <path d="M9 3v15" stroke="currentColor" strokeWidth="2" />
                          <path d="M15 6v15" stroke="currentColor" strokeWidth="2" />
                        </svg>
                      ) : item.icon === "web" ? (
                        <svg viewBox="0 0 24 24" className="h-5 w-5" fill="none" xmlns="http://www.w3.org/2000/svg">
                          <path
                            d="M21 10c0 8-3.5 11-9 11S3 18 3 10 6.5 0 12 0s9 2 9 10Z"
                            fill="currentColor"
                            opacity="0.15"
                          />
                          <path d="M7 17l10-10" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
                          <path
                            d="M7 7h10v10"
                            stroke="currentColor"
                            strokeWidth="2"
                            strokeLinejoin="round"
                          />
                        </svg>
                      ) : (
                        <svg viewBox="0 0 24 24" className="h-5 w-5" fill="none" xmlns="http://www.w3.org/2000/svg">
                          <path d="M3 3h18v6H3V3Z" stroke="currentColor" strokeWidth="2" />
                          <path d="M7 9v12h10V9" stroke="currentColor" strokeWidth="2" />
                          <path d="M9 13h6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
                        </svg>
                      )}
                    </div>
                    <div>
                      <p className="text-sm font-semibold text-slate-900">{item.title}</p>
                      <p className="mt-1 text-sm text-slate-600">{item.desc}</p>
                    </div>
                  </div>
                ))}
              </div>

              <div className="mt-5 rounded-2xl border border-slate-200 bg-slate-50 px-4 py-4">
                <div className="flex items-center justify-between gap-3">
                  <p className="text-sm font-semibold text-slate-900">Next action</p>
                  <a
                    href="#contact"
                    className="rounded-xl bg-white px-4 py-2 text-sm font-semibold text-slate-900 ring-1 ring-slate-200 hover:bg-slate-100"
                  >
                    Book a free call
                  </a>
                </div>
                <p className="mt-2 text-xs text-slate-600">
                  We’ll review your website, Google Business Profile, and ad setup — then send a clear growth plan.
                </p>
              </div>
            </div>

            <div className="mt-4 hidden text-xs text-slate-500 lg:block">
              Trusted setup for local shops, restaurants, hotels & small businesses.
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

