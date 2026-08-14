import { Router } from 'express';
import User from '../models/User.js';
import Team from '../models/Team.js';
import Activity from '../models/Activity.js';
import Workout from '../models/Workout.js';
import { sampleUsers, sampleTeams, sampleActivities, sampleWorkouts, sampleLeaderboard } from '../data/sampleData.js';

const router = Router();

router.get('/health', (req, res) => {
  res.json({ status: 'OK', timestamp: new Date().toISOString() });
});

router.get('/users', async (req, res) => {
  try {
    const users = await User.find();
    if (users.length === 0) {
      return res.json(sampleUsers);
    }
    return res.json(users);
  } catch (error) {
    return res.status(500).json({ message: 'Failed to fetch users', error });
  }
});

router.post('/users', async (req, res) => {
  try {
    const user = await User.create(req.body);
    return res.status(201).json(user);
  } catch (error) {
    return res.status(400).json({ message: 'Failed to create user', error });
  }
});

router.get('/teams', async (req, res) => {
  try {
    const teams = await Team.find();
    if (teams.length === 0) {
      return res.json(sampleTeams);
    }
    return res.json(teams);
  } catch (error) {
    return res.status(500).json({ message: 'Failed to fetch teams', error });
  }
});

router.post('/teams', async (req, res) => {
  try {
    const team = await Team.create(req.body);
    return res.status(201).json(team);
  } catch (error) {
    return res.status(400).json({ message: 'Failed to create team', error });
  }
});

router.get('/activities', async (req, res) => {
  try {
    const activities = await Activity.find();
    if (activities.length === 0) {
      return res.json(sampleActivities);
    }
    return res.json(activities);
  } catch (error) {
    return res.status(500).json({ message: 'Failed to fetch activities', error });
  }
});

router.post('/activities', async (req, res) => {
  try {
    const activity = await Activity.create(req.body);
    return res.status(201).json(activity);
  } catch (error) {
    return res.status(400).json({ message: 'Failed to create activity', error });
  }
});

router.get('/leaderboard', async (req, res) => {
  try {
    const leaderboard = await User.find().sort({ points: -1 }).limit(10);
    if (leaderboard.length === 0) {
      return res.json(sampleLeaderboard);
    }
    return res.json(
      leaderboard.map((user) => ({
        _id: String(user._id),
        userId: String(user._id),
        name: user.name,
        team: user.team,
        points: user.points,
      }))
    );
  } catch (error) {
    return res.status(500).json({ message: 'Failed to fetch leaderboard', error });
  }
});

router.get('/workouts', async (req, res) => {
  try {
    const workouts = await Workout.find();
    if (workouts.length === 0) {
      return res.json(sampleWorkouts);
    }
    return res.json(workouts);
  } catch (error) {
    return res.status(500).json({ message: 'Failed to fetch workouts', error });
  }
});

router.post('/workouts', async (req, res) => {
  try {
    const workout = await Workout.create(req.body);
    return res.status(201).json(workout);
  } catch (error) {
    return res.status(400).json({ message: 'Failed to create workout', error });
  }
});

export default router;
