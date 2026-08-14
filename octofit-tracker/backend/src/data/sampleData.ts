export const sampleUsers = [
  {
    name: 'Avery Johnson',
    email: 'avery@example.com',
    age: 16,
    fitnessLevel: 'Intermediate',
    team: 'Trailblazers',
    points: 980,
    streak: 9,
    preferredActivities: ['Running', 'Cycling'],
  },
  {
    name: 'Mia Chen',
    email: 'mia@example.com',
    age: 15,
    fitnessLevel: 'Beginner',
    team: 'Storm Squad',
    points: 845,
    streak: 6,
    preferredActivities: ['Walking', 'Yoga'],
  },
  {
    name: 'Leo Martinez',
    email: 'leo@example.com',
    age: 17,
    fitnessLevel: 'Advanced',
    team: 'Trailblazers',
    points: 1120,
    streak: 12,
    preferredActivities: ['Strength', 'HIIT'],
  },
];

export const sampleTeams = [
  {
    name: 'Trailblazers',
    captain: 'Leo Martinez',
    members: ['Avery Johnson', 'Leo Martinez'],
    totalPoints: 2100,
    goal: 'Improve endurance and team spirit',
  },
  {
    name: 'Storm Squad',
    captain: 'Mia Chen',
    members: ['Mia Chen'],
    totalPoints: 845,
    goal: 'Build consistency and healthy habits',
  },
];

export const sampleActivities = [
  {
    userId: 'Avery Johnson',
    type: 'Running',
    durationMinutes: 32,
    distanceKm: 5.2,
    caloriesBurned: 430,
    date: '2026-08-12',
  },
  {
    userId: 'Mia Chen',
    type: 'Walking',
    durationMinutes: 25,
    distanceKm: 3.1,
    caloriesBurned: 180,
    date: '2026-08-13',
  },
  {
    userId: 'Leo Martinez',
    type: 'Strength',
    durationMinutes: 45,
    distanceKm: 0,
    caloriesBurned: 510,
    date: '2026-08-11',
  },
];

export const sampleWorkouts = [
  {
    title: '5K Tempo Run',
    type: 'Running',
    durationMinutes: 30,
    difficulty: 'Intermediate',
    description: 'Steady-paced run with short bursts of speed.',
    focusArea: 'Cardio',
  },
  {
    title: 'Core and Mobility',
    type: 'Strength',
    durationMinutes: 20,
    difficulty: 'Beginner',
    description: 'Build core stability and improve flexibility.',
    focusArea: 'Recovery',
  },
  {
    title: 'Hill Intervals',
    type: 'Running',
    durationMinutes: 40,
    difficulty: 'Advanced',
    description: 'Structured hill repeats to build speed and power.',
    focusArea: 'Performance',
  },
];

export const sampleLeaderboard = [
  { name: 'Leo Martinez', team: 'Trailblazers', points: 1120 },
  { name: 'Avery Johnson', team: 'Trailblazers', points: 980 },
  { name: 'Mia Chen', team: 'Storm Squad', points: 845 },
];
