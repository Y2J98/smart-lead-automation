import cron from "node-cron";
import Lead from "../models/Lead.js";

cron.schedule("*/5 * * * *", async () => {
  console.log("⏳ Running sync job...");

  try {
    const leads = await Lead.find({ synced: false });

    if (leads.length === 0) {
      console.log("✅ No leads to sync");
      return;
    }

    for (const lead of leads) {
      // Simulate syncing to CRM
      console.log(`🔄 Syncing lead: ${lead.name}`);

      lead.synced = true;
      await lead.save();
    }

    console.log(`✅ Synced ${leads.length} leads`);
  } catch (error) {
    console.error("❌ Sync job failed", error.message);
  }
});
