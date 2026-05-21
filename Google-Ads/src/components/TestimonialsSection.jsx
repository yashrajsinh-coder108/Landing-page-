import React from "react";

const testimonials = [
  {
    name: "Sana K.",
    biz: "Family Restaurant",
    quote:
      "Within weeks we saw more real calls and WhatsApp messages. The Google Business Profile updates made us easier to find, and customers can contact us instantly on mobile.",
    rating: 5,
  },
  {
    name: "Mark D.",
    biz: "Boutique Hotel",
    quote:
      "The combination of the landing page, Google Ads, and tracking helped us understand which searches bring guests. Inquiries improved because the ad message matches the page.",
    rating: 5,
  },
  {
    name: "Ayesha R.",
    biz: "Local Clinic",
    quote:
      "We finally look professional online. Mobile visitors can call or WhatsApp right away, and our leads became more relevant compared to before.",
    rating: 5,
  },
  {
    name: "Daniel S.",
    biz: "Neighborhood Gym",
    quote:
      "Google Maps visibility improved and we started getting more nearby discovery. Our lead form conversions increased after CTA and tracking updates.",
    rating: 5,
  },
];

function Stars({ count }) {
  return (
    <div className="flex items-center gap-1" aria-label={`${count} out of 5 stars`}>
      {Array.from({ length: 5 }).map((_, i) => (
        <svg
          key={i}
          viewBox="0 0 24 24"
          className={`h-4 w-4 ${i < count ? "text-amber-400" : "text-amber-200"}`}
          fill="currentColor"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path d="M12 2l3.09 6.26L22 9.27l-5 4.87L18.18 22 12 18.77 5.82 22 7 14.14l-5-4.87 6.91-1.01L12 2z" />
        </svg>
      ))}
    </div>
  );
}


export default function TestimonialsSection() {
  return (
    <section className="bg-gradient-to-b from-slate-50 to-white">
      <div className="mx-auto max-w-6xl px-4 py-12 sm:py-16">
        <div>
          <h2 className="text-2xl font-extrabold text-slate-950 sm:text-3xl">
            Local businesses trust our lead system
          </h2>
          <p className="mt-2 text-slate-700">
            Real feedback from shops, restaurants, hotels, clinics, and local service businesses.
          </p>
        </div>

        <div className="mt-8 grid gap-4 md:grid-cols-2 lg:grid-cols-4">
          {testimonials.map((t) => (
            <div key={t.name} className="rounded-3xl border border-slate-200 bg-white p-5 shadow-sm">
              <Stars count={t.rating} />
              <p className="mt-4 text-sm leading-relaxed text-slate-700">“{t.quote}”</p>
              <div className="mt-5">
                <p className="text-sm font-bold text-slate-900">{t.name}</p>
                <p className="text-xs text-slate-500">{t.biz}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

