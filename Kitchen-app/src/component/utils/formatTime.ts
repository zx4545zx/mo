export function formatTime(
  inputTimestamp: string,
  targetTimeZone: string
): string {
  const timestamp = new Date(inputTimestamp);
  if (isNaN(timestamp.getTime())) {
    return "Invalid Timestamp";
  }

  // Create a new Date object adjusted to the target time zone
  const targetTime = new Date(
    timestamp.toLocaleString("en-US", { timeZone: targetTimeZone })
  );

  const hours = targetTime.getUTCHours().toString().padStart(2, "0");
  const minutes = targetTime.getUTCMinutes().toString().padStart(2, "0");
  const seconds = targetTime.getUTCSeconds().toString().padStart(2, "0");

  return `${hours}:${minutes}:${seconds}`;
}
