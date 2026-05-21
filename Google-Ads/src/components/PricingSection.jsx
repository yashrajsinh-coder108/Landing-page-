import React from "react";

const packages = [
  {
    name: "STARTER",
    price: "₹14,999",
    note: "Best for new  businesses",
    highlight: false,
    items: [
      "1-page landing page",
      "Google Business setup",
      "landing optimization",
      "Contact form integration",
      "Basic SEO setup",
    ],
    cta: "Launch My Business",
  },
  {
    name: "GROWTH",
    price: "₹34,999",
    note: "Best for businesses needing more leads",
    highlight: true,
    items: [
      "Conversion-focused landing page",
      "Google Ads campaign setup",
      "WhatsApp integration",
      "Conversion tracking",
      "GBP optimization",
    ],
    cta: "Generate More Leads",
  },
  {
    name: "PREMIUM",
    price: "₹69,999+",
    note: "Best for scaling  businesses",
    highlight: false,
    items: [
      "Full lead generation system",
      "Multi-campaign Google Ads",
      "Call + WhatsApp tracking",
      "Conversion optimization",
      "Monthly reporting dashboard",
    ],
    cta: "Choose Premium",
  },
];


export default function PricingSection() {
  return (
    <section
      id="pricing"
      className="bg-gradient-to-b from-white to-slate-50"
    >
      <div className="mx-auto max-w-6xl px-4 py-12 sm:py-16">
        <div>
          <h2 className="text-2xl font-extrabold text-slate-950 sm:text-3xl">
            Simple pricing for measurable local leads
          </h2>
          <p className="mt-2 text-slate-700">
            Choose the package that matches your current visibility and lead goals.
          </p>
        </div>

        <div className="mt-8 grid gap-4 lg:grid-cols-3">
          {packages.map((p) => (
            <div
              key={p.name}
              className={`relative rounded-3xl border p-6 shadow-sm ${
                p.highlight
                  ? "border-indigo-200 bg-white"
                  : "border-slate-200 bg-white"
              }`}
            >
              {p.highlight && (
                <div className="absolute -top-3 left-6 rounded-full bg-indigo-600 px-4 py-1 text-xs font-bold text-white shadow">
                  Most Popular
                </div>
              )}

              <div className="flex items-start justify-between gap-4">
                <div>
                  <h3 className="text-lg font-extrabold text-slate-950">
                    {p.name}
                  </h3>
                  <p className="mt-1 text-sm font-semibold text-slate-600">
                    {p.note}
                  </p>
                </div>
                <div className="text-right">
                  <p className="text-3xl font-extrabold text-slate-950">
                    {p.price}
                  </p>
                  <p className="text-xs font-semibold text-slate-500">
                    One-time setup
                  </p>
                </div>
              </div>

              <ul className="mt-5 grid gap-3">
                {p.items.map((it) => (
                  <li
                    key={it}
                    className="flex items-start gap-3 text-sm text-slate-700"
                  >
                    <span className="mt-0.5 inline-flex h-6 w-6 items-center justify-center rounded-lg bg-emerald-50 text-emerald-700">
                      <svg
                        viewBox="0 0 24 24"
                        className="h-4 w-4"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M20 7 9 18l-5-5"
                          stroke="currentColor"
                          strokeWidth="2"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                      </svg>
                    </span>
                    {it}
                  </li>
                ))}
              </ul>

              <a
                href="#contact"
                className={`mt-6 inline-flex w-full items-center justify-center rounded-xl px-4 py-3 text-sm font-semibold shadow-sm ${
                  p.highlight
                    ? "bg-indigo-600 text-white hover:bg-indigo-700"
                    : "bg-slate-900 text-white hover:bg-slate-800"
                }`}
              >
                {p.cta}
              </a>
              <p className="mt-3 text-xs text-slate-500">
                Tailored deliverables shared during the free consultation.
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

