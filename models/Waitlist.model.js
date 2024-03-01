import mongoose, { Schema, model, models } from "mongoose";

const WaitlistSchema = new Schema(
  {
    email: {
      type: String,
      required: [true, "someone must own an address book"],
    },
  },
  {
    timestamps: true,
  }
);

WaitlistSchema.pre("save", async function (next) {
  console.log("testing save");

  next();
});

const Waitlist =
  models?.Waitlist || model("Waitlist", WaitlistSchema);

export default Waitlist;
