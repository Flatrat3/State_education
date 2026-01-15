import questions from '../data/questions';

/**
 * simple seeded random number generator (Linear Congruential Generator)
 */
const seededRandom = (seed) => {
  const a = 1664525;
  const c = 1013904223;
  const m = 4294967296; // 2^32
  return (a * seed + c) % m;
}

/**
 * Selects a question based on the current date using a pseudo-random generator.
 * This ensures the selection appears random but is deterministic for the same day.
 * 
 * @returns {object} The question object for today.
 */
export const getDailyQuestion = () => {
  if (!questions || questions.length === 0) {
    return null;
  }

  // Get current date string components to form a seed
  const now = new Date();
  const year = now.getFullYear();
  const month = now.getMonth(); // 0-11
  const day = now.getDate();    // 1-31

  // Create a unique seed for the day (e.g., 20231024)
  // We add indices to ensure it changes every day
  const seed = year * 10000 + (month + 1) * 100 + day;

  // Use the seed to get a pseudo-random number
  const randomValue = seededRandom(seed);

  // Map the random value to an index
  const index = randomValue % questions.length;

  return questions[index];
};
