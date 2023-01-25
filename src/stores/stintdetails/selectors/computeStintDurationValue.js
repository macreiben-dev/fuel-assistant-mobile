import { padStart } from "./formating";

const DURATION_FORMAT_PADDING = 2;
const DURATION_FORMAT_CHARACTER = "0";
const SECONDS_IN_ONE_MINUTE = 60.0;

const computeStintDurationValue = (stintTotalTimeSeconds, stintPercent) => {
  const stintTimeRatioAsSeconds = stintTotalTimeSeconds * stintPercent;

  let minutesDigit = Math.trunc(
    stintTimeRatioAsSeconds / SECONDS_IN_ONE_MINUTE
  );

  let secondsDigit =
    stintTimeRatioAsSeconds - minutesDigit * SECONDS_IN_ONE_MINUTE;

  let minutesAsString = padStart(
    minutesDigit,
    DURATION_FORMAT_PADDING,
    DURATION_FORMAT_CHARACTER
  );

  let secondsAsString = padStart(
    Math.trunc(secondsDigit),
    DURATION_FORMAT_PADDING,
    DURATION_FORMAT_CHARACTER
  );

  let stintDuration = "00:" + minutesAsString + ":" + secondsAsString;

  return stintDuration;
};

export default computeStintDurationValue;
