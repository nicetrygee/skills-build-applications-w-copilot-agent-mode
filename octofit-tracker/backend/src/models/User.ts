import { Schema, model } from 'mongoose';

const userSchema = new Schema(
  {
    name: { type: String, required: true },
    email: { type: String, required: true, unique: true },
    age: { type: Number, min: 1 },
    fitnessLevel: { type: String, enum: ['Beginner', 'Intermediate', 'Advanced'], default: 'Beginner' },
    team: { type: String, default: '' },
    points: { type: Number, default: 0 },
    streak: { type: Number, default: 0 },
    preferredActivities: [{ type: String }],
  },
  { timestamps: true }
);

export const User = model('User', userSchema);
export default User;
