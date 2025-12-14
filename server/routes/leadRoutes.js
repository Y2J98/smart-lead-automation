import express from "express";
import axios from "axios";
import Lead from "../models/Lead.js";

const router = express.Router();

router.get("/", async (req, res) => {
  const { status } = req.query;

  const filter = status ? { status } : {};
  const leads = await Lead.find(filter).sort({ createdAt: -1 });

  res.json(leads);
});


router.post("/batch", async (req, res) => {
  try {
    const { names } = req.body; // ["Peter", "Aditi"]

    if (!Array.isArray(names)) {
      return res.status(400).json({ message: "Names must be an array" });
    }

    const results = await Promise.all(
      names.map(async (name) => {
        // avoid duplicate
        const existing = await Lead.findOne({ name });
        if (existing) return existing;

        const { data } = await axios.get(
          `https://api.nationalize.io?name=${name}`
        );

        const countryData = data.country[0];
        const probability = countryData?.probability || 0;
        const country = countryData?.country_id || "Unknown";

        const status = probability > 0.6 ? "Verified" : "To Check";

        const lead = await Lead.create({
          name,
          country,
          probability,
          status
        });

        return lead;
      })
    );

    res.json(results);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

export default router;
