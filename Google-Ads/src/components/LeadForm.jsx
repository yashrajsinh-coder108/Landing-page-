import React, { useMemo, useState } from "react";

const initialState = {
  name: "",
  businessName: "",
  phoneNumber: "",
  businessType: "",
  message: "",
};

// Backend endpoint (Node/Express) to store leads (e.g. MongoDB)
// Must include the backend origin; frontend runs on (often) 5173, backend on 5000.
const LEAD_ENDPOINT =
  import.meta?.env?.VITE_LEAD_ENDPOINT || "http://localhost:5001/api/leads";

export default function LeadForm({ variant = "default" }) {
  const [form, setForm] = useState(initialState);
  const [status, setStatus] = useState("idle");

  const submitLabel = useMemo(() => {
    if (variant === "sticky") return "Request Call";
    return "Send Request";
  }, [variant]);

  function onChange(e) {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));
  }

  async function onSubmit(e) {
    e.preventDefault();

    if (!form.name.trim() || !form.businessName.trim() || !form.phoneNumber.trim() || !form.businessType.trim()) {
      setStatus("error");
      return;
    }

    setStatus("loading");

    try {
      const payload = new URLSearchParams({
        name: form.name.trim(),
        businessName: form.businessName.trim(),
        phoneNumber: form.phoneNumber.trim(),
        businessType: form.businessType.trim(),
        message: form.message.trim(),
        source: variant,
      });

      const res = await fetch(LEAD_ENDPOINT, {
        method: "POST",
        headers: {
          "Content-Type": "application/x-www-form-urlencoded;charset=UTF-8",
        },
        body: payload.toString(),
      });

      if (!res.ok) throw new Error(`HTTP_${res.status}`);

      setStatus("sent");
      setForm(initialState);
    } catch (err) {
      console.error("Lead submit failed:", err);
      setStatus("error");
    }
  }

  return (
    <form onSubmit={onSubmit} className="grid gap-3">
      <div className="grid gap-3 sm:grid-cols-2">
        <label className="grid gap-1">
          <span className="text-xs font-bold text-slate-900">Name</span>
          <input
            name="name"
            value={form.name}
            onChange={onChange}
            placeholder="Your name"
            className="h-11 rounded-xl border border-slate-200 bg-white px-4 text-sm outline-none ring-indigo-500/0 focus:ring-2"
          />
        </label>

        <label className="grid gap-1">
          <span className="text-xs font-bold text-slate-900">Business Name</span>
          <input
            name="businessName"
            value={form.businessName}
            onChange={onChange}
            placeholder="Your business"
            className="h-11 rounded-xl border border-slate-200 bg-white px-4 text-sm outline-none ring-indigo-500/0 focus:ring-2"
          />
        </label>
      </div>

      <div className="grid gap-3 sm:grid-cols-2">
        <label className="grid gap-1">
          <span className="text-xs font-bold text-slate-900">Phone Number</span>
          <input
            name="phoneNumber"
            value={form.phoneNumber}
            onChange={onChange}
            placeholder="e.g. 7016651250"
            inputMode="tel"
            className="h-11 rounded-xl border border-slate-200 bg-white px-4 text-sm outline-none ring-indigo-500/0 focus:ring-2"
          />
        </label>

        <label className="grid gap-1">
          <span className="text-xs font-bold text-slate-900">Business Type</span>
          <input
            name="businessType"
            value={form.businessType}
            onChange={onChange}
            placeholder="Restaurant, Clinic, Gym, Hotel, Shop..."
            className="h-11 rounded-xl border border-slate-200 bg-white px-4 text-sm outline-none ring-indigo-500/0 focus:ring-2"
          />
        </label>
      </div>

      <label className="grid gap-1">
        <span className="text-xs font-bold text-slate-900">Message</span>
        <textarea
          name="message"
          value={form.message}
          onChange={onChange}
          placeholder="What result do you want most? More calls, more form leads, or better ROAS?"
          rows={4}
          className="rounded-xl border border-slate-200 bg-white px-4 py-3 text-sm outline-none ring-indigo-500/0 focus:ring-2"
        />
      </label>

      <button
        type="submit"
        disabled={status === "loading"}
        className="mt-1 inline-flex h-11 items-center justify-center rounded-xl bg-slate-900 px-5 text-sm font-semibold text-white shadow-sm hover:bg-slate-800 disabled:opacity-70"
      >
        {status === "loading" ? "Sending..." : submitLabel}
      </button>

      {status === "error" && (
        <p className="text-xs font-semibold text-red-600">Please check your details and try again.</p>
      )}
      {status === "sent" && (
        <p className="text-xs font-semibold text-emerald-600">
          Request sent! We’ll contact you shortly.
        </p>
      )}
    </form>
  );
}

