import { Schema, model } from 'mongoose';

const teamSchema = new Schema(
  {
    name: { type: String, required: true, unique: true },
    captain: { type: String, required: true },
    members: [{ type: String }],
    totalPoints: { type: Number, default: 0 },
    goal: { type: String, default: '' },
  },
  { timestamps: true }
);

export const Team = model('Team', teamSchema);
export default Team;
