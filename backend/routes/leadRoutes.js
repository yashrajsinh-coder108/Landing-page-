import express from "express";

const router = express.Router();

const LEADS_GOOGLE_SHEET_URL =
  process.env.LEADS_GOOGLE_SHEET_URL ||
  "https://script.google.com/macros/s/AKfycbzFjOuHgWOi-MAg_LkS5jjKHm8zQGhaxrsTGLRArnO3bYjtb8czQs8YTETxUluHJ08/exec";


router.post("/", async (req, res) => {
  try {
    const {
      name,
      businessName,
      phoneNumber,
      businessType,
      message = "",
      source = "default",
    } = req.body || {};

    if (!name || !businessName || !phoneNumber || !businessType) {
      return res.status(400).json({ ok: false, error: "Missing required fields" });
    }

    // Forward payload to Google Apps Script URL.
    const body = new URLSearchParams({
      name: String(name).trim(),
      businessName: String(businessName).trim(),
      phoneNumber: String(phoneNumber).trim(),
      businessType: String(businessType).trim(),
      message: String(message).trim(),
      source: String(source),
    });

    const r = await fetch(LEADS_GOOGLE_SHEET_URL, {
      method: "POST",
      headers: {
        "Content-Type": "application/x-www-form-urlencoded;charset=UTF-8",
      },
      body: body.toString(),
    });

    if (!r.ok) {
      const text = await r.text().catch(() => "");
      console.error("Google Sheets proxy failed:", r.status, text);
      return res.status(502).json({ ok: false, error: "Failed to store lead" });
    }

    return res.status(201).json({ ok: true });
  } catch (err) {
    console.error("Lead route error:", err);
    return res.status(500).json({ ok: false, error: "Server error" });
  }
});

export default router;

