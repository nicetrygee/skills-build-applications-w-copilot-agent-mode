import mongoose from 'mongoose';
import User from '../models/User.js';
import Team from '../models/Team.js';
import Activity from '../models/Activity.js';
import Workout from '../models/Workout.js';
import { sampleUsers, sampleTeams, sampleActivities, sampleWorkouts } from '../data/sampleData.js';

const connectionString = process.env.MONGODB_URI || 'mongodb://127.0.0.1:27017/octofit_db';

/**
 * Seed the octofit_db database with test data
 */
async function seedDatabase() {
  try {
    await mongoose.connect(connectionString);

    console.log('Connected to octofit_db');
    console.log('Seeding the octofit_db database with test data...\n');

    // Clear existing data
    await User.deleteMany({});
    await Team.deleteMany({});
    await Activity.deleteMany({});
    await Workout.deleteMany({});
    console.log('Cleared existing collections');

    // Seed Users
    const users = await User.insertMany(sampleUsers);
    console.log(`✓ Inserted ${users.length} users`);

    // Seed Teams
    const teams = await Team.insertMany(sampleTeams);
    console.log(`✓ Inserted ${teams.length} teams`);

    // Seed Activities
    const activities = await Activity.insertMany(sampleActivities);
    console.log(`✓ Inserted ${activities.length} activities`);

    // Seed Workouts
    const workouts = await Workout.insertMany(sampleWorkouts);
    console.log(`✓ Inserted ${workouts.length} workouts`);

    console.log('\n✅ Database seeding complete');

    // Verify data
    const userCount = await User.countDocuments();
    const teamCount = await Team.countDocuments();
    const activityCount = await Activity.countDocuments();
    const workoutCount = await Workout.countDocuments();

    console.log('\nVerification:');
    console.log(`  Users: ${userCount}`);
    console.log(`  Teams: ${teamCount}`);
    console.log(`  Activities: ${activityCount}`);
    console.log(`  Workouts: ${workoutCount}`);

    await mongoose.disconnect();
  } catch (error) {
    console.error('Error seeding database:', error);
    process.exit(1);
  }
}

seedDatabase();
