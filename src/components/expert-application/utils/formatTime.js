/**
 * Formats seconds into a MM:SS time string
 *
 * @param {number} seconds - The number of seconds to format
 * @returns {string} - The formatted time string (MM:SS)
 */
export const formatTime = (seconds) => {
  const mins = Math.floor(seconds / 60);
  const secs = seconds % 60;
  return `${mins}:${secs < 10 ? "0" : ""}${secs}`;
};
