import mongoose from "mongoose";

const leadSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
      unique: true,
      trim: true
    },
    country: String,
    probability: Number,
    status: {
      type: String,
      enum: ["Verified", "To Check"],
      required: true
    },
    synced: {
      type: Boolean,
      default: false
    }
  },
  { timestamps: true }
);

export default mongoose.model("Lead", leadSchema);
