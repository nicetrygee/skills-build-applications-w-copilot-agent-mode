import { Schema, model } from 'mongoose';

const workoutSchema = new Schema(
  {
    title: { type: String, required: true },
    type: { type: String, required: true },
    durationMinutes: { type: Number, default: 0 },
    difficulty: { type: String, default: 'Beginner' },
    description: { type: String, default: '' },
    focusArea: { type: String, default: 'General Fitness' },
  },
  { timestamps: true }
);

export const Workout = model('Workout', workoutSchema);
export default Workout;
