import React from "react";

export default function StickyCTA() {
  return (
    <div className="fixed inset-x-0 bottom-0 z-40 pointer-events-none">
      <div className="mx-auto max-w-6xl px-4 pb-4">
        <div className="pointer-events-auto flex items-center justify-between gap-3 rounded-2xl border border-slate-200 bg-white/90 backdrop-blur px-3 py-3 shadow-lg sm:px-4">
          <div className="min-w-0">
            <p className="truncate text-sm font-extrabold text-slate-950">Get more local calls & WhatsApp leads</p>
            <p className="truncate text-xs font-semibold text-slate-600">Free consultation • Conversion-focused plan</p>
          </div>
          <a
            href="#contact"
            className="inline-flex flex-shrink-0 items-center justify-center rounded-xl bg-slate-900 px-4 py-2 text-sm font-semibold text-white hover:bg-slate-800"
          >
            Book Free Call
          </a>
        </div>
      </div>
    </div>
  );
}

