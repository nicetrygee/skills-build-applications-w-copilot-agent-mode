import { Schema, model } from 'mongoose';

const activitySchema = new Schema(
  {
    userId: { type: String, required: true },
    type: { type: String, required: true },
    durationMinutes: { type: Number, default: 0 },
    distanceKm: { type: Number, default: 0 },
    caloriesBurned: { type: Number, default: 0 },
    date: { type: Date, default: Date.now },
  },
  { timestamps: true }
);

export const Activity = model('Activity', activitySchema);
export default Activity;
